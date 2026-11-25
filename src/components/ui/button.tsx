import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outline" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-lime-700 disabled:cursor-not-allowed disabled:opacity-70 min-h-[44px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-tang-400 to-lemon-300 text-ink shadow-glow hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass text-ink hover:shadow-card hover:-translate-y-0.5",
  white:
    "bg-white text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5",
  outline:
    "border-2 border-lime-200 text-ink hover:border-lime-500 hover:text-lime-700 bg-white",
  ghost: "text-body hover:text-lime-700 hover:bg-lime-50",
  whatsapp:
    "bg-[#25D366] text-ink shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:bg-[#1FBE5A] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}
