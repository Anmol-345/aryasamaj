'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'

export function SiteFooter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    /* TODO: wire newsletter signup to an email list API (e.g. Resend / Mailchimp) */
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand footer-logo" href="#home">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/arya-samaj-logo.png" alt="" width={40} height={40} />
            </span>
            <span className="brand-name">
              {t.brandName}
              <small>{t.brandTagline}</small>
            </span>
          </a>
          <p>
            {t.footer.tagline1}
            <br />
            {t.footer.tagline2}
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://www.youtube.com/@TheAryasamaj" target="_blank" rel="noreferrer">
              YouTube (@TheAryasamaj)
            </a>
            <a href="https://www.aryasamaj.org" target="_blank" rel="noreferrer">
              aryasamaj.org
            </a>
            <a href="https://en.wikipedia.org/wiki/Arya_Samaj" target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </div>
        </div>

        <div className="footer-col">
          <span>SERVICES</span>
          <a href="#service-havan">Havan &amp; Vedic rituals</a>
          <a href="#service-sanskar">Vedic sanskar</a>
          <a href="#service-marriage">Vedic marriage</a>
          <a href="#service-education">Education &amp; guidance</a>
        </div>

        <div className="footer-col">
          <span>EXPLORE</span>
          <a href="#live">Live &amp; Schedule</a>
          <a href="#about">Our foundation</a>
          <a href="#principles">Ten principles</a>
          <a href="#events">Events</a>
          <a href="#community">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-note">
          <span className="footer-symbol" aria-hidden="true">
            ॐ
          </span>
          <p>“Let noble thoughts come to us from every side.”</p>
          <small>— Rig Veda 1.89.1</small>

          <form className="footer-newsletter" onSubmit={handleSubscribe}>
            <label htmlFor="newsletter-email">{t.footer.newsletterTitle}</label>
            <p className="footer-newsletter-desc">{t.footer.newsletterDesc}</p>
            <div className="newsletter-row">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder={t.footer.newsletterPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                {t.footer.newsletterBtn}
              </button>
            </div>
            {subscribed && (
              <span className="newsletter-success" role="status">
                {t.footer.newsletterSuccess}
              </span>
            )}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Arya Samaj · Sarvadeshik Arya Pratinidhi Sabha, Maharishi
          Dayanand Bhawan, New Delhi – 110002.
        </span>
        <a href="#home">{t.footer.backTop}</a>
      </div>
    </footer>
  )
}
