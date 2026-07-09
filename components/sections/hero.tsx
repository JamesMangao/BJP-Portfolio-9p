'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const codeLines = [
  '$ php artisan serve',
  'INFO  Server running on [http://127.0.0.1:8000]',
  'Route::get("/portfolio", fn () => $developer);',
  'class Developer extends FullStack { use Laravel; }',
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-blue" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Bienvinido James Publico</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-pretty text-lg font-medium text-foreground/90 sm:text-xl"
          >
            IT Graduate | Full-Stack Developer | IT Tech Support | Flutter | Open to Work
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground lg:mx-0"
          >
            Building full-stack web and mobile applications with Laravel, PHP,
            MySQL, JavaScript, Flutter, and AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="glow-blue group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card sm:w-auto"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="https://github.com/JamesMangao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-border bg-card/50 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bienvinido-james-publico-2b703b38a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-border bg-card/50 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href="mailto:publicojamesmangao25@gmail.com"
              aria-label="Email"
              className="rounded-lg border border-border bg-card/50 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </motion.div>
        </div>

        {/* Code-inspired visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/80" />
              <span className="size-3 rounded-full bg-chart-5" />
              <span className="size-3 rounded-full bg-brand-blue/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                developer.php
              </span>
            </div>
            <div className="space-y-3 p-5 font-mono text-xs sm:text-sm">
              {codeLines.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.18 }}
                  className="text-muted-foreground"
                >
                  <span className="mr-3 select-none text-foreground/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={
                      i === 0
                        ? 'text-brand-blue'
                        : i === 1
                          ? 'text-chart-3'
                          : 'text-foreground/80'
                    }
                  >
                    {line}
                  </span>
                </motion.p>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block h-4 w-2 translate-y-0.5 bg-brand-purple"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
