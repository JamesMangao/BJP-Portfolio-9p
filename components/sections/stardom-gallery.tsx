'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SpotlightCard } from '@/components/spotlight-card'

const screenshotPaths = [
  '/projects/01-home.png',
  '/projects/02-marketplace.png',
  '/projects/03-catalog.png',
  '/projects/04-product.png',
  '/projects/05-popup-locations.png',
  '/projects/06-signin.png',
  '/projects/07-dashboard.png',
  '/projects/08-sales-reports.png',
  '/projects/09-products.png',
  '/projects/10-events.png',
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
              className="border-border/60 bg-slate-950/80"
              tilt={false}
            >
              <Image
                src={path}
                alt={screenshotAltTexts[index]}
                className="w-full h-48 object-cover rounded-lg transition-opacity duration-300 hover:opacity-90"
                loading="lazy"
                fill
              />
            </SpotlightCard>
          ))}
        </div>

        {/* Active slide indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {screenshotPaths.map((_, i) => (
            <div
              key={i}
              className={
                i === activeIndex
                  ? 'w-8 h-8 rounded-full border-brand-blue bg-brand-blue'
                  : 'w-8 h-8 rounded-full border-white/20 bg-transparent transition-colors cursor-pointer hover:border-brand-blue/50'
              }
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}