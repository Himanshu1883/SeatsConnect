"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  ConciergeBell,
  Ticket,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp } = siteImages;

const supplyTypes: {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
}[] = [
  {
    title: "Venues",
    description:
      "Connect available ticket and hospitality products with professional distribution.",
    icon: Building2,
    image: exp.stadium,
    tags: ["Tickets", "Hospitality", "Allocations"],
  },
  {
    title: "Promoters",
    description: "Extend event reach through selected B2B channels.",
    icon: Ticket,
    image: exp.concert,
    tags: ["Events", "Packages", "Markets"],
  },
  {
    title: "Hospitality Providers",
    description:
      "Reach professional travel, corporate and concierge buyers.",
    icon: ConciergeBell,
    image: exp.hospitality,
    tags: ["Suites", "Packages", "Premium"],
  },
  {
    title: "Event Organisers",
    description:
      "Connect event products to an international distribution network.",
    icon: CalendarDays,
    image: exp.venue,
    tags: ["Products", "Access", "Channels"],
  },
  {
    title: "Approved Suppliers",
    description:
      "Integrate professional inventory into the SeatsConnect infrastructure.",
    icon: BadgeCheck,
    image: exp.tickets,
    tags: ["API", "Feeds", "Integration"],
  },
];

export function SuppliersSupplyTypes() {
  return (
    <HomeFrame
      id="supply-types"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <HomeKicker>Supply Types</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
              Built for Different Types of{" "}
              <span className="text-brand-orange">Supply.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              SeatsConnect supports venues, promoters, hospitality providers,
              event organisers and approved suppliers connecting inventory into
              one professional distribution layer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
            {supplyTypes.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_6px_16px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(40,30,20,0.08)]"
              >
                <div className="relative h-32 overflow-hidden sm:h-36">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  />
                </div>
                <div className="relative flex flex-1 flex-col p-4 sm:p-5">
                  <span className="absolute -top-5 left-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-white bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]">
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <h3 className="mt-2 font-tech text-[15px] font-bold text-brand-dark sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[13px] leading-snug text-brand-gray-text">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-orange-100 bg-[#faf7f3] px-2.5 py-1 text-[11px] font-medium text-brand-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
