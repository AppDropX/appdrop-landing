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
      answer: "Yes! AppDrop is 100% no-code. Our drag-and-drop builder lets you design, customize, and publish your mobile app without writing a single line of code. If you can use Shopify, you can use AppDrop.",
    },
    {
      question: "Does AppDrop support both iOS and Android?",
      answer: "Absolutely. AppDrop creates native apps for both iOS (App Store) and Android (Google Play) from a single design. One builder, two platforms, zero extra work.",
    },
    {
      question: "Is the Shopify sync real-time?",
      answer: "Yes, our Shopify integration syncs in real-time. When you update products, prices, or inventory in Shopify, those changes automatically reflect in your mobile app within seconds.",
    },
    {
      question: "When will AppDrop launch?",
      answer: "We're currently in private beta with select merchants. Join our waitlist to get early access and be among the first to launch your mobile app when we open to the public.",
    },
    {
      question: "What Shopify plans does AppDrop work with?",
      answer: "AppDrop works with all Shopify plans, from Basic to Plus. No matter your store size or plan, you can create a native mobile app with AppDrop.",
    },
    {
      question: "Do I need to pay for an Apple Developer or Google Play account?",
      answer: "Yes, to publish apps you'll need an Apple Developer account ($99/year) and/or Google Play Developer account ($25 one-time). We'll guide you through the setup process.",
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Questions?{" "}
            <span className="gradient-text">We've Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AppDrop and building your mobile app.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                  {faq.question}
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
