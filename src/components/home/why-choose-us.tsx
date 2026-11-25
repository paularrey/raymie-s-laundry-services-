import Image from "next/image";
import { BadgeCheck, Timer, Leaf, MapPin, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Careful with every fabric",
    body: "Each load is sorted by colour, material and care label before a single machine starts.",
    Icon: BadgeCheck,
    tint: "bg-lime-100 text-lime-700",
  },
  {
    title: "24–48h turnaround",
    body: "Same-day options for urgent items, next-day standard for everything else.",
    Icon: Timer,
    tint: "bg-lime-100 text-ink",
  },
  {
    title: "Eco-friendly detergents",
    body: "Gentle, skin-safe products that cut grease and stains without fading colours.",
    Icon: Leaf,
    tint: "bg-lime-200/70 text-ink",
  },
  {
    title: "Free pickup & delivery",
    body: "We collect and return across the city — you never carry a basket again.",
    Icon: MapPin,
    tint: "bg-tang-100 text-tang-700",
  },
];

/** Asymmetric two-column: image + overlapping leaf card on the left, 2×2 features right. */
export function WhyChooseUs() {
  return (
    <Section id="why-us" ariaLabelledBy="why-title" className="bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Image with overlapping leaf card */}
          <Reveal className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] bg-lime-100 shadow-card">
              {/* TODO: replace with a real photo of the Raymie's team / laundry floor */}
              <Image
                src="/images/about-story.jpg"
                alt="Raymie's team folding freshly laundered clothes"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-2 max-w-[19rem] rounded-[1.5rem] glass-strong rim-tang p-6 text-ink shadow-card sm:right-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-tang-400 to-lemon-300 text-ink">
                <Sparkles className="h-5.5 w-5.5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-base font-extrabold leading-snug">
                Trusted by busy families, students and businesses
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" aria-hidden="true" />
                <p className="text-xs font-semibold text-body">Open 24/7, every single day</p>
              </div>
            </div>
          </Reveal>

          {/* Copy + 2×2 features */}
          <Reveal delay={120}>
            <Badge tone="primary">Why choose us</Badge>
            <h2
              id="why-title"
              className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Laundry you can <span className="accent-word squiggle">trust</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Four promises we hold ourselves to on every single bag — from the
              moment you book a pickup to the moment fresh, folded clothes reach
              your door.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {features.map(({ title, body, Icon, tint }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <div className="h-full rounded-[1.75rem] border border-warm-200 bg-warm-100/60 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-card">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-extrabold text-ink">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
