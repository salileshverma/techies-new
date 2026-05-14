import Navbar        from '@/components/Navbar'
import HeroSection   from '@/components/HeroSection'
import StripMarquee  from '@/components/StripMarquee'
import StatsSection  from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import ExecutionSection from '@/components/ExecutionSection'
import CaseStudies   from '@/components/CaseStudies'
import WhySection    from '@/components/WhySection'
import StackMarquee  from '@/components/StackMarquee'
import CTASection    from '@/components/CTASection'
import Footer        from '@/components/Footer'
import LeadPopup     from '@/components/LeadPopup'
import RequestQuoteDrawer from '@/components/RequestQuoteDrawer'

export default function Home() {
  return (
    <>
      <LeadPopup />
      <RequestQuoteDrawer />
      <Navbar />
      <HeroSection />
      <StripMarquee />
      <StatsSection />
      <ServicesSection />
      <ExecutionSection />
      <CaseStudies />
      <WhySection />
      <StackMarquee />
      <CTASection />
      <Footer />
    </>
  )
}
