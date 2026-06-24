import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VIDEO_SRC = "/appdrop-brand-preview.mov";

const DashboardFlowSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const flowSteps = [
    { label: "Create Screens", icon: "📱" },
    { label: "Publish App", icon: "🚀" },
    { label: "Go Live", icon: "✨" },
    { label: "Track Sales", icon: "📈" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            See It In Action
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From Design to <span className="gradient-text">Live Sales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how easy it is to create, publish, and track your mobile app's performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          {flowSteps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border/50 shadow-sm">
                <span className="text-2xl">{step.icon}</span>
                <span className="font-semibold text-foreground">{step.label}</span>
              </div>
              {index < flowSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 glow">
            <div className="aspect-video bg-card relative">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Screen creation → Publish → Live to users → Real-time analytics
        </motion.p>
      </div>
    </section>
  );
};

export default DashboardFlowSection;
