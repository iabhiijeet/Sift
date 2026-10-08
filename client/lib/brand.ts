// All product marks and browser icons use the same supplied asset.
export const brandLogo = {
  src: "/logo.png",
  width: 1254,
  height: 1254,
  // Frame the mark inside the source image's generous black canvas.
  // This only controls presentation; public/logo.png stays unchanged.
  crop: { left: 270, top: 235, size: 720 },
} as const;
