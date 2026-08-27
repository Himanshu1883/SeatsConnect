import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { RequestForm } from "@/components/sections/request/RequestForm";
import { RequestTypes } from "@/components/sections/request/RequestTypes";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Submit a Request — SeatsConnect™",
  description:
    "Ask the SeatsConnect partner team for selected group, hospitality or complex ticket and hospitality requirements.",
};

export default function RequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Requests"
        icon={heroIcons.request}
        image={siteImages.pages.request}
        title="Need Something"
        titleAccent="Specific?"
        description="Not every customer requirement will be available through live inventory. Our partner team can assist approved SeatsConnect partners with selected bespoke ticket and hospitality requirements."
        primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        secondaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
        steps={heroWorkflow}
        features={[...heroFeatures.partner]}
      />

      <RequestTypes />
      <RequestForm />
    </>
  );
}
