import { ArrowRight, CalendarCheck, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WaveLine } from "@/components/ui/wave-line";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 md:pb-24" aria-labelledby="cta-title">
      <div className="bubble bubble-rise left-[16%] top-1/2 h-14 w-14" aria-hidden="true" />
      <div
        className="bubble bubble-rise right-[24%] top-1/3 h-10 w-10"
        style={{ "--delay": "2.2s" } as React.CSSProperties}
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <div className="glass shine relative overflow-hidden rounded-[3rem] px-6 py-16 text-center sm:px-12 md:py-20">
            <WaveLine
              className="pointer-events-none absolute inset-x-0 top-6 h-14 opacity-40"
              color="#A3E635"
            />

            <span className="absolute left-6 top-8 flex h-14 w-14 animate-float items-center justify-center rounded-2xl bg-white/80 text-lime-700 ring-1 ring-white/95 sm:left-12">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="2" width="18" height="20" rx="2" />
                <circle cx="12" cy="14" r="4" />
                <path d="M6 6h.01" />
                <path d="M10 6h.01" />
              </svg>
            </span>

            <span className="absolute right-6 top-10 hidden -rotate-6 rounded-full bg-tang-400 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-ink shadow-soft sm:inline-flex sm:right-12">
              No payment online
            </span>

            <div className="relative mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tang-700">
                Ready when you are
              </p>
              <h2
                id="cta-title"
                className="mt-5 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
              >
                Your laundry,{" "}
                <span className="accent-word">sorted</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body">
                Schedule a pickup in two minutes — free collection, 24–48 hour
                turnaround, fresh clothes delivered back to your door.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-[#25D366] px-9 text-base font-bold text-ink shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition hover:-translate-y-0.5 hover:bg-[#1FBE5A]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp us now
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex min-h-[56px] items-center gap-2 rounded-full border-2 border-lime-200 bg-white px-9 text-base font-bold text-ink transition hover:border-lime-500 hover:-translate-y-0.5"
                >
                  <Phone className="h-5 w-5 text-lime-700" aria-hidden="true" />
                  Call {site.phone}
                </a>
                <Link
                  href="/book"
                  className="group inline-flex min-h-[56px] items-center gap-2 px-2 text-base font-bold text-lime-700 transition hover:text-tang-600"
                >
                  Book a pickup online
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
