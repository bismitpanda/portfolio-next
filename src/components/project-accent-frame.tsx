import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProjectAccentFrameProps = {
  // Computed from the cover by `bun run images`; no glow until it has run.
  accent?: string;
  children: ReactNode;
  className?: string;
};

function withAlpha(hex: string, alpha: string) {
  return /^#[0-9a-fA-F]{6}$/.test(hex) ? `${hex}${alpha}` : hex;
}

export function ProjectAccentFrame({
  accent,
  children,
  className,
}: ProjectAccentFrameProps) {
  if (!accent) {
    return (
      <div className={cn("relative isolate rounded-lg", className)}>
        <div className="relative h-full overflow-hidden rounded-[inherit] bg-muted">
          {children}
        </div>
      </div>
    );
  }

  const glowStyle = {
    background: `radial-gradient(circle at 50% 50%, ${withAlpha(
      accent,
      "55",
    )} 0%, ${withAlpha(accent, "18")} 38%, transparent 72%)`,
  } satisfies CSSProperties;

  const frameStyle = {
    boxShadow: `0 0 0 1px ${withAlpha(
      accent,
      "35",
    )}, 0 28px 90px -56px ${withAlpha(accent, "dd")}`,
  } satisfies CSSProperties;

  const washStyle = {
    background: `linear-gradient(135deg, ${withAlpha(
      accent,
      "24",
    )}, transparent 34%, ${withAlpha(accent, "14")})`,
  } satisfies CSSProperties;

  return (
    <div className={cn("relative isolate rounded-lg", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[inherit] opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={glowStyle}
      />
      <div
        className="relative h-full overflow-hidden rounded-[inherit] bg-muted"
        style={frameStyle}
      >
        {children}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60"
          style={washStyle}
        />
      </div>
    </div>
  );
}
