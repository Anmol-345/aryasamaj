'use client'

import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import servicesData from '@/content/services.json'
import { useLanguage } from '@/lib/i18n'
import { ServiceCard } from './service-card'
import { EnquiryModal } from './enquiry-modal'

export function ServicesSection() {
  const { t } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCeremony, setSelectedCeremony] = useState('Havan & Vedic rituals')

  const openEnquiry = (ceremony: string) => {
    setSelectedCeremony(ceremony)
    setModalOpen(true)
  }

  return (
    <section className="services section-wrap" id="services" aria-labelledby="services-heading">
      <div className="section-heading service-heading">
        <div>
          <p className="eyebrow">
            {t.services.eyebrow} <span />
          </p>
          <h2 id="services-heading">
            {t.services.headingStart}
            <br />
            <em>{t.services.headingEm}</em>
          </h2>
        </div>
        <button
          type="button"
          className="under-link under-link-btn"
          onClick={() => openEnquiry('Havan & Vedic rituals')}
        >
          {t.services.ctaTop} <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="service-grid">
        {servicesData.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            onEnquire={openEnquiry}
          />
        ))}

        <div className="service-item service-cta-card">
          <div className="service-cta-inner">
            <span className="service-cta-num">06</span>
            <h3>Ask about a ceremony</h3>
            <p>
              Planning a Havan, Namkaran, Yagyopaveet, or Vedic marriage? Send an enquiry to
              coordinate dates and samagri with our Mandir team.
            </p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => openEnquiry('Havan & Vedic rituals')}
            >
              {t.services.enquire} <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        open={modalOpen}
        defaultCeremony={selectedCeremony}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
