'use client'

import { Clock, ExternalLink, Radio } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { Reveal } from './motion-primitives'
import scheduleData from '@/content/schedule.json'

export function LiveSection() {
  const { lang, t } = useLanguage()
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

  return (
    <section className="live-section" id="live" aria-labelledby="live-heading">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">
            {t.live.eyebrow} <span />
          </p>
          <h2 id="live-heading">
            {t.live.headingStart} <em>{t.live.headingEm}</em>
          </h2>
          <p className="heading-sub">{t.live.aside}</p>
        </div>

        <div className="live-grid">
          <Reveal className="live-player-card">
            {channelId ? (
              <div className="live-embed-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/live_stream?channel=${channelId}`}
                  title="Arya Samaj Live Satsang"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="live-offline-state">
                <div className="live-offline-badge">
                  <Radio size={16} aria-hidden="true" />
                  <span>{t.live.offlineTitle}</span>
                </div>
                <h3>
                  {lang === 'hi'
                    ? scheduleData.nextSession.titleHi
                    : scheduleData.nextSession.title}
                </h3>
                <p>{t.live.offlineDesc}</p>
                <a
                  className="btn btn-primary"
                  href="https://www.youtube.com/@TheAryasamaj"
                  target="_blank"
                  rel="noreferrer"
                >
                  @TheAryasamaj YouTube <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08} className="schedule-card">
            <div className="schedule-card-head">
              <h3>{t.live.scheduleTitle}</h3>
              <span className="schedule-badge">{scheduleData.nextSession.time}</span>
            </div>
            <ul className="schedule-list">
              {scheduleData.schedule.map((item) => (
                <li key={item.time} className="schedule-item">
                  <span className="schedule-time">
                    <Clock size={12} aria-hidden="true" /> {item.time}
                  </span>
                  <div>
                    <strong>{lang === 'hi' ? item.titleHi : item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="recordings-wrap">
          <div className="recordings-header">
            <h3 className="recordings-heading">{t.live.recordingsTitle}</h3>
            <a
              href="https://www.youtube.com/@TheAryasamaj"
              target="_blank"
              rel="noreferrer"
              className="under-link"
            >
              @TheAryasamaj <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="recordings-grid">
            {scheduleData.recordings.map((rec) => {
              const title = lang === 'hi' ? rec.titleHi : rec.title
              const watchUrl = `https://www.youtube.com/watch?v=${rec.youtubeVideoId}`
              return (
                <article key={rec.id} className="recording-card">
                  <div className="recording-embed-wrap">
                    <iframe
                      src={`https://www.youtube.com/embed/${rec.youtubeVideoId}`}
                      title={title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="recording-meta">
                    <h4>{title}</h4>
                    <a
                      href={watchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="recording-watch-link"
                    >
                      {t.live.watchNow} <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
