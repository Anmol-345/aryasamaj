'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Calendar, Flame, Play, Sparkles } from 'lucide-react'
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

  const quickPillars = [
    {
      icon: Flame,
      href: '#live',
      label: lang === 'hi' ? 'दैनिक अग्निहोत्र' : 'Daily Agnihotra',
      sub: lang === 'hi' ? 'प्रातः ०७:०० बजे' : '07:00 AM IST Live',
    },
    {
      icon: BookOpen,
      href: '#principles',
      label: lang === 'hi' ? 'दस नियम' : 'Das Niyam',
      sub: lang === 'hi' ? 'आर्य समाज के १० सूत्र' : '10 Guiding Principles',
    },
    {
      icon: Sparkles,
      href: '#services',
      label: lang === 'hi' ? 'षोडश संस्कार' : 'Vedic Sanskars',
      sub: lang === 'hi' ? 'हवन, विवाह एवं विद्या' : 'Havan, Vivah & Vidya',
    },
    {
      icon: Calendar,
      href: '#events',
      label: lang === 'hi' ? 'रविवार महायज्ञ' : 'Sunday Satsang',
      sub: lang === 'hi' ? 'प्रातः ०८:३० बजे' : '08:30 AM IST Weekly',
    },
  ]

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

      <div className="wrap hero-inner-layout">
        <motion.div
          className="hero-content"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-crest" aria-hidden="true">
            <span>ॐ</span>
          </div>

          <p className="eyebrow light">
            {t.hero.eyebrow} <span />
          </p>

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

        <div className="hero-ribbon" aria-label="Quick navigation highlights">
          {quickPillars.map((item) => {
            const Icon = item.icon
            return (
              <a key={item.href} href={item.href} className="hero-ribbon-card">
                <span className="hero-ribbon-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <div>
                  <strong>{item.label}</strong>
                  <small>{item.sub}</small>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
