'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { Code2, Database, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Laravel Expertise',
    text: 'My strongest skill set — building complete applications from planning and database design to deployment.',
  },
  {
    icon: Database,
    title: 'Backend Systems',
    text: 'Designing reliable data models, REST APIs, and maintainable server-side architecture.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Apps',
    text: 'Integrating modern AI APIs to turn raw data into meaningful, actionable insights.',
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
                I am a{' '}
                <span className="font-medium text-foreground">
                  BS Information Technology graduate
                </span>{' '}
                from Lyceum of San Pedro passionate about web development,
                backend systems, and AI-powered applications.
              </p>
              <p>
                My strongest expertise is{' '}
                <span className="font-medium text-foreground">
                  Laravel development
                </span>
                . I enjoy building complete web applications from planning and
                database design to deployment and maintenance.
              </p>
              <p>
                I independently developed{' '}
                <span className="gradient-text font-semibold">LifeVault</span>,
                an AI-powered journaling and productivity platform featuring
                AI-assisted resume analysis, career guidance, storytelling,
                behavioral pattern recognition, and a custom AI chatbot.
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
