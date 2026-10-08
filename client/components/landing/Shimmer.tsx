"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
export default function Shimmer() {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden space-y-2">
      <Skeleton className="h-2 w-full" />
      <Skeleton className="h-2 w-4/5" />
      <Skeleton className="h-2 w-3/5" />
      {!reduce && (
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-foreground/8 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}
