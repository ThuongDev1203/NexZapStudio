"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Download, Gamepad } from "lucide-react"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 hero-gradient"></div>

        {/* Animated particles or grid effect could be added here */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary w-fit">
              <Gamepad className="h-4 w-4" />
              <span>NexZap Studio</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">{t("hero.title")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 button-glow">
                <Link href="/games" className="inline-flex items-center gap-2">
                  {t("hero.cta")}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link href="/about" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t("nav.about")}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden gradient-border"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center rounded-2xl transform transition-transform duration-700 hover:scale-105"></div>
            <div className="absolute inset-0 game-card-overlay"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-sm text-primary mb-3">
                New Release
              </div>
              <h3 className="text-2xl font-bold text-glow">{t("game1.title")}</h3>
              <p className="text-muted-foreground mt-2 max-w-md">{t("game1.description")}</p>
              <Button className="mt-4 bg-primary/20 hover:bg-primary/30 border border-primary/50">Play Now</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
