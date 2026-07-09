import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--site-header-offset")
        .trim();
      const offset = Number.parseFloat(raw);
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        (Number.isFinite(offset) ? offset : 113) -
        8;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
