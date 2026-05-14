const weeks = [
  {
    week: 'الأسبوع 1', title: 'الاكتشاف والتخطيط',
    desc: "غوص عميق في أهداف عملك ومتطلباته وقيوده. نحن لا نكتب سطراً واحداً من الكود حتى نفهم المشكلة تماماً.",
    items: ['وثيقة المتطلبات', 'النطاق التقني', 'خارطة طريق المشروع'],
  },
  {
    week: 'الأسبوع 2', title: 'تجربة المستخدم والهندسة',
    desc: 'تحديد هندسة النظام وتصميم تجربة المستخدم قبل بدء التطوير. يتم الاتفاق على اختيار التكنولوجيا وعقود API مسبقاً.',
    items: ['نماذج تجربة المستخدم', 'مخطط الهندسة', 'عقود API'],
  },
  {
    week: 'الأسبوع 3', title: 'سباق التطوير',
    desc: 'سباقات Agile بشفافية كاملة. عروض حية كل أسبوع — ترى التقدم باستمرار، وليس فقط عند خط النهاية.',
    items: ['بناء الميزات الأساسية', 'جلسات عرض أسبوعية', 'بناء التكامل'],
  },
  {
    week: 'الأسبوع 4', title: 'الاختبار وضمان الجودة',
    desc: 'ضمان جودة شامل، ومعايير أداء، ومراجعة أمنية، واختبار حمل قبل أن يرى مستخدم واحد المنتج.',
    items: ['ضمان الجودة وحل الأخطاء', 'معايير الأداء', 'التدقيق الأمني'],
  },
  {
    week: 'الأسبوع 5', title: 'النشر',
    desc: 'إطلاق تدريجي بدون توقف. توفير البنية التحتية، خط أنابيب CI/CD، ومراقبة فورية منذ اليوم الأول.',
    items: ['نشر الإنتاج', 'إعداد خط أنابيب CI/CD', 'المراقبة والتنبيه'],
  },
  {
    week: 'الأسبوع 6+', title: 'التوسع والدعم',
    desc: 'نبقى متفاعلين بعد الإطلاق. دعم مدار، تحسين الأداء، واستمرار التطوير مع نمو عملك.',
    items: ['دعم مستمر مدار', 'ضبط الأداء', 'تطوير الميزات'],
  },
]

export default function ExecutionSection() {
  return (
    <section id="execution" className="py-24 bg-bg2">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="execution-head">
          <div className="section-label">كيف ننفذ</div>
          <h2 className="section-title">أسبوع بأسبوع.<br />صفر مفاجآت.</h2>
          <p className="section-sub mt-4">
            كل ارتباط يتبع نموذجاً منظماً وشفافاً. ستعرف بالضبط ما يتم بناؤه، متى يتم شحنه، وما الذي سيأتي بعد ذلك.
          </p>
        </div>

        <div className="exec-timeline">
          {weeks.map(w => (
            <div key={w.week} className="exec-card fade-up d2">
              <div className="exec-week">{w.week}</div>
              <div className="exec-num">
                {weeks.indexOf(w) + 1 < 10 ? `0${weeks.indexOf(w) + 1}` : weeks.indexOf(w) + 1}
              </div>
              <div className="exec-title">{w.title}</div>
              <p className="exec-desc">{w.desc}</p>
              <div className="exec-items">
                {w.items.map(item => (
                  <div key={item} className="exec-item">
                    <span className="exec-check">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
