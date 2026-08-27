import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { JoinFinalCTA } from "@/components/sections/join/JoinFinalCTA";
import { JoinNetwork } from "@/components/sections/join/JoinNetwork";
import { JoinPaths } from "@/components/sections/join/JoinPaths";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Join SeatsConnect — SeatsConnect™",
  description:
    "Join SeatsConnect. Connect professional event supply and professional distribution through one connected B2B infrastructure.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join the Network"
        icon={heroIcons.join}
        image={siteImages.pages.join}
        title="Join"
        titleAccent="SeatsConnect."
        description="SeatsConnect brings professional event supply and professional distribution together through one connected B2B infrastructure. Choose the option that best describes your business."
        primaryCta={{
          label: "Connect Your Inventory",
          href: routes.joinSupplier,
        }}
        secondaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
        tertiaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.join]}
      />

      <JoinPaths />
      <JoinNetwork />
      <JoinFinalCTA />
    </>
  );
}
