import Image from 'next/image'

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,opacity:.85}}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="mb-12">
          <div className="section-label">أعمال مختارة</div>
          <h2 className="section-title">أنظمة مبنية للأداء<br />على نطاق واسع.</h2>
        </div>

        {/* Top 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* colo.co */}
          <a href="https://trycolo.co./" target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="case-card">
              <div className="case-visual">
                <Image 
                  src="/colo.webp" 
                  alt="colo.co. — Fintech Platform" 
                  fill 
                  priority 
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit:'cover',objectPosition:'top center'}} 
                />
                <div className="case-visual-overlay">
                  <div className="case-overlay-pill"><ExternalIcon />عرض المشروع</div>
                </div>
              </div>
              <div className="case-info">
                <div className="case-tag ct-blue">
                  <span style={{width:5,height:5,borderRadius:'50%',background:'currentColor',display:'inline-block'}} />
                  التكنولوجيا المالية · الخليج
                </div>
                <div className="case-title">colo.co.</div>
                <p className="case-desc">برنامج متكامل للمالية والأعمال للشركات الصغيرة والمتناهية الصغر — تبسيط الإدارة المالية والعمليات في جميع أنحاء الخليج.</p>
                <div className="case-metrics">
                  <div className="case-metric"><div className="cm-val">100%</div><div className="cm-label">آمن</div></div>
                  <div className="case-metric"><div className="cm-val">متكامل</div><div className="cm-label">حل أعمال</div></div>
                  <div className="case-metric"><div className="cm-val">الخليج</div><div className="cm-label">سوق المنطقة</div></div>
                </div>
              </div>
            </div>
          </a>

          {/* Mashfa */}
          <a href="https://www.mashfa.com/en" target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="case-card">
              <div className="case-visual">
                <Image 
                  src="/mashfa.webp" 
                  alt="Mashfa — Digital Healthcare" 
                  fill 
                  priority 
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit:'cover',objectPosition:'top center'}} 
                />
                <div className="case-visual-overlay">
                  <div className="case-overlay-pill"><ExternalIcon />عرض المشروع</div>
                </div>
              </div>
              <div className="case-info">
                <div className="case-tag ct-green">
                  <span style={{width:5,height:5,borderRadius:'50%',background:'currentColor',display:'inline-block'}} />
                  الرعاية الصحية · الخليج
                </div>
                <div className="case-title">Mashfa</div>
                <p className="case-desc">منصة رقمية للرعاية الصحية تربط المرضى بأطباء موثوقين عبر الإنترنت — توفير استشارات طبية موثوقة ويمكن الوصول إليها بسهولة.</p>
                <div className="case-metrics">
                  <div className="case-metric"><div className="cm-val">24/7</div><div className="cm-label">متاح دائماً</div></div>
                  <div className="case-metric"><div className="cm-val">100%</div><div className="cm-label">أطباء موثوقون</div></div>
                  <div className="case-metric"><div className="cm-val">أونلاين</div><div className="cm-label">استشارات طبية</div></div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Wide card — Lit */}
        <div className="mt-7">
          <a href="https://trylit.co/" target="_blank" rel="noopener noreferrer" className="block no-underline">
            <div className="case-card case-card-wide">
              <div className="case-visual case-visual-wide" style={{position:'relative'}}>
                <Image 
                  src="/trylit.webp" 
                  alt="Lit — Beauty Brand" 
                  fill 
                  quality={65}
                  sizes="100vw"
                  style={{objectFit:'cover',objectPosition:'top center'}} 
                />
                <div className="case-visual-overlay">
                  <div className="case-overlay-pill"><ExternalIcon />عرض المشروع</div>
                </div>
              </div>
              <div className="case-info case-info-wide">
                <div className="case-tag ct-teal">
                  <span style={{width:5,height:5,borderRadius:'50%',background:'currentColor',display:'inline-block'}} />
                  الجمال · B2C · الخليج
                </div>
                <div className="case-title">Lit</div>
                <p className="case-desc">حملة فعاليات ما قبل الإطلاق، وتجربة صفحة الهبوط، وموقع مراسلة المنتج — تحديد التواجد الرقمي لعلامة تجارية للجمال من الجيل القادم في منطقة الخليج.</p>
                <div className="case-metrics">
                  <div className="case-metric"><div className="cm-val">عالي</div><div className="cm-label">معدل التحويل</div></div>
                  <div className="case-metric"><div className="cm-val">تجربة</div><div className="cm-label">تركز على العلامة</div></div>
                  <div className="case-metric"><div className="cm-val">سريع</div><div className="cm-label">إطلاق المشروع</div></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
