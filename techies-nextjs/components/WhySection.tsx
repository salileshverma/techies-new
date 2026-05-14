const points = [
  { num: '01', title: 'Scalable Architecture',    desc: 'Systems designed to handle 10x your current load without a rebuild.' },
  { num: '02', title: 'Startup Speed, Enterprise Quality', desc: 'Agile execution with the rigour of an enterprise engineering team — predictable delivery, every time.' },
  { num: '03', title: 'Direct Communication',     desc: 'No account managers. No middlemen. You speak directly to the engineers building your product.' },
  { num: '04', title: 'GCC Market Expertise',     desc: 'We understand the Gulf — compliance requirements, and the business culture of Saudi Arabia and the UAE.' },
  { num: '05', title: 'Long-Term Partnership',    desc: 'Managed support keeps your systems optimised, secure, and evolving with your business indefinitely.' },
  { num: '06', title: 'Security & Compliance',    desc: 'Bank-grade security protocols and regional compliance (SAMA/CITC) baked into every layer of your infrastructure.' },
]

const benchmarks = [
  { label: 'On-time delivery',     pct: 96,   gradient: 'linear-gradient(90deg,#2355d4,#60a5fa)' },
  { label: 'Client satisfaction',  pct: 99,   gradient: 'linear-gradient(90deg,#0d7377,#34d399)' },
  { label: 'System uptime (avg)',   pct: 99.8, gradient: 'linear-gradient(90deg,#7c3aed,#a78bfa)' },
  { label: 'Repeat clients',        pct: 88,   gradient: 'linear-gradient(90deg,#c9a96e,#f59e0b)' },
]

const regions = ['🇸🇦 Saudi Arabia','🇦🇪 UAE','🇶🇦 Qatar','🇰🇼 Kuwait','🌍 Global']

export default function WhySection() {
  return (
    <section id="why" className="py-24 bg-bg2">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="section-label">Why Techies</div>
        <h2 className="section-title mb-14">The difference is in<br />the execution.</h2>

        <div className="why-grid-outer">
          {/* Points */}
          <div className="why-points">
            {points.map(p => (
              <div key={p.num} className="why-point">
                <div className="wp-num">{p.num}</div>
                <div>
                  <div className="wp-title">{p.title}</div>
                  <p className="wp-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benchmark card */}
          <div className="bench-card">
            <div className="bench-title">Performance Benchmarks</div>
            
            <div className="bench-rows">
              {benchmarks.map((b, i) => (
                <div key={b.label} className="bench-row">
                  <div className="bench-meta">
                    <span className="bench-label">{b.label}</span>
                    <span className="bench-pct">{b.pct}%</span>
                  </div>
                  <div className="bench-bar-bg">
                    <div className="bench-bar-fill" style={{ width: `${b.pct}%`, background: b.gradient, animationDelay: `${i * 0.1}s` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Regions */}
            <div className="bench-regions">
              <div className="bench-region-title">Active in</div>
              <div className="region-marquee">
                <div className="region-tags">
                  {regions.map(r => (
                    <span key={r} className="region-tag">{r}</span>
                  ))}
                  {/* Duplicates for seamless loop */}
                  {regions.map(r => (
                    <span key={r + '-dup'} className="region-tag">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
