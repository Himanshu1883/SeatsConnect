import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { PartnersBusinessTypes } from "@/components/sections/partners/PartnersBusinessTypes";
import { PartnersWorkflow } from "@/components/sections/partners/PartnersWorkflow";
import { PartnersRelationship } from "@/components/sections/partners/PartnersRelationship";
import { PartnersAccess } from "@/components/sections/partners/PartnersAccess";
import { PartnersSupport } from "@/components/sections/partners/PartnersSupport";
import { PartnersFinalCTA } from "@/components/sections/partners/PartnersFinalCTA";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "For Partners — SeatsConnect™",
  description:
    "More inventory. Fewer integrations. One relationship. Access tickets, hospitality and live experiences through one professional B2B platform.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Partners"
        icon={heroIcons.partner}
        image={siteImages.pages.partners}
        imagePlacement="right"
        title="More Inventory. Fewer Integrations."
        titleAccent="One Relationship."
        description="Connect once to approved event supply. Access tickets, hospitality and live experiences through one professional B2B platform — without a separate relationship with every supplier."
        primaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
        secondaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.partner]}
      />

      <PartnersBusinessTypes />

      <PartnersWorkflow />

      <PartnersRelationship />

      <PartnersAccess />

      <PartnersSupport />

      <PartnersFinalCTA />
    </>
  );
}
