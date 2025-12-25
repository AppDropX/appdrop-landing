import { motion } from "framer-motion";
import { 
  Smartphone, 
  RefreshCw, 
  Bell, 
  WifiOff, 
  Zap, 
  Code2 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Native iOS & Android Apps",
      description: "True native performance that feels fast and fluid. No web views, no compromises.",
    },
    {
      icon: RefreshCw,
      title: "Real-time Shopify Sync",
      description: "Products, inventory, and orders stay in sync automatically. Changes reflect instantly.",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Re-engage customers with personalized push notifications. Boost retention and sales.",
    },
    {
      icon: WifiOff,
      title: "Offline Browsing",
      description: "Customers can browse your store even without internet. Perfect for on-the-go shopping.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "60 FPS animations, instant page loads, and smooth scrolling your customers will love.",
    },
    {
      icon: Code2,
      title: "No Coding Required",
      description: "Visual drag-and-drop builder. If you can use Shopify, you can use AppDrop.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Go Mobile</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AppDrop gives you all the tools to create a world-class mobile shopping experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
