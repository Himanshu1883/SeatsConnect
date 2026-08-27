"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  FileCode2,
  Headphones,
  KeyRound,
  Layers,
  Package,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { HomeFrame } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { launchFlags } from "@/lib/constants/features";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

type NavSection = {
  heading: string;
  items: { label: string; active?: boolean }[];
};

const navSections: NavSection[] = [
  {
    heading: "Get started",
    items: [{ label: "Overview", active: true }, { label: "Authentication" }, { label: "Quick start" }],
  },
  {
    heading: "API reference",
    items: [
      { label: "Events" },
      { label: "Inventory" },
      { label: "Availability" },
      { label: "Pricing" },
      { label: "Orders" },
      { label: "Fulfilment" },
      { label: "Errors" },
    ],
  },
];

const overviewTiles: { icon: typeof RefreshCw; title: string; note: string }[] = [
  { icon: RefreshCw, title: "Real-time sync", note: "Always up to date" },
  { icon: ShieldCheck, title: "Secure by design", note: "Controlled access" },
  { icon: Layers, title: "Scalable", note: "Built for scale" },
  { icon: ShieldCheck, title: "Reliable", note: "Approved workflows" },
];

type LangKey = "curl" | "js" | "python" | "php";

const codeSamples: Record<LangKey, { label: string; lines: string[] }> = {
  curl: {
    label: "cURL",
    lines: [
      "curl --request GET \\",
      "  --url https://api.seatsconnect.com/v1/events \\",
      "  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \\",
      "  --header 'Accept: application/json'",
    ],
  },
  js: {
    label: "JavaScript",
    lines: [
      "const res = await fetch(",
      "  'https://api.seatsconnect.com/v1/events',",
      "  { headers: { Authorization: `Bearer ${TOKEN}` } }",
      ");",
    ],
  },
  python: {
    label: "Python",
    lines: [
      "import requests",
      "",
      "r = requests.get(",
      "  'https://api.seatsconnect.com/v1/events',",
      "  headers={'Authorization': f'Bearer {TOKEN}'}",
      ")",
    ],
  },
  php: {
    label: "PHP",
    lines: [
      "$client = new SeatsConnect\\Client($token);",
      "",
      "$events = $client->get('/v1/events');",
    ],
  },
};

const linkCards = [
  {
    icon: FileCode2,
    eyebrow: "Developer portal",
    url: "developers.seatsconnect.com",
    href: siteConfig.developersUrl,
    external: true,
    note: "Full documentation, guides, SDKs, and resources for approved teams.",
  },
  {
    icon: BookOpen,
    eyebrow: "Public API page",
    url: "api.seatsconnect.com/docs",
    href: routes.api,
    external: false,
    note: "Public overview of API capabilities, endpoints and connectivity options.",
  },
];

const bottomFeatures = [
  { icon: Rocket, title: "Built for developers", note: "Clean, consistent and easy to integrate." },
  { icon: BookOpen, title: "Always up to date", note: "Docs updated with every API release." },
  { icon: ShieldCheck, title: "Secure access", note: "Only approved partners get full portal access." },
  { icon: Headphones, title: "Developer support", note: "Get help from our integration specialists." },
];

/* ------------------------------------------------------------------ */

