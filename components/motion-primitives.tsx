'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function MandalaDivider() {
  return (
    <div className="mandala-divider" aria-hidden="true">
      <span className="mandala-line" />
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="1" />
        <path
          d="M18 3V9M18 27V33M3 18H9M27 18H33M7.4 7.4L11.6 11.6M24.4 24.4L28.6 28.6M28.6 7.4L24.4 11.6M11.6 24.4L7.4 28.6"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="18" cy="18" r="2.2" fill="currentColor" />
      </svg>
      <span className="mandala-line" />
    </div>
  )
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!showTop) return null

  return (
    <div className="floating-actions">
      <button
        type="button"
        className="floating-btn floating-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </div>
  )
}
