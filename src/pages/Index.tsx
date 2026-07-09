import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>AppDrop - Visual Shopify Mobile App Builder</title>
        <meta
          name="description"
          content="Build your Shopify mobile app visually with AppDrop's no-code Builder, live preview, theme customization, and publish-ready mobile app workflow. Shopify App Store listing coming soon."
        />
        <meta
          name="keywords"
          content="Shopify mobile app builder, no-code app builder, ecommerce app builder, mobile commerce, push notifications, live preview, app builder for Shopify"
        />
        <link rel="canonical" href="https://appdrop.co" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AppDrop - Visual Shopify Mobile App Builder" />
        <meta
          property="og:description"
          content="Design a publish-ready mobile app for your Shopify store with a no-code Builder, live preview, and theme controls."
        />
        <meta property="og:url" content="https://appdrop.co" />
        <meta property="og:site_name" content="AppDrop" />
        <meta property="og:image" content="https://appdrop.co/og-image.png" />
        <meta property="og:image:secure_url" content="https://appdrop.co/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="AppDrop logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AppDrop - Visual Shopify Mobile App Builder" />
        <meta
          name="twitter:description"
          content="Build your Shopify mobile app visually with AppDrop Builder."
        />
        <meta name="twitter:image" content="https://appdrop.co/og-image.png" />
        <meta name="twitter:image:alt" content="AppDrop logo" />
      </Helmet>

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
