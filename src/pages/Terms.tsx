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
        <title>Terms of Use - AppDrop</title>
        <meta
          name="description"
          content="AppDrop Terms of Use — the legally binding agreement between you and DoMySale Private Limited for using the AppDrop Platform."
        />
        <link rel="canonical" href="https://appdrop.co/terms" />
      </Helmet>

      <div className="min-h-dvh bg-background">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        <main className="pt-[var(--site-header-offset)] pb-20">
          <section className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms of Use
              </h1>
              <p className="text-muted-foreground mb-8">
                Effective Date: June 2026 · Last Updated: June 2026
              </p>

              <div className="prose prose-base sm:prose-lg max-w-none break-words">
                <div className="space-y-8 text-muted-foreground">
                  <section>
                    <p className="mb-4">
                      Welcome to AppDrop, a product of DoMySale Private Limited (CIN:
                      U74999RJ2020PTC069088; GSTIN: 08AAHCD7765P1C2), a company
                      incorporated under the Companies Act, 2013, having its registered
                      office at No. 44, New Manglam Complex, Shobhagpura, Udaipur,
                      Rajasthan – 313001, India (hereinafter referred to as
                      &quot;AppDrop&quot;, &quot;we&quot;, &quot;us&quot;, or
                      &quot;our&quot;).
                    </p>
                    <p className="mb-4">
                      AppDrop operates the website at www.appdrop.co (&quot;Website&quot;)
                      and provides a cloud-based software-as-a-service platform
                      (&quot;AppDrop Platform&quot;) that enables Shopify merchants to build,
                      launch, and manage branded mobile applications for iOS (Apple App
                      Store) and Android (Google Play Store) (each, a &quot;Merchant
                      App&quot;).
                    </p>
                    <p className="font-medium text-foreground">
                      PLEASE READ THESE TERMS OF USE (&quot;TERMS&quot;) CAREFULLY BEFORE
                      ACCESSING OR USING THE WEBSITE OR APPDROP PLATFORM. THESE TERMS
                      CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU (THE MERCHANT /
                      USER) AND DOMYSALE PRIVATE LIMITED. BY ACCESSING THE WEBSITE,
                      COMPLETING THE REGISTRATION PROCESS, CLICKING &quot;I AGREE&quot;, OR
                      EXECUTING AN ORDER FORM, YOU CONFIRM THAT: (1) YOU HAVE READ AND
                      UNDERSTOOD THESE TERMS; (2) YOU ARE COMPETENT TO CONTRACT UNDER THE
                      INDIAN CONTRACT ACT, 1872; AND (3) YOU ARE AUTHORISED TO BIND THE
                      ENTITY YOU REPRESENT. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE
                      APPDROP PLATFORM OR SERVICES.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      1. Definitions
                    </h2>
                    <p className="mb-4">
                      In these Terms, unless the context otherwise requires:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        &quot;Account&quot; means the registered account created by you on
                        the AppDrop Platform.
                      </li>
                      <li>
                        &quot;Merchant App&quot; means the iOS and/or Android mobile
                        application built for your Shopify store using the AppDrop
                        Platform.
                      </li>
                      <li>
                        &quot;AppDrop Platform&quot; means the software-as-a-service
                        platform, tools, templates, designs, and associated infrastructure
                        provided by AppDrop.
                      </li>
                      <li>
                        &quot;AppDrop Properties&quot; means the Website, AppDrop Platform,
                        Services, Professional Services, and all related content, software,
                        tools, and materials.
                      </li>
                      <li>
                        &quot;Services&quot; means access to the AppDrop Platform, AppDrop
                        Tools, Professional Services (if applicable), and all related
                        features offered through AppDrop Properties.
                      </li>
                      <li>
                        &quot;AppDrop Tools&quot; means the design, template, layout, and
                        publishing tools made available through the AppDrop Platform to
                        create and publish Merchant Apps.
                      </li>
                      <li>
                        &quot;Your Content&quot; means all text, images, data, materials,
                        and other content you upload, submit, or make available through
                        AppDrop Properties.
                      </li>
                      <li>
                        &quot;User Content&quot; means content made available by end users
                        of your Merchant App.
                      </li>
                      <li>
                        &quot;Order Form&quot; means any written order, agreement, or
                        subscription confirmation executed between you and AppDrop.
                      </li>
                      <li>
                        &quot;Professional Services&quot; means custom implementation,
                        onboarding, design, or other value-added services agreed upon
                        separately.
                      </li>
                      <li>
                        &quot;Third-Party Account&quot; means your Shopify store account or
                        any other compatible third-party e-commerce platform account.
                      </li>
                      <li>
                        &quot;App Store&quot; means the Apple App Store and/or Google Play
                        Store, as applicable.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      2. Platform Services
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.1 Description of Services
                    </h3>
                    <p className="mb-4">
                      AppDrop makes available the AppDrop Platform and AppDrop Tools to
                      enable merchants to build, customise, and publish Merchant Apps on
                      the Apple App Store and/or Google Play Store. The Services include
                      access to the AppDrop Platform, Professional Services (where
                      applicable), and all related content, tools, and resources.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.2 Licence Grant
                    </h3>
                    <p className="mb-4">
                      Subject to your compliance with these Terms and the applicable Order
                      Form, AppDrop grants you a limited, non-exclusive, non-transferable,
                      non-sublicensable, revocable licence to: (a) access and use the
                      AppDrop Properties to create and manage your Merchant Apps; and (b)
                      use the AppDrop Tools solely for your internal business purposes.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.3 Professional Services
                    </h3>
                    <p className="mb-4">
                      AppDrop may provide implementation, onboarding, custom design, or
                      other professional services as agreed in an Order Form. Such services
                      will be governed by the terms of the applicable Order Form and the
                      provisions of these Terms. Fees for Professional Services are payable
                      in advance unless otherwise specified in the Order Form.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.4 Platform Updates
                    </h3>
                    <p>
                      AppDrop may update, modify, or enhance the AppDrop Properties from
                      time to time. You agree to accept such updates, which may be
                      necessary for continued access to certain features.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      3. Registration and Account
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      3.1 Eligibility
                    </h3>
                    <p className="mb-4">
                      You must be at least 18 years of age and legally competent to
                      contract under the Indian Contract Act, 1872 to register for and use
                      the Services. By registering, you represent and warrant that you meet
                      these requirements.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      3.2 Account Registration
                    </h3>
                    <p className="mb-4">
                      To access the AppDrop Platform, you must register an Account and
                      connect your Shopify Third-Party Account. You agree to provide
                      accurate, complete, and current information during registration and
                      to promptly update it when necessary. You are responsible for
                      maintaining the confidentiality of your Account credentials and for
                      all activities occurring under your Account.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      3.3 Connecting Your Shopify Account
                    </h3>
                    <p className="mb-4">
                      To use AppDrop, you must grant AppDrop access to your Shopify
                      developer account. By doing so, you authorise AppDrop to access,
                      store, and process Third-Party Account Content necessary to operate the
                      Services and your Merchant Apps. AppDrop will handle such access in
                      accordance with the AppDrop Privacy Policy.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      3.4 Merchant App Ownership
                    </h3>
                    <p className="mb-4">
                      You will be the designated owner of your Merchant Apps within the
                      applicable App Stores. You are solely responsible for: (a) providing
                      compliant terms of use and a privacy policy to your Merchant
                      App&apos;s end users; (b) complying with applicable App Store
                      guidelines and requirements; (c) complying with all applicable laws,
                      including the Information Technology Act, 2000 and rules thereunder,
                      the Consumer Protection Act, 2019, and app store policies; and (d)
                      all activities occurring through your Merchant Apps.
                    </p>
                    <p>
                      Except with respect to Your Content, all intellectual property rights
                      in and to the AppDrop Platform and Merchant Apps (excluding Your
                      Content) vest in and remain with AppDrop.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      4. Content and Your Responsibilities
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      4.1 Your Content
                    </h3>
                    <p className="mb-4">
                      You are solely responsible for all content you upload, post, or make
                      available through AppDrop Properties. You represent and warrant that
                      Your Content: (a) does not infringe any third-party intellectual
                      property rights; (b) does not violate any applicable law; and (c) is
                      not defamatory, obscene, harmful, or otherwise objectionable.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      4.2 Licence to Your Content
                    </h3>
                    <p className="mb-4">
                      You retain full ownership of Your Content. By submitting Your Content
                      to AppDrop Properties, you grant AppDrop a non-exclusive, royalty-free,
                      worldwide licence to use, display, reproduce, and adapt Your Content
                      solely as necessary to operate the Services and deliver your Merchant
                      Apps. AppDrop will not use your brand assets, product imagery, or
                      trade name for promotional purposes without your prior written
                      approval.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      4.3 Content Moderation
                    </h3>
                    <p className="mb-4">
                      AppDrop reserves the right (but has no obligation) to review, remove,
                      or refuse any content that violates these Terms or applicable law.
                      AppDrop may suspend or terminate access to Merchant Apps that contain
                      unlawful or prohibited content.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      4.4 No Obligation to Store Content
                    </h3>
                    <p>
                      AppDrop is not obligated to store Your Content indefinitely. Upon
                      termination of your Account, AppDrop may delete Your Content from its
                      systems without liability.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      5. Intellectual Property
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.1 AppDrop&apos;s Intellectual Property
                    </h3>
                    <p className="mb-4">
                      All rights, title, and interest in and to AppDrop Properties
                      (including software, designs, templates, tools, documentation, and
                      trademarks) are and shall remain the exclusive property of DoMySale
                      Private Limited or its licensors. Nothing in these Terms transfers any
                      intellectual property rights to you.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.2 Trademarks
                    </h3>
                    <p className="mb-4">
                      The &quot;AppDrop&quot; name, logo, and associated marks are
                      trademarks of DoMySale Private Limited. You may not use these marks
                      without prior written consent.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      5.3 Feedback
                    </h3>
                    <p>
                      Any feedback, suggestions, or ideas you submit to AppDrop may be used
                      by AppDrop without restriction or compensation to you, and you hereby
                      assign to AppDrop all rights in such feedback.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      6. Prohibited Conduct
                    </h2>
                    <p className="mb-4">You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Infringe any third-party intellectual property, privacy, or other
                        rights.
                      </li>
                      <li>
                        Upload or transmit unlawful, defamatory, fraudulent, or harmful
                        content.
                      </li>
                      <li>
                        Reverse-engineer, decompile, or attempt to extract the source code of
                        AppDrop Properties.
                      </li>
                      <li>
                        Resell, sublicense, or commercially exploit AppDrop Properties
                        without authorisation.
                      </li>
                      <li>
                        Use AppDrop Properties to build a competing product or service.
                      </li>
                      <li>
                        Introduce viruses, malware, or any code that could disrupt or damage
                        AppDrop Properties.
                      </li>
                      <li>
                        Scrape, crawl, or use automated tools to access AppDrop Properties.
                      </li>
                      <li>
                        Attempt to gain unauthorised access to any part of AppDrop
                        Properties.
                      </li>
                      <li>
                        Use AppDrop Properties for any purpose prohibited by applicable
                        Indian or international law.
                      </li>
                      <li>
                        Create Merchant Apps that promote illegal substances, adult content,
                        or activities prohibited under Indian law.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      7. Fees and Payment
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      7.1 Subscription Fees
                    </h3>
                    <p className="mb-4">
                      You agree to pay the applicable Service Subscription Fee as set out in
                      your Order Form or at the time of Account creation. All fees are
                      exclusive of applicable taxes, including Goods and Services Tax (GST)
                      as levied under the CGST Act, 2017 and applicable state GST laws.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      7.2 Taxes
                    </h3>
                    <p className="mb-4">
                      You are responsible for paying all applicable taxes, including GST,
                      on the Services. AppDrop will issue GST-compliant invoices as required
                      under Indian law. Where GST is applicable, it will be charged
                      additionally at the prevailing rate.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      7.3 Auto-Renewal
                    </h3>
                    <p className="mb-4">
                      Your subscription will automatically renew at the end of each
                      subscription period unless cancelled at least 30 days before the
                      renewal date. You may cancel by logging in to your Account settings
                      or by writing to us at{" "}
                      <a
                        href="mailto:hello@appdrop.co"
                        className="text-primary hover:underline"
                      >
                        hello@appdrop.co
                      </a>
                      .
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      7.4 Refunds
                    </h3>
                    <p className="mb-4">
                      Except as required by applicable law (including the Consumer
                      Protection Act, 2019), all fees are non-refundable. No pro-rated
                      refunds are provided for partial subscription periods.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      7.5 Disputed Charges
                    </h3>
                    <p className="mb-4">
                      You must raise any billing disputes in writing within 30 days of
                      receiving your invoice. Disputes should be sent to{" "}
                      <a
                        href="mailto:hello@appdrop.co"
                        className="text-primary hover:underline"
                      >
                        hello@appdrop.co
                      </a>
                      . After 30 days, all charges will be deemed accepted.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      7.6 Professional Services Fees
                    </h3>
                    <p>
                      Fees for Professional Services will be specified in the applicable
                      Order Form and are payable in advance. Unused hours from a purchased
                      package are non-refundable.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      8. Third-Party Services and App Stores
                    </h2>
                    <p className="mb-4">
                      AppDrop Properties may integrate with or link to third-party
                      services, including Shopify and the App Stores. AppDrop does not
                      endorse or control such third-party services and is not responsible
                      for their content, policies, or practices. Your use of third-party
                      services is governed by their respective terms.
                    </p>
                    <p>
                      The availability of your Merchant Apps through the App Stores is
                      subject to the policies of Apple Inc. and Google LLC respectively.
                      AppDrop is solely responsible for the AppDrop Platform and Services.
                      Apple and Google are not parties to these Terms but may be
                      third-party beneficiaries with respect to App Store-sourced Merchant
                      Apps, to the extent required by their respective policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      9. Privacy and Data Protection
                    </h2>
                    <p>
                      AppDrop collects, processes, and stores personal data in accordance
                      with its Privacy Policy, available at{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        www.appdrop.co/privacy
                      </a>
                      . By using AppDrop Properties, you consent to such processing.
                      AppDrop complies with applicable Indian data protection laws,
                      including the Information Technology (Reasonable Security Practices
                      and Procedures and Sensitive Personal Data or Information) Rules,
                      2011 and, upon enforcement, the Digital Personal Data Protection Act,
                      2023.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      10. Indemnification
                    </h2>
                    <p className="mb-4">
                      You agree to indemnify, defend, and hold harmless AppDrop, DoMySale
                      Private Limited, and their respective officers, directors, employees,
                      and agents from and against any claims, liabilities, losses, damages,
                      and expenses (including reasonable legal fees) arising out of or
                      relating to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your Content or User Content.</li>
                      <li>Your violation of these Terms or applicable law.</li>
                      <li>
                        Your infringement of any third-party intellectual property or other
                        rights.
                      </li>
                      <li>
                        The provision of your products or services through Merchant Apps.
                      </li>
                      <li>
                        Your breach of any App Store policy or applicable consumer
                        protection law.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      11. Disclaimer of Warranties
                    </h2>
                    <p>
                      THE APPDROP PLATFORM AND ALL SERVICES ARE PROVIDED ON AN &quot;AS
                      IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY
                      KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY
                      APPLICABLE LAW, APPDROP DISCLAIMS ALL WARRANTIES, INCLUDING WARRANTIES
                      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                      NON-INFRINGEMENT. APPDROP DOES NOT WARRANT THAT THE PLATFORM WILL BE
                      UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL BE
                      CORRECTED.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      12. Limitation of Liability
                    </h2>
                    <p className="mb-4">
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW,
                      APPDROP&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIM ARISING
                      OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE
                      TOTAL FEES PAID BY YOU TO APPDROP IN THE THREE (3) MONTHS PRECEDING
                      THE EVENT GIVING RISE TO THE CLAIM.
                    </p>
                    <p className="mb-4">
                      APPDROP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                      CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA,
                      BUSINESS, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE
                      THE SERVICES, EVEN IF APPDROP HAS BEEN ADVISED OF THE POSSIBILITY OF
                      SUCH DAMAGES.
                    </p>
                    <p>
                      Nothing in these Terms limits or excludes liability for death or
                      personal injury caused by negligence, fraud, or any other liability
                      that cannot be excluded under applicable Indian law.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      13. Term and Termination
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      13.1 Term
                    </h3>
                    <p className="mb-4">
                      These Terms commence on the date you first access or use AppDrop
                      Properties and continue until terminated.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      13.2 Termination by AppDrop
                    </h3>
                    <p className="mb-4">
                      AppDrop may suspend or terminate your Account and access to Services
                      immediately without notice if: (a) you materially breach these Terms;
                      (b) payment is not made when due; or (c) AppDrop is required to do so
                      by law.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      13.3 Termination by You
                    </h3>
                    <p className="mb-4">
                      You may terminate these Terms at any time by closing your Account and
                      notifying us in writing at{" "}
                      <a
                        href="mailto:hello@appdrop.co"
                        className="text-primary hover:underline"
                      >
                        hello@appdrop.co
                      </a>
                      . Termination does not entitle you to a refund of any fees already
                      paid.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      13.4 Effect of Termination
                    </h3>
                    <p>
                      Upon termination, your right to access AppDrop Properties ceases
                      immediately. AppDrop may delete your Account data and Your Content.
                      Provisions that by their nature should survive termination
                      (including intellectual property, payment obligations, disclaimer,
                      limitation of liability, and dispute resolution) shall survive.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      14. Governing Law and Dispute Resolution
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      14.1 Governing Law
                    </h3>
                    <p className="mb-4">
                      These Terms shall be governed by and construed in accordance with the
                      laws of India, without regard to its conflict of laws principles.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      14.2 Amicable Resolution
                    </h3>
                    <p className="mb-4">
                      In the event of any dispute, both parties shall first attempt to
                      resolve it amicably by written notice to the other party. If the
                      dispute is not resolved within 30 days of such notice, either party
                      may initiate arbitration as set out below.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      14.3 Arbitration
                    </h3>
                    <p className="mb-4">
                      Any unresolved dispute arising out of or in connection with these
                      Terms shall be referred to and finally resolved by arbitration under
                      the Arbitration and Conciliation Act, 1996 (as amended). The
                      arbitration shall be conducted by a sole arbitrator mutually agreed
                      upon by the parties, or failing agreement, appointed in accordance
                      with the Act. The seat and venue of arbitration shall be Udaipur,
                      Rajasthan. The language of the arbitration shall be English.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      14.4 Jurisdiction
                    </h3>
                    <p>
                      Subject to the arbitration clause above, the courts at Udaipur,
                      Rajasthan shall have exclusive jurisdiction over any matter arising
                      out of these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      15. Consumer Grievance Redressal
                    </h2>
                    <p className="mb-4">
                      In accordance with the Consumer Protection (E-Commerce) Rules, 2020
                      and the Information Technology Act, 2000:
                    </p>
                    <p className="font-semibold text-foreground mb-2">Grievance Officer:</p>
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
                      Grievances will be acknowledged within 48 hours and resolved within
                      30 days of receipt, to the extent reasonably practicable.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      16. General Provisions
                    </h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.1 Entire Agreement
                    </h3>
                    <p className="mb-4">
                      These Terms, together with the applicable Order Form(s) and Privacy
                      Policy, constitute the entire agreement between you and AppDrop with
                      respect to the subject matter hereof and supersede all prior
                      discussions and agreements.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.2 Amendments
                    </h3>
                    <p className="mb-4">
                      AppDrop reserves the right to modify these Terms at any time. Updated
                      Terms will be posted on www.appdrop.co with a revised effective date.
                      Your continued use of AppDrop Properties after such posting
                      constitutes your acceptance of the updated Terms. For material changes,
                      AppDrop will notify you by email at least 15 days in advance.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.3 Severability
                    </h3>
                    <p className="mb-4">
                      If any provision of these Terms is found to be invalid or
                      unenforceable, the remaining provisions shall continue in full force
                      and effect.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.4 Waiver
                    </h3>
                    <p className="mb-4">
                      Failure by AppDrop to enforce any provision of these Terms shall not
                      constitute a waiver of that provision.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.5 Assignment
                    </h3>
                    <p className="mb-4">
                      You may not assign or transfer your rights or obligations under these
                      Terms without AppDrop&apos;s prior written consent. AppDrop may assign
                      these Terms to an affiliate or successor entity without restriction.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.6 Force Majeure
                    </h3>
                    <p className="mb-4">
                      AppDrop shall not be liable for any delay or failure to perform its
                      obligations due to circumstances beyond its reasonable control,
                      including acts of God, natural disasters, war, civil unrest,
                      government action, pandemic, or failure of third-party internet
                      infrastructure.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.7 Electronic Communications
                    </h3>
                    <p className="mb-4">
                      By using AppDrop Properties, you consent to receiving electronic
                      communications from AppDrop, including notices, agreements, and
                      invoices, which satisfy any requirement for written communication
                      under applicable law.
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      16.8 Compliance with Laws
                    </h3>
                    <p>
                      You are responsible for ensuring your use of AppDrop Properties and
                      your Merchant Apps comply with all applicable laws, including the
                      Information Technology Act, 2000, Consumer Protection Act, 2019, and
                      all applicable App Store policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      17. Contact Us
                    </h2>
                    <p className="mb-4">
                      For any questions, concerns, or notices regarding these Terms, please
                      contact:
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <strong className="text-foreground">Company:</strong> DoMySale
                        Private Limited (Operating as AppDrop)
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

        <Footer />

        <WaitlistModal
          isOpen={isWaitlistOpen}
          onClose={() => setIsWaitlistOpen(false)}
        />
      </div>
    </>
  );
};

export default Terms;
