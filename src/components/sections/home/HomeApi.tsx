"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BookOpen,
  Box,
  Calendar,
  Check,
  Clock,
  Code2,
  ConciergeBell,
  Copy,
  Database,
  LayoutDashboard,
  Layers,
  MessageSquare,
  Plane,
  Puzzle,
  Search,
  Shield,
  ShoppingCart,
  Tag,
  Ticket,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { launchFlags } from "@/lib/constants/features";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const resources: {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  method: "GET" | "POST";
  path: string;
  request?: string;
  sample: string;
}[] = [
  {
    id: "events",
    icon: Calendar,
    title: "Events",
    subtitle: "Discover connected events across markets.",
    method: "GET",
    path: "/v1/events",
    sample: `{
  "status": "ok",
  "data": [
    {
      "id": "evt_demo",
      "name": "Championship Final",
      "market": "EU",
      "category": "sports"
    }
  ]
}`,
  },
  {
    id: "inventory",
    icon: Box,
    title: "Inventory",
    subtitle: "Work with unified product and inventory records.",
    method: "GET",
    path: "/v1/inventory",
    sample: `{
  "status": "ok",
  "data": [
    {
      "productId": "prd_suite",
      "type": "hospitality",
      "availability": "open"
    }
  ]
}`,
  },
  {
    id: "availability",
    icon: BarChart3,
    title: "Availability",
    subtitle: "Read live availability for approved channels.",
    method: "GET",
    path: "/v1/availability",
    sample: `{
  "status": "ok",
  "data": {
    "productId": "prd_suite",
    "state": "available",
    "holds": "supported"
  }
}`,
  },
  {
    id: "quotes",
    icon: MessageSquare,
    title: "Quotes",
    subtitle: "Create and manage commercial quotations.",
    method: "POST",
    path: "/v1/quotes",
    request: `{
  "productId": "prd_suite",
  "quantity": 4,
  "currency": "EUR"
}`,
    sample: `{
  "status": "ok",
  "data": {
    "quoteId": "qte_demo",
    "currency": "EUR",
    "state": "draft"
  }
}`,
  },
  {
    id: "orders",
    icon: ShoppingCart,
    title: "Orders",
    subtitle: "Book inventory through the infrastructure layer.",
    method: "POST",
    path: "/v1/orders",
    request: `{
  "quoteId": "qte_demo",
  "channel": "partner",
  "reference": "PO-10432"
}`,
    sample: `{
  "status": "ok",
  "data": {
    "orderId": "ord_demo",
    "state": "confirmed",
    "fulfilment": "pending"
  }
}`,
  },
  {
    id: "fulfilment",
    icon: Truck,
    title: "Fulfilment",
    subtitle: "Track fulfilment under approved workflows.",
    method: "GET",
    path: "/v1/fulfilment",
    sample: `{
  "status": "ok",
  "data": {
    "orderId": "ord_demo",
    "delivery": "scheduled",
    "channel": "partner"
  }
}`,
  },
];

const supplySources: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Ticket,
    title: "Ticketing systems",
    text: "Connect event and ticket inventory into the network.",
  },
  {
    icon: Database,
    title: "Inventory feeds",
    text: "Sync product and availability data through supported feeds.",
  },
  {
    icon: ConciergeBell,
    title: "Hospitality platforms",
    text: "Distribute premium packages through approved channels.",
  },
];

const demandSources: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Plane,
    title: "Travel platforms",
    text: "Search, quote and book inventory inside travel workflows.",
  },
  {
    icon: Bell,
    title: "Concierge systems",
    text: "Fulfil guest requests with connected professional supply.",
  },
  {
    icon: Tag,
    title: "White-label journeys",
    text: "Present discovery and booking under the partner brand.",
  },
];

const workflow: { icon: LucideIcon; step: string; title: string; text: string }[] =
  [
    {
      icon: Search,
      step: "01",
      title: "Search",
      text: "Query events, products and availability.",
    },
    {
      icon: BookOpen,
      step: "02",
      title: "Quote",
      text: "Build commercial quotes for customers.",
    },
    {
      icon: Ticket,
      step: "03",
      title: "Book",
      text: "Confirm inventory through the API layer.",
    },
    {
      icon: BadgeCheck,
      step: "04",
      title: "Fulfil",
      text: "Complete delivery under approved rules.",
    },
  ];

