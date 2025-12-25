import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Terms = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Terms of Service - AppDrop</title>
        <meta 
          name="description" 
          content="AppDrop's terms of service outline the rules and regulations for using our platform." 
        />
        <link rel="canonical" href="https://appdrop.io/terms" />
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
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-8">
                Last updated: December 2024
              </p>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-muted-foreground">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p>
                      By accessing or using AppDrop's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                    <p className="mb-4">
                      Permission is granted to temporarily access and use AppDrop's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Modify or copy our materials</li>
                      <li>Use materials for commercial purposes</li>
                      <li>Attempt to reverse engineer any software</li>
                      <li>Remove any copyright or proprietary notations</li>
                      <li>Transfer materials to another person</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Responsibilities</h2>
                    <p>
                      You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Availability</h2>
                    <p>
                      AppDrop reserves the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                    <p>
                      In no event shall AppDrop or its suppliers be liable for any damages arising out of the use or inability to use our services. This includes, but is not limited to, damages for loss of data or profit.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
                    <p>
                      These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
                    <p>
                      We reserve the right to update these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page with an updated revision date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
                    <p>
                      If you have any questions about these Terms of Service, please contact us at legal@appdrop.io.
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

export default Terms;
