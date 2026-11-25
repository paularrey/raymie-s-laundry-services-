"use client";

import { useEffect, useRef } from "react";

/** Soft radial glow that follows the cursor on desktop pointer devices. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 160}px, ${e.clientY - 160}px, 0)`;
        el.style.opacity = "1";
        frame = 0;
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-80 w-80 rounded-full opacity-0 transition-opacity duration-500 lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(163,230,53,0.13) 0%, rgba(163,230,53,0.05) 45%, transparent 70%)",
      }}
    />
  );
}
