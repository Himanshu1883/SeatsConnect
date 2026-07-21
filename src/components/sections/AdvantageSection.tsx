import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";
import {
  fragmentedPoints,
  seatsConnectPoints,
} from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";

function ComparisonCard({
  variant,
  title,
  points,
  footer,
}: {
  variant: "old" | "new";
  title: string;
  points: typeof fragmentedPoints;
  footer: React.ReactNode;
}) {
  const isNew = variant === "new";

  return (
    <div
      className={`p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between backdrop-blur-sm ${
        isNew
          ? "bg-white/95 border-2 border-brand-orange/30 glow-border relative"
          : "bg-white/90 border border-red-100"
      }`}
    >
      {isNew ? (
        <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-brand-orange text-white font-tech text-[10px] uppercase font-extrabold tracking-wider">
          Recommended
        </div>
      ) : null}

      <div>
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`w-3 h-3 rounded-full ${
              isNew ? "bg-brand-orange animate-ping" : "bg-red-500"
            }`}
          />
          <h3
            className={`font-tech text-xl font-bold tracking-wider ${
              isNew ? "text-brand-orange" : "text-brand-dark"
            }`}
          >
            {title}
          </h3>
        </div>

        <div className="space-y-6">
          {points.map((point) => (
            <div key={point.title} className="flex items-start gap-4">
              <div
                className={`p-2.5 rounded-lg mt-1 ${
                  isNew
                    ? "bg-brand-orange-light text-brand-orange"
                    : "bg-red-50 text-red-500"
                }`}
              >
                <point.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark">{point.title}</h4>
                <p className="text-sm text-brand-gray-text mt-1">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mt-8 pt-6 border-t text-xs ${
          isNew
            ? "border-orange-100 text-brand-orange font-tech flex items-center gap-2"
            : "border-gray-200 text-brand-gray-text"
        }`}
      >
        {footer}
      </div>
    </div>
  );
}

export function AdvantageSection() {
  return (
    <SectionBackground
      id="advantage"
      image={siteImages.advantage}
      alt="Sports stadium atmosphere"
      tint="white"
      contentClassName="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Unified Value Proposition"
          title="The Fragmented Supply vs. SeatsConnect"
          description="Manual workflows and disconnected regional suppliers yield hidden structural costs. Explore why our unified system is a fundamental competitive upgrade."
        />

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <ComparisonCard
            variant="old"
            title="The Fragmented Supply (Old Way)"
            points={fragmentedPoints}
            footer="Result: Constrained margins, operational bottlenecks, frustrated premium clients."
          />
          <ComparisonCard
            variant="new"
            title="The SeatsConnect Way (Unified)"
            points={seatsConnectPoints}
            footer={
              <>
                <Sparkles className="w-4 h-4" /> Result: Scalable global
                expansion, pristine brand reputation, and doubled margins.
              </>
            }
          />
        </div>
      </div>
    </SectionBackground>
  );
}
