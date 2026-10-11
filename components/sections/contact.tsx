'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/reveal'
import { Mail, Phone, ArrowUpRight, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'publicojamesmangao25@gmail.com',
    href: 'mailto:publicojamesmangao25@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '0992 233 6236',
    href: 'tel:+639922336236',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in/bienvinido-james-publico',
    href: 'https://www.linkedin.com/in/bienvinido-james-publico-2b703b38a',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/JamesMangao',
    href: 'https://github.com/JamesMangao',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:publicojamesmangao25@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm open to junior developer roles, IT tech support roles, and freelance opportunities. Reach out through any channel below."
        />

        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-purple/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-blue/20 blur-3xl" />

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.08}>
                    <motion.a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-brand-blue/40"
                    >
                      <div className="rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 p-3 text-brand-blue">
                        <c.icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="truncate text-sm font-medium text-foreground">
                          {c.value}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-blue" />
                    </motion.a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.15}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-blue/50 focus:outline-none focus:ring-1 focus:ring-brand-blue/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-blue/50 focus:outline-none focus:ring-1 focus:ring-brand-blue/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-blue/50 focus:outline-none focus:ring-1 focus:ring-brand-blue/50 resize-none"
                      placeholder="Tell me about the opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="glow-blue inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    <Send className="size-4" />
                    {status === 'sending' ? 'Opening Email...' : status === 'sent' ? 'Email Ready!' : 'Send Message'}
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
