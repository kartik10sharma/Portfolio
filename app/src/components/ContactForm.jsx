import { useState } from 'react'

const ContactForm = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('sending')

    const formData = new FormData(event.target)
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('success')
      event.target.reset()
    } else {
      setResult('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Let's Build The Future</h2>
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project collaboration, consultation, etc"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your AI/ML project or how we can work together..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={result === 'sending'}
            >
              {result === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {result === 'success' && (
              <p className="form-success">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {result === 'error' && (
              <p className="form-error">
                ❌ Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm