import type { Metadata } from "next";
import { LegalPolicy } from "@/components/sections/legal/LegalPolicy";
import { PageHero } from "@/components/ui/PageLayout";
import { legalPages } from "@/lib/constants/legal";
import { siteImages } from "@/lib/constants/images";
import { heroIcons } from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

const page = legalPages.terms;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        icon={heroIcons.legal}
        image={siteImages.pages.legal}
        imagePlacement="right"
        title={page.title}
        titleAccent={page.titleAccent}
        description={page.description}
        primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        secondaryCta={{ label: "All legal pages", href: routes.legal }}
        compact
      />
      <LegalPolicy slug="terms" />
    </>
  );
}
