import {
  WashingMachine,
  Shirt,
  Sparkles,
  Zap,
  Bed,
  Footprints,
  Building2,
  Droplets,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "washing-machine": WashingMachine,
  shirt: Shirt,
  sparkles: Sparkles,
  zap: Zap,
  bed: Bed,
  footprints: Footprints,
  building: Building2,
  droplets: Droplets,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Droplets;
  return <Icon className={className} aria-hidden="true" />;
}
