"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { MotionConfig, motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
function Effects() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const x = useMotionValue(-1000),
    y = useMotionValue(-1000);
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, duration: 1.1 });
    return () => lenis.destroy();
  }, [reduce]);
  useEffect(() => {
    if (reduce || !matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce, x, y]);
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-0.5 z-100 accent-gradient origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="cursor-glow fixed left-0 top-0 size-75 z-0 pointer-events-none hidden lg:block"
          style={{ x, y }}
        />
      )}
    </>
  );
}
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <TooltipProvider delay={180}>
        <Effects />
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "var(--popover)",
              borderColor: "var(--border)",
              color: "var(--foreground)",
            },
          }}
        />
      </TooltipProvider>
    </MotionConfig>
  );
}
