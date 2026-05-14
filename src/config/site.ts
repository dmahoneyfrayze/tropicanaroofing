/**
 * Single source of truth for all business info.
 * Change it here → it updates across every page.
 */
export const siteConfig = {
  name: "Tropicana Roofing Inc",
  tagline: "Toronto's Trusted Roofing Experts",
  phone: {
    display: "(416) 555-0199",
    href: "tel:4165550199",
  },
  email: "info@tropicanaroofing.ca",
  address: {
    street: "215 Markham Road",
    city: "Toronto",
    province: "ON",
    postal: "M1J 3C4",
    full: "215 Markham Road, Toronto, ON M1J 3C4",
  },
  founded: 2025,
  copyrightYear: new Date().getFullYear(),
  url: "https://tropicanaroofing.ca",
  social: {
    google: "https://g.page/tropicanaroofing",
    instagram: "https://instagram.com/tropicanaroofing",
  },
  stats: {
    yearsInBusiness: "New",
    roofsCompleted: "500+",
    googleRating: "4.9",
    bbbRating: "A+",
    insurance: "$5M",
  },
  license: "#123456789",
} as const;

export type SiteConfig = typeof siteConfig;
