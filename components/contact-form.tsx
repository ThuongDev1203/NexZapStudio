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

export default function ContactForm() {
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
    <section className="py-32" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("contact.title")}
          </motion.h1>
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

            <div className="pt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197667!2d106.69877867486087!3d10.777638089387898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5bb9909!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1682345678901!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl gradient-border"
              ></iframe>
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
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input id="subject" required className="bg-background border-primary/20 focus:border-primary" />
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
