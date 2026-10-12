'use client'

import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export function QRCode() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

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
