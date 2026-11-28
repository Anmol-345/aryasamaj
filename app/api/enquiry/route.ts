import { NextResponse } from 'next/server'
import { z } from 'zod'

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  ceremonyType: z.string().min(2, 'Please select a ceremony or inquiry type'),
  message: z.string().min(5, 'Please include a short note or preferred date'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = enquirySchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    // TODO: Persist ceremony enquiry to a database (e.g. Supabase/Postgres) and/or send email notification.
    console.info('[Arya Samaj Enquiry]', {
      ...parsed.data,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      ok: true,
      message: 'Enquiry received. Our Mandir coordinator will reach out shortly.',
    })
  } catch {
    return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 })
  }
}
