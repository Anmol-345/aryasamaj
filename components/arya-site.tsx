import { SiteHeader } from './site-header'
import { HeroSlider } from './hero-slider'
import { PillarsSection } from './pillars-section'
import { AboutSection } from './about-section'
import { StatsSection } from './stats-section'
import { ServicesSection } from './services-section'
import { PrinciplesSection } from './principles-section'
import { CommunitySection } from './community-section'
import { FaqSection } from './faq-section'
import { ContactSection } from './contact-section'
import { SiteFooter } from './site-footer'

export function AryaSite() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSlider />
        <PillarsSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <PrinciplesSection />
        <CommunitySection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
