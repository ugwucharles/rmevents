import { type FormEvent, useState } from 'react'
import { FadeIn } from './FadeIn'
import { contact } from '../data/content'
import { ConsultationModal } from './ConsultationModal'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('https://formspree.io/f/xbderkeq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="rm-section rm-section--dark">
      <div className="rm-container rm-contact">
        <FadeIn>
          <p className="rm-eyebrow rm-eyebrow--light">{contact.label}</p>
          <h2 className="rm-heading rm-heading-lg" style={{ marginTop: '1rem', color: 'var(--cream)' }}>
            {contact.title}
          </h2>
          <p style={{ marginTop: '1.25rem', fontSize: '1.1rem', fontWeight: 300, color: 'rgba(247,243,236,0.8)' }}>
            {contact.lead}
          </p>

          <div className="rm-contact__details" style={{ marginTop: '2.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <p className="rm-contact__label">Location</p>
              <p style={{ color: 'var(--cream)' }}>{contact.location.city}</p>
              <p style={{ color: 'rgba(247,243,236,0.7)' }}>{contact.location.country}</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p className="rm-contact__label">Telephone</p>
              <a href={`tel:${contact.phoneTel}`}>{contact.phone}</a>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p className="rm-contact__label">Email</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div style={{ marginTop: '2.25rem' }}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="rm-btn rm-btn--gold" 
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.65rem', width: 'auto', display: 'inline-flex', border: 'none', cursor: 'pointer' }}
              >
                Book Consultation
              </button>
            </div>
          </div>

          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(247,243,236,0.55)' }}>
            {contact.socialNote}
          </p>
          <div className="rm-social">
            {contact.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {submitted ? (
            <div className="rm-thanks">
              <h3 className="rm-heading" style={{ color: 'var(--gold-light)', fontSize: '2rem' }}>
                Thank you
              </h3>
              <p style={{ marginTop: '0.75rem', color: 'rgba(247,243,236,0.75)' }}>
                Your message has been received. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="rm-form" onSubmit={handleSubmit}>
              <div className="rm-form__row">
                <label>
                  <span>First name</span>
                  <input required name="firstName" type="text" />
                </label>
                <label>
                  <span>Last name</span>
                  <input required name="lastName" type="text" />
                </label>
              </div>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" />
              </label>
              <label>
                <span>Email</span>
                <input required name="email" type="email" />
              </label>
              <label>
                <span>Tell us about your occasion</span>
                <textarea required name="message" rows={4} />
              </label>
              <button type="submit" className="rm-btn rm-btn--gold" style={{ marginTop: '1rem', width: '100%' }}>
                Send inquiry
              </button>
            </form>
          )}
        </FadeIn>
      </div>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
