import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { ResourcesFinalCTA } from "@/components/sections/resources/ResourcesFinalCTA";
import { ResourcesLibrary } from "@/components/sections/resources/ResourcesLibrary";
import { ResourcesPortal } from "@/components/sections/resources/ResourcesPortal";
import { ResourcesTopics } from "@/components/sections/resources/ResourcesTopics";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Partner Resources — SeatsConnect™",
  description:
    "Resources for SeatsConnect supply and distribution partners, including platform guidance, API connectivity, white-label options and support.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        icon={heroIcons.resources}
        image={siteImages.pages.resources}
        title="Partner"
        titleAccent="Resources."
        description="Reference pages for businesses connecting supply or distributing event inventory through SeatsConnect. Operational tools sit in the partner platform after access is approved."
        primaryCta={{ label: "Explore Platform", href: routes.platform }}
        secondaryCta={{ label: "View API Overview", href: routes.api }}
        steps={heroWorkflow}
        features={[...heroFeatures.resources]}
      />

      <ResourcesLibrary />
      <ResourcesPortal />
      <ResourcesTopics />
      <ResourcesFinalCTA />
    </>
  );
}
