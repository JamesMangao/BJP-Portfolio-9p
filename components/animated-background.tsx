'use client'

import { useEffect, useState } from 'react'

type Particle = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  blue: boolean
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const next: Particle[] = Array.from({ length: 26 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 18 + 14,
      delay: Math.random() * -30,
      drift: Math.random() * 120 - 60,
      blue: Math.random() > 0.5,
    }))
    setParticles(next)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Grid texture */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Glowing gradient orbs */}
      <div className="absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-blue/20 blur-[120px]" />
      <div className="absolute right-[-15%] top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-blue/10 blur-[130px]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute bottom-[-10%] rounded-full ${
            p.blue ? 'bg-brand-blue/60' : 'bg-brand-purple/60'
          }`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            // @ts-expect-error custom prop
            '--drift': `${p.drift}px`,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
