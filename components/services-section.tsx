import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'service-havan',
    title: 'Havan & Vedic rituals',
    text: 'Gather in prayer, reflection, and the sacred practice of Havan.',
    image: '/images/service-havan.jpg',
    alt: 'Devotees in traditional attire gathered around a sacred Havan kund',
  },
  {
    id: 'service-sanskar',
    title: 'Vedic sanskar',
    text: 'Mark life’s milestones through thoughtful, meaningful Vedic ceremonies.',
    image: '/images/service-sanskar.jpg',
    alt: 'Elder guiding a young man during a traditional Yagyopaveet sanskar ceremony',
  },
  {
    id: 'service-marriage',
    title: 'Vedic marriage',
    text: 'Begin a lifelong journey rooted in commitment, values, and tradition.',
    image: '/images/service-marriage.jpg',
    alt: 'Vedic Saptapadi marriage ceremony beside the sacred Agni Yajna fire',
  },
  {
    id: 'service-education',
    title: 'Education & guidance',
    text: 'Explore Vedic wisdom, personal growth, and lifelong learning.',
    image: '/images/service-education.jpg',
    alt: 'Ancient Rigveda manuscript written in Devanagari script',
  },
  {
    id: 'service-satsang',
    title: 'Weekly Satsang & prayer',
    text: 'Join communal chanting, Vedic discourse, and fellowship.',
    image: '/images/community-gathers.jpg',
    alt: 'Community members gathered together for an evening satsang',
  },
]

export function ServicesSection() {
  return (
    <section className="services section-wrap" id="services" aria-labelledby="services-heading">
      <div className="section-heading service-heading">
        <div>
          <p className="eyebrow">
            PRACTICE &amp; PARTICIPATION <span />
          </p>
          <h2 id="services-heading">
            Traditions that give
            <br />
            <em>life meaning.</em>
          </h2>
        </div>
        <a className="under-link" href="#contact">
          Ask about a ceremony <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="service-grid">
        {services.map((service, i) => (
          <a className="service-item" id={service.id} href="#contact" key={service.title}>
            <div className="service-photo">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
                loading="lazy"
              />
              <span className="service-index">0{i + 1}</span>
              <span className="service-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="service-meta">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </a>
        ))}

        <a className="service-item service-cta-card" href="#contact">
          <div className="service-cta-inner">
            <span className="service-cta-num">06</span>
            <h3>Ask about a ceremony</h3>
            <p>
              Planning a Havan, Namkaran, Yagyopaveet, or Vedic marriage? Connect with our team to
              arrange a ceremony or visit.
            </p>
            <span className="service-cta-link">
              Get in touch <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
