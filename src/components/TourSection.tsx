import { motion } from "framer-motion";
import { Check } from "lucide-react";
import tourAppStyling from "@/assets/tour-app-styling.png";
import tourProductBlock from "@/assets/tour-product-block.png";
import SectionHeader from "@/components/shared/SectionHeader";
import MacWindow from "@/components/shared/MacWindow";
import ProductScreenshot from "@/components/shared/ProductScreenshot";

const tourBlocks = [
  {
    eyebrow: "Brand control",
    title: "Your brand, down to the hex code",
    subtitle:
      "Set your theme color once and watch it flow through every screen. Fonts, toolbar, side menu, bottom bar — all styled from one panel and previewed live in the Builder.",
    windowTitle: "theme settings · app styling",
    bullets: [
      "Global color & typography controls",
      "Live device preview as you edit",
      "Preview changes before your publishing workflow",
    ],
    reverse: false,
    preview: (
      <ProductScreenshot
        src={tourAppStyling}
        alt="AppDrop theme settings with app styling controls and live mobile preview"
      />
    ),
  },
  {
    eyebrow: "Merchandising",
    title: "Product cards built to convert",
    subtitle:
      "Tune the details that shape the shopping experience — image ratios, corner radius, strikethrough pricing, discount badges. Small controls, polished mobile output.",
    windowTitle: "theme settings · product block",
    bullets: [
      "Smart image cropping for clean grids",
      "Show retail vs selling price with one toggle",
      "Discount colors & sizes you decide",
    ],
    reverse: true,
    preview: (
      <ProductScreenshot
        src={tourProductBlock}
        alt="AppDrop product block settings with image and price customization options"
      />
    ),
  },
];

const TourSection = () => (
  <section id="tour" className="py-14 sm:py-20 lg:py-24 bg-card border-y border-border">
    <div className="section-container">
      <SectionHeader
        eyebrow="Inside AppDrop"
        title="Every pixel of your app, under your control"
        subtitle="The Builder is live today. Design your app now and be ready to connect Shopify when AppDrop completes review."
        centered
      />

      {tourBlocks.map((block, index) => (
        <div
          key={block.title}
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mt-10 sm:mt-14 lg:mt-20 ${
            block.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <MacWindow title={block.windowTitle}>{block.preview}</MacWindow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="v3-eyebrow">{block.eyebrow}</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mt-4 mb-4 tracking-tight">
              {block.title}
            </h3>
            <p className="text-muted-foreground text-base sm:text-[17px] leading-relaxed mb-6">{block.subtitle}</p>
            <ul className="space-y-3">
              {block.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[15px]">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export default TourSection;
