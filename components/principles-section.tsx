'use client'

import { useState } from 'react'
import principlesData from '@/content/principles.json'
import { useLanguage } from '@/lib/i18n'

export function PrinciplesSection() {
  const { lang, t } = useLanguage()
  const [activeIdx, setActiveIdx] = useState(0)
  const active = principlesData[activeIdx]

  return (
    <section className="principles-section" id="principles" aria-labelledby="principles-heading">
      <div className="section-wrap">
        <div className="section-heading section-heading-center">
          <p className="eyebrow">
            {t.principles.eyebrow} <span />
          </p>
          <h2 id="principles-heading">
            {t.principles.headingStart} <em>{t.principles.headingEm}</em>
          </h2>
          <p className="heading-sub">{t.principles.aside}</p>
        </div>

        <div className="principle-featured-board">
          <div className="principle-featured-card" role="region" aria-live="polite">
            <div className="principle-featured-num">{active.number}</div>
            <div className="principle-featured-body">
              <span className="principle-featured-tag">
                ✳ {lang === 'hi' ? 'नियम' : 'PRINCIPLE'} {active.number} / 10
              </span>
              <h3>{lang === 'hi' ? active.titleHi : active.title}</h3>
              <p className="principle-featured-summary">
                {lang === 'hi' ? active.summaryHi : active.summary}
              </p>
              <p className="principle-featured-detail">{active.detail}</p>
            </div>
          </div>

          <div className="principle-selector-grid" role="tablist" aria-label="Select a principle">
            {principlesData.map((item, idx) => {
              const isSelected = idx === activeIdx
              return (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`principle-tab${isSelected ? ' is-active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="principle-tab-num">{item.number}</span>
                  <span className="principle-tab-title">
                    {lang === 'hi' ? item.titleHi : item.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
