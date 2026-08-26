import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeProblem } from "@/components/sections/home/HomeProblem";
import { HomeSupplier } from "@/components/sections/home/HomeSupplier";
import { HomePartner } from "@/components/sections/home/HomePartner";
import { HomeHowItWorks } from "@/components/sections/home/HomeHowItWorks";
import { HomeApi } from "@/components/sections/home/HomeApi";
import { HomeControlledDist } from "@/components/sections/home/HomeControlledDist";
import { HomeNetwork } from "@/components/sections/home/HomeNetwork";
import { HomeB2BTools } from "@/components/sections/home/HomeB2BTools";
import { HomeWhiteLabel } from "@/components/sections/home/HomeWhiteLabel";
import { HomeInternational } from "@/components/sections/home/HomeInternational";
import { HomeExperience } from "@/components/sections/home/HomeExperience";
import { HomeFinalCTA, HomeLoginNote } from "@/components/sections/home/HomeFinalCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeSupplier />
      <HomePartner />
      <HomeHowItWorks />
      <HomeApi />
      <HomeControlledDist />
      <HomeNetwork />
      <HomeB2BTools />
      <HomeWhiteLabel />
      <HomeInternational />
      <HomeExperience />
      <HomeFinalCTA />
      <HomeLoginNote />
    </>
  );
}
