import Image from "next/image";
import { cn } from "@/lib/utils";

/** Brand logo badge — swap src for the final supplied logo. */
export function LogoBadge({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-badge.svg"
      alt="Raymie's Laundry Services logo"
      width={44}
      height={44}
      className={cn("shrink-0", className)}
      priority
    />
  );
}
