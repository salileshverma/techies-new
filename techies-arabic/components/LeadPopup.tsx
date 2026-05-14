'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 40000) // 40 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      country: formData.get('country'),
      mobile: formData.get('mobile'),
      service: formData.get('service'),
      message: formData.get('message'),
      formType: 'Lead Popup'
    }

    try {
      // REPLACE THIS URL with your Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzejBz8BsftpZ5A6PE2P8e4VXGp6D9K4BY8L6Ew9GmDncDSSJL7kKdOLWwxXdTgRVOI/exec'
      
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple redirect handling
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
          <div className="popup-tag">لماذا تختار العلامات التجارية تيكيز</div>
          <h2 className="popup-h-left">تيكيز ليست مجرد فكرة بل هي حلم لتلبية احتياجات الأعمال.</h2>
          
          <div className="popup-regions">
            <div className="region-tag"><b>GE</b> جورجيا</div>
            <div className="region-tag"><b>US</b> الولايات المتحدة</div>
            <div className="region-tag"><b>SA</b> السعودية</div>
          </div>

          <div className="popup-testimonial">
            <p className="testi-text">
              &quot;ساعدتنا تيكيز في تحويل سير عمل عمليات معقد إلى نظام بسيط ومؤتمت. كان الفريق مستجيباً ومهتماً بالتفاصيل وسلم في الوقت المحدد.&quot;
            </p>
            <div className="testi-user">
              <div className="testi-avatar">JP</div>
              <div>
                <div className="testi-name">جوردان بيترسون</div>
                <div className="testi-role">مدير العمليات، Kuts</div>
              </div>
            </div>
          </div>

          <div className="client-strip">
            <div className="client-strip-title">عملاء مختارون نعمل معهم</div>
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
                <span className="trusted-label">موثوق</span><br/>شريك تكنولوجي
              </div>
            </div>
          </div>

          <h3 className="popup-h-right">لنتحدث عن مشروعك</h3>
          <p className="popup-sub">شاركنا بعض التفاصيل وسيعود إليك فريقنا خلال 24 ساعة.</p>

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="popup-form-grid">
              <div className="form-group">
                <label className="form-label">الاسم الكامل*</label>
                <input type="text" name="name" className="form-input" placeholder="مثلاً: أحمد علي" required />
              </div>
              <div className="form-group">
                <label className="form-label">البريد الإلكتروني*</label>
                <input type="email" name="email" className="form-input" placeholder="ahmed@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">اسم الشركة</label>
                <input type="text" name="company" className="form-input" placeholder="اسم شركتك" />
              </div>
              <div className="form-group">
                <label className="form-label">الدولة</label>
                <input type="text" name="country" className="form-input" placeholder="مثلاً: السعودية، الإمارات" />
              </div>
              <div className="form-group">
                <label className="form-label">رقم الاتصال*</label>
                <input type="text" name="mobile" className="form-input" placeholder="+966..." required />
              </div>
              <div className="form-group">
                <label className="form-label">الخدمات</label>
                <select name="service" className="form-input">
                  <option value="">اختر خدمة</option>
                  <option value="Web Development">تطوير الويب</option>
                  <option value="Mobile App">تطبيق جوال</option>
                  <option value="AI Automation">أتمتة الذكاء الاصطناعي</option>
                  <option value="UI/UX Design">تصميم واجهة وتجربة المستخدم</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label">تفاصيل المشروع</label>
                <textarea name="message" className="form-input form-textarea" placeholder="أخبرنا باختصار عن فكرتك..."></textarea>
              </div>
            </div>
            <button type="submit" className="popup-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'جاري الإرسال...' : status === 'success' ? 'تم الإرسال!' : 'إرسال'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
