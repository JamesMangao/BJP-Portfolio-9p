'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { Briefcase, Clock } from 'lucide-react'

const responsibilities = [
  'OS Installation',
  'Hardware Diagnostics',
  'PC Building',
  'Troubleshooting',
  'Technical Support',
]

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative pl-8 sm:pl-10">
          {/* Timeline line */}
          <span className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent sm:left-4" />

          <Reveal>
            <div className="relative">
              {/* Node */}
              <span className="glow-blue absolute -left-[1.35rem] top-1.5 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground sm:-left-[1.6rem]">
                <Briefcase className="size-3.5" />
              </span>

              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold">
                      Computer &amp; Laptop Technician Intern
                    </h3>
                    <p className="text-sm font-medium text-brand-blue">
                      Milestone Computers Laguna
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    500 Hours OJT
                  </span>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Responsibilities
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {responsibilities.map((r) => (
                    <span
                      key={r}
                      className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-foreground/90"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
