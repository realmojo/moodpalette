import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mood Palette - Image Color Palette Extractor",
    short_name: "Mood Palette",
    description:
      "Extract dominant colors from any image. Upload your image and discover up to 20 distinct colors instantly.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#0F5CD4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
