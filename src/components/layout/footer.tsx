import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";
import { CurrentYear } from "@/components/ui/current-year";
import { Container } from "@/components/ui/container";
import { WaveLine } from "@/components/ui/wave-line";

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative bg-white text-body">
      {/* Wave running across the top edge */}
      <div className="absolute inset-x-0 top-0 opacity-60">
        <WaveLine variant="divider" className="h-12" color="#FB923C" animate={false} />
      </div>

      <Container className="relative pb-10 pt-24 md:pt-28">
        {/* Large wordmark */}
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-card">
              <Image
                src="/logo-badge.svg"
                alt={`${site.name} logo`}
                width={48}
                height={48}
              />
            </span>
            <div>
              <p className="font-heading text-4xl font-extrabold leading-none tracking-tight text-ink md:text-5xl">
                {site.name}
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.3em] text-lime-700">
                Wash · Fold · Deliver
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {site.description} Open 24/7 — book any time, day or night.
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-10 border-t border-lime-200 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Reach us */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
              Reach Us
            </h2>
            <ul className="space-y-3.5 text-sm text-muted">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tang-500" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tang-500" aria-hidden="true" />
                <a href={`tel:${site.phoneHref}`} className="transition hover:text-ink">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" aria-hidden="true" />
                <a
                  href={whatsappHref(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-ink"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-tang-500" aria-hidden="true" />
                <span>
                  <span className="font-bold text-ink">Open 24/7</span>
                  <br />
                  Every day, all day — book any time
                </span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
              Support
            </h2>
            <ul className="space-y-2.5 text-sm">
              {supportLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <div className="mt-6 rounded-2xl bg-white/70 p-4 ring-1 ring-lime-200 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-wider text-lime-700">
                Book in 2 minutes
              </p>
              <Link
                href="/book"
                className="mt-2 inline-flex text-sm font-bold text-ink underline decoration-tang-400 decoration-2 underline-offset-4 transition hover:text-lime-700"
              >
                Schedule your pickup →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-lime-200 pt-6 text-xs text-muted md:flex-row">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <Link href="/privacy" className="transition hover:text-ink">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-ink">Terms &amp; Conditions</Link>
            <Link href="/faqs" className="transition hover:text-ink">FAQs</Link>
          </p>
        </div>

        {/* Footer credit */}
        <p className="mt-4 text-center text-[11px] text-muted">
          {site.credit.split("ECHELON TECHNOLOGIES")[0]}
          <span className="font-bold text-body">ECHELON TECHNOLOGIES</span>
          {site.credit.split("ECHELON TECHNOLOGIES")[1] ?? ""}
        </p>
      </Container>
    </footer>
  );
}
