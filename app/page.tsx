import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import CaseStudies from "@/components/CaseStudies";
import SalesLetter from "@/components/SalesLetter";
import ThreeSteps from "@/components/ThreeSteps";
import WhatYouGet from "@/components/WhatYouGet";
import BonusesSection from "@/components/BonusesSection";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IntroSection />
      <CaseStudies />
      <SalesLetter />
      <ThreeSteps />
      <WhatYouGet />
      <BonusesSection />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
