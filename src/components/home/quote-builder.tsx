"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Minus, Plus, ClipboardList } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import {
  estimatorItems,
  estimatorServiceOptions,
  type EstimatorServiceId,
} from "@/data/estimator";
import { site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Quote builder: pick a service, tap in items, send the request to WhatsApp. */
export function QuoteBuilder() {
  const [service, setService] = useState<EstimatorServiceId>("wash-fold");
  const [qty, setQty] = useState<Record<string, number>>({});

  const lines = useMemo(
    () =>
      estimatorItems
        .map((item) => ({ ...item, count: qty[item.id] ?? 0 }))
        .filter((l) => l.count > 0),
    [qty]
  );

  const serviceLabel =
    estimatorServiceOptions.find((o) => o.id === service)?.label ?? "";

  const bump = (id: string, delta: number) =>
    setQty((q) => {
      const next = Math.max(0, (q[id] ?? 0) + delta);
      return { ...q, [id]: next };
    });

  const sendToWhatsApp = () => {
    const body = [
      `Hello ${site.name}, I'd like a quote.`,
      "",
      `Service: ${serviceLabel}`,
      "Items:",
      ...lines.map((l) => `- ${l.label} x ${l.count}`),
      "",
      "Please send me a quote and a pickup time.",
    ].join("\n");
    window.open(whatsappHref(body), "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="quote" ariaLabelledBy="quote-title" className="bg-warm-100">
      <Container>
        <SectionHeader
          id="quote-title"
          eyebrow="Quote builder"
          title="Build your"
          accent="quote"
          description="Pick your service, tap in the items you need cleaned, then send the list straight to WhatsApp — we reply fast with a confirmed quote."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="glow-border overflow-hidden rounded-[2rem] bg-white shadow-card">
            <div className="grid gap-0 md:grid-cols-[1.3fr_1fr]">
              {/* Builder */}
              <div className="p-7 sm:p-9">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  <ClipboardList className="h-4 w-4 text-lime-700" aria-hidden="true" />
                  1. Choose your service
                </p>
                <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Service type">
                  {estimatorServiceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={service === opt.id}
                      onClick={() => setService(opt.id)}
                      className={cn(
                        "min-h-[44px] rounded-full px-5 text-sm font-bold transition",
                        service === opt.id
                          ? "bg-gradient-to-r from-tang-400 to-lemon-300 text-ink shadow-glow-accent"
                          : "bg-warm-100 text-body hover:bg-warm-200"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  2. Add your items
                </p>
                <ul className="mt-3 divide-y divide-warm-200 rounded-2xl border border-warm-200">
                  {estimatorItems.map((item) => {
                    const count = qty[item.id] ?? 0;
                    return (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-3 px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-ink">
                            {item.label}
                          </p>
                          <p className="text-xs text-muted">per {item.unit}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => bump(item.id, -1)}
                            disabled={count === 0}
                            aria-label={`Remove one ${item.label}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-300 text-body transition hover:border-lime-500 hover:text-lime-700 disabled:opacity-40"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <span
                            className="w-8 text-center text-sm font-extrabold text-ink"
                            aria-live="polite"
                          >
                            {count}
                          </span>
                          <button
                            type="button"
                            onClick={() => bump(item.id, 1)}
                            aria-label={`Add one ${item.label}`}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-500 text-ink transition hover:bg-lime-700"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Summary */}
              <div className="flex flex-col justify-between bg-warm-100 p-7 text-ink sm:p-9">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-700">
                    Your list
                  </p>
                  <p className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight">
                    {serviceLabel}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-muted">
                    {lines.reduce((sum, l) => sum + l.count, 0)} item
                    {lines.reduce((sum, l) => sum + l.count, 0) === 1 ? "" : "s"} selected
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-lime-200 pt-6">
                    {lines.length === 0 ? (
                      <li className="text-sm text-muted">
                        No items yet — tap <strong className="text-ink">+</strong> to start building
                        your list.
                      </li>
                    ) : (
                      lines.map((l) => (
                        <li key={l.id} className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-body">
                            {l.label} <span className="text-tang-600">x {l.count}</span>
                          </span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={sendToWhatsApp}
                    disabled={lines.length === 0}
                    className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-ink shadow-[0_16px_40px_-14px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Send list for a quote
                  </button>
                  <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
                    Your quote is confirmed on WhatsApp before we start — no payment online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
