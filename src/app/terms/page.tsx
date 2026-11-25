import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms of use and service conditions for the ${site.name} website and laundry services.`,
};

const sections = [
  {
    heading: "1. Acceptance",
    body: `By using this website you agree to these terms. If you do not agree, please do not use the site. Placeholder text — replace with terms reviewed by your legal adviser.`,
  },
  {
    heading: "2. How bookings work",
    body: "Submitting a booking form opens a pre-filled WhatsApp message; it is not a confirmed pickup until our team replies and confirms a slot. Slots are limited and cannot be double-booked. No payment is taken online — all fees are settled on delivery.",
  },
  {
    heading: "3. Fees & payment",
    body: "Quotes are provided on request and may change until confirmed. The amount agreed with us on WhatsApp before washing begins is the amount you pay — no payment is ever taken on this website. Settlement on delivery is by cash or transfer.",
  },
  {
    heading: "4. Rescheduling & cancellation",
    body: `Contact us as early as possible to reschedule or cancel a pickup — message us on WhatsApp at ${site.phone}. Pickups missed without notice may attract a re-delivery fee.`,
  },
  {
    heading: "5. Turnaround times",
    body: "Turnaround times quoted (for example 24–48 hours) are typical, not guaranteed, and may be affected by volume, fabric type, stain severity or express options selected. We will always tell you if timing changes.",
  },
  {
    heading: "6. Garment care & claims",
    body: "Please follow the care labels on your items and point out fragile or specialist pieces when booking. Claims for loss or damage must be reported within 48 hours of delivery with proof of the item's condition. Our liability for any claim is limited to the amount paid for that service, to the maximum extent permitted by law.",
  },
  {
    heading: "7. Pickup & delivery",
    body: "Collection and delivery are available within our coverage area and subject to rider availability. Our staff carry identification; please verify it before handing over your bag. Items left unattended at a gate or with a third party are at your own risk.",
  },
  {
    heading: "8. Limitation of liability",
    body: "To the maximum extent permitted by law, our liability for any claim related to the website or a service is limited to the amount you paid for that service. Nothing in these terms limits rights you have under applicable consumer law.",
  },
  {
    heading: "9. Intellectual property",
    body: `All content, branding and the ${site.name} logo on this site belong to us or our licensors and may not be reproduced without permission.`,
  },
  {
    heading: "10. Governing law",
    body: "These terms are governed by the laws of the Federal Republic of Nigeria. Disputes will be handled by the courts of competent jurisdiction in the state where we operate.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={"Terms &"}
        accent="Conditions"
        description="The ground rules for using this website and booking our services."
        crumbs={[{ label: "Terms & Conditions" }]}
      />

      <Section className="bg-warm-100">
        <Container>
          <div className="mx-auto w-full max-w-3xl">
            <Reveal>
              <article className="rounded-[2rem] bg-white p-8 shadow-card sm:p-12">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Badge
                    tone="primary"
                    icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}
                  >
                    Last updated: November 2026
                  </Badge>
                  <p className="text-xs leading-relaxed text-muted">
                    Placeholder content — review with your legal adviser before
                    launch.
                  </p>
                </div>

                <div className="mt-10 space-y-10">
                  {sections.map((section) => (
                    <div key={section.heading}>
                      <span
                        className="mb-4 block h-2 w-10 rounded-full bg-lime-700"
                        aria-hidden="true"
                      />
                      <h2 className="font-heading text-xl font-extrabold tracking-tight text-ink">
                        {section.heading}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed text-body">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-lime-100 pt-8">
                  <p className="text-sm font-semibold text-body">
                    Questions about these terms? Our team is happy to help.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappHref(defaultWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-ink transition hover:bg-[#1FBE5A]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp us
                    </a>
                    <ButtonLink
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="shrink-0"
                    >
                      Contact us
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
