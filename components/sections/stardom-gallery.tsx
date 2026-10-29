'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SpotlightCard } from '@/components/spotlight-card'

const screenshotPaths = [
  '/projects/01-home.webp',
  '/projects/02-marketplace.webp',
  '/projects/03-catalog.webp',
  '/projects/04-product.webp',
  '/projects/05-popup-locations.webp',
  '/projects/06-signin.webp',
  '/projects/07-dashboard.webp',
  '/projects/08-sales-reports.webp',
  '/projects/09-products.webp',
  '/projects/10-events.webp',
]

const screenshotAltTexts = [
  'Home page',
  'Marketplace grid',
  'Product catalog',
  'Product detail page',
  'Pop-up locations',
  'Sign-in gate',
  'Merchant dashboard',
  'Sales reports',
  'Products management',
  'Event & booth manager',
]

export function StardomGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
          STAR-DOM Screenshot Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {screenshotPaths.map((path, index) => (
            <SpotlightCard
              key={index}
              className="border-border/60 bg-slate-950/80 overflow-hidden"
              tilt={false}
            >
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src={path}
                  alt={screenshotAltTexts[index]}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                {screenshotAltTexts[index]}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Active slide indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {screenshotPaths.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={
                i === activeIndex
                  ? 'w-2.5 h-2.5 rounded-full bg-brand-blue transition-all'
                  : 'w-2.5 h-2.5 rounded-full bg-white/20 transition-all cursor-pointer hover:bg-white/40'
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}