"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Clock, Heart, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { RotatingBadge } from "@/components/ui/glass-card";
import { heroSlides } from "@/data/hero";
import { whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

const chips: { icon: LucideIcon; label: string; dot: string; pos: string }[] = [
  { icon: Clock, label: "Open 24/7", dot: "bg-lemon-300", pos: "-left-3 top-[16%] sm:-left-8 lg:-left-14" },
  { icon: CalendarCheck, label: "Free pickup", dot: "bg-tang-300", pos: "-right-2 top-[46%] sm:-right-6 lg:-right-12" },
  { icon: Heart, label: "Fabric-safe care", dot: "bg-lime-300", pos: "-left-2 bottom-[14%] sm:-left-6 lg:-left-10" },
];

const bubbles = [
  { left: "18%", size: 16, duration: "6s", delay: "0s" },
  { left: "42%", size: 10, duration: "7.2s", delay: "1.4s" },
  { left: "68%", size: 20, duration: "8s", delay: "2.8s" },
  { left: "84%", size: 12, duration: "6.6s", delay: "4s" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index] ?? heroSlides[0];

  useEffect(() => {
    if (heroSlides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-white pb-14 pt-10 md:pb-20 md:pt-16"
      aria-labelledby="hero-title"
    >
      
      
      

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="relative z-10 max-w-xl">
            <Badge tone="accent" icon={<Sparkles className="h-3.5 w-3.5" />}>
              {slide.eyebrow}
            </Badge>

            <h1
              id="hero-title"
              className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-[3.75rem]"
            >
              {slide.title}{" "}
              <span className="accent-word">{slide.accent}</span>
              {slide.rest}
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
              {slide.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappHref(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="spring inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#25D366] px-8 text-base font-bold text-ink shadow-[0_16px_40px_-14px_rgba(37,211,102,0.7)] hover:bg-[#1FBE5A]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Z" />
                </svg>
                Book on WhatsApp
              </a>
              <Link
                href="/pricing"
                className="spring inline-flex min-h-[56px] items-center gap-2 rounded-full border-2 border-lime-500 bg-white px-8 text-base font-bold text-ink hover:bg-lime-50"
              >
                See packages
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {heroSlides.length > 1 && (
              <div className="mt-7 flex items-center gap-2" role="tablist" aria-label="Hero slides">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-tang-500" : "w-2.5 bg-lemon-300 hover:bg-lemon-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            <div className="relative mx-auto aspect-square w-[88%] max-w-[420px] animate-float-slow sm:w-[78%] lg:w-full lg:max-w-[470px]">
              <div
                className="absolute -inset-6 rounded-[3rem] bg-lime-200/70 blur-2xl"
                aria-hidden="true"
              />

              <div className="glass relative h-full w-full overflow-hidden rounded-[2.25rem] p-3">
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-white">
                  <Image
                    src="/images/washm-door.png"
                    alt="Washing machine door with swirling water at Raymie's Laundry Services"
                    fill
                    priority
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 44vw, 440px"
                    className="object-contain"
                  />
                  <span
                    className="pointer-events-none absolute left-[8%] top-[6%] h-[34%] w-[40%] -rotate-12 rounded-full bg-gradient-to-br from-white/70 to-transparent blur-[2px]"
                    aria-hidden="true"
                  />
                  {bubbles.map((b) => (
                    <span
                      key={b.left}
                      className="porthole-bubble absolute bottom-0 rounded-full bg-white/70 ring-1 ring-white/70"
                      style={{
                        left: b.left,
                        width: b.size,
                        height: b.size,
                        animationDuration: b.duration,
                        animationDelay: b.delay,
                      }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span
                  className="pointer-events-none absolute inset-0 rounded-[2.25rem] ring-1 ring-inset ring-white/90"
                  aria-hidden="true"
                />
              </div>

              <RotatingBadge className="absolute -bottom-6 right-0 scale-90 sm:-right-4 sm:scale-100" />

              {chips.map(({ icon: Icon, label, dot, pos }) => (
                <div key={label} className={`absolute ${pos}`}>
                  <span className="glass spring flex items-center gap-2 rounded-full py-2 pl-2 pr-4 text-xs font-bold text-ink shadow-card">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full ${dot} text-ink`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-lime-200/70 pt-6 text-xs font-bold uppercase tracking-[0.16em] text-muted md:mt-16">
          <span>Open 24/7</span>
          <span className="hidden h-1 w-1 rounded-full bg-tang-400 sm:block" aria-hidden="true" />
          <span>Free pickup &amp; delivery</span>
          <span className="hidden h-1 w-1 rounded-full bg-tang-400 sm:block" aria-hidden="true" />
          <span>Eco-friendly detergents</span>
                  </div>
      </Container>
    </section>
  );
}
