"use client";

const COLORS = ["#A3E635", "#FDE047", "#F97316", "#65A30D", "#FACC15"];

const PIECES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: 6 + ((i * 37) % 88),
  delay: (i % 7) * 0.12,
  duration: 1.1 + ((i * 13) % 10) / 10,
  rotate: (i % 2 === 0 ? 1 : -1) * (360 + ((i * 47) % 360)),
  color: COLORS[i % COLORS.length],
  round: i % 3 === 0,
}));

/** Lightweight confetti burst for form-success states (reduced-motion safe). */
export function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PIECES.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute top-0 h-2.5 w-1.5"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            borderRadius: p.round ? "9999px" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--spin" as string]: `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}
