'use client'

type Particle = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  blue: boolean
}

/**
 * Deterministic particle field. A seeded PRNG instead of Math.random means the
 * server and the client render identical markup — no hydration mismatch, and no
 * setState inside an effect.
 */
function makeParticles(): Particle[] {
  let seed = 0x2f6e2b1
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  return Array.from({ length: 26 }, (_, i) => ({
    id: i,
    left: rand() * 100,
    size: rand() * 5 + 2,
    duration: rand() * 18 + 14,
    delay: rand() * -30,
    drift: rand() * 120 - 60,
    blue: rand() > 0.5,
  }))
}

const particles = makeParticles()

export function AnimatedBackground() {
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
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--drift': `${p.drift}px`,
              animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
