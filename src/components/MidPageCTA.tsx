import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MidPageCTAProps {
  onOpenWaitlist: () => void;
}

const MidPageCTA = ({ onOpenWaitlist }: MidPageCTAProps) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Ready to go mobile?
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Join 500+ Shopify merchants on the waitlist today.
            </p>
          </div>
          
          <Button
            onClick={onOpenWaitlist}
            variant="glass"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA;
