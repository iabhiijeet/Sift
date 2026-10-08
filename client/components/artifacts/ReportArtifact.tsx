"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import CitationChip from "@/components/landing/CitationChip";
import { citations, summary } from "@/lib/mock-data";
export default function ReportArtifact({
  data = summary,
}: {
  data?: typeof summary;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="preview-paper"
    >
      <div className="flex justify-between app-label mb-4">
        <span>RESEARCH BRIEF</span>
        <span>3 SOURCES · OCT 2026</span>
      </div>
      <h3 className="text-3xl serif tracking-tight">
        Creativity as a deliberate practice
      </h3>
      <Separator className="my-6" />
      <h4 className="text-sm font-medium mb-3">Executive summary</h4>
      <p className="text-xs text-muted-foreground leading-[1.9]">
        {data.intro} <CitationChip citation={citations[0]} />
      </p>
      <h4 className="text-sm font-medium mt-6 mb-3">Key findings</h4>
      <div className="space-y-4">
        {data.points.map((p, i) => (
          <div key={p.title}>
            <h5 className="text-xs font-medium mb-1">
              {i + 1}. {p.title}
            </h5>
            <p className="text-xs text-muted-foreground leading-[1.9]">
              {p.text} <CitationChip citation={citations[i]} />
            </p>
          </div>
        ))}
      </div>
      <Separator className="my-5" />
      <p className="text-[10px] text-muted-foreground leading-relaxed">
        <span className="text-primary">Recommendation:</span> Start with a daily
        observation journal and one small experiment per week. Review the
        original source passages before sharing this sample brief.
      </p>
    </motion.article>
  );
}
