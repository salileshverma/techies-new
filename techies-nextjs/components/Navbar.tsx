'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const trackClick = (url?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion(url)
    }
    return url ? false : true
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="#" className="nav-logo">
          <Image src="/logotechies.png" alt="Techies Technologies" height={40} width={160} style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          <li><a href="#services" className="text-sm font-medium text-text2 no-underline hover:text-navy transition-colors">Services</a></li>
          <li><a href="#execution" className="text-sm font-medium text-text2 no-underline hover:text-navy transition-colors">Execution</a></li>
          <li><a href="#cases"     className="text-sm font-medium text-text2 no-underline hover:text-navy transition-colors">Projects</a></li>
          <li><a href="#why"       className="text-sm font-medium text-text2 no-underline hover:text-navy transition-colors">Why Us</a></li>
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/966500000000"
            className="btn-nav-ghost"
            onClick={() => trackClick('https://wa.me/966500000000')}
          >
            {/* WhatsApp icon (always visible on mobile, hidden text on desktop) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href="#cta-final"
            className="btn-nav-primary"
            onClick={() => trackClick()}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}
