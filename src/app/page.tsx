"use client";

import React from "react";
import { motion } from "framer-motion";

// Standalone Button so this page doesn't depend on external components
function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500/60 " +
        className
      }
    >
      {children}
    </button>
  );
}

// FULL: Clean, single-file AppDrop landing page with UI graphics and scroll animations
export default function AppDropLanding() {
  return (
    <div className="min-h-screen w-full font-sans text-white bg-black overflow-x-hidden">
      <FloatingShapes />

      <header className="relative z-20">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-20 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-black font-bold">AppDrop</div>
            {/* <span className="font-bold text-lg">AppDrop</span> */}
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <a className="text-gray-300 hover:text-white">Features</a>
            <a className="text-gray-300 hover:text-white">Pricing</a>
            <a className="text-gray-300 hover:text-white">Docs</a>
            <Button className="bg-purple-600 hover:bg-purple-700">Join Waitlist</Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main>
        <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pb-12">
          <GlowRings />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 drop-shadow-2xl"
          >
            Turn your Shopify store into a beautiful, native app — instantly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-6 max-w-2xl text-lg text-gray-300"
          >
            AppDrop is a drag-and-drop app builder that syncs with Shopify, so
            your store is available on users' devices with native performance,
            push notifications, and offline-ready screens.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg">Get Early Access</Button>
          </motion.div>

          <div className="mt-14 w-full flex justify-center">
            <PhoneMockup />
          </div>
        </section>

        {/* PARALLAX + PROBLEM/SOLUTION */}
        <ParallaxSection />

        {/* Feature Showcase + UI Preview */}
        <FeatureShowcase />

        {/* App UI Mockup horizontal scroll preview */}
        <AppUIPreview />

        {/* CTA strip */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-black">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to ship your store to devices?
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-gray-300 mb-6">
              Join the waitlist now and get early access, onboarding help and special pricing.
            </motion.p>
            <Button className="bg-pink-500 hover:bg-pink-600 px-8 py-3">Join Waitlist</Button>
          </div>
        </section>

        {/* Coming Soon footer */}
        <section className="py-12 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} AppDrop — Coming soon.</p>
        </section>
      </main>
    </div>
  );
}

/***********************************/
/* BACKGROUND SHAPES */
/***********************************/
function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {[...Array(8)].map((_, i) => {
        const size = 80 + i * 60;
        const top = (i * 13) % 100;
        const left = ((i * 23) + 7) % 100;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0], y: [0, -30, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity }}
            className="absolute rounded-3xl blur-3xl bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-indigo-600/10"
            style={{ width: size, height: size, left: `${left}%`, top: `${top}%`, transformOrigin: "center" }}
          />
        );
      })}
    </div>
  );
}

/***********************************/
/* GLOW RINGS */
/***********************************/
function GlowRings() {
  return <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_65%)]" />;
}

