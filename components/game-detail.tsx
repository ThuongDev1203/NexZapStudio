"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Layers, Monitor, Smartphone, Gamepad, Award, Star, Download, Play } from "lucide-react"

export default function GameDetail({ slug }: { slug: string }) {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  // Mock data - in a real app, you would fetch this from an API
  const games = {
    "lightning-rush": {
      title: t("game1.title"),
      description: t("game1.description"),
      fullDescription:
        "Lightning Rush is a high-octane racing game that combines speed, strategy, and electrifying power-ups. Race through neon-lit cities, treacherous mountain passes, and futuristic landscapes as you compete against AI opponents or real players from around the world. Unlock new vehicles, customize your ride, and master the art of drifting to claim victory on the track.",
      releaseDate: "2023",
      developer: "NexZap Studio",
      publisher: "NexZap Studio",
      platforms: ["PC", "Mobile", "Console"],
      genre: "Racing",
      features: [
        "30+ unique tracks across 5 environments",
        "20 customizable vehicles with unique handling",
        "Online multiplayer with up to 8 players",
        "Season-based competitive leagues",
        "Dynamic weather system affecting gameplay",
      ],
      screenshots: [
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
      ],
      heroImage: "/placeholder.svg?height=800&width=1600",
      rating: 4.8,
    },
    "cosmic-defenders": {
      title: t("game2.title"),
      description: t("game2.description"),
      fullDescription:
        "Cosmic Defenders puts you in command of an elite squad of space warriors tasked with defending the galaxy from alien threats. Build your team, upgrade your weapons, and engage in tactical turn-based combat across a vast interstellar campaign. With procedurally generated missions and a deep progression system, no two playthroughs are ever the same.",
      releaseDate: "2022",
      developer: "NexZap Studio",
      publisher: "NexZap Studio",
      platforms: ["PC", "Console"],
      genre: "Strategy",
      features: [
        "100+ hour campaign with branching storylines",
        "50 unique characters to recruit and upgrade",
        "Tactical turn-based combat system",
        "Base building and resource management",
        "PvP arena battles with seasonal rewards",
      ],
      screenshots: [
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
      ],
      heroImage: "/placeholder.svg?height=800&width=1600",
      rating: 4.6,
    },
    "mystic-realms": {
      title: t("game3.title"),
      description: t("game3.description"),
      fullDescription:
        "Mystic Realms is an immersive open-world RPG set in a richly detailed fantasy universe. Embark on an epic journey as you explore vast landscapes, encounter mythical creatures, and uncover ancient secrets. With a deep character customization system, meaningful choices that affect the story, and a dynamic world that reacts to your actions, Mystic Realms offers a truly personalized adventure.",
      releaseDate: "2024",
      developer: "NexZap Studio",
      publisher: "NexZap Studio",
      platforms: ["PC", "Mobile"],
      genre: "RPG",
      features: [
        "Massive open world with diverse biomes",
        "Deep character customization and progression",
        "Choice-driven narrative with multiple endings",
        "Real-time combat with strategic elements",
        "Crafting, housing, and economy systems",
      ],
      screenshots: [
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
      ],
      heroImage: "/placeholder.svg?height=800&width=1600",
      rating: 4.9,
    },
  }

  const game = games[slug as keyof typeof games]

  if (!game) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
        <p className="mb-8 text-muted-foreground">The game you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/games">Back to Games</Link>
        </Button>
      </div>
    )
  }

  return (
    <section ref={ref}>
      <div className="relative h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${game.heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
              {game.genre}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">{game.title}</h1>
            <div className="flex flex-wrap gap-3 mb-4">
              {game.platforms.map((platform) => (
                <span
                  key={platform}
                  className="bg-background/50 border border-primary/20 px-3 py-1 rounded-full text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(game.rating) ? "text-primary fill-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">{game.rating}/5</span>
            </div>
            <p className="text-xl max-w-3xl mb-8 text-muted-foreground">{game.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 button-glow inline-flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 inline-flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                Watch Trailer
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2 space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">About the Game</h2>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">{game.fullDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">Key Features</h2>
              <ul className="space-y-4 grid md:grid-cols-2 gap-4">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 bg-secondary/30 p-4 rounded-xl">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-xl overflow-hidden gradient-border">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${game.title} Screenshot ${index + 1}`}
                      width={600}
                      height={338}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-secondary/30 rounded-xl p-6 gradient-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">Game Details</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Release Date</p>
                    <p className="font-medium">{game.releaseDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Developer</p>
                    <p className="font-medium">{game.developer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Publisher</p>
                    <p className="font-medium">{game.publisher}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Gamepad className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Genre</p>
                    <p className="font-medium">{game.genre}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-xl p-6 gradient-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">Platforms</h3>
              <div className="space-y-6">
                {game.platforms.includes("PC") && (
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">PC</p>
                      <p className="text-sm text-muted-foreground">Windows 10/11, macOS, Linux</p>
                    </div>
                  </div>
                )}
                {game.platforms.includes("Mobile") && (
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Mobile</p>
                      <p className="text-sm text-muted-foreground">iOS, Android</p>
                    </div>
                  </div>
                )}
                {game.platforms.includes("Console") && (
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <Gamepad className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Console</p>
                      <p className="text-sm text-muted-foreground">PlayStation 5, Xbox Series X/S, Nintendo Switch</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-secondary/30 rounded-xl p-6 gradient-border">
              <h3 className="text-xl font-bold mb-6 gradient-text">System Requirements</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-3 text-primary">Minimum:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      OS: Windows 10 64-bit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Processor: Intel Core i5-4460 / AMD Ryzen 3 1200
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Memory: 8 GB RAM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Graphics: NVIDIA GTX 960 / AMD RX 470
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Storage: 20 GB available space
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-3 text-primary">Recommended:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      OS: Windows 10/11 64-bit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Processor: Intel Core i7-8700K / AMD Ryzen 5 3600
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Memory: 16 GB RAM
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Graphics: NVIDIA RTX 2060 / AMD RX 5700
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Storage: 20 GB available space (SSD recommended)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 gradient-border">
              <h3 className="text-xl font-bold mb-4 gradient-text">Ready to Play?</h3>
              <p className="text-muted-foreground mb-6">Download now and join thousands of players worldwide!</p>
              <Button className="w-full bg-primary hover:bg-primary/90 button-glow inline-flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download {game.title}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
