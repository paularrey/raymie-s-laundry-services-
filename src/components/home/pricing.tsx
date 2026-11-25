import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { plans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingPlans() {
  if (plans.length === 0) return null;

  return (
    <Section id="pricing" ariaLabelledBy="pricing-title" className="overflow-hidden bg-white">
      {/* soft mesh accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-lime-200/50 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-tang-200/40 blur-[100px]"
      />

      <Container className="relative">
        <SectionHeader
          id="pricing-title"
          eyebrow="Packages"
          title="Plans that do"
          accent="more"
          description="One pickup, one fresh wardrobe — the bundles people book most. Get a fast quote on WhatsApp."
          action={
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-lime-200 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-lime-500 hover:text-lime-700"
            >
              See all packages
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const popular = plan.popular;
            return (
              <Reveal key={plan.slug} delay={i * 70} className={popular ? "md:-mt-6" : undefined}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col rounded-[1.5rem] p-7 transition duration-300",
                    popular
                      ? "glow-border bg-white shadow-glow ring-1 ring-lime-500/30 md:p-8"
                      : "bg-white shadow-card hover:-translate-y-1.5 hover:shadow-card-hover ring-1 ring-warm-200"
                  )}
                >
                  {popular ? (
                    <span className="absolute -top-3.5 right-6 inline-flex -rotate-3 items-center gap-1.5 rounded-full bg-tang-500 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-soft">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Most popular
                    </span>
                  ) : null}

                  <span className="inline-flex w-fit rounded-full bg-warm-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-body">
                    Laundry plan
                  </span>

                  <h3 className="mt-4 font-heading text-xl font-extrabold text-ink">
                    {plan.name}
                  </h3>
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
                    {plan.features.slice(0, 6).map((f) => (
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
  );
}
