"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { motion } from "framer-motion";
import { timeline } from "@/lib/mock-data";
export default function TimelineArtifact({
  events = timeline,
}: {
  events?: typeof timeline;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="preview-paper">
      <p className="eyebrow mb-4">IDEAS INTO ACTION</p>
      <h3 className="text-2xl font-medium tracking-tight mb-7">
        Four days to a better idea.
      </h3>
      <div className="relative">
        <motion.div
          aria-hidden="true"
          className="absolute left-2.5 top-2 bottom-8 w-px accent-gradient origin-top"
          initial={{ scaleY: reduce ? 1 : 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2 }}
        />
        {events.map((e, i) => (
          <motion.div
            key={e.date}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.2 }}
            className="relative pl-11 pb-7"
          >
            <span className="absolute top-1 left-1 size-3 rounded-full bg-primary border-4 border-card ring-1 ring-primary/40" />
            <p className="font-mono text-[9px] text-primary mb-2">{e.date}</p>
            <h4 className="text-sm font-medium">{e.title}</h4>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              {e.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
