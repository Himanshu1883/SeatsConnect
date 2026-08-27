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

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function EngageFinalCTA({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: Props) {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#ff6b00_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] border border-orange-100 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
              {eyebrow}
            </p>
            <h2 className="mx-auto mb-4 max-w-2xl font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                {description}
              </p>
            ) : null}
            <ExperienceStrip
              items={strip}
              className="mx-auto mb-8 max-w-3xl text-left"
            />
            <ButtonGroup className="justify-center">
              <Button href={primary.href}>{primary.label}</Button>
              <Button href={secondary.href} variant="outline">
                {secondary.label}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}

export function ResourcesFinalCTA() {
  return (
    <EngageFinalCTA
      eyebrow="Resources"
      title="Explore the Platform."
      description="Reference pages for businesses connecting supply or distributing event inventory through SeatsConnect."
      primary={{ label: "Explore Platform", href: routes.platform }}
      secondary={{ label: "Talk to Our Team", href: routes.contact }}
    />
  );
}
