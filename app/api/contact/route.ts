import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // 1️⃣ Save to Supabase
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message }])

    if (error) throw error

    // 2️⃣ Send Email
    await resend.emails.send({
      from: 'Howell Dev <onboarding@resend.dev>',
      to: ['kelvinuc111@gmail.com'],
      subject: 'New Project Inquiry',
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
