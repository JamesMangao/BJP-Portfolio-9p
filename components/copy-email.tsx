'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useToast } from '@/components/toast'

export function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const { showToast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('publicojamesmangao25@gmail.com')
      setCopied(true)
      showToast('Email copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      showToast('Failed to copy email', 'error')
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
    >
      {copied ? (
        <>
          <Check className="size-4 text-green-400" />
          <span className="text-green-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="size-4" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  )
}
