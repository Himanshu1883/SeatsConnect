"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { HomeFrame } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp, about } = siteImages;

const ctaStrip = [
  { src: exp.stadium, label: "Supply" },
  { src: about.liveEvents, label: "Events" },
  { src: exp.hospitality, label: "Hospitality" },
  { src: about.travel, label: "Demand" },
] as const;

export function AboutFinalCTA() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#ff6b00_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] border border-orange-100 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
            <ExperienceStrip items={ctaStrip} className="mx-auto mb-8 max-w-3xl" />
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
              About SeatsConnect
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              Ready to Connect Supply or Distribution?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Whether you control inventory or serve customers through travel,
              concierge, corporate or hospitality workflows — talk to our team
              about joining the SeatsConnect network.
            </p>
            <ButtonGroup className="justify-center">
              <Button href={routes.contact}>Talk to Our Team</Button>
              <Button href={routes.join} variant="outline">
                Join Our Network
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
