"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function GamesGrid() {
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

  const games = [
    {
      id: "lightning-rush",
      title: t("game1.title"),
      description: t("game1.description"),
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Mobile", "Console"],
      genre: "Racing",
      releaseDate: "2023",
    },
    {
      id: "cosmic-defenders",
      title: t("game2.title"),
      description: t("game2.description"),
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Console"],
      genre: "Action",
      releaseDate: "2022",
    },
    {
      id: "mystic-realms",
      title: t("game3.title"),
      description: t("game3.description"),
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Mobile"],
      genre: "RPG",
      releaseDate: "2024",
    },
    {
      id: "pixel-warriors",
      title: "Pixel Warriors",
      description: "A retro-style fighting game with modern mechanics and pixel art graphics.",
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Mobile", "Console"],
      genre: "Fighting",
      releaseDate: "2021",
    },
    {
      id: "robot-revolution",
      title: "Robot Revolution",
      description: "Build, program, and battle robots in this strategic simulation game.",
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC"],
      genre: "Strategy",
      releaseDate: "2022",
    },
    {
      id: "ocean-explorer",
      title: "Ocean Explorer",
      description: "Dive into the depths of the ocean and discover mysterious creatures and treasures.",
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Console"],
      genre: "Adventure",
      releaseDate: "2023",
    },
  ]

  return (
    <section className="py-32" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Games
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("games.title")}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our collection of innovative and engaging games
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="group relative overflow-hidden rounded-2xl gradient-border card-hover bg-secondary/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * ((index % 3) + 1) }}
            >
              <div className="aspect-video relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${game.image})` }}
                />
                <div className="absolute inset-0 game-card-overlay" />
              </div>
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {game.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="text-xs bg-background/80 px-2 py-1 rounded-full border border-primary/20"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                    {game.genre}
                  </span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">{game.releaseDate}</span>
                </div>
                <p className="text-muted-foreground mb-4">{game.description}</p>
                <Button asChild variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                  <Link href={`/games/${game.id}`} className="inline-flex items-center justify-center gap-2">
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
