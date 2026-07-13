export const PILOT_PRICE_USD = 34.99;
export const PILOT_PRICE_USD_LABEL = "$34.99";
export const PILOT_PRICE_INR = 3149;

export const PILOT_CHECKOUT_URL = "https://rzp.io/rzp/KkCHRnt";
export const FREE_APP_URL = "https://app.clearform.in/";
export const FOUNDER_LINKEDIN_URL = "https://www.linkedin.com/in/abbubakarr/";

export const PILOT_CTA_LABEL = `Start pilot for ${PILOT_PRICE_USD_LABEL}`;
export const PILOT_CTA_LABEL_TITLE = `Start Pilot for ${PILOT_PRICE_USD_LABEL}`;

export const PILOT_PRICE_LINE = `${PILOT_PRICE_USD_LABEL} one-time · or ₹${PILOT_PRICE_INR.toLocaleString("en-IN")}`;

export const PILOT_TERMS_LINE =
  "3-month pilot — workspaces, AI pipeline, onboarding & exports.";

export const PILOT_SUBLINE =
  "Use responses at your own pace. Subscribe only if it's working — no forced upgrade.";

export const INCLUDED_ITEMS = [
  "Unlimited forms · 300 responses · 3 workspaces",
  "Full AI bundle — Logic, Insights, Quality Scoring & Analytics",
  "Drop-off flows, completion rates & advanced analytics",
  "Google Sheets, Drive & Slack integrations",
  "Guided onboarding & structured exports when you're ready to act",
];

export type PricingPlan = {
  id: "free" | "pilot" | "talk";
  name: string;
  badge: string;
  priceLabel: string;
  priceSuffix?: string;
  priceDetail?: string;
  terms?: string;
  subline: string;
  ctaLabel: string;
  href: string;
  featured?: boolean;
  buttonVariant: "primary" | "secondary";
  features: string[];
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    badge: "No card required",
    priceLabel: "$0",
    priceSuffix: "forever",
    subline: "Real usage to test your first workflow — not a teaser.",
    ctaLabel: "Create your first form free",
    href: FREE_APP_URL,
    buttonVariant: "secondary",
    features: [
      "Unlimited forms · 50 responses · 1 workspace",
      "Integrations included",
      "Founder-led support",
      "Upgrade anytime — keep your forms",
    ],
  },
  {
    id: "pilot",
    name: "Pilot access",
    badge: "Most teams start here",
    priceLabel: PILOT_PRICE_USD_LABEL,
    priceSuffix: "one-time",
    priceDetail: PILOT_PRICE_LINE,
    subline: "3 months of full AI access. Subscribe only if it’s working.",
    ctaLabel: "Start collecting better responses",
    href: PILOT_CHECKOUT_URL,
    featured: true,
    buttonVariant: "primary",
    features: [
      "Unlimited forms · 300 responses · 3 workspaces",
      "Full AI scoring, insights & analytics",
      "Sheets, Drive & Slack integrations",
      "Guided onboarding & exports",
    ],
  },
  {
    id: "talk",
    name: "7-day Pilot trial",
    badge: "Full Pilot — free for 7 days",
    priceLabel: "$0",
    priceSuffix: "for 7 days",
    subline: "Same Pilot access — unlocked after a short founder chat.",
    ctaLabel: "Claim your 7-day Pilot access",
    href: FOUNDER_LINKEDIN_URL,
    buttonVariant: "secondary",
    features: [
      "Everything in Pilot for 7 days",
      "300 responses · 3 workspaces · full AI",
      "Integrations & guided setup",
      "Activated after a short founder chat",
    ],
  },
];
