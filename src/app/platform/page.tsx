import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { PlatformOverview } from "@/components/sections/platform/PlatformOverview";
import { PlatformSupply } from "@/components/sections/platform/PlatformSupply";
import { PlatformDistribution } from "@/components/sections/platform/PlatformDistribution";
import { PlatformWorkflow } from "@/components/sections/platform/PlatformWorkflow";
import { PlatformTechnology } from "@/components/sections/platform/PlatformTechnology";
import { PlatformFinalCTA } from "@/components/sections/platform/PlatformFinalCTA";

export const metadata: Metadata = {
  title: "Platform — SeatsConnect™",
  description:
    "The infrastructure behind B2B event distribution. Connect supply, technology and professional distribution through one B2B infrastructure layer.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformSupply />
      <PlatformDistribution />
      <PlatformWorkflow />
      <PlatformTechnology />
      <PlatformFinalCTA />
    </>
  );
}
