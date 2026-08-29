"use client";

import { PageHero } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export function PlatformHero() {
  return (
    <PageHero
      eyebrow="Platform Infrastructure"
      icon={heroIcons.layers}
      title="The Infrastructure Behind"
      titleAccent="B2B Event Distribution."
      description="Connect supply, technology and professional distribution through one B2B infrastructure layer — from inventory connectivity through booking and fulfilment."
      image={siteImages.pages.platform}
      imagePlacement="right"
      primaryCta={{ label: "Talk to Our Team", href: routes.contact }}
      secondaryCta={{ label: "Explore API", href: routes.api }}
      tertiaryCta={{ label: "Connect Inventory", href: routes.joinSupplier }}
      steps={heroWorkflow}
      features={[...heroFeatures.infrastructure]}
    />
  );
}
