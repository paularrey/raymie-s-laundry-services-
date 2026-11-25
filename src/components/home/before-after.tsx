"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { beforeAfterItems } from "@/data/before-after";

function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-[1.5rem] bg-warm-200 select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
    >
      {/* After (full) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-lime-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur">
        After
      </span>

      {/* Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-card">
          <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        onKeyDown={onKeyDown}
        aria-label="Drag to compare before and after"
        className="absolute inset-x-0 bottom-3 z-10 mx-auto w-[calc(100%-2rem)] max-w-xs opacity-0 focus-visible:opacity-100"
      />
    </div>
  );
}

/** Drag-to-compare before/after proof shots. */
export function BeforeAfter() {
  return (
    <Section id="results" ariaLabelledBy="ba-title" className="bg-white">
      <Container>
        <SectionHeader
          id="ba-title"
          eyebrow="Real results"
          title="From tired to"
          accent="flawless"
          description="Drag the slider to see what our stain treatment and fabric care can do — proof you can feel in the fabric."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {beforeAfterItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 90}>
              <figure className="h-full">
                <CompareSlider
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                />
                <figcaption className="mt-5">
                  <h3 className="font-heading text-lg font-extrabold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
