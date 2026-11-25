"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { stats } from "@/data/stats";

function useCounter(target: number, active: boolean) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || reduce) return;
    let frame = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, reduce]);

  if (reduce) return target;
  if (!active) return 0;
  return value;
}

function Counter({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const n = useCounter(value, active);
  return (
    <div className="px-4 py-6 text-center md:px-8">
      <p className="font-heading text-4xl font-extrabold tracking-tight text-ink md:text-5xl lg:text-6xl">
        {n.toLocaleString("en-NG")}
        <span className="text-tang-500">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted md:text-sm">
        {label}
      </p>
    </div>
  );
}

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      className="relative bg-white py-16 md:py-20"
      ref={ref}
    >

      

      <Container className="relative">
        <div className="grid grid-cols-2 divide-x divide-y divide-warm-200 md:grid-cols-4 md:divide-y-0">
          {stats.map((s) => (
            <Counter key={s.label} {...s} active={inView} />
          ))}
        </div>
      </Container>
    </div>
  );
}
