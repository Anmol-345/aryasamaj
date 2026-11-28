'use client'

import eventsData from '@/content/events.json'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './motion-primitives'
import { EventCard } from './event-card'

export function EventsSection() {
  const { t } = useLanguage()

  return (
    <section className="events-section section-wrap" id="events" aria-labelledby="events-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {t.events.eyebrow} <span />
          </p>
          <h2 id="events-heading">
            {t.events.headingStart} <em>{t.events.headingEm}</em>
          </h2>
        </div>
        <p className="heading-aside">{t.events.aside}</p>
      </div>

      <Reveal className="events-grid">
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Reveal>
    </section>
  )
}
