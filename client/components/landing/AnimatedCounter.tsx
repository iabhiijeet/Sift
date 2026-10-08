"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function AnimatedCounter({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!seen || reduce) return;
    const a = animate(0, value, {
      duration: 1.8,
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => a.stop();
  }, [seen, value, reduce]);
  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="text-xl font-semibold tracking-tight tabular-nums">
        {reduce ? value : count}k<span className="text-primary">+</span>
      </span>
      <span className="text-xs text-muted-foreground max-w-22 leading-relaxed">
        {label}
      </span>
    </div>
  );
}
