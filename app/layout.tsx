import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const SITE_URL = "https://moodpalette.ssdown.app"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "무드팔레트 (Mood Palette) - 이미지 컬러 팔레트 추출기 | Image Color Palette Extractor",
    template: "%s | 무드팔레트 Mood Palette",
  },
  description:
    "무드팔레트 - 이미지에서 최대 20가지 색상을 AI로 자동 추출하는 무료 온라인 컬러 팔레트 도구입니다. 사진을 업로드하면 HEX, RGB 값을 즉시 확인할 수 있습니다. Extract dominant colors from any image with AI-powered color palette extraction.",
  keywords: [
    "무드팔레트",
    "무드 팔레트",
    "moodpalette",
    "mood palette",
    "이미지 색상 추출",
    "컬러 팔레트 추출기",
    "이미지 컬러 추출",
    "사진 색상 추출",
    "색상 추출 사이트",
    "이미지 컬러 팔레트",
    "이미지 컬러 피커",
    "색상 분석 도구",
    "컬러 팔레트 생성기",
    "이미지 색상 분석",
    "무료 컬러 팔레트",
    "AI 색상 추출",
    "디자인 도구",
    "color palette extractor",
    "image color picker",
    "color extraction tool",
    "dominant colors",
    "color scheme generator",
    "image color analysis",
    "design tool",
    "color palette generator",
  ],
  authors: [{ name: "무드팔레트 Mood Palette" }],
  creator: "무드팔레트 Mood Palette",
  publisher: "무드팔레트 Mood Palette",
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
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "무드팔레트 Mood Palette",
    title:
      "무드팔레트 - 이미지에서 컬러 팔레트 추출 | Mood Palette",
    description:
      "무드팔레트로 이미지에서 최대 20가지 색상을 즉시 추출하세요. AI 기반 컬러 팔레트 추출기, 무료로 HEX/RGB 값 확인. Upload any image and extract dominant colors instantly.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "무드팔레트 - 이미지 컬러 팔레트 추출기 | Mood Palette",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "무드팔레트 - 이미지에서 컬러 팔레트 추출 | Mood Palette",
    description:
      "무드팔레트로 이미지에서 최대 20가지 색상을 즉시 추출하세요. AI 컬러 팔레트 추출기, 무료 사용. Extract dominant colors from any image instantly.",
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
    "naver-site-verification": "e0079fa254873f8d3b860dcec444417fabd9ab29",
    "google-site-verification": "3qAk5QTh8tZUZ3EDxxSgtAgWwcwMFnKGgNaknyWLcZM",
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
        {/* Google Analytics */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-742J9X4BM5"
        />
        <Script
          id="google-tag-manager-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-742J9X4BM5', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {/* Naver Analytics */}
        <Script
          strategy="beforeInteractive"
          id="naver-analytics"
          src="//wcs.naver.net/wcslog.js"
        />
        <Script
          strategy="beforeInteractive"
          id="naver-analytics-init"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              'if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "159353d1b5eedb0"; if(window.wcs) {wcs_do();}',
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
