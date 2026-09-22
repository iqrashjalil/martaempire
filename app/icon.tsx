import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
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
          background: "#0b0a09",
          borderRadius: 14,
          border: "1px solid rgba(207,174,116,0.5)",
          color: "#e6c98b",
          fontFamily: "Cormorant",
          fontSize: 48,
          lineHeight: 1,
        }}
      >
        <span style={{ marginTop: -6 }}>M</span>
      </div>
    ),
    { ...size, fonts: [{ name: "Cormorant", data: font, weight: 300, style: "italic" }] },
  );
}
