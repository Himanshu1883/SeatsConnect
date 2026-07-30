import type { LucideIcon } from "lucide-react";
import {
  Filter,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export type EdgeStep = {
  id: number;
  code: string;
  title: string;
  subtitle: string;
  stepLabel: string;
  description: string;
  latency: string;
  diagramLabel: string;
  diagramValue: string;
  diagramIcon: LucideIcon;
  diagramIconClass: string;
  diagramBorderClass: string;
  connectorClass: string;
  endpointLabel: string;
};

export const edgeSteps: EdgeStep[] = [
  {
    id: 1,
    code: "INGEST",
    title: "Ingest Engine Protocols",
    subtitle: "Real-time inventory sourcing",
    stepLabel: "Step 01 / Patented Pipeline",
    description:
      "Aggregates inventory from a large pool of verified global ticket sources, consolidating multi-regional database formats. Real-time availability monitoring cleans, authenticates, and validates live listings instantly across every major event category.",
    latency: "12ms",
    diagramLabel: "Active Pools",
    diagramValue: "450+ Sources / min",
    diagramIcon: Filter,
    diagramIconClass: "text-brand-orange animate-pulse",
    diagramBorderClass: "border-brand-orange bg-brand-orange-light",
    connectorClass: "bg-brand-orange",
    endpointLabel: "EDGE",
  },
  {
    id: 2,
    code: "PRICE",
    title: "Algorithmic Smart Pricing",
    subtitle: "Algorithmic rate alignment",
    stepLabel: "Step 02 / Patented Pipeline",
    description:
      "Calculates optimized real-time pricing models. Analyzes market volatility, ticket demand surge parameters, currency conversions, and supply scarcity indexes to return secure, fair corporate market rates instantly.",
    latency: "28ms",
    diagramLabel: "Dynamic Markup",
    diagramValue: "Algorithmic Balance",
    diagramIcon: TrendingUp,
    diagramIconClass: "text-yellow-600",
    diagramBorderClass: "border-yellow-500 bg-yellow-50",
    connectorClass: "bg-yellow-500/50",
    endpointLabel: "PRICER",
  },
  {
    id: 3,
    code: "DEPLOY",
    title: "High-Scale API SaaS Routing",
    subtitle: "Scalable API router delivery",
    stepLabel: "Step 03 / Patented Pipeline",
    description:
      "Deploys verified ticket stock endpoints smoothly into external partner CMS channels, travel itinerary aggregators, and corporate CRM systems. Multi-channel synchronization prevents dual-allocation errors.",
    latency: "8ms",
    diagramLabel: "API Gateways",
    diagramValue: "Scalable REST SDK",
    diagramIcon: Network,
    diagramIconClass: "text-blue-600",
    diagramBorderClass: "border-blue-500 bg-blue-50",
    connectorClass: "bg-blue-500/50",
    endpointLabel: "ROUTER",
  },
  {
    id: 4,
    code: "FULFILL",
    title: "Instant Digital Fulfillment",
    subtitle: "Instant delivery protocols",
    stepLabel: "Step 04 / Patented Pipeline",
    description:
      "Completes bookings without manual backend touchpoints. Secure automated payment handshakes activate the primary source systems, delivering verified digital barcode tickets to the customer with absolute safety.",
    latency: "19ms",
    diagramLabel: "Delivery Status",
    diagramValue: "100% Guaranteed",
    diagramIcon: ShieldCheck,
    diagramIconClass: "text-green-600",
    diagramBorderClass: "border-green-500 bg-green-50",
    connectorClass: "bg-green-500/50",
    endpointLabel: "SECURE",
  },
];
