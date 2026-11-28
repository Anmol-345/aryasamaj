'use client'

import principlesData from '@/content/principles.json'
import { useLanguage } from '@/lib/i18n'
import { PrincipleCard } from './principle-card'

export function PrinciplesSection() {
  const { t } = useLanguage()

  return (
    <section className="principles section-wrap" id="principles" aria-labelledby="principles-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {t.principles.eyebrow} <span />
          </p>
          <h2 id="principles-heading">
            {t.principles.headingStart}
            <br />
            <em>{t.principles.headingEm}</em>
          </h2>
        </div>
        <p className="heading-aside">{t.principles.aside}</p>
      </div>

      <div className="principle-carousel" role="list" aria-label="Ten Principles of Arya Samaj">
        {principlesData.map((item) => (
          <div key={item.number} role="listitem" className="principle-slide">
            <PrincipleCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
