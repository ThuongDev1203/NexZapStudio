import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CareersContent from "@/components/careers-content"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CareersContent />
      </main>
      <Footer />
    </div>
  )
}
