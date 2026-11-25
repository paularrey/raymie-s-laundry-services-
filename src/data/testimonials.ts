export type StaticTestimonial = {
  id: string;
  name: string;
  initials: string;
  role: string;
  content: string;
  rating: number;
  published: boolean;
};

const seed: Omit<StaticTestimonial, "id">[] = [
  {
    name: "Adaeze N.",
    initials: "AN",
    role: "Lagos, Nigeria",
    content:
      "Booked a pickup on WhatsApp at 10pm and someone was at my gate the next morning. Everything came back folded like a shop display. This is how laundry should work.",
    rating: 5,
    published: true,
  },
  {
    name: "Tunde B.",
    initials: "TB",
    role: "Abuja, Nigeria",
    content:
      "The express service saved me — same-day shirts for a morning meeting, perfectly pressed. I've stopped doing weekends of washing entirely.",
    rating: 5,
    published: true,
  },
  {
    name: "Chidinma O.",
    initials: "CO",
    role: "Port Harcourt, Nigeria",
    content:
      "My duvet came back smelling incredible and the stain I'd given up on was gone. The team texted me at every step. Genuinely premium.",
    rating: 5,
    published: true,
  },
  {
    name: "Emeka & Funke A.",
    initials: "EF",
    role: "Ibadan, Nigeria",
    content:
      "We run a small guesthouse and Raymie's handles all our linens on a fixed schedule now. Never late, never a missing towel. Total peace of mind.",
    rating: 5,
    published: true,
  },
];

export const testimonials: StaticTestimonial[] = seed.map((t, i) => ({
  id: `tst_${i + 1}`,
  ...t,
}));
