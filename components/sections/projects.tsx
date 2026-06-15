'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
  Star,
} from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal, SectionHeading } from '@/components/reveal'

const lifeVaultShots = [
  { src: '/projects/lifevault-dashboard.png', alt: 'LifeVault insights dashboard' },
  { src: '/projects/lifevault-ai.png', alt: 'LifeVault AI resume analyzer and chatbot' },
]

const lifeVaultFeatures = [
  'Resume Analyzer',
  'Shadow Self Analyzer',
  'Life Story Generator',
  'Holistic Career Advisor',
  'LifeVault AI Chatbot',
  'Journal System',
  'Tasks Management',
  'Goals Tracking',
  'Saved Items Vault',
  'Insights Dashboard',
  'Community Feed',
  'User Profiles',
  'Authentication System',
]

const parishFeatures = [
  'Home Page',
  'Mass Schedules',
  'Mass Intentions',
  'Inquiry System',
  'Inquiry Tracking',
  'Gallery',
  'Events',
  'Donations',
  'About Page',
  'Admin Dashboard',
  'Role-Based Access Control',
]

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-foreground/90">
      {label}
    </span>
  )
}

function Carousel() {
  const [index, setIndex] = useState(0)
  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + lifeVaultShots.length) % lifeVaultShots.length)

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-secondary/40">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={lifeVaultShots[index].src}
            alt={lifeVaultShots[index].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={() => go(-1)}
        className="glass absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-foreground transition-colors hover:text-brand-blue"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next screenshot"
        onClick={() => go(1)}
        className="glass absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-foreground transition-colors hover:text-brand-blue"
      >
        <ChevronRight className="size-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {lifeVaultShots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            aria-label={`Go to screenshot ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-brand-blue' : 'w-1.5 bg-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="From AI-powered platforms to full parish management systems — here is a selection of my work."
        />

        {/* Featured: LifeVault */}
        <Reveal>
          <article className="glass overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-5 sm:p-6">
                <Carousel />
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <Star className="size-3.5" />
                    Flagship Project
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
                  LifeVault
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  An AI-powered journaling and productivity platform designed to
                  transform user journals into meaningful insights.
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Key Features
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {lifeVaultFeatures.map((f) => (
                      <span
                        key={f}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-foreground/90"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Tech Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {['Laravel', 'PHP', 'MySQL', 'Firebase', 'JavaScript', 'HTML', 'CSS'].map(
                        (t) => (
                          <TechBadge key={t} label={t} />
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      AI Integrations
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {['OpenRouter API', 'Groq API', 'Cerebras API'].map((t) => (
                        <TechBadge key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Role:</span>{' '}
                  Full-Stack Developer (Solo Project)
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="glow-blue inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/JamesMangao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Secondary projects */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
                <Image
                  src="/projects/parish-website.png"
                  alt="Parish management website homepage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold">Parish Website</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Modern parish management and information website.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {parishFeatures.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11px] text-foreground/90"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Roles
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Super Admin', 'Parish Staff', 'SocCom'].map((r) => (
                      <TechBadge key={r} label={r} />
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {['Laravel', 'PHP', 'MySQL', 'JavaScript'].map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span>{' '}
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
                <Image
                  src="/projects/android-app.png"
                  alt="Android academic application mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 p-2 text-brand-blue">
                    <Smartphone className="size-4" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    Android Application
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Academic mobile application project focused on usability and
                  application logic.
                </p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {['Android', 'Java', 'Mobile UI'].map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span>{' '}
                    Mobile Developer
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
