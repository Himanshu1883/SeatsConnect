import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { SolutionFit } from "@/components/sections/solutions/SolutionFit";
import { SolutionWorkflow } from "@/components/sections/solutions/SolutionWorkflow";
import { SolutionsFinalCTA } from "@/components/sections/solutions/SolutionsFinalCTA";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { solutionPages } from "@/lib/constants/solutions";

const page = solutionPages.hotels;

export const metadata: Metadata = {
  title: "Hotels & Hospitality — SeatsConnect™",
  description:
    "Extend the guest experience beyond the hotel through one B2B platform.",
};

export default function HotelsSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        icon={heroIcons.solutions}
        image={page.hero.image}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        steps={heroWorkflow}
        features={[...heroFeatures.solutions]}
      />
      <SolutionFit content={page.fit} />
      <SolutionWorkflow content={page.workflow} />
      <SolutionsFinalCTA
        eyebrow={page.finalCta.eyebrow}
        title={page.finalCta.title}
        primaryCta={page.finalCta.primaryCta}
        secondaryCta={page.finalCta.secondaryCta}
      />
    </>
  );
}
