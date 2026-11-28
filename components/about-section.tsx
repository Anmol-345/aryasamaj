import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="about section-wrap" id="about" aria-labelledby="about-heading">
      <div className="about-photo">
        <Image
          src="/images/about-mandir.jpg"
          alt="Members gathered around the sacred Havan fire inside an Arya Samaj Mandir"
          width={1200}
          height={900}
          loading="lazy"
        />
        <span className="photo-caption">A path of inquiry, learning, and service</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">
          OUR FOUNDATION <span />
        </p>
        <h2 id="about-heading">
          A movement built on truth, knowledge &amp; <em>righteousness.</em>
        </h2>
        <p className="body-copy">
          Arya Samaj is a Vedic reform movement that calls people to return to the source: to seek
          truth, think clearly, and live with compassion. Its teachings place education, social
          responsibility, and the dignity of every human being at the heart of a meaningful life.
        </p>
        <p className="body-copy">
          Inspired by the Vedas, it encourages an honest, questioning spirit—one that meets
          tradition with reason and turns understanding into service.
        </p>
        <div className="about-note">
          <span className="note-rule" aria-hidden="true" />
          <span>Back to the Vedas</span>
          <span className="note-sub">A call to seek knowledge at its source.</span>
        </div>
        <a className="under-link" href="#principles">
          Discover our principles <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
