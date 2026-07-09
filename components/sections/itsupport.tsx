'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { Wrench, Users, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const entry1Bullets = [
  'Diagnosed and resolved 10+ hardware and software issues per week across desktop and laptop systems — including OS failures, driver conflicts, and application errors.',
  'Deployed, configured, and validated Windows OS installations, drivers, and software for client machines; assembled and performance-tested PC builds from components.',
  'Provided end-user technical support and clear troubleshooting guidance to non-technical clients, minimizing downtime and improving client satisfaction.',
  'Executed preventive maintenance schedules across managed devices, extending hardware lifespan and reducing recurring failures.',
]

const entry1Skills = [
  'Windows 10/11',
  'Hardware Diagnostics',
  'OS Installation',
  'Driver Configuration',
  'PC Assembly',
  'End-User Support',
  'Preventive Maintenance',
  'Technical Troubleshooting',
]

const entry2Bullets = [
  'Troubleshot and resolved Windows software, driver, and connectivity issues for family and friends on an ongoing basis.',
  'Performed OS reinstalls, hardware upgrades, and system cleanups on personal and household machines.',
  'Built PCFixAI — a fully offline AI-powered Windows diagnostic and auto-repair desktop app (Tauri/Rust/React) — as a direct result of hands-on Windows troubleshooting experience.',
]

const entry2Skills = [
  'Windows Troubleshooting',
  'System Cleanup',
  'OS Reinstall',
  'Hardware Upgrades',
  'Network Setup',
  'Router Configuration',
]

export function ITSupport() {
  return (
    <section id="it-support" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="IT Support"
          title="Hardware, software, and Windows systems support"
        />

        <div className="relative pl-8 sm:pl-10">
          {/* Timeline line */}
          <span className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent sm:left-4" />

          <div className="space-y-8">
            {/* Entry 1 — IT Technician Intern */}
            <Reveal>
              <div className="relative">
                <span className="glow-blue absolute -left-[1.35rem] top-1.5 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground sm:-left-[1.6rem]">
                  <Wrench className="size-3.5" />
                </span>

                <div className="glass rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold">
                        IT Technician Intern
                      </h3>
                      <p className="text-sm font-medium text-brand-blue">
                        Milestone Computers Laguna &bull; San Pedro, Laguna
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
                  <ul className="mt-3 list-disc list-outside pl-4 space-y-2.5 text-sm text-muted-foreground">
                    {entry1Bullets.map((r) => (
                      <li key={r} className="leading-relaxed">
                        <span className="text-foreground/90">{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry1Skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="rounded-md border-border text-[11px] text-foreground/90"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Entry 2 — Informal IT Support */}
            <Reveal delay={0.1}>
              <div className="relative">
                <span className="glow-blue absolute -left-[1.35rem] top-1.5 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground sm:-left-[1.6rem]">
                  <Users className="size-3.5" />
                </span>

                <div className="glass rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold">
                        Informal IT Support
                      </h3>
                      <p className="text-sm font-medium text-brand-blue">
                        Personal &amp; Family
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" />
                      Ongoing
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Responsibilities
                  </p>
                  <ul className="mt-3 list-disc list-outside pl-4 space-y-2.5 text-sm text-muted-foreground">
                    {entry2Bullets.map((r) => (
                      <li key={r} className="leading-relaxed">
                        <span className="text-foreground/90">{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry2Skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="rounded-md border-border text-[11px] text-foreground/90"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
