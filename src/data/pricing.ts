export const PRICING_FEATURES = [
  "Full AppDrop Builder Access",
  "Live Preview and Theme Customization",
  "Shopify Connection Coming Soon",
  "Cancel Anytime",
] as const;

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  savings?: number;
  effectiveMonthly: number;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    duration: "1 Month",
    price: 699,
    effectiveMonthly: 699,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    duration: "3 Months",
    price: 1992,
    originalPrice: 2097,
    discount: "5% OFF",
    savings: 105,
    effectiveMonthly: 664,
  },
  {
    id: "half-yearly",
    name: "Half-Yearly",
    duration: "6 Months",
    price: 3775,
    originalPrice: 4194,
    discount: "10% OFF",
    savings: 419,
    effectiveMonthly: 629,
  },
  {
    id: "annual",
    name: "Annual",
    duration: "12 Months",
    price: 6710,
    originalPrice: 8388,
    discount: "20% OFF",
    savings: 1678,
    effectiveMonthly: 559,
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
