"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Marquee({
  children,
  reverse = false,
  duration = 40,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useRef<ReturnType<typeof animate> | null>(null);
  useEffect(() => {
    if (reduce || !ref.current) return;
    const width = (ref.current.scrollWidth + 16) / 2;
    const a = animate(x, reverse ? [-width, 0] : [0, -width], {
      duration,
      repeat: Infinity,
      ease: "linear",
    });
    controls.current = a;
    return () => {
      a.stop();
      controls.current = null;
    };
  }, [reduce, reverse, duration, x]);
  return (
    <div
      className={"marquee-mask overflow-hidden " + (className ?? "")}
      onMouseEnter={() => controls.current?.pause()}
      onMouseLeave={() => controls.current?.play()}
      onFocusCapture={() => controls.current?.pause()}
      onBlurCapture={() => controls.current?.play()}
    >
      <motion.div ref={ref} className="flex w-max gap-4" style={{ x }}>
        <div className="flex shrink-0 gap-4">{children}</div>
        {!reduce && (
          <div className="flex shrink-0 gap-4" aria-hidden="true" inert>
            {children}
          </div>
        )}
      </motion.div>
    </div>
  );
}
