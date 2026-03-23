import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F5CD4 0%, #6C3CE0 100%)",
          borderRadius: 8,
          position: "relative",
        }}
      >
        {/* Color dots representing palette extraction */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            width: 22,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF6B6B" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ECDC4" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFE66D" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFFFFF" }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
