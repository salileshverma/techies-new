import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-7">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7 flex flex-wrap justify-between items-center gap-4">
        <a href="#" className="no-underline">
          <Image
            src="/logotechies.png"
            alt="Techies Technologies"
            width={140} height={35}
            style={{ height: '35px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
        </a>
        <div className="flex flex-wrap gap-6">
          {[
            { href: '#services', label: 'خدماتنا' },
            { href: '#cases',    label: 'أعمالنا' },
            { href: 'mailto:hello@techies.co', label: 'hello@techies.co' },
            { href: 'https://wa.me/966500000000', label: 'واتساب' },
            { href: '#',         label: 'لينكد إن' },
          ].map(l => (
            <a key={l.label} href={l.href} className="text-[13px] text-white/40 no-underline hover:text-white/80 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="text-[12px] text-white/20">© 2025 تيكيز تكنولوجيز</div>
      </div>
    </footer>
  )
}
