'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/reveal'
import { ShieldCheck, Award, Code2, CalendarDays, Hash, X, Search, ExternalLink } from 'lucide-react'

const certifications = [
  {
    icon: Code2,
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'July 2026',
    credentialId: 'ciaxynn',
    image: '/certifications/Responsive-Web-Design_Certification.png',
  },
  {
    icon: Code2,
    name: 'JavaScript',
    issuer: 'freeCodeCamp',
    date: 'July 2026',
    credentialId: 'ciaxynn',
    image: '/certifications/JavaScript_Certification.jpg',
  },
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
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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
              <div className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-brand-blue/40 cursor-pointer"
                   onClick={() => { setSelectedCert(cert); setIsModalOpen(true); }}>
                {/* Zoom icon overlay on hover */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <Search className="size-8 text-white/90 drop-shadow-lg" />
                </div>
                <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-border">
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                  {cert.credentialId.startsWith('http') ? (
                    <a
                      href={cert.credentialId}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90 hover:bg-secondary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="size-3.5 text-brand-purple" />
                      <span className="truncate max-w-[180px]">Verify Certificate ↗</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90">
                      <Hash className="size-3.5 text-brand-purple" />
                      <span className="truncate max-w-[180px]">{cert.credentialId}</span>
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#070b19] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                aria-label="Close certificate preview"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-20 rounded-lg p-1 text-muted-foreground hover:bg-white/5 hover:text-white transition-all"
              >
                <X className="size-5" />
              </button>

              {/* Certificate Image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={`${selectedCert.name} certificate`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8">
                <div className="glow-blue flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple text-primary-foreground">
                  <selectedCert.icon className="size-6" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                  {selectedCert.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-blue">
                  {selectedCert.issuer}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90">
                    <CalendarDays className="size-3.5 text-brand-blue" />
                    {selectedCert.date}
                  </span>
                  {selectedCert.credentialId.startsWith('http') ? (
                    <a
                      href={selectedCert.credentialId}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90 hover:bg-secondary transition-colors"
                    >
                      <ExternalLink className="size-3.5 text-brand-purple" />
                      <span className="truncate max-w-[240px]">Verify Certificate ↗</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90">
                      <Hash className="size-3.5 text-brand-purple" />
                      <span className="font-mono truncate max-w-[240px]">{selectedCert.credentialId}</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}