'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { GraduationCap, Award, CalendarDays } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="glow-blue flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground">
                <GraduationCap className="size-7" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold">
                  Lyceum of San Pedro
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Bachelor of Science in Information Technology
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground/90">
                    <CalendarDays className="size-4 text-brand-blue" />
                    Graduation: May 2026
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground/90">
                    <Award className="size-4 text-brand-purple" />
                    Deportment Award
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
