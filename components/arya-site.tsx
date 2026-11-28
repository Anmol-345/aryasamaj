'use client'

import { LanguageProvider, useLanguage } from '@/lib/i18n'
import { SiteHeader } from './site-header'
import { HeroSlider } from './hero-slider'
import { LiveSection } from './live-section'
import { AboutSection } from './about-section'
import { PrinciplesSection } from './principles-section'
import { ServicesSection } from './services-section'
import { EventsSection } from './events-section'
import { CommunitySection } from './community-section'
import { FaqSection } from './faq-section'
import { ContactSection } from './contact-section'
import { SiteFooter } from './site-footer'
import { FloatingActions, MandalaDivider } from './motion-primitives'

function AryaSiteContent() {
  const { t } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipToContent}
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSlider />
        <LiveSection />
        <MandalaDivider />
        <AboutSection />
        <MandalaDivider />
        <PrinciplesSection />
        <MandalaDivider />
        <ServicesSection />
        <MandalaDivider />
        <EventsSection />
        <CommunitySection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  )
}

export function AryaSite() {
  return (
    <LanguageProvider>
      <AryaSiteContent />
    </LanguageProvider>
  )
}
