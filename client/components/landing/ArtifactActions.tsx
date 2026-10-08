"use client";
import { Copy, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { artifactMarkdown, downloadMarkdown } from "@/lib/artifact-export";
import type { ArtifactType } from "@/types";
export default function ArtifactActions({
  type,
  sourceIds,
}: {
  type: ArtifactType;
  sourceIds?: string[];
}) {
  const text = artifactMarkdown(type, sourceIds);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Artifact copied, including source attributions.");
    } catch {
      toast.error(
        "Clipboard access is unavailable. Use Export → Markdown instead.",
      );
    }
  }
  async function share() {
    try {
      if (navigator.share)
        await navigator.share({ title: "closecopy · " + type, text });
      else {
        await navigator.clipboard.writeText(text);
        toast.success(
          "Artifact copied. Paste it wherever you’d like to share.",
        );
      }
    } catch (e) {
      if (e instanceof Error && e.name !== "AbortError")
        toast.error("Sharing is unavailable. You can export Markdown instead.");
    }
  }
  return (
    <div className="flex gap-1">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Copy artifact"
              onClick={copy}
            />
          }
        >
          <Copy className="size-3.5" />
        </TooltipTrigger>
        <TooltipContent>Copy artifact</TooltipContent>
      </Tooltip>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Export artifact"
            />
          }
        >
          <Download className="size-3.5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-45">
          <DropdownMenuItem
            onClick={() => downloadMarkdown(text, "closecopy-" + type)}
          >
            Markdown{" "}
            <span className="ml-auto text-[9px] text-success">.md</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              toast.info(
                "PDF export is a preview in this frontend demo. Download Markdown to keep your artifact.",
              )
            }
          >
            PDF{" "}
            <span className="ml-auto text-[9px] text-muted-foreground">
              Demo
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              toast.info(
                "DOCX export is a preview in this frontend demo. Download Markdown to keep your artifact.",
              )
            }
          >
            DOCX{" "}
            <span className="ml-auto text-[9px] text-muted-foreground">
              Demo
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Share artifact"
              onClick={share}
            />
          }
        >
          <Share2 className="size-3.5" />
        </TooltipTrigger>
        <TooltipContent>Share artifact</TooltipContent>
      </Tooltip>
    </div>
  );
}
