import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand footer-logo" href="#home">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/arya-samaj-logo.png" alt="" width={40} height={40} />
            </span>
            <span className="brand-name">
              Arya Samaj
              <small>TRUTH · KNOWLEDGE · SERVICE</small>
            </span>
          </a>
          <p>
            A life guided by truth.
            <br />A community devoted to all.
          </p>
        </div>

        <div className="footer-col">
          <span>SERVICES</span>
          <a href="#service-havan">Havan &amp; Vedic rituals</a>
          <a href="#service-sanskar">Vedic sanskar</a>
          <a href="#service-marriage">Vedic marriage</a>
          <a href="#service-education">Education &amp; guidance</a>
        </div>

        <div className="footer-col">
          <span>EXPLORE</span>
          <a href="#pillars">Who we are</a>
          <a href="#about">Our foundation</a>
          <a href="#principles">Ten principles</a>
          <a href="#community">Gallery</a>
          <a href="#faq">FAQ</a>
          <a href="https://en.wikipedia.org/wiki/Arya_Samaj" target="_blank" rel="noreferrer">
            Wikipedia: Arya Samaj
          </a>
        </div>

        <div className="footer-note">
          <span className="footer-symbol" aria-hidden="true">
            ॐ
          </span>
          <p>“Let noble thoughts come to us from every side.”</p>
          <small>— Rig Veda 1.89.1</small>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Arya Samaj · Sarvadeshik Arya Pratinidhi Sabha, Maharishi
          Dayanand Bhawan, New Delhi – 110002.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
