import Image from "next/image";
import type { CSSProperties } from "react";
import { brandLogo } from "@/lib/brand";
import { cn } from "@/lib/utils";
export default function Logo({
  className,
  markClassName,
  markOnly = false,
}: {
  className?: string;
  markClassName?: string;
  markOnly?: boolean;
}) {
  const crop = brandLogo.crop;
  const imageStyle = {
    "--logo-image-width": (brandLogo.width / crop.size) * 100 + "%",
    "--logo-image-left": (-crop.left / crop.size) * 100 + "%",
    "--logo-image-top": (-crop.top / crop.size) * 100 + "%",
  } as CSSProperties;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold tracking-[-0.065em]",
        className,
      )}
    >
      <span className={cn("logo-mark", markClassName)} style={imageStyle}>
        <Image
          src={brandLogo.src}
          alt={markOnly ? "closecopy logo" : ""}
          width={brandLogo.width}
          height={brandLogo.height}
          sizes="64px"
          className="logo-image"
        />
      </span>
      {!markOnly && (
        <span>
          closecopy<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
