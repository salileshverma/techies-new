'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const barsRef = useRef<HTMLDivElement[]>([])
  const heights = [45, 60, 75, 55, 88, 65, 95, 70]

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return
      setTimeout(() => {
        bar.style.transition = 'height 1s ease'
        bar.style.height = heights[i] + '%'
      }, i * 80)
    })
    const interval = setInterval(() => {
      barsRef.current.forEach(bar => {
        if (!bar) return
        bar.style.transition = 'height 1.4s ease'
        bar.style.height = (Math.random() * 60 + 30) + '%'
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const trackClick = (e: React.MouseEvent<HTMLAnchorElement>, url?: string) => {
    if (url) e.preventDefault()
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion(url)
    } else if (url) {
      window.location.href = url
    }
  }

  return (
    <section id="hero" className="relative pt-[120px] pb-20 overflow-hidden">
      {/* Background ornament */}
      <svg className="hero-ornament" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M240 0 L480 120 L480 360 L240 480 L0 360 L0 120 Z" stroke="#0f1f3d" strokeWidth="1"/>
        <path d="M240 60 L420 150 L420 330 L240 420 L60 330 L60 150 Z" stroke="#0f1f3d" strokeWidth="1"/>
        <path d="M240 120 L360 180 L360 300 L240 360 L120 300 L120 180 Z" stroke="#0f1f3d" strokeWidth="1"/>
        <path d="M240 180 L300 210 L300 270 L240 300 L180 270 L180 210 Z" stroke="#0f1f3d" strokeWidth="1"/>
        <line x1="240" y1="0" x2="240" y2="480" stroke="#0f1f3d" strokeWidth=".5"/>
        <line x1="0" y1="240" x2="480" y2="240" stroke="#0f1f3d" strokeWidth=".5"/>
        <line x1="0" y1="120" x2="480" y2="360" stroke="#0f1f3d" strokeWidth=".5"/>
        <line x1="480" y1="120" x2="0" y2="360" stroke="#0f1f3d" strokeWidth=".5"/>
      </svg>

      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text2 mb-5 fade-up d1">
              <span className="live-dot" />
              GCC Enterprise Technology
            </div>
            <h1 className="font-heading text-[clamp(36px,5vw,58px)] font-extrabold text-navy leading-[1.05] tracking-[-2px] mb-5 fade-up d2">
              Enterprise systems<br />built for <em className="text-blue not-italic">scale.</em>
            </h1>
            <p className="text-base text-muted leading-relaxed mb-8 max-w-md fade-up d3">
              AI automation, custom development, and managed infrastructure — engineered for Saudi Arabia, UAE, and the wider GCC market.
            </p>
            <div className="flex flex-wrap gap-3 fade-up d4">
              <a href="#cta-final" className="btn-primary" onClick={(e) => trackClick(e)}>
                Book a Call <em className="arrow-icon">→</em>
              </a>
              <a href="#cases" className="btn-outline">
                View Projects <em className="arrow-icon">→</em>
              </a>
            </div>
          </div>

          {/* RIGHT — Dashboard */}
          <div className="relative fade-up d4">
            {/* Floating chip 1 */}
            <div className="hero-chip chip-1">
              <span className="chip-icon">🇸🇦</span>
              KSA &amp; GCC Region
            </div>

            <div className="dash-shell">
              <div className="dash-topbar">
                <div className="tb-dots flex gap-1.5">
                  <span className="tb-dot" /><span className="tb-dot" /><span className="tb-dot" />
                </div>
                <span className="tb-url">techies-client-dashboard.app</span>
                <div className="tb-status">
                  <span className="status-dot" /> All systems operational
                </div>
              </div>
              <div className="dash-body">
                <div className="dash-tabs">
                  {['Overview','Analytics','Finance','Settings'].map((t,i) => (
                    <span key={t} className={`dash-tab${i===0?' active':''}`}>{t}</span>
                  ))}
                </div>
                <div className="kpi-row">
                  <div className="kpi-card">
                    <div className="kpi-label">Revenue</div>
                    <div className="kpi-val">SAR 12.4M</div>
                    <div className="kpi-up">↑ 24.6% this month</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Users</div>
                    <div className="kpi-val">18,702</div>
                    <div className="kpi-up">↑ 32% vs last month</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">AI Tasks</div>
                    <div className="kpi-val">94,180</div>
                    <div className="kpi-up">↑ Auto-scaling</div>
                  </div>
                </div>
                <div className="text-[10px] text-muted font-bold uppercase tracking-wider mb-2">Monthly Performance</div>
                <div className="mini-chart mb-3">
                  {heights.map((h, i) => (
                    <div
                      key={i}
                      className={`mc-bar${[2,4,6].includes(i) ? ' hi' : ''}`}
                      style={{ height: '4px' }}
                      ref={el => { if (el) barsRef.current[i] = el }}
                    />
                  ))}
                </div>
                <table className="mini-table">
                  <thead>
                    <tr><th>Product</th><th>Units</th><th>SAR Value</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Enterprise CRM</td><td>142</td><td>4.2M</td><td><span className="tbl-badge badge-live">Live</span></td></tr>
                    <tr><td>Analytics Engine</td><td>89</td><td>3.1M</td><td><span className="tbl-badge badge-live">Live</span></td></tr>
                    <tr><td>Mobile Platform</td><td>211</td><td>2.8M</td><td><span className="tbl-badge badge-build">Build</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Floating chip 2 */}
            <div className="hero-chip chip-2">
              <span className="chip-icon">⚡</span>
              Latest: CRM Platform v4.2
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
