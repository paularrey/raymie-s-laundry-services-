import type { Metadata } from "next";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/data/faqs";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Answers to frequently asked questions about pickup, washing, turnaround, quotes and payment at ${site.name}.`,
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Frequently asked"
        accent="questions"
        description="Everything customers usually ask before, during and after a pickup."
        crumbs={[{ label: "FAQs" }]}
      />

      <Section className="bg-white" ariaLabelledBy="faqs-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Left: sticky heading + contact card */}
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Badge tone="primary">Quick answers</Badge>
              <h2
                id="faqs-title"
                className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl"
              >
                Questions, <span className="accent-word squiggle">answered</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Can&apos;t find what you&apos;re looking for? Our team replies
                on WhatsApp {site.hoursLabel.toLowerCase()} — usually within
                minutes.
              </p>

              <div className="mt-8 rounded-[1.75rem] glass-strong rim-lime p-7 text-ink shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-ink">
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-heading text-lg font-extrabold">
                  Still have a question?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-body">
                  Message us directly — we&apos;re happy to help you choose
                  the right service.
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
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
