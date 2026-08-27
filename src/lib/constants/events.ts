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
  { id: "concerts", label: "Music & Entertainment" },
  // { id: "mega", label: "Tournaments" },
];

export const events: EventItem[] = [
  {
    id: "fifa",
    title: "Football tournaments",
    category: "mega",
    badge: "Tournament",
    period: "2026/2027",
    description:
      "Full premium package listings, VIP boxes, and hospitality allocations across all stadiums.",
    location: "Global Venues",
    tag: "Instant API Feed",
    image: "/assets/hero/football-stadium.jpg",
    imageAlt: "Football tournament stadium",
  },
  {
    id: "f1",
    title: "Motorsport events",
    category: "sports",
    badge: "Motorsport",
    period: "Full Calendar",
    description:
      "Paddock Club hospitality, premium grandstand seats, and suite-only track options.",
    location: "Monaco, Singapore, ME",
    tag: "Dynamic Pricing",
    image: "/assets/hero/formula1.jpg",
    imageAlt: "Formula 1 cars on the race track",
  },
  {
    id: "concerts",
    title: "Global musical concerts",
    category: "concerts",
    badge: "Live Tours",
    period: "2026/2027",
    description:
      "Top tier shows: Coldplay, Ed Sheeran, Taylor Swift, Lady Gaga, and prestigious stadium tours.",
    location: "Global Cities",
    tag: "High Demand",
    image: "/assets/hero/concert.jpg",
    imageAlt: "Global stadium concert tour",
  },
  {
    id: "rugby",
    title: "Rugby tournaments",
    category: "mega",
    badge: "Tournament",
    period: "Elite Access",
    description:
      "Official lounge passes, primary category tickets, and verified corporate block packages.",
    location: "Strategic Venues",
    tag: "Pre-booking Active",
    image: "/assets/events/rugby.jpg",
    imageAlt: "Rugby World Cup",
  },
  {
    id: "tennis",
    title: "Tennis grand slams & top ATP tour events",
    category: "sports",
    badge: "Tennis Majors",
    period: "Grand Slam",
    description:
      "Debenture court access, premium hospitality pathways, and center court boxes.",
    location: "London, New York, Paris",
    tag: "Guaranteed Delivery",
    image: "/assets/hero/tennis.jpg",
    imageAlt: "Tennis grand slam court",
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
    image: "/assets/experiences/sports-travel.jpg",
    imageAlt: "EPL and Champions League stadium",
  },
];
