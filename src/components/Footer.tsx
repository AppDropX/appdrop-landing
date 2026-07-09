import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import appdropLogoIcon from "@/assets/appdrop-logo-icon.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features", isRoute: false },
    { label: "Builder", href: "/#builder", isRoute: false },
    { label: "Pricing", href: "/#pricing", isRoute: false },
    { label: "FAQ", href: "/#faq", isRoute: false },
  ],
  Company: [
    { label: "About", href: "/about", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy", isRoute: true },
    { label: "Terms of Service", href: "/terms", isRoute: true },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/appdropco/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM0 8h5v16H0V8Zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.74 24 10.1 24 14.36V24h-5v-8.5c0-2.03-.73-3.42-2.55-3.42-1.39 0-2.22.94-2.58 1.84-.14.32-.17.77-.17 1.22V24h-5V8Z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/appdropco",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/appdrop",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/appdrop.co",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@AppDrop",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="foot-logo">
              <span className="foot-icon">
                <img
                  src={appdropLogoIcon}
                  alt="AppDrop icon"
                />
              </span>
              AppDrop
            </Link>

            <p>The no-code mobile app builder for Shopify stores.</p>

            <div className="shopify-cert">
              <CircleCheck className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
              Shopify App Store listing under review
            </div>

            <div className="foot-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="foot-col">
              <h4>{category}</h4>
              {links.map((link) =>
                "external" in link && link.external ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : link.isRoute ? (
                  <Link key={link.label} to={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} AppDrop. All rights reserved.</span>
          <span>
            Made for Shopify merchants ·{" "}
            <a href="mailto:hello@appdrop.co">hello@appdrop.co</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
