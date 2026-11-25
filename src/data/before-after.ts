export type BeforeAfterItem = {
  id: string;
  title: string;
  description: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

/** Drag-to-compare proof shots. TODO: replace with real client photos. */
export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "stain-removal",
    title: "Stubborn stain removal",
    description: "A week-old food and drink stain, lifted without damaging the weave.",
    beforeSrc: "/images/before-stain.jpg",
    afterSrc: "/images/after-stain.jpg",
    beforeAlt: "TODO: photo of a stained shirt before cleaning",
    afterAlt: "TODO: photo of the same shirt after stain removal",
  },
  {
    id: "fabric-restore",
    title: "Fabric revival",
    description: "Dull, stiff cotton restored to soft, bright and fresh — like day one.",
    beforeSrc: "/images/before-fabric.jpg",
    afterSrc: "/images/after-fabric.jpg",
    beforeAlt: "TODO: photo of faded fabric before cleaning",
    afterAlt: "TODO: photo of the same fabric after cleaning",
  },
];
