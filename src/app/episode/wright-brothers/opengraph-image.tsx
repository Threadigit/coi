import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "The Wright Brothers: The Invention of Flight — Chronicles of Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bgData, serifBold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "public/wright-hero.jpg")),
    readFile(
      join(process.cwd(), "src/app/episode/wright-brothers/_assets/NotoSerif-Bold.ttf")
    ),
    readFile(
      join(process.cwd(), "src/app/episode/wright-brothers/_assets/NotoSerif-Italic.ttf")
    ),
  ]);
  const bg = `data:image/jpeg;base64,${bgData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          backgroundColor: "#0f1419",
          fontFamily: "Noto Serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bg}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0f1419 16%, rgba(15,20,25,0.7) 55%, rgba(15,20,25,0.35) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0 64px 60px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                color: "#fbcb7e",
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Chronicles of Innovation
            </div>
            <div style={{ width: 40, height: 2, backgroundColor: "#4f4538" }} />
            <div
              style={{
                color: "#92ccff",
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Episode 003 · 1899–1927
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "#dee3ea",
              fontSize: 74,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            The Wright Brothers
          </div>
          <div
            style={{
              display: "flex",
              color: "#fbcb7e",
              fontSize: 50,
              lineHeight: 1.1,
              fontStyle: "italic",
              marginTop: 8,
            }}
          >
            The Invention of Flight
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 30,
              color: "#d2c4b3",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            The Birth of Flight · 20-Min Feature
          </div>
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
