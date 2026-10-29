import { ImageResponse } from 'next/og'

export const alt = 'Bienvinido James Publico — Full-Stack Developer, IT Tech Support, Open to Work'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          position: 'relative',
          background: 'linear-gradient(135deg, #0B1120 0%, #0F172A 55%, #1E1B4B 100%)',
          color: '#F8FAFC',
        }}
      >
        {/* ambient glows */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            left: -60,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%)',
            display: 'flex',
          }}
        />

        {/* top: availability badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 22px',
              borderRadius: 999,
              border: '1px solid rgba(148,163,184,0.35)',
              background: 'rgba(15,23,42,0.7)',
              color: '#CBD5E1',
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: '#22C55E',
                display: 'flex',
              }}
            />
            Available for opportunities
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 22px',
              borderRadius: 999,
              border: '1px solid rgba(59,130,246,0.5)',
              background: 'rgba(59,130,246,0.15)',
              color: '#93C5FD',
              fontSize: 24,
            }}
          >
            3 apps in production
          </div>
        </div>

        {/* middle: name + pitch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 18,
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: -2,
                whiteSpace: 'nowrap',
              }}
            >
              <span>Bienvinido James</span>
              <span style={{ color: '#60A5FA' }}>Publico</span>
            </div>
            <div style={{ display: 'flex', fontSize: 34, color: '#94A3B8' }}>
              Full-Stack Developer · IT Tech Support · Flutter
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              maxWidth: 1010,
              fontSize: 26,
              lineHeight: 1.45,
              color: '#CBD5E1',
            }}
          >
            Laravel, Rust, .NET and Flutter builds — from AI-powered platforms and an
            offline-first POS to a Windows diagnostic tool with a Rust backend.
          </div>
        </div>

        {/* bottom: stack + url */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Laravel 12', 'Rust / Tauri', 'Flutter', 'Supabase'].map((t) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  padding: '8px 16px',
                  borderRadius: 12,
                  border: '1px solid rgba(148,163,184,0.25)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#E2E8F0',
                  fontSize: 22,
                  whiteSpace: 'nowrap',
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #3B82F6 0%, #A855F7 100%)',
              color: '#FFFFFF',
              fontSize: 24,
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            bjp-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
