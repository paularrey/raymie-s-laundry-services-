"use client";

import { useId } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/**
 * Animated decorative wave line (soap-suds ripple).
 * `variant`: "hero" (thick, draws under headline), "divider" (full-width),
 * "flat" (calm still wave for the 404 page).
 */
export function WaveLine({
  className,
  variant = "hero",
  color = "#84CC16",
  animate = true,
}: {
  className?: string;
  variant?: "hero" | "divider" | "flat";
  color?: string;
  animate?: boolean;
}) {
  const id = useId();

  const path =
    "M0 30 C 60 10, 120 50, 200 30 S 340 10, 400 30 S 540 50, 600 30 S 740 10, 800 30";

  const flat = "M0 30 C 100 22, 200 38, 300 30 S 500 22, 600 30 S 750 38, 800 30";

  const strokeWidth = variant === "hero" ? 3 : 2;

  return (
    <div className={cn("w-full overflow-hidden", className)} aria-hidden="true">
      <svg
        viewBox="0 0 800 60"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        role="presentation"
      >
        <defs>
          <linearGradient id={`wave-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="20%" stopColor={color} stopOpacity="1" />
            <stop offset="80%" stopColor="#F97316" stopOpacity="1" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d={variant === "flat" ? flat : path}
          stroke={`url(#wave-${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={animate && variant !== "flat" ? "animate-shimmer" : undefined}
          style={{
            strokeDasharray: 1600,
            animation: animate && variant !== "flat" ? undefined : "none",
          }}
        />
      </svg>
    </div>
  );
}

/** Thin wave divider between sections. */
export function WaveDivider({ className }: { className?: string }) {
  return (
    <Reveal className={cn("w-full", className)}>
      <WaveLine variant="divider" className="h-10 md:h-14" />
    </Reveal>
  );
}
