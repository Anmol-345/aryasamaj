'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is Arya Samaj?',
    a: 'Arya Samaj is a Vedic reform movement dedicated to truth, universal knowledge, social equality, and selfless service. Its teachings draw directly from the Vedas and are summarized in Ten Guiding Principles (Niyam).',
  },
  {
    q: 'Who founded Arya Samaj and when?',
    a: 'Swami Dayananda Saraswati founded Arya Samaj on 10 April 1875 in Bombay (present-day Mumbai), calling society back to the rational, ethical, and spiritual wisdom of the Vedas.',
  },
  {
    q: 'What is a Havan (Yajna)?',
    a: 'Havan (or Yajna) is a sacred Vedic fire ceremony accompanied by the chanting of Vedic mantras and offerings of pure herbs and ghee. It symbolizes gratitude, purification, inner clarity, and collective prayer.',
  },
  {
    q: 'Can anyone attend Arya Samaj gatherings?',
    a: 'Yes. Arya Samaj welcomes everyone—regardless of background, caste, gender, or nationality—to attend weekly Satsang, Havan, and educational programs.',
  },
  {
    q: 'How do I arrange a Vedic ceremony or Sanskar?',
    a: 'You can reach out through the Contact section below to inquire about Havan, Namkaran, Yagyopaveet, Vedic marriage, or other life-cycle Sanskars with your local Arya Samaj Mandir or Sarvadeshik Arya Pratinidhi Sabha.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq-section section-wrap" id="faq" aria-labelledby="faq-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            QUESTIONS &amp; CLARITY <span />
          </p>
          <h2 id="faq-heading">
            Frequently asked <em>questions.</em>
          </h2>
        </div>
        <p className="heading-aside">
          Helpful answers for first-time visitors, families, and anyone exploring the Vedic
          tradition.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx
          const panelId = `faq-panel-${idx}`
          const btnId = `faq-btn-${idx}`
          return (
            <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <h3>
                <button
                  type="button"
                  id={btnId}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} className="faq-icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="faq-panel"
                hidden={!isOpen}
              >
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
