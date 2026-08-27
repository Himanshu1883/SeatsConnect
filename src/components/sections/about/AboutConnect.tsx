"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers,
  Store,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp } = siteImages;

const sides: {
  title: string;
  text: string;
  points: string[];
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Professional supply",
    text: "Venues, promoters, hospitality providers and approved suppliers connecting inventory once.",
    points: ["Tickets", "Hospitality", "Allocations"],
    icon: Store,
    image: exp.stadium,
  },
  {
    title: "Professional demand",
    text: "Travel, concierge, corporate, hotel and sports-travel businesses already serving customers.",
    points: ["Travel", "Concierge", "Corporate"],
    icon: Users,
    image: exp.travel,
  },
];

const outcomes = [
  {
    title: "Connected",
    text: "One infrastructure layer between both sides of distribution.",
    icon: Layers,
  },
  {
    title: "Controlled",
    text: "Approved partners and structured commercial access only.",
    icon: CheckCircle2,
  },
  {
    title: "Efficient",
    text: "Fewer fragmented integrations across markets and channels.",
    icon: Building2,
  },
];

export function AboutConnect() {
  return (
    <HomeFrame
      id="connect"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <HomeKicker>Infrastructure Layer</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
              Connecting Supply and{" "}
              <span className="text-brand-orange">Demand.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Our platform connects venues, promoters, hospitality providers and
              approved suppliers with professional B2B distribution partners
              serving customers internationally — making event distribution more
              connected, controlled and efficient.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-3">
            <SideCard side={sides[0]!} />
            <div className="flex items-center justify-center py-1 lg:w-14">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange/25 bg-white text-brand-orange shadow-[0_10px_24px_rgba(255,107,0,0.16)]">
                <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" strokeWidth={1.9} />
              </span>
            </div>
            <SideCard side={sides[1]!} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-3 sm:grid-cols-3">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_8px_22px_rgba(40,30,20,0.04)] sm:p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <item.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </span>
                <h3 className="mt-3 font-tech text-[15px] font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-brand-gray-text">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function SideCard({ side }: { side: (typeof sides)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-orange-100/90 bg-white shadow-[0_14px_40px_rgba(40,30,20,0.06)]">
      <div className="relative h-36 overflow-hidden sm:h-40">
        <Image
          src={side.image}
          alt={side.title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
        />
        <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.3)]">
          <side.icon className="h-5 w-5" strokeWidth={1.9} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-tech text-lg font-bold text-brand-dark">
          {side.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-gray-text">
          {side.text}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {side.points.map((point) => (
            <span
              key={point}
              className="rounded-full border border-orange-100 bg-[#faf7f3] px-2.5 py-1 text-[11px] font-medium text-brand-dark"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
