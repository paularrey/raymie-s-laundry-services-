import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { BookingForm } from "@/components/forms/booking-form";
import { BookingSkeleton } from "./loading";

export const metadata: Metadata = {
  title: "Book a Pickup",
  description:
    "Book a laundry pickup with Raymie's in under two minutes — choose your service, pickup date and address, and confirm instantly on WhatsApp. No payment online.",
  alternates: { canonical: "/book" },
};

type Props = {
  searchParams: Promise<{ service?: string; plan?: string; package?: string }>;
};

async function BookingPanel({ searchParams }: Props) {
  const params = await searchParams;
  return (
    <BookingForm
      preselectedService={params.service ?? null}
      preselectedPlan={params.plan ?? params.package ?? null}
    />
  );
}

export default function BookPage({ searchParams }: Props) {
  return (
    <>
      <PageHeader
        eyebrow="Book a pickup"
        title="Schedule your pickup in under two minutes"
        description="Pick your service, choose a date and address — we'll open WhatsApp with everything pre-filled and confirm your slot in minutes. No payment online."
        crumbs={[{ label: "Book a Pickup" }]}
      />

      <section className="bg-warm-50 py-14 sm:py-16" aria-label="Booking form">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <Suspense fallback={<BookingSkeleton />}>
            <BookingPanel searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
