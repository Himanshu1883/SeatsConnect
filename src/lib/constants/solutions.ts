import { routes } from "@/lib/constants/routes";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp } = siteImages;

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
