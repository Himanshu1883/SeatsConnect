export type EventCategory = "all" | "sports" | "concerts" | "mega";

export type EventItem = {
  id: string;
  title: string;
  category: Exclude<EventCategory, "all">;
  badge: string;
  period: string;
  description: string;
  location: string;
  tag: string;
  image: string;
  imageAlt: string;
};

export const eventFilters: { id: EventCategory; label: string }[] = [
  { id: "all", label: "All Events" },
  { id: "sports", label: "Sports" },
  { id: "concerts", label: "Live Tours" },
  { id: "mega", label: "Tournaments" },
];

export const events: EventItem[] = [
  {
    id: "fifa",
    title: "FIFA World Cup Matches",
    category: "mega",
    badge: "Tournament",
    period: "2026/2027",
    description:
      "Full premium package listings, VIP boxes, and hospitality allocations across all stadiums.",
    location: "Global Venues",
    tag: "Instant API Feed",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    imageAlt: "FIFA World Cup",
  },
  {
    id: "f1",
    title: "Formula 1 Grand Prix",
    category: "sports",
    badge: "Motorsport",
    period: "Full Calendar",
    description:
      "Paddock Club hospitality, premium grandstand seats, and suite-only track options.",
    location: "Monaco, Singapore, ME",
    tag: "Dynamic Pricing",
    image: "/events/f2-racing-car.jpg",
    imageAlt: "Formula 2 racing car on track",
  },
  {
    id: "concerts",
    title: "Global Stadium Tours",
    category: "concerts",
    badge: "Live Tours",
    period: "2026/2027",
    description:
      "Top tier shows: Coldplay, Ed Sheeran, Taylor Swift, Lady Gaga, and prestigious stadium tours.",
    location: "Global Cities",
    tag: "High Demand",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    imageAlt: "Global stadium tours",
  },
  {
    id: "rugby",
    title: "Rugby World Cup Finals",
    category: "mega",
    badge: "Tournament",
    period: "Elite Access",
    description:
      "Official lounge passes, primary category tickets, and verified corporate block packages.",
    location: "Strategic Venues",
    tag: "Pre-booking Active",
    image: "https://images.unsplash.com/photo-1652107990078-71ac8b908302?w=600&q=80",
    imageAlt: "Rugby World Cup",
  },
  {
    id: "tennis",
    title: "Wimbledon & Grand Slams",
    category: "sports",
    badge: "Tennis Majors",
    period: "Grand Slam",
    description:
      "Debenture court access, premium hospitality pathways, and center court boxes.",
    location: "London, New York, Paris",
    tag: "Guaranteed Delivery",
    image: "https://images.unsplash.com/photo-1751893710672-360fd5cc4f71?w=600&q=80",
    imageAlt: "Wimbledon and Grand Slams",
  },
  {
    id: "football",
    title: "EPL & Champions League",
    category: "sports",
    badge: "Football",
    period: "EPL, La Liga, UCL",
    description:
      "Regular club packages, elite executive boxes, and high-security ticket fulfillment channels.",
    location: "European Stadiums",
    tag: "SaaS API Router",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
    imageAlt: "EPL and Champions League",
  },
];
