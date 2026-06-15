import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a href="#hero" className="font-heading text-lg font-bold">
            <span className="gradient-text">BJP</span>
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            Designed and Developed by BJP
          </p>
        </div>

        <div className="flex items-center gap-3">
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
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Bienvinido James Publico. All rights
        reserved.
      </p>
    </footer>
  )
}
