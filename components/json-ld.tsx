const SITE_URL = "https://moodpalette.ssdown.app"

export function JsonLd() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "무드팔레트 Mood Palette",
    alternateName: ["무드팔레트", "무드 팔레트", "Mood Palette", "MoodPalette"],
    url: SITE_URL,
    description:
      "무드팔레트는 이미지에서 최대 20가지 주요 색상을 AI로 자동 추출하는 무료 온라인 컬러 팔레트 도구입니다. Extract dominant colors from any image with AI-powered color palette extraction.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "이미지에서 최대 20가지 주요 색상 추출",
      "AI 기반 K-means 클러스터링 알고리즘",
      "인터랙티브 드래그 컬러 피커",
      "실시간 색상 샘플링",
      "HEX 및 RGB 색상 값 제공",
      "JPG, PNG, WebP, GIF, BMP, SVG 지원",
      "회원가입 불필요, 100% 무료",
      "브라우저에서 처리하여 개인정보 보호",
      "Extract up to 20 dominant colors from images",
      "Interactive draggable color pickers",
      "K-means clustering color analysis",
      "Real-time color sampling",
      "HEX and RGB color values",
      "No sign-up required, free to use",
    ],
    screenshot: `${SITE_URL}/og-image.png`,
    inLanguage: ["ko", "en"],
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "무드팔레트 Mood Palette",
    alternateName: ["무드팔레트", "Mood Palette"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "무드팔레트란 무엇인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "무드팔레트(Mood Palette)는 이미지에서 주요 색상을 자동으로 추출하는 무료 온라인 도구입니다. AI 기반 K-means 클러스터링 알고리즘을 사용하여 사진에서 최대 20가지 고유한 색상을 HEX 및 RGB 값과 함께 추출합니다.",
        },
      },
      {
        "@type": "Question",
        name: "무드팔레트에서 이미지 색상을 어떻게 추출하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "무드팔레트 사이트에 접속하여 이미지를 업로드하거나 드래그 앤 드롭하면 됩니다. AI 알고리즘이 자동으로 픽셀 데이터를 분석하여 최대 20가지의 주요 색상을 추출합니다. 이미지 위의 컬러 인디케이터를 드래그하여 특정 영역의 색상도 샘플링할 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "무드팔레트는 무료인가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "네, 무드팔레트는 완전히 무료입니다. 회원가입이나 계정이 필요 없으며, 사용 제한도 없습니다. 모든 이미지 처리는 브라우저에서 이루어져 개인정보가 완전히 보호됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "무드팔레트에서 지원하는 이미지 형식은?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "무드팔레트는 JPG, JPEG, PNG, WebP, GIF, BMP, SVG 등 모든 일반적인 이미지 형식을 지원합니다. 이미지를 드래그 앤 드롭하거나 클릭하여 업로드하면 됩니다.",
        },
      },
      {
        "@type": "Question",
        name: "무드팔레트에서 최대 몇 가지 색상을 추출할 수 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "무드팔레트는 이미지에서 최대 20가지의 고유한 주요 색상을 추출합니다. 알고리즘이 각 색상이 시각적으로 구별되도록 하여 실용적인 컬러 팔레트를 제공합니다.",
        },
      },
      {
        "@type": "Question",
        name: "What is Mood Palette?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mood Palette (무드팔레트) is a free online tool that extracts dominant colors from any image using AI-powered K-means clustering algorithm. Upload your image and discover up to 20 distinct colors with HEX and RGB values instantly.",
        },
      },
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
        name: "Is Mood Palette free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Mood Palette is completely free to use. No sign-up, no account, and no limitations. All image processing happens in your browser for maximum privacy.",
        },
      },
    ],
  }

  const howToKo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "무드팔레트로 이미지에서 컬러 팔레트 추출하는 방법",
    description:
      "무드팔레트의 무료 온라인 도구를 사용하여 이미지에서 주요 색상을 추출하는 방법을 알아보세요.",
    inLanguage: "ko",
    step: [
      {
        "@type": "HowToStep",
        name: "이미지 업로드",
        text: "'이미지 선택' 버튼을 클릭하거나 이미지를 캔버스 영역에 드래그 앤 드롭하세요. JPG, PNG, WebP 등 다양한 형식을 지원합니다.",
      },
      {
        "@type": "HowToStep",
        name: "추출된 색상 확인",
        text: "AI 알고리즘이 자동으로 이미지를 분석하여 최대 20가지 주요 색상을 추출하고, 사이드바에 HEX 및 RGB 값과 함께 표시합니다.",
      },
      {
        "@type": "HowToStep",
        name: "컬러 피커로 세밀 조정",
        text: "이미지 위의 인터랙티브 컬러 인디케이터를 드래그하여 특정 영역의 색상을 샘플링하세요. 드래그 시 색상 값이 실시간으로 업데이트됩니다.",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "무드팔레트 웹 애플리케이션",
    },
  }

  const howToEn = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Extract a Color Palette from an Image",
    description:
      "Learn how to extract dominant colors from any image using Mood Palette's free online tool.",
    inLanguage: "en",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToKo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToEn) }}
      />
    </>
  )
}
