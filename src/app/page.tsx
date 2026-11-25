import { Hero } from "@/components/home/hero";
import { TrustMarquee } from "@/components/home/marquee";
import { ServiceExplorer } from "@/components/home/service-explorer";
import { StatsBand } from "@/components/home/stats";
import { HowItWorks } from "@/components/home/how-it-works";
import { BeforeAfter } from "@/components/home/before-after";
import { QuoteBuilder } from "@/components/home/quote-builder";
import { PricingPlans } from "@/components/home/pricing";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { CoverageSection } from "@/components/home/coverage";
import { FaqSection } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServiceExplorer />
      <StatsBand />
      <HowItWorks />
      <BeforeAfter />
      <QuoteBuilder />
      <PricingPlans />
      <WhyChooseUs />
      <Testimonials />
      <CoverageSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
