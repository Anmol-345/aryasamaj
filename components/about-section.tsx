'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './motion-primitives'

const milestones = [
  {
    year: '1824',
    title: 'Birth in Tankara',
    titleHi: 'टंकारा में जन्म',
    text: 'Maharshi Dayananda Saraswati was born in Tankara, Gujarat, beginning a lifelong quest for Vedic truth.',
  },
  {
    year: '1875',
    title: 'Founding of Arya Samaj',
    titleHi: 'आर्य समाज की स्थापना',
    text: 'Established on 10 April 1875 in Bombay to champion social reform, equality, and Vedic education.',
  },
  {
    year: '1875',
    title: 'Satyarth Prakash',
    titleHi: 'सत्यार्थ प्रकाश',
    text: 'Published his seminal work illuminating rational inquiry, dharma, and return to the Vedas.',
  },
  {
    year: '1883',
    title: 'Nirvan in Ajmer',
    titleHi: 'अजमेर में निर्वाण',
    text: 'Passed away on 30 October 1883 in Ajmer, leaving a lasting legacy of Vedic education and reform.',
  },
]

export function AboutSection() {
  const { lang, t } = useLanguage()

  return (
    <section className="about section-wrap" id="about" aria-labelledby="about-heading">
      <Reveal className="about-photo">
        <Image
          src="/images/about-mandir.jpg"
          alt="Members gathered around the sacred Havan fire inside an Arya Samaj Mandir"
          width={1200}
          height={900}
          loading="lazy"
        />
        <span className="photo-caption">{t.about.caption}</span>
      </Reveal>

      <Reveal delay={0.1} className="about-copy">
        <p className="eyebrow">
          {t.about.eyebrow} <span />
        </p>
        <h2 id="about-heading">
          {t.about.headingStart} <em>{t.about.headingEm}</em>
        </h2>
        <p className="body-copy">{t.about.p1}</p>
        <p className="body-copy">{t.about.p2}</p>

        <div className="about-note">
          <span className="note-rule" aria-hidden="true" />
          <span>{t.about.noteTitle}</span>
          <span className="note-sub">{t.about.noteSub}</span>
        </div>

        <div className="timeline-block" aria-label={t.about.timelineTitle}>
          <p className="timeline-title">{t.about.timelineTitle}</p>
          <ol className="timeline-list">
            {milestones.map((item) => (
              <li key={`${item.year}-${item.title}`} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <div>
                  <strong>{lang === 'hi' ? item.titleHi : item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <a className="under-link" href="#principles">
          {t.about.cta} <ArrowRight size={16} aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  )
}
