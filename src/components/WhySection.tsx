import { motion } from "framer-motion";
import { Bell, Smartphone, TrendingUp, type LucideIcon } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons: { icon: LucideIcon; title: string; description: string; iconBg: string }[] = [
  {
    icon: TrendingUp,
    title: "Stable acquisition cost",
    description:
      "Ad costs climb and audiences fatigue. Your app brings repeat customers back without paying for the same click twice.",
    iconBg: "bg-primary/15",
  },
  {
    icon: Bell,
    title: "A channel you own",
    description:
      "Email lands in spam and SMS keeps getting pricier. Push notifications reach your customer's lock screen directly — for free.",
    iconBg: "bg-teal/10",
  },
  {
    icon: Smartphone,
    title: "Built for mobile-first shoppers",
    description:
      "Most store traffic is on phones. A native app converts that traffic far better than a mobile browser ever can.",
    iconBg: "bg-amber-100",
  },
];

const WhySection = () => (
  <section id="why" className="py-14 sm:py-20 lg:py-24 bg-card border-y border-border">
    <div className="section-container">
      <SectionHeader
        eyebrow="Why an app"
        title="Your most reliable sales channel"
        subtitle="Mobile web leaks customers at every tap. An app keeps them — a faster experience and a direct line you actually own."
      />
      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {reasons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="v3-feature-card"
          >
            <div className={`v3-feature-icon ${item.iconBg}`}>
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
