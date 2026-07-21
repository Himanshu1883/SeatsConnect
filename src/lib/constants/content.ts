import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CheckCircle,
  Globe,
  ShieldAlert,
  TrendingDown,
  Zap,
} from "lucide-react";

export type ComparisonPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const fragmentedPoints: ComparisonPoint[] = [
  {
    icon: AlertTriangle,
    title: "Severe Operational Inefficiencies",
    description:
      "Manual, slow, and error-prone backend ticketing operations. High reliance on static email sheets and disconnected regional databases.",
  },
  {
    icon: TrendingDown,
    title: "Massive Lost Revenues",
    description:
      "Extremely limited cross-border reach for marquee global events. High-yield local supply remains localized and unavailable to global buyers.",
  },
  {
    icon: ShieldAlert,
    title: "Exorbitant Fulfillment Risks",
    description:
      "Zero supplier transparency for critical end-to-end B2B buyers, generating high cancellation frequencies and volatile delivery timelines.",
  },
];

export const seatsConnectPoints: ComparisonPoint[] = [
  {
    icon: Zap,
    title: "Instant Connections (Eliminated Friction)",
    description:
      "Our unified marketplace automates manual friction at scale with milliseconds latency API requests and standardized dynamic feeds.",
  },
  {
    icon: Globe,
    title: "Global Scalable Reach",
    description:
      "Instantly access verified global ticketing inventory from 1,500+ local providers with market-responsive algorithmic dynamic pricing.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed, Secure Delivery",
    description:
      "100% verified source guarantee. Our real-time procurement model safeguards final customer handoffs, ensuring predictable fulfillment.",
  },
];

export const strategicStrongholds = [
  { region: "Middle East", cities: "Dubai, Riyadh" },
  { region: "Indian Subcontinent", cities: "Mumbai, New Delhi" },
  { region: "Southeast Asia", cities: "Singapore, Jakarta" },
] as const;

export const hubBadges = ["Dubai", "Mumbai", "Singapore"] as const;
