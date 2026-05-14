const items = [
  'الذكاء الاصطناعي والأتمتة','التطوير المخصص','الخدمات المدارة',
  'تطوير MVP','تطبيقات الجوال','هندسة قابلة للتوسع',
  'تحليلات المؤسسات','خبرة في سوق الخليج',
]

export default function StripMarquee() {
  return (
    <div
      id="strip"
      className="bg-bg border-t border-b border-border overflow-hidden py-5"
    >
      <div className="strip-track">
        <div className="strip-half">
          {items.map(item => <div key={item} className="strip-item">{item}</div>)}
        </div>
        <div className="strip-half" aria-hidden="true">
          {items.map(item => <div key={item+'-dup'} className="strip-item">{item}</div>)}
        </div>
      </div>
    </div>
  )
}
