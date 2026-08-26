"use client";

import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal, useCycle } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const channels = [
  {
    title: "Travel",
    description:
      "Travel agencies, tour operators and specialist travel businesses.",
    image: exp.travel,
  },
  {
    title: "Concierge",
    description:
      "Concierge companies, lifestyle management businesses and private-client services.",
    image: exp.concierge,
  },
  {
    title: "Corporate",
    description:
      "Corporate travel companies, incentive businesses and event agencies.",
    image: exp.corporate,
  },
  {
    title: "Hospitality",
    description:
      "Hotels, guest-service businesses and hospitality partners.",
    image: exp.hospitality,
  },
  {
    title: "Sports Travel",
    description:
      "Specialist businesses creating travel programmes around major sporting events.",
    image: exp.sportsTravel,
  },
  {
    title: "Digital Distribution",
    description:
      "Approved B2B platforms, white-label websites and integrated digital partners.",
    image: exp.network,
  },
];

export function HomeNetwork() {
  const [active, setActive] = useCycle(channels.length, 2400);

  return (
    <HomeFrame tinted variant="grid">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <HomeKicker>Network</HomeKicker>
          <h2 className="font-tech text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mt-3 mb-4">
            Connect to Professional Demand Worldwide.
          </h2>
          <p className="text-brand-gray-text leading-relaxed">
            SeatsConnect connects event supply with businesses already serving
            customers across international markets.
          </p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((channel, i) => (
          <Reveal key={channel.title} delay={i * 60}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group home-card-lift w-full text-left overflow-hidden rounded-2xl border h-full transition-all",
                i === active
                  ? "border-brand-orange/60 bg-white shadow-lg"
                  : "border-orange-100 bg-white/80"
              )}
            >
              <CardMedia
                src={channel.image}
                alt={`${channel.title} distribution channel`}
                heightClass="h-32 sm:h-36"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-tech font-bold text-brand-dark">
                    {channel.title}
                  </h3>
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-widest",
                      i === active ? "text-brand-orange" : "text-brand-gray-text"
                    )}
                  >
                    {i === active ? "live" : "channel"}
                  </span>
                </div>
                <p className="text-sm text-brand-gray-text leading-relaxed">
                  {channel.description}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      <p className="text-center font-tech font-semibold text-brand-dark mt-10">
        One connection can open multiple professional distribution channels.
      </p>
    </HomeFrame>
  );
}
