"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Code2,
  LayoutTemplate,
  Plug,
  Puzzle,
  MonitorSmartphone,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { launchFlags } from "@/lib/constants/features";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp } = siteImages;

const access: {
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Platform",
    text: "Use SeatsConnect workflows to search, quote, book and fulfil.",
    icon: MonitorSmartphone,
    image: exp.corporate,
  },
  {
    title: "API",
    text: "Connect inventory and booking into your existing systems.",
    icon: Code2,
    image: exp.network,
  },
  {
    title: "White Label",
    text: "Deliver discovery and booking under your own brand.",
    icon: LayoutTemplate,
    image: exp.venue,
  },
  {
    title: "Embedded Solutions",
    text: "Surface live availability inside customer-facing journeys.",
    icon: Puzzle,
    image: exp.hotel,
  },
  {
    title: "Custom Integrations",
    text: "Tailor connectivity to specialised operational requirements.",
    icon: Plug,
    image: exp.destination,
  },
];

export function PlatformTechnology() {
  return (
    <HomeFrame variant="plain">
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <HomeKicker>Technology</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            Technology That Works{" "}
            <span className="text-brand-orange">in the Background.</span>
          </h2>
          <p className="mt-4 text-brand-gray-text leading-relaxed">
            SeatsConnect provides infrastructure without forcing every business
            to operate in the same way. Partners can connect through the access
            method that fits their model.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {access.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 55}
            className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
          >
            <article className="group home-card-lift h-full overflow-hidden rounded-2xl border border-orange-100 bg-white">
              <CardMedia
                src={item.image}
                alt={item.title}
                heightClass="h-32 sm:h-36"
              />
              <div className="p-5">
                <item.icon
                  className="mb-3 h-5 w-5 text-brand-orange"
                  strokeWidth={1.6}
                />
                <h3 className="font-tech text-lg font-bold text-brand-dark">
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

      <Reveal delay={200}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={routes.api}>
            Explore API
            <ArrowRight className="h-4 w-4" />
          </Button>
          {launchFlags.developerPortal ? (
            <Button href={routes.developers} variant="outline">
              Developer Access
            </Button>
          ) : null}
        </div>
      </Reveal>
    </HomeFrame>
  );
}
