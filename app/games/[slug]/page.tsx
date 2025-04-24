import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GameDetail from "@/components/game-detail"

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <GameDetail slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
