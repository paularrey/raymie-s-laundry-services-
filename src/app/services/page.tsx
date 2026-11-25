import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title: "Laundry Services",
  description:
    "Full list of Raymie's laundry services — wash & fold, dry cleaning, ironing, express, bedding, shoes & bags and corporate laundry with typical turnaround times.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Seven services,"
        accent="one roof"
        description="From everyday wash & fold to delicate dry cleaning and scheduled corporate laundry — search any item and see its typical turnaround before you book."
        crumbs={[{ label: "Services" }]}
      />

      <ServicesClient />
    </>
  );
}
