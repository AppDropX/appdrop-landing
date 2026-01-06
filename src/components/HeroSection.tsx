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

          {/* Phone Mockup - Professional & Consistent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Phone */}
              <div className="relative z-20">
                <div className="w-56 sm:w-64 md:w-72 lg:w-80 aspect-[9/19] bg-foreground rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl glow">
                  <div className="w-full h-full bg-card rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Notch */}
                     
                    
                    {/* Screen Content */}
                    <img 
                      src={appScreenImage} 
                      alt="AppDrop mobile app preview showing a fashion e-commerce store"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Phone Shine Effect */}
                <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge - Push Notification */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 sm:-right-6 lg:-right-12 top-16 sm:top-20 z-30"
              >
                <div className="glass px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 shadow-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">Push Notification</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Sale alert sent!</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Synced */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-2 sm:-left-6 lg:-left-12 bottom-24 sm:bottom-32 z-30"
              >
                <div className="glass px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-xs sm:text-sm font-medium text-foreground">Synced with Shopify</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-24 bg-primary/30 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
