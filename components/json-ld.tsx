const SITE_URL = "https://moodpalette.co"

export function JsonLd() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Mood Palette",
    alternateName: "무드 팔레트",
    url: SITE_URL,
    description:
      "Extract dominant colors from any image with AI-powered color palette extraction. Upload your image and discover up to 20 distinct colors instantly.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Extract up to 20 dominant colors from images",
      "Interactive draggable color pickers",
      "K-means clustering color analysis",
      "Supports JPG, PNG, WebP formats",
      "Real-time color sampling",
      "HEX and RGB color values",
      "No sign-up required",
      "Free to use",
    ],
    screenshot: `${SITE_URL}/og-image.png`,
    inLanguage: ["en", "ko"],
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mood Palette",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Mood Palette extract colors from images?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mood Palette uses K-means clustering, an AI-powered algorithm, to analyze pixel data and identify up to 20 distinct dominant colors in your image. The algorithm ensures colors are visually distinct from each other for a more useful palette.",
        },
      },
      {
        "@type": "Question",
        name: "What image formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mood Palette supports all common image formats including JPG, JPEG, PNG, WebP, GIF, BMP, and SVG. Simply drag and drop or click to upload your image.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mood Palette free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Mood Palette is completely free to use. No sign-up, no account, and no limitations. All image processing happens in your browser for maximum privacy.",
        },
      },
      {
        "@type": "Question",
        name: "How many colors can be extracted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mood Palette extracts up to 20 distinct dominant colors from your image. The algorithm ensures each color is visually different, giving you a comprehensive and useful color palette.",
        },
      },
      {
        "@type": "Question",
        name: "이미지에서 색상을 어떻게 추출하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "무드 팔레트는 K-means 클러스터링 AI 알고리즘을 사용하여 이미지의 픽셀 데이터를 분석하고 최대 20가지의 고유한 주요 색상을 식별합니다. 모든 처리는 브라우저에서 이루어져 개인정보가 보호됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "무드 팔레트는 무료인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네, 무드 팔레트는 완전히 무료입니다. 회원가입이나 계정이 필요 없으며, 사용 제한도 없습니다. 이미지를 업로드하거나 드래그 앤 드롭하면 바로 색상을 추출할 수 있습니다.",
        },
      },
    ],
  }

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Extract a Color Palette from an Image",
    description:
      "Learn how to extract dominant colors from any image using Mood Palette's free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload your image",
        text: "Click the 'Choose image' button or drag and drop an image onto the canvas area. Supports JPG, PNG, WebP, and more.",
      },
      {
        "@type": "HowToStep",
        name: "View extracted colors",
        text: "The AI algorithm automatically analyzes your image and extracts up to 20 distinct dominant colors, displayed in the sidebar with HEX and RGB values.",
      },
      {
        "@type": "HowToStep",
        name: "Fine-tune with color pickers",
        text: "Drag the interactive color indicators on the image to sample colors from specific areas. The color values update in real-time as you move the pickers.",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "Mood Palette web application",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  )
}
