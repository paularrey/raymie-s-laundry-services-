import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Users, Leaf, Award, Truck, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Raymie's Laundry Services — our story, mission, values and the team that washes, presses and delivers for families and businesses every day.",
};

const values = [
  {
    title: "Care",
    body: "Every item is sorted by colour and fabric and handled according to its care label — because your clothes aren't ours to ruin.",
    Icon: BadgeCheck,
  },
  {
    title: "Honesty",
    body: "Clear quotes confirmed before we start, honest turnaround times and no surprise fees at the door.",
    Icon: Award,
  },
  {
    title: "Respect",
    body: "Your bags are tracked from pickup to return, handled discreetly and never mixed with another customer's load.",
    Icon: Users,
  },
  {
    title: "Responsibility",
    body: "Eco-friendly detergents, efficient machines and careful sorting that keeps water use and waste down.",
    Icon: Leaf,
  },
];

const team = [
  { name: "Raymie Okoro", role: "Founder & Owner", initials: "RO" },
  { name: "Grace Ade", role: "Operations Lead", initials: "GA" },
  { name: "Tunde Bello", role: "Head of Wash & Fold", initials: "TB" },
  { name: "Amara Nwosu", role: "Customer Care (WhatsApp)", initials: "AN" },
];

const promises = [
  {
    title: "FREE PICKUP & DELIVERY",
    body: "Collected and returned across the city at no extra cost — placeholder, adjust for your coverage area.",
  },
  {
    title: "24–48H TURNAROUND",
    body: "Standard service returns fresh clothes within two days; same-day express available on request.",
  },
  {
    title: "OPEN 24/7",
    body: "Book any hour of any day — messages are answered around the clock, even when the machines are off.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A laundry built on care"
        accent="and consistency"
        description="We're a team of laundry specialists who believe clean clothes should feel effortless — from the first WhatsApp message to the moment fresh laundry reaches your door."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <Section className="bg-white" ariaLabelledBy="story-title">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-lime-100"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-warm-100 shadow-card">
                {/* TODO: replace with a real photo of the Raymie's laundry floor */}
                <Image
                  src="/images/about-story.jpg"
                  alt="Inside the Raymie's laundry facility"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 right-2 aspect-square w-36 overflow-hidden rounded-[1.5rem] border-4 border-white bg-warm-100 shadow-card sm:w-48">
                {/* TODO: replace with a real Raymie's team photo */}
                <Image
                  src="/images/who-we-are.jpg"
                  alt="The Raymie's laundry team at work"
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
              <Badge tone="accent" className="absolute -left-3 bottom-14 rotate-[-4deg] shadow-card">
                Since day one
              </Badge>
              <GlassCard className="absolute right-4 top-4 max-w-[11rem]">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                  Turnaround
                </p>
                <p className="mt-1 font-heading text-sm font-extrabold leading-snug text-ink">
                  24–48h for most laundry
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={100}>
              <SectionHeader
                align="left"
                id="story-title"
                eyebrow="Our Story"
                title="Started by people who hated doing laundry"
              />
              <p className="mt-5 text-base leading-relaxed text-muted">
                Raymie&apos;s began with a simple frustration: spending entire
                weekends over a wash basin, then watching colours fade after
                one careless wash. We built the laundry we wanted for our own
                families — careful sorting, proven detergents and staff who
                treat every garment like it matters.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Today we serve individuals, families, students and businesses,
                with the same founding promise:{" "}
                <strong className="text-ink">fresh clothes, zero hassle.</strong>
              </p>
              <ButtonLink href="/book" className="mt-8">
                Book a Pickup
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission / Vision */}
      <Section className="bg-warm-100" ariaLabelledBy="mv-title">
        <Container>
          <SectionHeader
            id="mv-title"
            eyebrow="Mission & Vision"
            title="What we're here to do"
            accent="do"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-card sm:p-10">
                <Badge tone="primary">Our Mission</Badge>
                <p className="mt-6 text-lg leading-relaxed text-body">
                  To give people back their weekends — delivering reliable,
                  careful laundry with honest quotes, real turnaround
                  times and communication that never leaves you guessing.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90} className="h-full">
              <div className="flex h-full flex-col rounded-[2rem] glass-strong rim-tang p-8 text-ink shadow-card sm:p-10">
                <Badge tone="accent">Our Vision</Badge>
                <p className="mt-6 text-lg leading-relaxed text-body">
                  To be the most trusted laundry brand in the country — where
                  booking a wash takes two minutes, and fresh, folded clothes
                  arrive back on time, every time.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-lime-50" ariaLabelledBy="values-title">
        <Container>
          <SectionHeader
            id="values-title"
            eyebrow="Our Values"
            title="Care · Honesty · Respect · Responsibility"
            description="Four principles that decide how we hire, how we wash and how we deliver."
          />
          <Reveal delay={60}>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {values.map(({ title, Icon }, i) => (
                <li key={title}>
                  <span
                    className={cn(
                      "inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-soft",
                      i % 2 === 0 ? "bg-warm-100" : "bg-white",
                      "text-ink"
                    )}
                  >
                    <Icon className="h-4 w-4 text-lime-700" aria-hidden="true" />
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-6 sm:grid-cols-2">
              {values.map(({ title, body }) => (
                <div key={title} className="border-t-2 border-lime-700/15 pt-4">
                  <dt className="text-sm font-extrabold text-ink">{title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      {/* Team */}
      <Section className="bg-white" ariaLabelledBy="team-title">
        <Container>
          <SectionHeader
            id="team-title"
            eyebrow="Our Team"
            title="The people behind your fresh clothes"
            accent="fresh"
            description="Placeholder profiles — replace names, roles and photos with your real team."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 70} className="h-full">
                <article className="h-full overflow-hidden rounded-[1.75rem] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[4/5] bg-warm-100">
                    {/* TODO: replace with real staff photos (/images/team-1.jpg …) */}
                    <Image
                      src="/images/team-placeholder.jpg"
                      alt={`${member.name}, ${member.role} (placeholder photo)`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-tang-400 to-lemon-300 text-sm font-bold text-ink shadow-glow">
                      {member.initials}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-extrabold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-lime-700">
                      {member.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Promises */}
      <Section className="bg-warm-100" ariaLabelledBy="promise-title">
        <Container>
          <SectionHeader
            id="promise-title"
            eyebrow="Our Promises"
            title="What we guarantee"
            accent="guarantee"
            description="Placeholder copy — swap in your real service commitments."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {promises.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col items-center rounded-2xl border-2 border-dashed border-lime-200 bg-white p-8 text-center">
                  <div className="flex h-24 w-full max-w-[14rem] items-center justify-center rounded-xl bg-warm-100 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    Promise badge
                  </div>
                  <span className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-lime-500 text-ink">
                    <Truck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-sm font-extrabold uppercase tracking-wider text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA strip */}
      <Section className="relative bg-white">
        <Container className="text-center">
          <Reveal>
            <Badge tone="primary" className="mx-auto">
              Book online 24/7
            </Badge>
            <h2 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              Ready when you are
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-body">
              Schedule a pickup in under two minutes — or send us a message on
              WhatsApp and we&apos;ll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/book" size="lg">
                Book a Pickup
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="white" size="lg">
                Contact us
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
