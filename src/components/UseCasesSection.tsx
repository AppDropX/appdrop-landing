import { motion } from "framer-motion";
import { ShoppingBag, Shirt, Sparkles, TrendingUp } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "DTC Brands",
      description: "Direct-to-consumer brands use AppDrop to own the customer relationship and build loyalty beyond social platforms.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Shirt,
      title: "Fashion Stores",
      description: "Fashion retailers deliver lookbooks, new arrivals, and flash sales directly to customers' pockets with push notifications.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Beauty & Wellness",
      description: "Beauty brands offer personalized recommendations, tutorials, and reorder reminders through their mobile app.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "High-Volume Merchants",
      description: "Established stores can plan a more scalable mobile presence with structured app screens, campaigns, and analytics.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="use-cases" className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built For{" "}
            <span className="gradient-text">Every Shopify Store</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From emerging DTC brands to established merchants, AppDrop helps teams design mobile commerce experiences before they publish.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 hover:shadow-xl transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
