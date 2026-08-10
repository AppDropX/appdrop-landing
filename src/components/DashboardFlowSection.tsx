import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const DashboardFlowSection = () => {
  const flowSteps = [
    { label: "Create Screens", icon: "📱" },
    { label: "Publish App", icon: "🚀" },
    { label: "Go Live", icon: "✨" },
    { label: "Track Sales", icon: "📈" },
  ];

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

        {/* Flow Steps */}
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

        {/* Dashboard Preview / GIF Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 glow">
            {/* Dashboard Mockup */}
            <div className="aspect-video bg-card relative">
              {/* Browser Chrome */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-muted/50 flex items-center px-4 gap-2 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-6 py-1 bg-background rounded-lg text-xs text-muted-foreground">
                    dashboard.appdrop.co
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="pt-10 h-full flex">
                {/* Sidebar */}
                <div className="w-16 bg-muted/30 border-r border-border/30 p-3 hidden sm:block">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-xl ${i === 1 ? 'bg-primary/20' : 'bg-muted/50'}`} />
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-4 sm:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                    {/* Phone Preview */}
                    <div className="col-span-1 flex items-center justify-center">
                      <div className="w-28 sm:w-36 aspect-[9/19] bg-foreground rounded-2xl p-1 shadow-lg">
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 rounded-lg bg-primary/30 mx-auto mb-2" />
                            <div className="w-12 h-2 bg-muted rounded mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cards */}
                    <div className="col-span-2 space-y-4">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: "Sales", value: "$24.5K", change: "+12%" },
                          { label: "Users", value: "8,432", change: "+28%" },
                          { label: "Conv.", value: "4.2%", change: "+5%" },
                        ].map((stat) => (
                          <div key={stat.label} className="p-3 rounded-xl bg-muted/30 border border-border/30">
                            <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                            <p className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</p>
                            <p className="text-[10px] sm:text-xs text-primary font-medium">{stat.change}</p>
                          </div>
                        ))}
                      </div>

                      {/* Chart Placeholder */}
                      <div className="flex-1 rounded-xl bg-muted/30 border border-border/30 p-4">
                        <div className="flex items-end justify-between h-20 sm:h-32 gap-2">
                          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${height}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 opacity-0 hover:opacity-100 transition-opacity cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
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
          🎬 GIF preview coming soon — Screen creation → Publish → Live to users → Real-time analytics
        </motion.p>
      </div>
    </section>
  );
};

export default DashboardFlowSection;