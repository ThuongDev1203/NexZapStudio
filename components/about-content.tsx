"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function AboutContent() {
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
            About Us
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("about.title")}
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            animate={isVisible ? { opacity: 1, width: 80 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden gradient-border">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="NexZap Studio Office"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold gradient-text">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2018, NexZap Studio began as a small team of passionate game developers with a shared vision:
              to create games that push boundaries and deliver unforgettable experiences to players worldwide.
            </p>
            <p className="text-muted-foreground">
              What started as a small indie studio has grown into a dynamic team of developers, artists, designers, and
              storytellers united by our love for games and commitment to innovation.
            </p>
            <p className="text-muted-foreground">
              Based in Ho Chi Minh City, Vietnam, we combine global gaming trends with unique cultural perspectives to
              create games that resonate with players around the world.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold gradient-text">Our Mission</h2>
            <p className="text-muted-foreground">{t("about.mission")}</p>
            <p className="text-muted-foreground">
              We believe that games have the power to inspire, connect, and transform. Every project we undertake is
              guided by our commitment to quality, creativity, and player satisfaction.
            </p>
            <p className="text-muted-foreground">
              As we continue to grow, we remain dedicated to our core values: innovation, passion, inclusivity, and
              excellence in everything we do.
            </p>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden gradient-border">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="NexZap Studio Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
