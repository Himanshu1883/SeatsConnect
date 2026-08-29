import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeProblem } from "@/components/sections/home/HomeProblem";
import { HomeSupplier } from "@/components/sections/home/HomeSupplier";
import { HomePartner } from "@/components/sections/home/HomePartner";
import { HomeHowItWorks } from "@/components/sections/home/HomeHowItWorks";
import { HomeExperience } from "@/components/sections/home/HomeExperience";
import { HomeFinalCTA } from "@/components/sections/home/HomeFinalCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <HomeSupplier />
      <HomePartner />
      <HomeHowItWorks />
      <HomeExperience />
      <HomeFinalCTA />
    </>
  );
}
