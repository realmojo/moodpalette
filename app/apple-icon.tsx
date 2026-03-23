import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F5CD4 0%, #6C3CE0 100%)",
          borderRadius: 40,
          position: "relative",
        }}
      >
        {/* Color dots representing palette extraction */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#FF6B6B", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }} />
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#4ECDC4", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }} />
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#FFE66D", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }} />
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
