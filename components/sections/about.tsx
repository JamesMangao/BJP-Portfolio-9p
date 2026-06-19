'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { Code2, Database, Sparkles } from 'lucide-react'

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
    text: 'Integrating multiple AI providers (OpenRouter, Groq, Cerebras) to surface meaningful insights from user data.',
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
                BS Information Technology graduate from{' '}
                <span className="font-medium text-foreground">
                  Lyceum of San Pedro (May 2026)
                </span>
                , with hands-on experience building and deploying full-stack web applications using Laravel, PHP, MySQL, Firebase, and Tailwind CSS.
              </p>
              <p>
                Led development of an AI-powered journaling platform as the primary developer on a{' '}
                <span className="font-medium text-foreground">3-person team</span> — from architecture and database design through Railway deployment.
              </p>
              <p>
                Currently building a second full-stack{' '}
                <span className="gradient-text font-semibold">Laravel application</span>{' '}
                for a real client.
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
