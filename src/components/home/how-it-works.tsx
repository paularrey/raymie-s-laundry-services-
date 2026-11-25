"use client";

import { useReducedMotion } from "framer-motion";
import { MessageCircle, Truck, Sparkles, Package, WashingMachine, Shirt } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/process";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  message: MessageCircle,
  truck: Truck,
  machine: WashingMachine,
  shirt: Shirt,
  sparkles: Sparkles,
  package: Package,
};

function Dial() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
      <div
        className={`absolute inset-0 rounded-full border-2 border-dashed border-lime-300 ${reduce ? "" : "animate-spin-slow"}`}
        aria-hidden="true"
      />
      <div className="absolute inset-[12%] rounded-full bg-white/70 shadow-card ring-1 ring-lime-200 backdrop-blur" aria-hidden="true" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-tang-400 to-lemon-300 text-ink shadow-glow">
          <WashingMachine className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="mt-3 font-heading text-lg font-extrabold text-ink">Wash cycle</p>
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime-700">Open 24/7</p>
      </div>

      {processSteps.map((step, i) => {
        const Icon = iconMap[step.icon] ?? Sparkles;
        const angle = (-90 + i * 72) * (Math.PI / 180);
        const x = 50 + 42 * Math.cos(angle);
        const y = 50 + 42 * Math.sin(angle);
        return (
          <div
            key={step.num}
            className="absolute flex flex-col items-center"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
          >
            <span className="glass flex h-12 w-12 items-center justify-center rounded-full shadow-card ring-1 ring-white/90 sm:h-14 sm:w-14">
              <Icon className="h-5 w-5 text-tang-600 sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
            <span className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-ink sm:text-[11px]">
              {step.short}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function HowItWorks() {

  return (
    <Section id="how-it-works" ariaLabelledBy="how-title" className="bg-warm-100">
      <Container>
        <SectionHeader
          id="how-title"
          eyebrow="How it works"
          title="Five steps to"
          accent="fresh"
          description="Booking with Raymie's takes about two minutes — no queues, no guesswork, no weekend spent over a wash basin."
        />

        <div className="relative mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Dial />
          </Reveal>

          <ol className="space-y-5">
            {processSteps.map(({ num, title, body, icon }, i) => {
              const Icon = iconMap[icon] ?? Sparkles;
              return (
                <Reveal key={num} delay={i * 90}>
                  <li className="glass flex items-start gap-4 rounded-[1.5rem] p-5 ring-1 ring-white/90">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-tang-400 to-lemon-300 text-ink shadow-glow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-lime-700">
                        Step {num}
                      </p>
                      <h3 className="mt-0.5 font-heading text-lg font-extrabold text-ink">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
