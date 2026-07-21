export const siteImages = {
  hero: {
    backgrounds: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=80",
      "https://images.unsplash.com/photo-1774487672107-f7111d659a02?w=1920&q=80",
    ],
    background:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80",
    panelSlides: [
      {
        src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900&q=80",
        alt: "Premier football stadium at night",
        label: "Stadium Nights",
        sublabel: "EPL · UCL · La Liga",
      },
      {
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
        alt: "Live concert atmosphere",
        label: "Global Stadium Tours",
        sublabel: "Coldplay · Taylor Swift · Ed Sheeran",
      },
      {
        src: "/events/f2-racing-car.jpg",
        alt: "Formula 2 racing car on track",
        label: "Motorsport Calendar",
        sublabel: "F1 · F2 · Formula E",
      },
      {
        src: "https://images.unsplash.com/photo-1751893710672-360fd5cc4f71?w=900&q=80",
        alt: "Wimbledon tennis venue",
        label: "Grand Slam Access",
        sublabel: "Wimbledon · US Open · Roland Garros",
      },
    ],
    stadium:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=900&q=80",
    concert:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    motorsport:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  trustStrip:
    "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80",
  about: {
    section:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
    travel:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    liveEvents:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
  },
  advantage:
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&q=80",
  engine:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  events: {
    section:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
  },
  reach: {
    section:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80",
    map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80",
  },
  calculator:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
  contact:
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&q=80",
} as const;

export const sectionBackgrounds = {
  hero: siteImages.hero.background,
  trustStrip: siteImages.trustStrip,
  about: siteImages.about.section,
  advantage: siteImages.advantage,
  engine: siteImages.engine,
  events: siteImages.events.section,
  reach: siteImages.reach.section,
  calculator: siteImages.calculator,
  contact: siteImages.contact,
} as const;
