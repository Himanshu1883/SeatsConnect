import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export const supportHelpAreas = [
  {
    title: "Join SeatsConnect",
    description: "Apply as a supply partner or distribution partner.",
    href: routes.join,
  },
  {
    title: "Partner Platform",
    description:
      "Existing partners can access the SeatsConnect platform directly.",
    href: siteConfig.portalUrl,
    external: true,
  },
  {
    title: "Submit a Request",
    description:
      "Ask the partner team for selected bespoke ticket or hospitality requirements.",
    href: routes.request,
  },
  {
    title: "API & Developers",
    description: "Review API capabilities and request developer access.",
    href: routes.developers,
  },
  {
    title: "Partner Resources",
    description: "Guides and reference pages for approved businesses.",
    href: routes.resources,
  },
  {
    title: "Contact the Team",
    description: "Speak with supply, partner or integration teams.",
    href: routes.contact,
  },
] as const;

export const supportFaqs = [
  {
    question: "What is SeatsConnect?",
    answer:
      "SeatsConnect is API-powered B2B distribution infrastructure for tickets, hospitality and live experiences. It connects venues, promoters, hospitality providers and approved suppliers with a global network of professional B2B distribution partners.",
  },
  {
    question: "How do suppliers connect inventory?",
    answer:
      "Suppliers can apply through the supply partner form. Inventory can be connected through API, feed or supported integration, then made available according to agreed channels, markets, partner groups and commercial terms.",
  },
  {
    question: "How do distribution partners get access?",
    answer:
      "Approved travel, concierge, corporate, hotel, sports travel and white-label businesses can apply for partner access. Access may be provided through the SeatsConnect platform, API, white label or custom integration.",
  },
  {
    question: "Where do existing partners log in?",
    answer:
      "The public website Login button takes existing partners directly to the SeatsConnect platform. If you cannot access your account, contact the partner team.",
  },
  {
    question: "Where is the API documentation?",
    answer:
      "Detailed documentation, authentication, endpoints, schemas and sandbox information sit in a separate developer portal. Request developer access and our integration team will guide the next steps.",
  },
  {
    question: "Can partners request inventory that is not in live search?",
    answer:
      "Not every customer requirement will be available through live inventory. Approved partners can submit selected group, hospitality, VIP, quantity or multi-event requests to the partner team.",
  },
] as const;

export const requestTypes = [
  { value: "group", label: "Group bookings" },
  { value: "hospitality", label: "Premium hospitality" },
  { value: "vip", label: "VIP requirements" },
  { value: "quantity", label: "Larger quantities" },
  { value: "programme", label: "Complex event programmes" },
  { value: "corporate", label: "Corporate requirements" },
  { value: "multi", label: "Multi-event requests" },
] as const;

