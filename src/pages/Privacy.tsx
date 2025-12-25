import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Privacy = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - AppDrop</title>
        <meta 
          name="description" 
          content="AppDrop's privacy policy explains how we collect, use, and protect your personal information." 
        />
        <link rel="canonical" href="https://appdrop.io/privacy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main className="pt-32 pb-20">
          <section className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-muted-foreground">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                    <p className="mb-4">
                      We collect information you provide directly to us, such as when you create an account, join our waitlist, or contact us for support.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Company information (company name, size, website)</li>
                      <li>Shopify store data when you connect your store</li>
                      <li>Usage data and analytics</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                    <p className="mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices, updates, and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Communicate about products, services, and events</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                    <p>
                      We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. We may share information with trusted third-party service providers who assist us in operating our platform, conducting our business, or serving our users.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                    <p>
                      We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
                    <p className="mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Opt out of marketing communications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us at privacy@appdrop.io.
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    </>
  );
};

export default Privacy;