const qualities: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shield,
    title: "Standardised",
    text: "Consistent API patterns across supply and distribution.",
  },
  {
    icon: Zap,
    title: "Secure",
    text: "Access controlled for approved partners and suppliers.",
  },
  {
    icon: Puzzle,
    title: "Flexible",
    text: "Fit existing systems, white-label and custom workflows.",
  },
  {
    icon: Layers,
    title: "Scalable",
    text: "One infrastructure layer that grows with your network.",
  },
];

/** Mocked SeatsConnect product screens — illustrative demo UI only (no live stats). */
function DashboardMock({ id }: { id: string }) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-2.5">
      <DashAppChrome section={id} />
      {id === "events" ? <EventsDash /> : null}
      {id === "inventory" ? <InventoryDash /> : null}
      {id === "availability" ? <AvailabilityDash /> : null}
      {id === "quotes" ? <QuotesDash /> : null}
      {id === "orders" ? <OrdersDash /> : null}
      {id === "fulfilment" ? <FulfilmentDash /> : null}
    </div>
  );
}

function DashAppChrome({ section }: { section: string }) {
  const tabs = [
    "Events",
    "Inventory",
    "Availability",
    "Quotes",
    "Orders",
    "Fulfilment",
  ];
  const activeLabel =
    tabs.find((t) => t.toLowerCase() === section) ??
    tabs.find((t) => section.startsWith(t.toLowerCase().slice(0, 5))) ??
    "Events";

  return (
    <div className="rounded-xl border border-orange-100 bg-[#fbf8f4]">
      <div className="flex items-center justify-between gap-2 border-b border-orange-100 px-2.5 py-1.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-orange text-white">
            <Layers className="h-3 w-3" strokeWidth={2} />
          </span>
          <p className="truncate font-tech text-[10px] font-bold tracking-wide text-brand-dark">
            SeatsConnect
          </p>
          <span className="hidden rounded-full bg-white px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-brand-gray-text sm:inline">
            Partner workspace
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 live-ping" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[8px] font-semibold uppercase tracking-wider text-emerald-700">
            Connected
          </span>
        </div>
      </div>
      <div className="flex gap-0.5 overflow-x-auto px-1.5 py-1">
        {tabs.map((tab) => {
          const on =
            tab === activeLabel ||
            (section === "fulfilment" && tab === "Fulfilment");
          return (
            <span
              key={tab}
              className={cn(
                "shrink-0 rounded-md px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-wide",
                on
                  ? "bg-brand-orange text-white"
                  : "text-brand-gray-text"
              )}
            >
              {tab}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function DashKpis({
  items,
}: {
  items: { label: string; value: string; hint: string }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-orange-100 bg-[#faf7f3] px-2 py-1.5"
        >
          <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
            {item.label}
          </p>
          <p className="mt-0.5 font-tech text-[11px] font-bold text-brand-dark">
            {item.value}
          </p>
          <p className="truncate text-[8px] text-brand-gray-text">{item.hint}</p>
        </div>
      ))}
    </div>
  );
}

function DashFilters({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-lg border border-orange-100 bg-white px-2 py-1.5">
        <Search className="h-3 w-3 shrink-0 text-brand-gray-text" strokeWidth={1.8} />
        <span className="truncate font-mono text-[9px] text-brand-gray-text">
          Search {chips[0]?.toLowerCase()}…
        </span>
      </div>
      {chips.slice(1).map((chip, i) => (
        <span
          key={chip}
          className={cn(
            "rounded-full border px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-wide",
            i === 0
              ? "border-brand-orange/35 bg-brand-orange/10 text-brand-orange"
              : "border-orange-100 bg-white text-brand-gray-text"
          )}
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

function DashStatus({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "ok" | "warn" | "neutral" | "live";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider",
        tone === "ok" && "bg-emerald-50 text-emerald-700",
        tone === "live" && "bg-emerald-50 text-emerald-700",
        tone === "warn" && "bg-amber-50 text-amber-700",
        tone === "neutral" && "bg-[#f3efe9] text-brand-gray-text"
      )}
    >
      {(tone === "ok" || tone === "live") && (
        <span className="h-1 w-1 rounded-full bg-emerald-500" />
      )}
      {children}
    </span>
  );
}

function EventsDash() {
  const rows = [
    {
      name: "Championship Final",
      venue: "City Arena",
      market: "EU",
      category: "Sports",
      window: "Sat 19:45",
      status: "Live" as const,
    },
    {
      name: "Grand Prix Weekend",
      venue: "National Circuit",
      market: "ME",
      category: "Motorsport",
      window: "Fri–Sun",
      status: "Open" as const,
    },
    {
      name: "Summer Festival",
      venue: "Waterfront Stage",
      market: "UK",
      category: "Live",
      window: "Aug series",
      status: "Open" as const,
    },
    {
      name: "Corporate Cup Final",
      venue: "Central Stadium",
      market: "EU",
      category: "Sports",
      window: "Sun 16:00",
      status: "Draft" as const,
    },
  ];

  return (
    <>
      <DashKpis
        items={[
          { label: "Feed", value: "Synced", hint: "Event catalogue" },
          { label: "Markets", value: "Active", hint: "Approved regions" },
          { label: "Visibility", value: "Partner", hint: "Controlled access" },
        ]}
      />
      <DashFilters chips={["Events", "EU", "Sports", "Open"]} />
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-orange-100">
        <div className="grid grid-cols-[1.3fr_0.7fr_0.55fr_0.55fr] gap-1 border-b border-orange-100 bg-[#faf7f3] px-2 py-1.5">
          {["Event / venue", "Market", "Window", "Status"].map((h) => (
            <span
              key={h}
              className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-brand-gray-text"
            >
              {h}
            </span>
          ))}
        </div>
        <ul className="divide-y divide-orange-100">
          {rows.map((row) => (
            <li
              key={row.name}
              className="grid grid-cols-[1.3fr_0.7fr_0.55fr_0.55fr] items-center gap-1 px-2 py-2"
            >
              <div className="min-w-0">
                <p className="truncate font-tech text-[10px] font-bold text-brand-dark">
                  {row.name}
                </p>
                <p className="truncate text-[8px] text-brand-gray-text">
                  {row.venue} · {row.category}
                </p>
              </div>
              <span className="font-mono text-[9px] text-brand-dark">{row.market}</span>
              <span className="truncate font-mono text-[8px] text-brand-gray-text">
                {row.window}
              </span>
              <DashStatus
                tone={
                  row.status === "Live"
                    ? "live"
                    : row.status === "Open"
                      ? "ok"
                      : "neutral"
                }
              >
                {row.status}
              </DashStatus>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function InventoryDash() {
  const rows = [
    {
      product: "Cat A · Pair",
      event: "Championship Final",
      type: "Ticket",
      channel: "Travel",
      state: "Open" as const,
    },
    {
      product: "Hospitality Suite",
      event: "Championship Final",
      type: "Hospitality",
      channel: "Concierge",
      state: "Open" as const,
    },
    {
      product: "Lounge Package",
      event: "Grand Prix Weekend",
      type: "Hospitality",
      channel: "Corporate",
      state: "Hold" as const,
    },
    {
      product: "Cat B · Quad",
      event: "Summer Festival",
      type: "Ticket",
      channel: "Travel",
      state: "Limited" as const,
    },
  ];

  return (
    <>
      <DashKpis
        items={[
          { label: "Products", value: "Mapped", hint: "Unified catalogue" },
          { label: "Channels", value: "Ruled", hint: "Approved routes" },
          { label: "Terms", value: "Applied", hint: "Commercial control" },
        ]}
      />
      <DashFilters chips={["Inventory", "Hospitality", "Open", "EU"]} />
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-orange-100">
        <div className="grid grid-cols-[1.2fr_1fr_0.55fr_0.55fr] gap-1 border-b border-orange-100 bg-[#faf7f3] px-2 py-1.5">
          {["Product", "Event", "Type", "State"].map((h) => (
            <span
              key={h}
              className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-brand-gray-text"
            >
              {h}
            </span>
          ))}
        </div>
        <ul className="divide-y divide-orange-100">
          {rows.map((row) => (
            <li
              key={row.product}
              className="grid grid-cols-[1.2fr_1fr_0.55fr_0.55fr] items-center gap-1 px-2 py-2"
            >
              <div className="min-w-0">
                <p className="truncate font-tech text-[10px] font-bold text-brand-dark">
                  {row.product}
                </p>
                <p className="truncate text-[8px] text-brand-gray-text">
                  Channel · {row.channel}
                </p>
              </div>
              <span className="truncate text-[9px] text-brand-gray-text">
                {row.event}
              </span>
              <span className="font-mono text-[8px] text-brand-dark">{row.type}</span>
              <DashStatus
                tone={
                  row.state === "Open"
                    ? "ok"
                    : row.state === "Hold" || row.state === "Limited"
                      ? "warn"
                      : "neutral"
                }
              >
                {row.state}
              </DashStatus>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function AvailabilityDash() {
  const rows = [
    { product: "Cat A · Pair", avail: "Available", hold: "Supported", fill: "76%" },
    { product: "Hospitality Suite", avail: "Available", hold: "Supported", fill: "54%" },
    { product: "Lounge Package", avail: "Limited", hold: "Active hold", fill: "28%" },
    { product: "Cat B · Quad", avail: "Available", hold: "Supported", fill: "61%" },
  ];

  return (
    <>
      <DashKpis
        items={[
          { label: "Realtime", value: "Live", hint: "Availability feed" },
          { label: "Holds", value: "Enabled", hint: "Partner rules" },
          { label: "Sync", value: "Ready", hint: "Channel updates" },
        ]}
      />
      <DashFilters chips={["Availability", "All products", "Holds on"]} />
      <div className="space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.product}
            className="rounded-lg border border-orange-100 bg-[#faf7f3] px-2.5 py-2"
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <p className="truncate font-tech text-[10px] font-bold text-brand-dark">
                {row.product}
              </p>
              <div className="flex shrink-0 items-center gap-1">
                <DashStatus tone={row.avail === "Available" ? "ok" : "warn"}>
                  {row.avail}
                </DashStatus>
              </div>
            </div>
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="font-mono text-[8px] text-brand-gray-text">
                {row.hold}
              </span>
              <span className="font-mono text-[8px] font-semibold text-brand-orange">
                Capacity band
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white">
              <span
                className="block h-full rounded-full bg-brand-orange"
                style={{ width: row.fill }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function QuotesDash() {
  const columns = [
    {
      name: "Draft",
      items: [
        { id: "QTE-2048", partner: "Travel Co", event: "Championship Final", value: "EUR" },
        { id: "QTE-2046", partner: "Hotel Desk", event: "Summer Festival", value: "GBP" },
      ],
    },
    {
      name: "Sent",
      items: [
        { id: "QTE-2041", partner: "Concierge", event: "Grand Prix Weekend", value: "EUR" },
      ],
    },
    {
      name: "Accepted",
      items: [
        { id: "QTE-2033", partner: "Corporate", event: "Championship Final", value: "EUR" },
      ],
    },
  ];

  return (
    <>
      <DashKpis
        items={[
          { label: "Pipeline", value: "Active", hint: "Quote workflow" },
          { label: "Currency", value: "Multi", hint: "Partner terms" },
          { label: "Branding", value: "Partner", hint: "Where supported" },
        ]}
      />
      <DashFilters chips={["Quotes", "All partners", "Open"]} />
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5">
        {columns.map((col) => (
          <div
            key={col.name}
            className="flex min-h-0 flex-col rounded-xl border border-orange-100 bg-[#faf7f3] p-1.5"
          >
            <div className="mb-1.5 flex items-center justify-between px-1">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
                {col.name}
              </p>
              <span className="font-mono text-[8px] text-brand-orange">
                {col.items.length}
              </span>
            </div>
            <div className="space-y-1.5 overflow-hidden">
              {col.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-orange-100/80 bg-white px-2 py-1.5 shadow-[0_1px_3px_rgba(40,30,20,0.04)]"
                >
                  <p className="font-mono text-[9px] font-bold text-brand-dark">
                    {item.id}
                  </p>
                  <p className="truncate text-[8px] text-brand-gray-text">
                    {item.partner}
                  </p>
                  <p className="mt-0.5 truncate text-[8px] text-brand-dark/80">
                    {item.event}
                  </p>
                  <p className="mt-1 font-mono text-[8px] font-semibold text-brand-orange">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function OrdersDash() {
  const rows = [
    {
      id: "ORD-8814",
      ref: "PO-10441",
      partner: "Travel Co",
      event: "Championship Final",
      state: "Confirmed" as const,
    },
    {
      id: "ORD-8812",
      ref: "PO-10432",
      partner: "Concierge",
      event: "Grand Prix Weekend",
      state: "Confirmed" as const,
    },
    {
      id: "ORD-8810",
      ref: "PO-10419",
      partner: "Corporate",
      event: "Summer Festival",
      state: "Pending" as const,
    },
    {
      id: "ORD-8807",
      ref: "PO-10402",
      partner: "Hotel Desk",
      event: "Championship Final",
      state: "Confirmed" as const,
    },
  ];

  return (
    <>
      <DashKpis
        items={[
          { label: "Bookings", value: "Live", hint: "Order layer" },
          { label: "Channel", value: "API", hint: "Partner systems" },
          { label: "Fulfilment", value: "Linked", hint: "Delivery status" },
        ]}
      />
      <DashFilters chips={["Orders", "Confirmed", "All channels"]} />
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-orange-100">
        <div className="grid grid-cols-[0.85fr_0.7fr_1fr_0.55fr] gap-1 border-b border-orange-100 bg-[#faf7f3] px-2 py-1.5">
          {["Order", "Reference", "Partner / event", "State"].map((h) => (
            <span
              key={h}
              className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-brand-gray-text"
            >
              {h}
            </span>
          ))}
        </div>
        <ul className="divide-y divide-orange-100">
          {rows.map((row) => (
            <li
              key={row.id}
              className="grid grid-cols-[0.85fr_0.7fr_1fr_0.55fr] items-center gap-1 px-2 py-2"
            >
              <span className="font-mono text-[9px] font-bold text-brand-dark">
                {row.id}
              </span>
              <span className="truncate font-mono text-[8px] text-brand-gray-text">
                {row.ref}
              </span>
              <div className="min-w-0">
                <p className="truncate font-tech text-[9px] font-semibold text-brand-dark">
                  {row.partner}
                </p>
                <p className="truncate text-[8px] text-brand-gray-text">{row.event}</p>
              </div>
              <DashStatus tone={row.state === "Confirmed" ? "ok" : "warn"}>
                {row.state}
              </DashStatus>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function FulfilmentDash() {
  const timeline = [
    { label: "Booked", detail: "Order confirmed via partner API", done: true },
    { label: "Allocated", detail: "Inventory reserved under terms", done: true },
    { label: "Scheduled", detail: "Delivery window set for guest", done: true, active: true },
    { label: "Delivered", detail: "Fulfilment complete to channel", done: false },
  ];

  const queue = [
    { order: "ORD-8814", channel: "Partner API", state: "Scheduled" },
    { order: "ORD-8812", channel: "White label", state: "In progress" },
    { order: "ORD-8807", channel: "Embedded", state: "Ready" },
  ];

  return (
    <>
      <DashKpis
        items={[
          { label: "Delivery", value: "Tracked", hint: "Fulfilment feed" },
          { label: "Channels", value: "Mapped", hint: "Partner routes" },
          { label: "Status", value: "Live", hint: "Order updates" },
        ]}
      />
      <div className="rounded-xl border border-orange-100 bg-[#faf7f3] p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-tech text-[10px] font-bold text-brand-dark">
            ORD-8814 · Championship Final
          </p>
          <DashStatus tone="warn">Scheduled</DashStatus>
        </div>
        <ul className="relative space-y-2 pl-0.5">
          <span className="absolute bottom-2 left-[7px] top-2 w-px bg-orange-100" />
          {timeline.map((step) => (
            <li key={step.label} className="relative flex items-start gap-2">
              <span
                className={cn(
                  "relative z-10 mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full",
                  step.done ? "bg-brand-orange text-white" : "bg-white ring-1 ring-orange-100"
                )}
              >
                {step.done ? (
                  <Check className="h-2 w-2" strokeWidth={3} />
                ) : (
                  <Clock className="h-2 w-2 text-brand-gray-text" strokeWidth={2} />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-tech text-[10px] font-semibold text-brand-dark">
                    {step.label}
                  </p>
                  {step.active ? (
                    <span className="font-mono text-[8px] font-semibold text-brand-orange">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="text-[8px] leading-snug text-brand-gray-text">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden rounded-xl border border-orange-100">
        <div className="border-b border-orange-100 bg-[#faf7f3] px-2 py-1.5">
          <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
            Delivery queue
          </p>
        </div>
        <ul className="divide-y divide-orange-100">
          {queue.map((row) => (
            <li
              key={row.order}
              className="flex items-center justify-between gap-2 px-2 py-1.5"
            >
              <div className="min-w-0">
                <p className="font-mono text-[9px] font-bold text-brand-dark">
                  {row.order}
                </p>
                <p className="truncate text-[8px] text-brand-gray-text">{row.channel}</p>
              </div>
              <DashStatus
                tone={
                  row.state === "Ready"
                    ? "ok"
                    : row.state === "Scheduled"
                      ? "warn"
                      : "neutral"
                }
              >
                {row.state}
              </DashStatus>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function HomeApi() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<"request" | "response">("response");
  const [front, setFront] = useState<"ui" | "api">("ui");
  const [copied, setCopied] = useState(false);
  const current = resources[active] ?? resources[0];
  const activeCode = tab === "request" && current.request ? current.request : current.sample;

  function selectResource(i: number) {
    setActive(i);
    setTab("response");
    setFront("ui");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <HomeFrame id="api" tinted variant="plain" className="overflow-hidden">
      <Reveal>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
          <div>
            <HomeKicker>API Infrastructure</HomeKicker>
            <h2 className="mt-3 max-w-2xl font-tech text-3xl font-bold leading-[1.1] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.65rem]">
              One API. <span className="text-brand-orange">Every stage of the transaction.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-base">
              SeatsConnect is built around API connectivity — linking ticketing
              systems, inventory feeds, hospitality platforms and professional
              distribution channels through one B2B infrastructure layer, from
              the first search to confirmed fulfilment.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
            <Button href={routes.api} className="rounded-full px-6">
              <Code2 className="h-4 w-4" strokeWidth={1.75} />
              Explore API Connectivity
              <ArrowRight className="h-4 w-4" />
            </Button>
            {launchFlags.developerPortal ? (
              <Button
                href={siteConfig.developersUrl}
                external
                variant="outline"
                className="rounded-full px-6"
              >
                Developer portal
              </Button>
            ) : null}
          </div>
        </div>
      </Reveal>

      {/* Resource explorer — product dashboard stacked over the raw API console */}
      <Reveal delay={80}>
        <div className="mt-12 lg:mt-14">
          <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                API surface
              </p>
              <h3 className="mt-1.5 font-tech text-xl font-bold text-brand-dark sm:text-2xl">
                One layer. Multiple capabilities.
              </h3>
            </div>
            <p className="max-w-sm text-sm text-brand-gray-text sm:text-right">
              Events, inventory, availability, quotes, orders and fulfilment —
              through the same infrastructure. Tap either panel to bring it
              forward.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-white shadow-[0_18px_50px_rgba(40,30,20,0.07)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex flex-col gap-1.5 bg-[#faf7f3] p-3 sm:p-4 lg:p-5">
              {resources.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectResource(i)}
                  aria-pressed={i === active}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all sm:px-4 sm:py-3.5",
                    i === active
                      ? "bg-white shadow-[0_10px_28px_rgba(40,30,20,0.08)] ring-1 ring-brand-orange/25"
                      : "hover:bg-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
                      i === active
                        ? "bg-brand-orange text-white"
                        : "bg-brand-orange/10 text-brand-orange"
                    )}
                  >
                    <item.icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-tech text-sm font-bold text-brand-dark">
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "rounded-md px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wide",
                          item.method === "POST"
                            ? "bg-brand-orange/15 text-brand-orange"
                            : "bg-brand-dark/8 text-brand-gray-text"
                        )}
                      >
                        {item.method}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs leading-snug text-brand-gray-text",
                        i === active ? "opacity-100" : "opacity-70"
                      )}
                    >
                      {item.subtitle}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Layered consoles: product dashboard mock + raw API console */}
            <div className="bg-[#f3efe9] p-3 sm:p-5 lg:p-6">
              <div className="relative h-[400px] sm:h-[430px] lg:h-[440px]">
                {/* Product / dashboard mock panel */}
                <div
                  onClick={() => setFront("ui")}
                  className={cn(
                    "absolute left-0 top-0 w-[88%] cursor-pointer overflow-hidden rounded-2xl border border-orange-100/90 bg-white transition-all duration-300 ease-out",
                    front === "ui"
                      ? "z-20 h-[92%] -rotate-[0.5deg] shadow-[0_22px_54px_rgba(40,30,20,0.16)]"
                      : "z-10 h-[84%] rotate-[1.2deg] scale-[0.97] opacity-95 shadow-[0_10px_24px_rgba(40,30,20,0.08)]"
                  )}
                >
                  <div className="flex items-center justify-between border-b border-orange-100 bg-[#fbf8f4] px-3.5 py-2 sm:px-4">
                    <span className="flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-wide text-brand-gray-text">
                      <LayoutDashboard className="h-3 w-3" strokeWidth={1.9} />
                      SeatsConnect · {current.title}
                    </span>
                    <span className="font-mono text-[9px] font-semibold text-brand-gray-text/60">
                      Demo workspace
                    </span>
                  </div>
                  <div className="h-[calc(100%-31px)] overflow-y-auto p-2.5 sm:p-3">
                    <DashboardMock id={current.id} />
                  </div>
                </div>

                {/* Raw API console panel */}
                <div
                  onClick={() => setFront("api")}
                  className={cn(
                    "absolute bottom-0 right-0 w-[88%] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 ease-out",
                    front === "api"
                      ? "z-20 h-[92%] rotate-[0.5deg] shadow-[0_22px_54px_rgba(0,0,0,0.4)]"
                      : "z-10 h-[84%] -rotate-[1.2deg] scale-[0.97] opacity-95 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-white/[0.03] px-3.5 py-2 sm:px-4">
                    <div className="flex min-w-0 items-center gap-2">
                      <span
                        className={cn(
                          "rounded-md px-2 py-0.5 font-mono text-[10px] font-bold",
                          current.method === "POST"
                            ? "bg-brand-orange/20 text-brand-orange"
                            : "bg-white/10 text-white/70"
                        )}
                      >
                        {current.method}
                      </span>
                      <p className="truncate font-mono text-[11px] text-white/80 sm:text-xs">
                        {current.path}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {current.request ? (
                        <div className="flex items-center gap-1 rounded-lg bg-white/5 p-0.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTab("request");
                            }}
                            className={cn(
                              "rounded-md px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide transition-colors",
                              tab === "request"
                                ? "bg-white/15 text-white"
                                : "text-white/45 hover:text-white/70"
                            )}
                          >
                            Request
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTab("response");
                            }}
                            className={cn(
                              "rounded-md px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide transition-colors",
                              tab === "response"
                                ? "bg-white/15 text-white"
                                : "text-white/45 hover:text-white/70"
                            )}
                          >
                            Response
                          </button>
                        </div>
                      ) : null}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy();
                        }}
                        className="flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2 py-1 font-mono text-[9px} font-semibold uppercase tracking-wide text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" /> Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="h-[calc(100%-33px)] overflow-y-auto p-3.5 sm:p-4">
                    <pre className="font-mono text-[10px] leading-relaxed text-white/85 sm:text-[11px]">
                      <code>{activeCode}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Supply / Distribution — shown as one connected pipeline */}
      <Reveal delay={140}>
        <div className="mt-14 lg:mt-16">
          <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-3">
            <article className="rounded-[1.5rem] border border-orange-100/90 bg-white p-5 shadow-[0_12px_32px_rgba(40,30,20,0.05)] sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                  <Box className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    Supply side
                  </p>
                  <p className="mt-1 font-tech text-lg font-bold text-brand-dark">
                    Connect inventory sources
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {supplySources.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-orange-100/80 bg-[#faf7f3] px-3.5 py-3"
                  >
                    <item.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      strokeWidth={1.7}
                    />
                    <div>
                      <p className="font-tech text-sm font-bold text-brand-dark">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-brand-gray-text">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <div className="relative flex items-center justify-center py-2 lg:w-20 lg:py-0">
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent lg:h-px lg:w-full lg:bg-gradient-to-r" />
              <span className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-brand-orange/30 bg-white shadow-[0_8px_20px_rgba(255,107,0,0.14)]">
                <Code2 className="h-4 w-4 text-brand-orange" strokeWidth={1.7} />
              </span>
              <ArrowDown className="absolute -bottom-1 h-3.5 w-3.5 text-brand-orange/50 lg:hidden" />
              <ArrowRight className="absolute -right-1 hidden h-3.5 w-3.5 text-brand-orange/50 lg:block" />
            </div>

            <article className="rounded-[1.5rem] border border-orange-100/90 bg-white p-5 shadow-[0_12px_32px_rgba(40,30,20,0.05)] sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                  <Users className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    Distribution side
                  </p>
                  <p className="mt-1 font-tech text-lg font-bold text-brand-dark">
                    Serve professional demand
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {demandSources.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-orange-100/80 bg-[#faf7f3] px-3.5 py-3"
                  >
                    <item.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      strokeWidth={1.7}
                    />
                    <div>
                      <p className="font-tech text-sm font-bold text-brand-dark">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-brand-gray-text">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Reveal>

      {/* Workflow */}
      {/* <Reveal delay={180}>
        <div className="mt-14 lg:mt-16">
          <div className="mb-6 sm:mb-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Partner workflow
            </p>
            <h3 className="mt-1.5 font-tech text-xl font-bold text-brand-dark sm:text-2xl">
              Search → Quote → Book → Fulfil
            </h3>
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-brand-orange/25 to-transparent lg:block" />
            {workflow.map((item) => (
              <div
                key={item.title}
                className="relative rounded-[1.35rem] border border-orange-100/90 bg-white p-5 shadow-[0_10px_28px_rgba(40,30,20,0.04)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange ring-4 ring-white">
                    <item.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange/70">
                    {item.step}
                  </span>
                </div>
                <p className="mt-4 font-tech text-base font-bold text-brand-dark">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-text">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal> */}

      {/* Qualities + CTA */}
      <Reveal delay={220}>
        <div className="mt-14 overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white lg:mt-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {qualities.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "p-5 sm:p-6",
                  i < qualities.length - 1 &&
                    "border-b border-orange-100/80 lg:border-b-0 lg:border-r"
                )}
              >
                <item.icon
                  className="h-5 w-5 text-brand-orange"
                  strokeWidth={1.6}
                />
                <p className="mt-3 font-tech text-sm font-bold text-brand-dark">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-gray-text">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-orange-100/80 bg-brand-dark px-5 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange">
                <Layers className="h-4 w-4 text-white" strokeWidth={2} />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Ready to integrate
                </p>
                <p className="mt-1.5 font-tech text-lg font-bold tracking-tight sm:text-xl">
                  Connect supply and distribution through one API layer
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Button
                href={routes.api}
                className="rounded-full bg-brand-orange px-5 hover:bg-brand-orange-hover"
              >
                Explore API
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={routes.contact}
                variant="ghost"
                className="rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}