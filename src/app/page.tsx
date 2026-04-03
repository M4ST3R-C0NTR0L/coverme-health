"use client";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { WhyCoverMe } from "@/components/why-coverme";
import { PlanTypes } from "@/components/plan-types";
import { Testimonials } from "@/components/testimonials";
import { HowItWorks } from "@/components/how-it-works";
import { SavingsCalculator } from "@/components/savings-calculator";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
      <WhyCoverMe />
      <PlanTypes />
      <Testimonials />
      <HowItWorks />
      <SavingsCalculator />
      <FinalCTA />
      <Footer />
    </main>
  );
}
