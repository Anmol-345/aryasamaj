const pillars = [
  {
    num: '01',
    title: 'Truth',
    text: 'Seeking truth with honesty and reason, guided by the light of the Vedas and moral integrity.',
  },
  {
    num: '02',
    title: 'Knowledge',
    text: 'Championing universal education and lifelong learning without distinction of background.',
  },
  {
    num: '03',
    title: 'Service',
    text: 'Turning spiritual understanding into selfless action for the physical, social, and moral good of all.',
  },
  {
    num: '04',
    title: 'Reform',
    text: 'Founded by Swami Dayananda Saraswati in 1875 to renew society through equality and rational inquiry.',
  },
]

export function PillarsSection() {
  return (
    <section className="pillars-section section-wrap" id="pillars" aria-labelledby="pillars-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            WHO WE ARE <span />
          </p>
          <h2 id="pillars-heading">
            Rooted in Vedic reform <em>since 1875.</em>
          </h2>
        </div>
        <p className="heading-aside">
          Four enduring pillars shape every gathering, ceremony, and educational initiative across
          Arya Samaj.
        </p>
      </div>
      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.num}>
            <span className="pillar-num">{pillar.num}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
