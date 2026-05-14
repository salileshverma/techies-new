import Image from 'next/image'

const logos = [
  { src: '/geidea.svg', alt: 'Geidea' },
  { src: '/pif.png',    alt: 'PIF' },
  { src: '/tawrid.png', alt: 'Tawrid' },
  { src: '/nebras.png', alt: 'Nebras' },
  { src: '/ubl.png',    alt: 'UBL' },
  { src: '/mazaya.png', alt: 'Mazaya' },
  { src: '/bupa.png',   alt: 'Bupa' },
]

const stats = [
  { num: '80', suffix: '+', label: 'Projects Delivered' },
  { num: '6',  suffix: '+', label: 'Years in GCC Market' },
  { num: '99', suffix: '%', label: 'Client Retention Rate' },
  { num: '99.8', suffix: '%', label: 'Average System Uptime' },
]

export default function StatsSection() {
  return (
    <section id="stats" className="bg-navy py-10 text-center">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <h2 className="stats-title text-white font-extrabold mb-6 tracking-[-1px]">
          Companies that scale with us.
        </h2>

        {/* Logo strip */}
        <div className="overflow-hidden mb-8">
          <div className="stats-logos-wrap flex flex-nowrap sm:flex-wrap sm:justify-center sm:w-auto sm:animation-none gap-3 mb-0">
            {logos.map(l => (
              <div key={l.alt} className="logo-box">
                <Image src={l.src} alt={l.alt} width={100} height={22} style={{ maxHeight: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
            {/* Duplicates for mobile marquee */}
            {logos.map(l => (
              <div key={l.alt + '-dup'} className="logo-box logo-duplicate">
                <Image src={l.src} alt={l.alt} width={100} height={22} style={{ maxHeight: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat-item fade-up d2">
              <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
              <div className="stat-desc">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
