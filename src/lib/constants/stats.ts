import type { LucideIcon } from "lucide-react";
import { Globe, ShieldCheck, Zap } from "lucide-react";

export type HeroStat = {
  value: string;
  label: string;
  accent?: "orange" | "dark" | "trusted";
  icon: LucideIcon;
};

export const heroStats: HeroStat[] = [
  {
    value: "Real-Time",
    label: "Ticket Distribution",
    accent: "orange",
    icon: Zap,
  },
  {
    value: "Advanced API",
    label: "Instant Feeds",
    accent: "dark",
    icon: Globe,
  },
  {
    value: "1,500+",
    label: "Local Suppliers",
    accent: "orange",
    icon: Globe,
  },
  {
    value: "Trusted",
    label: "Risk-Free Fulfillment",
    accent: "trusted",
    icon: ShieldCheck,
  },
];

export const heroHighlights = [
  { label: "50+ Countries", icon: Globe },
  { label: "<30ms API", icon: Zap },
  { label: "Enterprise B2B", icon: ShieldCheck },
] as const;

export const trustStripItems = [
  { icon: "shield-check" as const, label: "100% Verified Fulfillment" },
  { icon: "globe" as const, label: "50+ Countries" },
  { icon: "zap" as const, label: "<30ms API Latency" },
  { icon: "building-2" as const, label: "Enterprise B2B Ready" },
  { icon: "clock" as const, label: "24/7 Support" },
];
