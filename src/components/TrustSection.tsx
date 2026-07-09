import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const technologies = [
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Golang", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
];

const stats = [
  { value: "50ms", label: "Response Time" },
  { value: "1M+", label: "Data Points Analyzed" },
  { value: "99.9%", label: "Uptime" },
  { value: "Real-time", label: "Analytics Updates" },
];

const TrustSection = () => {
  return (
    <section id="technology" className="py-14 sm:py-20 lg:py-24 bg-teal-deep">
      <div className="section-container">
        <SectionHeader
          eyebrow="Technology"
          title="Built on a modern commerce stack"
          subtitle="A production-ready Builder, real mobile app architecture, and a Shopify integration path currently moving through App Store review."
          centered
          eyebrowClassName="text-accent before:bg-accent"
          titleClassName="text-white"
          className="mx-auto text-center max-w-2xl mb-14 [&_.v3-lead]:text-teal-200/80 [&_.v3-lead]:max-w-2xl"
        />

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-12 lg:gap-16 mb-10 sm:mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center gap-2 sm:gap-3 group w-[4.5rem] sm:w-auto"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-white/[0.08] border border-white/10 p-2.5 sm:p-4 flex items-center justify-center transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.14] group-hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain opacity-85 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
              <span className="text-[11px] sm:text-sm font-medium text-teal-200/70 group-hover:text-teal-50 transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="v3-case-card text-center py-5 sm:py-8"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-teal-200/70 leading-snug px-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
