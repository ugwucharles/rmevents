import { type FormEvent, useState, useEffect } from 'react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  // Custom states for checkbox and radio 'Other' option visibility
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([])
  const [eventTypeOtherText, setEventTypeOtherText] = useState('')
  const [showEventTypeOther, setShowEventTypeOther] = useState(false)

  const [planningInvestment, setPlanningInvestment] = useState('')
  const [planningInvestmentOtherText, setPlanningInvestmentOtherText] = useState('')
  const [showPlanningInvestmentOther, setShowPlanningInvestmentOther] = useState(false)

  // Lock scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const eventTypeOptions = ['Wedding', 'Birthday', 'Bae-cation', 'Corporate Event']
  const guestCountOptions = [
    '0 to 25',
    '26 to 50',
    '51 to 100',
    '101 to 150',
    '151 to 200',
  ]

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (option === 'Other') {
      setShowEventTypeOther(checked)
      if (!checked) setEventTypeOtherText('')
    } else {
      if (checked) {
        setSelectedEventTypes([...selectedEventTypes, option])
      } else {
        setSelectedEventTypes(selectedEventTypes.filter(t => t !== option))
      }
    }
  }

  const handleRadioChange = (value: string) => {
    setPlanningInvestment(value)
    if (value === 'Other') {
      setShowPlanningInvestmentOther(true)
    } else {
      setShowPlanningInvestmentOther(false)
      setPlanningInvestmentOtherText('')
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    // Compile checkbox types
    let eventTypes = [...selectedEventTypes]
    if (showEventTypeOther && eventTypeOtherText.trim()) {
      eventTypes.push(`Other: ${eventTypeOtherText.trim()}`)
    }

    // Compile radio planning investment value
    let investmentVal = planningInvestment
    if (planningInvestment === 'Other' && planningInvestmentOtherText.trim()) {
      investmentVal = `Other: ${planningInvestmentOtherText.trim()}`
    }

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      eventTypes: eventTypes.join(', '),
      destination: formData.get('destination'),
      timeframe: formData.get('timeframe'),
      guestCount: formData.get('guestCount'),
      privateVenuePreference: formData.get('privateVenue'),
      budget: formData.get('budget'),
      comfortableWithInvestment: investmentVal,
      otherRequests: formData.get('otherRequests') || 'None',
    }

    try {
      const response = await fetch('https://formspree.io/f/xbderkeq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Failed to submit consultation request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting consultation modal:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rm-modal-overlay" onClick={onClose}>
      <div className="rm-modal-container rm-modal-container--consultation" onClick={(e) => e.stopPropagation()}>
        <button className="rm-modal-close" style={{ color: 'var(--cream)' }} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="rm-modal-content" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
          {submitted ? (
            <div className="rm-thanks" style={{ border: 'none', minHeight: 'auto', padding: '3rem 1.5rem' }}>
              <h3 className="rm-heading" style={{ color: 'var(--gold-light)', fontSize: '2.2rem' }}>
                Thank You
              </h3>
              <p style={{ marginTop: '1rem', color: 'rgba(247,243,236,0.85)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Your perfect celebration layout has been received. We will review your vision and follow up shortly to schedule your personalized consultation.
              </p>
              <button className="rm-btn rm-btn--gold" style={{ marginTop: '2rem' }} onClick={onClose}>
                Close Window
              </button>
            </div>
          ) : (
            <form className="rm-modal-form" onSubmit={handleSubmit}>
              <div className="rm-modal-header" style={{ marginBottom: '2rem' }}>
                <h2 className="rm-heading rm-heading-lg" style={{ color: 'var(--gold-light)' }}>
                  Begin Your Consultation
                </h2>
                <p style={{ color: 'rgba(247,243,236,0.7)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Mapping Out Your Perfect Celebration!
                </p>
              </div>

              <div className="rm-modal-body">
                <div className="rm-form-section-title" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
                  Contact Information
                </div>
                <div className="rm-modal-grid" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '2rem' }}>
                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Name *</span>
                    <input required name="name" type="text" placeholder="Your Full Name" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                  </label>

                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Email Address *</span>
                    <input required name="email" type="email" placeholder="email@example.com" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                  </label>

                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Mobile Number *</span>
                    <input required name="phone" type="tel" placeholder="(123) 456-7890" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                  </label>
                </div>

                <div className="rm-form-section-title" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
                  Event Vision
                </div>
                
                <div className="rm-modal-label" style={{ marginBottom: '2rem', display: 'block' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.75rem' }}>What type of event are you planning? *</span>
                  <div className="rm-checkbox-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.5rem', marginBottom: '1rem' }}>
                    {eventTypeOptions.map((type) => (
                      <label key={type} className="rm-checkbox-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--cream)' }}>
                        <input 
                          type="checkbox" 
                          value={type} 
                          onChange={(e) => handleCheckboxChange(type, e.target.checked)} 
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                    <label className="rm-checkbox-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--cream)' }}>
                      <input 
                        type="checkbox" 
                        value="Other" 
                        onChange={(e) => handleCheckboxChange('Other', e.target.checked)} 
                      />
                      <span>Other</span>
                    </label>
                  </div>
                  {showEventTypeOther && (
                    <input 
                      type="text" 
                      required 
                      className="rm-other-text-input"
                      placeholder="Please specify event type" 
                      value={eventTypeOtherText}
                      onChange={(e) => setEventTypeOtherText(e.target.value)}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--gold)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none', marginTop: '0.5rem' }}
                    />
                  )}
                </div>

                <div className="rm-modal-grid" style={{ display: 'grid', gap: '1.5rem 1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '2rem' }}>
                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Preferred Destination *</span>
                    <input required name="destination" type="text" placeholder="e.g. Cabo, Mexico / Dallas, TX" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                  </label>

                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Specific Date / Timeframe *</span>
                    <input required name="timeframe" type="text" placeholder="e.g. Fall 2026 / Oct 12, 2026" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                  </label>

                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Expected Guest Count *</span>
                    <select name="guestCount" required defaultValue="" style={{ width: '100%', background: 'var(--charcoal)', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none', cursor: 'pointer' }}>
                      <option value="" disabled style={{ background: 'var(--charcoal)' }}>Select guest range</option>
                      {guestCountOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: 'var(--charcoal)' }}>{opt}</option>
                      ))}
                    </select>
                  </label>

                  <label className="rm-modal-label" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Do you desire private venues, resorts, or estates? *</span>
                    <input required name="privateVenue" type="text" placeholder="Yes / No / Specific request" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                  </label>
                </div>

                <label className="rm-modal-label" style={{ display: 'block', marginBottom: '2rem' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>
                    Event Budget * <em style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 'normal', textTransform: 'none', letterSpacing: 'normal' }}>(minimum $100,000 suggested for destination events)</em>
                  </span>
                  <input required name="budget" type="text" placeholder="e.g. $150,000" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none' }} />
                </label>

                <div className="rm-modal-label" style={{ display: 'block', marginBottom: '2rem' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.75rem' }}>Are you comfortable with a minimum $10,000 planning investment? *</span>
                  <div className="rm-radio-group" style={{ display: 'flex', gap: '1.5rem' }}>
                    <label className="rm-radio-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--cream)' }}>
                      <input 
                        type="radio" 
                        name="planningInvestment" 
                        value="Yes" 
                        required
                        checked={planningInvestment === 'Yes'}
                        onChange={() => handleRadioChange('Yes')}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="rm-radio-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--cream)' }}>
                      <input 
                        type="radio" 
                        name="planningInvestment" 
                        value="No" 
                        checked={planningInvestment === 'No'}
                        onChange={() => handleRadioChange('No')}
                      />
                      <span>No</span>
                    </label>
                    <label className="rm-radio-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--cream)' }}>
                      <input 
                        type="radio" 
                        name="planningInvestment" 
                        value="Other" 
                        checked={planningInvestment === 'Other'}
                        onChange={() => handleRadioChange('Other')}
                      />
                      <span>Other</span>
                    </label>
                  </div>
                  {showPlanningInvestmentOther && (
                    <input 
                      type="text" 
                      required 
                      className="rm-other-text-input"
                      placeholder="Please explain" 
                      value={planningInvestmentOtherText}
                      onChange={(e) => setPlanningInvestmentOtherText(e.target.value)}
                      style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid var(--gold)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none', marginTop: '0.75rem' }}
                    />
                  )}
                </div>

                <label className="rm-modal-label" style={{ display: 'block', marginBottom: '2rem' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(247, 243, 236, 0.6)', marginBottom: '0.35rem' }}>Other Requests / Comments</span>
                  <textarea name="otherRequests" rows={3} placeholder="Any specific visions, design styles, or comments..." style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', color: 'var(--cream)', padding: '0.5rem 0', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
                </label>
              </div>

              <div className="rm-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                <button type="button" className="rm-btn rm-btn--outline" onClick={onClose} style={{ padding: '0.7rem 1.5rem', fontSize: '0.65rem' }}>
                  Cancel
                </button>
                <button type="submit" className="rm-btn rm-btn--gold" disabled={loading} style={{ padding: '0.7rem 1.8rem', fontSize: '0.65rem' }}>
                  {loading ? 'Submitting...' : 'Submit Consultation Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
