"use client"

import type React from "react"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

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
            {t("contact.title")}
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("contact.description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">contact@nexzap.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+84 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">
                  123 Game Street, District 1<br />
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-secondary/50 p-8 rounded-2xl gradient-border"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("contact.name")}
              </label>
              <Input id="name" required className="bg-background border-primary/20 focus:border-primary" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact.email")}
              </label>
              <Input
                id="email"
                type="email"
                required
                className="bg-background border-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <Textarea
                id="message"
                rows={5}
                required
                className="bg-background border-primary/20 focus:border-primary"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 button-glow flex items-center gap-2">
              <Send className="h-4 w-4" />
              {t("contact.submit")}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
