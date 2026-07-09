import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Eye,
  Palette,
  Puzzle,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const features: { icon: LucideIcon; title: string; description: string; iconBg: string }[] = [
  {
    icon: Puzzle,
    title: "Drag & Drop Builder",
    description:
      "Assemble your app from ready-made blocks for banners, product grids, collections, and campaigns without touching code.",
    iconBg: "bg-primary/15",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description:
      "Preview the app experience as you design it, so layout, content, and merchandising decisions are visible before publishing.",
    iconBg: "bg-teal/10",
  },
  {
    icon: Palette,
    title: "Theme Customization",
    description:
      "Control colors, typography, navigation, product cards, and brand details from a focused visual settings panel.",
    iconBg: "bg-amber-100",
  },
  {
    icon: RefreshCw,
    title: "Real-time Changes",
    description:
      "Make edits in the Builder and see them reflected immediately in preview, reducing guesswork before launch.",
    iconBg: "bg-violet-100",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Plan rich push campaigns for product drops, cart recovery, and customer re-engagement from the same mobile commerce platform.",
    iconBg: "bg-teal/10",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Measure app engagement, campaigns, and commerce performance once your mobile app is connected and live.",
    iconBg: "bg-primary/15",
  },
];

const FeaturesSection = () => (
  <section id="features" className="scroll-mt-[var(--site-header-offset)] py-14 sm:py-20 lg:py-24">
    <div className="section-container">
      <SectionHeader
        eyebrow="Everything built in"
        title="A complete Builder for mobile commerce"
        subtitle="Design the app first, connect Shopify when the listing is live, then publish from a workflow built for merchants."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="v3-feature-card group"
          >
            <div className={`v3-feature-icon ${feature.iconBg} group-hover:scale-105 transition-transform`}>
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
