'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 40000) // 40 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className={`popup-overlay ${isOpen ? 'show' : ''}`}>
      <div className="popup-content">
        <button className="popup-close" onClick={() => setIsOpen(false)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Side */}
        <div className="popup-left">
          <div className="popup-tag">Why Brands Choose Techies</div>
          <h2 className="popup-h-left">Techies is Not Only an Idea But a Dream to Meet Business Needs.</h2>
          
          <div className="popup-regions">
            <div className="region-tag"><b>GE</b> Georgia</div>
            <div className="region-tag"><b>US</b> USA</div>
            <div className="region-tag"><b>SA</b> KSA</div>
          </div>

          <div className="popup-testimonial">
            <p className="testi-text">
              &quot;Techies helped us turn a complex operations workflow into a simple, automated system. The team was responsive, detail-oriented, and delivered on time.&quot;
            </p>
            <div className="testi-user">
              <div className="testi-avatar">JP</div>
              <div>
                <div className="testi-name">Jordan Peterson</div>
                <div className="testi-role">COO, Kuts</div>
              </div>
            </div>
          </div>

          <div className="client-strip">
            <div className="client-strip-title">Selected Clients We Work With</div>
            <div className="client-logos">
              <div className="client-logo-box">lit</div>
              <div className="client-logo-box">colo</div>
              <div className="client-logo-box">Mashfa</div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="popup-right">
          <div className="popup-brand-row">
            <div className="popup-logo-wrap">
              <Image src="/logotechies.png" alt="Techies" width={100} height={25} style={{height:'24px', width:'auto'}} />
              <div className="popup-divider" />
              <div className="popup-trusted">
                <span className="trusted-label">TRUSTED</span><br/>Technology Partner
              </div>
            </div>
          </div>

          <h3 className="popup-h-right">Let&apos;s Talk About Your Project</h3>
          <p className="popup-sub">Share a few details and our team will get back within 24 hours.</p>

          <form className="popup-form" onSubmit={(e) => e.preventDefault()}>
            <div className="popup-form-grid">
              <div className="form-group">
                <label className="form-label">Full Name*</label>
                <input type="text" className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email*</label>
                <input type="email" className="form-input" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-input" placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label className="form-label">Country</label>
                <input type="text" className="form-input" placeholder="e.g. USA, KSA" />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Number*</label>
                <input type="text" className="form-input" placeholder="+1 234..." required />
              </div>
              <div className="form-group">
                <label className="form-label">Services</label>
                <select className="form-input">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI Automation</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label">Project Details</label>
                <textarea className="form-input form-textarea" placeholder="Tell us briefly about your idea..."></textarea>
              </div>
            </div>
            <button type="submit" className="popup-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
