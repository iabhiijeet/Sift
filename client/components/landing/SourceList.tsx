"use client";
import { useReducedMotionPreference as useReducedMotion } from "@/components/landing/useReducedMotionPreference";
import { motion } from "framer-motion";
import { FileText, Link2, StickyNote, Check, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { sources } from "@/lib/mock-data";
import type { Source } from "@/types";
export const SourceIcon = ({ type }: { type: Source["type"] }) => {
  const Icon =
    type === "link" ? Link2 : type === "note" ? StickyNote : FileText;
  return <Icon className="size-4" />;
};
export default function SourceList({
  stage = 10,
  items = sources,
  onAdd,
}: {
  stage?: number;
  items?: Source[];
  onAdd?: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="space-y-2.5">
      {items.map((s, i) => (
        <motion.div
          key={s.id}
          initial={reduce ? false : { opacity: 0, x: -12 }}
          animate={{ opacity: stage >= i ? 1 : 0.22, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-lg border border-border bg-background/40 p-3"
        >
          <div className="flex items-start gap-2.5">
            <span className="source-icon">
              <SourceIcon type={s.type} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium mt-0.5">
                {s.name}
              </p>
              <p className="text-[9px] text-muted-foreground mt-1">{s.meta}</p>
            </div>
            {stage > i + 1 && <Check className="size-3 text-success mt-1" />}
          </div>
          {stage <= i + 1 ? (
            <Progress
              aria-label={"Indexing " + s.name}
              value={stage >= i ? 65 : 0}
              className="mt-3"
            />
          ) : (
            <Badge
              variant="ghost"
              className="text-[8px] text-muted-foreground p-0 h-3 mt-2 ml-10.5"
            >
              Ready to explore
            </Badge>
          )}
        </motion.div>
      ))}
      <Button
        variant="outline"
        onClick={onAdd}
        disabled={!onAdd}
        className="w-full mt-3 h-9 border-dashed text-[10px] text-muted-foreground"
      >
        <Plus className="size-3" /> Add a source
      </Button>
    </div>
  );
}
