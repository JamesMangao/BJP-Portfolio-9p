import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const KNOCK_API_KEY = process.env.KNOCK_API_KEY
const KNOCK_WORKFLOW = process.env.KNOCK_WORKFLOW || 'contact-form'
const KNOCK_RECIPIENT = process.env.KNOCK_RECIPIENT || 'contact-inbox'

const LIMITS = { name: 200, email: 320, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple per-IP throttle: 5 messages per 10 minutes (module-scoped, per isolate).
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key)
    }
  }
  return false
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()
  const honeypot = String(body.company ?? '').trim()

  // Honeypot: bots fill the hidden field, humans never see it.
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Please enter your name.'
  else if (name.length > LIMITS.name) errors.name = 'Name is too long.'
  if (!email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (!message) errors.message = 'Please enter a message.'
  else if (message.length > LIMITS.message) errors.message = 'Message is too long.'

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 })
  }

  if (!KNOCK_API_KEY) {
    return NextResponse.json(
      { error: 'Email delivery is not configured yet.' },
      { status: 503 },
    )
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages for now — please email me directly.' },
      { status: 429 },
    )
  }

  try {
    const res = await fetch(
      `https://api.knock.app/v1/workflows/${encodeURIComponent(KNOCK_WORKFLOW)}/trigger`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${KNOCK_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipients: [KNOCK_RECIPIENT],
          data: { name, email, message },
        }),
        cache: 'no-store',
      },
    )

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('Knock trigger failed', res.status, detail.slice(0, 500))
      return NextResponse.json(
        { error: 'Delivery failed. Please email me directly instead.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact trigger error', err)
    return NextResponse.json(
      { error: 'Delivery failed. Please email me directly instead.' },
      { status: 502 },
    )
  }
}
