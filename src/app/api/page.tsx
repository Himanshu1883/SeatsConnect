import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { ApiBothSides } from "@/components/sections/api/ApiBothSides";
import { ApiCapabilities } from "@/components/sections/api/ApiCapabilities";
import { ApiFlows } from "@/components/sections/api/ApiFlows";
import { ApiDocs } from "@/components/sections/api/ApiDocs";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "API — SeatsConnect™",
  description:
    "Connect your platform to SeatsConnect. API infrastructure connecting global event supply with professional distribution.",
};

export default function ApiPage() {
  return (
    <>
      <PageHero
        eyebrow="API Infrastructure"
        icon={heroIcons.api}
        image={siteImages.pages.api}
        imagePlacement="right"
        title="Connect Your Platform to"
        titleAccent="SeatsConnect."
        description="API infrastructure connecting global event supply with professional distribution. Approved suppliers and partners connect existing technology into the network."
        primaryCta={{ label: "Request API Access", href: routes.contact }}
        secondaryCta={{
          label: "Talk to Our Integration Team",
          href: routes.contact,
        }}
        steps={heroWorkflow}
        features={[...heroFeatures.api]}
      />

      <ApiBothSides />
      <ApiCapabilities />
      <ApiFlows />
      <ApiDocs />
    </>
  );
}
