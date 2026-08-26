import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Building2,
  Cable,
  CheckCircle2,
  Code2,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  KeyRound,
  Layers,
  Link2,
  Package,
  Puzzle,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import type { PageHeroItem } from "@/components/ui/PageLayout";

export const heroWorkflow: PageHeroItem[] = [
  {
    title: "Search",
    text: "Find events and inventory.",
    icon: Search,
  },
  {
    title: "Quote",
    text: "Create commercial quotes.",
    icon: FileText,
  },
  {
    title: "Book",
    text: "Confirm inventory with partners.",
    icon: ShoppingCart,
  },
  {
    title: "Fulfil",
    text: "Deliver under approved workflows.",
    icon: Package,
  },
];

export const heroFeatures = {
  infrastructure: [
    {
      title: "One Infrastructure Layer",
      text: "Unified. Connected. Scalable.",
      icon: ShieldCheck,
    },
    {
      title: "Global Reach",
      text: "Access to professional markets worldwide.",
      icon: Globe2,
    },
    {
      title: "Trusted Network",
      text: "Work with approved partners and suppliers.",
      icon: Users,
    },
    {
      title: "Real-time Distribution",
      text: "Live inventory, availability and fulfilment.",
      icon: BarChart3,
    },
  ] satisfies PageHeroItem[],
  supply: [
    {
      title: "Connect Once",
      text: "Reach multiple approved channels.",
      icon: Link2,
    },
    {
      title: "Controlled Distribution",
      text: "Partners, markets and allocations.",
      icon: ShieldCheck,
    },
    {
      title: "Live Availability",
      text: "Inventory and booking information.",
      icon: BarChart3,
    },
    {
      title: "International Demand",
      text: "Professional buyers worldwide.",
      icon: Globe2,
    },
  ] satisfies PageHeroItem[],
  partner: [
    {
      title: "One Supply Connection",
      text: "Tickets, hospitality and events.",
      icon: Layers,
    },
    {
      title: "Approved Access",
      text: "Professional B2B distribution only.",
      icon: ShieldCheck,
    },
    {
      title: "Platform + API",
      text: "Work how your business works.",
      icon: Cable,
    },
    {
      title: "Partner Support",
      text: "Assistance for complex requests.",
      icon: Headphones,
    },
  ] satisfies PageHeroItem[],
  api: [
    {
      title: "Events & Products",
      text: "Structured catalogue access.",
      icon: Search,
    },
    {
      title: "Inventory & Pricing",
      text: "Availability and commercial data.",
      icon: BarChart3,
    },
    {
      title: "Orders & Status",
      text: "Book and track through the API.",
      icon: Workflow,
    },
    {
      title: "Webhooks",
      text: "Relevant real-time updates.",
      icon: Cable,
    },
  ] satisfies PageHeroItem[],
  solutions: [
    {
      title: "Travel",
      text: "Events alongside travel services.",
      icon: Globe2,
    },
    {
      title: "Concierge",
      text: "Respond to client requests faster.",
      icon: Sparkles,
    },
    {
      title: "Corporate",
      text: "Client entertainment and incentives.",
      icon: Building2,
    },
    {
      title: "White Label",
      text: "Your brand. Our infrastructure.",
      icon: Puzzle,
    },
  ] satisfies PageHeroItem[],
  about: [
    {
      title: "30+ Years Experience",
      text: "Ticketing, hospitality and B2B sales.",
      icon: CheckCircle2,
    },
    {
      title: "Infrastructure Focus",
      text: "Connecting supply with demand.",
      icon: Layers,
    },
    {
      title: "Approved Network",
      text: "Professional partners and suppliers.",
      icon: Users,
    },
    {
      title: "SeatsGroup Heritage",
      text: "Built for controlled distribution.",
      icon: Handshake,
    },
  ] satisfies PageHeroItem[],
  join: [
    {
      title: "Supply Partners",
      text: "Connect inventory to B2B channels.",
      icon: Package,
    },
    {
      title: "Distribution Partners",
      text: "Access global event supply.",
      icon: Users,
    },
    {
      title: "Controlled Access",
      text: "Approved professional businesses.",
      icon: ShieldCheck,
    },
    {
      title: "One Network",
      text: "Search, quote, book and fulfil.",
      icon: Workflow,
    },
  ] satisfies PageHeroItem[],
  contact: [
    {
      title: "Supply Team",
      text: "Inventory connectivity enquiries.",
      icon: Package,
    },
    {
      title: "Partner Team",
      text: "Distribution access and demos.",
      icon: Handshake,
    },
    {
      title: "Integrations",
      text: "API and technical discussions.",
      icon: Code2,
    },
    {
      title: "General Enquiries",
      text: "Talk to SeatsConnect.",
      icon: Headphones,
    },
  ] satisfies PageHeroItem[],
  support: [
    {
      title: "Getting Started",
      text: "Join, access and onboarding help.",
      icon: Sparkles,
    },
    {
      title: "Platform Access",
      text: "Login and account guidance.",
      icon: KeyRound,
    },
    {
      title: "API Help",
      text: "Integration and developer support.",
      icon: Code2,
    },
    {
      title: "Partner Questions",
      text: "Distribution and fulfilment support.",
      icon: Headphones,
    },
  ] satisfies PageHeroItem[],
  resources: [
    {
      title: "Platform Overview",
      text: "How SeatsConnect works.",
      icon: Layers,
    },
    {
      title: "API Reference",
      text: "Connectivity capabilities.",
      icon: Code2,
    },
    {
      title: "Solutions",
      text: "Built around your business.",
      icon: Puzzle,
    },
    {
      title: "Support",
      text: "Help for partners and suppliers.",
      icon: Headphones,
    },
  ] satisfies PageHeroItem[],
  legal: [
    {
      title: "Professional Use",
      text: "B2B distribution infrastructure.",
      icon: Building2,
    },
    {
      title: "Controlled Access",
      text: "Approved partners and suppliers.",
      icon: ShieldCheck,
    },
    {
      title: "Clear Terms",
      text: "Reviewed before launch.",
      icon: FileText,
    },
    {
      title: "Compliance Focus",
      text: "Responsible distribution practices.",
      icon: CheckCircle2,
    },
  ] satisfies PageHeroItem[],
} as const;

export const heroIcons = {
  layers: Layers,
  supply: Package,
  partner: Users,
  api: Code2,
  solutions: Puzzle,
  about: Building2,
  join: Handshake,
  contact: Headphones,
  support: Headphones,
  resources: FileText,
  login: KeyRound,
  legal: FileText,
  request: Sparkles,
  topics: Globe2,
  developers: Code2,
} as const satisfies Record<string, LucideIcon>;
