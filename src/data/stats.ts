export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

/** Animated counters on the home stats band. TODO: replace with real numbers. */
export const stats: Stat[] = [
  { value: 12000, suffix: "+", label: "Orders completed" },
  { value: 3500, suffix: "+", label: "Happy customers" },
  { value: 480000, suffix: "+", label: "Pieces cleaned" },
  { value: 24, suffix: "h", label: "Avg. turnaround" },
];
