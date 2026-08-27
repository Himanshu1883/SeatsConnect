"use client";

import { EngageFinalCTA } from "@/components/sections/resources/ResourcesFinalCTA";
import { routes } from "@/lib/constants/routes";

export function JoinFinalCTA() {
  return (
    <EngageFinalCTA
      eyebrow="Join the network"
      title="Talk to Our Team."
      description="Not sure which path fits? Talk to our team about connecting inventory or joining as a distribution partner."
      primary={{ label: "Talk to Our Team", href: routes.contact }}
      secondary={{ label: "Explore Platform", href: routes.platform }}
    />
  );
}
