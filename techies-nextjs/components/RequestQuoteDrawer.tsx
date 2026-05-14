'use client'
import { useState, useEffect } from 'react'

export default function RequestQuoteDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-quote-drawer', handleOpen)
    
    // Also listen for clicks on data-drawer="quote"
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-drawer="quote"]')
      if (target) {
        e.preventDefault()
        setIsOpen(true)
      }
    }
    document.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('open-quote-drawer', handleOpen)
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      mobile: formData.get('mobile'),
      message: formData.get('message'),
      formType: 'Request Quote Drawer'
    }

    try {
      // REPLACE THIS URL with your Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzejBz8BsftpZ5A6PE2P8e4VXGp6D9K4BY8L6Ew9GmDncDSSJL7kKdOLWwxXdTgRVOI/exec'
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      setStatus('success')
      setTimeout(() => {
        setIsOpen(false)
        setStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Submission error:', error)
      alert('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close" onClick={() => setIsOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="drawer-h">Request A Quote</h2>

        <form className="drawer-form" onSubmit={handleSubmit}>
          <div className="drawer-form-group">
            <input type="text" name="name" className="drawer-input" placeholder="Enter name" required />
          </div>
          <div className="drawer-form-group">
            <input type="email" name="email" className="drawer-input" placeholder="Enter email" required />
          </div>
          <div className="drawer-form-group">
            <input type="text" name="company" className="drawer-input" placeholder="Enter company" />
          </div>
          <div className="drawer-form-group">
            <input type="text" name="mobile" className="drawer-input" placeholder="Enter mobile" required />
          </div>
          <div className="drawer-form-group">
            <textarea name="message" className="drawer-input drawer-textarea" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="drawer-submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Submit'}
          </button>
        </form>

        <div className="drawer-sep" />

        <div className="drawer-footer">
          <h3 className="drawer-footer-h">Get In Touch</h3>
          <p className="drawer-footer-p">
            Please fill out the form below if you have a plan or project in mind that you&apos;d like to share with us.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div className="contact-info">
              <span className="contact-val">+995 555 915 915</span>
              <span className="contact-label">Georgia / KSA Support (Mon-Sat 9am-6pm)</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </div>
            <div className="contact-info">
              <span className="contact-val">+1 840 688 8419</span>
              <span className="contact-label">USA Support (Mon-Sat 9am-6pm)</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="contact-info">
              <span className="contact-val">Global Offices</span>
              <span className="contact-label">Georgia, USA, and KSA (Riyadh)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
