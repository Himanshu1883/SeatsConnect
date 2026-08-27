export type NavLink = {
  label: string;
  href: string;
  highlight?: boolean;
};

export const mainNavLinks: NavLink[] = [
  { label: "Platform", href: "/platform" },
  { label: "For Suppliers", href: "/suppliers" },
  { label: "For Partners", href: "/partners" },
  { label: "Solutions", href: "/solutions" },
  { label: "API", href: "/api" },
  { label: "About", href: "/about" },
];

export const footerPlatformLinks = [
  { label: "Platform", href: "/platform" },
  { label: "For Suppliers", href: "/suppliers" },
  { label: "For Partners", href: "/partners" },
  { label: "API", href: "/api" },
] as const;

export const solutionsNavLinks: NavLink[] = [
  { label: "Travel & Tour Operators", href: "/solutions/travel" },
  { label: "Concierge & Lifestyle", href: "/solutions/concierge" },
  { label: "Corporate & Events", href: "/solutions/corporate" },
  { label: "Hotels & Hospitality", href: "/solutions/hotels" },
  { label: "Sports Travel", href: "/solutions/sports-travel" },
  { label: "White Label", href: "/solutions/white-label" },
];

export const footerSolutionsLinks = [
  { label: "Travel", href: "/solutions/travel" },
  { label: "Concierge", href: "/solutions/concierge" },
  { label: "Corporate", href: "/solutions/corporate" },
  { label: "Hotels", href: "/solutions/hotels" },
  { label: "Sports Travel", href: "/solutions/sports-travel" },
  { label: "White Label", href: "/solutions/white-label" },
] as const;

export const footerCompanyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Join SeatsConnect", href: "/join" },
  { label: "Partner Resources", href: "/resources" },
] as const;

export const footerPartnerLinks = [
  { label: "Login", href: "https://app.seatsconnect.com", external: true },
  { label: "Support", href: "/support" },
  { label: "Submit a Request", href: "/request" },
  { label: "API Access", href: "/api" },
  { label: "Developers", href: "/developers" },
] as const;

export const footerLegalLinks = [
  { label: "Terms", href: "/legal#terms" },
  { label: "Privacy", href: "/legal#privacy" },
  { label: "Cookies", href: "/legal#cookies" },
  { label: "Compliance", href: "/legal#compliance" },
] as const;
