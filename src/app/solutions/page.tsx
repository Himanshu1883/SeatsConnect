import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { SolutionsFinalCTA } from "@/components/sections/solutions/SolutionsFinalCTA";
import { SolutionsGrid } from "@/components/sections/solutions/SolutionsGrid";
import { SolutionsNetwork } from "@/components/sections/solutions/SolutionsNetwork";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { hubFinalCta } from "@/lib/constants/solutions";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Solutions — SeatsConnect™",
  description:
    "Built around your business. SeatsConnect connects global event supply to businesses serving different types of customers around the world.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        icon={heroIcons.solutions}
        image={siteImages.pages.solutions}
        title="Built Around"
        titleAccent="Your Business."
        description="SeatsConnect connects global event supply to businesses serving different types of customers around the world — travel, concierge, hospitality, corporate events and digital distribution."
        primaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
        secondaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.solutions]}
      />

      <SolutionsGrid />
      <SolutionsNetwork />
      <SolutionsFinalCTA
        eyebrow={hubFinalCta.eyebrow}
        title={hubFinalCta.title}
        description={hubFinalCta.description}
        primaryCta={hubFinalCta.primaryCta}
        secondaryCta={hubFinalCta.secondaryCta}
      />
    </>
  );
}
