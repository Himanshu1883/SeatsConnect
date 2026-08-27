import { routes } from "@/lib/constants/routes";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp, pages } = siteImages;

export type SolutionCard = {
  title: string;
  headline: string;
  description: string;
  href: string;
  cta: string;
  image: string;
};

export const solutionCards: SolutionCard[] = [
  {
    title: "Travel & Tour Operators",
    headline: "Add Events to Your Travel Offering.",
    description:
      "Access ticket and hospitality products alongside your existing travel services.",
    href: routes.solutionsTravel,
    cta: "Explore Travel Solutions",
    image: exp.travel,
  },
  {
    title: "Concierge & Lifestyle",
    headline: "Respond to More Client Requests.",
    description:
      "Connect your concierge team with global event inventory through one professional platform.",
    href: routes.solutionsConcierge,
    cta: "Explore Concierge Solutions",
    image: exp.concierge,
  },
  {
    title: "Corporate & Events",
    headline: "Access Events for Corporate Customers.",
    description:
      "Source tickets and hospitality for client entertainment, incentives and business events.",
    href: routes.solutionsCorporate,
    cta: "Explore Corporate Solutions",
    image: exp.corporate,
  },
  {
    title: "Hotels & Hospitality",
    headline: "Extend the Guest Experience.",
    description:
      "Give your concierge or guest-service team access to ticket and hospitality inventory.",
    href: routes.solutionsHotels,
    cta: "Explore Hotel Solutions",
    image: exp.hotel,
  },
  {
    title: "Sports Travel",
    headline: "Build Complete Event Experiences.",
    description:
      "Combine sporting event inventory with your existing travel services.",
    href: routes.solutionsSportsTravel,
    cta: "Explore Sports Travel Solutions",
    image: exp.sportsTravel,
  },
  {
    title: "White Label",
    headline: "Global Supply. Your Customer Experience.",
    description:
      "Integrate SeatsConnect into your own website, application or customer platform.",
    href: routes.solutionsWhiteLabel,
    cta: "Explore White Label",
    image: exp.venue,
  },
];

export type SolutionPageSlug =
  | "travel"
  | "concierge"
  | "corporate"
  | "hotels"
  | "sports-travel"
  | "white-label";

export type SolutionCta = { label: string; href: string };

export type SolutionWorkflowVariant =
  | "pipeline"
  | "request"
  | "combine"
  | "api"
  | "concierge";

export type SolutionPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: SolutionCta;
    secondaryCta: SolutionCta;
    image: string;
  };
  fit: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    items?: readonly string[];
    closing?: string;
  };
  workflow: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    flow: readonly string[];
    consoleTitle: string;
    variant: SolutionWorkflowVariant;
    sideItems?: readonly string[];
    closing?: string;
  };
  finalCta: {
    eyebrow?: string;
    title: string;
    primaryCta: SolutionCta;
    secondaryCta: SolutionCta;
  };
};

