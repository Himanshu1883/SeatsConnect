import { MarginCalculatorCard } from "@/components/sections/MarginCalculatorCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { siteImages } from "@/lib/constants/images";

export function MarginCalculatorSection() {
  return (
    <SectionBackground
      id="calculator"
      image={siteImages.calculator}
      alt="Luxury hospitality and travel"
      tint="white"
      contentClassName="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Multiply Your Profit Margins"
          title="Base Bookings + Premium Tickets = VIP Yields"
          description="See how integrating guaranteed event tickets directly into your basic travel/accommodation bookings multiplies package margins effortlessly."
        />

        <MarginCalculatorCard />
      </div>
    </SectionBackground>
  );
}
