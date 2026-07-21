export type NavLink = {
  label: string;
  href: string;
  highlight?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Platform", href: "#about" },
  { label: "The Advantage", href: "#advantage" },
  { label: "EDGE Engine", href: "#engine" },
  { label: "Events Directory", href: "#coverage" },
  { label: "Margin Calculator", href: "#calculator" },
  { label: "Strategic Reach", href: "#reach", highlight: true },
];

export const footerPlatformLinks = [
  { label: "Unified B2B Routing", href: "#about" },
  { label: "Patented EDGE Engine", href: "#engine" },
  { label: "Global Inventory Sync", href: "#coverage" },
  { label: "Strategic Sourcing Hubs", href: "#reach" },
] as const;

export const footerLegalLinks = [
  { label: "B2B Terms of Service", href: "#" },
  { label: "Data Privacy Charter", href: "#" },
  { label: "API Compliance SLA", href: "#" },
] as const;
