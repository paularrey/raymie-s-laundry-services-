import type { Metadata } from "next";
import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { plans } from "@/data/pricing";
import { site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages and Quotes",
  description:
    "Laundry packages — Fresh Start, Family Bundle and Premium Care — with free pickup, delivery and a fast WhatsApp quote.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packages"
        title="Pick a package,"
        accent="get a quote"
        description="Choose a plan, then get a confirmed quote on WhatsApp in minutes — every package includes free collection and return."
        crumbs={[{ label: "Packages" }]}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => {
              const popular = plan.popular;
              return (
                <Reveal key={plan.slug} delay={i * 70} className={popular ? "md:-mt-6" : undefined}>
                  <article
                    className={cn(
                      "group relative flex h-full flex-col rounded-[1.5rem] p-7 transition duration-300",
                      popular
                        ? "glow-border bg-white shadow-glow ring-1 ring-lime-500/30 md:p-8"
                        : "bg-white shadow-card ring-1 ring-warm-200 hover:-translate-y-1.5 hover:shadow-card-hover"
                    )}
                  >
                    {popular ? (
                      <span className="absolute -top-3.5 right-6 inline-flex -rotate-3 items-center gap-1.5 rounded-full bg-tang-500 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-soft">
                        Most popular
                      </span>
                    ) : null}

                    <span className="inline-flex w-fit rounded-full bg-warm-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-body">
                      Laundry plan
                    </span>

                    <h2 className="mt-4 font-heading text-xl font-extrabold text-ink">
                      {plan.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{plan.summary}</p>

                    <div className="mt-6 rounded-2xl bg-warm-100 px-5 py-4">
                      <p className="font-heading text-lg font-extrabold tracking-tight text-ink">
                        Free quote
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-muted">
                        Tap below — we reply fast with your quote on WhatsApp.
                      </p>
                    </div>

                    <ul className="mt-6 flex-1 space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f.id} className="flex items-start gap-2.5 text-sm text-body">
                          <span
                            className={cn(
                              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                              popular ? "bg-lime-100 text-lime-700" : "bg-warm-100 text-body"
                            )}
                          >
                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                          </span>
                          {f.name}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/book?plan=${plan.slug}`}
                      className={cn(
                        "mt-7 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full text-sm font-bold transition-all duration-200",
                        popular
                          ? "bg-gradient-to-r from-tang-400 to-lemon-300 text-ink shadow-glow-accent hover:-translate-y-0.5"
                          : "border-2 border-ink text-ink hover:bg-ink hover:text-white"
                      )}
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Included strip */}
      <Section className="bg-warm-100">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Always included"
            title="Every plan comes with"
            accent="the basics"
            description="Whichever bundle you choose, these are never extra."
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Free pickup & delivery",
              "Colour & fabric sorting",
              "WhatsApp status updates",
              "Eco-friendly detergents",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <li className="flex items-center gap-3 rounded-2xl border border-warm-200 bg-white p-5 shadow-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-700">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold text-ink">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Custom / business + FAQ note */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] glass-strong rim-tang p-8 text-ink shadow-card sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tang-500/25 blur-[90px]"
              />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <Badge tone="primary">Business & custom</Badge>
                  <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Hotels, offices, restaurants — let&apos;s quote your route
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
                    Recurring contracts get scheduled collections, dedicated
                    contact and volume quotes. Send us your weekly volumes on
                    WhatsApp and we&apos;ll build a plan around them.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={whatsappHref(
                      `Hello ${site.name}, I'd like a quote for recurring business laundry.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 text-sm font-bold text-ink shadow-[0_16px_40px_-14px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A]"
                  >
                    <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                    Get a business quote
                  </a>
                  <ButtonLink href="/services" variant="outline" size="lg" className="border-ink text-ink hover:bg-ink hover:text-white">
                    See corporate laundry
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold text-muted">
              <ShieldCheck className="h-4 w-4 text-lime-700" aria-hidden="true" />
              No payment online — settle on delivery. Your quote is confirmed
              on WhatsApp before we start.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
