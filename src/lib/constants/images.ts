/**
 * Local imagery for SeatsConnect (downloaded Unsplash assets in /public/assets).
 * Full-bleed banners: heroes / PageHero only.
 * Experience photos: cards, media panels, strips — never inside live consoles or diagrams.
 */
const a = (path: string) => `/assets/${path}`;

export const siteImages = {
  hero: {
    backgrounds: [
      /* Concert / stadium tour */
      a("hero/concert.jpg"),
      /* Football stadium pitch */
      a("hero/football-stadium.jpg"),
      /* Stadium night */
      a("hero/stadium-night-lit.jpg"),
      /* Crowd at live event */
      a("hero/live-crowd.jpg"),
      /* Formula 1 — Circuit of the Americas */
      a("hero/formula1.jpg"),
      /* Tennis court */
      a("hero/tennis.jpg"),
      /* Premium hospitality dining */
      a("hero/hospitality-dining.jpg"),
      /* Travel / destination planning */
      a("hero/travel-destination.jpg"),
    ],
    background: a("hero/concert.jpg"),
  },

  /** Card / panel experience photography (not section backgrounds). */
  experiences: {
    stadium: a("hero/stadium-night-lit.png"),
    football: a("hero/football-stadium.jpg"),
    formula1: a("hero/formula1.jpg"),
    tennis: a("hero/tennis.jpg"),
    concert: a("hero/concert.jpg"),
    /** Arena / theatre seating — venue inventory */
    venue: a("experiences/venue.jpg"),
    hospitality: a("experiences/hospitality.jpg"),
    /** Luxury suite / guest room */
    suite: a("experiences/suite.jpg"),
    /** Travel agency / itinerary context */
    travel: a("experiences/travel.jpg"),
    /** Global reach — aircraft window / destination */
    destination: a("experiences/destination.png"),
    hotel: a("experiences/hotel.jpg"),
    /** Corporate / incentive groups */
    corporate: a("experiences/corporate.jpg"),
    /** Hotel lobby / guest services */
    concierge: a("experiences/concierge.jpg"),
    /** Fans in stadium — sports travel packages */
    sportsTravel: a("experiences/sports-travel.jpg"),
    /** Ticketed live experience */
    tickets: a("experiences/tickets.jpg"),
    /** Global connectivity / network */
    network: a("experiences/network.jpg"),
    /** API / platform infrastructure visual */
    api: a("experiences/api.jpg"),
    /** Landmark photos for international region cards */
    regionEurope: a("regions/europe.jpg"),
    regionMiddleEast: a("regions/middle-east.jpg"),
    regionAsia: a("regions/asia.jpg"),
    regionAmericas: a("regions/americas.jpg"),
    regionAfrica: a("regions/africa.jpg"),
    regionAustralasia: a("regions/australasia.jpg"),
  },

  sections: {
    problem: a("sections/city-skyline.jpg"),
    supplier: a("hero/stadium-night-lit.jpg"),
    partner: a("sections/airplane.jpg"),
    workflow: a("sections/event-lights.jpg"),
    api: a("sections/circuit.jpg"),
    /** Controlled access / professional operations */
    control: a("sections/office.jpg"),
    network: a("experiences/network.jpg"),
    tools: a("sections/analytics.jpg"),
    whiteLabel: a("sections/workspace.jpg"),
    international: a("sections/world-map-travel.jpg"),
    experience: a("hero/hospitality-dining.jpg"),
    cta: a("sections/concert-stage.jpg"),
  },
  pages: {
    /** Stadium crowd — platform infrastructure */
    platform: a("pages/platform-hero.png"),
    /** Night concert — supplier inventory at live events */
    suppliers: a("pages/suppliers-hero.jpg"),
    /** Global network map — partner distribution */
    partners: a("pages/partners-hero.png"),
    solutions: a("sections/event-lights.jpg"),
    /** Global network — API infrastructure */
    api: a("pages/api-hero.png"),
    /** About collage — heritage, supply, demand, global connectivity */
    about: a("pages/about-hero.jpg"),
    join: a("pages/conference.jpg"),
    contact: a("sections/office.jpg"),
    request: a("pages/event-hall.jpg"),
    developers: a("pages/developers.jpg"),
    support: a("pages/support.jpg"),
    resources: a("pages/resources.jpg"),
    login: a("sections/city-skyline.jpg"),
    travel: a("sections/airplane.jpg"),
    concierge: a("experiences/hotel.jpg"),
    corporate: a("experiences/corporate.jpg"),
    hotels: a("pages/hotel-exterior.jpg"),
    sportsTravel: a("pages/sports-travel-hero.jpg"),
    whiteLabel: a("sections/office.jpg"),
    legal: a("pages/legal.jpg"),
    topics: a("experiences/network.jpg"),
  },
  trustStrip: a("experiences/tickets.jpg"),
  about: {
    section: a("pages/team.jpg"),
    travel: a("sections/airplane.jpg"),
    liveEvents: a("hero/live-crowd.jpg"),
  },
  advantage: a("hero/football-stadium.jpg"),
  engine: a("sections/circuit.jpg"),
  events: {
    section: a("sections/event-lights.jpg"),
  },
  reach: {
    section: a("experiences/network.jpg"),
    map: a("experiences/network.jpg"),
  },
  calculator: a("sections/analytics.jpg"),
  contact: a("sections/office.jpg"),
} as const;

export function pageBanners(primary?: string): readonly string[] {
  if (!primary) return siteImages.hero.backgrounds;
  const rest = siteImages.hero.backgrounds.filter((src) => src !== primary);
  return [primary, ...rest];
}