export const solutionPages: Record<SolutionPageSlug, SolutionPageContent> = {
  travel: {
    hero: {
      eyebrow: "Travel & Tour Operators",
      title: "Add Global Events to Your",
      titleAccent: "Travel Offering.",
      description:
        "Give your customers access to tickets and hospitality alongside flights, hotels and travel services. SeatsConnect gives travel agencies and tour operators one B2B connection to event inventory across multiple markets.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Book a Demo", href: routes.contact },
      image: pages.travel,
    },
    fit: {
      kicker: "For travel",
      title: "Turn Events Into Complete",
      titleAccent: "Travel Experiences.",
      description:
        "Your customers often travel because of the event. SeatsConnect allows travel businesses to complement existing services with access to sporting events, entertainment and hospitality. Potential combinations include:",
      items: [
        "Tickets + Flights",
        "Tickets + Hotels",
        "Tickets + Transfers",
        "Tickets + Hospitality",
        "Complete Travel Packages",
      ],
    },
    workflow: {
      kicker: "One connection",
      title: "One Event Supply",
      titleAccent: "Connection.",
      description:
        "Reduce the need to maintain separate supplier relationships across different events and markets. SeatsConnect provides one professional infrastructure layer for accessing suitable ticket and hospitality products. Search inventory, build customer quotations, confirm products and manage orders through one connected environment.",
      flow: ["SEARCH", "QUOTE", "BOOK", "MANAGE"],
      consoleTitle: "travel-supply",
      variant: "pipeline",
      closing: "Multiple events and markets. One B2B connection.",
    },
    finalCta: {
      eyebrow: "Travel solutions",
      title: "Add Events to Your Travel Offering.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Book a Demo", href: routes.contact },
    },
  },
  concierge: {
    hero: {
      eyebrow: "Concierge & Lifestyle",
      title: "Global Event Access for",
      titleAccent: "Your Clients.",
      description:
        "Respond faster to ticket and hospitality requests through one professional B2B connection. SeatsConnect helps concierge and lifestyle management businesses access global event supply for their clients.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Talk to Our Team", href: routes.contact },
      image: pages.concierge,
    },
    fit: {
      kicker: "For concierge",
      title: "Your Clients Ask.",
      titleAccent: "SeatsConnect Helps You Source.",
      description:
        "From football and Formula 1 to concerts, tennis and premium hospitality, client requirements can span multiple countries and event categories. SeatsConnect brings connected supply into one professional environment. Your client relationship stays with you — SeatsConnect supports your business behind the scenes.",
    },
    workflow: {
      kicker: "Workflow",
      title: "Built Around the",
      titleAccent: "Concierge Workflow.",
      description:
        "Where supported, customer quotations and experiences can be presented using your own business identity.",
      flow: [
        "Receive Request",
        "Search Options",
        "Create Proposal",
        "Confirm Booking",
        "Manage Fulfilment",
      ],
      consoleTitle: "concierge-workflow",
      variant: "concierge",
    },
    finalCta: {
      eyebrow: "Concierge solutions",
      title: "Respond to More Client Requests.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Talk to Our Team", href: routes.contact },
    },
  },
  corporate: {
    hero: {
      eyebrow: "Corporate & Events",
      title: "Event Access for",
      titleAccent: "Corporate Customers.",
      description:
        "Source tickets and hospitality for client entertainment, incentives and corporate events. SeatsConnect gives corporate travel and event businesses access to professional event supply through one connected platform.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Talk to Our Team", href: routes.contact },
      image: pages.corporate,
    },
    fit: {
      kicker: "For corporate",
      title: "Experiences That Build",
      titleAccent: "Relationships.",
      description: "Use SeatsConnect to support customer requirements including:",
      items: [
        "Client entertainment",
        "Incentive programmes",
        "Corporate hospitality",
        "Employee rewards",
        "Group attendance",
        "Business events",
        "Premium experiences",
      ],
    },
    workflow: {
      kicker: "Workflow",
      title: "From Requirement to",
      titleAccent: "Confirmed Booking.",
      description:
        "Search suitable options, prepare a customer proposal and manage confirmed orders through one professional workflow. For more complex requirements, partners can also submit bespoke requests.",
      flow: ["SEARCH", "PROPOSAL", "BOOK", "MANAGE"],
      consoleTitle: "corporate-workflow",
      variant: "request",
    },
    finalCta: {
      eyebrow: "Corporate solutions",
      title: "Access Events for Corporate Customers.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: {
        label: "Submit a Corporate Request",
        href: routes.request,
      },
    },
  },
  hotels: {
    hero: {
      eyebrow: "Hotels & Hospitality",
      title: "Extend the Guest Experience",
      titleAccent: "Beyond the Hotel.",
      description:
        "Give your concierge and guest-service teams access to global events through one B2B platform. SeatsConnect helps hotels respond to guest requests for tickets, hospitality and live experiences.",
      primaryCta: { label: "Talk to Our Team", href: routes.contact },
      secondaryCta: { label: "Join Our Network", href: routes.joinPartner },
      image: pages.hotels,
    },
    fit: {
      kicker: "For hotels",
      title: "Help Guests",
      titleAccent: "Experience More.",
      description: "Guests often rely on hotels for access to:",
      items: [
        "Sporting events",
        "Concerts",
        "Premium hospitality",
        "Shows",
        "Major local events",
        "International events",
      ],
      closing:
        "SeatsConnect provides a professional route for sourcing suitable products.",
    },
    workflow: {
      kicker: "Guest service",
      title: "Simple for",
      titleAccent: "Your Team.",
      description: "One connected workflow for guest requirements.",
      flow: ["SEARCH", "QUOTE", "CONFIRM", "MANAGE", "FULFIL"],
      consoleTitle: "hotel-concierge",
      variant: "request",
    },
    finalCta: {
      eyebrow: "Hotel solutions",
      title: "Extend the Guest Experience.",
      primaryCta: { label: "Talk to Our Team", href: routes.contact },
      secondaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
    },
  },
  "sports-travel": {
    hero: {
      eyebrow: "Sports Travel",
      title: "Build Complete Sporting",
      titleAccent: "Event Experiences.",
      description:
        "Connect event tickets and hospitality with your existing sports travel operation. SeatsConnect gives sports travel businesses access to event inventory through one B2B connection.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Talk to Our Team", href: routes.contact },
      image: pages.sportsTravel,
    },
    fit: {
      kicker: "For sports travel",
      title: "Event Supply for Your",
      titleAccent: "Travel Programmes.",
      description: "Potential categories include:",
      items: [
        "Football",
        "Formula 1",
        "Tennis",
        "Motorsport",
        "Boxing",
        "UFC",
        "Golf",
        "Major tournaments",
        "Premium hospitality",
      ],
    },
    workflow: {
      kicker: "Combined offering",
      title: "Combine With Your",
      titleAccent: "Existing Services.",
      description:
        "SeatsConnect can provide the event inventory layer while your business manages:",
      flow: ["EVENT INVENTORY", "YOUR SERVICES", "COMPLETE EXPERIENCE"],
      consoleTitle: "sports-travel",
      variant: "combine",
      sideItems: [
        "Flights",
        "Hotels",
        "Transfers",
        "Tours",
        "Destination services",
        "Customer packages",
      ],
      closing: "Your travel product. Connected event supply.",
    },
    finalCta: {
      eyebrow: "Sports travel",
      title: "Build Complete Event Experiences.",
      primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      secondaryCta: { label: "Talk to Our Team", href: routes.contact },
    },
  },
  "white-label": {
    hero: {
      eyebrow: "White Label",
      title: "Global Event Supply.",
      titleAccent: "Your Customer Experience.",
      description:
        "Connect SeatsConnect inventory and booking infrastructure into your own brand. SeatsConnect supports approved partners that want event products integrated directly into their existing customer environment.",
      primaryCta: { label: "Discuss White Label", href: routes.contact },
      secondaryCta: { label: "Join Our Network", href: routes.joinPartner },
      image: pages.whiteLabel,
    },
    fit: {
      kicker: "White label",
      title: "Your Brand.",
      titleAccent: "Our Infrastructure.",
      description:
        "White-label solutions can allow approved partners to provide an event discovery and booking experience under their own brand. Potential implementations include:",
      items: [
        "Branded event website",
        "Integrated search",
        "Customer portal",
        "Embedded inventory",
        "Mobile application",
        "Custom booking journey",
      ],
      closing: "Your customer. Your brand. Connected global supply.",
    },
    workflow: {
      kicker: "API powered",
      title: "Built Around",
      titleAccent: "Your Business.",
      description:
        "Rather than forcing customers to leave your ecosystem, SeatsConnect can provide the infrastructure behind your own customer experience. White-label solutions can be supported by SeatsConnect API infrastructure for event data, inventory, pricing, bookings and fulfilment information.",
      flow: ["PARTNER BRAND", "SeatsConnect API", "CUSTOMER EXPERIENCE"],
      consoleTitle: "white-label-api",
      variant: "api",
    },
    finalCta: {
      eyebrow: "White label",
      title: "Global Supply. Your Customer Experience.",
      primaryCta: { label: "Discuss White Label", href: routes.contact },
      secondaryCta: { label: "Explore API", href: routes.api },
    },
  },
};

export const hubFinalCta = {
  eyebrow: "Solutions",
  title: "Built Around Your Business.",
  description:
    "Connect your business to global event supply through SeatsConnect — travel, concierge, hospitality, corporate events and digital distribution.",
  primaryCta: { label: "Join Our Network", href: routes.joinPartner },
  secondaryCta: { label: "Talk to Our Team", href: routes.contact },
} as const;

export const networkChannels = [
  "Travel",
  "Concierge",
  "Corporate",
  "Hotels",
  "Sports Travel",
  "White Label",
] as const;
