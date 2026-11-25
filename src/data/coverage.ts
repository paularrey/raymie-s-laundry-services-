export type CoverageArea = {
  name: string;
  note: string;
};

/** Service areas — TODO: replace with the real coverage list. */
export const coverageAreas: CoverageArea[] = [
  { name: "City Island", note: "Free pickup & delivery" },
  { name: "Mainland North", note: "Free pickup & delivery" },
  { name: "Mainland South", note: "Free pickup & delivery" },
  { name: "Airport Corridor", note: "Free pickup & delivery" },
  { name: "Suburban Ring", note: "Small fee, confirmed first" },
  { name: "Outside coverage", note: "Ask us — routes added weekly" },
];
