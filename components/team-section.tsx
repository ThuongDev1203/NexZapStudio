"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeamSection() {
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

  const team = [
    {
      name: "Alex Nguyen",
      role: "CEO & Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Minh Tran",
      role: "Technical Director",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Linh Pham",
      role: "Art Director",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Tuan Hoang",
      role: "Lead Game Designer",
      image: "/placeholder.svg?height=400&width=400",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("team.title")}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("team.description")}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-background/50 rounded-2xl overflow-hidden gradient-border card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <div className="flex gap-4">
                  <Link href={member.social.twitter} aria-label="Twitter">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={member.social.linkedin} aria-label="LinkedIn">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={member.social.facebook} aria-label="Facebook">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
