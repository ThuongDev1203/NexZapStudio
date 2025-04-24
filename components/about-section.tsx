"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Gamepad2, Users, Trophy, Zap } from "lucide-react"

export default function AboutSection() {
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

  const features = [
    {
      icon: <Gamepad2 className="h-10 w-10 text-primary" />,
      title: "Innovative Gameplay",
      description: "Creating unique gaming experiences that push boundaries and engage players.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Passionate Team",
      description: "A diverse team of talented developers, artists, and designers working together.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Award-Winning",
      description: "Recognized for excellence in game design and technical innovation.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast-Paced Development",
      description: "Agile development process that delivers high-quality games efficiently.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("about.description")}</p>
            <p className="text-lg text-muted-foreground">{t("about.mission")}</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 button-glow mt-4">
              <Link href="/about">{t("nav.about")}</Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-background rounded-2xl gradient-border card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
