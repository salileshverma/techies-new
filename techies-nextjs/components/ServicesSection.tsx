const services = [
  {
    num: '01', icon: '🤖', cls: 'si-1',
    title: 'AI & Automation',
    desc: 'Intelligent workflows, LLM integrations, and process automation that eliminate repetitive operations and drive efficiency at enterprise scale.',
    tags: ['Machine Learning', 'LLM Integration', 'Data Pipelines'],
  },
  {
    num: '02', icon: '⚙️', cls: 'si-2',
    title: 'Custom Development',
    desc: 'Full-stack web and mobile applications built to your exact specification — scalable, maintainable, and enterprise-ready from the first commit.',
    tags: ['Web Apps', 'Mobile Apps', 'API Development'],
  },
  {
    num: '03', icon: '☁️', cls: 'si-3',
    title: 'Managed Services',
    desc: 'Ongoing infrastructure management, security monitoring, and 24/7 support — so your systems stay fast, secure, and available around the clock.',
    tags: ['Cloud Management', '24/7 Monitoring', 'DevOps'],
  },
  {
    num: '04', icon: '🚀', cls: 'si-4',
    title: 'MVP Development',
    desc: 'Concept to live product in weeks. We scope, design, and ship your minimum viable product with precision — ready for real users and investment.',
    tags: ['Rapid Prototyping', 'UX Design', 'Launch-Ready'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="services-intro">
          <div>
            <div className="section-label">What we build</div>
            <h2 className="section-title">End-to-end technology,<br />built to scale.</h2>
          </div>
          <p className="section-sub">
            From a single automation workflow to a full enterprise platform — we architect systems that perform at every stage of your growth. No shortcuts.
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
