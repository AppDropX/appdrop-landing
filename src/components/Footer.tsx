import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenWaitlist: () => void;
}

const Footer = ({ onOpenWaitlist }: FooterProps) => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "/features", isRoute: true },
      { label: "Pricing", href: "/#pricing", isRoute: false },
      { label: "How It Works", href: "/#how-it-works", isRoute: false },
      { label: "Use Cases", href: "/#use-cases", isRoute: false },
    ],
    Company: [
      { label: "About", href: "/about", isRoute: true },
      { label: "Contact", href: "/contact", isRoute: true },
    ],
    Legal: [
      { label: "Privacy", href: "/privacy", isRoute: true },
      { label: "Terms", href: "/terms", isRoute: true },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16 lg:py-20">
        <div className="flex flex-col gap-12 mb-12 lg:grid lg:grid-cols-5 lg:gap-12 text-center lg:text-left">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start"
            >
              <Link to="/" className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold">AppDrop</span>
              </Link>
              <p className="text-primary-foreground/70 mb-6 max-w-xs mx-auto lg:mx-0">
                Turn your Shopify store into a beautiful native mobile app. No code required.
              </p>
              <Button onClick={onOpenWaitlist} variant="hero" size="default">
                Join the Waitlist
              </Button>
            </motion.div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:contents">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center lg:items-start"
              >
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} AppDrop. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/appdropco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
