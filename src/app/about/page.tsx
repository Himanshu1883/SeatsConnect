import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LogoWall } from "@/components/ui/LogoWall";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
        title="Building the Connections Behind"
        titleAccent="Global Event Distribution."
        description="Global event supply exists. Professional global demand exists. SeatsConnect provides the infrastructure layer that brings them together."
        primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        secondaryCta={{ label: "Join Our Network", href: routes.join }}
        steps={heroWorkflow}
        features={[...heroFeatures.about]}
      />

      <PageSection>
        <SectionHeader
          title="Connecting Supply and Demand."
          description="Our platform connects venues, promoters, hospitality providers and approved suppliers with professional B2B distribution partners serving customers internationally. By building one infrastructure layer between both sides, SeatsConnect aims to make event distribution more connected, controlled and efficient."
          align="center"
        />
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Built on Experience."
          description="SeatsConnect is built on more than 30 years of experience across ticketing, events, hospitality, distribution and B2B sales. That experience gives us an understanding of the challenges faced across the full distribution chain — from the organisations controlling inventory to the businesses serving the end customer."
          align="center"
        />
      </PageSection>

      <PageSection>
        <SectionHeader
          eyebrow="Mission"
          title="Our Mission."
          description="To create the technology infrastructure that connects global event supply with professional B2B demand."
          align="center"
        />
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Part of SeatsGroup."
          description="SeatsConnect is part of SeatsGroup, a technology group focused on developing infrastructure and distribution solutions for the ticketing, travel and hospitality industries."
          align="center"
        />
        <div className="text-center mt-4">
          <Button href={routes.contact}>Talk to Our Team</Button>
        </div>
      </PageSection>
      <LogoWall />
    </>
  );
}
