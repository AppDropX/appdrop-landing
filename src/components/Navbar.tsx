import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenWaitlist: () => void;
}

const Navbar = ({ onOpenWaitlist }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: isHomePage ? "#features" : "/features", isAnchor: isHomePage },
    { label: "How It Works", href: isHomePage ? "#how-it-works" : "/#how-it-works", isAnchor: isHomePage },
    { label: "About", href: "/about", isAnchor: false },
    { label: "Contact", href: "/contact", isAnchor: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
  <div className="w-130 h-50 flex items-center justify-center">
    <img
      src="https://cdn.shopify.com/s/files/1/0734/7155/7942/files/AppDrop_Black_Logo.png?v=1766657135"
      alt="AppDrop logo"
      className="h-9 w-auto object-contain"
    />
  </div> 
</Link>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button onClick={onOpenWaitlist} variant="hero">
                Join the Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="fixed top-20 left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border/50 z-30 overflow-hidden md:hidden"
      >
        <div className="section-container py-6 space-y-4">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenWaitlist();
            }}
            variant="hero"
            className="w-full mt-4"
          >
            Join the Waitlist
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
