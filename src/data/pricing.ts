export type PricingFeature = {
  id: string;
  name: string;
  planId: string;
};

export type StaticPlan = {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  popular: boolean;
  features: PricingFeature[];
};

type SeedPlan = {
  name: string;
  slug: string;
  popular?: boolean;
  summary: string;
  description: string;
  features: string[];
};

const seed: SeedPlan[] = [
  {
    name: "Fresh Start",
    slug: "fresh-start",
    summary: "Perfect for singles and small weekly loads.",
    description:
      "The simple plan for keeping on top of the week — everyday wash and fold with fast 24–48 hour turnaround.",
    features: [
      "Wash, dry & fold up to 6 kg",
      "Colour & fabric sorting",
      "24–48 hour turnaround",
      "Free pickup & delivery",
      "SMS/WhatsApp updates",
      "Eco-friendly detergents",
    ],
  },
  {
    name: "Family Bundle",
    slug: "family-bundle",
    popular: true,
    summary: "Our best value for households and busy families.",
    description:
      "A bigger load, more service and priority slots — everything a family needs to stay effortlessly fresh.",
    features: [
      "Wash, dry & fold up to 15 kg",
      "Free ironing on shirts",
      "Priority 24h turnaround",
      "Free pickup & delivery",
      "Dedicated WhatsApp line",
      "Stain pre-treatment included",
      "Free bedding refresh (1 set)",
    ],
  },
  {
    name: "Premium Care",
    slug: "premium-care",
    summary: "Dry cleaning, delicates and press-only care.",
    description:
      "For suits, silk, traditional wear and everything you can't risk in a regular wash — handled piece by piece.",
    features: [
      "Up to 10 dry-clean items / month",
      "Hand-finished pressing",
      "Garment bags on return",
      "48h standard turnaround",
      "Free pickup & delivery",
      "Fabric advice & stain consultation",
      "Priority express upgrades",
    ],
  },
];

export const plans: StaticPlan[] = seed.map((p) => ({
  id: `plan_${p.slug}`,
  name: p.name,
  slug: p.slug,
  summary: p.summary,
  description: p.description,
  popular: p.popular ?? false,
  features: p.features.map((name, i) => ({
    id: `plan_${p.slug}_f${i}`,
    name,
    planId: `plan_${p.slug}`,
  })),
}));
