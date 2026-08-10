import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import appdropLogoIcon from "@/assets/appdrop-logo-icon.png";
import parthPhoto from "@/assets/parth-pahuja.png";

const heroMeta = [
  { value: "2026", label: "founded" },
  { value: "No-code", label: "visual builder" },
  { value: "iOS + Android", label: "from one canvas" },
];

const chapters = [
  {
    num: "01",
    title: "The problem",
    body: "Mobile commerce is growing rapidly, but most Shopify merchants can't afford or access native mobile apps. Traditional app development is expensive, complex, and slow.",
  },
  {
    num: "02",
    title: "The insight",
    body: "Merchants don't need more agencies or bigger budgets — they need a faster path. We knew there had to be a better way to go from store to app.",
  },
  {
    num: "03",
    title: "The product",
    body: "AppDrop is a visual Builder that helps merchants design a beautiful, high-performing mobile app before the heavy technical work begins. No code. Clear workflow. A faster path to mobile.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Democratizing mobile commerce for every Shopify merchant, regardless of technical expertise or budget.",
  },
  {
    icon: Users,
    title: "Customer-First",
    description:
      "Every feature starts with understanding merchant needs. Your success is our success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Pushing the boundaries of what's possible with mobile technology to give you the best tools.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Helping merchants grow their businesses and connect with customers in meaningful ways.",
  },
];

const LinkedInIcon = () => (
  <span className="li-btn-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM0 8h5v16H0V8Zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.74 24 10.1 24 14.36V24h-5v-8.5c0-2.03-.73-3.42-2.55-3.42-1.39 0-2.22.94-2.58 1.84-.14.32-.17.77-.17 1.22V24h-5V8Z" />
    </svg>
  </span>
);

const About = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About AppDrop — Empowering Shopify Merchants</title>
        <meta
          name="description"
          content="AppDrop is a no-code mobile app builder for Shopify stores. Meet the team building mobile commerce for every merchant."
        />
        <link rel="canonical" href="https://appdrop.co/about" />
      </Helmet>

      <div className="min-h-dvh bg-background w-full">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

        <main className="pt-[var(--site-header-offset)]">
          <section className="about-hero">
            <img
              src={appdropLogoIcon}
              alt=""
              aria-hidden="true"
              className="about-hero-mark"
            />
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="about-kicker">About AppDrop</div>
                <h1>
                  Mobile apps, within reach of <em>every merchant</em>.
                </h1>
                <p className="about-hero-sub">
                  We believe every Shopify store deserves a world-class mobile app
                  experience — not just the brands that can afford an engineering team.
                </p>
                <div className="about-hero-meta">
                  {heroMeta.map((item) => (
                    <div key={item.label}>
                      <b>{item.value}</b>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="about-story">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="about-story-head mb-10 sm:mb-14"
              >
                <div className="about-kicker">Our story</div>
                <h2>Why we&apos;re building AppDrop</h2>
              </motion.div>

              <div>
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="about-chapter"
                  >
                    <div className="about-ch-num">{chapter.num}</div>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="about-values">
            <div className="section-container about-values-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="about-values-left"
              >
                <div className="about-kicker">Our values</div>
                <h2>The principles behind every decision</h2>
                <p>
                  Four things we hold ourselves to, in the product and in every
                  conversation with merchants.
                </p>
              </motion.div>

              <div>
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="about-vrow"
                  >
                    <div className="about-vicon">
                      <value.icon className="w-[22px] h-[22px]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="about-team" id="team">
            <div className="about-team-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="about-kicker">Who&apos;s behind AppDrop</div>
                <h2>Built by people you can reach</h2>
                <p className="about-team-lead">
                  AppDrop is built and run by a small, hands-on team obsessed with
                  mobile commerce. We&apos;re not a faceless tool — reach out anytime
                  and you&apos;ll talk to the people who built it.
                </p>
                <p className="about-team-contact">
                  Questions, demos, or partnerships:
                  <br />
                  <Link to="/contact">Get in touch via our contact page</Link>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="about-founder">
                  <div className="about-founder-top">
                    <img
                      src={parthPhoto}
                      alt="Parth Pahuja"
                      className="about-founder-photo"
                      width={96}
                      height={96}
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <h3>Parth Pahuja</h3>
                      <div className="about-founder-role">Co-Founder &amp; CTO</div>
                    </div>
                  </div>
                  <p className="about-founder-bio">
                    Building tools that help Shopify merchants own their mobile channel.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/parth-pahuja/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="li-btn"
                    aria-label="Parth Pahuja on LinkedIn"
                  >
                    <LinkedInIcon />
                    <span className="li-btn-label">Connect on LinkedIn</span>
                    <span className="li-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="about-cta">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="about-cta-card"
              >
                <div className="about-cta-inner">
                  <h2>Ready to Build Your App?</h2>
                  <p>
                    Book a Builder walkthrough and prepare your Shopify mobile app
                    while our Shopify App Store listing is under review.
                  </p>
                  <button
                    type="button"
                    className="about-cta-btn"
                    onClick={() => setIsWaitlistOpen(true)}
                  >
                    Book Demo
                  </button>
                </div>
              </motion.div>
            </div>
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

export default About;
