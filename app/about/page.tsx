import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import TeamSection from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutContent />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
