import type { LucideIcon } from "lucide-react";
import { Globe, ShieldCheck, Zap } from "lucide-react";

export type HeroStat = {
  label: string;
  icon: LucideIcon;
};

export const heroStats: HeroStat[] = [
  { label: "Real-Time Distribution", icon: Zap },
  { label: "Advanced API Feeds", icon: Globe },
  { label: "1,500+ Local Suppliers", icon: Globe },
  { label: "Risk-Free Fulfillment", icon: ShieldCheck },
];

export const trustStripItems = [
  { icon: "shield-check" as const, label: "100% Verified Fulfillment" },
  { icon: "globe" as const, label: "50+ Countries" },
  { icon: "zap" as const, label: "<30ms API Latency" },
  { icon: "building-2" as const, label: "Enterprise B2B Ready" },
  { icon: "clock" as const, label: "24/7 Support" },
];
