'use client'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function CTASection() {
  const track = (e: React.MouseEvent<HTMLAnchorElement>, url?: string) => {
    if (url) e.preventDefault()
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion(url)
    } else if (url) {
      window.location.href = url
    }
  }

  return (
    <section
      id="cta-final"
      className="relative py-28 bg-navy text-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 600px 400px at 30% 50%, rgba(35,85,212,.18), transparent), radial-gradient(ellipse 400px 300px at 70% 50%, rgba(13,115,119,.15), transparent), #0f1f3d',
      }}
    >
      {/* Geometric SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 700 700" fill="none">
        <path d="M350 0 L700 175 L700 525 L350 700 L0 525 L0 175 Z" stroke="white" strokeWidth="1"/>
        <path d="M350 70 L630 210 L630 490 L350 630 L70 490 L70 210 Z" stroke="white" strokeWidth="1"/>
        <path d="M350 140 L560 245 L560 455 L350 560 L140 455 L140 245 Z" stroke="white" strokeWidth="1"/>
        <line x1="350" y1="0" x2="350" y2="700" stroke="white" strokeWidth=".5"/>
        <line x1="0" y1="350" x2="700" y2="350" stroke="white" strokeWidth=".5"/>
      </svg>

      <div className="relative max-w-[700px] mx-auto px-4 sm:px-7">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[.15em] text-white/40 mb-5">Ready to Build?</span>
        <h2 className="font-heading text-white text-[clamp(32px,5vw,52px)] font-extrabold tracking-[-2px] leading-[1.05] mb-5">
          Let&apos;s build something<br />scalable.
        </h2>
        <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Tell us about your project. We&apos;ll respond within 24 hours with a clear scope, timeline, and an honest technical assessment — no sales pitch.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+966500000000"
            className="btn-cta-primary"
            onClick={(e) => track(e, 'tel:+966500000000')}
          >
            Schedule a Call →
          </a>
          <a
            href="https://wa.me/966500000000"
            className="btn-cta-wa"
            onClick={(e) => track(e, 'https://wa.me/966500000000')}
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 text-[13px] text-white/25 font-medium">
          Based in the GCC · Serving Saudi Arabia, UAE, Qatar, Kuwait, and Bahrain · 24h response guaranteed
        </div>
      </div>
    </section>
  )
}
