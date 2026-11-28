'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const communityImages = [
  {
    image: '/images/community-gathers.jpg',
    alt: 'Community members gathered together for an evening satsang',
    label: 'A community that gathers',
  },
  {
    image: '/images/community-learning.jpg',
    alt: 'Students studying Vedic texts together in a Gurukul classroom',
    label: 'Learning, shared generously',
  },
  {
    image: '/images/community-service.jpg',
    alt: 'Devotees gathered in prayer and service at an ashram beneath the Om emblem',
    label: 'Service in everyday life',
  },
  {
    image: '/images/community-future.jpg',
    alt: 'Young Vedic student reading a scripture on a wooden bookstand',
    label: 'A future shaped by knowledge',
  },
]

export function CommunitySection() {
  const { t } = useLanguage()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => {
    setLightboxIndex((curr) =>
      curr === null ? null : (curr - 1 + communityImages.length) % communityImages.length,
    )
  }, [])
  const next = useCallback(() => {
    setLightboxIndex((curr) => (curr === null ? null : (curr + 1) % communityImages.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, close, prev, next])

  const activeItem = lightboxIndex !== null ? communityImages[lightboxIndex] : null

  return (
    <section className="community" id="community" aria-labelledby="community-heading">
      <div className="section-wrap">
        <div className="community-top-header">
          <div>
            <p className="eyebrow light">
              {t.community.eyebrow} <span />
            </p>
            <h2 id="community-heading">
              {t.community.headingStart} <em>{t.community.headingEm}</em>
            </h2>
          </div>
          <div className="community-top-aside">
            <p>{t.community.copy}</p>
            <a className="text-link light-link" href="#contact">
              {t.community.cta} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="community-mosaic">
          {communityImages.map((item, i) => (
            <figure
              className={`community-tile${i === 0 ? ' is-featured' : ''}`}
              key={item.image}
            >
              <button
                type="button"
                className="community-trigger"
                aria-label={`View photo: ${item.label}`}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={i === 0 ? '(max-width: 680px) 100vw, 60vw' : '(max-width: 680px) 100vw, 30vw'}
                  loading="lazy"
                />
                <figcaption>
                  <span>0{i + 1}</span>
                  {item.label}
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {activeItem && lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.label}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close gallery viewer"
            onClick={close}
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="lightbox-arrow lightbox-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-wrap">
              <Image src={activeItem.image} alt={activeItem.alt} fill sizes="90vw" priority />
            </div>
            <p className="lightbox-caption">
              <span>
                0{lightboxIndex + 1} / 0{communityImages.length}
              </span>
              {activeItem.label}
            </p>
          </div>

          <button
            type="button"
            className="lightbox-arrow lightbox-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
