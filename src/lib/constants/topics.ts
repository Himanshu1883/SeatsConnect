export type TopicPage = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  summary: string;
  points: string[];
  related: { label: string; href: string }[];
};

export const topicPages: TopicPage[] = [
  {
    slug: "b2b-ticket-distribution",
    title: "B2B Ticket Distribution",
    headline: "B2B Ticket Distribution Infrastructure.",
    description:
      "SeatsConnect is API-powered B2B distribution infrastructure for tickets, hospitality and live experiences. It connects professional supply with approved distribution partners through one infrastructure layer.",
    summary:
      "Professional event distribution still often relies on separate commercial relationships and disconnected systems. SeatsConnect provides one connection between venues, promoters, hospitality providers and approved suppliers, and the travel, concierge, corporate, hotel and sports-travel businesses that already serve customers.",
    points: [
      "One connection for supply. Multiple approved channels for distribution.",
      "Inventory can be structured by partner, channel, market and commercial terms.",
      "Partners search, quote, book and fulfil through one connected workflow.",
      "SeatsConnect is built for professional B2B businesses, not consumer ticket search.",
    ],
    related: [
      { label: "Platform", href: "/platform" },
      { label: "For Suppliers", href: "/suppliers" },
      { label: "For Partners", href: "/partners" },
    ],
  },
  {
    slug: "ticket-distribution-api",
    title: "Ticket Distribution API",
    headline: "Ticket Distribution API.",
    description:
      "Connect ticketing systems, inventory feeds and distribution platforms through one SeatsConnect API infrastructure layer.",
    summary:
      "SeatsConnect is built around API connectivity. Suppliers can connect event and inventory systems into the network. Distribution partners can access connected inventory, availability, pricing, bookings and fulfilment information through the same infrastructure.",
    points: [
      "Supplier APIs, inventory feeds and supported integrations on the supply side.",
      "Partner APIs for search, quote, book and fulfilment on the distribution side.",
      "One connection instead of multiple individual buyer or supplier integrations.",
      "Detailed schemas and sandbox access sit in the SeatsConnect developer portal.",
    ],
    related: [
      { label: "API", href: "/api" },
      { label: "Developers", href: "/developers" },
      { label: "White Label", href: "/solutions/white-label" },
    ],
  },
  {
    slug: "hospitality-distribution-platform",
    title: "Hospitality Distribution Platform",
    headline: "Hospitality Distribution Platform.",
    description:
      "Connect hospitality inventory with professional travel, corporate, concierge and hotel demand through one B2B infrastructure layer.",
    summary:
      "Hospitality products often need a different distribution model from standard ticket inventory. SeatsConnect is designed to help hospitality providers reach professional buyers while keeping distribution structured around approved partners and commercial arrangements.",
    points: [
      "Connect hospitality systems and allocations into one infrastructure layer.",
      "Reach travel, corporate, concierge and hotel buyers through approved channels.",
      "Support quotations, bookings and fulfilment through a connected workflow.",
      "Keep the customer relationship with the distributing partner.",
    ],
    related: [
      { label: "For Suppliers", href: "/suppliers" },
      { label: "Hotels & Hospitality", href: "/solutions/hotels" },
      { label: "Corporate & Events", href: "/solutions/corporate" },
    ],
  },
  {
    slug: "event-inventory-api",
    title: "Event Inventory API",
    headline: "Event Inventory API.",
    description:
      "Access connected event, product, inventory, availability and booking information through the SeatsConnect API.",
    summary:
      "SeatsConnect APIs are designed to move event and inventory information between supplier systems and professional distribution platforms. Depending on access level, partners and suppliers can work with events, products, inventory, availability, pricing, orders and fulfilment data.",
    points: [
      "Retrieve event and venue information.",
      "Access ticket and hospitality product information.",
      "View current availability and applicable pricing.",
      "Create and monitor bookings, then exchange fulfilment information.",
    ],
    related: [
      { label: "API", href: "/api" },
      { label: "Developers", href: "/developers" },
      { label: "Platform", href: "/platform" },
    ],
  },
  {
    slug: "b2b-ticketing-platform",
    title: "B2B Ticketing Platform",
    headline: "B2B Ticketing Platform.",
    description:
      "A professional B2B platform for searching, quoting, booking and fulfilling ticket and hospitality inventory.",
    summary:
      "SeatsConnect gives approved businesses a professional environment for turning event inventory into customer-ready offers. Partners can work through the SeatsConnect platform, API, white-label or custom integration depending on how they serve their customers.",
    points: [
      "Search and compare connected inventory.",
      "Build quotations using agreed commercial terms where applicable.",
      "Confirm bookings and track order information.",
      "Keep customer-facing experiences under the partner brand where supported.",
    ],
    related: [
      { label: "For Partners", href: "/partners" },
      { label: "Platform", href: "/platform" },
      { label: "Join SeatsConnect", href: "/join" },
    ],
  },
  {
    slug: "sports-travel-ticket-supply",
    title: "Sports Travel Ticket Supply",
    headline: "Sports Travel Ticket Supply.",
    description:
      "Connect sporting event tickets and hospitality with existing sports travel programmes through one B2B connection.",
    summary:
      "Sports travel businesses often need event inventory alongside flights, hotels, transfers and destination services. SeatsConnect can provide the event supply layer while the travel business continues to manage its own customer packages.",
    points: [
      "Access event inventory through one professional B2B connection.",
      "Support categories such as football, Formula 1, tennis, golf and major tournaments.",
      "Combine tickets and hospitality with existing travel services.",
      "Search, quote, book and fulfil through one connected workflow.",
    ],
    related: [
      { label: "Sports Travel", href: "/solutions/sports-travel" },
      { label: "Travel & Tour Operators", href: "/solutions/travel" },
      { label: "For Partners", href: "/partners" },
    ],
  },
  {
    slug: "concierge-ticket-platform",
    title: "Concierge Ticket Platform",
    headline: "Concierge Ticket Platform.",
    description:
      "Give concierge and lifestyle teams one professional B2B connection to global event inventory.",
    summary:
      "Client requests for football, Formula 1, concerts, tennis and premium hospitality can span multiple countries and event categories. SeatsConnect brings connected supply into one professional environment so concierge teams can source, propose and confirm more efficiently.",
    points: [
      "Receive a request, search options and create a proposal.",
      "Confirm bookings and manage fulfilment through one workflow.",
      "Keep the client relationship with the concierge business.",
      "Present quotations using the partner identity where supported.",
    ],
    related: [
      { label: "Concierge & Lifestyle", href: "/solutions/concierge" },
      { label: "Hotels & Hospitality", href: "/solutions/hotels" },
      { label: "For Partners", href: "/partners" },
    ],
  },
  {
    slug: "ticket-white-label",
    title: "Ticket White Label",
    headline: "Ticket White Label.",
    description:
      "Connect SeatsConnect inventory and booking infrastructure into a partner website, application or customer platform.",
    summary:
      "White-label solutions allow approved partners to provide an event discovery and booking experience under their own brand. SeatsConnect supplies the infrastructure. The partner keeps the customer relationship.",
    points: [
      "Branded event websites, customer portals and embedded inventory.",
      "API-powered platforms and custom booking journeys.",
      "Event data, inventory, pricing, bookings and fulfilment information.",
      "Your customer. Your brand. Connected global supply.",
    ],
    related: [
      { label: "White Label", href: "/solutions/white-label" },
      { label: "API", href: "/api" },
      { label: "Developers", href: "/developers" },
    ],
  },
  {
    slug: "event-distribution-technology",
    title: "Event Distribution Technology",
    headline: "Event Distribution Technology.",
    description:
      "Technology infrastructure connecting global event supply with professional B2B demand.",
    summary:
      "SeatsConnect is designed to sit behind global event commerce. It is the connectivity layer between professional supply and the businesses that already serve customers in travel, concierge, corporate, hospitality and digital distribution.",
    points: [
      "Connect supply through API, feed or supported integration.",
      "Structure how inventory is made available to approved partners.",
      "Distribute through travel, concierge, corporate, hotel and white-label channels.",
      "Move booking and fulfilment information through one connected workflow.",
    ],
    related: [
      { label: "Platform", href: "/platform" },
      { label: "API", href: "/api" },
      { label: "About", href: "/about" },
    ],
  },
];

export function getTopicBySlug(slug: string) {
  return topicPages.find((topic) => topic.slug === slug);
}
