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
          content="AppDrop's privacy policy explains how DoMySale Private Limited collects, uses, stores, and protects your personal data."
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Effective Date: June 2026 · Last Updated: June 2026
              </p>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-8 text-muted-foreground">
                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      1. Introduction
                    </h2>
                    <p className="mb-4">
                      DoMySale Private Limited (CIN: U74999RJ2020PTC069088), operating as
                      AppDrop (&quot;AppDrop&quot;, &quot;we&quot;, &quot;us&quot;, or
                      &quot;our&quot;), is a company incorporated under the Companies Act,
                      2013. We operate the website at www.appdrop.co and provide a
                      cloud-based software-as-a-service platform (the &quot;AppDrop
                      Platform&quot;) that enables Shopify merchants to build, launch, and
                      manage branded mobile applications for iOS and Android (each, a
                      &quot;Merchant App&quot;).
                    </p>
                    <p className="mb-4">
                      This Privacy Policy explains how we collect, use, store, share, and
                      protect your personal data when you access or use AppDrop Properties
                      (our website, platform, and services). It also describes your rights
                      under applicable Indian law, including the Information Technology
                      Act, 2000, the Information Technology (Reasonable Security Practices
                      and Procedures and Sensitive Personal Data or Information) Rules,
                      2011 (&quot;SPDI Rules&quot;), and the Digital Personal Data
                      Protection Act, 2023 (&quot;DPDP Act&quot;) (to the extent in force).
                    </p>
                    <p className="font-medium text-foreground">
                      BY ACCESSING OR USING APPDROP PROPERTIES, YOU EXPRESSLY CONSENT TO
                      THE COLLECTION, PROCESSING, AND USE OF YOUR PERSONAL DATA AS
                      DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT
                      USE OUR WEBSITE OR PLATFORM.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      2. Personal Data We Collect
                    </h2>
                    <p className="mb-4">
                      We collect only the data that is necessary to deliver and improve our
                      services. The types of data we collect include:
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.1 Data You Provide Directly
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>
                        Account registration details: name, business name, email address,
                        and password.
                      </li>
                      <li>
                        Billing and payment information: invoicing details required to
                        process subscription payments (we do not store card numbers, CVV,
                        or expiry dates — payments are processed by third-party payment
                        gateways).
                      </li>
                      <li>
                        Shopify store information: details about your Shopify store and
                        products, shared when you connect your Shopify account to AppDrop.
                      </li>
                      <li>
                        Communications: any messages, feedback, or support queries you send
                        us.
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.2 Data Collected Automatically
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>
                        Device and browser information: IP address, browser type, operating
                        system, and device identifiers.
                      </li>
                      <li>
                        Usage data: pages visited, features used, time and date of access,
                        and clickstream data.
                      </li>
                      <li>
                        Cookies and similar tracking technologies: as described in Section
                        6 below.
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.3 Data from Third-Party Accounts (Shopify)
                    </h3>
                    <p className="mb-4">
                      When you connect your Shopify account to AppDrop, we receive access
                      to information stored in your Shopify account, including your store
                      data, product listings, and customer transaction information. The
                      scope of this access depends on the permissions you grant and
                      Shopify&apos;s applicable privacy settings.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.4 End-Customer Data
                    </h3>
                    <p>
                      When consumers purchase through a Merchant App built on our platform,
                      we may process transaction data such as name, email address, and
                      purchase details (End-Customer Data). You, as the merchant, are
                      responsible for obtaining all consents required by law from your end
                      customers for our processing of such data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      3. How We Use Your Data
                    </h2>
                    <p className="mb-4">
                      We use your personal data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To create, maintain, and secure your AppDrop Account.</li>
                      <li>
                        To provide, operate, and improve the AppDrop Platform and Merchant
                        Apps.
                      </li>
                      <li>
                        To process subscription payments and issue GST-compliant invoices.
                      </li>
                      <li>
                        To send transactional communications such as account alerts,
                        subscription renewals, and support responses.
                      </li>
                      <li>
                        To send promotional communications and product updates — you may
                        opt out at any time.
                      </li>
                      <li>
                        To analyse platform usage, monitor performance, and enhance user
                        experience.
                      </li>
                      <li>
                        To detect, prevent, and investigate fraud, security incidents, or
                        violations of our Terms of Use.
                      </li>
                      <li>
                        To comply with applicable legal obligations and respond to lawful
                        requests from government authorities.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      4. Legal Basis for Processing
                    </h2>
                    <p className="mb-4">
                      We process your personal data on the following legal bases under
                      applicable Indian law:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>
                        Consent: where you have provided explicit, informed consent (e.g.,
                        marketing communications, cookies).
                      </li>
                      <li>
                        Contractual necessity: where processing is necessary to provide the
                        services you have subscribed to.
                      </li>
                      <li>
                        Legal obligation: where we are required to process data to comply
                        with applicable law.
                      </li>
                      <li>
                        Legitimate interests: where processing is necessary for our
                        legitimate business interests (e.g., security, fraud prevention,
                        platform improvement), provided your interests and fundamental
                        rights do not override those interests.
                      </li>
                    </ul>
                    <p>
                      You may withdraw consent at any time for consent-based processing;
                      however, withdrawal will not affect the lawfulness of processing
                      carried out before withdrawal.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      5. Sharing and Disclosure of Your Data
                    </h2>
                    <p className="mb-4">
                      We do not sell your personal data. We may share your data only in
                      the following limited circumstances:
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.1 Service Providers
                    </h3>
                    <p className="mb-4">
                      We share data with trusted third-party service providers who assist
                      in operating AppDrop, including cloud hosting providers, payment
                      processors, analytics tools, and customer support platforms. These
                      providers are contractually bound to process your data only for the
                      purposes we specify and in accordance with applicable law.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.2 App Stores
                    </h3>
                    <p className="mb-4">
                      In connection with the publication of your Merchant Apps, certain
                      information may be shared with Apple Inc. (Apple App Store) and
                      Google LLC (Google Play Store) in accordance with their respective
                      developer policies.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.3 Business Transfers
                    </h3>
                    <p className="mb-4">
                      If DoMySale Private Limited undergoes a merger, acquisition,
                      restructuring, or sale of assets, your personal data may be
                      transferred to the acquiring entity, subject to the same protections
                      described in this Privacy Policy.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.4 Legal and Regulatory Disclosure
                    </h3>
                    <p className="mb-4">
                      We may disclose your personal data if required to do so by law, court
                      order, or a request from a competent government or law enforcement
                      authority, or where we believe in good faith that disclosure is
                      necessary to protect our rights, your safety, or the safety of
                      others.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.5 With Your Consent
                    </h3>
                    <p>
                      We may share data with third parties in any other manner with your
                      prior explicit consent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      6. Cookies and Tracking Technologies
                    </h2>
                    <p className="mb-4">
                      We use cookies and similar technologies (such as web beacons and pixel
                      tags) to enhance your experience on the AppDrop Platform, analyse
                      usage patterns, and deliver relevant communications.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      6.1 Types of Cookies We Use
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>
                        Essential cookies: required for the platform to function correctly
                        (e.g., session management, security).
                      </li>
                      <li>
                        Analytics cookies: help us understand how users interact with the
                        platform so we can improve it.
                      </li>
                      <li>
                        Preference cookies: remember your settings and choices for future
                        visits.
                      </li>
                      <li>
                        Marketing cookies: used to track interactions with promotional
                        content. These are only placed with your consent.
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      6.2 Managing Cookies
                    </h3>
                    <p>
                      You may disable or delete cookies through your browser settings at
                      any time. Please note that disabling certain cookies may affect the
                      functionality of the AppDrop Platform. For essential cookies, no
                      opt-out is available as they are strictly necessary for service
                      delivery.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      7. Data Retention
                    </h2>
                    <p className="mb-4">
                      We retain your personal data for as long as your Account remains
                      active or as necessary to provide you with the Services. Specifically:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Account data is retained for the duration of your subscription and
                        for up to 90 days after account closure for backup and compliance
                        purposes.
                      </li>
                      <li>
                        Billing records and invoices are retained for 7 years as required
                        under the GST and income tax laws of India.
                      </li>
                      <li>
                        End-Customer Data is retained for as long as necessary to fulfil
                        the transaction and applicable legal obligations.
                      </li>
                      <li>
                        On written request by you, we will delete your personal data
                        within 14 days, except where retention is required by law.
                      </li>
                      <li>
                        Inactive accounts that have had no activity for 12 months may be
                        deleted after providing you with 30 days&apos; prior written notice.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      8. Data Security
                    </h2>
                    <p className="mb-4">
                      We implement reasonable security practices and procedures as required
                      under the SPDI Rules, 2011, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Encryption of data in transit using TLS/SSL.</li>
                      <li>
                        Access controls limiting data access to authorised personnel only.
                      </li>
                      <li>Regular security assessments and vulnerability scans.</li>
                      <li>Secure storage of data in protected data centres.</li>
                    </ul>
                    <p className="mb-4">
                      While we take all reasonable precautions to protect your data, no
                      method of transmission over the internet or electronic storage is
                      100% secure. You acknowledge this inherent risk when using digital
                      services.
                    </p>
                    <p>
                      In the event of a personal data breach that is likely to result in
                      harm to you, we will notify you and the relevant authorities as
                      required under applicable law, within the timelines prescribed.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      9. Cross-Border Data Transfers
                    </h2>
                    <p className="mb-4">
                      AppDrop operates primarily within India. Where your personal data is
                      transferred to, or processed in, countries outside India — for
                      example, by our cloud infrastructure providers or third-party service
                      providers — we ensure that such transfers are carried out only in
                      compliance with applicable Indian law, including Rule 7 of the
                      Information Technology (Reasonable Security Practices and Procedures
                      and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).
                    </p>
                    <p className="mb-4">
                      We transfer personal data or sensitive personal data outside India
                      only where:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>
                        The transfer is necessary for the performance of a lawful contract
                        between AppDrop and you, or between AppDrop and a third party
                        acting in your interest; or
                      </li>
                      <li>You have provided informed consent to such transfer.</li>
                    </ul>
                    <p className="mb-4">
                      In all cases of cross-border transfer, we will ensure that the
                      recipient country, organisation, or third party provides the same level
                      of data protection as is required under the SPDI Rules, 2011. We
                      achieve this by entering into contractual arrangements with the
                      recipient that: (a) require them to maintain the same level of
                      security and protection for your personal data as applicable under
                      Indian law; and (b) restrict them from using your personal data for
                      any purpose other than the specific purpose for which it was
                      transferred.
                    </p>
                    <p>
                      We will not transfer your sensitive personal data to any recipient
                      that does not meet this standard. Where the DPDP Act, 2023 imposes
                      additional conditions or restrictions on cross-border transfers upon
                      notification, we will comply with those requirements accordingly.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      10. Your Rights
                    </h2>
                    <p className="mb-4">
                      Under applicable Indian data protection law, you have the following
                      rights with respect to your personal data:
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      10.1 Right to Access
                    </h3>
                    <p className="mb-4">
                      You may request a summary of the personal data we hold about you and
                      the purposes for which it is being processed.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      10.2 Right to Correction
                    </h3>
                    <p className="mb-4">
                      You may update or correct inaccurate personal data by accessing your
                      Account settings or by contacting us.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      10.3 Right to Erasure
                    </h3>
                    <p className="mb-4">
                      You may request deletion of your personal data where it is no longer
                      necessary for the purposes for which it was collected, subject to our
                      legal retention obligations. Requests may be submitted to{" "}
                      <a
                        href="mailto:hello@appdrop.co"
                        className="text-primary hover:underline"
                      >
                        hello@appdrop.co
                      </a>
                      .
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      10.4 Right to Withdraw Consent
                    </h3>
                    <p className="mb-4">
                      Where processing is based on your consent, you may withdraw it at
                      any time. Withdrawal does not affect the lawfulness of processing
                      prior to withdrawal.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      10.5 Right to Nominate
                    </h3>
                    <p className="mb-4">
                      In accordance with the DPDP Act, 2023, you have the right to nominate
                      another individual to exercise your data rights in the event of your
                      death or incapacity, to the extent such provisions have been notified
                      and are in force.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      10.6 Right to Grievance Redressal
                    </h3>
                    <p>
                      You may raise concerns or complaints about our data practices with
                      our Grievance Officer. Details are set out in Section 12 below. To
                      exercise any of the above rights, please write to us at the contact
                      details provided in Section 12.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      11. Children&apos;s Privacy
                    </h2>
                    <p>
                      AppDrop is a business-to-business platform intended for use by adults
                      operating commercial Shopify stores. We do not knowingly collect
                      personal data from individuals under the age of 18. If we become
                      aware that a minor has provided us with personal data, we will
                      promptly delete it. If you believe we may hold data concerning a
                      minor, please contact us immediately at{" "}
                      <a
                        href="mailto:hello@appdrop.co"
                        className="text-primary hover:underline"
                      >
                        hello@appdrop.co
                      </a>
                      .
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      12. Grievance Officer
                    </h2>
                    <p className="mb-4">
                      In accordance with the Information Technology Act, 2000, Rule 5(9) of
                      the SPDI Rules, 2011, the Consumer Protection (E-Commerce) Rules,
                      2020, and the DPDP Act, 2023, we have designated a named Grievance
                      Officer to receive and address your concerns regarding our data
                      practices:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li>
                        <strong className="text-foreground">Name:</strong> Parth Pahuja
                      </li>
                      <li>
                        <strong className="text-foreground">Designation:</strong> Director,
                        DoMySale Private Limited
                      </li>
                      <li>
                        <strong className="text-foreground">Email:</strong>{" "}
                        <a
                          href="mailto:hello@appdrop.co"
                          className="text-primary hover:underline"
                        >
                          hello@appdrop.co
                        </a>
                      </li>
                      <li>
                        <strong className="text-foreground">Address:</strong> No. 44, New
                        Manglam Complex, Shobhagpura, Udaipur, Rajasthan – 313001, India
                      </li>
                      <li>
                        <strong className="text-foreground">Working Hours:</strong> Monday
                        to Friday, 10:00 AM – 6:00 PM IST (excluding public holidays)
                      </li>
                    </ul>
                    <p>
                      Grievances will be acknowledged within 48 hours of receipt. We will
                      make every reasonable effort to resolve the grievance within 30 days.
                      If you are dissatisfied with the resolution, you may approach the Data
                      Protection Board of India, once constituted under the DPDP Act, 2023.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      13. Governing Law and Jurisdiction
                    </h2>
                    <p className="mb-4">
                      This Privacy Policy and any dispute or claim arising out of or in
                      connection with it (including non-contractual disputes or claims)
                      shall be governed by and construed in accordance with the laws of the
                      Republic of India.
                    </p>
                    <p>
                      Subject to any mandatory arbitration or dispute resolution mechanism
                      that may apply, the courts at Udaipur, Rajasthan, India shall have
                      exclusive jurisdiction to settle any dispute or claim arising out of
                      or in connection with this Privacy Policy or its subject matter or
                      formation.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      14. Third-Party Websites and Services
                    </h2>
                    <p>
                      AppDrop Properties may contain links to third-party websites,
                      services, or integrations (including Shopify, App Stores, and
                      payment gateways). This Privacy Policy applies only to AppDrop. We
                      are not responsible for the privacy practices of third-party
                      services, and we encourage you to review their privacy policies before
                      providing any personal data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      15. Changes to This Privacy Policy
                    </h2>
                    <p>
                      We may update this Privacy Policy from time to time to reflect
                      changes in our practices, technology, or applicable law. When we make
                      material changes, we will notify you by email at the address
                      associated with your Account and/or by posting a notice on
                      www.appdrop.co, with the revised effective date. Your continued use of
                      AppDrop Properties after any such update constitutes your acceptance
                      of the revised Privacy Policy. We encourage you to review this page
                      periodically.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      16. Contact Us
                    </h2>
                    <p className="mb-4">
                      If you have any questions, concerns, or requests regarding this
                      Privacy Policy or the handling of your personal data, please contact
                      us at:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <strong className="text-foreground">Company:</strong> DoMySale
                        Private Limited (operating as AppDrop)
                      </li>
                      <li>
                        <strong className="text-foreground">Website:</strong>{" "}
                        <a
                          href="https://www.appdrop.co"
                          className="text-primary hover:underline"
                        >
                          www.appdrop.co
                        </a>
                      </li>
                      <li>
                        <strong className="text-foreground">Email:</strong>{" "}
                        <a
                          href="mailto:hello@appdrop.co"
                          className="text-primary hover:underline"
                        >
                          hello@appdrop.co
                        </a>
                      </li>
                      <li>
                        <strong className="text-foreground">Address:</strong> No. 44, New
                        Manglam Complex, Shobhagpura, Udaipur, Rajasthan – 313001, India
                      </li>
                      <li>
                        <strong className="text-foreground">CIN:</strong> U74999RJ2020PTC069088
                      </li>
                      <li>
                        <strong className="text-foreground">GSTIN:</strong> 08AAHCD7765P1C2
                      </li>
                    </ul>
                  </section>

                  <p className="text-sm pt-4 border-t border-border">
                    © 2026 DoMySale Private Limited. All rights reserved. | www.appdrop.co
                  </p>
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
