'use client'

import { useSyncExternalStore } from 'react'
import { QRCodeSVG } from 'qrcode.react'

// The current URL only exists in the browser: the server snapshot stays empty,
// so the server renders nothing and hydration never mismatches.
function subscribe() {
  return () => {}
}

function getClientUrl() {
  return window.location.href
}

function getServerUrl() {
  return ''
}

export function QRCode() {
  const url = useSyncExternalStore(subscribe, getClientUrl, getServerUrl)

  if (!url) return null

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-2xl border border-border bg-white p-3 shadow-lg">
        <QRCodeSVG
          value={url}
          size={120}
          level="M"
          includeMargin={false}
        />
      </div>
      <p className="text-xs text-muted-foreground text-center max-w-[140px]">
        Scan to view on mobile
      </p>
    </div>
  )
}
