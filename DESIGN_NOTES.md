# Design Notes — Reference Analysis (`https://kiwsorg.com/`)

Reference inspected via live HTML & stylesheet (`https://kiwsorg.com/`, `/css/styles.css?v=23`).

---

## 1. Colour Palette (Reference)
- **Primary Dark / Navy**: `#0f1c2e` (`--navy`), soft `#1c2f4a` (`--navy-soft`)
- **Ink / Body Text**: `#152033` (`--ink`)
- **Muted Text**: `#5a6a7e` (`--muted`)
- **Light Paper / Background**: `#f5f7fa` (`--paper`), secondary `#e8eef5` (`--paper-2`)
- **Primary Accent (Saffron)**: `#e8950a` (`--saffron`), deep `#c47800` (`--saffron-deep`)
- **White**: `#ffffff` (`--white`)
- **Hairline Border**: `rgba(15, 28, 46, 0.1)` (`--line`)

> **Adaptation for Arya Samaj**: Keep our warm editorial Vedic palette (`#f8f5ef` ivory, `#292720` ink, `#71695f` muted, `#e6ded2` border, `#d89a42` saffron, `#943e28` terracotta, `#32251d` deep brown) while adopting the reference's structural contrast and hierarchy.

---

## 2. Typography
- **Display Font**: `"Syne", Georgia, sans-serif` (adapted to our `Georgia, 'Times New Roman', serif` display)
- **Body Font**: `"Figtree", system-ui, sans-serif` (adapted to our `Arial, Helvetica, sans-serif` sans)
- **Body Size & Line Height**: `1.0625rem` (`17px`), `line-height: 1.65`
- **Headings**:
  - `h1`: `clamp(2rem, 4.2vw, 3.35rem)` in hero (general `clamp(2.35rem, 5.2vw, 4.2rem)`), `font-weight: 700–800`, `line-height: 1.12`, `letter-spacing: -0.03em`
  - `h2`: `clamp(1.8rem, 3.4vw, 2.7rem)`
  - `h3`: `1.3rem`
- **Eyebrow**: `0.78rem`, `font-weight: 700`, `letter-spacing: 0.16em`, `text-transform: uppercase`, accent color

---

## 3. Spacing Rhythm & Layout
- **Container Max-Width**: `min(1140px, calc(100% - 2.5rem))` (`.wrap`)
- **Section Padding**: `5rem 0` (`80px`), tight sections `3.5rem 0` (`56px`)
- **Section Intro**: `max-width: 38rem`, `margin-bottom: 2.5rem`
- **Grid Gaps**:
  - 4-column Pillars: `1.25rem` (`20px`)
  - 3-column Services: `1.35rem` (`21.6px`)
  - 4-column Stats: `1rem` (`16px`)
  - Split sections: `3rem` (`48px`)
- **Breakpoints**: `960px` (tablet), `760px` (mobile nav & lightbox), `520px` (single-column grids)

---

## 4. Border Radius, Shadows, Cards & Buttons
- **Border Radius**: `6px` (`--radius`), panels `8px`, circular controls `50%`
- **Shadow**: `0 20px 50px rgba(15, 28, 46, 0.12)` (`--shadow`)
- **Cards**:
  - **Pillars (`.pillar`)**: `1.4rem 1.2rem` padding, translucent white surface `rgba(255,255,255,0.7)`, `1px solid var(--line)`, numbered `01`–`04` in display font + accent color.
  - **Stats (`.stat`)**: Dark surface (`--navy`), `1.5rem 1.2rem` padding, large accent number (`clamp(1.8rem, 3vw, 2.4rem)`) + short label.
  - **Services (`.service-tile`)**: `3/2` aspect-ratio image with `scale(1.03)` hover zoom, title, short muted description.
- **Buttons (`.btn`)**: `min-height: 3rem`, `0.7rem 1.3rem` padding, `border-radius: 6px`, `font-weight: 650`, `translateY(-1px)` hover lift, `cubic-bezier(0.22, 1, 0.36, 1)` easing. Variants: primary (accent fill), dark, ghost (translucent white border on dark hero), outline.

---

## 5. Navigation Behaviour
- **Skip Link**: `.skip-link` (`top: -4rem`, reveals at `top: 1rem` on `:focus`).
- **Header (`.site-header`)**: `position: fixed`, `height: 4.5rem`. Transparent with white text over the hero (`is-home:not(.is-scrolled)`), transitions to translucent/solid blurred bar (`backdrop-filter: blur(14px)`) with bottom border and subtle shadow on scroll (`.is-scrolled`).
- **Services Dropdown (`.nav-dropdown`)**: Hover & `focus-within` reveal (with invisible `::before` bridge so hover doesn't drop), `min-width: 14rem`, elevated card menu.
- **Mobile Menu (`<= 760px`)**: Hamburger toggle (`aria-expanded`, `aria-controls`) opens fixed drawer below header.

---

## 6. Hero Behaviour
- **Full-bleed Slideshow**: `min-height: 100svh`, `.hero-slide` crossfade (`opacity: 0 -> 1`, `transition: opacity 1s ease`) with subtle Ken Burns zoom (`heroZoom 8s`) on active slide.
- **Scrim**: Multi-stop dark gradient overlay (`.hero-scrim`) ensuring WCAG AA contrast for white headline, eyebrow, lede, and dual CTAs (primary + ghost).
- **Controls**: Circular prev/next arrow buttons (`.hero-arrow`, `3.4rem`) on left/right edges, bottom centered dot indicators (`role="tablist"`), auto-advance with pause on hover, and full `prefers-reduced-motion: reduce` support.
