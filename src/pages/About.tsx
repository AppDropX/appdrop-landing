import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Users, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're on a mission to democratize mobile commerce for every Shopify merchant, regardless of technical expertise or budget.",
  },
  {
    icon: Users,
    title: "Customer-First",
    description: "Every feature we build starts with understanding our customers' needs. Your success is our success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We push the boundaries of what's possible with mobile technology to give you the best tools available.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about helping merchants grow their businesses and connect with customers in meaningful ways.",
  },
];

const About = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us - AppDrop | Our Mission & Team</title>
        <meta 
          name="description" 
          content="Learn about AppDrop's mission to help Shopify merchants create native mobile apps. Meet our team and discover our values." 
        />
        <link rel="canonical" href="https://appdrop.io/about" />
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Empowering Shopify{" "}
                <span className="text-gradient">Merchants</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe every Shopify store deserves a world-class mobile app experience.
              </p>
            </motion.div>
          </section>

          {/* Story Section */}
          <section className="section-container mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    AppDrop was born from a simple observation: mobile commerce is growing rapidly, but most Shopify merchants can't afford or access native mobile apps.
                  </p>
                  <p>
                    Traditional app development costs tens of thousands of dollars and takes months. We knew there had to be a better way.
                  </p>
                  <p>
                    That's why we built AppDrop — a platform that lets anyone create a beautiful, high-performing native mobile app in minutes, not months. No code. No hassle. Just results.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-foreground font-bold text-4xl">A</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">AppDrop</p>
                    <p className="text-muted-foreground">Since 2024</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Values */}
          <section className="section-container mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card rounded-3xl p-12 text-center border border-border/50"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Store?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Join thousands of Shopify merchants who are waiting to launch their mobile apps with AppDrop.
              </p>
              <Button onClick={() => setIsWaitlistOpen(true)} variant="hero" size="lg">
                Join the Waitlist
              </Button>
            </motion.div>
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

export default About;