/***********************************/
/* PHONE MOCKUP (animated) */
/***********************************/
function PhoneMockup() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-[300px] md:w-[360px] lg:w-[420px] h-[640px] md:h-[720px] rounded-3xl bg-[#0f1724] border border-purple-700 shadow-[0_20px_60px_rgba(124,58,237,0.25)] overflow-hidden"
    >
      <div className="absolute inset-0 p-6 flex flex-col gap-4">
        {/* Top bar */}
        <div className="w-full h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-400" />

        {/* MAIN APP AREA */}
        <div className="flex-1 rounded-2xl overflow-hidden bg-gradient-to-b from-[#111827] to-[#0b1220] relative">
          <div className="relative w-full h-full overflow-hidden p-4 space-y-4">

            {/* Animated hero banner */}
            <motion.div
              initial={{ scale: 1, opacity: 0.9 }}
              animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="h-40 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-700/60 shadow-md"
            />

            {/* Floating circular badge */}
            <motion.div
              initial={{ y: 6, opacity: 0.8 }}
              animate={{ y: [-4, 4, -4], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-400 shadow-lg"
            />

            {/* Animated text bars */}
            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="h-5 w-3/4 rounded-lg bg-purple-600/30"
            />
            <motion.div
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="h-5 w-1/2 rounded-lg bg-purple-600/20"
            />

            {/* Product tiles */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="h-28 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600/50 shadow"
              />

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="h-28 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-400/40 shadow"
              />
            </div>

            {/* NEW aesthetic bottom widget */}
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="h-20 rounded-xl bg-gradient-to-br from-[#1e1b4b] to-[#312e81] mt-4 shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* floating bottom badge — FIXED POSITION */}
      <motion.div
        initial={{ scale: 0, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold shadow-lg border border-purple-300/40">
          Live Preview
        </div>
      </motion.div>
    </motion.div>
  );
}

/***********************************/
/* PARALLAX / PROBLEM-SOLUTION BLOCKS */
/***********************************/
function ParallaxSection() {
  const blocks = [
    {
      title: "The Problem",
      body: "Customers rarely return to stores. Websites are forgettable — apps are sticky, but costly to build.",
    },
    {
      title: "Our Solution",
      body: "AppDrop converts your Shopify store into a native app using a visual editor and real-time sync.",
    },
    {
      title: "Why It Matters",
      body: "Native performance, push notifications, and offline readiness increase conversion and retention.",
    },
  ];

  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {blocks.map((b, idx) => (
          <motion.div key={b.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: idx * 0.12 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={idx % 2 === 0 ? "order-1" : "order-2 md:order-1"}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{b.title}</h3>
              <p className="text-gray-300 text-lg">{b.body}</p>
            </div>

            <div className={idx % 2 === 0 ? "order-2" : "order-1 md:order-2"}>
              <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden shadow-2xl border border-purple-700 bg-gradient-to-br from-[#0b1220] to-[#0e1524] p-6">
                <motion.img
                  src={idx === 0 ? "/assets/problem.png" : idx === 1 ? "/assets/solution.webp" : "/assets/why.png"}
                  alt={b.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9 }}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/***********************************/
/* FEATURE SHOWCASE */
/***********************************/
function FeatureShowcase() {
  const features = [
    { title: "Widgets Library", desc: "Image banners, carousels, product grids, timers, and more." },
    { title: "Custom Navigation", desc: "Configure hamburger menu, bottom nav, pages and routing visually." },
    { title: "Shopify Integration", desc: "Full two-way sync with your Shopify store via API." },
    { title: "Realtime Preview", desc: "See changes instantly on a device preview and push live." },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }} className="p-6 rounded-2xl bg-gradient-to-br from-[#071024] to-[#0b1220] border border-purple-700 shadow-lg">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/***********************************/
/* HORIZONTAL UI PREVIEW CAROUSEL  */
/***********************************/
function AppUIPreview() {
  const screens = [
    { title: "Home", img: "/assets/app_ui/1.png" },
    { title: "Catalog", img: "/assets/app_ui/2.png" },
    { title: "Product", img: "/assets/app_ui/3.png" },
    // { title: "Cart", img: "/assets/app_ui/home1.png" },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-black/60 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Live App Screens
        </h2>

        {/* Scrollable container */}
        <div className="overflow-x-auto no-scrollbar py-6">
          
          {/* Centered row */}
          <div className="flex justify-center gap-6 mx-auto w-fit px-4">

            {screens.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-[220px] md:w-[260px] lg:w-[300px] rounded-3xl overflow-hidden
                           border border-purple-700 shadow-lg"
              >
                <img src={s.img} alt={s.title} className="w-full h-auto object-cover" />
                <div className="p-4 bg-[#060616]">
                  <h4 className="text-lg text-purple-300 font-semibold">{s.title}</h4>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );

  // return (
  //   <section className="py-20 bg-gradient-to-b from-black/60 to-transparent">
  //     <div className="max-w-6xl mx-auto px-6">
  //       <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Live App Screens</h2>

  //       <div className="overflow-x-auto no-scrollbar py-6">
  //         <div className="flex gap-6 px-4">
  //           {screens.map((s) => (
  //             <motion.div key={s.title} whileHover={{ scale: 1.02 }} className="w-[220px] md:w-[260px] lg:w-[300px] rounded-3xl overflow-hidden border border-purple-700 shadow-lg">
  //               <img src={s.img} alt={s.title} className="w-full h-auto object-cover" />
  //               <div className="p-4 bg-[#060616]">
  //                 <h4 className="text-lg text-purple-300 font-semibold">{s.title}</h4>
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
