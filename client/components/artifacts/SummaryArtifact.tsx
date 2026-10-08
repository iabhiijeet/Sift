"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { summary } from "@/lib/mock-data";
import Typewriter from "@/components/landing/Typewriter";
export default function SummaryArtifact({
  data = summary,
}: {
  data?: typeof summary;
}) {
  return (
    <div className="preview-paper">
      <p className="eyebrow mb-4">THE ESSENTIALS · 3 MIN READ</p>
      <h3 className="text-2xl sm:text-3xl tracking-tight font-medium mb-5">
        {data.title}
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground min-h-18">
        <Typewriter text={data.intro} />
      </p>
      <div className="grid gap-4 mt-7">
        {data.points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="flex gap-4 rounded-xl border border-border bg-background/30 p-4"
          >
            <span className="font-mono text-primary text-xs pt-1">
              0{i + 1}
            </span>
            <div>
              <h4 className="text-sm font-medium mb-1.5 flex items-center gap-2">
                {p.title}
                <ArrowUpRight className="size-3 text-primary" />
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
