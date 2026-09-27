import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Chronicles of Innovation — the premium documentary series on the innovations that shaped the modern world";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logoData, serifBold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "public/coi_logo_transparent.png")),
    readFile(join(process.cwd(), "src/app/_assets/NotoSerif-Bold.ttf")),
    readFile(join(process.cwd(), "src/app/_assets/NotoSerif-Italic.ttf")),
  ]);
  const logo = `data:image/png;base64,${logoData.toString("base64")}`;

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
          backgroundColor: "#0f1419",
          backgroundImage:
            "radial-gradient(circle at 50% 32%, rgba(251,203,126,0.10), rgba(15,20,25,0) 60%)",
          fontFamily: "Noto Serif",
          padding: "0 80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" width={188} height={188} style={{ marginBottom: 20 }} />
        <div
          style={{
            display: "flex",
            color: "#dee3ea",
            fontSize: 62,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Chronicles of Innovation
        </div>
        <div style={{ width: 120, height: 2, backgroundColor: "#4f4538", margin: "26px 0" }} />
        <div
          style={{
            display: "flex",
            color: "#fbcb7e",
            fontSize: 30,
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: 860,
            lineHeight: 1.35,
          }}
        >
          The premium documentary series on the innovations that shaped the modern world
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Serif", data: serifBold, weight: 700, style: "normal" },
        { name: "Noto Serif", data: serifItalic, weight: 400, style: "italic" },
      ],
    }
  );
}
