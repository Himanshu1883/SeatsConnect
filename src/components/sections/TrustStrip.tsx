import { Building2, Clock, Globe, ShieldCheck, Zap } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { siteImages } from "@/lib/constants/images";
import { trustStripItems } from "@/lib/constants/stats";

const iconMap = {
  globe: Globe,
  zap: Zap,
  "building-2": Building2,
  clock: Clock,
  "shield-check": ShieldCheck,
} as const;

export function TrustStrip() {
  return (
    <SectionBackground
      image={siteImages.trustStrip}
      alt="Concert crowd atmosphere"
      tint="orange"
      className="border-y border-orange-100"
      contentClassName="py-6 sm:py-8"
    >
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {trustStripItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center px-3 py-4 sm:py-5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/80 shadow-sm"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-orange shrink-0" />
                <span className="text-[10px] sm:text-xs font-tech font-semibold text-brand-dark leading-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionBackground>
  );
}
