"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { HomeFrame } from "@/components/sections/home/HomeFrame";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp } = siteImages;

const strip = [
  { src: exp.stadium, label: "Stadiums" },
  { src: exp.concert, label: "Concerts" },
  { src: exp.hospitality, label: "Hospitality" },
  { src: exp.travel, label: "Travel" },
] as const;

export function PartnersFinalCTA() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#ff6b00_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] border border-orange-100 bg-white px-6 py-12 text-center sm:px-10 sm:py-14">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
              For partners
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              Give Your Customers Access to More.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Connect your business to global ticket and hospitality supply
              through SeatsConnect — with the workflow, access and support your
              team needs.
            </p>
            <ExperienceStrip
              items={strip}
              className="mx-auto mb-10 max-w-3xl text-left"
            />
            <ButtonGroup className="justify-center">
              <Button href={routes.joinPartner}>Join SeatsConnect</Button>
              <Button href={routes.contact} variant="outline">
                Book a Demo
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
