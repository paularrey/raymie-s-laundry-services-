export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  rest: string;
  body: string;
};

/** Auto-playing hero slider slides. */
export const heroSlides: HeroSlide[] = [
  {
    id: "fresh-delivered",
    eyebrow: "Open 24/7",
    title: "Fresh clothes,",
    accent: "delivered",
    rest: " to your door",
    body: "Book on WhatsApp in seconds. We pick up, clean and return your laundry — usually within 24–48 hours.",
  },
  {
    id: "pickup-60",
    eyebrow: "Free pickup",
    title: "Pickup in",
    accent: "60 minutes",
    rest: "",
    body: "Same-day routes run around the clock. Tell us your address and a rider is on the way.",
  },
  {
    id: "dry-clean",
    eyebrow: "Premium care",
    title: "Premium",
    accent: "dry cleaning",
    rest: " for delicates",
    body: "Suits, silk, lace and traditional wear — hand-finished, garment-bagged and returned flawless.",
  },
  {
    id: "wash-fold",
    eyebrow: "Effortless",
    title: "Wash. Fold.",
    accent: "Done.",
    rest: "",
    body: "Eco-friendly detergents, colour-sorted loads and a finish that feels like a five-star hotel.",
  },
];
