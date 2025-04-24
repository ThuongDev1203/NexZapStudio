"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function FeaturedGames() {
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
    },
    {
      id: "cosmic-defenders",
      title: t("game2.title"),
      description: t("game2.description"),
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Console"],
    },
    {
      id: "mystic-realms",
      title: t("game3.title"),
      description: t("game3.description"),
      image: "/placeholder.svg?height=600&width=800",
      platforms: ["PC", "Mobile"],
    },
  ]

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t("games.title")}
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("games.title")}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our latest and greatest gaming experiences
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              className="group relative overflow-hidden rounded-2xl gradient-border card-hover bg-secondary/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
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
                  <div className="flex gap-1">
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

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 button-glow">
            <Link href="/games" className="inline-flex items-center gap-2">
              {t("games.viewAll")}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
