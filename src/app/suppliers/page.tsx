import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageLayout";
import { SuppliersExpand } from "@/components/sections/suppliers/SuppliersExpand";
import { SuppliersReach } from "@/components/sections/suppliers/SuppliersReach";
import { SuppliersControl } from "@/components/sections/suppliers/SuppliersControl";
import { SuppliersApi } from "@/components/sections/suppliers/SuppliersApi";
import { SuppliersBenefits } from "@/components/sections/suppliers/SuppliersBenefits";
import { SuppliersSupplyTypes } from "@/components/sections/suppliers/SuppliersSupplyTypes";
import { SuppliersFinalCTA } from "@/components/sections/suppliers/SuppliersFinalCTA";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "For Suppliers — SeatsConnect™",
  description:
    "Turn event inventory into global B2B distribution. Connect once and make your inventory available through approved professional channels.",
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Suppliers"
        icon={heroIcons.supply}
        image={siteImages.pages.suppliers}
        imagePlacement="right"
        title="Turn Event Inventory Into"
        titleAccent="Global B2B Distribution."
        description="Connect once and make your inventory available through approved professional channels. SeatsConnect helps venues, promoters, hospitality providers and approved suppliers connect inventory with professional B2B demand."
        primaryCta={{ label: "Connect Your Inventory", href: routes.joinSupplier }}
        secondaryCta={{ label: "Talk to Our Supply Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.supply]}
      />

      <SuppliersExpand />

      <SuppliersReach />

      <SuppliersControl />

      <SuppliersApi />

      <SuppliersBenefits />

      <SuppliersSupplyTypes />

      <SuppliersFinalCTA />
    </>
  );
}
