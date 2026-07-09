'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { Code2, Database, Sparkles, Monitor } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Laravel Expertise',
    text: 'Building complete applications from planning and database design to deployment, applying MVC architecture, Eloquent ORM, and Blade templating.',
  },
  {
    icon: Database,
    title: 'Backend Systems',
    text: 'Designing reliable data models, RESTful APIs, and maintainable server-side architecture with role-based access control.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Apps',
    text: 'Integrating multiple AI providers (OpenRouter, Groq, Cerebras) in LifeVault to turn journal data into meaningful insights — each routed to the model best suited for the task.',
  },
  {
    icon: Monitor,
    title: 'Desktop Development',
    text: 'Building fully offline Windows apps with Tauri 2 (Rust) and React — systems-level work beyond the web stack, including Win32 API access via windows-rs and UAC privilege architecture.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who loves shipping complete products"
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="glass space-y-5 rounded-2xl p-7 leading-relaxed text-muted-foreground sm:p-9">
              <p>
                Recent BS Information Technology graduate from Lyceum of San Pedro with hands-on experience in full-stack web development (Laravel, PHP, MySQL), IT technical support (500-hour OJT at Milestone Computers Laguna), and mobile app development (Flutter/Android Studio). I build real, deployed projects — from AI-powered web platforms to Windows desktop diagnostic tools with a Rust backend. Certified by Cisco Networking Academy in IT Customer Support Basics and Computer Hardware Basics (July 2026). Open to IT Tech Support, Junior Developer, and Desktop Support roles.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-brand-blue/40">
                  <div className="rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 p-3 text-brand-blue">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
