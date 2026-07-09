import { motion } from "framer-motion";
import { ArrowRight, Check, Smartphone, Store, WandSparkles } from "lucide-react";
import builderThemePages from "@/assets/builder-theme-pages.png";
import MacWindow from "@/components/shared/MacWindow";
import ProductScreenshot from "@/components/shared/ProductScreenshot";

const bullets = [
  "Live preview that updates as you edit",
  "Drag-and-drop pages, blocks, and product sections",
  "Brand themes for colors, typography, and layout",
  "Shopify connection coming soon after App Store review",
];

const productFlow = [
  { label: "Shopify Store", icon: Store },
  { label: "AppDrop Builder", icon: WandSparkles },
  { label: "Mobile App", icon: Smartphone },
];

const BuilderPreview = () => (
  <ProductScreenshot
    src={builderThemePages}
    alt="AppDrop builder showing theme pages, block list, and live mobile preview"
    className="bg-teal-deep"
  />
);

const BuilderSection = () => (
  <section
    id="builder"
    className="scroll-mt-[var(--site-header-offset)] py-8 lg:py-10 lg:min-h-[calc(100dvh-var(--site-header-offset))] lg:flex lg:items-center"
  >
    <div className="mx-2 sm:mx-4 lg:mx-6 w-full">
      <div className="showcase-panel max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center p-4 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="v3-eyebrow text-accent">See it in action</span>
            <h2 className="v3-section-title text-white mt-4 mb-4">
              Build first. Connect Shopify. Publish.
            </h2>
            <p className="text-teal-100/80 mb-6 max-w-md leading-relaxed">
              AppDrop Builder is the workspace where your mobile app takes shape. Start with your
              brand and catalog experience, preview every change live, then connect Shopify when
              the listing is live.
            </p>
            <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              {productFlow.map((step, index) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-semibold text-white flex items-center gap-2">
                    <step.icon className="w-4 h-4 text-accent" />
                    {step.label}
                  </div>
                  {index < productFlow.length - 1 && (
                    <ArrowRight className="hidden sm:block w-4 h-4 text-teal-100/50" />
                  )}
                </div>
              ))}
            </div>
            <ul className="space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-teal-50/90">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MacWindow title="appdrop.co · builder — theme pages" dark>
              <BuilderPreview />
            </MacWindow>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default BuilderSection;
