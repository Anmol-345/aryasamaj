'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import servicesData from '@/content/services.json'
import { useLanguage } from '@/lib/i18n'
import { ServiceCard } from './service-card'
import { EnquiryModal } from './enquiry-modal'

export function ServicesSection() {
  const { lang, t } = useLanguage()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCeremony, setSelectedCeremony] = useState(servicesData[0].title)

  const [featured, ...otherServices] = servicesData

  const openEnquiry = (ceremony: string) => {
    setSelectedCeremony(ceremony)
    setModalOpen(true)
  }

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">
            {t.services.eyebrow} <span />
          </p>
          <h2 id="services-heading">
            {t.services.headingStart} <em>{t.services.headingEm}</em>
          </h2>
          <button
            type="button"
            className="under-link"
            onClick={() => openEnquiry(featured.title)}
          >
            {t.services.ctaTop} <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <article className="service-featured-banner" id={featured.id}>
          <div className="service-featured-media">
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              loading="lazy"
            />
            <span className="service-index">01</span>
          </div>
          <div className="service-featured-copy">
            <span className="service-featured-label">
              {lang === 'hi' ? 'दैनिक एवं विशेष अनुष्ठान' : 'FLAGSHIP VEDIC CEREMONY'}
            </span>
            <h3>{lang === 'hi' ? featured.titleHi : featured.title}</h3>
            <p>{featured.text}</p>
            <p className="service-expect">{featured.expect}</p>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => openEnquiry(featured.title)}
            >
              {t.services.enquire} <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        </article>

        <div className="service-grid-four">
          {otherServices.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i + 1}
              onEnquire={openEnquiry}
            />
          ))}
        </div>

        <EnquiryModal
          open={modalOpen}
          defaultCeremony={selectedCeremony}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </section>
  )
}
