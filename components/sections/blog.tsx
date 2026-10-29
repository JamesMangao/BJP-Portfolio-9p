'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/reveal'
import { SpotlightCard } from '@/components/spotlight-card'
import { Clock, ArrowRight, X, Calendar, Tag, BookOpen, Share2, Check } from 'lucide-react'

const blogPosts = [
  {
    id: 'stardom-pos',
    title: 'How I Built an Offline-First POS That Keeps Selling Without Wi-Fi',
    excerpt: 'Building a booth point-of-sale for a real artisan pop-up: local-first SQLite compiled to WASM, background sync to Supabase, and a PWA that installs on an iPad with zero network.',
    date: 'October 2026',
    readTime: '7 min read',
    tags: ['Flutter', 'PWA', 'Offline-First'],
    image: '/projects/stardom-pos-desktop.webp',
    content: [
      'The brief was unforgiving: a real artisan pop-up booth needed to take payments at a weekend market, on an iPad 9th gen, where the Wi-Fi drops exactly when the queue forms. A cloud POS that shows a spinner during a rush is worse than no POS at all — so the whole app was designed local-first, with the network treated as an optional bonus rather than a requirement.',
      'Everything the booth sells lives in SQLite compiled to WebAssembly — drift running on sqlite3.wasm with a dedicated drift worker, all served same-origin. Products, cart and sales are written locally the moment they happen, so the app can boot, show the shelf and record a sale with the network switched off. The same rule applied to assets: CanvasKit, both fonts and the SQLite engine are bundled, so nothing is fetched from a CDN at runtime.',
      'Supabase is the source of truth rather than the live path. When the booth gets signal, the local ledger reconciles against Postgres, product images come from Supabase Storage, and the owner signs in through Supabase Auth. That split — fast local writes, eventual cloud truth — is what makes the thing usable at a market stall and still queryable afterwards for reports.',
      'One codebase had to feel native at three sizes, so the shell switches on canvas width: a bottom bar with 5 tabs under 600 pt, a 72 px icon rail for portrait tablets, and a 250 px rail with a two-pane Sell/cart split at 900 pt and up. Everything follows the booth rules I wrote into the design system — 48 pt minimum touch targets, no hover-only affordances, 16 px input text so iOS does not zoom, and safe-area insets for the standalone PWA.',
      'Receipts were the last hard problem. Without a Bluetooth printer or a paid Apple developer account, the 80 mm receipt is rendered as a PDF with the pdf package and handed to the iPad share sheet for AirPrint via printing. Delivery is a Cloudflare Pages upload of the built PWA, guarded by a build script that swaps in a custom service worker and exits non-zero if any secret leaks into the bundle — backed by 88 tests plus a Playwright offline-reload smoke test.',
    ],
  },
  {
    id: 'pcfixai-rust',
    title: 'How I Built PCFixAI: A Rust-Powered Windows Diagnostic Tool',
    excerpt: 'Lessons from building a fully offline AI-powered desktop app with Tauri 2, Rust, and React — from parallel diagnostics to safe auto-fix agents.',
    date: 'August 2026',
    readTime: '8 min read',
    tags: ['Rust', 'Tauri', 'Desktop Dev'],
    image: '/projects/pcfixai.webp',
    content: [
      'When I started PCFixAI, I wanted to build something that could genuinely help people fix their PCs without needing to be a tech expert. The goal was simple: one click, and the app diagnoses issues and offers to fix them safely.',
      'The biggest challenge was building a Rust backend that could interact with Windows system tools. Using Win32 API through windows-rs, I was able to access disk health, network diagnostics, CPU/memory stats, and startup programs — all in parallel using tokio::join! for ~60% faster scans.',
      'The auto-fix agent was the trickiest part. Early versions accidentally wiped startup entries due to a shell variable shadowing bug. I learned the hard way that any fix system needs to create backups before making changes. Now the agent backs up registry keys and startup items before removing anything.',
      'Adding AI chat via Ollama was another milestone. The app runs a local LLM model (llama3.2:3b) that can explain what each fix does in plain language — no internet required. If Ollama isn\u2019t available, a rule-based fallback handles common requests like "speed up my startup" or "fix my internet."',
      'The final app (v1.5.1) includes 40+ system tools across 10 tabs, virus scanning via Windows Defender integration, exportable HTML reports, and health history tracking. It\u2019s been a huge learning experience in systems programming, Rust safety, and building desktop UIs.',
    ],
  },
  {
    id: 'stardom-ecommerce',
    title: 'Building a 33-Page E-Commerce Platform with ASP.NET Web Forms',
    excerpt: 'How I architected a full artisan marketplace with two-step payment verification, commission pipelines, and a complete merchant studio.',
    date: 'July 2026',
    readTime: '10 min read',
    tags: ['ASP.NET', 'VB.NET', 'PostgreSQL'],
    image: '/projects/STARDOM.webp',
    content: [
      'STAR:DOM started as a school project but grew into a full-fledged e-commerce platform with 33 pages, covering everything from product browsing to commission management for custom artisan work.',
      'The biggest design challenge was the payment flow. Since J&T Express shipping fees can\u2019t be calculated until the parcel is weighed, I designed a two-step payment system: first the customer places an order (unpaid), then the studio quotes the shipping fee, and finally the customer pays via GCash or GOtyme e-wallet. This required a state machine for orders: PENDING → CONFIRMED → PAID → PROCESSING → SHIPPED → DELIVERED.',
      'Security was critical. I implemented CSRF protection on every form using a per-session token verified in Global.asax. Payment verification is password-gated behind the merchant dashboard, so a left-open browser session can\u2019t silently commit a customer\u2019s money.',
      'The commission pipeline was my favorite feature. Artists can set capacity limits, and the site enforces them — once an artist is at their limit, new requests are refused. The 5-step request wizard (describe → reference → sizing → budget → delivery) makes the process feel premium.',
      'All business data is stored in PostgreSQL with parameterized Npgsql calls — no ORM, no string-built queries. The app is deployed on Render via Docker with Mono/XSP4.',
    ],
  },
  {
    id: 'lifevault-ai',
    title: 'Integrating Multiple AI Providers in a Laravel App',
    excerpt: 'How I routed AI requests to Groq, Cerebras, and OpenRouter based on task type — and built a journaling platform that turns reflections into insights.',
    date: 'June 2026',
    readTime: '6 min read',
    tags: ['Laravel', 'AI', 'REST APIs'],
    image: '/projects/lifevault-landing.webp',
    content: [
      'LifeVault is an AI-powered journaling platform I built as the lead developer for our team\u2019s finals project. The idea was simple: write about your day, and AI helps you see patterns, improve your resume, and even understand your "shadow self."',
      'The technical challenge was integrating multiple AI providers — Groq for fast chat responses, Cerebras for longer analysis tasks, and OpenRouter for the Resume Analyzer (which uses Tesseract OCR + Poppler to extract text from PDFs). I built a routing layer that picks the best provider based on task type and response time requirements.',
      'Firebase handles authentication and data storage — Firestore for journals and user data, Realtime Database for live dashboard updates, and Storage for profile images. The Blade templates with Alpine.js make the UI reactive without a heavy frontend framework.',
      'The "Shadow Self" analyzer was the most interesting feature to build. It takes journal entries and uses AI to identify recurring patterns — things you write about frequently, emotional trends over time, and even contradictions between what you say and what you do.',
      'Building LifeVault taught me a lot about API integration, database design for real-time features, and the importance of fallback handling when AI services are rate-limited or unavailable.',
    ],
  },
]

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!isModalOpen) return

    const handleScroll = () => {
      const modal = document.getElementById('blog-modal-content')
      if (!modal) return
      const scrollTop = modal.scrollTop
      const scrollHeight = modal.scrollHeight - modal.clientHeight
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }

    const modal = document.getElementById('blog-modal-content')
    modal?.addEventListener('scroll', handleScroll)
    return () => modal?.removeEventListener('scroll', handleScroll)
  }, [isModalOpen])

  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  function openPost(post: typeof blogPosts[0]) {
    setCopied(false)
    setScrollProgress(0)
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  async function sharePost() {
    if (!selectedPost) return
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/#blog`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="blog" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Blog"
          title="Things I've written"
          description="Deep dives into my projects, lessons learned, and technical insights from building real-world applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1} className="h-full">
              <SpotlightCard
                tilt={false}
                className="glass group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10"
              >
                <div
                  onClick={() => openPost(post)}
                  data-cursor-hover
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {post.date}
                      </span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-brand-blue">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-blue">
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#070b19] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Reading Progress Bar */}
              <div className="absolute left-0 right-0 top-0 z-30 h-1 bg-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-purple"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              <div id="blog-modal-content" className="max-h-[90vh] overflow-y-auto">
                <div className="relative aspect-[16/7] w-full overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-[#070b19]/55 to-[#070b19]/10" />

                  {/* Actions */}
                  <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={sharePost}
                      aria-label="Copy link to post"
                      className="rounded-lg border border-white/10 bg-slate-900/70 p-1.5 text-muted-foreground backdrop-blur transition-all hover:bg-white/10 hover:text-white"
                    >
                      {copied ? <Check className="size-4 text-green-400" /> : <Share2 className="size-4" />}
                    </button>
                    <button
                      type="button"
                      aria-label="Close blog post"
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-lg border border-white/10 bg-slate-900/70 p-1.5 text-muted-foreground backdrop-blur transition-all hover:bg-white/10 hover:text-white"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-center gap-3 text-xs text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3" />
                        {selectedPost.date}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" />
                        {selectedPost.readTime}
                      </span>
                    </div>
                    <h2 className="mt-2 text-balance font-heading text-xl font-bold text-white sm:text-2xl">
                      {selectedPost.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/90"
                      >
                        <Tag className="size-3" />
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <BookOpen className="size-3.5" />
                      {selectedPost.content.length} sections
                    </span>
                  </div>

                  <div className="mt-7 space-y-5">
                    {selectedPost.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className={
                          i === 0
                            ? 'text-balance text-base leading-relaxed text-foreground/90'
                            : 'text-sm leading-relaxed text-muted-foreground'
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/5 pt-5">
                    <p className="text-xs text-muted-foreground">
                      Written by{' '}
                      <span className="font-medium text-foreground">
                        Bienvinido James Publico
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
