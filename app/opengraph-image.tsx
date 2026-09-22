import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Marta Empire — Queen Identity Mentoring";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const dir = join(process.cwd(), "app", "fonts");
  const [light, lightItalic] = await Promise.all([
    readFile(join(dir, "CormorantGaramond-Light.woff")),
    readFile(join(dir, "CormorantGaramond-LightItalic.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 84px 72px",
          background: "radial-gradient(900px 520px at 82% 8%, rgba(207,174,116,0.24), #0b0a09 62%)",
          color: "#f3ecdf",
          fontFamily: "Cormorant",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 22, letterSpacing: 9, color: "#cfae74", textTransform: "uppercase" }}>
          <div style={{ width: 48, height: 1, background: "#cfae74" }} />
          <span>Private Identity Mentoring · 1:1</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 190, lineHeight: 0.88, letterSpacing: -6 }}>Queen</div>
          <div style={{ fontSize: 190, lineHeight: 0.88, letterSpacing: -6, fontStyle: "italic", color: "#ecd39a" }}>Identity.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 34, fontStyle: "italic", color: "rgba(243,236,223,0.78)" }}>
            You have outgrown the version of you that built this.
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 40 }}>
            <span>Marta</span>
            <span style={{ color: "#cfae74", fontStyle: "italic" }}>Empire</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: light, weight: 300, style: "normal" },
        { name: "Cormorant", data: lightItalic, weight: 300, style: "italic" },
      ],
    },
  );
}
