"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { motion, useMotionValue } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
export default function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("group relative h-full", className)}
      whileHover={reduce ? undefined : { y: -4 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - 140);
        y.set(e.clientY - r.top - 140);
      }}
    >
      <Card className="glass relative h-full gap-0 rounded-2xl p-7">
        <motion.div
          aria-hidden="true"
          style={{ x, y }}
          className="spotlight absolute left-0 top-0 size-70 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
        />
        {children}
      </Card>
    </motion.div>
  );
}
