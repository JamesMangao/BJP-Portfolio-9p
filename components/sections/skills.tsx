'use client'

import { motion } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/reveal'
import {
  Layout,
  Server,
  Database,
  Terminal,
  Wrench,
  Boxes,
} from 'lucide-react'

const groups = [
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['PHP', 'Laravel 12'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MySQL', 'Firebase'],
  },
  {
    icon: Terminal,
    title: 'Programming',
    skills: ['Python', 'Java', 'C++'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['GitHub', 'Railway', 'VS Code'],
  },
  {
    icon: Boxes,
    title: 'Technologies',
    skills: ['REST APIs', 'AJAX', 'JSON', 'Tailwind CSS'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A versatile toolkit spanning frontend, backend, databases, and the tools that hold it all together."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass group h-full rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 p-2.5 text-brand-blue">
                    <group.icon className="size-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground/90 transition-colors group-hover:border-brand-blue/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
