import { motion } from "framer-motion";
import { Link2, Palette, Rocket, Bell } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link2,
      step: "01",
      title: "Connect Your Shopify Store",
      description: "Link your Shopify store in seconds. We automatically sync your products, collections, and inventory in real-time.",
    },
    {
      icon: Palette,
      step: "02",
      title: "Customize With Drag & Drop",
      description: "Use our visual editor to design your app. Choose layouts, colors, and components without writing a single line of code.",
    },
    {
      icon: Rocket,
      step: "03",
      title: "Publish to iOS & Android",
      description: "Submit to App Store and Google Play with one click. We handle the technical requirements and app store guidelines.",
    },
    {
      icon: Bell,
      step: "04",
      title: "Engage & Boost Sales",
      description: "Send push notifications, track analytics, and optimize conversions. Turn one-time buyers into repeat customers.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From Shopify to App Store in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch your mobile app without developers, designers, or months of waiting. AppDrop makes it effortless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="feature-card h-full text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
