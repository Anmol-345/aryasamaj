'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Globe, Menu, Radio, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const serviceLinks = [
  { label: 'Agnihotra Havan & Yajna', labelHi: 'अग्निहोत्र हवन एवं यज्ञ', href: '#service-havan' },
  { label: 'Shodasha Vedic Sanskars', labelHi: 'षोडश वैदिक संस्कार', href: '#service-sanskar' },
  { label: 'Vedic Vivah (Marriage)', labelHi: 'वैदिक विवाह संस्कार', href: '#service-marriage' },
  { label: 'Swadhyaya & Gurukul Vidya', labelHi: 'स्वाध्याय एवं गुरुकुल विद्या', href: '#service-education' },
]

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isLive = Boolean(process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="top-sacred-bar">
        <div className="wrap top-sacred-inner">
          <span>
            {lang === 'hi'
              ? 'स्थापना १० अप्रैल १८७५ · सार्वदेशिक आर्य प्रतिनिधि सभा, नई दिल्ली'
              : 'EST. 10 APRIL 1875 · SARVADESHIK ARYA PRATINIDHI SABHA, NEW DELHI'}
          </span>
          <span>
            {lang === 'hi'
              ? 'दैनिक अग्निहोत्र हवन · प्रातः ०७:०० बजे'
              : 'DAILY AGNIHOTRA HAVAN · 07:00 AM IST'}
          </span>
        </div>
      </div>

      <div className="wrap header-inner">
        <a className="brand" href="#home" aria-label="Arya Samaj home" onClick={closeAll}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/arya-samaj-logo.png" alt="" width={44} height={44} priority />
          </span>
          <span className="brand-name">
            {t.brandName}
            <small>{t.brandTagline}</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="site-nav" aria-label="Primary">
          <a className="nav-link" href="#about" onClick={closeAll}>
            {t.nav.about}
          </a>
          <a className="nav-link" href="#principles" onClick={closeAll}>
            {t.nav.principles}
          </a>

          <div
            className={`nav-dropdown${dropdownOpen ? ' is-open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a
              className="nav-link nav-services"
              href="#services"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={closeAll}
            >
              {t.nav.services} <ChevronDown size={14} aria-hidden="true" />
            </a>
            <div className="nav-dropdown-menu" role="menu" aria-label="Services">
              {serviceLinks.map((item) => (
                <a key={item.href} href={item.href} role="menuitem" onClick={closeAll}>
                  {lang === 'hi' ? item.labelHi : item.label}
                </a>
              ))}
            </div>
          </div>

          <a className="nav-link" href="#events" onClick={closeAll}>
            {t.nav.events}
          </a>
          <a className="nav-link" href="#contact" onClick={closeAll}>
            {t.nav.contact}
          </a>

          <a
            href="#live"
            className={`live-pill${isLive ? ' is-live' : ''}`}
            aria-label="Live Satsang stream"
            onClick={closeAll}
          >
            <span className="live-dot" aria-hidden="true" />
            <Radio size={12} aria-hidden="true" />
            {t.nav.liveBadge}
          </a>

          <button
            type="button"
            className="lang-toggle"
            aria-label={lang === 'en' ? 'Switch language to Hindi' : 'Switch language to English'}
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          >
            <Globe size={13} aria-hidden="true" />
            <span>{lang === 'en' ? 'EN / हिन्दी' : 'हिन्दी / EN'}</span>
          </button>

          <a className="btn btn-primary nav-visit" href="#contact" onClick={closeAll}>
            {t.nav.visitUs} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
