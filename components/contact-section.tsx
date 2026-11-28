'use client'

import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Map, MessageCircle, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function ContactSection() {
  const { t } = useLanguage()
  const [showLiveMap, setShowLiveMap] = useState(false)

  /* TODO: replace with your verified WhatsApp number */
  const whatsappUrl =
    'https://wa.me/911142415359?text=Namaste%2C%20I%20would%20like%20to%20visit%20or%20enquire%20about%20Arya%20Samaj.'

  return (
    <>
      <section className="invitation" id="invitation" aria-labelledby="invitation-heading">
        <div className="invitation-mandala" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="invitation-art" aria-hidden="true">
          <span>ॐ</span>
          <i />
          <i />
          <i />
        </div>
        <div className="invitation-copy">
          <p className="eyebrow">
            {t.invitation.eyebrow} <span />
          </p>
          <h2 id="invitation-heading">
            {t.invitation.headingStart} <em>{t.invitation.headingEm}</em>
          </h2>
          <p>{t.invitation.copy}</p>
          <div className="invitation-actions">
            <a className="btn btn-dark" href="#contact">
              {t.invitation.ctaPrimary} <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="under-link" href="#contact">
              {t.invitation.ctaSecondary} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact" aria-labelledby="contact-heading">
        <div className="contact-copy">
          <p className="eyebrow">
            {t.contact.eyebrow} <span />
          </p>
          <h2 id="contact-heading">
            {t.contact.headingStart} <em>{t.contact.headingEm}</em>
          </h2>
          <p className="contact-intro">{t.contact.intro}</p>

          <div className="contact-details">
            <div>
              <span>{t.contact.hq}</span>
              <p>
                Maharishi Dayanand Bhawan, 3/5 Asaf Ali Road (Near Ramlila Maidan), New Delhi –
                110002, India
              </p>
            </div>
            <div>
              <span>{t.contact.phoneEmail}</span>
              <p>
                <a href="tel:+911142415359">+91 11 4241 5359</a> ·{' '}
                <a href="tel:+911123274771">+91 11 2327 4771</a>
                <br />
                <a href="mailto:sarvadeshikarya@gmail.com">sarvadeshikarya@gmail.com</a>
              </p>
            </div>
            <div>
              <span>{t.contact.hours}</span>
              <p>Monday – Saturday, 10:00 AM – 5:00 PM</p>
            </div>
          </div>

          <div className="contact-quick-actions">
            <a href="tel:+911142415359" className="btn btn-dark">
              <Phone size={15} aria-hidden="true" /> {t.contact.callNow}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
              <MessageCircle size={15} aria-hidden="true" /> {t.contact.whatsapp}
            </a>
          </div>
        </div>

        <div className="map-panel">
          {showLiveMap ? (
            <iframe
              className="map-embed"
              title="Sarvadeshik Arya Pratinidhi Sabha, New Delhi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Maharishi+Dayanand+Bhawan+3%2F5+Asaf+Ali+Road+New+Delhi+110002&output=embed"
            />
          ) : (
            <>
              <div className="map-lines" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="map-pin" aria-hidden="true">
                <span>ॐ</span>
              </div>
              <div className="map-label">
                <span className="map-dot" aria-hidden="true" />
                <span>
                  SARVADESHIK ARYA PRATINIDHI SABHA
                  <br />
                  <small>Maharishi Dayanand Bhawan, New Delhi</small>
                </span>
              </div>
            </>
          )}

          <div className="map-controls">
            <button
              type="button"
              className="map-toggle-btn"
              onClick={() => setShowLiveMap((prev) => !prev)}
            >
              <Map size={14} aria-hidden="true" />
              {showLiveMap ? 'Show stylized map' : 'Load interactive map'}
            </button>
            <a
              className="map-link"
              href="https://www.google.com/maps/search/Maharishi+Dayanand+Bhawan+Ramlila+Ground+New+Delhi+110002"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
