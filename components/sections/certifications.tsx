'use client'

import Image from 'next/image'
import { Reveal, SectionHeading } from '@/components/reveal'
import { ShieldCheck, Award, CalendarDays, Hash } from 'lucide-react'

const certifications = [
  {
    icon: ShieldCheck,
    name: 'IT Customer Support Basics',
    issuer: 'Cisco Networking Academy',
    date: 'July 2026',
    credentialId: '7580b32f-3d2e-436e-8235-c840a1ac8819',
    image: '/certifications/IT-Customer-Support-Basics_Certification.jpg',
  },
  {
    icon: Award,
    name: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    date: 'July 2026',
    credentialId: '74ce47a8-9757-450b-ab61-bf2c6dbc695a',
    image: '/certifications/Computer-Hardware-Basics_Certificate.jpg',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional credentials"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.1}>
              <div className="glass group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-brand-blue/40">
                <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-border">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <div className="glow-blue flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground">
                    <cert.icon className="size-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-blue">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 p-6 pt-0 sm:p-7 sm:pt-0">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90">
                    <CalendarDays className="size-3.5 text-brand-blue" />
                    {cert.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90">
                    <Hash className="size-3.5 text-brand-purple" />
                    <span className="truncate max-w-[180px]">{cert.credentialId}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
