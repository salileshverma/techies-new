const stack = [
  'React','Node.js','Python','Flutter','AWS','OpenAI',
  'PostgreSQL','Docker','Next.js','Redis','Kubernetes','Terraform',
]

export default function StackMarquee() {
  return (
    <section id="stack" className="py-16 bg-white">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="text-[11px] font-bold uppercase tracking-[.15em] text-blue mb-8 text-center">
          مجموعة التكنولوجيا
        </div>
        <div className="stack-marquee">
          <div className="stack-track">
            {[...stack, ...stack].map((item, i) => (
              <div key={i} className="stack-item">
                <span className="stack-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
