'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'

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
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    const id = window.setInterval(next, 6000)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion, next])

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
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
        <p className="eyebrow light">
          A LIVING VEDIC TRADITION <span />
        </p>
        <h1 id="hero-heading">
          Rediscover the
          <br />
          <em>light of truth.</em>
        </h1>
        <p className="hero-copy">
          Guided by the timeless wisdom of the Vedas, we come together to cultivate truth,
          knowledge, compassion, and a life of purpose.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#about">
            Explore our mission <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a className="btn btn-ghost" href="#contact">
            Visit Arya Samaj <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>ANCIENT WISDOM · MODERN LIFE</span>
        <a href="#pillars" aria-label="Scroll to our pillars">
          <ArrowDown size={17} aria-hidden="true" />
        </a>
        <span>EST. IN THE SPIRIT OF REFORM</span>
      </div>
    </section>
  )
}
