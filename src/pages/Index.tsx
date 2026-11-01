import { useState } from "react";
import Seo from "@/components/Seo";
import { softwareApplicationJsonLd } from "@/lib/structuredData";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import BuilderSection from "@/components/BuilderSection";
import TourSection from "@/components/TourSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Seo
        title="AppDrop - Visual Shopify Mobile App Builder"
        description="Design a native mobile app for your Shopify store with AppDrop's no-code Builder: live preview, theme controls and a publish-ready app workflow."
        path="/"
        jsonLd={softwareApplicationJsonLd()}
      />

      <div className="min-h-dvh bg-background w-full">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        <main className="pt-[var(--site-header-offset)] w-full">
          <HeroSection />
          <LogoStrip />
          <WhySection />
          <FeaturesSection />
          <BuilderSection />
          <TourSection />
          <IntegrationsSection />
          <TrustSection />
          <PricingSection />
          <FinalCTASection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
          <FAQSection />
        </main>

        <Footer />

        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </div>
    </>
  );
};

export default Index;
