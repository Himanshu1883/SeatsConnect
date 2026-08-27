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
    "One connection to global event supply. Access tickets, hospitality and live experiences through one professional B2B platform.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Partners"
        icon={heroIcons.partner}
        image={siteImages.pages.partners}
        title="One Connection to"
        titleAccent="Global Event Supply."
        description="Access tickets, hospitality and live experiences through one professional B2B platform. Approved businesses access event supply without separate relationships with every supplier."
        primaryCta={{ label: "Apply for Partner Access", href: routes.joinPartner }}
        secondaryCta={{ label: "Book a Demo", href: routes.contact }}
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
