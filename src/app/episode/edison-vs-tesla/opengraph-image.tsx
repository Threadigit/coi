import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Light Bulb & Electricity: Edison vs Tesla's Hidden Battle — Chronicles of Innovation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bgData, serifBold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), "public/edison-machine-shop.jpg")),
    readFile(
      join(process.cwd(), "src/app/episode/edison-vs-tesla/_assets/NotoSerif-Bold.ttf")
    ),
    readFile(
      join(process.cwd(), "src/app/episode/edison-vs-tesla/_assets/NotoSerif-Italic.ttf")
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
        {/* Background photo */}
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
            opacity: 0.55,
          }}
        />
        {/* Gradient scrim */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0f1419 12%, rgba(15,20,25,0.55) 55%, rgba(15,20,25,0.2) 100%)",
          }}
        />

        {/* Content */}
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
                fontFamily: "Noto Serif",
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
              Episode 001 · 1879–1893
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "#dee3ea",
              fontSize: 78,
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            Light Bulb &amp; Electricity
          </div>
          <div
            style={{
              display: "flex",
              color: "#fbcb7e",
              fontSize: 58,
              lineHeight: 1.1,
              fontStyle: "italic",
              marginTop: 6,
            }}
          >
            Edison vs Tesla&apos;s Hidden Battle
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
            The War of Currents · 19-Min Feature
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
