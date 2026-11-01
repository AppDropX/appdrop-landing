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
    // Routes are lazy-loaded, so the target may not be mounted yet on the
    // first frame. Retry each frame for up to ~2s before giving up.
    let frame = 0;
    let rafId = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) {
        if (++frame < 120) rafId = requestAnimationFrame(tryScroll);
        return;
      }

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
    };
    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
