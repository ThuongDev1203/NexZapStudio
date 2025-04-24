"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleLanguage = (lang: "en" | "vi") => {
    setLanguage(lang)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/games", label: t("nav.games") },
    { href: "/about", label: t("nav.about") },
    { href: "/careers", label: t("nav.careers") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 nav-blur border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center z-10">
            <div className="relative h-12 w-56 logo-glow">
              <Image src="/images/logo.png" alt="NexZap Studio" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9 border border-primary/30 bg-primary/5 hover:bg-primary/10"
                >
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-lg border border-primary/20">
                <DropdownMenuItem
                  onClick={() => toggleLanguage("en")}
                  className={`flex items-center gap-2 cursor-pointer ${language === "en" ? "text-primary" : ""}`}
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
                      <clipPath id="a">
                        <path d="M0 0v30h60V0z" />
                      </clipPath>
                      <clipPath id="b">
                        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
                      </clipPath>
                      <g clipPath="url(#a)">
                        <path d="M0 0v30h60V0z" fill="#012169" />
                        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
                        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#b)" stroke="#C8102E" strokeWidth="4" />
                        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
                      </g>
                    </svg>
                  </span>
                  English
                  {language === "en" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => toggleLanguage("vi")}
                  className={`flex items-center gap-2 cursor-pointer ${language === "vi" ? "text-primary" : ""}`}
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
                      <path fill="#da251d" d="M0 0h900v600H0z" />
                      <path fill="#ff0" d="M450 120l108.3 333.1-283.8-206h351l-283.8 206z" />
                    </svg>
                  </span>
                  Tiếng Việt
                  {language === "vi" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9 border border-primary/30 bg-primary/5 hover:bg-primary/10"
                >
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-lg border border-primary/20">
                <DropdownMenuItem
                  onClick={() => toggleLanguage("en")}
                  className={`flex items-center gap-2 cursor-pointer ${language === "en" ? "text-primary" : ""}`}
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
                      <clipPath id="c">
                        <path d="M0 0v30h60V0z" />
                      </clipPath>
                      <clipPath id="d">
                        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
                      </clipPath>
                      <g clipPath="url(#c)">
                        <path d="M0 0v30h60V0z" fill="#012169" />
                        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
                        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#d)" stroke="#C8102E" strokeWidth="4" />
                        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
                      </g>
                    </svg>
                  </span>
                  English
                  {language === "en" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => toggleLanguage("vi")}
                  className={`flex items-center gap-2 cursor-pointer ${language === "vi" ? "text-primary" : ""}`}
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
                      <path fill="#da251d" d="M0 0h900v600H0z" />
                      <path fill="#ff0" d="M450 120l108.3 333.1-283.8-206h351l-283.8 206z" />
                    </svg>
                  </span>
                  Tiếng Việt
                  {language === "vi" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80%] sm:w-[350px] border-l border-primary/20 bg-background/95 nav-blur"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="relative h-10 w-44 logo-glow">
                    <Image src="/images/logo.png" alt="NexZap Studio" fill className="object-contain" />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-col gap-1 pt-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary hover:bg-primary/5 block py-3 px-4 rounded-lg"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
