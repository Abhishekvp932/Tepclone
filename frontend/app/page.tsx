import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesCarousel from '@/components/Servicescarousel'
import SectorsSection from '@/components/Sectorssection'
import EngineeringSection from '@/components/Engineeringsection'
import WorldwideSection from '@/components/Worldwidesection'
import CTASection from '@/components/Ctasection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <ServicesCarousel />
      <SectorsSection />
      <EngineeringSection />
      <WorldwideSection />
      <CTASection />
      <Footer />
    </main>
  )
}