import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import MidPageCTA from "@/components/MidPageCTA";
import WhyAppDropSection from "@/components/WhyAppDropSection";
import DashboardFlowSection from "@/components/DashboardFlowSection";
import UseCasesSection from "@/components/UseCasesSection";
import WaitlistCTASection from "@/components/WaitlistCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>AppDrop - Turn Your Shopify Store Into a Native Mobile App</title>
        <meta 
          name="description" 
          content="AppDrop is a drag-and-drop app builder that syncs with Shopify to deliver native iOS & Android apps with push notifications, offline browsing, and real-time sync. No coding required." 
        />
        <meta name="keywords" content="Shopify mobile app, Shopify app builder, native app builder, ecommerce app, mobile commerce, push notifications, no-code app builder" />
        <link rel="canonical" href="https://appdrop.io" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AppDrop - Turn Your Shopify Store Into a Native Mobile App" />
        <meta property="og:description" content="Build native iOS & Android apps for your Shopify store with drag-and-drop simplicity. No coding required." />
        <meta property="og:url" content="https://appdrop.io" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AppDrop - Shopify Mobile App Builder" />
        <meta name="twitter:description" content="Turn your Shopify store into a native mobile app instantly." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main>
          <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
          <HowItWorksSection />
          <FeaturesSection />
          <MidPageCTA onOpenWaitlist={() => setIsWaitlistOpen(true)} />
          <WhyAppDropSection />
          <DashboardFlowSection />
          <UseCasesSection />
          <TrustSection />
          <WaitlistCTASection />
          <FAQSection />
        </main>

        <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
