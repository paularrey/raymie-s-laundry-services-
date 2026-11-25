import { site } from "@/lib/site";

/** Canonical FAQ list — used by the home page accordion and /faqs. */
export const faqs: { q: string; a: string }[] = [
  {
    q: "How do I book a pickup?",
    a: `Tap any WhatsApp button on this site or fill in the Book a Pickup form — we'll confirm on WhatsApp within minutes. You can also call ${site.phone} directly. Bookings are open 24/7.`,
  },
  {
    q: "How fast is your turnaround?",
    a: "Standard orders come back within 24–48 hours. Our Express Service returns most items the same day if you drop off before 10 AM (limited daily slots). Bedding and specialty items like shoes may take 3–7 days.",
  },
  {
    q: "Do you offer free pickup and delivery?",
    a: "Yes — pickup and delivery are free within our standard coverage area. Share your address on WhatsApp and we'll confirm the route and time window. Extended areas may carry a small fee, always confirmed before dispatch.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open 24/7 — every day, all day. Book any time, day or night; pickups and deliveries run on scheduled routes around the clock.",
  },
  {
    q: "How do I pay?",
    a: `No payment is taken on this website. You settle up on delivery — cash or transfer — after you've inspected the work. Quotes are confirmed on WhatsApp before we start, so there are no surprises. Call ${site.phone} for anything unclear.`,
  },
  {
    q: "How do you handle delicate fabrics and stains?",
    a: "Delicates are dry cleaned or hand-finished by trained staff, and every stain is assessed before treatment. Tell us about tough stains when you book — pre-treatment is included on wash & fold orders.",
  },
  {
    q: "Can I track my order?",
    a: "Yes. You'll get WhatsApp updates at pickup, cleaning and out-for-delivery. If anything is delayed we message you before the promised window closes.",
  },
  {
    q: "What if I'm not home for pickup?",
    a: "No problem — leave the bag with a gate person, reception or concierge and send us a note on WhatsApp. We photograph the bag at pickup so you know exactly what we took.",
  },
  {
    q: "Do you handle corporate and hotel laundry?",
    a: "Yes. We run scheduled routes for hotels, offices, restaurants and clinics — linens, uniforms and towels collected, cleaned and delivered on a fixed schedule. Contact us on WhatsApp for a custom quote.",
  },
  {
    q: "What if I'm unhappy with the result?",
    a: "Tell us within 24 hours of delivery and we'll re-clean the item free of charge. Your satisfaction is the whole point — that's a promise, not a policy footnote.",
  },
];
