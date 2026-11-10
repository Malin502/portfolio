import { ImageResponse } from "next/og";

export const alt = "Malin's Portfolio — Takuto Maekawa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 6, color: "#7dd3fc", marginBottom: 24 }}>
          TAKUTO MAEKAWA
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1, marginBottom: 32 }}>
          Malin&apos;s Portfolio
        </div>
        <div style={{ fontSize: 36, color: "#cbd5e1", lineHeight: 1.4 }}>
          NIDS Research × ML Platform Engineering
        </div>
      </div>
    ),
    { ...size }
  );
}
