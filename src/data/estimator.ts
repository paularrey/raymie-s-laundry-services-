export type EstimatorItem = {
  id: string;
  label: string;
  unit: string;
};

/** Item catalogue for the WhatsApp quote builder. */
export const estimatorItems: EstimatorItem[] = [
  { id: "shirt", label: "Shirt / Top", unit: "piece" },
  { id: "trouser", label: "Trousers / Jeans", unit: "piece" },
  { id: "dress", label: "Dress", unit: "piece" },
  { id: "suit", label: "Suit (2-piece)", unit: "set" },
  { id: "blazer", label: "Blazer / Jacket", unit: "piece" },
  { id: "bedsheet", label: "Bed Sheet Set", unit: "set" },
  { id: "duvet", label: "Duvet / Comforter", unit: "piece" },
  { id: "sneakers", label: "Sneakers (deep clean)", unit: "pair" },
  { id: "curtain", label: "Curtain", unit: "panel" },
];

export const estimatorServiceOptions = [
  { id: "wash-fold", label: "Wash & Fold" },
  { id: "dry-clean", label: "Dry Cleaning" },
  { id: "iron-press", label: "Ironing & Pressing" },
] as const;

export type EstimatorServiceId = (typeof estimatorServiceOptions)[number]["id"];
