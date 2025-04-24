import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import FeaturedGames from "@/components/featured-games"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedGames />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
