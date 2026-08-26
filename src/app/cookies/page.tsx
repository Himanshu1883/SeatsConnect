import type { Metadata } from "next";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "Cookies — SeatsConnect™",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero image={siteImages.pages.legal} title="Cookie Policy" />
      <PageSection>
        <p className="text-center text-brand-gray-text max-w-xl mx-auto">
          Final legal wording for the Cookie Policy will be provided or reviewed separately by legal and compliance before launch.
        </p>
      </PageSection>
    </>
  );
}
