'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const slides = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Warm glowing traditional diya oil lamp in darkness',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Sacred Havan fire ceremony glowing inside a traditional hall',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Traditional Agnihotra fire ritual with brass vessels and marigold flowers',
  },
  {
    src: '/images/hero-4.jpg',
    alt: 'Arya Dewaker Arya Samaj temple with Om emblem and Vedic inscriptions',
  },
]

export function HeroSlider() {
  const { lang, t } = useLanguage()
  const prefersReduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (paused || prefersReduced) return
    const id = window.setInterval(next, 6500)
    return () => window.clearInterval(id)
  }, [paused, prefersReduced, next])

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-media">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero-slide${index === active ? ' is-active' : ''}`}
            aria-hidden={index !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      <div className="wrap hero-content">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-om-row">
            <span className="hero-om" aria-hidden="true">
              ॐ
            </span>
            <p className="eyebrow light">
              {t.hero.eyebrow} <span />
            </p>
          </div>

          <p className="hero-shloka" lang="sa">
            {t.hero.shloka}
          </p>

          <h1 id="hero-heading">
            {t.hero.titleStart}
            <br />
            <em>{t.hero.titleEm}</em>
          </h1>

          <p className="hero-copy">{t.hero.copy}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#live">
              <Play size={15} aria-hidden="true" /> {t.hero.ctaLive}
            </a>
            <a className="btn btn-ghost" href="#about">
              {t.hero.ctaMission} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
