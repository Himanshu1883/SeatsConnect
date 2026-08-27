"use client";

import type { LucideIcon } from "lucide-react";
import {
  ConciergeBell,
  Handshake,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";

const domains: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Ticketing",
    text: "Understanding how event inventory moves through professional channels.",
    icon: Ticket,
  },
  {
    title: "Events",
    text: "Experience across live entertainment, sport and premium occasions.",
    icon: Trophy,
  },
  {
    title: "Hospitality",
    text: "Suites, packages and premium products with structured distribution needs.",
    icon: ConciergeBell,
  },
  {
    title: "Distribution",
    text: "Connecting supply with approved B2B partners — not open marketplaces.",
    icon: Handshake,
  },
  {
    title: "B2B sales",
    text: "Supporting the businesses that already serve customers internationally.",
    icon: Users,
  },
];

export function AboutExperience() {
  return (
    <HomeFrame
      id="experience"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>Heritage</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Built on{" "}
                  <span className="text-brand-orange">Experience.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect is built on more than 30 years of experience
                  across ticketing, events, hospitality, distribution and B2B
                  sales. That experience gives us an understanding of the
                  challenges faced across the full distribution chain — from
                  the organisations controlling inventory to the businesses
                  serving the end customer.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-orange-100/90 shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
                <CardMedia
                  src={siteImages.about.liveEvents}
                  alt="Live events and hospitality experience"
                  heightClass="h-44 sm:h-52"
                  className="rounded-none"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {domains.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_8px_22px_rgba(40,30,20,0.04)] sm:p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]">
                    <item.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="mt-3 font-tech text-[14px] font-bold text-brand-dark sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-snug text-brand-gray-text sm:text-[13px]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
