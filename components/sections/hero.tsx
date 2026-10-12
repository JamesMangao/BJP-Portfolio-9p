import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ProjectFilter } from '@/components/sections/project-filter'
import { ResumeViewer } from '@/components/resume-viewer'
import { CopyEmail } from '@/components/copy-email'
import { AnimatedCounter } from '@/components/animated-counter'

const codeLines = [
  '$ php artisan serve',
  'INFO  Server running on [http://127.0.0.1:8000]',
  'Route::get("/portfolio", fn () => $developer);',
  'class Developer extends FullStack { use Laravel; }',
]

const achievements = [
  { icon: '🎓', label: 'BS IT Graduate', sub: 'Lyceum of San Pedro' },
  { icon: '💻', label: '5+ Full-Stack Apps', sub: 'Laravel, Rust, .NET, Flutter' },
  { icon: '🏆', label: 'Cisco Certified', sub: 'IT Support & Hardware' },
  { icon: '⏱️', label: '500+ OJT Hours', sub: 'Milestone Computers' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-in-up">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-blue" />
            </span>
            Available for opportunities
          </div>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up-delay">
            <span className="gradient-text">Bienvinido James Publico</span>
          </h1>

          <p className="mt-4 text-pretty text-lg font-medium text-foreground/90 sm:text-xl animate-fade-in-up">
            IT Graduate | Full-Stack Developer | IT Tech Support | Flutter | Open to Work
          </p>

          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground lg:mx-0 animate-fade-in-up">
            Building full-stack web and desktop applications with Laravel, Rust,
            TypeScript, React, Flutter, and AI-powered solutions. From artisan
            e-commerce platforms to offline Windows diagnostic tools.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start animate-fade-in-up">
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
            <ResumeViewer />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start animate-fade-in-up">
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
            <CopyEmail />
          </div>

          {/* Animated Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-in-up">
            <AnimatedCounter end={5} suffix="+" label="Full-Stack Apps" />
            <AnimatedCounter end={500} suffix="+" label="OJT Hours" />
            <AnimatedCounter end={6} label="Certifications" />
            <AnimatedCounter end={33} label="STAR-DOM Pages" />
          </div>
        </div>

        {/* Code-inspired visual */}
        <div className="relative mx-auto w-full max-w-md animate-fade-in-up">
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
                <p
                  key={line}
                  className="text-muted-foreground animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + i * 0.18}s` }}
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
                </p>
              ))}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-brand-purple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
