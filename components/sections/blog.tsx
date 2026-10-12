'use client'

import { Reveal, SectionHeading } from '@/components/reveal'
import { Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 'pcfixai-rust',
    title: 'How I Built PCFixAI: A Rust-Powered Windows Diagnostic Tool',
    excerpt: 'Lessons from building a fully offline AI-powered desktop app with Tauri 2, Rust, and React — from parallel diagnostics to safe auto-fix agents.',
    date: 'August 2026',
    readTime: '8 min read',
    tags: ['Rust', 'Tauri', 'Desktop Dev'],
    image: '/projects/pcfixai.png',
  },
  {
    id: 'stardom-ecommerce',
    title: 'Building a 33-Page E-Commerce Platform with ASP.NET Web Forms',
    excerpt: 'How I architected a full artisan marketplace with two-step payment verification, commission pipelines, and a complete merchant studio.',
    date: 'July 2026',
    readTime: '10 min read',
    tags: ['ASP.NET', 'VB.NET', 'PostgreSQL'],
    image: '/projects/STARDOM.png',
  },
  {
    id: 'lifevault-ai',
    title: 'Integrating Multiple AI Providers in a Laravel App',
    excerpt: 'How I routed AI requests to Groq, Cerebras, and OpenRouter based on task type — and built a journaling platform that turns reflections into insights.',
    date: 'June 2026',
    readTime: '6 min read',
    tags: ['Laravel', 'AI', 'REST APIs'],
    image: '/projects/lifevault-landing.png',
  },
]

export function Blog() {
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
            <Reveal key={post.id} delay={i * 0.1}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10">
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-blue">
                    Read more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
