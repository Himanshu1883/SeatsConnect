"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Code2,
  Layers,
  Plane,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

const focusAreas: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Ticketing infrastructure",
    text: "Technology that supports professional inventory movement.",
    icon: Layers,
  },
  {
    title: "Travel & hospitality",
    text: "Distribution solutions for industries serving event customers.",
    icon: Plane,
  },
  {
    title: "B2B connectivity",
    text: "APIs and platforms for approved supply and demand partners.",
    icon: Code2,
  },
];

export function AboutGroup() {
  return (
    <HomeFrame
      id="seatsgroup"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-10">
            <div className="overflow-hidden rounded-2xl border border-orange-100/90 shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
              <CardMedia
                src={siteImages.about.section}
                alt="SeatsGroup technology and teams"
                heightClass="h-52 sm:h-64 lg:h-full lg:min-h-[320px]"
                className="rounded-none"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>Parent Brand</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Part of{" "}
                  <span className="text-brand-orange">{siteConfig.parentBrand}.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect is part of SeatsGroup, a technology group focused
                  on developing infrastructure and distribution solutions for
                  the ticketing, travel and hospitality industries.
                </p>
              </div>

              <ul className="space-y-3">
                {focusAreas.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-orange-100/90 bg-white px-4 py-3.5 shadow-[0_6px_16px_rgba(40,30,20,0.04)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <item.icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <div>
                      <p className="font-tech text-[14px] font-bold text-brand-dark">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-3.5 py-3.5 sm:px-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <Building2 className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <p className="text-[12px] leading-relaxed text-brand-dark sm:text-[13px]">
                  SeatsConnect carries that heritage into a dedicated B2B
                  distribution infrastructure for event supply and professional
                  demand.
                </p>
              </div>

              <Link
                href={routes.contact}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
