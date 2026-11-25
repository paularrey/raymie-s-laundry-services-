export type ServiceItem = {
  id: string;
  name: string;
  turnaround: string | null;
  serviceId: string;
};

export type StaticService = {
  id: string;
  name: string;
  slug: string;
  category: string;
  icon: string;
  featured: boolean;
  description: string;
  items: ServiceItem[];
};

type SeedService = {
  name: string;
  slug: string;
  category: string;
  icon: string;
  featured?: boolean;
  description: string;
  items: { name: string; turnaround?: string }[];
};

const seed: SeedService[] = [
  {
    name: "Wash & Fold",
    slug: "wash-and-fold",
    category: "Everyday",
    icon: "washing-machine",
    featured: true,
    description:
      "Everyday clothes, washed, dried and neatly folded — sorted by colour and fabric so everything comes back fresh, crisp and ready to wear.",
    items: [
      { name: "Shirts & Tops", turnaround: "24–48h" },
      { name: "Trousers & Jeans", turnaround: "24–48h" },
      { name: "Dresses", turnaround: "24–48h" },
      { name: "Underwear & Socks", turnaround: "24h" },
      { name: "Sportswear", turnaround: "24–48h" },
      { name: "School Uniforms", turnaround: "24h" },
    ],
  },
  {
    name: "Dry Cleaning",
    slug: "dry-cleaning",
    category: "Premium",
    icon: "shirt",
    featured: true,
    description:
      "Delicate fabrics handled with solvent-based care — suits, silk, lace and structured pieces come back flawless, on hangers or boxed.",
    items: [
      { name: "Two-piece Suit", turnaround: "48h" },
      { name: "Blazer / Jacket", turnaround: "48h" },
      { name: "Silk or Lace Dress", turnaround: "48–72h" },
      { name: "Traditional Wear (Agbada, etc.)", turnaround: "48–72h" },
      { name: "Coats & Outerwear", turnaround: "72h" },
    ],
  },
  {
    name: "Ironing & Pressing",
    slug: "ironing-and-pressing",
    category: "Everyday",
    icon: "sparkles",
    featured: true,
    description:
      "Sharp creases, smooth collars and a professional finish — press-only service for clean clothes that just need the final touch.",
    items: [
      { name: "Shirts (press only)", turnaround: "24h" },
      { name: "Trousers & Skirts", turnaround: "24h" },
      { name: "Traditional Wear", turnaround: "24–48h" },
      { name: "Table Linen", turnaround: "48h" },
    ],
  },
  {
    name: "Express Service",
    slug: "express-service",
    category: "Express",
    icon: "zap",
    featured: true,
    description:
      "Same-day turnaround for when laundry can't wait — drop off before 10 AM and wear it again tonight. Limited daily slots.",
    items: [
      { name: "Express Wash & Fold", turnaround: "Same day" },
      { name: "Express Ironing", turnaround: "Same day" },
      { name: "Express Dry Clean (selected items)", turnaround: "Same day" },
    ],
  },
  {
    name: "Bedding & Duvets",
    slug: "bedding-and-duvets",
    category: "Home",
    icon: "bed",
    featured: true,
    description:
      "Bedsheets, duvet covers, comforters and blankets deep-cleaned and returned smelling like a five-star hotel.",
    items: [
      { name: "Duvet / Comforter", turnaround: "72h" },
      { name: "Bed Sheets Set", turnaround: "48h" },
      { name: "Blankets & Throws", turnaround: "48–72h" },
      { name: "Pillows", turnaround: "72h" },
      { name: "Curtains", turnaround: "5–7 days" },
    ],
  },
  {
    name: "Shoes & Bags",
    slug: "shoes-and-bags",
    category: "Specialty",
    icon: "footprints",
    featured: true,
    description:
      "Sneakers, leather shoes, handbags and backpacks cleaned, deodorised and conditioned by hand — like-new results.",
    items: [
      { name: "Sneakers (deep clean)", turnaround: "72h" },
      { name: "Leather Shoes", turnaround: "5–7 days" },
      { name: "Handbags & Totes", turnaround: "5–7 days" },
      { name: "Backpacks", turnaround: "72h" },
    ],
  },
  {
    name: "Corporate & Hotel Laundry",
    slug: "corporate-and-hotel-laundry",
    category: "Business",
    icon: "building",
    featured: true,
    description:
      "Scheduled laundry for hotels, offices, restaurants and clinics — linens, uniforms and towels collected, cleaned and delivered on route.",
    items: [
      { name: "Hotel Linen & Towels", turnaround: "24h routes" },
      { name: "Staff Uniforms", turnaround: "48h routes" },
      { name: "Restaurant Napkins & Cloths", turnaround: "24h routes" },
      { name: "Custom Contracts", turnaround: "Scheduled" },
    ],
  },
];

export const services: StaticService[] = seed.map((s) => ({
  id: `svc_${s.slug}`,
  name: s.name,
  slug: s.slug,
  category: s.category,
  icon: s.icon,
  featured: s.featured ?? false,
  description: s.description,
  items: s.items.map((t, i) => ({
    id: `svc_${s.slug}_i${i}`,
    name: t.name,
    turnaround: t.turnaround ?? null,
    serviceId: `svc_${s.slug}`,
  })),
}));
