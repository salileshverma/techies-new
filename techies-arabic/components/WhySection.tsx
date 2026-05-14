const points = [
  { num: '01', title: 'هندسة قابلة للتوسع',    desc: 'أنظمة مصممة للتعامل مع 10 أضعاف حملك الحالي دون الحاجة لإعادة بناء.' },
  { num: '02', title: 'سرعة الشركات الناشئة، جودة المؤسسات', desc: 'تنفيذ رشيق بصرامة فريق هندسة المؤسسات — تسليم متوقع، في كل مرة.' },
  { num: '03', title: 'اتصال مباشر',     desc: 'لا مدراء حسابات. لا وسطاء. أنت تتحدث مباشرة مع المهندسين الذين يبنون منتجك.' },
  { num: '04', title: 'خبرة في سوق الخليج',     desc: 'نحن نفهم الخليج — متطلبات الامتثال، وثقافة الأعمال في المملكة العربية السعودية والإمارات العربية المتحدة.' },
  { num: '05', title: 'شراكة طويلة الأمد',    desc: 'دعم مدار يحافظ على أنظمتك محسنة وآمنة وتتطور مع عملك إلى أجل غير مسمى.' },
  { num: '06', title: 'الأمن والامتثال',    desc: 'بروتوكولات أمنية من الدرجة البنكية وامتثال إقليمي (SAMA/CITC) مدمج في كل طبقة من بنيتك التحتية.' },
]

const benchmarks = [
  { label: 'التسليم في الوقت المحدد',     pct: 96,   gradient: 'linear-gradient(90deg,#2355d4,#60a5fa)' },
  { label: 'رضا العملاء',  pct: 99,   gradient: 'linear-gradient(90deg,#0d7377,#34d399)' },
  { label: 'وقت تشغيل النظام (متوسط)',   pct: 99.8, gradient: 'linear-gradient(90deg,#7c3aed,#a78bfa)' },
  { label: 'العملاء المتكررون',        pct: 88,   gradient: 'linear-gradient(90deg,#c9a96e,#f59e0b)' },
]

const regions = ['🇸🇦 المملكة العربية السعودية','🇦🇪 الإمارات العربية المتحدة','🇶🇦 قطر','🇰🇼 الكويت','🌍 عالمي']

export default function WhySection() {
  return (
    <section id="why" className="py-24 bg-bg2">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="section-label">لماذا تيكيز (Techies)</div>
        <h2 className="section-title mb-14">الفرق يكمن في<br />التنفيذ.</h2>

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
            <div className="bench-title">معايير الأداء</div>
            
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
              <div className="bench-region-title">نشط في</div>
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
