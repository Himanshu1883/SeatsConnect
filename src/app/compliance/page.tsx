import type { Metadata } from "next";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "Compliance — SeatsConnect™",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero image={siteImages.pages.legal} title="Compliance" />
      <PageSection>
        <p className="text-center text-brand-gray-text max-w-xl mx-auto">
          Final legal wording for Compliance documentation will be provided or reviewed separately by legal and compliance before launch.
        </p>
      </PageSection>
    </>
  );
}
