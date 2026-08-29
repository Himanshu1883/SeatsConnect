import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { LogoWall } from "@/components/ui/LogoWall";
import { AboutConnect } from "@/components/sections/about/AboutConnect";
import { AboutExperience } from "@/components/sections/about/AboutExperience";
import { AboutMission } from "@/components/sections/about/AboutMission";
import { AboutGroup } from "@/components/sections/about/AboutGroup";
import { AboutFinalCTA } from "@/components/sections/about/AboutFinalCTA";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "About — SeatsConnect™",
  description:
    "Building the connections behind global event distribution. SeatsConnect provides the infrastructure layer that brings professional supply and demand together.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SeatsConnect"
        icon={heroIcons.about}
        image={siteImages.pages.about}
        imagePlacement="right"
        title="Building the Connections Behind"
        titleAccent="Global Event Distribution."
        description="Global event supply exists. Professional global demand exists. SeatsConnect provides the infrastructure layer that brings them together."
        primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        secondaryCta={{ label: "Join Our Network", href: routes.join }}
        steps={heroWorkflow}
        features={[...heroFeatures.about]}
      />

      <AboutConnect />
      <AboutExperience />
      <AboutMission />
      <AboutGroup />
      <LogoWall />
      <AboutFinalCTA />
    </>
  );
}
