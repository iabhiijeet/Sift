"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
const nodes = [
  {
    label: "Collect",
    detail: "Gather observations from diverse sources.",
    x: 17,
    y: 22,
  },
  {
    label: "Connect",
    detail: "Find patterns between unrelated ideas.",
    x: 80,
    y: 23,
  },
  {
    label: "Experiment",
    detail: "Test the smallest useful version.",
    x: 82,
    y: 73,
  },
  {
    label: "Reflect",
    detail: "Use feedback to guide your next attempt.",
    x: 19,
    y: 76,
  },
  {
    label: "Constraints",
    detail: "A meaningful boundary gives exploration a direction.",
    x: 50,
    y: 90,
  },
];
function NodeAndEdge({
  node,
  index,
  bounds,
}: {
  node: (typeof nodes)[number];
  index: number;
  bounds: React.RefObject<HTMLDivElement | null>;
}) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const reduce = useReducedMotion();
  const d = useTransform(() => {
    const box = bounds.current;
    const nx = node.x + (x.get() / (box?.clientWidth || 600)) * 100;
    const ny = node.y + (y.get() / (box?.clientHeight || 340)) * 100;
    return "M50 48 Q" + (nx < 50 ? 30 : 70) + " 48 " + nx + " " + ny;
  });
  function nudge(e: React.KeyboardEvent) {
    const keys: Record<string, [number, number]> = {
      ArrowLeft: [-8, 0],
      ArrowRight: [8, 0],
      ArrowUp: [0, -8],
      ArrowDown: [0, 8],
    };
    if (keys[e.key]) {
      e.preventDefault();
      x.set(Math.max(-30, Math.min(30, x.get() + keys[e.key][0])));
      y.set(Math.max(-25, Math.min(25, y.get() + keys[e.key][1])));
    }
  }
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full pointer-events-none"
      >
        <motion.path
          d={d}
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.45"
          strokeWidth="0.4"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: index * 0.12 }}
        />
      </svg>
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={{ left: -30, right: 30, top: -25, bottom: 25 }}
        style={{ x, y, left: node.x + "%", top: node.y + "%" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 + index * 0.15 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 touch-none"
      >
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                aria-label={
                  node.label + ". Drag or use arrow keys to move this node."
                }
                onKeyDown={nudge}
                className="h-9 sm:h-11 rounded-xl px-2 sm:px-5 bg-card border-primary/25 text-[10px] sm:text-xs cursor-grab active:cursor-grabbing"
              />
            }
          >
            {node.label}
          </TooltipTrigger>
          <TooltipContent>{node.detail}</TooltipContent>
        </Tooltip>
      </motion.div>
    </>
  );
}
export default function MindMapArtifact() {
  const bounds = useRef<HTMLDivElement>(null);
  return (
    <div className="preview-paper">
      <p className="eyebrow mb-4">THINK IN CONNECTIONS</p>
      <h3 className="text-2xl font-medium tracking-tight">
        See the whole picture.
      </h3>
      <p className="text-xs text-muted-foreground mt-2">
        Drag a node or use arrow keys. Hover or focus for more context.
      </p>
      <div
        ref={bounds}
        className="relative h-75 sm:h-85 mt-4 dot-grid rounded-xl"
      >
        {nodes.map((node, i) => (
          <NodeAndEdge key={node.label} node={node} index={i} bounds={bounds} />
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute pointer-events-none left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 rounded-xl gradient-button px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium flex items-center gap-2"
        >
          <Network className="size-4" /> Creative thinking
        </motion.div>
      </div>
    </div>
  );
}
