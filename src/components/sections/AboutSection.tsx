import { Gem, Infinity, Plane, Ticket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImagePanel, SectionBackground } from "@/components/ui/SectionBackground";
import { siteImages } from "@/lib/constants/images";

export function AboutSection() {
  return (
    <SectionBackground
      id="about"
      image={siteImages.about.section}
      alt="Premium travel and hospitality"
      tint="soft"
      className="border-t border-orange-50"
      contentClassName="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Connecting Demand"
          title={
            <>
              Connecting international demand{" "}
              <br className="hidden sm:inline" />
              with global mega-events
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <ImagePanel
              src={siteImages.about.travel}
              alt="Premium travel and hospitality"
              height="h-48 sm:h-56"
              className="mb-2 shadow-lg"
            />
            <p className="text-brand-gray-text leading-relaxed text-base sm:text-lg">
              The modern consumer expects seamless, fully integrated travel and
              entertainment experiences.
            </p>
            <p className="text-brand-gray-text leading-relaxed">
              For premium travel management companies, high-end concierges, and
              corporate hospitality partners, capturing this high-value demand
              requires moving beyond standard travel itineraries.
            </p>
            <div className="p-5 rounded-xl bg-white/95 border-l-4 border-brand-orange text-brand-dark shadow-sm">
              <span className="block font-semibold mb-1 text-brand-orange">
                Our Simple Focus:
              </span>
              Connect exclusive global ticket supply with international demand
              efficiently and at scale.
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-orange-100 shadow-xl relative overflow-hidden">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 py-4 sm:py-6">
              <div className="w-full md:w-5/12 space-y-4 z-10">
                {[
                  {
                    icon: Plane,
                    title: "TRAVEL",
                    subtitle: "Premium Agency Distribution",
                  },
                  {
                    icon: Gem,
                    title: "HOSPITALITY",
                    subtitle: "Corporate & Luxury Concierge",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-orange-100 flex items-center gap-4 hover:border-brand-orange/50 transition-all hover:shadow-md"
                  >
                    <div className="p-3 rounded-lg bg-brand-orange-light text-brand-orange">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark font-tech tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-gray-text">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row md:flex-col items-center justify-center py-2 md:py-4 z-10 shrink-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/25">
                  <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="h-0.5 w-10 sm:w-12 md:w-0.5 md:h-12 bg-brand-orange" />
              </div>

              <div className="w-full md:w-5/12 z-10">
                <ImagePanel
                  src={siteImages.about.liveEvents}
                  alt="Live events marketplace"
                  height="min-h-[180px] sm:min-h-[220px]"
                  overlayClassName="bg-brand-orange/55"
                >
                  <div className="flex flex-col items-center justify-center h-full min-h-[180px] sm:min-h-[220px] p-4 sm:p-6 text-center text-white">
                    <Ticket className="w-10 h-10 mb-3" />
                    <h4 className="font-tech text-lg font-bold uppercase tracking-wider">
                      LIVE EVENTS
                    </h4>
                    <p className="text-xs text-white/90 mt-1">
                      Unified Global Marketplace
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/30 flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-widest font-mono">
                      <span>Formula 1</span> • <span>FIFA</span> •{" "}
                      <span>Concerts</span>
                    </div>
                  </div>
                </ImagePanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}
