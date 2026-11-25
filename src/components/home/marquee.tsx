import { Truck, Leaf, Clock, ShieldCheck, Moon, MessageCircle, Sparkles } from "lucide-react";
import { trustItems } from "@/data/trust";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  truck: Truck,
  leaf: Leaf,
  clock: Clock,
  shield: ShieldCheck,
  moon: Moon,
  message: MessageCircle,
  sparkles: Sparkles,
};

export function TrustMarquee() {
  const loop = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <div
      className="relative overflow-hidden border-y border-lime-100 bg-white py-5"
      aria-label="Why customers choose us"
    >
      <div className="marquee-track items-center gap-10">
        {loop.map(({ label, icon }, i) => {
          const Icon = iconMap[icon] ?? Sparkles;
          return (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-10"
              aria-hidden={i >= trustItems.length * 2}
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tang-500" />
                <Icon className="h-5 w-5 text-tang-500" aria-hidden />
                <span className="whitespace-nowrap font-heading text-sm font-bold uppercase tracking-[0.18em] text-ink">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
