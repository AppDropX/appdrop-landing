import { PRICING_PLANS } from "@/data/pricing";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

/** Matches the Organization @id declared statically in index.html. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * Home page SoftwareApplication. Offers come from src/data/pricing.ts (prices
 * are displayed in USD by formatPrice). Never add aggregateRating/review here
 * unless real, on-page reviews exist.
 */
export function softwareApplicationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE_NAME} Builder`,
    url: absoluteUrl("/"),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "No-code mobile app builder for Shopify stores, with live preview, theme customization and a publish-ready app workflow.",
    publisher: { "@id": ORGANIZATION_ID },
    offers: PRICING_PLANS.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} plan (${plan.duration})`,
      price: plan.price.toFixed(2),
      priceCurrency: "USD",
      url: `${absoluteUrl("/")}#pricing`,
    })),
  };
}
