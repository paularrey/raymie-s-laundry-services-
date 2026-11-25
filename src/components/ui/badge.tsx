import { cn } from "@/lib/utils";

/** Small pill badge used for eyebrows, chips and stickers. */
export function Badge({
  children,
  className,
  tone = "primary",
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "primary" | "accent" | "leaf" | "cream" | "glass" | "mint";
  icon?: React.ReactNode;
}) {
  const tones = {
    primary: "bg-lime-100 text-ink",
    accent: "bg-tang-100 text-tang-800",
    leaf: "bg-lime-300 text-ink",
    cream: "bg-warm-100 text-body",
    glass: "glass text-ink",
    mint: "bg-[#25D366]/15 text-[#128C4A]",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]",
        tones[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
