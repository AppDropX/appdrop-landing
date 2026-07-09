import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  RefreshCw, 
  Bell, 
  Wifi, 
  Zap, 
  Code2, 
  Palette, 
  BarChart3,
  ShoppingCart,
  Globe,
  Shield,
  Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const features = [
  {
    icon: Smartphone,
    title: "Publish-Ready Mobile Apps",
    description: "Design a polished mobile app experience for your Shopify brand from one visual Builder workflow.",
  },
  {
    icon: RefreshCw,
    title: "Shopify Connection Coming Soon",
    description: "AppDrop is currently under Shopify review. Build your app now and prepare to connect products, collections, and inventory once the listing is live.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Engage customers with targeted push notifications for sales, new arrivals, cart abandonment, and personalized offers.",
  },
  {
    icon: Wifi,
    title: "Live Preview",
    description: "See layout, content, and product presentation update in the Builder as you make design decisions.",
  },
  {
    icon: Zap,
    title: "Fast Mobile Experience",
    description: "Create a mobile-first shopping experience designed around focused screens, responsive media, and native-feeling interactions.",
  },
  {
    icon: Code2,
    title: "No Coding Required",
    description: "Drag-and-drop builder makes it easy for anyone to create a beautiful app. No developers needed.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Match your brand perfectly with custom colors, fonts, layouts, and components. Make it uniquely yours.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track user behavior, conversions, and revenue with built-in analytics dashboard and third-party integrations.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Blocks",
    description: "Build product, collection, banner, and merchandising sections that turn your catalog into a mobile app experience.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Reach global customers with automatic translations and RTL support for international markets.",
  },
  {
    icon: Shield,
    title: "Review-Ready Workflow",
    description: "Work from a structured publishing path designed to support Shopify review, mobile app preparation, and merchant onboarding.",
  },
  {
    icon: Headphones,
    title: "Guided Support",
    description: "Book a demo with the AppDrop team for Builder walkthroughs, launch planning, and Shopify connection readiness.",
  },
];

const Features = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Features - AppDrop | Visual Mobile App Builder for Shopify</title>
        <meta 
          name="description" 
          content="Explore AppDrop Builder features: drag-and-drop mobile app design, live preview, theme customization, push notifications, analytics, and Shopify connection coming soon." 
        />
        <link rel="canonical" href="https://appdrop.io/features" />
      </Helmet>

      <div className="min-h-dvh bg-background">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main className="pt-[var(--site-header-offset)] pb-20">
          {/* Hero */}
          <section className="section-container text-center mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Features
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Everything You Need to{" "}
                <span className="gradient-text">Build Your App</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Builder-first features for Shopify merchants who want to design a polished mobile app now and connect Shopify when AppDrop's listing is live.
              </p>
            </motion.div>
          </section>

          {/* Features Grid */}
          <section className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        
        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    </>
  );
};

export default Features;
