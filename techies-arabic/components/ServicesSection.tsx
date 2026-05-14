const services = [
  {
    num: '01', icon: '🤖', cls: 'si-1',
    title: 'الذكاء الاصطناعي والأتمتة',
    desc: 'سير عمل ذكي، تكاملات LLM، وأتمتة العمليات التي تلغي العمليات المتكررة وتعزز الكفاءة على مستوى المؤسسات.',
    tags: ['تعلم الآلة', 'تكامل LLM', 'أنابيب البيانات'],
  },
  {
    num: '02', icon: '⚙️', cls: 'si-2',
    title: 'التطوير المخصص',
    desc: 'تطبيقات الويب والجوال المتكاملة المبنية وفقاً لمواصفاتك الدقيقة — قابلة للتوسع والصيانة وجاهزة للمؤسسات منذ الالتزام الأول.',
    tags: ['تطبيقات الويب', 'تطبيقات الجوال', 'تطوير API'],
  },
  {
    num: '03', icon: '☁️', cls: 'si-3',
    title: 'الخدمات المدارة',
    desc: 'إدارة مستمرة للبنية التحتية، مراقبة أمنية، ودعم على مدار الساعة طوال أيام الأسبوع — لتبقى أنظمتك سريعة وآمنة ومتاحة على مدار الساعة.',
    tags: ['إدارة السحاب', 'مراقبة 24/7', 'DevOps'],
  },
  {
    num: '04', icon: '🚀', cls: 'si-4',
    title: 'تطوير المنتج الأولي (MVP)',
    desc: 'من المفهوم إلى المنتج الحي في أسابيع. نحن نحدد النطاق ونصمم ونشحن منتجك الأولي بدقة — جاهز للمستخدمين الحقيقيين والاستثمار.',
    tags: ['النماذج الأولية السريعة', 'تصميم تجربة المستخدم', 'جاهز للإطلاق'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="services-intro">
          <div>
            <div className="section-label">ماذا نبني</div>
            <h2 className="section-title">تكنولوجيا متكاملة،<br />مبنية للتوسع.</h2>
          </div>
          <p className="section-sub">
            من سير عمل أتمتة واحد إلى منصة مؤسسية كاملة — نحن نصمم أنظمة تعمل في كل مرحلة من مراحل نموك. بدون اختصارات.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div key={s.num} className="svc-card fade-up d2">
              <div className="svc-num">{s.num}</div>
              <div className={`svc-icon-wrap ${s.cls}`}>{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
