/**
 * Canonical site identity. Every canonical URL, og:url, og:image and
 * twitter:image is built from SITE_URL — never hard-code a host elsewhere.
 *
 * www.appdrop.co is the host Vercel serves (appdrop.co redirects to it).
 * If the primary domain ever changes in Vercel, change it here, in
 * index.html (static JSON-LD) and in public/sitemap.xml + robots.txt.
 */
export const SITE_URL = "https://www.appdrop.co";
export const SITE_NAME = "AppDrop";
export const TWITTER_HANDLE = "@appdropco";
export const CONTACT_EMAIL = "hello@appdrop.co";

/** Default social card: public/og-image.png (1200×630). */
export const DEFAULT_OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
} as const;

/**
 * Absolute URL on SITE_URL for a site path. The root maps to
 * "https://www.appdrop.co/"; other paths have no trailing slash, and any
 * query string or hash is dropped (canonicals never carry them).
 */
export function absoluteUrl(path: string): string {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "");
  if (clean === "") return `${SITE_URL}/`;
  return `${SITE_URL}${clean.startsWith("/") ? clean : `/${clean}`}`;
}
