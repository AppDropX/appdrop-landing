import { motion } from "framer-motion";
import {
  ArrowDown,
  Bell,
  LayoutGrid,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mobileScreenImage from "@/assets/mobile-screen.png";
import { APPDROP_BUILDER_URL } from "@/lib/urls";

const heroStats = [
  { value: "No-code", label: "visual app builder" },
  { value: "Live", label: "mobile preview as you edit" },
  { value: "Soon", label: "Shopify App Store listing" },
];

const floatingChips = [
  {
    title: "Banner Block",
    subtitle: "Summer drop live!",
    icon: LayoutGrid,
    iconClass: "hero-chip-icon--coral",
    className: "hero-chip--banner",
    delay: 0,
  },
  {
    title: "Push Notification",
    subtitle: "Sale alert sent!",
    icon: Bell,
    iconClass: "hero-chip-icon--teal",
    className: "hero-chip--push",
    delay: 1.1,
  },
  {
    title: "Cart Updated",
    subtitle: "3 items ready",
    icon: ShoppingCart,
    iconClass: "hero-chip-icon--violet",
    className: "hero-chip--cart",
    delay: 2.1,
  },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-blob hero-blob-one" />
        <div className="hero-blob hero-blob-two" />
      </div>

      <div className="section-container relative z-10">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="v3-eyebrow max-w-[20rem] sm:max-w-none mx-auto lg:mx-0"
            >
              <span className="sm:hidden">No-code · Shopify under review</span>
              <span className="hidden sm:inline">No-code builder · Shopify listing under review</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[1.75rem] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-display font-extrabold leading-[1.12] sm:leading-[1.04] tracking-tight mt-5 mb-5 sm:mb-6"
            >
              Build your Shopify{" "}
              <span className="text-primary">mobile app</span> visually.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-xl text-muted-foreground mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              AppDrop gives Shopify merchants a no-code Builder with live preview,
              brand controls, and publish-ready mobile apps. Shopify integration is
              coming soon as our App Store listing completes review.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" className="rounded-full" asChild>
                <a href={APPDROP_BUILDER_URL} target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-5 h-5" />
                  Launch Builder
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="rounded-full" asChild>
                <a href="#builder">
                  See the Builder
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-9 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-8 justify-center lg:justify-start"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-xl sm:text-4xl font-extrabold text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 max-w-[12ch] sm:max-w-[15ch] mx-auto lg:mx-0 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-visual"
          >
            {floatingChips.map((chip) => (
              <div
                key={chip.title}
                className={`hero-chip-wrap ${chip.className}`}
                style={{ animationDelay: `${chip.delay}s` }}
              >
                <div className="hero-chip">
                  <span className={`hero-chip-icon ${chip.iconClass}`}>
                    <chip.icon className="w-[18px] h-[18px]" strokeWidth={2} />
                  </span>
                  <span className="hero-chip-copy">
                    <span className="hero-chip-title">{chip.title}</span>
                    <span className="hero-chip-subtitle">{chip.subtitle}</span>
                  </span>
                </div>
              </div>
            ))}

            <div className="relative z-20 transition-transform duration-300 hover:-translate-y-1.5">
              <img
                src={mobileScreenImage}
                alt="AppDrop mobile app preview"
                className="w-44 sm:w-60 md:w-72 lg:w-80 xl:w-[22rem] max-w-[min(70vw,22rem)] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
