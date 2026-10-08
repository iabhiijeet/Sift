"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export default function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={cn("gradient-text relative inline-block", className)}>
      {children}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(105deg,var(--accent-end),var(--primary))",
          }}
          animate={{ opacity: [0, 0.65, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      )}
    </span>
  );
}
