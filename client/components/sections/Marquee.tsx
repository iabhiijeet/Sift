import { Badge } from "@/components/ui/badge";
import {
  FileText,
  BookOpen,
  Globe,
  Play,
  Link2,
  StickyNote,
} from "lucide-react";
import MarqueeTrack from "@/components/landing/Marquee";
import AnimatedCounter from "@/components/landing/AnimatedCounter";
const inputs = [
  { label: "PDF", Icon: FileText },
  { label: "EPUB", Icon: BookOpen },
  { label: "DOCX", Icon: FileText },
  { label: "TXT", Icon: StickyNote },
  { label: "Markdown", Icon: FileText },
  { label: "YouTube", Icon: Play },
  { label: "Web links", Icon: Link2 },
  { label: "Google Docs", Icon: Globe },
];
export default function Marquee() {
  return (
    <section
      aria-label="Supported source formats"
      className="border-y border-border py-7"
    >
      <div className="container-page flex flex-col lg:flex-row gap-7 items-center">
        <div className="shrink-0 text-[9px] text-muted-foreground font-mono leading-relaxed tracking-wider">
          ALL YOUR KNOWLEDGE.
          <br />
          <span className="text-foreground/70">EVERY KIND OF SOURCE.</span>
        </div>
        <MarqueeTrack duration={28} className="w-full min-w-0 flex-1">
          {inputs.map(({ label, Icon }) => (
            <Badge
              key={label}
              variant="ghost"
              className="gap-2 px-3 h-8 text-[11px] text-muted-foreground font-normal"
            >
              <Icon className="size-3.5" />
              {label}
            </Badge>
          ))}
        </MarqueeTrack>
        <div className="flex gap-7 shrink-0 lg:border-l lg:border-border lg:pl-7">
          <AnimatedCounter value={10} label="sources processed" />
          <AnimatedCounter value={50} label="artifacts generated" />
        </div>
      </div>
      <p className="text-center text-[8px] text-muted-foreground/70 mt-4">
        Illustrative demo metrics · Supported inputs shown for the planned
        product
      </p>
    </section>
  );
}
