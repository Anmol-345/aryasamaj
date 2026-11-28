'use client'

import eventsData from '@/content/events.json'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './motion-primitives'
import { EventCard } from './event-card'

export function EventsSection() {
  const { t } = useLanguage()

  return (
    <section className="events-section" id="events" aria-labelledby="events-heading">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">
            {t.events.eyebrow} <span />
          </p>
          <h2 id="events-heading">
            {t.events.headingStart} <em>{t.events.headingEm}</em>
          </h2>
          <p className="heading-sub">{t.events.aside}</p>
        </div>

        <Reveal className="events-stack">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
