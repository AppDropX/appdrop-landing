import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Clock, Send, Loader2, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const addresses = {
  office:
    "D42 Dr. Ambedkar Colony, 100 Feet Rd, opposite Vishal Megamart, Phase 1, Chattarpur Enclave, New Delhi, Delhi - 110074, India",
  registered:
    "No. 44, New Manglam Complex, Shobhagpura, Udaipur, Rajasthan – 313001, India",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@appdrop.co",
    detail: "For general enquiries and support",
    href: "mailto:hello@appdrop.co",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team",
    detail: "Available Mon–Fri, 10:00 AM – 6:00 PM IST",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Mon–Fri, 10:00 AM – 6:00 PM IST",
    detail: "Excluding public holidays",
    href: undefined,
  },
  {
    icon: MapPin,
    title: "Registered Office",
    description: "Udaipur, Rajasthan",
    detail: addresses.registered,
    href: undefined,
  },
  {
    icon: Building2,
    title: "Office",
    description: "New Delhi, Delhi",
    detail: addresses.office,
    href: undefined,
  },
];

const Contact = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - AppDrop | Get in Touch</title>
        <meta 
          name="description" 
          content="Have questions about AppDrop? Contact our team. We're here to help you launch your Shopify mobile app." 
        />
        <link rel="canonical" href="https://appdrop.io/contact" />
      </Helmet>

      <div className="min-h-dvh bg-background">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main className="pt-[var(--site-header-offset)] pb-20">
          {/* Hero */}
          <section className="section-container text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="v3-eyebrow text-primary before:bg-primary mx-auto mb-6">
                Contact
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-1">
                Have questions? We&apos;d love to hear from you. Send us a message and
                we&apos;ll respond as soon as possible.
              </p>
            </motion.div>
          </section>

          {/* Contact Info Cards */}
          <section className="section-container mb-12 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-5 sm:p-6 border border-border/50 text-center flex flex-col items-center w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] max-w-[427px] min-h-[180px] sm:min-h-[200px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 shrink-0">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground font-medium hover:text-primary transition-colors shrink-0 break-all"
                    >
                      {info.description}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium shrink-0">{info.description}</p>
                  )}
                  <p className="text-sm text-muted-foreground leading-snug mt-1 flex-1 flex items-start justify-center break-words px-1">
                    {info.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section id="message" className="section-container scroll-mt-[var(--site-header-offset)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-border/50">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="h-12 rounded-xl bg-muted/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="h-12 rounded-xl bg-muted/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="h-12 rounded-xl bg-muted/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="min-h-[150px] rounded-xl bg-muted/50 border-border/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
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

export default Contact;
