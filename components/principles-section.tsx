'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const principles = [
  ['Truth above all', 'Receive truth and renounce untruth in every part of life.'],
  ['Knowledge for all', 'Let knowledge be shared, pursued, and made accessible to every person.'],
  ['Thoughtful discernment', 'Hold every belief to the light of reason and the wisdom of the Vedas.'],
  ['Do what is right', 'Choose dharma: actions guided by truth, justice, and integrity.'],
  ['Act for the world', 'Work for the physical, spiritual, and social wellbeing of all.'],
  ['Care for one another', 'Let our conduct be shaped by love, fairness, and respect.'],
  ['Share in goodness', 'Support knowledge and prosperity through generous, responsible action.'],
  ['Grow in wisdom', 'Pursue learning and help others grow, without distinction.'],
  ['Honor every voice', 'Respect the freedom to seek truth and hold a considered view.'],
  ['Serve with purpose', 'Put the good of all before narrow, individual gain.'],
]

export function PrinciplesSection() {
  const [expandedMobile, setExpandedMobile] = useState(false)

  return (
    <section className="principles section-wrap" id="principles" aria-labelledby="principles-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            A GUIDE FOR EVERYDAY LIVING <span />
          </p>
          <h2 id="principles-heading">
            Living by the
            <br />
            <em>principles of truth.</em>
          </h2>
        </div>
        <p className="heading-aside">
          Ten guiding principles inspire a life of knowledge, righteousness, compassion, and
          service.
        </p>
      </div>

      <div className={`principle-grid${expandedMobile ? ' is-expanded' : ''}`}>
        {principles.map(([title, text], index) => (
          <article className="principle" key={title}>
            <span className="principle-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <span className="principle-mark" aria-hidden="true">
              ✳
            </span>
          </article>
        ))}
      </div>

      <div className="principles-toggle-wrap">
        <button
          type="button"
          className="btn btn-outline principles-toggle"
          aria-expanded={expandedMobile}
          onClick={() => setExpandedMobile((prev) => !prev)}
        >
          {expandedMobile ? (
            <>
              Show fewer principles <ChevronUp size={16} aria-hidden="true" />
            </>
          ) : (
            <>
              Show all 10 principles <ChevronDown size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </section>
  )
}
