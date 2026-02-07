'use server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  await resend.emails.send({
    from: 'Howell Dev <onboarding@resend.dev>',
    to: ['youremail@gmail.com'],
    subject: 'New Project Inquiry',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>${message}</p>
    `,
  })
}
