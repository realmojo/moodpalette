import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Mood Palette - Image Color Palette Extractor"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8f9fa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 8,
            }}
          >
            {["#E74C3C", "#F39C12", "#2ECC71", "#0F5CD4", "#9B59B6"].map(
              (color) => (
                <div
                  key={color}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 16,
                    backgroundColor: color,
                  }}
                />
              )
            )}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#111",
              letterSpacing: -2,
            }}
          >
            Mood Palette
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#888",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Extract colors that match your image&apos;s vibe
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#0F5CD4",
              marginTop: 8,
            }}
          >
            moodpalette.ssdown.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
