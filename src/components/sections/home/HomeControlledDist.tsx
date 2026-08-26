"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  Eye,
  FileText,
  Globe2,
  Layers,
  Lock,
  MapPin,
  Package,
  Share2,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Rule = {
  id: string;
  label: string;
  detail: string;
  icon: LucideIcon;
  group: "access" | "inventory";
};

const rules: Rule[] = [
  {
    id: "partner",
    label: "Approved partner",
    detail: "Only approved businesses can access inventory.",
    icon: BadgeCheck,
    group: "access",
  },
  {
    id: "type",
    label: "Partner type",
    detail: "Travel, concierge, corporate or hospitality partners.",
    icon: Users,
    group: "access",
  },
  {
    id: "territory",
    label: "Territory",
    detail: "Limit distribution to defined territories.",
    icon: MapPin,
    group: "access",
  },
  {
    id: "market",
    label: "Market",
    detail: "Structure availability by market rules.",
    icon: Store,
    group: "access",
  },
  {
    id: "event",
    label: "Event",
    detail: "Apply access at the event level.",
    icon: Calendar,
    group: "access",
  },
  {
    id: "product",
    label: "Product",
    detail: "Control which products can be distributed.",
    icon: Package,
    group: "inventory",
  },
  {
    id: "allocation",
    label: "Allocation",
    detail: "Allocate inventory to approved channels.",
    icon: Layers,
    group: "inventory",
  },
  {
    id: "availability",
    label: "Availability",
    detail: "Manage when inventory is made available.",
    icon: Clock,
    group: "inventory",
  },
  {
    id: "terms",
    label: "Commercial terms",
    detail: "Keep pricing and terms under your control.",
    icon: FileText,
    group: "inventory",
  },
  {
    id: "channel",
    label: "Distribution channel",
    detail: "Choose which B2B channels can sell.",
    icon: Share2,
    group: "inventory",
  },
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shield,
    title: "Set Your Rules",
    text: "Define who can access inventory and on what terms.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control Access",
    text: "Manage partners by market, channel or agreement.",
  },
  {
    icon: Eye,
    title: "Maintain Visibility",
    text: "See how inventory is structured for distribution.",
  },
  {
    icon: Lock,
    title: "Protect Value",
    text: "Keep the right inventory with the right partners.",
  },
  {
    icon: Globe2,
    title: "Expand Confidently",
    text: "Grow reach without losing distribution control.",
  },
];

