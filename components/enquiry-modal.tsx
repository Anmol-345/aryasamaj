'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, X } from 'lucide-react'

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  ceremonyType: z.string().min(2, 'Please select a ceremony type'),
  message: z.string().min(5, 'Please add a short note or preferred date'),
})

type EnquiryValues = z.infer<typeof enquirySchema>

export function EnquiryModal({
  open,
  defaultCeremony,
  onClose,
}: {
  open: boolean
  defaultCeremony: string
  onClose: () => void
}) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      ceremonyType: defaultCeremony || 'Havan & Vedic rituals',
      message: '',
    },
  })

  useEffect(() => {
    if (open) {
      setStatusMessage(null)
      setServerError(null)
      reset({
        name: '',
        phone: '',
        ceremonyType: defaultCeremony || 'Havan & Vedic rituals',
        message: '',
      })
    }
  }, [open, defaultCeremony, reset])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const onSubmit = async (values: EnquiryValues) => {
    setServerError(null)
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) {
        setServerError(data.error || 'Could not submit enquiry. Please try again.')
        return
      }
      setStatusMessage(data.message)
    } catch {
      setServerError('Network error. Please call us directly or try again.')
    }
  }

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      onClick={onClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          aria-label="Close enquiry form"
          onClick={onClose}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <p className="eyebrow">
          CEREMONY ENQUIRY <span />
        </p>
        <h3 id="enquiry-modal-title">Arrange a Vedic ceremony</h3>

        {statusMessage ? (
          <div className="enquiry-success" role="status">
            <CheckCircle2 size={28} aria-hidden="true" />
            <p>{statusMessage}</p>
            <button type="button" className="btn btn-dark" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-field">
              <label htmlFor="enquiry-name">Full Name</label>
              <input id="enquiry-name" type="text" placeholder="Your name" {...register('name')} />
              {errors.name && <span className="field-error">{errors.name.message}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="enquiry-phone">Phone / WhatsApp</label>
              <input
                id="enquiry-phone"
                type="tel"
                placeholder="+91 98XXXXXXXX"
                {...register('phone')}
              />
              {errors.phone && <span className="field-error">{errors.phone.message}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="enquiry-type">Ceremony or Guidance</label>
              <select id="enquiry-type" {...register('ceremonyType')}>
                <option value="Havan & Vedic rituals">Havan &amp; Vedic rituals</option>
                <option value="Vedic sanskar">Vedic sanskar</option>
                <option value="Vedic marriage">Vedic marriage</option>
                <option value="Education & guidance">Education &amp; guidance</option>
                <option value="Weekly Satsang & prayer">Weekly Satsang &amp; prayer</option>
              </select>
              {errors.ceremonyType && (
                <span className="field-error">{errors.ceremonyType.message}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="enquiry-message">Preferred Date &amp; Notes</label>
              <textarea
                id="enquiry-message"
                rows={3}
                placeholder="Share preferred dates, location, or questions..."
                {...register('message')}
              />
              {errors.message && <span className="field-error">{errors.message.message}</span>}
            </div>

            {serverError && <p className="field-error">{serverError}</p>}

            <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
