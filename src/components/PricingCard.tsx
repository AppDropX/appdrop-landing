import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  type PricingPlan,
  PRICING_FEATURES,
  formatPrice,
} from "@/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const hasDiscount = plan.originalPrice && plan.discount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[min(280px,calc(100%-0.5rem))] snap-center shrink-0 sm:min-w-0 sm:shrink"
    >
      <div
        className="group flex h-full flex-col rounded-2xl sm:rounded-3xl bg-card border border-border/50 p-5 sm:p-7 transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-glow-sm hover:-translate-y-1"
      >
        <div className="mb-5">
          <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{plan.duration}</p>
        </div>

        <div className="mb-6 pb-6 border-b border-border/40 space-y-2">
          {hasDiscount && (
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-muted-foreground line-through tabular-nums">
                {formatPrice(plan.originalPrice!)}
              </span>
              <span
                className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-semibold shrink-0 transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent"
              >
                {plan.discount}
              </span>
            </div>
          )}

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
            <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight tabular-nums">
              {formatPrice(plan.price)}
            </span>
            {plan.savings && (
              <span className="text-sm font-semibold text-emerald-600 shrink-0 tabular-nums">
                Save {formatPrice(plan.savings)}
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground tabular-nums">
            {formatPrice(plan.effectiveMonthly)}/mo effective
          </p>
        </div>

        <ul className="space-y-3 flex-1">
          {PRICING_FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-primary/20"
              >
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
              <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PricingCard;
