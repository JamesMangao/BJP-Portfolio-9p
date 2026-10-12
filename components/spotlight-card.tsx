'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type SpotlightCardProps = {
  children: React.ReactNode
  className?: string
  /** Enable subtle 3D tilt that follows the cursor. */
  tilt?: boolean
  /** Spotlight radius in pixels. */
  radius?: number
  /** Maximum tilt angle in degrees (when `tilt` is enabled). */
  maxTilt?: number
  /** Accent color of the spotlight glow. */
  glow?: string
}

/**
 * A premium card wrapper: subtle 3D tilt + a cursor-tracking spotlight glow.
 * The glow is drawn above the content but is fully transparent to pointer
 * events, so links and buttons inside keep working normally.
 */
export function SpotlightCard({
  children,
  className,
  tilt = true,
  radius = 380,
  maxTilt = 6,
  glow = 'color-mix(in oklch, var(--brand-blue) 22%, transparent)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
  )
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = event.clientX - rect.left
    const py = event.clientY - rect.top

    setSpotlight({ x: px, y: py, visible: true })

    if (tilt) {
      const rotateX = (py / rect.height - 0.5) * -maxTilt
      const rotateY = (px / rect.width - 0.5) * maxTilt
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      )
    }
  }

  function handleMouseLeave() {
    setSpotlight((prev) => ({ ...prev, visible: false }))
    if (tilt) {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative', className)}
      style={{ transform, transition: 'transform 0.18s ease-out' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(${radius}px circle at ${spotlight.x}px ${spotlight.y}px, ${glow}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  )
}
