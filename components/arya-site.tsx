'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'

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

const services = [
  { title: 'Havan & Vedic rituals', text: 'Gather in prayer, reflection, and the sacred practice of Havan.', image: '/images/service-havan.jpg', alt: 'Devotees in traditional attire gathered around a sacred Havan kund' },
  { title: 'Vedic sanskar', text: 'Mark life’s milestones through thoughtful, meaningful Vedic ceremonies.', image: '/images/service-sanskar.jpg', alt: 'Elder guiding a young man during a traditional Yagyopaveet sanskar ceremony' },
  { title: 'Vedic marriage', text: 'Begin a lifelong journey rooted in commitment, values, and tradition.', image: '/images/service-marriage.jpg', alt: 'Vedic Saptapadi marriage ceremony beside the sacred Agni Yajna fire' },
  { title: 'Education & guidance', text: 'Explore Vedic wisdom, personal growth, and lifelong learning.', image: '/images/service-education.jpg', alt: 'Ancient Rigveda manuscript written in Devanagari script' },
]

const communityImages = [
  { image: '/images/community-gathers.jpg', alt: 'Community members gathered together for an evening satsang', label: 'A community that gathers' },
  { image: '/images/community-learning.jpg', alt: 'Students studying Vedic texts together in a Gurukul classroom', label: 'Learning, shared generously' },
  { image: '/images/community-service.jpg', alt: 'Devotees gathered in prayer and service at an ashram beneath the Om emblem', label: 'Service in everyday life' },
  { image: '/images/community-future.jpg', alt: 'Young Vedic student reading a scripture on a wooden bookstand', label: 'A future shaped by knowledge' },
]

function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img className={className} src={src} alt={alt} loading="lazy" />
}

