import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { SupportCta } from "@/components/sections/support/SupportCta";
import { SupportFaqs } from "@/components/sections/support/SupportFaqs";
import { SupportHelp } from "@/components/sections/support/SupportHelp";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Support — SeatsConnect™",
  description:
    "Help centre for SeatsConnect partners and suppliers. Find guidance on joining, accessing the platform, API connectivity and submitting requests.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        icon={heroIcons.support}
        image={siteImages.pages.support}
        title="Support for"
        titleAccent="Partners & Suppliers."
        description="Guidance for businesses connecting supply, joining the distribution network or integrating with SeatsConnect."
        primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        secondaryCta={{ label: "Join SeatsConnect", href: routes.join }}
        steps={heroWorkflow}
        features={[...heroFeatures.support]}
      />

      <SupportHelp />
      <SupportFaqs />
      <SupportCta />
    </>
  );
}
