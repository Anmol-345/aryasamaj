'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'

export type PrincipleItem = {
  number: string
  title: string
  titleHi: string
  summary: string
  summaryHi: string
  detail: string
}

export function PrincipleCard({ item }: { item: PrincipleItem }) {
  const { lang } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className={`principle-card${expanded ? ' is-expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button
        type="button"
        className="principle-trigger"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="principle-number">{item.number}</span>
        <div className="principle-body">
          <h3>{lang === 'hi' ? item.titleHi : item.title}</h3>
          <p>{lang === 'hi' ? item.summaryHi : item.summary}</p>
          {expanded && <p className="principle-detail">{item.detail}</p>}
        </div>
        <span className="principle-mark" aria-hidden="true">
          ✳
        </span>
      </button>
    </article>
  )
}
