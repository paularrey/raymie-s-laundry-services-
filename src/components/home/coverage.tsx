import { MapPin, Truck, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { coverageAreas } from "@/data/coverage";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

/** Coverage / pickup-area list with WhatsApp CTA. */
export function CoverageSection() {
  return (
    <Section id="coverage" ariaLabelledBy="coverage-title" className="bg-warm-100">
      <Container>
        <SectionHeader
          id="coverage-title"
          eyebrow="Where we collect"
          title="Free pickup across the"
          accent="city"
          description="We collect and deliver laundry across these areas — not sure you're covered? Ask on WhatsApp and we'll confirm in minutes."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {coverageAreas.map((area) => (
                <li
                  key={area.name}
                  className="group flex items-start gap-4 rounded-[1.5rem] border border-warm-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 transition group-hover:bg-lime-500 group-hover:text-ink">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-extrabold text-ink">
                      {area.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <Truck className="h-3.5 w-3.5 shrink-0 text-lime-700" aria-hidden="true" />
                      {area.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <div className="flex flex-col items-center justify-between gap-5 rounded-[1.5rem] bg-white p-7 text-center shadow-card sm:flex-row sm:p-9 sm:text-left">
              <div>
                <Badge tone="primary">Not listed?</Badge>
                <p className="mt-3 font-heading text-xl font-extrabold text-ink">
                  Ask us about your area — we add routes weekly.
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  {site.hoursLabel} · replies usually within minutes.
                </p>
              </div>
              <a
                href={whatsappHref(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-bold text-ink shadow-[0_16px_40px_-14px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A]"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
