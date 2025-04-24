"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Code, Palette, Headphones, PenTool, BarChart, ChevronRight } from "lucide-react"

export default function CareersContent() {
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

  const openings = [
    {
      id: "senior-game-developer",
      title: "Senior Game Developer",
      department: "Engineering",
      location: "Ho Chi Minh City",
      type: "Full-time",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "3d-artist",
      title: "3D Artist",
      department: "Art",
      location: "Ho Chi Minh City",
      type: "Full-time",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      id: "sound-designer",
      title: "Sound Designer",
      department: "Audio",
      location: "Remote",
      type: "Contract",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Ho Chi Minh City",
      type: "Full-time",
      icon: <PenTool className="h-5 w-5" />,
    },
    {
      id: "marketing-specialist",
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Ho Chi Minh City",
      type: "Full-time",
      icon: <BarChart className="h-5 w-5" />,
    },
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer competitive compensation packages based on experience and skills.",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage for you and your family.",
    },
    {
      title: "Flexible Work Hours",
      description: "We understand the importance of work-life balance and offer flexible scheduling.",
    },
    {
      title: "Professional Development",
      description: "Opportunities for growth through conferences, courses, and workshops.",
    },
    {
      title: "Game Industry Events",
      description: "Attend gaming conventions and industry events to stay current with trends.",
    },
    {
      title: "Creative Environment",
      description: "Work in a collaborative, creative space with talented professionals.",
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
            Join Our Team
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("careers.title")}
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("careers.description")}
          </motion.p>
        </div>

        <div className="mb-24">
          <motion.div
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-16 gradient-border"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="NexZap Studio Office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-bold gradient-text mb-2">Join Our Team</h2>
              <p className="text-muted-foreground max-w-lg">
                Be part of a passionate team creating the next generation of gaming experiences.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-6">Why Join NexZap Studio?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At NexZap Studio, we're more than just a game development company – we're a community of passionate
                  creators dedicated to pushing the boundaries of interactive entertainment.
                </p>
                <p>
                  We believe that great games come from great teams. That's why we foster a collaborative, inclusive
                  environment where creativity thrives and innovation is encouraged.
                </p>
                <p>
                  As part of our team, you'll have the opportunity to work on exciting projects, develop your skills,
                  and make a meaningful impact in the gaming industry.
                </p>
                <p>
                  We value diversity of thought, experience, and background, and we're committed to creating a workplace
                  where everyone feels welcome and empowered to do their best work.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-secondary/50 rounded-xl gradient-border card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-8">{t("careers.openings")}</h2>

          {openings.length > 0 ? (
            <div className="grid gap-6">
              {openings.map((job) => (
                <motion.div
                  key={job.id}
                  className="bg-secondary/50 rounded-xl gradient-border overflow-hidden hover:shadow-lg transition-shadow card-hover"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/careers/${job.id}`} className="block p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <div className="bg-primary/20 p-3 rounded-full text-primary">{job.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                          <p className="text-primary mb-4">{job.department}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:bg-primary/10 inline-flex items-center gap-1"
                      >
                        View Details
                        <ChevronRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-secondary/50 rounded-xl gradient-border p-8 text-center">
              <p className="text-muted-foreground mb-4">{t("careers.noOpenings")}</p>
              <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          )}
        </motion.div>

        <motion.div
          className="bg-primary/5 rounded-xl p-8 text-center gradient-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-4 gradient-text">Don't see a position that fits your skills?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you
            can contribute to NexZap Studio.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 button-glow">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Send Us Your Resume
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
