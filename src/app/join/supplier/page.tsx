import { JoinSupplierForm } from "@/components/forms/JoinSupplierForm";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export default function JoinSupplierPage() {
  return (
    <>
      <PageHero
        eyebrow="Supply Partners"
        icon={heroIcons.supply}
        image={siteImages.pages.join}
        title="Become a SeatsConnect"
        titleAccent="Supply Partner."
        description="Connect your event inventory with approved B2B distribution channels through SeatsConnect. Complete the form below and our supply team will review your requirements."
        primaryCta={{ label: "Talk to Our Supply Team", href: routes.contact }}
        secondaryCta={{ label: "Explore For Suppliers", href: routes.suppliers }}
        steps={heroWorkflow}
        features={[...heroFeatures.supply]}
      />

      <PageSection>
        <JoinSupplierForm className="mx-auto max-w-2xl" />
      </PageSection>
    </>
  );
}
