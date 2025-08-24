import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body

    try {
      await resend.emails.send({
        from: 'you@yourdomain.com',      // your verified sender email
        to: 'your_email@domain.com',     // your receiving email
        subject: subject || 'New Contact Form Message',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      })
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
