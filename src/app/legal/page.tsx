import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { LegalDocument } from "@/components/sections/legal/LegalDocument";
import { siteImages } from "@/lib/constants/images";
import { heroIcons } from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Legal — SeatsConnect™",
  description:
    "Terms of Service, Privacy Policy, Cookie Policy and Compliance for SeatsConnect.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        icon={heroIcons.legal}
        image={siteImages.pages.legal}
        imagePlacement="right"
        title="Legal"
        titleAccent="Policies."
        description="Terms of Service, Privacy Policy, Cookie Policy and Compliance. Final legal wording will be provided or reviewed separately by legal and compliance before launch."
        primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        secondaryCta={{ label: "Join Our Network", href: routes.join }}
        compact
      />
      <LegalDocument />
    </>
  );
}
