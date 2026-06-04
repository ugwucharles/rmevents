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
      const response = await fetch('https://formspree.io/f/xbdejwja', {
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
        <button className="rm-modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="rm-modal-content">
          {submitted ? (
            <div className="rm-thanks">
              <h3 className="rm-heading">Thank You</h3>
              <p style={{ marginTop: '1rem', color: 'rgba(247,243,236,0.85)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Your perfect celebration layout has been received. We will review your vision and follow up shortly to schedule your personalized consultation.
              </p>
              <button className="form-submit-btn" style={{ marginTop: '2rem' }} onClick={onClose}>
                Close Window
              </button>
            </div>
          ) : (
            <form className="consultation-form" onSubmit={handleSubmit}>
              {/* Header */}
              <div className="consultation-form__header">
                <h2 className="consultation-form__title">Begin Your Consultation</h2>
                <p className="consultation-form__subtitle">Tell us about your dream event and we'll craft a bespoke experience.</p>
              </div>

              {/* Personal Info Section */}
              <div className="consultation-form__section">
                <div className="consultation-form__section-label">Personal Details</div>
                <div className="consultation-form__grid">
                  <div className="form-group">
                    <label htmlFor="consult-name">Name *</label>
                    <input required id="consult-name" name="name" type="text" placeholder="Your Full Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-email">Email Address *</label>
                    <input required id="consult-email" name="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-phone">Mobile Number *</label>
                    <input required id="consult-phone" name="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>
                </div>
              </div>

              {/* Event Vision Section */}
              <div className="consultation-form__section">
                <div className="consultation-form__section-label">Event Vision</div>

                <div className="form-group">
                  <label>What type of event are you planning? *</label>
                  <div className="consultation-form__checkbox-group">
                    {eventTypeOptions.map((type) => (
                      <label key={type} className="consultation-form__check-label">
                        <input
                          type="checkbox"
                          value={type}
                          onChange={(e) => handleCheckboxChange(type, e.target.checked)}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                    <label className="consultation-form__check-label">
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
                      placeholder="Please specify event type"
                      value={eventTypeOtherText}
                      onChange={(e) => setEventTypeOtherText(e.target.value)}
                      className="consultation-form__other-input"
                    />
                  )}
                </div>

                <div className="consultation-form__grid">
                  <div className="form-group">
                    <label htmlFor="consult-destination">Preferred Destination *</label>
                    <input required id="consult-destination" name="destination" type="text" placeholder="e.g. Cabo, Mexico / Dallas, TX" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-timeframe">Specific Date / Timeframe *</label>
                    <input required id="consult-timeframe" name="timeframe" type="text" placeholder="e.g. Fall 2026 / Oct 12, 2026" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-guests">Expected Guest Count *</label>
                    <select id="consult-guests" name="guestCount" required defaultValue="">
                      <option value="" disabled>Select guest range</option>
                      {guestCountOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="consult-venue">Private venues, resorts, or estates? *</label>
                    <input required id="consult-venue" name="privateVenue" type="text" placeholder="Yes / No / Specific request" />
                  </div>
                </div>
              </div>

              {/* Budget Section */}
              <div className="consultation-form__section">
                <div className="consultation-form__section-label">Investment</div>

                <div className="form-group">
                  <label htmlFor="consult-budget">
                    Event Budget * <em style={{ fontSize: '0.75rem', opacity: 0.7, fontWeight: 'normal', textTransform: 'none', letterSpacing: 'normal' }}>(minimum $100,000 suggested for destination events)</em>
                  </label>
                  <input required id="consult-budget" name="budget" type="text" placeholder="e.g. $150,000" />
                </div>

                <div className="form-group">
                  <label>Comfortable with a minimum $10,000 planning investment? *</label>
                  <div className="consultation-form__radio-group">
                    <label className="consultation-form__check-label">
                      <input type="radio" name="planningInvestment" value="Yes" checked={planningInvestment === 'Yes'} onChange={() => handleRadioChange('Yes')} />
                      <span>Yes</span>
                    </label>
                    <label className="consultation-form__check-label">
                      <input type="radio" name="planningInvestment" value="No" checked={planningInvestment === 'No'} onChange={() => handleRadioChange('No')} />
                      <span>No</span>
                    </label>
                    <label className="consultation-form__check-label">
                      <input type="radio" name="planningInvestment" value="Other" checked={planningInvestment === 'Other'} onChange={() => handleRadioChange('Other')} />
                      <span>Other</span>
                    </label>
                  </div>
                  {showPlanningInvestmentOther && (
                    <input
                      type="text"
                      required
                      placeholder="Please explain"
                      value={planningInvestmentOtherText}
                      onChange={(e) => setPlanningInvestmentOtherText(e.target.value)}
                      className="consultation-form__other-input"
                    />
                  )}
                </div>
              </div>

              {/* Additional */}
              <div className="consultation-form__section">
                <div className="form-group">
                  <label htmlFor="consult-other">Other Requests / Comments</label>
                  <textarea id="consult-other" name="otherRequests" rows={3} placeholder="Any specific visions, design styles, or comments..." />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="consultation-form__actions">
                <button type="button" className="form-cancel-btn" onClick={onClose}>Cancel</button>
                <button type="submit" className="form-submit-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
