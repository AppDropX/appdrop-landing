import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose the Plan That{" "}
            <span className="gradient-text">Fits Your Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get full access to AppDrop Builder and launch your mobile app faster
            with flexible billing options.
          </p>
        </motion.div>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 sm:gap-6 lg:grid-cols-4 lg:gap-6"
        >
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
