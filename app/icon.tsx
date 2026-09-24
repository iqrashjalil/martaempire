import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(join(process.cwd(), "app", "fonts", "InstrumentSerif-Italic.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6b1428",
          color: "#fbf3f1",
          fontFamily: "Instrument",
          fontStyle: "italic",
          fontSize: 50,
          lineHeight: 1,
        }}
      >
        <span style={{ marginTop: -4 }}>M</span>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument", data: font, weight: 400, style: "italic" }] },
  );
}
