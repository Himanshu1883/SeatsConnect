import type { Metadata } from "next";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import { heroFeatures, heroIcons } from "@/lib/constants/pageHero";

export const metadata: Metadata = {
  title: "Compliance — SeatsConnect™",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        icon={heroIcons.legal}
        image={siteImages.pages.legal}
        title="Compliance"
        titleAccent="Standards."
        description="Final legal wording for Compliance documentation will be provided or reviewed separately by legal and compliance before launch."
        features={[...heroFeatures.legal]}
      />
      <PageSection>
        <p className="text-center text-brand-gray-text max-w-xl mx-auto">
          Final legal wording for Compliance documentation will be provided or
          reviewed separately by legal and compliance before launch.
        </p>
      </PageSection>
    </>
  );
}
