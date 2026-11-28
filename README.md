# Arya Samaj — Truth, Knowledge & Service

Single-page editorial Next.js (App Router) website for Arya Samaj.

## Editing Content

Structured site data lives in `content/`:

- `content/events.json` — Upcoming gatherings, dates, times, and locations.
- `content/schedule.json` — Next Havan/Satsang banner, daily Vedic schedule, and recent recordings.
- `content/principles.json` — Ten Guiding Principles (EN + हिन्दी titles, summaries, and expanded details).
- `content/services.json` — Ceremonies and guidance cards (EN + हिन्दी titles, descriptions, and "what to expect").

Bilingual UI labels (EN / हिन्दी) are defined in `lib/i18n.ts`.

## Environment Variables & Placeholders

Create `.env.local` to enable optional integrations:

```env
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_youtube_channel_id
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
NEXT_PUBLIC_SITE_URL=https://your-domain.org
```

Placeholders to replace before production:
- **UPI QR & Bank Details**: `components/donate-section.tsx`
- **WhatsApp Number & Social Links**: `components/contact-section.tsx`, `components/motion-primitives.tsx`, `components/site-footer.tsx`
- **Enquiry Persistence & Newsletter**: `app/api/enquiry/route.ts` and `components/site-footer.tsx` (marked with `TODO`)

## Commands

```bash
pnpm dev
pnpm build
```
