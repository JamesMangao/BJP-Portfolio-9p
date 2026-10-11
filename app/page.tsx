import { AnimatedBackground } from '@/components/animated-background'
import { Navbar } from '@/components/navbar'
import { HireMeButton } from '@/components/hire-me-button'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { KeyboardNav } from '@/components/keyboard-nav'
import { ReducedMotion } from '@/components/reduced-motion'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { ITSupport } from '@/components/sections/itsupport'
import { Certifications } from '@/components/sections/certifications'
import { Education } from '@/components/sections/education'
import { Contact } from '@/components/sections/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <BackToTop />
      <KeyboardNav />
      <ReducedMotion />
      <Navbar />
      <HireMeButton />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ITSupport />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
