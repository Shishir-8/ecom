import CTASection from '@/components/common/Newsletter'
import FAQSection from '@/components/common/FAQSection'
import Footer from '@/components/common/Footer'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import HeroSection from '@/components/home/HeroSection'
import CategorySection from '@/components/product/CategorySection'
import MostPopular from '@/components/product/MostPopular'
import OfferSection from '@/components/common/OfferSection'

export default function Home() {
  return (
    <>
    <HeroSection />
    <OfferSection />
    <CategorySection />
    <MostPopular />
    <WhyChooseUs />
    <CTASection />
    <FAQSection />
    <Footer />
    </>
  )
}
