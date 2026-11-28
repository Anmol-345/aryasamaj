export function StatsSection() {
  const yearsSinceFounding = new Date().getFullYear() - 1875

  /* TODO: confirm local branch attendance or active member count if you wish to replace a doctrinal figure with a local metric. */
  const stats = [
    { value: `${yearsSinceFounding}+`, label: 'Years of Vedic reform since 10 April 1875' },
    { value: '10', label: 'Guiding Principles (Niyam) of Arya Samaj' },
    { value: '4', label: 'Vedas at the heart of study and inquiry' },
    { value: '16', label: 'Traditional Vedic Sanskars across life’s milestones' },
  ]

  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="section-wrap">
        <div className="stats-intro">
          <p className="eyebrow light">
            IN NUMBERS <span />
          </p>
          <h2 id="stats-heading">
            A living heritage, <em>still growing.</em>
          </h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
