"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageSquare, Phone, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/data/faqs";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Two-column FAQ: heading + contact card on the left, smooth accordion on the right. */
export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <Section id="faq" ariaLabelledBy="faq-title" className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: heading + contact card */}
          <Reveal>
            <Badge tone="primary">Good to know</Badge>
            <h2
              id="faq-title"
              className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Questions, <span className="accent-word squiggle">answered</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Everything customers usually ask before, during and after a pickup.
              Can&apos;t find yours? We reply on WhatsApp around the clock.
            </p>

            <div className="mt-8 rounded-[1.75rem] glass-strong rim-lime p-7 text-ink shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-ink">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-lg font-extrabold">Still have a question?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                Our team is on WhatsApp 24/7 — usually replying within minutes.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href={whatsappHref(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                >
                  Message us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border-2 border-lime-200 px-6 py-3 text-sm font-bold text-ink transition hover:bg-lime-50"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.q} delay={i * 40}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-[1.5rem] border transition",
                      isOpen
                        ? "border-lime-700/30 bg-warm-100 shadow-card"
                        : "border-warm-200 bg-white hover:border-lime-200"
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full min-h-[56px] items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-heading text-sm font-extrabold text-ink sm:text-base">
                          {faq.q}
                        </span>
                        <span
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition",
                            isOpen ? "bg-lime-500 text-ink" : "bg-warm-100 text-body"
                          )}
                        >
                          <ChevronDown
                            className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`faq-panel-${i}`}
                          key="panel"
                          initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                            {faq.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