export function DevelopersPortal() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          Developer portal
        </span>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.4fr)] lg:gap-8">
        {/* Left column */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-tech text-3xl font-bold leading-[1.1] text-brand-dark sm:text-4xl">
                Documentation Lives in the{" "}
                <span className="text-brand-orange">Developer Portal.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-gray-text">
                Recommended locations for technical documentation are{" "}
                <span className="font-semibold text-brand-orange">developers.seatsconnect.com</span> or{" "}
                <span className="font-semibold text-brand-orange">api.seatsconnect.com/docs</span>. Until
                the portal is opened for an approved team, the public API page remains the overview of
                what SeatsConnect can connect.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              {linkCards.map((card) => {
                const href =
                  card.external && !launchFlags.developerPortal
                    ? "#access"
                    : card.href;
                const Comp = card.external && launchFlags.developerPortal ? "a" : Link;
                const externalProps =
                  card.external && launchFlags.developerPortal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};

                return (
                  <Comp
                    key={card.eyebrow}
                    href={href}
                    {...externalProps}
                    className="group flex items-start gap-3.5 rounded-2xl border border-orange-100/90 bg-[#fff7f0] px-4 py-3.5 transition hover:border-brand-orange/35 hover:bg-[#fff1e4]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-orange shadow-[0_4px_12px_rgba(255,107,0,0.14)]">
                      <card.icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-brand-orange/80">
                        {card.eyebrow}
                      </p>
                      <p className="mt-0.5 font-tech text-[15px] font-bold text-brand-dark">
                        {card.url}
                      </p>
                      <p className="mt-1 text-[12.5px] leading-snug text-brand-gray-text">
                        {card.note}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-brand-orange/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-orange"
                      strokeWidth={2}
                    />
                  </Comp>
                );
              })}

              <div className="flex items-start gap-3.5 rounded-2xl border border-orange-100/70 bg-white px-4 py-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <p className="self-center text-[12.5px] leading-relaxed text-brand-gray-text">
                  Access to full documentation is available for approved partners after onboarding.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={routes.api}
                className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2.5 font-tech text-sm font-semibold text-brand-dark transition hover:border-brand-orange/40 hover:bg-[#fff7f0]"
              >
                <BookOpen className="h-4 w-4 text-brand-orange" />
                View API Overview
              </Link>
              {launchFlags.developerPortal ? (
                <Link
                  href={siteConfig.developersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-4 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
                >
                  Open Developer Portal
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <Link
                  href="#access"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-4 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
                >
                  Request Developer Access
                </Link>
              )}
            </div>
          </div>
        </Reveal>

        {/* Right: mock docs site console */}
        <Reveal delay={80}>
          <DocsSiteConsole />
        </Reveal>
      </div>

      {/* Bottom feature strip */}
      <Reveal delay={140}>
        <div className="mt-10 grid gap-6 border-t border-orange-100/80 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {bottomFeatures.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-brand-orange">
                <f.icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-tech text-[14px] font-bold text-brand-dark">{f.title}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-brand-gray-text">{f.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </HomeFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Mock docs site — two layered consoles: detailed docs site (front)   */
/* + environment status console (peeking behind)                      */
/* ------------------------------------------------------------------ */

function DocsSiteConsole() {
  const [lang, setLang] = useState<LangKey>("curl");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(codeSamples[lang].lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <div className="relative h-[560px] w-full sm:h-[580px] lg:h-[600px]">
      {/* Layer 1 — environment status console, peeking behind top-right */}
      <div className="absolute right-0 top-0 z-10 w-[58%] -rotate-1 overflow-hidden rounded-xl border border-orange-100 bg-white shadow-[0_16px_36px_rgba(40,30,20,0.1)] sm:w-[46%]">
        <div className="flex items-center gap-2 border-b border-orange-100 bg-[#fbf8f4] px-3 py-2">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
          </span>
          <p className="ml-1 truncate font-mono text-[9.5px] font-semibold text-brand-gray-text">
            environment
          </p>
          <span className="ml-auto flex items-center gap-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="sc-live-ping absolute inset-0 rounded-full bg-emerald-500 opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          </span>
        </div>
        <div className="space-y-1.5 p-3">
          <div className="flex items-center justify-between rounded-md bg-[#faf7f3] px-2 py-1.5">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-brand-dark">
              <KeyRound className="h-3 w-3 text-brand-orange" strokeWidth={2} />
              API key
            </span>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold text-emerald-700">
              Active
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md bg-[#faf7f3] px-2 py-1.5">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-brand-dark">
              <ShieldCheck className="h-3 w-3 text-brand-orange" strokeWidth={2} />
              Sandbox mode
            </span>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold text-emerald-700">
              Enabled
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md bg-[#faf7f3] px-2 py-1.5">
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-brand-dark">
              <RefreshCw className="h-3 w-3 text-brand-orange" strokeWidth={2} />
              Uptime
            </span>
            <span className="font-mono text-[9px] font-semibold text-brand-dark">99.9%</span>
          </div>
        </div>
      </div>

      {/* Layer 2 — full detailed docs console, in front, bottom-left */}
      <div className="absolute bottom-0 left-0 z-20 h-[90%] w-[94%] overflow-hidden rounded-[1.25rem] border border-orange-100/90 bg-white shadow-[0_22px_54px_rgba(40,30,20,0.14)] sm:h-[92%] sm:w-[92%]">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-orange-100 bg-[#fbf8f4] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        {/* top nav */}
        <div className="flex flex-wrap items-center gap-3 border-b border-orange-100 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-orange text-white">
              <Layers className="h-3 w-3" strokeWidth={2} />
            </span>
            <span className="font-tech text-[13px] font-bold text-brand-dark">SeatsConnect</span>
          </div>

          <nav className="ml-1 hidden items-center gap-4 font-mono text-[11px] font-semibold sm:flex">
            <span className="relative pb-0.5 text-brand-orange">
              Docs
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-brand-orange" />
            </span>
            <span className="text-brand-gray-text">Guides</span>
            <span className="text-brand-gray-text">API Reference</span>
            <span className="text-brand-gray-text">SDKs</span>
            <span className="text-brand-gray-text">Changelog</span>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-1.5 rounded-lg border border-orange-100 bg-[#faf7f3] px-2.5 py-1 sm:flex">
              <Package className="h-3 w-3 text-brand-gray-text/60" strokeWidth={2} />
              <span className="font-mono text-[10px] text-brand-gray-text">Search docs…</span>
              <span className="ml-2 rounded border border-orange-100 bg-white px-1 font-mono text-[8.5px] text-brand-gray-text/70">
                ⌘K
              </span>
            </div>
            <span className="rounded-lg bg-brand-orange px-2.5 py-1.5 font-tech text-[10.5px] font-semibold text-white">
              Log in
            </span>
          </div>
        </div>

        <div className="grid h-[calc(100%-84px)] grid-cols-[34%_66%] sm:grid-cols-[30%_70%]">
          {/* sidebar */}
          <div className="overflow-y-auto border-r border-orange-50 bg-[#faf8f5] p-3">
            {navSections.map((section) => (
              <div key={section.heading} className="mb-3.5 last:mb-0">
                <p className="mb-1.5 px-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-brand-gray-text/70">
                  {section.heading}
                </p>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <div
                        className={cn(
                          "flex items-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-[10px] font-medium transition-colors",
                          item.active
                            ? "bg-orange-50 text-brand-orange"
                            : "text-brand-gray-text hover:bg-white/70"
                        )}
                      >
                        {item.active ? (
                          <ChevronRight className="h-2.5 w-2.5 shrink-0" strokeWidth={2.5} />
                        ) : (
                          <span className="w-2.5 shrink-0" />
                        )}
                        <span className="truncate">{item.label}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-4 rounded-xl border border-orange-100 bg-white p-2.5">
              <p className="font-tech text-[10.5px] font-bold text-brand-dark">Need help?</p>
              <p className="mt-0.5 flex items-center gap-1 font-mono text-[9px] text-brand-orange">
                Contact our developer support
                <ArrowUpRight className="h-2.5 w-2.5" />
              </p>
            </div>
          </div>

          {/* content pane */}
          <div className="overflow-y-auto p-4 sm:p-5">
            <p className="flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Overview
            </p>
            <h3 className="mt-1.5 font-tech text-xl font-bold tracking-tight text-brand-dark sm:text-2xl">
              Connect. Sync. Scale.
            </h3>
            <p className="mt-1.5 text-[12px] leading-relaxed text-brand-gray-text">
              SeatsConnect API enables real-time connectivity for events, inventory, pricing, orders and
              more — all through a single, secure integration.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {overviewTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="rounded-xl border border-orange-100/90 bg-[#faf7f3] p-2.5"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-brand-orange shadow-sm">
                    <tile.icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                  </span>
                  <p className="mt-2 font-tech text-[11px] font-bold leading-tight text-brand-dark">
                    {tile.title}
                  </p>
                  <p className="mt-0.5 text-[9.5px] text-brand-gray-text">{tile.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
                  Request example
                </p>
                <div className="flex items-center gap-1 rounded-lg bg-orange-50/60 p-0.5">
                  {(Object.keys(codeSamples) as LangKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setLang(key)}
                      className={cn(
                        "rounded-md px-2 py-1 font-mono text-[9px] font-semibold transition-colors",
                        lang === key
                          ? "bg-white text-brand-dark shadow-sm"
                          : "text-brand-gray-text hover:text-brand-dark"
                      )}
                    >
                      {codeSamples[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-[#0d1117]">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[8.5px] font-semibold uppercase tracking-wide text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-2.5 w-2.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-2.5 w-2.5" /> Copy
                    </>
                  )}
                </button>
                <pre className="overflow-x-auto p-3.5 font-mono text-[10.5px] leading-relaxed">
                  <code>
                    {codeSamples[lang].lines.map((line, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="w-3 shrink-0 select-none text-white/25">{i + 1}</span>
                        <span
                          className={cn(
                            line.trim().startsWith("--header") || line.trim().startsWith("headers")
                              ? "text-emerald-400"
                              : line.includes("https://") || line.includes("'https")
                                ? "text-sky-300"
                                : "text-white/80"
                          )}
                        >
                          {line || "\u00A0"}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}