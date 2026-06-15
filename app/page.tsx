import { AnimatedBackground } from '@/components/animated-background'
import { Navbar } from '@/components/navbar'
import { HireMeButton } from '@/components/hire-me-button'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Contact } from '@/components/sections/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <HireMeButton />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
