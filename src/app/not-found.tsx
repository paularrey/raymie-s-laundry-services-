import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { WaveLine } from "@/components/ui/wave-line";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-warm-100 pb-20 pt-32 md:pb-24 md:pt-40">
      <Container>
        <div className="mx-auto w-full max-w-2xl text-center">
          <p
            className="animate-fade-up font-heading text-8xl font-extrabold leading-none tracking-tight text-transparent"
            style={{ WebkitTextStroke: "2px rgba(234,88,12,0.4)" }}
          >
            404
          </p>

          <h1
            className="animate-fade-up mt-5 font-heading text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
            style={{ animationDelay: "90ms" }}
          >
            This page went{" "}
            <span className="accent-word squiggle">missing</span>
          </h1>

          <WaveLine className="mx-auto mt-6 h-12 max-w-md" color="#EA580C" />

          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-body">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Let&apos;s get you back to something fresh.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="primary">
              Back Home
            </ButtonLink>
            <ButtonLink href="/book" variant="outline">
              Book a Pickup
            </ButtonLink>
          </div>

          <nav aria-label="Helpful links" className="mt-10">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-muted">
              <li>
                <Link href="/services" className="transition hover:text-lime-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-lime-700">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-lime-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="transition hover:text-lime-700">
                  FAQs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
