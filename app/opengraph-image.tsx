import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Marta Empire — Queen Identity Mentoring";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const dir = join(process.cwd(), "app", "fonts");
  const [regular, italic] = await Promise.all([
    readFile(join(dir, "InstrumentSerif-Regular.ttf")),
    readFile(join(dir, "InstrumentSerif-Italic.ttf")),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fbf9f7", fontFamily: "Instrument" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            color: "#1c1517",
            borderRight: "1px solid rgba(28,21,23,0.12)",
          }}
        >
          <div style={{ display: "flex", gap: 10, fontSize: 40 }}>
            <span>Marta</span>
            <span style={{ fontStyle: "italic" }}>Empire</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 170, lineHeight: 0.9, letterSpacing: -5 }}>Queen</div>
            <div style={{ fontSize: 170, lineHeight: 0.9, letterSpacing: -5, fontStyle: "italic", color: "#6b1428" }}>Identity.</div>
          </div>
          <div style={{ fontSize: 32, color: "rgba(28,21,23,0.7)" }}>You have outgrown the version of you that built this.</div>
        </div>
        <div
          style={{
            width: 300,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 64,
            background: "#6b1428",
            color: "#fbf3f1",
            fontSize: 120,
            fontStyle: "italic",
          }}
        >
          ME
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument", data: regular, weight: 400, style: "normal" },
        { name: "Instrument", data: italic, weight: 400, style: "italic" },
      ],
    },
  );
}
