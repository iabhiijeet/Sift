import { cn } from "@/lib/utils";
export default function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold tracking-[-0.065em]",
        className,
      )}
    >
      <span aria-hidden="true" className="logo-mark">
        <span />
        <span />
      </span>
      {!markOnly && (
        <span>
          closecopy<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
