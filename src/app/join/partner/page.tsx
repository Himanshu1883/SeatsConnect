import { JoinPartnerForm } from "@/components/forms/JoinPartnerForm";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export default function JoinPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Distribution Partners"
        icon={heroIcons.partner}
        image={siteImages.pages.partners}
        title="Become a SeatsConnect"
        titleAccent="Distribution Partner."
        description="Access global ticket, hospitality and event supply through one professional B2B connection. Complete the application below so we can understand your business and distribution requirements."
        primaryCta={{ label: "Talk to Our Partner Team", href: routes.contact }}
        secondaryCta={{ label: "Explore For Partners", href: routes.partners }}
        steps={heroWorkflow}
        features={[...heroFeatures.partner]}
      />

      <PageSection>
        <JoinPartnerForm className="mx-auto max-w-2xl" />
      </PageSection>
    </>
  );
}
