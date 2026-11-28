'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const serviceLinks = [
  { label: 'Havan & Vedic rituals', href: '#service-havan' },
  { label: 'Vedic sanskar', href: '#service-sanskar' },
  { label: 'Vedic marriage', href: '#service-marriage' },
  { label: 'Education & guidance', href: '#service-education' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
      <div className="wrap header-inner">
        <a className="brand" href="#home" aria-label="Arya Samaj home" onClick={closeAll}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/arya-samaj-logo.png" alt="" width={44} height={44} priority />
          </span>
          <span className="brand-name">
            Arya Samaj
            <small>TRUTH · KNOWLEDGE · SERVICE</small>
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
            About
          </a>
          <a className="nav-link" href="#principles" onClick={closeAll}>
            Principles
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
              Services <ChevronDown size={14} aria-hidden="true" />
            </a>
            <div className="nav-dropdown-menu" role="menu" aria-label="Services">
              {serviceLinks.map((item) => (
                <a key={item.href} href={item.href} role="menuitem" onClick={closeAll}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a className="nav-link" href="#community" onClick={closeAll}>
            Gallery
          </a>
          <a className="nav-link" href="#faq" onClick={closeAll}>
            FAQ
          </a>
          <a
            className="nav-link"
            href="https://en.wikipedia.org/wiki/Arya_Samaj"
            target="_blank"
            rel="noreferrer"
            onClick={closeAll}
          >
            Wikipedia
          </a>
          <a className="btn btn-primary nav-visit" href="#contact" onClick={closeAll}>
            Visit us <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
