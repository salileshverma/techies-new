const weeks = [
  {
    week: 'Week 1', title: 'Discovery & Planning',
    desc: "Deep-dive into your business goals, requirements, and constraints. We don't write a single line of code until we fully understand the problem.",
    items: ['Requirements document', 'Technical scope', 'Project roadmap'],
  },
  {
    week: 'Week 2', title: 'UI/UX & Architecture',
    desc: 'System architecture and UX design defined before development begins. Technology selection and API contracts agreed upfront.',
    items: ['UI/UX wireframes', 'Architecture diagram', 'API contracts'],
  },
  {
    week: 'Week 3', title: 'Development Sprint',
    desc: 'Agile sprints with full transparency. Working demos every week — you see progress continuously, not just at the finish line.',
    items: ['Core feature builds', 'Weekly demo sessions', 'Integration builds'],
  },
  {
    week: 'Week 4', title: 'Testing & QA',
    desc: 'Comprehensive QA, performance benchmarking, security review, and load testing before a single user sees the product.',
    items: ['QA & bug resolution', 'Performance benchmarks', 'Security audit'],
  },
  {
    week: 'Week 5', title: 'Deployment',
    desc: 'Zero-downtime staged rollout. Infrastructure provisioning, CI/CD pipeline, and real-time monitoring live from day one.',
    items: ['Production deployment', 'CI/CD pipeline setup', 'Monitoring & alerting'],
  },
  {
    week: 'Week 6+', title: 'Scale & Support',
    desc: 'We stay engaged post-launch. Managed support, performance optimisation, and continued iteration as your business grows.',
    items: ['Managed ongoing support', 'Performance tuning', 'Feature iteration'],
  },
]

export default function ExecutionSection() {
  return (
    <section id="execution" className="py-24 bg-bg2">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="execution-head">
          <div className="section-label">How we execute</div>
          <h2 className="section-title">Week-by-week.<br />Zero surprises.</h2>
          <p className="section-sub mt-4">
            Every engagement follows a structured, transparent model. You know exactly what&apos;s being built, when it ships, and what comes next.
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
