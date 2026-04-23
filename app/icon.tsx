import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #3b82f6 0%, #5b6ef5 50%, #9333ea 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Top-left highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 8,
            background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)",
          }}
        />
        {/* </> SVG */}
        <svg width="18" height="13" viewBox="0 0 20 14" fill="none">
          <path d="M5.5 1.5L1.5 7L5.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 1.5L18.5 7L14.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12.5" y1="0.5" x2="7.5" y2="13.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
