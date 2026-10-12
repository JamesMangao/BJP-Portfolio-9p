'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border-2 transition-all duration-200 ease-out"
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          transform: 'translate(-50%, -50%)',
          borderColor: isHovering
            ? 'color-mix(in oklch, var(--brand-purple) 80%, transparent)'
            : 'color-mix(in oklch, var(--brand-blue) 60%, transparent)',
          backgroundColor: isHovering
            ? 'color-mix(in oklch, var(--brand-purple) 10%, transparent)'
            : 'color-mix(in oklch, var(--brand-blue) 5%, transparent)',
        }}
      />
      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-brand-blue transition-all duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          width: 6,
          height: 6,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
