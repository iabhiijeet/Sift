"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Artifacts = dynamic(
  () => import("@/components/sections/ArtifactsShowcase"),
);
const Playground = dynamic(() => import("@/components/sections/Playground"));
function LazySection({
  id,
  children,
  height,
}: {
  id: string;
  children: React.ReactNode;
  height: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const ready = useInView(ref, { once: true, margin: "800px 0px" });
  return (
    <div id={id} ref={ref}>
      {ready ? (
        children
      ) : (
        <div
          className={
            height + " container-page flex items-center justify-center"
          }
          aria-label="Loading interactive preview"
        >
          <p className="app-label">A little possibility is on its way…</p>
        </div>
      )}
    </div>
  );
}
export function LazyArtifacts() {
  return (
    <LazySection id="artifacts" height="min-h-220">
      <Artifacts />
    </LazySection>
  );
}
export function LazyPlayground() {
  return (
    <LazySection id="playground" height="min-h-185">
      <Playground />
    </LazySection>
  );
}
