'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
  Star,
  Sparkles,
  X,
  Upload,
  Monitor,
} from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal, SectionHeading } from '@/components/reveal'
import { cn } from '@/lib/utils'

const displayFeatures = [
  'Resume Analyzer',
  'LifeStory Generator',
  'Shadow Self Analyzer',
  'Holistic Career Advisor',
  'AI Chatbot',
  'Authentication System',
  'Dashboard Analytics',
]

type LifeVaultCard = {
  id: string
  number: string
  title: string
  image: string
  description: string
  url: string
}

const lifeVaultCards: LifeVaultCard[] = [
  {
    id: 'landing',
    number: '01',
    title: 'Landing',
    image: '/projects/lifevault-landing.png',
    description: 'A beautifully crafted entry portal highlighting LifeVault\'s journaling tools and psychological insight generator.',
    url: 'https://github.com/JamesMangao/LifeVault',
  },
  {
    id: 'dashboard',
    number: '02',
    title: 'Dashboard',
    image: '/projects/lifevault-dashboard.png',
    description: 'An interactive center console illustrating analytics, journal volume trends, and emotional timelines.',
    url: 'https://github.com/JamesMangao/LifeVault',
  },
  {
    id: 'resume',
    number: '03',
    title: 'Resume Analyzer',
    image: '/projects/lifevault-ai.png',
    description: 'Intelligent resume analysis engine offering automated improvements, score updates, and content suggestions.',
    url: 'https://github.com/JamesMangao/LifeVault',
  },
  {
    id: 'shadow',
    number: '04',
    title: 'Shadow Self',
    image: '/projects/lifevault-shadow.png',
    description: 'A cognitive processing tool translating daily logs into key patterns about the user\'s subconscious shadow self.',
    url: 'https://github.com/JamesMangao/LifeVault',
  },
  {
    id: 'career',
    number: '05',
    title: 'Career Advisor',
    image: '/projects/lifevault-career.png',
    description: 'Holistic career path simulator that reviews profiles and guides users through custom educational milestones.',
    url: 'https://github.com/JamesMangao/LifeVault',
  },
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

export function Projects() {
  const [selectedCard, setSelectedCard] = useState<LifeVaultCard>(lifeVaultCards[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

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
    <section id="projects" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="From AI-powered platforms to full parish management systems — here is a selection of my work."
        />

        {/* Featured: LifeVault */}
        <Reveal>
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 p-6 sm:p-8 lg:p-12 shadow-2xl">
            {/* Ambient glows inside container */}
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
              {/* Left Column: LifeVault Details */}
              <div className="lg:col-span-5 flex flex-col">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Sparkles className="size-3" />
                    Flagship Project
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-white">
                  LifeVault
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  An AI-powered journaling platform that transforms personal journals
                  into meaningful insights using multiple AI-assisted tools.
                </p>

                {/* Features list matching mock layout */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Features
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {displayFeatures.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-white/10 hover:bg-white/10"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack & Role Side by Side */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Stack
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-white/90 leading-relaxed">
                      Laravel 12 &middot; PHP &middot; MySQL &middot; Firebase &middot; JavaScript &middot; Tailwind CSS &middot; Alpine.js
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Role
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-white/90 leading-relaxed">
                      Lead Developer (Team of 3)
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/JamesMangao/LifeVault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/30"
                  >
                    <ExternalLink className="size-4" />
                    View on GitHub
                  </a>
                  <a
                    href="https://lifevault-182e.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:border-white/20"
                  >
                    <ExternalLink className="size-4" />
                    Live Website
                  </a>
                </div>
              </div>

              {/* Right Column: 5-Card Grid layout */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {/* Column 1: Cards 01, 03, 05 */}
                  <div className="flex flex-col gap-4 lg:gap-6">
                    {lifeVaultCards.filter((_, idx) => idx % 2 === 0).map((card) => (
                      <div
                        key={card.id}
                        onClick={() => { setSelectedCard(card); setIsModalOpen(true); }}
                        className={cn(
                          "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 h-36 sm:h-44 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/60 shadow-lg",
                          card.id === selectedCard.id && "border-brand-blue ring-1 ring-brand-blue"
                        )}
                      >
                        {/* Glow effect centered in the card */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                        {/* Card Number */}
                        <span className="relative z-10 text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2 group-hover:text-blue-400/60 transition-colors">
                          {card.number}
                        </span>

                        {/* Card Title */}
                        <h4 className="relative z-10 text-base sm:text-lg font-semibold tracking-wide text-white group-hover:text-blue-400 transition-colors">
                          {card.title}
                        </h4>
                      </div>
                    ))}
                  </div>

                  {/* Column 2: Cards 02, 04 (staggered down on larger screens) */}
                  <div className="flex flex-col gap-4 lg:gap-6 lg:pt-8">
                    {lifeVaultCards.filter((_, idx) => idx % 2 !== 0).map((card) => (
                      <div
                        key={card.id}
                        onClick={() => { setSelectedCard(card); setIsModalOpen(true); }}
                        className={cn(
                          "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 h-36 sm:h-44 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/60 shadow-lg",
                          card.id === selectedCard.id && "border-brand-blue ring-1 ring-brand-blue"
                        )}
                      >
                        {/* Glow effect centered in the card */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                        {/* Card Number */}
                        <span className="relative z-10 text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2 group-hover:text-blue-400/60 transition-colors">
                          {card.number}
                        </span>

                        {/* Card Title */}
                        <h4 className="relative z-10 text-base sm:text-lg font-semibold tracking-wide text-white group-hover:text-blue-400 transition-colors">
                          {card.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCard && (
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
                className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#070b19] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Browser Topbar Mockup */}
                <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/60 px-4 py-3">
                  {/* Mac control dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* URL Bar */}
                  <div className="hidden sm:flex items-center gap-2 rounded-md bg-slate-950/60 px-3 py-1.5 text-xs text-muted-foreground w-72 md:w-96 justify-center border border-white/5 font-mono select-none">
                    <span className="text-white/20">https://</span>
                    <span className="text-white/60">lifevault.app/</span>
                    <span className="text-blue-400">{selectedCard.id}</span>
                  </div>

                  {/* Close button */}
                  <button
                    type="button"
                    aria-label="Close dialog"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg p-1 text-muted-foreground hover:bg-white/5 hover:text-white transition-all"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Modal Content Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center p-1 sm:p-2">
                  {!imageErrors[selectedCard.id] ? (
                    <Image
                      src={selectedCard.image}
                      alt={`${selectedCard.title} Screenshot Preview`}
                      fill
                      sizes="(max-width: 1200px) 100vw, 90vw"
                      className="object-contain"
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [selectedCard.id]: true }))
                      }
                      priority
                    />
                  ) : (
                    /* Fallback Setup Screen when image does not exist yet */
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-grid">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />

                      <div className="relative z-10 max-w-md flex flex-col items-center">
                        <div className="mb-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-blue-400 shadow-inner">
                          <Upload className="size-8 animate-pulse" />
                        </div>
                        <h4 className="text-lg font-bold text-white tracking-wide">
                          {selectedCard.title} Preview Pending
                        </h4>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {selectedCard.description}
                        </p>
                        <div className="mt-6 rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 text-xs text-yellow-200/90 font-mono text-left w-full">
                          <p className="text-yellow-400 font-semibold mb-1">&#x26A0;&#xFE0F; Setup Required:</p>
                          <p>Place your screenshot file at:</p>
                          <p className="mt-1 text-white select-all bg-black/40 px-2 py-1 rounded border border-white/5 break-all">
                            public/projects/lifevault-{selectedCard.id}.png
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


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
                    EcoCycle: Smart Recycling Reward System
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Full-stack capstone project — Flutter mobile app (Android Studio) for end users with reward tracking, Laravel/PHP web admin dashboard, and IoT integration with a smart recycling bin enabling real-time data exchange between hardware and app.
                </p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {['Flutter', 'Android Studio', 'Laravel', 'PHP', 'MySQL', 'IoT'].map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span>{' '}
                    Full-Stack & Mobile Developer
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.24}>
            <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
                <Image
                  src="/projects/pcfixai.png"
                  alt="PCFixAI desktop application interface"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 p-2 text-brand-blue">
                    <Monitor className="size-4" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">PCFixAI</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fully offline AI-powered Windows desktop app that diagnoses and auto-repairs common PC issues in one click. Rust backend using Win32 API (windows-rs) for real diagnostics, 12-tab toolkit with 30+ system tools, optional local AI via Ollama with offline fallback. Deployed at v1.2.0, June 2026.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {['One-Click Scan', 'Auto-Fix Agent', 'Rust + Win32 API Backend', 'Live System Metrics', 'AI via Ollama', 'Chat Assistant', 'System Restore', 'Job History', 'Toolkit (30+ Tools)'].map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[11px] text-foreground/90"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {['Tauri 2', 'Rust', 'React 18', 'TypeScript', 'Windows API'].map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Role:</span>{' '}
                    Solo Developer
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/JamesMangao/PCFixAI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:bg-secondary/80 hover:scale-[1.02]"
                    >
                      <GithubIcon className="size-4" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
