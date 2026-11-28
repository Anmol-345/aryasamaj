import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const devanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arya Samaj — Truth, Knowledge & Service',
  description:
    'Discover Arya Samaj, a Vedic reform movement founded in 1875 by Swami Dayananda Saraswati, rooted in truth, knowledge, compassion, and service to humanity.',
  openGraph: {
    title: 'Arya Samaj — Truth, Knowledge & Service',
    description:
      'Live Satsang, Vedic Havan & Sanskar, Ten Principles, upcoming gatherings, and community seva.',
    type: 'website',
    locale: 'en_IN',
    images: ['/images/hero-1.jpg'],
  },
  icons: {
    icon: '/arya-samaj-logo.png',
    apple: '/arya-samaj-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f5ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${devanagari.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