export function AryaSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links: Array<{ label: string; href: string; external?: boolean }> = [
    { label: 'About', href: '#about' },
    { label: 'Principles', href: '#principles' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#community' },
    { label: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Arya_Samaj', external: true },
  ]

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Arya Samaj home">
          <span className="brand-mark" aria-hidden="true"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_upscale_image_and_re-removebg-preview-0Ir22DToojTtKH4TX2OeNDRho51nwy.png" alt="" /></span>
          <span className="brand-name">Arya Samaj<small>TRUTH · KNOWLEDGE · SERVICE</small></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-visit" href="#contact" onClick={() => setMenuOpen(false)}>Visit us <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="A quiet Vedic fire ceremony at dusk" />
        <div className="hero-content">
          <p className="eyebrow light">A LIVING VEDIC TRADITION <span /></p>
          <h1>Rediscover the<br /><em>light of truth.</em></h1>
          <p className="hero-copy">Guided by the timeless wisdom of the Vedas, we come together to cultivate truth, knowledge, compassion, and a life of purpose.</p>
          <div className="hero-actions"><a className="button button-light" href="#about">Explore our mission <ArrowRight size={16} /></a><a className="text-link light-link" href="#contact">Visit Arya Samaj <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="hero-bottom"><span>ANCIENT WISDOM · MODERN LIFE</span><a href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a><span>EST. IN THE SPIRIT OF REFORM</span></div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="about-photo"><Photo src="/images/about-mandir.jpg" alt="Members gathered around the sacred Havan fire inside an Arya Samaj Mandir" /><span className="photo-caption">A path of inquiry, learning, and service</span></div>
        <div className="about-copy"><p className="eyebrow">OUR FOUNDATION <span /></p><h2>A movement built on truth, knowledge &amp; <em>righteousness.</em></h2><p className="body-copy">Arya Samaj is a Vedic reform movement that calls people to return to the source: to seek truth, think clearly, and live with compassion. Its teachings place education, social responsibility, and the dignity of every human being at the heart of a meaningful life.</p><p className="body-copy">Inspired by the Vedas, it encourages an honest, questioning spirit—one that meets tradition with reason and turns understanding into service.</p><div className="about-note"><span className="note-rule"/><span>Back to the Vedas</span><span className="note-sub">A call to seek knowledge at its source.</span></div><a className="under-link" href="#principles">Discover our principles <ArrowRight size={16} /></a></div>
      </section>

      <section className="principles section-wrap" id="principles">
        <div className="section-heading"><div><p className="eyebrow">A GUIDE FOR EVERYDAY LIVING <span /></p><h2>Living by the<br /><em>principles of truth.</em></h2></div><p className="heading-aside">Ten guiding principles inspire a life of knowledge, righteousness, compassion, and service.</p></div>
        <div className="principle-grid">{principles.map(([title, text], index) => <article className="principle" key={title}><span className="principle-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div><span className="principle-mark" aria-hidden="true">✳</span></article>)}</div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading service-heading"><div><p className="eyebrow">PRACTICE &amp; PARTICIPATION <span /></p><h2>Traditions that give<br /><em>life meaning.</em></h2></div><a className="under-link" href="#contact">Ask about a ceremony <ArrowRight size={16} /></a></div>
        <div className="service-grid">{services.map((service, i) => <a className="service-item" href="#contact" key={service.title}><div className="service-photo"><Photo src={service.image} alt={service.alt} /><span className="service-index">0{i + 1}</span><span className="service-arrow"><ArrowUpRight size={20} /></span></div><div className="service-meta"><div><h3>{service.title}</h3><p>{service.text}</p></div></div></a>)}</div>
      </section>

      <section className="community" id="community">
        <div className="community-head"><p className="eyebrow light">A PLACE TO BELONG <span /></p><h2>Together in faith.<br /><em>United in service.</em></h2><p>Meaningful traditions are made stronger when shared. Find space here to learn, reflect, and contribute to the wellbeing of all.</p><a className="text-link light-link" href="#contact">Explore our community <ArrowRight size={16} /></a></div>
        <div className="community-gallery">{communityImages.map((item, i) => <figure className={`community-image community-image-${i + 1}`} key={item.image}><Photo src={item.image} alt={item.alt} /><figcaption><span>0{i + 1}</span>{item.label}</figcaption></figure>)}</div>
      </section>

      <section className="invitation" id="invitation">
        <div className="invitation-art" aria-hidden="true"><span>ॐ</span><i /><i /><i /></div>
        <div className="invitation-copy"><p className="eyebrow">A WELCOME, WITH OPEN ARMS <span /></p><h2>Your journey towards truth <em>begins here.</em></h2><p>Join us in embracing truth, knowledge, compassion, and a more meaningful life.</p><div className="invitation-actions"><a className="button button-dark" href="#contact">Plan a visit <ArrowRight size={16} /></a><a className="under-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div></div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-copy"><p className="eyebrow">COME AS YOU ARE <span /></p><h2>We’d be glad<br />to welcome <em>you.</em></h2><p className="contact-intro">Founded on 10 April 1875 by Swami Dayananda Saraswati, Arya Samaj’s apex body—Sarvadeshik Arya Pratinidhi Sabha—is headquartered in New Delhi.</p>
          <div className="contact-details"><div><span>HEADQUARTERS</span><p>Maharishi Dayanand Bhawan, 3/5 Asaf Ali Road (Near Ramlila Maidan), New Delhi – 110002, India</p></div><div><span>PHONE &amp; EMAIL</span><p><a href="tel:+911142415359">+91 11 4241 5359</a> · <a href="tel:+911123274771">+91 11 2327 4771</a><br /><a href="mailto:sarvadeshikarya@gmail.com">sarvadeshikarya@gmail.com</a></p></div><div><span>OFFICE HOURS</span><p>Monday – Saturday, 10:00 AM – 5:00 PM</p></div></div>
        </div>
        <div className="map-panel"><div className="map-lines" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="map-pin"><span>ॐ</span></div><div className="map-label"><span className="map-dot"/><span>SARVADESHIK ARYA PRATINIDHI SABHA<br /><small>Maharishi Dayanand Bhawan, New Delhi</small></span></div><a className="map-link" href="https://www.google.com/maps/search/Maharishi+Dayanand+Bhawan+Ramlila+Ground+New+Delhi+110002" target="_blank" rel="noreferrer">View on map <ArrowUpRight size={16} /></a></div>
      </section>

      <footer className="footer">
        <div className="footer-main"><div className="footer-brand"><a className="brand footer-logo" href="#home"><span className="brand-mark" aria-hidden="true"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_upscale_image_and_re-removebg-preview-0Ir22DToojTtKH4TX2OeNDRho51nwy.png" alt="" /></span><span className="brand-name">Arya Samaj<small>TRUTH · KNOWLEDGE · SERVICE</small></span></a><p>A life guided by truth.<br />A community devoted to all.</p></div><div className="footer-col"><span>EXPLORE</span><a href="#home">Home</a><a href="#about">Our foundation</a><a href="#principles">Ten principles</a><a href="#services">Sanskar &amp; services</a><a href="#community">Gallery</a><a href="#invitation">Join us</a></div><div className="footer-col"><span>CONNECT</span><a href="tel:+911142415359">+91 11 4241 5359</a><a href="mailto:sarvadeshikarya@gmail.com">sarvadeshikarya@gmail.com</a><a href="https://www.aryasamaj.org" target="_blank" rel="noreferrer">aryasamaj.org</a><a href="https://en.wikipedia.org/wiki/Arya_Samaj" target="_blank" rel="noreferrer">Wikipedia: Arya Samaj</a></div><div className="footer-note"><span className="footer-symbol">ॐ</span><p>“Let noble thoughts come to us from every side.”</p><small>— Rig Veda 1.89.1</small></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Arya Samaj · Sarvadeshik Arya Pratinidhi Sabha, New Delhi.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  )
}