export function HomeControlledDist() {
  const [active, setActive] = useState(0);
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(rules.map((r) => [r.id, true]))
  );

  const current = rules[active] ?? rules[0];
  const enabledCount = rules.filter((r) => enabled[r.id]).length;
  const accessRules = rules.filter((r) => r.group === "access");
  const inventoryRules = rules.filter((r) => r.group === "inventory");

  return (
    <HomeFrame
      id="distribution"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!flex lg:!h-[calc(100dvh-var(--site-header-height))] lg:!max-h-[calc(100dvh-var(--site-header-height))] lg:!flex-col lg:!overflow-hidden lg:!py-8 xl:!py-9"
    >
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-6 lg:gap-7 xl:gap-8">
        <div className="grid min-h-0 items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-12">
          <Reveal>
            <HomeKicker>Controlled Distribution</HomeKicker>
            <h2 className="mt-2.5 font-tech text-3xl font-bold leading-[1.1] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.35rem] xl:text-[2.55rem]">
              Distribution{" "}
              <span className="text-brand-orange">With Control.</span>
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-brand-orange" />
            <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Expand reach while keeping control over how inventory is made
              available — structured around access rules, approved partners,
              markets, channels and commercial terms.
            </p>
            <p className="mt-2 hidden text-sm leading-relaxed text-brand-gray-text lg:block xl:mt-2.5">
              Depending on the supply agreement and technical configuration,
              distribution stays governed — not open.
            </p>

            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-[#F3EBE4] px-3.5 py-3 sm:mt-5 sm:px-4 sm:py-3.5">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                strokeWidth={1.75}
              />
              <p className="font-tech text-sm font-semibold leading-snug text-brand-dark">
                Reach more customers without losing control of your distribution
                strategy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="min-w-0">
            <div className="overflow-hidden rounded-[1.5rem] border border-orange-100/90 bg-white shadow-[0_14px_40px_rgba(40,30,20,0.08)]">
              <div className="flex items-center justify-between gap-3 border-b border-orange-100 bg-[#fbf8f4] px-3.5 py-2.5 sm:px-4">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                    <Lock className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </span>
                  <p className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange sm:text-[11px]">
                    Access policy
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
                  <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
                  {enabledCount} rules on
                </span>
              </div>

              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                <div className="border-b border-orange-100 p-3 sm:p-3.5 lg:border-b-0 lg:border-r">
                  <RuleGroup
                    title="Who & where"
                    items={accessRules}
                    activeId={current.id}
                    enabled={enabled}
                    onSelect={(id) =>
                      setActive(rules.findIndex((r) => r.id === id))
                    }
                    onToggle={(id) =>
                      setEnabled((prev) => ({ ...prev, [id]: !prev[id] }))
                    }
                  />
                  <div className="mt-3">
                    <RuleGroup
                      title="What & terms"
                      items={inventoryRules}
                      activeId={current.id}
                      enabled={enabled}
                      onSelect={(id) =>
                        setActive(rules.findIndex((r) => r.id === id))
                      }
                      onToggle={(id) =>
                        setEnabled((prev) => ({ ...prev, [id]: !prev[id] }))
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-[#faf7f3] p-3.5 sm:p-4 lg:p-5">
                  <div
                    key={current.id}
                    className="dist-policy-card rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_8px_24px_rgba(40,30,20,0.06)] sm:p-5"
                  >
                    <span
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-xl",
                        enabled[current.id]
                          ? "bg-brand-orange text-white"
                          : "bg-brand-orange/10 text-brand-orange"
                      )}
                    >
                      <current.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <p className="mt-3 font-tech text-base font-bold text-brand-dark sm:text-lg">
                      {current.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-text">
                      {current.detail}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-orange-100 pt-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-gray-text">
                        Status
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                          enabled[current.id]
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-brand-orange-light text-brand-gray-text"
                        )}
                      >
                        {enabled[current.id] ? "Applied" : "Off"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {rules
                      .filter((r) => enabled[r.id])
                      .slice(0, 6)
                      .map((r) => (
                        <span
                          key={r.id}
                          className="rounded-full border border-orange-100 bg-white px-2 py-0.5 font-mono text-[9px] font-semibold text-brand-dark"
                        >
                          {r.label}
                        </span>
                      ))}
                    {enabledCount > 6 ? (
                      <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-brand-orange">
                        +{enabledCount - 6}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="rounded-2xl bg-[#F3EBE4] px-3.5 py-3.5 sm:px-5 sm:py-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
              {features.map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-brand-orange shadow-sm">
                    <item.icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-tech text-[12px] font-bold leading-tight text-brand-dark sm:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-brand-gray-text lg:line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function RuleGroup({
  title,
  items,
  activeId,
  enabled,
  onSelect,
  onToggle,
}: {
  title: string;
  items: Rule[];
  activeId: string;
  enabled: Record<string, boolean>;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((rule) => {
          const isActive = rule.id === activeId;
          const isOn = enabled[rule.id];
          return (
            <li key={rule.id}>
              <div
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-2 py-1.5 transition-colors sm:px-2.5 sm:py-2",
                  isActive
                    ? "border-brand-orange/40 bg-brand-orange/[0.06]"
                    : "border-transparent hover:bg-[#faf7f3]"
                )}
              >
                <button
                  type="button"
                  onClick={() => onSelect(rule.id)}
                  className="flex min-w-0 flex-1 items-center gap-2 text-left"
                >
                  <rule.icon
                    className={cn(
                      "h-3.5 w-3.5 shrink-0",
                      isOn ? "text-brand-orange" : "text-brand-gray-text"
                    )}
                    strokeWidth={1.7}
                  />
                  <span className="truncate font-tech text-[12px] font-semibold text-brand-dark sm:text-[13px]">
                    {rule.label}
                  </span>
                </button>
                <button
                  type="button"
                  role="switch"
                  aria-checked={isOn}
                  aria-label={`${rule.label} ${isOn ? "on" : "off"}`}
                  onClick={() => onToggle(rule.id)}
                  className={cn(
                    "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                    isOn ? "bg-brand-orange" : "bg-[#e6ddd4]"
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform",
                      isOn ? "left-4" : "left-0.5"
                    )}
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
