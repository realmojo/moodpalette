import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "디자이너를 위한 색채 이론 가이드 | 무드팔레트 | Color Theory for Designers",
  description:
    "색채 이론의 기본을 이해하고 디자인 프로젝트에 적용하는 방법을 알아보세요. 무드팔레트와 함께하는 실용 색상 가이드. Understand color theory fundamentals for your design projects.",
  keywords: [
    "무드팔레트",
    "색채 이론",
    "색상환",
    "보색",
    "색상 조화",
    "디자인 색상 가이드",
    "색상 이론 기초",
    "컬러 팔레트 이론",
    "color theory",
    "color wheel",
    "complementary colors",
    "color harmony",
    "design color guide",
  ],
  alternates: {
    canonical:
      "https://moodpalette.ssdown.app/blog/color-theory-for-designers",
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
          Color theory for designers: a practical guide
        </h1>
        <p className="mt-2 text-lg text-[#666]">
          Essential color theory concepts every designer should know.
        </p>

        <hr className="my-8 border-[#eee]" />

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          The color wheel
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          The color wheel is the foundation of color theory. It organizes colors
          in a circle, showing relationships between primary colors (red,
          yellow, blue), secondary colors (orange, green, purple), and tertiary
          colors. Understanding the color wheel helps you create harmonious
          color combinations for any design project.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Color harmony types
        </h2>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          Complementary colors
        </h3>
        <p className="mt-3 leading-relaxed text-[#444]">
          Colors opposite each other on the color wheel (e.g., blue and orange).
          They create strong contrast and visual impact. Use complementary
          colors when you want elements to stand out, like call-to-action
          buttons against a background.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          Analogous colors
        </h3>
        <p className="mt-3 leading-relaxed text-[#444]">
          Colors next to each other on the color wheel (e.g., blue, blue-green,
          green). They create a serene, comfortable design. Analogous palettes
          are often found in nature and work well for creating a cohesive,
          calming feel.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          Triadic colors
        </h3>
        <p className="mt-3 leading-relaxed text-[#444]">
          Three colors equally spaced on the color wheel (e.g., red, yellow,
          blue). Triadic schemes are vibrant and balanced, offering strong
          visual contrast while maintaining harmony.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          Split-complementary colors
        </h3>
        <p className="mt-3 leading-relaxed text-[#444]">
          A base color plus the two colors adjacent to its complement. This
          provides the contrast of complementary colors with less tension,
          making it easier to work with.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Color properties: Hue, saturation, and brightness
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          Every color has three properties: hue (the color itself), saturation
          (intensity or purity), and brightness (lightness or darkness).
          Understanding these helps you create variations of a single color for
          different contexts — like a darker shade for headers and a lighter
          tint for backgrounds.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Color psychology in design
        </h2>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>
            <strong>Red:</strong> Energy, urgency, passion — used for
            sales, alerts, food brands
          </li>
          <li>
            <strong>Blue:</strong> Trust, calm, professionalism — popular
            in tech, finance, healthcare
          </li>
          <li>
            <strong>Green:</strong> Nature, growth, health — common in
            eco-brands, wellness, finance
          </li>
          <li>
            <strong>Yellow:</strong> Optimism, warmth, attention —
            effective for highlights and warnings
          </li>
          <li>
            <strong>Purple:</strong> Luxury, creativity, wisdom — used in
            beauty, art, premium brands
          </li>
          <li>
            <strong>Orange:</strong> Friendliness, confidence, fun —
            popular for CTAs and youth brands
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          Applying color theory with Mood Palette
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          With{" "}
          <Link href="/" className="text-[#0F5CD4] hover:underline">
            Mood Palette
          </Link>
          , you can extract real-world color harmonies from photographs and
          artwork. Upload an image that captures the mood you want, and the
          tool will identify the dominant colors. You can then analyze these
          colors through the lens of color theory to understand why certain
          combinations feel harmonious.
        </p>

        <hr className="my-8 border-[#eee]" />

        <h2 className="mt-8 text-xl font-semibold text-[#222]">
          디자이너를 위한 색채 이론 가이드
        </h2>
        <p className="mt-3 leading-relaxed text-[#444]">
          색채 이론은 모든 디자이너가 알아야 할 기본 개념입니다. 색상환을
          이해하면 어떤 디자인 프로젝트에서도 조화로운 색상 조합을 만들 수
          있습니다.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          색상 조화 유형
        </h3>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>
            <strong>보색:</strong> 색상환에서 반대편에 위치한 색상 (예: 파란색과
            주황색). 강한 대비와 시각적 임팩트를 줍니다.
          </li>
          <li>
            <strong>유사색:</strong> 색상환에서 이웃한 색상 (예: 파란색,
            청록색, 녹색). 편안하고 조화로운 디자인을 만듭니다.
          </li>
          <li>
            <strong>삼원색 조화:</strong> 색상환에서 같은 간격으로 배치된 세 가지
            색상. 활기차고 균형 잡힌 조합입니다.
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold text-[#333]">
          색상 심리학
        </h3>
        <ul className="mt-3 space-y-2 text-[#444]">
          <li>
            <strong>빨간색:</strong> 에너지, 열정 — 세일, 음식 브랜드에 활용
          </li>
          <li>
            <strong>파란색:</strong> 신뢰, 전문성 — IT, 금융, 의료 분야에 인기
          </li>
          <li>
            <strong>녹색:</strong> 자연, 성장 — 친환경, 웰니스 브랜드에 활용
          </li>
          <li>
            <strong>노란색:</strong> 낙관, 따뜻함 — 강조 및 경고에 효과적
          </li>
          <li>
            <strong>보라색:</strong> 고급감, 창의성 — 뷰티, 프리미엄 브랜드에
            활용
          </li>
        </ul>

        <div className="mt-12 rounded-lg border border-[#e5e7eb] bg-[#f8f9fa] p-6 text-center">
          <p className="text-[#666]">
            Put color theory into practice
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
