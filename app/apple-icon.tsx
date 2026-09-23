import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const font = await readFile(join(process.cwd(), "app", "fonts", "CormorantGaramond-LightItalic.woff"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 20%, #1a1816, #0b0a09 70%)",
          color: "#e9cf96",
          fontFamily: "Cormorant",
          fontSize: 132,
          lineHeight: 1,
        }}
      >
        <span style={{ marginTop: -14 }}>M</span>
      </div>
    ),
    { ...size, fonts: [{ name: "Cormorant", data: font, weight: 300, style: "italic" }] },
  );
}
