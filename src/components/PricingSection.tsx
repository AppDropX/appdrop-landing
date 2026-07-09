import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";

const PricingSection = () => {
  return (
    <section id="pricing" className="scroll-mt-[var(--site-header-offset)] py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="v3-eyebrow text-primary before:bg-primary mx-auto mb-5">
            Pricing
          </span>
          <h2 className="font-display text-[1.65rem] sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
            Choose the Plan That{" "}
            <span className="gradient-text">Fits Your Growth</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Get full access to AppDrop Builder, design your mobile app now,
            and prepare for Shopify connection once the listing is live.
          </p>
        </motion.div>

        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-6 pb-4 -mx-4 px-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 lg:grid-cols-4"
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
