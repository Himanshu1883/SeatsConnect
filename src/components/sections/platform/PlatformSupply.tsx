"use client";

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Hotel,
  Plug,
  Server,
  Ticket,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp } = siteImages;

const connectivity: {
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Ticketing Systems",
    text: "Connect live ticket inventory into one distribution layer.",
    icon: Ticket,
    image: exp.tickets,
  },
  {
    title: "Hospitality Platforms",
    text: "Surface suites, packages and premium hospitality products.",
    icon: Hotel,
    image: exp.hospitality,
  },
  {
    title: "Inventory Feeds",
    text: "Keep availability structured and continuously updated.",
    icon: Database,
    image: exp.venue,
  },
  {
    title: "Supplier APIs",
    text: "Integrate directly through supported API connectivity.",
    icon: Code2,
    image: exp.stadium,
  },
  {
    title: "Reservation Systems",
    text: "Align booking workflows with existing operational systems.",
    icon: Server,
    image: exp.corporate,
  },
  {
    title: "Custom Technology",
    text: "Extend connectivity for specialised supplier environments.",
    icon: Plug,
    image: exp.concert,
  },
];

export function PlatformSupply() {
  return (
    <HomeFrame tinted variant="grid">
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <HomeKicker>Supply</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            Supply <span className="text-brand-orange">Connectivity.</span>
          </h2>
          <p className="mt-4 text-brand-gray-text leading-relaxed">
            Connect inventory through supported APIs, data feeds and custom
            integrations — without maintaining separate connections to every
            distribution partner.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <SupplyDiagram />
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {connectivity.map((item, i) => (
          <Reveal key={item.title} delay={100 + i * 50}>
            <article className="group home-card-lift h-full overflow-hidden rounded-2xl border border-orange-100 bg-white">
              <CardMedia
                src={item.image}
                alt={item.title}
                heightClass="h-32 sm:h-36"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <item.icon
                    className="h-5 w-5 text-brand-orange"
                    strokeWidth={1.6}
                  />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gray-text">
                    connect
                  </span>
                </div>
                <h3 className="font-tech text-base font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-brand-gray-text leading-relaxed">
                  {item.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </HomeFrame>
  );
}

function SupplyDiagram() {
  const nodes = ["Ticketing", "Hospitality", "Feeds", "APIs"];

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-orange-100 bg-white px-4 py-6 sm:px-8 sm:py-8 shadow-[0_12px_40px_rgba(26,26,26,0.04)]">
      <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange">
        Supply → SeatsConnect layer
      </p>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-4">
        <div className="grid w-full max-w-md grid-cols-2 gap-2.5 lg:max-w-[16rem]">
          {nodes.map((node) => (
            <div
              key={node}
              className="rounded-xl border border-orange-100 bg-brand-orange-light/60 px-3 py-3 text-center"
            >
              <p className="font-tech text-xs font-bold text-brand-dark">
                {node}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:flex-col" aria-hidden>
          <span className="hidden h-px w-10 bg-brand-orange/40 sm:block lg:h-8 lg:w-px" />
          <span className="font-mono text-[10px] text-brand-orange">→</span>
          <span className="hidden h-px w-10 bg-brand-orange/40 sm:block lg:h-8 lg:w-px" />
        </div>

        <div className="w-full max-w-xs rounded-2xl border border-brand-orange/40 bg-gradient-to-br from-brand-orange/15 to-white px-5 py-5 text-center shadow-[0_8px_24px_rgba(212,165,116,0.12)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange">
            Hub
          </p>
          <p className="mt-1 font-tech text-lg font-bold text-brand-dark">
            SeatsConnect™
          </p>
          <p className="mt-1 text-xs text-brand-gray-text">
            Infrastructure layer
          </p>
        </div>

        <div className="flex items-center gap-2 lg:flex-col" aria-hidden>
          <span className="hidden h-px w-10 bg-brand-orange/40 sm:block lg:h-8 lg:w-px" />
          <span className="font-mono text-[10px] text-brand-orange">→</span>
          <span className="hidden h-px w-10 bg-brand-orange/40 sm:block lg:h-8 lg:w-px" />
        </div>

        <div className="w-full max-w-[14rem] rounded-xl border border-orange-100 bg-white px-4 py-4 text-center">
          <p className="font-tech text-sm font-bold text-brand-dark">
            Approved Partners
          </p>
          <p className="mt-1 text-[11px] text-brand-gray-text leading-snug">
            Travel · Concierge · Corporate · Hotels
          </p>
        </div>
      </div>
    </div>
  );
}
