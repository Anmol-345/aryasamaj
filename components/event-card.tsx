'use client'

import { CalendarPlus, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export type EventItem = {
  id: string
  title: string
  titleHi: string
  date: string
  time: string
  location: string
  locationHi: string
  category: string
  description: string
  descriptionHi: string
  durationMinutes: number
}

function buildGoogleCalendarUrl(event: EventItem) {
  const start = event.date.replace(/-/g, '') + 'T090000Z'
  const end = event.date.replace(/-/g, '') + 'T110000Z'
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function EventCard({ event }: { event: EventItem }) {
  const { lang, t } = useLanguage()
  const dateObj = new Date(`${event.date}T00:00:00`)
  const month = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const day = String(dateObj.getDate()).padStart(2, '0')

  return (
    <article className="event-card">
      <div className="event-top">
        <div className="event-date-badge" aria-label={event.date}>
          <span>{month}</span>
          <strong>{day}</strong>
        </div>
        <span className="event-category">{event.category}</span>
      </div>

      <h3>{lang === 'hi' ? event.titleHi : event.title}</h3>
      <p className="event-time">{event.time}</p>
      <p className="event-desc">{lang === 'hi' ? event.descriptionHi : event.description}</p>

      <div className="event-footer">
        <span className="event-location">
          <MapPin size={14} aria-hidden="true" />
          {lang === 'hi' ? event.locationHi : event.location}
        </span>
        <a
          href={buildGoogleCalendarUrl(event)}
          target="_blank"
          rel="noreferrer"
          className="event-cal-link"
        >
          <CalendarPlus size={15} aria-hidden="true" /> {t.events.addCalendar}
        </a>
      </div>
    </article>
  )
}
