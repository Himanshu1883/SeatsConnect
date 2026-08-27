import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { DevelopersAccess } from "@/components/sections/developers/DevelopersAccess";
import { DevelopersCapabilities } from "@/components/sections/developers/DevelopersCapabilities";
import { DevelopersPortal } from "@/components/sections/developers/DevelopersPortal";
import { launchFlags } from "@/lib/constants/features";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Developers — SeatsConnect™",
  description:
    "Connect your systems to SeatsConnect. Detailed API documentation, authentication, endpoints, schemas and sandbox access sit in the SeatsConnect developer portal.",
};

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        icon={heroIcons.developers}
        image={siteImages.pages.developers}
        title="Connect Your Systems to"
        titleAccent="SeatsConnect."
        description="Detailed API documentation, authentication, endpoints, schemas and sandbox information sit in a separate developer portal. The public website explains the infrastructure. The portal is where approved teams build."
        primaryCta={
          launchFlags.developerPortal
            ? {
                label: "Open Developer Portal",
                href: siteConfig.developersUrl,
                external: true,
              }
            : { label: "Request Developer Access", href: "#access" }
        }
        secondaryCta={{ label: "View API Overview", href: routes.api }}
        steps={heroWorkflow}
        features={[...heroFeatures.api]}
      />

      <DevelopersPortal />
      <DevelopersCapabilities />
      <DevelopersAccess />
    </>
  );
}
