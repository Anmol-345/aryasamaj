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
    text: 'Maharshi Dayananda Saraswati was born on 12 February 1824 in Tankara, Gujarat, beginning a lifelong quest for Vedic truth.',
  },
  {
    year: '1875',
    title: 'Arya Samaj & Satyarth Prakash',
    titleHi: 'आर्य समाज एवं सत्यार्थ प्रकाश',
    text: 'Founded Arya Samaj in Bombay on 10 April 1875 and published Satyarth Prakash ("The Light of Truth").',
  },
  {
    year: '1883',
    title: 'Nirvan in Ajmer',
    titleHi: 'अजमेर में निर्वाण',
    text: 'Attained Nirvan on 30 October 1883 in Ajmer, leaving a global legacy of Gurukuls, social reform, and Vedic education.',
  },
]

export function AboutSection() {
  const { lang, t } = useLanguage()

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">
            {t.about.eyebrow} <span />
          </p>
          <h2 id="about-heading">
            {t.about.headingStart} <em>{t.about.headingEm}</em>
          </h2>
        </div>

        <div className="about-showcase">
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

          <Reveal delay={0.1} className="about-manifesto-card">
            <p className="body-copy">{t.about.p1}</p>
            <p className="body-copy">{t.about.p2}</p>

            <div className="about-note">
              <span className="note-rule" aria-hidden="true" />
              <span>{t.about.noteTitle}</span>
              <span className="note-sub">{t.about.noteSub}</span>
            </div>

            <a className="under-link" href="#principles">
              {t.about.cta} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="timeline-strip" aria-label={t.about.timelineTitle}>
          <p className="timeline-title">{t.about.timelineTitle}</p>
          <div className="timeline-cards">
            {milestones.map((item) => (
              <Reveal key={`${item.year}-${item.title}`} className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{lang === 'hi' ? item.titleHi : item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
