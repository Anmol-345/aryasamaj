'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export type ServiceItem = {
  id: string
  title: string
  titleHi: string
  text: string
  expect: string
  image: string
  alt: string
}

export function ServiceCard({
  service,
  index,
  onEnquire,
}: {
  service: ServiceItem
  index: number
  onEnquire: (title: string) => void
}) {
  const { lang, t } = useLanguage()

  return (
    <article className="service-item" id={service.id}>
      <div className="service-photo">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
          loading="lazy"
        />
        <span className="service-index">0{index + 1}</span>
      </div>
      <div className="service-meta">
        <h3>{lang === 'hi' ? service.titleHi : service.title}</h3>
        <p>{service.text}</p>
        <p className="service-expect">{service.expect}</p>
        <button
          type="button"
          className="service-enquire-btn"
          onClick={() => onEnquire(service.title)}
        >
          {t.services.enquire} <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
