import type { Metadata } from 'next'
import { Bricolage_Grotesque, Instrument_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})
const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Techies Technologies — Enterprise Technology for GCC',
  description:
    'AI automation, custom development, and managed infrastructure — engineered for Saudi Arabia, UAE, and the wider GCC market.',
}

// Google Ads conversion tracking — accessible globally
const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'AW-18068365764');

  window.gtag_report_conversion = function(url) {
    var callback = function() {
      if (typeof url !== 'undefined') { window.location = url; }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-18068365764/gmCeCLumn50cEMTD1adD',
      'event_callback': callback
    });
    return false;
  };
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${bricolage.variable} ${instrument.variable} ${inter.variable}`}>
      <body>
        {/* Google Ads global site tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18068365764"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {gtagScript}
        </Script>

        {children}
      </body>
    </html>
  )
}
