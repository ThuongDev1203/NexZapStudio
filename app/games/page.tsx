import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GamesGrid from "@/components/games-grid"

export default function GamesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <GamesGrid />
      </main>
      <Footer />
    </div>
  )
}
