"use client";

import { Button, ButtonGroup } from "@/components/ui/Button";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { HomeFrame } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp } = siteImages;

const ctaStrip = [
  { src: exp.stadium, label: "Venues" },
  { src: exp.concert, label: "Events" },
  { src: exp.hospitality, label: "Hospitality" },
  { src: exp.travel, label: "Travel" },
] as const;

export function SuppliersFinalCTA() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#ff6b00_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] border border-orange-100 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
            <ExperienceStrip items={ctaStrip} className="mx-auto mb-8 max-w-3xl" />
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
              For suppliers
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              Connect Your Inventory to Professional Demand.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              One integration can provide access to multiple approved
              distribution channels — with the control, structure and
              connectivity your supply team needs.
            </p>
            <ButtonGroup className="justify-center">
              <Button href={routes.joinSupplier}>
                Become a Supply Partner
              </Button>
              <Button href={routes.contact} variant="outline">
                Talk to Our Supply Team
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
