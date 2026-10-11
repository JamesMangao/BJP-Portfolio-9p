'use client'

import { useEffect } from 'react'

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'it-support', 'certifications', 'education', 'contact']

export function KeyboardNav() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.key === '/') {
        e.preventDefault()
        const searchInput = document.querySelector<HTMLInputElement>('input[type="search"]')
        searchInput?.focus()
        return
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        const currentIndex = sectionIds.findIndex(id => {
          const el = document.getElementById(id)
          if (!el) return false
          const rect = el.getBoundingClientRect()
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
        })
        if (currentIndex === -1) return
        const nextIndex = e.key === 'ArrowDown'
          ? Math.min(currentIndex + 1, sectionIds.length - 1)
          : Math.max(currentIndex - 1, 0)
        document.getElementById(sectionIds[nextIndex])?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return null
}
