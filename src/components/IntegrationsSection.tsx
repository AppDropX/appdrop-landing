import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const integrations = [
  "Klaviyo",
  "Recharge",
  "Yotpo",
  "Judge.me",
  "Loox",
  "Smile.io",
  "Gorgias",
  "Meta Ads",
  "Google Analytics",
  "Stamped",
];

const IntegrationsSection = () => (
  <section id="integrations" className="py-14 sm:py-20 lg:py-24">
    <div className="section-container">
      <SectionHeader
        eyebrow="Plays well with your stack"
        title="Designed for the Shopify stack"
        subtitle="Build your app experience now, then connect Shopify, reviews, loyalty, subscriptions, and analytics as integrations come online."
        centered
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
        {integrations.map((name, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="v3-integ-tile"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationsSection;
