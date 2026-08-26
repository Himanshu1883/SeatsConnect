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

export function PlatformFinalCTA() {
  return (
    <HomeFrame tinted variant="plain">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#ff6b00_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] border border-orange-100 bg-white px-6 py-14 text-center sm:px-12">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
              next step
            </p>
            <h2 className="mb-4 font-tech text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl">
              Build Your Distribution Around One Connection.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-brand-gray-text">
              Connect inventory, expand through approved channels, and operate
              Search → Quote → Book → Fulfil on one infrastructure layer.
            </p>
            <ExperienceStrip
              items={strip}
              className="mx-auto mb-10 max-w-3xl text-left"
            />
            <ButtonGroup className="justify-center">
              <Button href={routes.joinSupplier}>Connect Your Inventory</Button>
              <Button href={routes.joinPartner} variant="outline">
                Join Our Network
              </Button>
              <Button href={routes.contact} variant="ghost">
                Talk to Our Team
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
