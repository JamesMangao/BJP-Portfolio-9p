'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { LayoutGrid } from 'lucide-react'

const filterCategories = ['All', 'Laravel', 'React', 'Rust', 'Flutter', '.NET']

type ProjectFilterProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Reveal delay={0.2}>
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        <div className="flex items-center gap-2 mr-2 text-muted-foreground">
          <LayoutGrid className="size-4" />
          <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline">Filter:</span>
        </div>
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              onFilterChange(cat)
              setIsOpen(false)
            }}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              activeFilter === cat
                ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-lg shadow-brand-blue/20'
                : 'border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-brand-blue/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </Reveal>
  )
}
