"use client";

import type { LucideIcon } from "lucide-react";
import {
  Globe2,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const pillars: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Global supply",
    text: "Connect inventory from venues, promoters and approved suppliers.",
    icon: Globe2,
  },
  {
    title: "Professional demand",
    text: "Serve travel, concierge, corporate and hospitality businesses.",
    icon: Network,
  },
  {
    title: "Controlled access",
    text: "Keep distribution inside approved B2B relationships.",
    icon: ShieldCheck,
  },
];

export function AboutMission() {
  return (
    <HomeFrame
      id="mission"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-white shadow-[0_16px_44px_rgba(40,30,20,0.06)]">
            <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="p-6 sm:p-8 lg:p-10">
                <HomeKicker>Mission</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Our <span className="text-brand-orange">Mission.</span>
                </h2>
                <p className="mt-4 max-w-lg font-tech text-lg font-semibold leading-snug text-brand-dark sm:text-xl">
                  To create the technology infrastructure that connects global
                  event supply with professional B2B demand.
                </p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect is not a consumer marketplace. It is the
                  connectivity layer behind professional distribution —
                  Search → Quote → Book → Fulfil for approved businesses.
                </p>
              </div>

              <div className="border-t border-orange-100/90 bg-[#faf7f3] p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
                    <Target className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <p className="font-tech text-sm font-bold text-brand-dark">
                    What we build toward
                  </p>
                </div>
                <ul className="space-y-3">
                  {pillars.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-orange-100/90 bg-white px-4 py-3.5 shadow-[0_6px_16px_rgba(40,30,20,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <item.icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                          strokeWidth={1.9}
                        />
                        <div>
                          <p className="font-tech text-[14px] font-bold text-brand-dark">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
