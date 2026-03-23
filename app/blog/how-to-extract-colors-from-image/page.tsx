import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Extract Colors from an Image | 이미지에서 색상 추출하는 방법",
  description:
    "Learn how to extract a color palette from any image using Mood Palette. Step-by-step guide with tips for designers. 이미지에서 컬러 팔레트를 추출하는 방법을 단계별로 알아보세요.",
  keywords: [
    "extract colors from image",
    "color palette from photo",
    "how to get colors from image",
    "image color extraction",
    "이미지 색상 추출 방법",
    "사진에서 색상 뽑기",
    "이미지 컬러 팔레트 추출",
  ],
  alternates: {
    canonical: "https://moodpalette.ssdown.app/blog/how-to-extract-colors-from-image",
  },
}

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-[#0F5CD4] hover:underline"
      >
        &larr; Back to Mood Palette
      </Link>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-[#111]">
          How to extract colors from an image
        </h1>
        <p className="mt-2 text-lg text-[#666]">
          A step-by-step guide to creating the perfect color palette from any
          photo.
        </p>

        <hr className="my-8 border-[#eee]" />

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Why extract colors from images?
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Color palettes derived from images are widely used in graphic design,
          web development, branding, interior design, and digital art. By
          extracting dominant colors from a reference image, you can create
          cohesive designs that capture a specific mood or atmosphere. This
          technique is especially useful when you want your design to evoke the
          same feelings as a photograph or artwork.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 1: Choose your image
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Select an image that represents the mood or theme you want for your
          project. This could be a photograph, an illustration, a screenshot, or
          any visual reference. Mood Palette supports JPG, PNG, WebP, GIF, BMP,
          and SVG formats.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 2: Upload to Mood Palette
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Visit{" "}
          <Link href="/" className="text-[#0F5CD4] hover:underline">
            Mood Palette
          </Link>{" "}
          and upload your image by clicking the &quot;Choose image&quot; button
          or simply drag and drop it onto the canvas area. The tool processes
          your image entirely in your browser, so your files never leave your
          device.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 3: Review extracted colors
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Mood Palette uses a K-means clustering algorithm to analyze your
          image&apos;s pixels and identify up to 20 distinct dominant colors.
          Each color is displayed in the sidebar with its HEX code and RGB
          values, making it easy to use in your design tools.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 4: Fine-tune with interactive pickers
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Drag the color indicators on the image to sample colors from specific
          areas. This is perfect for when you want to capture a particular shade
          from a specific part of the image. The color values update in
          real-time as you move the pickers.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Tips for better color extraction
        </h2>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>Use high-resolution images for more accurate color detection</li>
          <li>
            Images with distinct color areas produce more varied palettes
          </li>
          <li>
            For PNG images with transparency, Mood Palette defaults to a white
            background
          </li>
          <li>
            Drag the color pickers to specific areas if the auto-detected colors
            don&apos;t include a shade you need
          </li>
        </ul>

        <hr className="my-8 border-[#eee]" />

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          이미지에서 색상을 추출하는 방법
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          이미지에서 컬러 팔레트를 추출하면 그래픽 디자인, 웹 개발, 브랜딩,
          인테리어 디자인 등 다양한 분야에서 활용할 수 있습니다. 참조 이미지의
          주요 색상을 추출하면 특정 분위기나 감성을 담은 디자인을 만들 수
          있습니다.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">사용 방법</h3>
        <ol className="mt-3 space-y-2 text-[#444]">
          <li>
            원하는 이미지를 준비합니다. JPG, PNG, WebP 등 다양한 형식을
            지원합니다.
          </li>
          <li>
            무드 팔레트에서 &quot;Choose image&quot; 버튼을 클릭하거나 이미지를
            드래그 앤 드롭합니다.
          </li>
          <li>
            AI 알고리즘이 자동으로 최대 20가지 주요 색상을 추출하여 HEX와 RGB
            값으로 표시합니다.
          </li>
          <li>
            이미지 위의 컬러 인디케이터를 드래그하여 원하는 영역의 색상을
            정밀하게 선택할 수 있습니다.
          </li>
        </ol>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          더 나은 결과를 위한 팁
        </h3>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>고해상도 이미지를 사용하면 더 정확한 색상을 얻을 수 있습니다</li>
          <li>색상이 뚜렷하게 구분되는 이미지가 더 다양한 팔레트를 만듭니다</li>
          <li>
            모든 처리는 브라우저에서 이루어져 개인정보가 안전하게 보호됩니다
          </li>
        </ul>

        <div className="mt-12 rounded-lg border border-[#e5e7eb] bg-[#f8f9fa] p-6 text-center">
          <p className="text-[#666]">
            Ready to extract your color palette?
          </p>
          <Link
            href="/"
            className="mt-3 inline-block rounded-lg bg-[#0F5CD4] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#0D4DB8]"
          >
            Try Mood Palette now
          </Link>
        </div>
      </article>
    </main>
  )
}
