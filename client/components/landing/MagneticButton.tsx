"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const styles = cva("relative h-11 px-5 rounded-lg text-sm font-medium", {
  variants: {
    tone: {
      gradient: "gradient-button text-primary-foreground border-primary/30",
      outline: "border-border bg-background/50 hover:bg-muted",
      ghost: "bg-transparent hover:bg-muted",
    },
  },
  defaultVariants: { tone: "gradient" },
});
export default function MagneticButton({
  children,
  className,
  tone = "gradient",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "variant"> & {
  tone?: "gradient" | "outline" | "ghost";
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 }),
    sy = useSpring(y, { stiffness: 200, damping: 20 });
  return (
    <motion.div
      className="inline-flex"
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.12);
        y.set((e.clientY - r.top - r.height / 2) * 0.12);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={reduce ? undefined : { scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant={tone === "ghost" ? "ghost" : "default"}
        nativeButton={props.render ? false : undefined}
        role={props.render ? "link" : undefined}
        className={cn(styles({ tone }), className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
