import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is AppDrop truly no-code?",
      answer: "Yes. AppDrop Builder lets you design, customize, and prepare your mobile app without writing a single line of code. If you can manage a Shopify storefront, you can build with AppDrop.",
    },
    {
      question: "Is AppDrop available on the Shopify App Store?",
      answer: "We're currently completing the Shopify App Store review process. In the meantime, you can explore the AppDrop Builder, design your app, and be ready to publish once our Shopify listing is live.",
    },
    {
      question: "Does AppDrop support both iOS and Android?",
      answer: "AppDrop is built for publish-ready mobile apps across iOS and Android from a single Builder workflow. We'll guide merchants through the publishing path as AppDrop opens more broadly.",
    },
    {
      question: "Is the Shopify sync real-time?",
      answer: "The Builder is live today, and Shopify integration is coming soon once AppDrop completes Shopify review. The intended workflow is to connect your catalog, products, pricing, and inventory directly from Shopify.",
    },
    {
      question: "What can I do before the Shopify listing is live?",
      answer: "You can launch the AppDrop Builder, explore the visual editor, shape your mobile app experience, and book a demo with our team. That lets you build first and move faster once Shopify connection is available.",
    },
    {
      question: "What Shopify plans does AppDrop work with?",
      answer: "AppDrop is being designed for Shopify merchants across plan tiers, from growing stores to larger teams. Final availability will follow the Shopify App Store review process.",
    },
    {
      question: "Do I need to pay for an Apple Developer or Google Play account?",
      answer: "Yes, to publish apps you'll need an Apple Developer account ($99/year) and/or Google Play Developer account ($25 one-time). We'll guide you through the setup process.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-[var(--site-header-offset)] py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="v3-eyebrow text-primary before:bg-primary mx-auto mb-5">
            Good to know
          </span>
          <h2 className="font-display text-[1.65rem] sm:text-4xl lg:text-[56px] font-extrabold leading-[1.12] sm:leading-[1.05] tracking-tight text-foreground">
            Frequently asked
            <br />
            questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-3.5 sm:px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-[15px] sm:text-lg font-semibold py-4 sm:py-6 hover:no-underline gap-3 [&>svg]:shrink-0">
                  <span className="min-w-0 flex-1 pr-1">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
