import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const SITE_URL = "https://moodpalette.co"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mood Palette - Image Color Palette Extractor | 이미지 컬러 팔레트 추출기",
    template: "%s | Mood Palette",
  },
  description:
    "Extract dominant colors from any image with AI-powered color palette extraction. Upload your image and discover up to 20 distinct colors instantly. 이미지에서 최대 20가지 색상을 자동으로 추출하세요.",
  keywords: [
    "color palette extractor",
    "image color picker",
    "color extraction tool",
    "dominant colors",
    "color scheme generator",
    "image color analysis",
    "design tool",
    "color palette generator",
    "이미지 색상 추출",
    "컬러 팔레트 추출기",
    "이미지 컬러 피커",
    "색상 분석 도구",
    "컬러 팔레트 생성기",
    "디자인 도구",
    "이미지 색상 분석",
    "무드 팔레트",
  ],
  authors: [{ name: "Mood Palette" }],
  creator: "Mood Palette",
  publisher: "Mood Palette",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      ko: SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: SITE_URL,
    siteName: "Mood Palette",
    title: "Mood Palette - Extract Colors That Match Your Image's Vibe",
    description:
      "Upload any image and extract up to 20 dominant colors instantly. Drag interactive color pickers to sample colors from specific areas. Free, fast, and no sign-up required.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mood Palette - Image Color Palette Extractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mood Palette - Extract Colors That Match Your Image's Vibe",
    description:
      "Upload any image and extract up to 20 dominant colors instantly. Free, fast, and no sign-up required.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "naver-site-verification": "",
    "google-site-verification": "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <head>
        <JsonLd />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
