export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Raymie's Laundry Services",
  tagline: "Fresh clothes, zero hassle.",
  description:
    "A friendly laundry offering pickup, wash, dry cleaning and delivery — open 24/7.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: "/logo.jpeg",
  address: "Citywide pickup & drop-off",
  phone: "0802 755 6093",
  phoneHref: "+2348027556093",
  whatsapp: "2348027556093",
  email: "",
  hoursLabel: "Open 24/7",
  openingHours: [
    { day: "Monday – Sunday", hours: "Open 24/7", short: "Daily" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Facebook", href: "TODO-facebook-url" },
    { label: "Instagram", href: "TODO-instagram-url" },
    { label: "X (Twitter)", href: "TODO-x-url" },
    { label: "LinkedIn", href: "TODO-linkedin-url" },
  ],
  credit: "Powered by ECHELON TECHNOLOGIES",
} as const;

export type NavItem = (typeof site.nav)[number];

/** WhatsApp deep link — number lives only here, never hardcoded in components. */
export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Default pre-filled WhatsApp greeting used by floating widgets and CTAs. */
export const defaultWhatsAppMessage =
  "Hello, I'd like to book a pickup with Raymie's Laundry Services.";
