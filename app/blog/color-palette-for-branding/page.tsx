import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "이미지로 브랜드 컬러 팔레트 만들기 | 무드팔레트 가이드 | Brand Color Palette",
  description:
    "무드팔레트로 영감 이미지에서 색상을 추출하여 전문적인 브랜드 컬러 팔레트를 만드는 방법을 알아보세요. Learn how to create a professional brand color palette by extracting colors from images.",
  keywords: [
    "무드팔레트",
    "브랜드 컬러 팔레트",
    "브랜드 아이덴티티 색상",
    "브랜드 색상 만들기",
    "이미지로 색상 추출",
    "브랜드 디자인 색상",
    "컬러 팔레트 만들기",
    "brand color palette",
    "brand identity colors",
    "create brand palette",
    "color scheme from image",
  ],
  alternates: {
    canonical:
      "https://moodpalette.ssdown.app/blog/color-palette-for-branding",
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
          How to create a brand color palette from images
        </h1>
        <p className="mt-2 text-lg text-[#666]">
          Build a memorable brand identity by extracting colors from
          inspiration images.
        </p>

        <hr className="my-8 border-[#eee]" />

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Why image-based color palettes work for brands
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          The most memorable brands have carefully chosen color palettes that
          evoke specific emotions. Instead of picking colors randomly, many
          designers start with inspiration images — photographs, artwork, or
          nature scenes — that capture the feeling they want their brand to
          convey. By extracting colors from these images, you get a palette
          that&apos;s naturally harmonious and emotionally resonant.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 1: Gather inspiration images
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Collect 3-5 images that represent your brand&apos;s mood. These could
          be photographs of nature for an eco-friendly brand, urban architecture
          for a tech company, or warm food photography for a restaurant. The key
          is choosing images that make you feel what you want your customers to
          feel.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 2: Extract colors with Mood Palette
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Upload each inspiration image to{" "}
          <Link href="/" className="text-[#0F5CD4] hover:underline">
            Mood Palette
          </Link>
          . The tool will extract up to 20 dominant colors from each image.
          Look for colors that appear consistently across your inspiration
          images — these are likely strong candidates for your brand palette.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 3: Select your core colors
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          From the extracted colors, choose 3-5 core colors for your brand:
        </p>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>
            <strong>Primary color:</strong> Your main brand color, used for
            logos, buttons, and key elements
          </li>
          <li>
            <strong>Secondary color:</strong> A complementary color for
            supporting elements
          </li>
          <li>
            <strong>Accent color:</strong> A contrasting color for
            calls-to-action and highlights
          </li>
          <li>
            <strong>Neutral colors:</strong> Light and dark shades for
            backgrounds and text
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Step 4: Test accessibility and contrast
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Ensure your chosen colors have sufficient contrast for readability.
          Use the HEX and RGB values from Mood Palette to test color
          combinations in accessibility tools. Good contrast ratios are
          essential for web accessibility (WCAG guidelines recommend at least
          4.5:1 for body text).
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Common mistakes to avoid
        </h2>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>Using too many colors — stick to 3-5 core colors</li>
          <li>Ignoring accessibility and contrast requirements</li>
          <li>Choosing trendy colors that don&apos;t align with your brand values</li>
          <li>Not testing colors across different mediums (screen, print)</li>
        </ul>

        <hr className="my-8 border-[#eee]" />

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          이미지로 브랜드 컬러 팔레트 만들기
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          기억에 남는 브랜드는 특정 감정을 불러일으키는 신중하게 선택된 컬러
          팔레트를 가지고 있습니다. 무작위로 색상을 고르는 대신, 많은
          디자이너들은 브랜드가 전달하고자 하는 느낌을 담은 영감 이미지에서
          시작합니다.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          브랜드 팔레트 만드는 과정
        </h3>
        <ol className="mt-3 space-y-2 text-[#444]">
          <li>
            브랜드의 분위기를 대표하는 영감 이미지 3-5장을 수집합니다.
          </li>
          <li>
            각 이미지를 무드 팔레트에 업로드하여 주요 색상을 추출합니다.
          </li>
          <li>
            여러 이미지에서 공통적으로 나타나는 색상을 찾아 핵심 컬러로
            선정합니다.
          </li>
          <li>
            주요 색상(Primary), 보조 색상(Secondary), 강조 색상(Accent),
            중성 색상(Neutral)으로 분류합니다.
          </li>
          <li>
            웹 접근성과 대비 비율을 테스트하여 가독성을 확인합니다.
          </li>
        </ol>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          피해야 할 실수
        </h3>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>너무 많은 색상 사용 — 핵심 색상 3-5개로 제한하세요</li>
          <li>접근성과 대비 요구사항 무시</li>
          <li>브랜드 가치와 맞지 않는 유행 색상 선택</li>
          <li>다양한 매체(화면, 인쇄)에서 색상 테스트 미실시</li>
        </ul>

        <div className="mt-12 rounded-lg border border-[#e5e7eb] bg-[#f8f9fa] p-6 text-center">
          <p className="text-[#666]">
            Start building your brand palette today
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
