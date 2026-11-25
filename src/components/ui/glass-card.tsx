import { cn } from "@/lib/utils";

/** Floating glass stat card used over hero/feature images. */
export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass rounded-2xl px-5 py-4", className)}>{children}</div>
  );
}

/** Slowly rotating circular text badge. */
export function RotatingBadge({
  text = "Open 24/7  ✦  Free pickup  ✦  ",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none flex h-28 w-28 items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      <div className="rotate-badge absolute inset-0">
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <defs>
            <path
              id="badge-circle"
              d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            />
          </defs>
          <text
            fill="#17181A"
            fontSize="11"
            fontWeight="700"
            letterSpacing="2.2"
            fontFamily="var(--font-heading), sans-serif"
          >
            <textPath href="#badge-circle">{text.repeat(2)}</textPath>
          </text>
        </svg>
      </div>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-tang-400 to-lemon-300 text-ink shadow-glow">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-1.5 3-5 4.5-5 8a5 5 0 0 0 10 0c0-3.5-3.5-5-5-8Z" />
          <path d="M12 14v4" />
        </svg>
      </span>
    </div>
  );
}
