import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brandLogo } from "@/lib/brand";
const logo = await readFile(
  join(process.cwd(), "public", brandLogo.src.slice(1)),
);
const logoData = "data:image/png;base64," + logo.toString("base64");
export function createBrandIcon(size: number) {
  const scale = size / brandLogo.crop.size;
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: size,
        height: size,
        overflow: "hidden",
      }}
    >
      {/* ImageResponse renders native image elements, not next/image. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="closecopy"
        src={logoData}
        width={brandLogo.width * scale}
        height={brandLogo.height * scale}
        style={{
          position: "absolute",
          left: -brandLogo.crop.left * scale,
          top: -brandLogo.crop.top * scale,
        }}
      />
    </div>,
    { width: size, height: size },
  );
}
