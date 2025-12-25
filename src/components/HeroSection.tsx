import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import appScreenImage from "@/assets/app-screen.png";

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

const HeroSection = ({ onOpenWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[96px] opacity-50" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">Now accepting early access signups</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
            >
              Turn Your Shopify Store Into a{" "}
              <span className="gradient-text">Native Mobile App</span>
              {" "}— Instantly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              AppDrop is a drag-and-drop app builder that syncs with Shopify to deliver native performance, push notifications, and offline-ready experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button onClick={onOpenWaitlist} variant="hero" size="lg">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#how-it-works">
                  <Play className="w-5 h-5" />
                  See How It Works
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-semibold text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">500+ merchants waiting</p>
                <p className="text-sm text-muted-foreground">Join the waitlist today</p>
              </div>
            </motion.div>
          </div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Phone */}
              <div className="relative z-20 animate-float">
                <div className="w-64 sm:w-72 lg:w-80 aspect-[9/19] bg-foreground rounded-[3rem] p-2 shadow-2xl glow">
                  <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-foreground rounded-b-2xl z-10" />
                    
                    {/* Screen Content with Real Image */}
                    <img 
                      src={appScreenImage} 
                      alt="AppDrop mobile app preview showing a fashion e-commerce store"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="absolute -left-16 top-20 z-10 hidden sm:block opacity-60">
                <div className="w-52 lg:w-60 aspect-[9/19] bg-foreground/80 rounded-[2.5rem] p-2 shadow-xl -rotate-12">
                  <div className="w-full h-full bg-card rounded-[2rem] overflow-hidden">
                    <div className="h-full pt-8 pb-4 px-3">
                      <div className="w-16 h-5 bg-muted rounded-lg mx-auto mb-3" />
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-16 bg-muted rounded-xl" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 z-30 hidden lg:block"
              >
                <div className="glass px-4 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Push Notification</p>
                    <p className="text-xs text-muted-foreground">Sale alert sent!</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-8 bottom-1/4 z-30 hidden lg:block"
              >
                <div className="glass px-4 py-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <p className="text-sm font-medium text-foreground">Synced with Shopify</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
