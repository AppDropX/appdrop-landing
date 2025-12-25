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
    title: "Native iOS & Android Apps",
    description: "True native performance on both platforms. No webviews, no compromises. Your app feels just like any top-tier mobile app.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Shopify Sync",
    description: "Products, inventory, orders, and customers sync automatically. Changes in Shopify reflect instantly in your app.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Engage customers with targeted push notifications for sales, new arrivals, cart abandonment, and personalized offers.",
  },
  {
    icon: Wifi,
    title: "Offline Browsing",
    description: "Your app works even without internet. Customers can browse products and their cart syncs when they're back online.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized for speed with lazy loading, image compression, and smart caching. Load times under 2 seconds.",
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
    title: "Native Checkout",
    description: "Seamless checkout experience with Apple Pay, Google Pay, and all major payment methods supported.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Reach global customers with automatic translations and RTL support for international markets.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, GDPR compliance, and SOC 2 certification to keep your data safe.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team available around the clock. Get help whenever you need it.",
  },
];

const Features = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Features - AppDrop | Native Mobile App Builder for Shopify</title>
        <meta 
          name="description" 
          content="Explore AppDrop's powerful features: native iOS & Android apps, real-time Shopify sync, push notifications, offline browsing, and more. No coding required." 
        />
        <link rel="canonical" href="https://appdrop.io/features" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main className="pt-32 pb-20">
          {/* Hero */}
          <section className="section-container text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Features
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Everything You Need to{" "}
                <span className="text-gradient">Launch Your App</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to help Shopify merchants create stunning native mobile apps that drive sales and engagement.
              </p>
            </motion.div>
          </section>

          {/* Features Grid */}
          <section className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
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

export default Features;
