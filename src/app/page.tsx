import { AboutSection } from "@/components/sections/AboutSection";
import { AdvantageSection } from "@/components/sections/AdvantageSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EdgeEngineSection } from "@/components/sections/EdgeEngineSection";
import { EventsCatalogSection } from "@/components/sections/EventsCatalogSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarginCalculatorSection } from "@/components/sections/MarginCalculatorSection";
import { StrategicReachSection } from "@/components/sections/StrategicReachSection";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <AdvantageSection />
      <EdgeEngineSection />
      <EventsCatalogSection />
      <StrategicReachSection />
      <MarginCalculatorSection />
      <ContactSection />
    </>
  );
}
