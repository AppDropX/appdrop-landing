import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APPDROP_BUILDER_URL } from "@/lib/urls";

interface FinalCTASectionProps {
  onOpenWaitlist: () => void;
}

const FinalCTASection = ({ onOpenWaitlist }: FinalCTASectionProps) => (
  <section className="py-12 sm:py-16 lg:py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="v3-cta-card text-center relative overflow-hidden"
      >
        <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <h2 className="text-[1.65rem] sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Start building before the listing goes live.
          </h2>
          <p className="text-sm sm:text-lg text-white/90 max-w-lg mx-auto mb-7 sm:mb-8">
            Launch AppDrop Builder today, design your Shopify mobile app, and be ready
            to publish once our Shopify App Store review is complete.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-foreground hover:text-white rounded-full px-8 h-12 sm:h-14 text-base font-semibold shadow-lg w-full sm:w-auto"
              asChild
            >
              <a href={APPDROP_BUILDER_URL} target="_blank" rel="noopener noreferrer">
                <Rocket className="w-5 h-5" />
                Launch Builder
              </a>
            </Button>
            <Button
              type="button"
              onClick={onOpenWaitlist}
              size="lg"
              className="rounded-full px-8 h-12 sm:h-14 text-base font-semibold border-[1.5px] border-white/70 bg-transparent text-white hover:bg-white hover:text-foreground hover:border-white w-full sm:w-auto"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
