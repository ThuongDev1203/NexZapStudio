"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "vi"

type Translations = {
  [key: string]: {
    en: string
    vi: string
  }
}

// Define all translations here
export const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    vi: "Trang chủ",
  },
  "nav.games": {
    en: "Games",
    vi: "Trò chơi",
  },
  "nav.about": {
    en: "About",
    vi: "Giới thiệu",
  },
  "nav.careers": {
    en: "Careers",
    vi: "Tuyển dụng",
  },
  "nav.contact": {
    en: "Contact",
    vi: "Liên hệ",
  },
  // Hero section
  "hero.title": {
    en: "Creating Next-Gen Gaming Experiences",
    vi: "Tạo ra Trải nghiệm Chơi game Thế hệ Tiếp theo",
  },
  "hero.subtitle": {
    en: "Innovative games that push boundaries",
    vi: "Những trò chơi sáng tạo vượt qua mọi giới hạn",
  },
  "hero.cta": {
    en: "Explore Our Games",
    vi: "Khám phá Trò chơi",
  },
  // Featured games
  "games.title": {
    en: "Featured Games",
    vi: "Trò chơi Nổi bật",
  },
  "games.viewAll": {
    en: "View All Games",
    vi: "Xem Tất cả Trò chơi",
  },
  // Game 1
  "game1.title": {
    en: "Lightning Rush",
    vi: "Tốc độ Sấm Sét",
  },
  "game1.description": {
    en: "A fast-paced racing game with electrifying power-ups and stunning visuals.",
    vi: "Một trò chơi đua xe nhịp độ nhanh với các năng lượng điện và hình ảnh tuyệt đẹp.",
  },
  // Game 2
  "game2.title": {
    en: "Cosmic Defenders",
    vi: "Người Bảo vệ Vũ trụ",
  },
  "game2.description": {
    en: "Join an elite squad of space warriors to protect the galaxy from alien threats.",
    vi: "Tham gia đội quân tinh nhuệ của các chiến binh không gian để bảo vệ thiên hà khỏi các mối đe dọa từ người ngoài hành tinh.",
  },
  // Game 3
  "game3.title": {
    en: "Mystic Realms",
    vi: "Vương quốc Huyền bí",
  },
  "game3.description": {
    en: "Explore a fantasy world filled with magic, mythical creatures, and epic quests.",
    vi: "Khám phá một thế giới tưởng tượng đầy phép thuật, sinh vật thần thoại và nhiệm vụ sử thi.",
  },
  // About section
  "about.title": {
    en: "About NexZap Studio",
    vi: "Giới thiệu về NexZap Studio",
  },
  "about.description": {
    en: "NexZap Studio is a passionate team of game developers, artists, and storytellers dedicated to creating immersive gaming experiences that captivate players worldwide.",
    vi: "NexZap Studio là một đội ngũ đam mê gồm các nhà phát triển trò chơi, nghệ sĩ và người kể chuyện, tận tâm tạo ra những trải nghiệm chơi game sâu sắc thu hút người chơi trên toàn thế giới.",
  },
  "about.mission": {
    en: "Our mission is to push the boundaries of interactive entertainment through innovation, creativity, and technical excellence.",
    vi: "Sứ mệnh của chúng tôi là mở rộng ranh giới của giải trí tương tác thông qua đổi mới, sáng tạo và xuất sắc về kỹ thuật.",
  },
  // Team section
  "team.title": {
    en: "Our Team",
    vi: "Đội ngũ của chúng tôi",
  },
  "team.description": {
    en: "Meet the talented individuals behind NexZap Studio's success.",
    vi: "Gặp gỡ những cá nhân tài năng đằng sau thành công của NexZap Studio.",
  },
  // Careers section
  "careers.title": {
    en: "Join Our Team",
    vi: "Tham gia Đội ngũ",
  },
  "careers.description": {
    en: "We're always looking for talented individuals to join our growing team.",
    vi: "Chúng tôi luôn tìm kiếm những cá nhân tài năng để tham gia vào đội ngũ đang phát triển của chúng tôi.",
  },
  "careers.openings": {
    en: "Current Openings",
    vi: "Vị trí Hiện tại",
  },
  "careers.noOpenings": {
    en: "No open positions at the moment. Check back soon!",
    vi: "Không có vị trí mở tại thời điểm này. Hãy quay lại sau!",
  },
  // Contact section
  "contact.title": {
    en: "Contact Us",
    vi: "Liên hệ với Chúng tôi",
  },
  "contact.description": {
    en: "Have questions or feedback? We'd love to hear from you!",
    vi: "Có câu hỏi hoặc phản hồi? Chúng tôi rất muốn nghe từ bạn!",
  },
  "contact.name": {
    en: "Name",
    vi: "Tên",
  },
  "contact.email": {
    en: "Email",
    vi: "Email",
  },
  "contact.message": {
    en: "Message",
    vi: "Tin nhắn",
  },
  "contact.submit": {
    en: "Submit",
    vi: "Gửi",
  },
  // Footer
  "footer.rights": {
    en: "All Rights Reserved",
    vi: "Đã đăng ký Bản quyền",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    vi: "Chính sách Bảo mật",
  },
  "footer.terms": {
    en: "Terms of Service",
    vi: "Điều khoản Dịch vụ",
  },
  // Language switcher
  "language.switch": {
    en: "Tiếng Việt",
    vi: "English",
  },
  "language.english": {
    en: "English",
    vi: "English",
  },
  "language.vietnamese": {
    en: "Vietnamese",
    vi: "Tiếng Việt",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language)
    // Update html lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
