"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-primary/10">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="NexZap Studio" width={150} height={60} className="h-auto w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              NexZap Studio © {currentYear} {t("footer.rights")}
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">{t("nav.games")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/games/lightning-rush"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("game1.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/games/cosmic-defenders"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("game2.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/games/mystic-realms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("game3.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">{t("nav.about")}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.careers")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 gradient-text">{t("contact.title")}</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Email: contact@nexzap.com</p>
              <p>Phone: +84 123 456 789</p>
              <p>
                123 Game Street, District 1<br />
                Ho Chi Minh City, Vietnam
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NexZap Studio. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
