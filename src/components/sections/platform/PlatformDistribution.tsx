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
    text: "Travel agencies, tour operators and specialist travel businesses.",
    image: exp.travel,
  },
  {
    title: "Concierge",
    text: "Lifestyle management and private-client service businesses.",
    image: exp.concierge,
  },
  {
    title: "Corporate",
    text: "Corporate travel, incentives and event agencies.",
    image: exp.corporate,
  },
  {
    title: "Hotels",
    text: "Hotels and guest-service hospitality partners.",
    image: exp.hotel,
  },
  {
    title: "Sports Travel",
    text: "Specialist programmes around major sporting events.",
    image: exp.sportsTravel,
  },
  {
    title: "Event Agencies",
    text: "Professional businesses creating event-led experiences.",
    image: exp.venue,
  },
  {
    title: "White-Label Platforms",
    text: "Branded websites and applications powered by SeatsConnect.",
    image: exp.network,
  },
  {
    title: "Other Approved Partners",
    text: "Additional B2B channels under controlled distribution rules.",
    image: exp.destination,
  },
];

export function PlatformDistribution() {
  const [active, setActive] = useCycle(channels.length, 2200);

  return (
    <HomeFrame variant="plain">
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <HomeKicker>Distribution</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            Distribution{" "}
            <span className="text-brand-orange">Infrastructure.</span>
          </h2>
          <p className="mt-4 text-brand-gray-text leading-relaxed">
            Once connected, inventory can be made available through approved
            professional channels according to the relevant commercial
            arrangement.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel, i) => (
          <Reveal key={channel.title} delay={i * 45}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group home-card-lift w-full overflow-hidden rounded-2xl border text-left transition-all",
                i === active
                  ? "border-brand-orange/55 bg-white shadow-lg"
                  : "border-orange-100 bg-white/90"
              )}
            >
              <CardMedia
                src={channel.image}
                alt={channel.title}
                heightClass="h-28 sm:h-32"
              />
              <div className="p-4">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <h3 className="font-tech text-sm font-bold text-brand-dark">
                    {channel.title}
                  </h3>
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-widest",
                      i === active
                        ? "text-brand-orange"
                        : "text-brand-gray-text"
                    )}
                  >
                    {i === active ? "live" : "channel"}
                  </span>
                </div>
                <p className="text-xs text-brand-gray-text leading-relaxed">
                  {channel.text}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </HomeFrame>
  );
}
