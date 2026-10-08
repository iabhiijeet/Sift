"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { artifactTypes, sources } from "@/lib/mock-data";
import type { ArtifactType } from "@/types";
import { SourceIcon } from "./SourceList";
export default function GenerateDialog({
  onGenerate,
  initialType = "summary",
}: {
  onGenerate: (type: ArtifactType, ids: string[]) => void;
  initialType?: ArtifactType;
}) {
  const [open, setOpen] = useState(false),
    [selected, setSelected] = useState(sources.map((s) => s.id)),
    [type, setType] = useState<ArtifactType>(initialType),
    [generating, setGenerating] = useState(false),
    [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!generating || !open) return;
    const timer = setInterval(
      () => setProgress((p) => Math.min(100, p + 8)),
      130,
    );
    return () => clearInterval(timer);
  }, [generating, open]);
  useEffect(() => {
    if (progress !== 100 || !generating) return;
    const timer = setTimeout(() => {
      onGenerate(type, selected);
      setGenerating(false);
      setOpen(false);
      toast.success(
        artifactTypes.find((a) => a.id === type)?.label +
          " created from your sample sources.",
      );
    }, 350);
    return () => clearTimeout(timer);
  }, [progress, generating, onGenerate, type, selected]);
  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          setGenerating(false);
          setProgress(0);
        } else setType(initialType);
      }}
    >
      <DialogTrigger
        render={<Button className="gradient-button h-9 gap-2 px-4 text-xs" />}
      >
        <Sparkles className="size-3.5" /> Generate
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-xl p-6 max-h-[85svh] overflow-y-auto"
        data-lenis-prevent
      >
        <DialogTitle className="text-xl tracking-tight">
          From your sources. For your next idea.
        </DialogTitle>
        <DialogDescription>
          Choose the ingredients. We’ll help you make something useful.
        </DialogDescription>
        <AnimatePresence mode="wait">
          {generating ? (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-10 text-center"
            >
              <motion.div
                animate={{ rotate: progress === 100 ? 0 : 180 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="size-14 rounded-xl bg-primary/10 text-primary mx-auto grid place-items-center mb-5"
              >
                {progress === 100 ? <Check /> : <Sparkles />}
              </motion.div>
              <h4 className="text-base mb-2">
                {progress < 35
                  ? "Reading the relevant passages…"
                  : progress < 75
                    ? "Connecting your ideas…"
                    : "Adding the finishing touches…"}
              </h4>
              <p className="text-xs text-muted-foreground mb-6">
                Simulated generation · Everything stays in your browser
              </p>
              <Progress
                value={progress}
                aria-label="Artifact generation progress"
              />
              <p className="font-mono text-xs text-primary mt-3">{progress}%</p>
            </motion.div>
          ) : (
            <motion.div
              key="options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="app-label mt-4 mb-3">01 · Select your sources</p>
              <div className="space-y-2">
                {sources.map((s) => (
                  <Label
                    key={s.id}
                    htmlFor={"generate-" + s.id}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer"
                  >
                    <Checkbox
                      id={"generate-" + s.id}
                      checked={selected.includes(s.id)}
                      onCheckedChange={(v) =>
                        setSelected((prev) =>
                          v
                            ? [...prev, s.id]
                            : prev.filter((id) => id !== s.id),
                        )
                      }
                    />
                    <span className="source-icon size-7">
                      <SourceIcon type={s.type} />
                    </span>
                    <span className="text-xs font-normal flex-1">{s.name}</span>
                    <Badge variant="outline" className="text-[8px] uppercase">
                      {s.type}
                    </Badge>
                  </Label>
                ))}
              </div>
              <p className="app-label mt-6 mb-3">02 · Choose your artifact</p>
              <ToggleGroup
                value={[type]}
                onValueChange={(v) => {
                  if (v[0]) setType(v[0] as ArtifactType);
                }}
                className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2"
                aria-label="Artifact type"
              >
                {artifactTypes.map((a) => (
                  <ToggleGroupItem
                    key={a.id}
                    value={a.id}
                    className="border border-border text-[10px] h-9 data-pressed:bg-primary/15 data-pressed:border-primary/40 data-pressed:text-primary"
                  >
                    {a.label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <div className="flex justify-between items-center mt-6">
                <p className="text-[10px] text-muted-foreground">
                  {selected.length} sample sources selected
                </p>
                <Button
                  disabled={!selected.length}
                  onClick={() => {
                    setProgress(0);
                    setGenerating(true);
                  }}
                  className="gradient-button h-10 text-xs"
                >
                  Create artifact
                  <ArrowRight />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
