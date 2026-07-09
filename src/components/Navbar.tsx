import { useState, useEffect, useRef } from "react";
import { AnnouncementBarContent } from "@/components/AnnouncementBar";
import { motion } from "framer-motion";
import { Menu, Mail, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenWaitlist: () => void;
}

type NavLink = {
  label: string;
  href: string;
  isAnchor: boolean;
};

const Navbar = ({ onOpenWaitlist }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--site-header-offset", `${height}px`);
    };

    syncOffset();
    const observer = new ResizeObserver(syncOffset);
    observer.observe(header);
    window.addEventListener("resize", syncOffset);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncOffset);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setIsMobileMenuOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.classList.add("scroll-locked");
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("scroll-locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hash = href.includes("#") ? `#${href.split("#")[1]}` : "";
    if (!hash) return;

    if (!isHomePage) return;

    const el = document.getElementById(hash.slice(1));
    if (!el) return;

    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate({ pathname: "/", hash: hash.slice(1) });
  };

  const navLinks: NavLink[] = [
    { label: "Features", href: isHomePage ? "#features" : "/#features", isAnchor: true },
    { label: "Builder", href: isHomePage ? "#builder" : "/#builder", isAnchor: true },
    { label: "Pricing", href: isHomePage ? "#pricing" : "/#pricing", isAnchor: true },
    { label: "About", href: "/about", isAnchor: false },
    { label: "FAQ", href: isHomePage ? "#faq" : "/#faq", isAnchor: true },
    { label: "Contact", href: "/contact", isAnchor: false },
  ];

  const getLinkSectionId = (href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return "";
    return href.slice(hashIndex + 1);
  };

  const isLinkActive = (link: NavLink) => {
    if (link.isAnchor) {
      if (!isHomePage) return false;
      const sectionId = getLinkSectionId(link.href);
      return location.hash === `#${sectionId}`;
    }

    return (
      location.pathname === link.href ||
      location.pathname.startsWith(`${link.href}/`)
    );
  };

  const navLinkClass = (active: boolean, mobile = false) =>
    cn(
      mobile
        ? "block text-base font-medium py-3 min-h-11 transition-colors"
        : "v3-nav-link text-[15px] font-medium transition-colors",
      active
        ? "text-primary font-semibold"
        : "text-muted-foreground hover:text-foreground",
    );

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <AnnouncementBarContent />
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
              : "bg-background/80 backdrop-blur-md"
          }`}
        >
          <div className="section-container">
            <div className="flex items-center justify-between h-14 sm:h-[72px]">
              <Link to="/" className="flex items-center shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0734/7155/7942/files/AppDrop_Black_Logo.png?v=1766657135"
                  alt="AppDrop logo"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
                {navLinks.map((link) => {
                  const active = isLinkActive(link);

                  return link.isAnchor ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className={navLinkClass(active)}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={navLinkClass(active)}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <Button
                  variant="hero-outline"
                  className="rounded-full hover:shadow-glow hover:-translate-y-1 hover:scale-[1.02]"
                  onClick={onOpenWaitlist}
                >
                  Book Demo
                </Button>
                <Button variant="hero" className="rounded-full" asChild>
                  <Link to="/contact#message">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </Link>
                </Button>
              </div>

              <button
                type="button"
                className="lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-[2px] lg:hidden"
          style={{ top: "var(--site-header-offset)" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="fixed left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border z-30 overflow-hidden lg:hidden"
        style={{ top: "var(--site-header-offset)" }}
      >
        <div className="section-container py-5 sm:py-6 space-y-1 max-h-[calc(100dvh-var(--site-header-offset))] overflow-y-auto">
          {navLinks.map((link) => {
            const active = isLinkActive(link);

            return link.isAnchor ? (
              <a
                key={link.label}
                href={link.href}
                className={navLinkClass(active, true)}
                aria-current={active ? "page" : undefined}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={navLinkClass(active, true)}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenWaitlist();
            }}
            variant="hero-outline"
            className="w-full mt-4 rounded-full hover:shadow-glow hover:-translate-y-1 hover:scale-[1.02]"
          >
            Book Demo
          </Button>
          <Button variant="hero" className="w-full mt-3 rounded-full" asChild>
            <Link to="/contact#message" onClick={() => setIsMobileMenuOpen(false)}>
              Get In Touch
            </Link>
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
