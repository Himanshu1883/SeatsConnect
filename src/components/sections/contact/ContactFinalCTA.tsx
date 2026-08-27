"use client";

import { EngageFinalCTA } from "@/components/sections/resources/ResourcesFinalCTA";
import { routes } from "@/lib/constants/routes";

export function ContactFinalCTA() {
  return (
    <EngageFinalCTA
      eyebrow="Contact"
      title="Connect Your Inventory."
      description="Whether you want to connect inventory, join our distribution network or discuss an integration, our team can help."
      primary={{ label: "Connect Your Inventory", href: routes.joinSupplier }}
      secondary={{ label: "Join Our Network", href: routes.joinPartner }}
    />
  );
}
