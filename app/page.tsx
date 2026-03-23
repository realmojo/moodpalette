import { MoodPalette } from "@/components/mood-palette"

export default function Page() {
  return (
    <>
      <MoodPalette />
      {/* SEO / AEO / GEO: Hidden semantic content for search engines and AI answer engines */}
      <article className="sr-only" aria-hidden="true">
        <h1>Mood Palette - Free Image Color Palette Extractor</h1>
        <p>
          Mood Palette is a free online tool that extracts dominant colors from
          any image. Upload a photo and instantly discover up to 20 distinct
          colors with HEX and RGB values. Powered by K-means clustering AI
          algorithm for accurate color analysis.
        </p>

        <h2>How to extract colors from an image</h2>
        <ol>
          <li>
            Upload your image by clicking the button or drag and drop it onto
            the canvas.
          </li>
          <li>
            The AI algorithm automatically analyzes pixels and extracts up to 20
            dominant colors.
          </li>
          <li>
            Drag the interactive color indicators on the image to sample colors
            from specific areas.
          </li>
          <li>
            View HEX codes and RGB values for each extracted color in the
            sidebar.
          </li>
        </ol>

        <h2>Features</h2>
        <ul>
          <li>Extract up to 20 distinct dominant colors from any image</li>
          <li>AI-powered K-means clustering algorithm</li>
          <li>Interactive draggable color pickers positioned on the image</li>
          <li>Real-time color sampling as you drag</li>
          <li>HEX and RGB color values</li>
          <li>Supports JPG, PNG, WebP, GIF, BMP, SVG</li>
          <li>Drag and drop or click to upload</li>
          <li>100% free, no sign-up required</li>
          <li>All processing happens in your browser - your images stay private</li>
          <li>Works on desktop and mobile devices</li>
        </ul>

        <h2>무드 팔레트 - 무료 이미지 컬러 팔레트 추출기</h2>
        <p>
          무드 팔레트는 이미지에서 주요 색상을 추출하는 무료 온라인 도구입니다.
          사진을 업로드하면 K-means 클러스터링 AI 알고리즘을 통해 최대 20가지
          고유한 색상을 HEX 및 RGB 값과 함께 즉시 확인할 수 있습니다.
        </p>

        <h3>이미지에서 색상을 추출하는 방법</h3>
        <ol>
          <li>버튼을 클릭하거나 이미지를 캔버스에 드래그 앤 드롭하여 업로드합니다.</li>
          <li>AI 알고리즘이 자동으로 픽셀을 분석하여 최대 20가지 주요 색상을 추출합니다.</li>
          <li>이미지 위의 컬러 인디케이터를 드래그하여 특정 영역의 색상을 샘플링합니다.</li>
          <li>사이드바에서 각 추출된 색상의 HEX 코드와 RGB 값을 확인합니다.</li>
        </ol>

        <h3>주요 기능</h3>
        <ul>
          <li>이미지에서 최대 20가지 고유한 주요 색상 추출</li>
          <li>AI 기반 K-means 클러스터링 알고리즘</li>
          <li>이미지 위에 배치된 인터랙티브 드래그 컬러 피커</li>
          <li>드래그 시 실시간 색상 업데이트</li>
          <li>HEX 및 RGB 색상 값 제공</li>
          <li>JPG, PNG, WebP, GIF, BMP, SVG 지원</li>
          <li>드래그 앤 드롭 또는 클릭으로 업로드</li>
          <li>100% 무료, 회원가입 불필요</li>
          <li>모든 처리는 브라우저에서 이루어져 이미지 개인정보 보호</li>
          <li>데스크탑 및 모바일 기기에서 작동</li>
        </ul>

        <h2>Use cases</h2>
        <p>
          Mood Palette is perfect for graphic designers, web developers, UI/UX
          designers, artists, interior designers, and anyone who needs to
          extract color palettes from images for their creative projects.
          Whether you are creating a brand identity, designing a website, or
          finding inspiration for your next artwork, Mood Palette helps you
          capture the exact colors from any image.
        </p>

        <h3>활용 사례</h3>
        <p>
          무드 팔레트는 그래픽 디자이너, 웹 개발자, UI/UX 디자이너, 아티스트,
          인테리어 디자이너 등 이미지에서 컬러 팔레트를 추출해야 하는 모든
          크리에이터에게 적합합니다. 브랜드 아이덴티티 제작, 웹사이트 디자인,
          또는 다음 작품을 위한 영감을 찾을 때 무드 팔레트가 도움을 드립니다.
        </p>
      </article>
    </>
  )
}
