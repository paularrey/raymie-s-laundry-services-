import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site, whatsappHref, defaultWhatsAppMessage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

const sections = [
  {
    heading: "1. Who we are",
    body: `${site.name} ("we", "our") is a laundry service operating from ${site.address}. This policy explains what personal data we collect through this website, and how we use it.`,
  },
  {
    heading: "2. What we collect",
    body: "Our booking and contact forms collect only what we need to schedule a pickup: your name, phone number, pickup address, the service you selected, your preferred pickup date and any notes you add (for example stain details or gate codes). Nothing is stored on a server — your details are used to open a pre-filled WhatsApp message on your own device.",
  },
  {
    heading: "3. Why we use it",
    body: "To schedule and deliver your laundry, contact you about your pickup, reply to enquiries you send us, and keep an accurate record of each order so nothing is lost between collection and return.",
  },
  {
    heading: "4. WhatsApp",
    body: "When you continue to WhatsApp, your message is delivered through Meta's WhatsApp service, which has its own privacy policy. We only receive the message you choose to send.",
  },
  {
    heading: "5. Who we share it with",
    body: "We do not sell, rent or publish your data. Access is limited to staff who need it to collect, clean and return your order. We never display submissions publicly.",
  },
  {
    heading: "6. Retention",
    body: "Order records are kept only as long as needed to resolve disputes and meet basic accounting duties, then securely deleted. You can ask us to delete your details at any time.",
  },
  {
    heading: "7. Your rights",
    body: `You may request access to, correction of, or deletion of your personal data. Message us on WhatsApp at ${site.phone} or call us and we will act on your request promptly.`,
  },
  {
    heading: "8. Security",
    body: "We use minimal-data principles and access controls. No system is perfectly secure, but we review our practices regularly and only collect what we genuinely need.",
  },
  {
    heading: "9. Cookies",
    body: "This site uses no advertising or cross-site tracking cookies. Any data stored in your browser (such as a dismissed banner) stays on your device.",
  },
  {
    heading: "10. Changes & contact",
    body: `We may update this policy from time to time; the latest version always appears on this page. Questions: message ${site.name} on WhatsApp at ${site.phone} or call ${site.phone}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        accent="Policy"
        description="Your details are sensitive — here is exactly how we handle them."
        crumbs={[{ label: "Privacy Policy" }]}
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
                    Placeholder content — have your legal adviser review before
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
                    Questions about this policy? Our team is happy to help.
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
