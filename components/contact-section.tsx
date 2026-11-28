import { ArrowRight, ArrowUpRight } from 'lucide-react'

export function ContactSection() {
  return (
    <>
      <section className="invitation" id="invitation" aria-labelledby="invitation-heading">
        <div className="invitation-art" aria-hidden="true">
          <span>ॐ</span>
          <i />
          <i />
          <i />
        </div>
        <div className="invitation-copy">
          <p className="eyebrow">
            A WELCOME, WITH OPEN ARMS <span />
          </p>
          <h2 id="invitation-heading">
            Your journey towards truth <em>begins here.</em>
          </h2>
          <p>
            Join us in embracing truth, knowledge, compassion, and a more meaningful life.
          </p>
          <div className="invitation-actions">
            <a className="btn btn-dark" href="#contact">
              Plan a visit <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="under-link" href="#contact">
              Get in touch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact" aria-labelledby="contact-heading">
        <div className="contact-copy">
          <p className="eyebrow">
            COME AS YOU ARE <span />
          </p>
          <h2 id="contact-heading">
            We’d be glad
            <br />
            to welcome <em>you.</em>
          </h2>
          <p className="contact-intro">
            Founded on 10 April 1875 by Swami Dayananda Saraswati, Arya Samaj’s apex
            body—Sarvadeshik Arya Pratinidhi Sabha—is headquartered in New Delhi.
          </p>
          <div className="contact-details">
            <div>
              <span>HEADQUARTERS</span>
              <p>
                Maharishi Dayanand Bhawan, 3/5 Asaf Ali Road (Near Ramlila Maidan), New Delhi –
                110002, India
              </p>
            </div>
            <div>
              <span>PHONE &amp; EMAIL</span>
              <p>
                <a href="tel:+911142415359">+91 11 4241 5359</a> ·{' '}
                <a href="tel:+911123274771">+91 11 2327 4771</a>
                <br />
                <a href="mailto:sarvadeshikarya@gmail.com">sarvadeshikarya@gmail.com</a>
              </p>
            </div>
            <div>
              <span>OFFICE HOURS</span>
              <p>Monday – Saturday, 10:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="map-panel">
          <div className="map-lines" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="map-pin" aria-hidden="true">
            <span>ॐ</span>
          </div>
          <div className="map-label">
            <span className="map-dot" aria-hidden="true" />
            <span>
              SARVADESHIK ARYA PRATINIDHI SABHA
              <br />
              <small>Maharishi Dayanand Bhawan, New Delhi</small>
            </span>
          </div>
          <a
            className="map-link"
            href="https://www.google.com/maps/search/Maharishi+Dayanand+Bhawan+Ramlila+Ground+New+Delhi+110002"
            target="_blank"
            rel="noreferrer"
          >
            View on map <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}
