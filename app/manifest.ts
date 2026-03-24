import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "무드팔레트 - 이미지 컬러 팔레트 추출기 | Mood Palette",
    short_name: "무드팔레트",
    description:
      "무드팔레트로 이미지에서 최대 20가지 색상을 AI로 자동 추출하세요. 무료 온라인 컬러 팔레트 도구. Extract dominant colors from any image instantly.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#0F5CD4",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
