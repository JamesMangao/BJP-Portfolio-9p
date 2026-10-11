'use client'

import { useEffect } from 'react'

export function ReducedMotion() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPreference = () => {
      document.documentElement.style.setProperty(
        'scroll-behavior',
        mediaQuery.matches ? 'auto' : 'smooth',
      )
    }
    applyPreference()
    mediaQuery.addEventListener('change', applyPreference)
    return () => mediaQuery.removeEventListener('change', applyPreference)
  }, [])

  return null
}
