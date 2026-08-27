import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export const resourceGuides = [
  {
    title: "Platform Overview",
    description:
      "How SeatsConnect connects supply, structures distribution, and supports booking and fulfilment.",
    href: routes.platform,
    group: "Guides",
  },
  {
    title: "Supplier Guide",
    description:
      "Connect inventory once and make it available through approved professional channels.",
    href: routes.suppliers,
    group: "Guides",
  },
  {
    title: "Partner Guide",
    description:
      "Search, quote, book and fulfil through one professional B2B connection.",
    href: routes.partners,
    group: "Guides",
  },
  {
    title: "API Overview",
    description:
      "Understand supplier and partner connectivity before requesting developer access.",
    href: routes.api,
    group: "Technical",
  },
  {
    title: "Developer Access",
    description:
      "Request documentation, sandbox information and integration support.",
    href: routes.developers,
    group: "Technical",
  },
  {
    title: "White Label",
    description:
      "Connect inventory and booking infrastructure into your own customer experience.",
    href: routes.solutionsWhiteLabel,
    group: "Technical",
  },
  {
    title: "Submit a Request",
    description:
      "Ask the partner team for selected group, hospitality or complex requirements.",
    href: routes.request,
    group: "Support",
  },
  {
    title: "Support",
    description:
      "Help centre for joining, login, API access and partner questions.",
    href: routes.support,
    group: "Support",
  },
] as const;

export const joinSupplyTypes = [
  "Venues",
  "Promoters",
  "Hospitality Providers",
  "Event Organisers",
  "Rights Holders",
  "Approved Ticket Suppliers",
] as const;

export const joinPartnerTypes = [
  "Travel Agencies",
  "Tour Operators",
  "Concierge Companies",
  "Corporate Travel",
  "Event Agencies",
  "Hotels",
  "Sports Travel",
  "Lifestyle Management",
  "White-Label Businesses",
] as const;

export const contactChannels = [
  {
    id: "supply",
    title: "Supply Partnerships",
    description:
      "For venues, promoters, hospitality providers and suppliers interested in connecting inventory.",
    cta: "Contact Supply Team",
    href: `${routes.contact}?type=supply`,
  },
  {
    id: "distribution",
    title: "Distribution Partnerships",
    description:
      "For travel, concierge, corporate, hospitality and other B2B businesses interested in accessing SeatsConnect.",
    cta: "Contact Partner Team",
    href: `${routes.contact}?type=distribution`,
  },
  {
    id: "api",
    title: "API & Integrations",
    description:
      "For technical integrations, APIs, white-label and custom connectivity.",
    cta: "Contact Integration Team",
    href: `${routes.contact}?type=api`,
  },
  {
    id: "general",
    title: "General Enquiries",
    description: "For all other SeatsConnect enquiries.",
    cta: "Contact Us",
    href: routes.contact,
  },
] as const;

export const contactEnquiryTypes = [
  { value: "supply", label: "Supply Partnership" },
  { value: "distribution", label: "Distribution Partnership" },
  { value: "api", label: "API & Integrations" },
  { value: "general", label: "General Enquiry" },
] as const;

export const portalAccess = {
  title: "Platform Access.",
  description:
    "Existing partners can log in to the SeatsConnect platform for live inventory, quotations, bookings and order management.",
  href: siteConfig.portalUrl,
  label: "Go to Partner Platform",
} as const;
