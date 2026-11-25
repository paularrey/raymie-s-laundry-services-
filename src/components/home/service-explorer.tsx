"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const tints = [
  "from-lime-100 to-lime-50 text-lime-700",
  "from-lime-100 to-warm-50 text-ink",
  "from-tang-100 to-tang-50 text-tang-700",
  "from-lime-200/60 to-lime-50 text-ink",
  "from-lime-200/60 to-lime-50 text-body",
  "from-tang-200/60 to-tang-50 text-tang-800",
  "from-lime-100 to-tang-50 text-ink",
];

/**
 * Interactive service explorer — click a tab to expand its panel with the
 * full item list, or jump to the dedicated service page.
 */
export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <Section id="services" ariaLabelledBy="services-title" className="bg-white">
      <Container>
        <SectionHeader
          id="services-title"
          eyebrow="Our Services"
          title="Everything your wardrobe"
          accent="needs"
          description="Seven specialist services under one roof — tap any card to see what's included and typical turnaround times."
          action={
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-lime-200 px-6 py-3 text-sm font-bold text-ink transition hover:border-lime-500 hover:text-lime-700"
            >
              View All Services
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          }
        />

        {/* Tabs */}
        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label="Choose a laundry service"
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-controls="service-panel"
                onClick={() => setActive(i)}
                className={cn(
                  "flex min-h-[44px] shrink-0 items-center gap-2 rounded-full px-5 text-sm font-bold transition-all duration-200",
                  i === active
                    ? "bg-gradient-to-r from-tang-400 to-lemon-300 text-ink shadow-glow"
                    : "bg-warm-100 text-body hover:bg-warm-200 hover:text-ink"
                )}
              >
                <ServiceIcon name={s.icon} className="h-4 w-4" />
                {s.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Expanded panel */}
        <Reveal key={current.slug} className="mt-8">
          <div
            id="service-panel"
            role="tabpanel"
            className="grid gap-8 rounded-[2rem] glass-strong rim-lime p-8 text-ink md:p-10 lg:grid-cols-[1.1fr_1fr]"
          >
            <div>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 ring-1 ring-lime-200">
                <ServiceIcon name={current.icon} className="h-7 w-7" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-tang-700">
                {current.category}
              </p>
              <h3 className="mt-2 font-heading text-3xl font-extrabold tracking-tight md:text-4xl">
                {current.name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-body md:text-base">
                {current.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/services/${current.slug}`}
                  className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  View details
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/book"
                  className="inline-flex min-h-[48px] items-center rounded-full border-2 border-lime-200 px-7 text-sm font-bold text-ink transition hover:border-lime-500 hover:bg-lime-50"
                >
                  Book this service
                </Link>
              </div>
            </div>

            <ul className="grid content-start gap-2.5 rounded-2xl bg-white/70 p-6 ring-1 ring-lime-200">
              {current.items.map((it) => (
                <li key={it.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2.5 font-semibold text-ink">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-300 text-lime-700">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {it.name}
                  </span>
                  {it.turnaround ? (
                    <span className="shrink-0 rounded-full bg-tang-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-tang-700">
                      {it.turnaround}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Small service cards grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50}>
              <Link
                href={`/services/${service.slug}`}
                className={cn(
                  "shine group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br p-6 pt-9 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card",
                  tints[i % tints.length]
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-3.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-white shadow-[inset_0_1px_3px_rgba(23,24,26,0.25)]"
                />
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 shadow-soft">
                    <ServiceIcon name={service.icon} className="h-5.5 w-5.5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </div>
                <div className="mt-6">
                  <h3 className="font-heading text-lg font-extrabold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider opacity-70">
                    {service.items.length} services
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
