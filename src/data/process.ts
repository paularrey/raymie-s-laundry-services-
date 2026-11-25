export type ProcessStep = {
  num: string;
  title: string;
  short: string;
  body: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Book",
    short: "Book",
    body: "Tap a WhatsApp button, tell us what needs cleaning and your address — it takes under two minutes, any hour of the day.",
    icon: "message",
  },
  {
    num: "02",
    title: "Pickup",
    short: "Pickup",
    body: "A rider collects your bag at the agreed time. Free within our coverage area, with photo confirmation the moment it's picked up.",
    icon: "truck",
  },
  {
    num: "03",
    title: "Wash",
    short: "Wash",
    body: "Sorted by colour and fabric, treated for stains and cleaned with eco-friendly detergents — wash & fold, dry clean or press, your call.",
    icon: "machine",
  },
  {
    num: "04",
    title: "Fold",
    short: "Fold",
    body: "Every piece is folded, pressed and garment-bagged with care, so nothing arrives creased or mixed up.",
    icon: "shirt",
  },
  {
    num: "05",
    title: "Deliver",
    short: "Deliver",
    body: "Fresh, folded clothes arrive at your door — usually within 24–48 hours, with same-day express available.",
    icon: "package",
  },
];
