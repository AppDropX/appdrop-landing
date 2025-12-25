import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const WhyAppDropSection = () => {
  const comparison = [
    {
      metric: "Conversion Rate",
      website: "2-3%",
      app: "6-8%",
      better: true,
    },
    {
      metric: "Session Duration",
      website: "2 min",
      app: "8 min",
      better: true,
    },
    {
      metric: "Return Rate",
      website: "1-2x/month",
      app: "10-15x/month",
      better: true,
    },
    {
      metric: "Push Notifications",
      website: false,
      app: true,
      better: true,
    },
    {
      metric: "Offline Access",
      website: false,
      app: true,
      better: true,
    },
    {
      metric: "Home Screen Presence",
      website: false,
      app: true,
      better: true,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why AppDrop
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Mobile Apps{" "}
            <span className="gradient-text">Outperform</span> Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customers who download your app are more engaged, more loyal, and spend more. Here's the data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50 border-b border-border/50">
              <div className="p-4 md:p-6 font-semibold text-muted-foreground">Metric</div>
              <div className="p-4 md:p-6 font-semibold text-center text-muted-foreground border-x border-border/50">Website</div>
              <div className="p-4 md:p-6 font-semibold text-center gradient-text">Native App</div>
            </div>

            {/* Rows */}
            {comparison.map((item, index) => (
              <div
                key={item.metric}
                className={`grid grid-cols-3 ${
                  index !== comparison.length - 1 ? "border-b border-border/50" : ""
                } hover:bg-muted/30 transition-colors`}
              >
                <div className="p-4 md:p-6 font-medium text-foreground flex items-center">
                  {item.metric}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-x border-border/50">
                  {typeof item.website === "boolean" ? (
                    item.website ? (
                      <Check className="w-5 h-5 text-accent" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/40" />
                    )
                  ) : (
                    <span className="text-muted-foreground">{item.website}</span>
                  )}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center">
                  {typeof item.app === "boolean" ? (
                    item.app ? (
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/40" />
                    )
                  ) : (
                    <span className="font-bold text-primary text-lg">{item.app}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { title: "3x Higher Conversions", desc: "Mobile app users convert at 3x the rate of mobile web users" },
            { title: "4x Better Retention", desc: "App users return more frequently and stay longer" },
            { title: "2x More Purchases", desc: "App customers have higher lifetime value and order frequency" },
          ].map((stat, index) => (
            <div key={stat.title} className="text-center p-6">
              <h4 className="text-xl font-bold gradient-text mb-2">{stat.title}</h4>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAppDropSection;
