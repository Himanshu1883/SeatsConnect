import { Map } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ImagePanel, SectionBackground } from "@/components/ui/SectionBackground";
import { hubBadges, strategicStrongholds } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";

export function StrategicReachSection() {
  return (
    <SectionBackground
      id="reach"
      image={siteImages.reach.section}
      alt="Global coverage map background"
      tint="soft"
      className="border-y border-orange-50"
      contentClassName="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Global Coverage Strongholds"
          title={
            <>
              Deep Local Sourcing.{" "}
              <br className="hidden sm:inline" />
              Global Distribution Scale.
            </>
          }
        />

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-orange-100 hover:border-brand-orange/30 transition-all glow-border">
              <div className="text-brand-orange font-tech text-3xl sm:text-4xl font-bold mb-1">
                1,500+
              </div>
              <h4 className="font-tech font-bold text-lg mb-2 text-brand-dark">
                Unmatched Reach Network
              </h4>
              <p className="text-xs text-brand-gray-text leading-relaxed">
                A hyper-connected, secure pipeline of local offline and primary
                ticket partners supplying hard-to-source mega-event inventory.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-orange-100">
              <h4 className="font-tech font-bold text-base sm:text-lg mb-4 text-brand-dark flex items-center gap-2">
                <Map className="w-5 h-5 text-brand-orange" />
                Strategic Strongholds
              </h4>
              <div className="space-y-3 text-sm">
                {strategicStrongholds.map((item, index) => (
                  <div
                    key={item.region}
                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2 ${
                      index < strategicStrongholds.length - 1
                        ? "border-b border-orange-50 pb-2"
                        : "pb-1"
                    }`}
                  >
                    <span className="font-semibold text-brand-gray-text">
                      {item.region}
                    </span>
                    <span className="text-brand-dark font-tech">
                      {item.cities}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ImagePanel
              src={siteImages.reach.map}
              alt="Global coverage map"
              height="min-h-[260px] sm:min-h-[340px] lg:min-h-[400px]"
              overlayClassName="bg-white/15"
            >
              <div className="relative h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] p-3 sm:p-4">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-auto max-w-[calc(100%-1.5rem)] sm:max-w-none bg-white/95 border border-orange-100 p-2.5 sm:p-3 rounded-lg text-[10px] sm:text-[11px] font-mono shadow-md">
                  <span className="text-brand-orange font-semibold">
                    ● Live Hub Link
                  </span>
                  <div className="text-brand-gray-text mt-1">
                    Sourcing Sub-continent to ME / SEA Scale
                  </div>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 left-3 sm:left-auto flex flex-wrap gap-1.5 sm:gap-2 justify-end">
                  {hubBadges.map((hub) => (
                    <span
                      key={hub}
                      className="bg-brand-orange text-white text-[10px] font-tech px-2 py-1 rounded"
                    >
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
            </ImagePanel>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}
