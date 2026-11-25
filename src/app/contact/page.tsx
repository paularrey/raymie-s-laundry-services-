import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { cn } from "@/lib/utils";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — phone, WhatsApp, address, opening hours and a direct contact form.`,
};

export default function ContactPage() {
  const cards = [
    {
      label: "WhatsApp us",
      value: site.phone,
      hint: "Fastest — replies around the clock",
      Icon: MessageCircle,
      href: whatsappHref(defaultWhatsAppMessage),
      tint: "bg-[#25D366]/15 text-[#1FBE5A]",
    },
    {
      label: "Call us",
      value: site.phone,
      hint: site.hoursLabel,
      Icon: Phone,
      href: `tel:${site.phoneHref}`,
      tint: "bg-lime-100 text-body",
    },
    {
      label: "Visit the drop-off",
      value: site.address,
      hint: null as string | null,
      Icon: MapPin,
      href: null as string | null,
      tint: "bg-lime-100 text-lime-700",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        accent="fresh"
        description="Questions about a service, a quote or your pickup? Reach us any of these ways — or send a message and we'll reply on WhatsApp."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Quick contact cards */}
      <Section className="bg-white" ariaLabelledBy="contact-details-title">
        <Container>
          <Reveal className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2
              id="contact-details-title"
              className="font-heading text-2xl font-extrabold tracking-tight text-ink"
            >
              Three quick ways to reach us
            </h2>
            <Badge tone="primary" icon={<Clock className="h-3.5 w-3.5" aria-hidden="true" />}>
              Open 24/7
            </Badge>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {cards.map(({ label, value, hint, Icon, href, tint }, i) => {
              const inner = (
                <>
                  <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", tint)}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-extrabold leading-snug text-ink">
                    {value}
                  </p>
                  {hint ? <p className="mt-1 text-sm text-muted">{hint}</p> : null}
                </>
              );
              const className =
                "block h-full rounded-[1.75rem] border border-warm-200 bg-warm-100 p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover";
              return (
                <Reveal key={label} delay={i * 70} className="h-full">
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>
                      {inner}
                    </a>
                  ) : (
                    <div className={className}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Form + map + hours */}
      <Section className="bg-warm-100" ariaLabelledBy="contact-form-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-2">
              <Reveal delay={80} className="space-y-6">
                {/* Map placeholder */}
                <div className="overflow-hidden rounded-[2rem] border border-warm-200 bg-white shadow-card">
                  <div className="relative aspect-[16/9] bg-warm-100">
                    {/* TODO: replace with an embedded Google/Apple map of your drop-off point */}
                    <Image
                      src="/images/map-placeholder.jpg"
                      alt="Map placeholder showing the Raymie's drop-off location"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <span
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-tang-400 to-lemon-300 text-ink shadow-glow"
                      aria-hidden="true"
                    >
                      <MapPin className="h-6 w-6" />
                    </span>
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-ink shadow">
                      {site.address}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h2 className="text-sm font-extrabold text-ink">{site.name}</h2>
                      <p className="mt-1 text-sm text-muted">{site.address}</p>
                    </div>
                    {/* TODO: replace the query with your real map coordinates */}
                    <a
                      href="https://maps.google.com/?q=laundry+service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-body"
                    >
                      <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                      Directions
                    </a>
                  </div>
                </div>

                {/* Opening hours */}
                <div className="rounded-[2rem] border border-warm-200 bg-white p-7 shadow-card">
                  <h2 className="flex items-center gap-3 font-heading text-lg font-extrabold text-ink">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-100 text-lime-700">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    Opening Hours
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {site.openingHours.map((row) => (
                      <li
                        key={row.day}
                        className="flex items-center justify-between gap-4 border-b border-warm-200 pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <span className="font-semibold text-body">{row.day}</span>
                        <span className="font-bold text-lime-700">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    Booking is available 24/7 — pickup requests outside staffed
                    hours are scheduled for the next available slot.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
