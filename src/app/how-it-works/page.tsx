import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/data/process";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Raymie's laundry works — book on WhatsApp, free pickup, 24–48 hour cleaning, delivery to your door. Four simple steps.",
};

const extraPoints = [
  {
    title: "Photo confirmation",
    body: "You get a WhatsApp message with a photo the moment your bag is collected — and again when it's on the way back.",
  },
  {
    title: "Stain pre-treatment",
    body: "Tell us about stubborn marks when you book; we pre-treat them before the main wash at no extra cost.",
  },
  {
    title: "Pay on delivery",
    body: "No card, no transfer upfront. Settle in cash or transfer when fresh clothes reach your door.",
  },
];

const stepIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  message: MessageCircle,
  truck: Truck,
  sparkles: Sparkles,
  package: Package,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="Four steps to"
        accent="fresh"
        description="No queues, no app to install — the whole process runs on WhatsApp, from your first message to delivery at your door."
        crumbs={[{ label: "How It Works" }]}
      />

      {/* 4 steps */}
      <Section className="bg-white">
        <Container>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map(({ num, title, body, icon }, i) => {
              const Icon = stepIcons[icon] ?? Sparkles;
              return (
                <Reveal key={num} delay={i * 100}>
                  <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                    <span
                      className="select-none font-heading text-7xl font-extrabold leading-none tracking-tight text-transparent lg:text-8xl"
                      style={{ WebkitTextStroke: "2px rgba(101,163,13,0.45)" }}
                      aria-hidden="true"
                    >
                      {num}
                    </span>
                    <span className="-mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-tang-400 to-lemon-300 text-ink shadow-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-6 font-heading text-xl font-extrabold text-ink">
                      {title}
                    </h2>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{body}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* Extra promises */}
      <Section className="bg-warm-100">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="The fine print (it's good)"
            title="What happens"
            accent="in between"
            description="The details that make the difference between a good laundry and a great one."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {extraPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-[1.5rem] border border-warm-200 bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-extrabold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] glass-strong rim-lime p-8 text-center text-ink shadow-card sm:p-14">
              <Badge tone="leaf">{site.hoursLabel}</Badge>
              <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                Ready when you are — book a pickup in{" "}
                <span className="accent-word">2 minutes</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-body sm:text-base">
                Send us a message with what needs cleaning and your address.
                We&apos;ll confirm a pickup time and handle the rest.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={whatsappHref(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#25D366] px-9 text-base font-bold text-ink shadow-[0_16px_40px_-14px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Book on WhatsApp
                </a>
                <Link
                  href="/book"
                  className="group inline-flex min-h-[56px] items-center gap-2 rounded-full bg-white px-9 text-base font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <CalendarCheck className="h-5 w-5 text-lime-700" aria-hidden="true" />
                  Use the booking form
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
