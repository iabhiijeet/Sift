"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { studySections } from "@/lib/mock-data";
export default function StudyGuideArtifact({
  sections = studySections,
}: {
  sections?: typeof studySections;
}) {
  return (
    <div className="preview-paper">
      <p className="eyebrow mb-4">YOUR LEARNING ROADMAP</p>
      <h3 className="text-2xl font-medium tracking-tight">
        Creative thinking, understood.
      </h3>
      <p className="text-sm text-muted-foreground mt-3 mb-7">
        Explore the concepts. Check your understanding. Put them to work.
      </p>
      <Accordion defaultValue={[sections[0].title]} className="space-y-3">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <AccordionItem
              value={s.title}
              className="border border-border rounded-xl px-5 bg-background/30"
            >
              <AccordionTrigger className="py-5 text-sm">
                {s.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.text}
                </p>
                <Badge
                  variant="outline"
                  className="text-[9px] mb-3 text-primary border-primary/20"
                >
                  CHECK YOUR UNDERSTANDING
                </Badge>
                <ul className="space-y-2 pb-2">
                  {s.questions.map((q) => (
                    <li
                      key={q}
                      className="text-xs text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">↳</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
