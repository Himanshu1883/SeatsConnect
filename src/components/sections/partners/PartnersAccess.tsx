"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Code2,
  LayoutTemplate,
  Monitor,
  Puzzle,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { sections } = siteImages;

const accessMethods: {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  Diagram: () => ReactNode;
}[] = [
  {
    title: "Platform",
    description: "Use the SeatsConnect B2B platform directly.",
    icon: Monitor,
    tags: ["Search", "Quote", "Book"],
    Diagram: PlatformDiagram,
  },
  {
    title: "API",
    description:
      "Connect inventory and booking capabilities into your existing technology.",
    icon: Code2,
    tags: ["Integrate", "Automate", "Scale"],
    Diagram: ApiDiagram,
  },
  {
    title: "White Label",
    description:
      "Create a customer-facing solution using your own branding.",
    icon: LayoutTemplate,
    tags: ["Your brand", "Connected supply"],
    Diagram: WhiteLabelDiagram,
  },
  {
    title: "Custom Integration",
    description:
      "Develop a workflow suited to your business requirements.",
    icon: Puzzle,
    tags: ["Tailored", "Flexible"],
    Diagram: CustomDiagram,
  },
];

export function PartnersAccess() {
  return (
    <HomeFrame
      id="access"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl border border-orange-100/90 shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
                <CardMedia
                  src={sections.partner}
                  alt="Partner access to global event supply"
                  heightClass="h-40 sm:h-44"
                  className="rounded-none"
                />
              </div>
              <AccessDash />
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>Access Methods</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Access SeatsConnect{" "}
                  <span className="text-brand-orange">Your Way.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  Approved partners can connect through the access method that
                  fits how they serve customers — platform, API, white label or
                  custom integration.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {accessMethods.map((item) => (
                  <AccessMethodCard key={item.title} item={item} />
                ))}
              </div>

              <Link
                href={routes.joinPartner}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
              >
                Apply for Partner Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function AccessMethodCard({
  item,
}: {
  item: (typeof accessMethods)[number];
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-orange-100/90 bg-white shadow-[0_6px_16px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(40,30,20,0.08)]">
      <div className="relative h-[6.75rem] overflow-hidden bg-[#f7f4f0] sm:h-[7.25rem]">
        <item.Diagram />
      </div>
      <div className="relative flex flex-1 flex-col p-3.5">
        <span className="absolute -top-4 left-3.5 flex h-8 w-8 items-center justify-center rounded-lg border-2 border-white bg-brand-orange/10 text-brand-orange shadow-sm">
          <item.icon className="h-3.5 w-3.5" strokeWidth={1.85} />
        </span>
        <h3 className="mt-2 font-tech text-[14px] font-bold text-brand-dark">
          {item.title}
        </h3>
        <p className="mt-1 text-[12px] leading-snug text-brand-gray-text">
          {item.description}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#faf7f3] px-2 py-0.5 text-[10px] font-medium text-brand-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/** Platform — B2B app window with search / results UI */
function PlatformDiagram() {
  return (
    <svg
      viewBox="0 0 280 120"
      className="h-full w-full"
      fill="none"
      aria-hidden
    >
      <rect width="280" height="120" fill="#f7f4f0" />
      <rect
        x="28"
        y="14"
        width="224"
        height="92"
        rx="10"
        fill="#fff"
        stroke="#ffd7b8"
        strokeWidth="1.5"
      />
      <rect x="28" y="14" width="224" height="18" rx="10" fill="#faf7f3" />
      <rect x="28" y="24" width="224" height="8" fill="#faf7f3" />
      <circle cx="40" cy="23" r="3" fill="#e8b4a0" />
      <circle cx="50" cy="23" r="3" fill="#f0d9a8" />
      <circle cx="60" cy="23" r="3" fill="#b8d4b8" />
      <rect x="72" y="19" width="72" height="8" rx="2" fill="#fff" stroke="#ffd7b8" />
      <text
        x="76"
        y="25"
        fill="#9a8570"
        fontSize="5.5"
        fontFamily="ui-monospace, monospace"
      >
        app.seatsconnect
      </text>

      {/* Sidebar */}
      <rect x="34" y="38" width="28" height="60" rx="4" fill="#faf7f3" stroke="#ffe4cc" />
      <rect x="39" y="44" width="18" height="8" rx="2" fill="#ff6b00" />
      <rect x="39" y="56" width="18" height="6" rx="2" fill="#ffe4cc" />
      <rect x="39" y="66" width="18" height="6" rx="2" fill="#ffe4cc" />
      <rect x="39" y="76" width="18" height="6" rx="2" fill="#ffe4cc" />

      {/* Search + rows */}
      <rect x="70" y="38" width="112" height="12" rx="3" fill="#faf7f3" stroke="#ffd7b8" />
      <circle cx="78" cy="44" r="3" stroke="#ff6b00" strokeWidth="1.2" fill="none" />
      <path d="M80.2 46.2 82.5 48.5" stroke="#ff6b00" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="86" y="41.5" width="48" height="4" rx="1" fill="#e8d9c8" />

      <rect x="70" y="54" width="112" height="14" rx="3" fill="#fff" stroke="#ffe4cc" />
      <rect x="74" y="57" width="10" height="8" rx="1.5" fill="#ffb380" />
      <rect x="88" y="57.5" width="52" height="3" rx="1" fill="#3f4b5b" opacity="0.55" />
      <rect x="88" y="62.5" width="36" height="2.5" rx="1" fill="#c4b5a5" />
      <rect x="154" y="58" width="22" height="6" rx="3" fill="#ecfdf5" stroke="#86efac" />

      <rect x="70" y="72" width="112" height="14" rx="3" fill="#fff" stroke="#ffe4cc" />
      <rect x="74" y="75" width="10" height="8" rx="1.5" fill="#ffd0a8" />
      <rect x="88" y="75.5" width="46" height="3" rx="1" fill="#3f4b5b" opacity="0.45" />
      <rect x="88" y="80.5" width="30" height="2.5" rx="1" fill="#c4b5a5" />

      {/* Quote panel */}
      <rect x="190" y="38" width="52" height="60" rx="4" fill="#fff7f0" stroke="#ffd7b8" />
      <rect x="196" y="44" width="28" height="3" rx="1" fill="#ff6b00" opacity="0.7" />
      <rect x="196" y="52" width="40" height="8" rx="2" fill="#fff" stroke="#ffe4cc" />
      <rect x="196" y="64" width="40" height="8" rx="2" fill="#fff" stroke="#ffe4cc" />
      <rect x="196" y="80" width="40" height="10" rx="3" fill="#ff6b00" />
    </svg>
  );
}

/** API — request / response schema diagram */
function ApiDiagram() {
  return (
    <svg
      viewBox="0 0 280 120"
      className="h-full w-full"
      fill="none"
      aria-hidden
    >
      <rect width="280" height="120" fill="#f7f4f0" />
      <rect
        x="24"
        y="16"
        width="232"
        height="88"
        rx="10"
        fill="#1f1814"
        stroke="#ff6b00"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <rect x="24" y="16" width="232" height="16" rx="10" fill="#2a211c" />
      <rect x="24" y="26" width="232" height="6" fill="#2a211c" />
      <circle cx="36" cy="24" r="2.5" fill="#ff6b00" opacity="0.55" />
      <circle cx="45" cy="24" r="2.5" fill="#ff6b00" opacity="0.35" />
      <circle cx="54" cy="24" r="2.5" fill="#ff6b00" opacity="0.2" />
      <text
        x="64"
        y="26"
        fill="#ffb380"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
      >
        api.seatsconnect.com
      </text>

      <rect x="34" y="40" width="28" height="10" rx="3" fill="#ff6b00" />
      <text
        x="38"
        y="47"
        fill="#fff"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
        fontWeight="700"
      >
        POST
      </text>
      <text
        x="68"
        y="47"
        fill="#d6c4b4"
        fontSize="6.5"
        fontFamily="ui-monospace, monospace"
      >
        /v1/inventory/search
      </text>
      <rect x="198" y="40" width="42" height="10" rx="3" fill="#064e3b" />
      <text
        x="204"
        y="47"
        fill="#6ee7b7"
        fontSize="5.5"
        fontFamily="ui-monospace, monospace"
      >
        200 OK
      </text>

      <text
        x="36"
        y="66"
        fill="#86efac"
        fontSize="6.5"
        fontFamily="ui-monospace, monospace"
      >
        {"{"}
      </text>
      <text
        x="44"
        y="76"
        fill="#86efac"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
      >
        &quot;status&quot;:
      </text>
      <text
        x="92"
        y="76"
        fill="#ffd0a8"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
      >
        &quot;ok&quot;,
      </text>
      <text
        x="44"
        y="86"
        fill="#86efac"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
      >
        &quot;items&quot;:
      </text>
      <text
        x="88"
        y="86"
        fill="#ffd0a8"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
      >
        [{"{"}&quot;live&quot;: true{"}"}]
      </text>
      <text
        x="36"
        y="96"
        fill="#86efac"
        fontSize="6.5"
        fontFamily="ui-monospace, monospace"
      >
        {"}"}
      </text>

      {/* Node connectors */}
      <circle cx="220" cy="78" r="8" fill="#ff6b00" opacity="0.2" />
      <circle cx="220" cy="78" r="4.5" fill="#ff6b00" />
      <path
        d="M200 78h12"
        stroke="#ff6b00"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

/** White label — branded browser + your brand layer */
function WhiteLabelDiagram() {
  return (
    <svg
      viewBox="0 0 280 120"
      className="h-full w-full"
      fill="none"
      aria-hidden
    >
      <rect width="280" height="120" fill="#f7f4f0" />
      <rect
        x="36"
        y="12"
        width="208"
        height="96"
        rx="10"
        fill="#fff"
        stroke="#ffd7b8"
        strokeWidth="1.5"
      />
      <rect x="36" y="12" width="208" height="16" rx="10" fill="#faf7f3" />
      <rect x="36" y="22" width="208" height="6" fill="#faf7f3" />
      <circle cx="48" cy="20" r="2.5" fill="#e8b4a0" />
      <circle cx="57" cy="20" r="2.5" fill="#f0d9a8" />
      <circle cx="66" cy="20" r="2.5" fill="#b8d4b8" />
      <rect x="78" y="16" width="90" height="8" rx="2" fill="#fff" stroke="#ffd7b8" />
      <text
        x="82"
        y="22"
        fill="#9a8570"
        fontSize="5.5"
        fontFamily="ui-monospace, monospace"
      >
        yourbrand.com
      </text>

      {/* Hero band */}
      <rect x="46" y="36" width="188" height="28" rx="4" fill="#ff6b00" opacity="0.18" />
      <rect x="46" y="36" width="188" height="28" rx="4" stroke="#ff6b00" strokeOpacity="0.35" />
      <text
        x="54"
        y="48"
        fill="#1a1512"
        fontSize="7"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
      >
        Your Brand
      </text>
      <rect x="54" y="52" width="64" height="4" rx="1" fill="#ff6b00" opacity="0.55" />

      {/* Content cards */}
      <rect x="46" y="72" width="56" height="26" rx="4" fill="#fff7f0" stroke="#ffd7b8" />
      <rect x="52" y="78" width="28" height="3" rx="1" fill="#3f4b5b" opacity="0.4" />
      <rect x="52" y="84" width="20" height="2.5" rx="1" fill="#c4b5a5" />
      <rect x="52" y="90" width="16" height="2.5" rx="1" fill="#ff6b00" opacity="0.5" />

      <rect x="110" y="72" width="56" height="26" rx="4" fill="#fff7f0" stroke="#ffd7b8" />
      <rect x="116" y="78" width="28" height="3" rx="1" fill="#3f4b5b" opacity="0.4" />
      <rect x="116" y="84" width="20" height="2.5" rx="1" fill="#c4b5a5" />
      <rect x="116" y="90" width="16" height="2.5" rx="1" fill="#ff6b00" opacity="0.5" />

      <rect x="174" y="72" width="52" height="26" rx="4" fill="#ff6b00" opacity="0.12" stroke="#ff6b00" strokeOpacity="0.35" />
      <text
        x="182"
        y="88"
        fill="#ff6b00"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
        fontWeight="700"
      >
        White label
      </text>
    </svg>
  );
}

/** Custom — systems connecting into SeatsConnect hub */
function CustomDiagram() {
  return (
    <svg
      viewBox="0 0 280 120"
      className="h-full w-full"
      fill="none"
      aria-hidden
    >
      <rect width="280" height="120" fill="#f7f4f0" />

      {/* Left systems */}
      <rect x="20" y="22" width="58" height="22" rx="5" fill="#fff" stroke="#ffd7b8" />
      <text x="32" y="36" fill="#3f4b5b" fontSize="7" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        ERP
      </text>
      <rect x="20" y="52" width="58" height="22" rx="5" fill="#fff" stroke="#ffd7b8" />
      <text x="32" y="66" fill="#3f4b5b" fontSize="7" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        CRM
      </text>
      <rect x="20" y="82" width="58" height="22" rx="5" fill="#fff" stroke="#ffd7b8" />
      <text x="28" y="96" fill="#3f4b5b" fontSize="7" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        Booking
      </text>

      {/* Connectors */}
      <path
        d="M78 33 H108"
        stroke="#ff6b00"
        strokeWidth="1.4"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />
      <path
        d="M78 63 H108"
        stroke="#ff6b00"
        strokeWidth="1.4"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />
      <path
        d="M78 93 H108"
        stroke="#ff6b00"
        strokeWidth="1.4"
        strokeDasharray="3 3"
        strokeLinecap="round"
      />
      <path
        d="M108 33 V93"
        stroke="#ff6b00"
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
      <path
        d="M108 63 H128"
        stroke="#ff6b00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Hub */}
      <circle cx="152" cy="63" r="26" fill="#ff6b00" opacity="0.12" />
      <circle cx="152" cy="63" r="18" fill="#fff" stroke="#ff6b00" strokeWidth="2" />
      <circle cx="152" cy="63" r="8" fill="#ff6b00" />
      <text
        x="132"
        y="98"
        fill="#ff6b00"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
        fontWeight="700"
      >
        SeatsConnect
      </text>

      {/* Right output */}
      <path
        d="M170 63 H198"
        stroke="#ff6b00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="198" y="40" width="62" height="46" rx="6" fill="#fff" stroke="#ffd7b8" />
      <rect x="208" y="50" width="42" height="5" rx="1.5" fill="#ff6b00" opacity="0.7" />
      <rect x="208" y="60" width="34" height="4" rx="1" fill="#e8d9c8" />
      <rect x="208" y="68" width="28" height="4" rx="1" fill="#e8d9c8" />
      <text
        x="208"
        y="82"
        fill="#9a8570"
        fontSize="5.5"
        fontFamily="ui-monospace, monospace"
      >
        Custom flow
      </text>
    </svg>
  );
}

function AccessDash() {
  return (
    <div className="overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
      <div className="flex items-center justify-between gap-2 border-b border-orange-100 bg-[#f7f4f0] px-3.5 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#e8b4a0]" />
            <span className="h-2 w-2 rounded-full bg-[#f0d9a8]" />
            <span className="h-2 w-2 rounded-full bg-[#b8d4b8]" />
          </span>
          <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray-text">
            partner-access · connection options
          </span>
        </div>
        <span className="font-mono text-[10px] font-semibold text-brand-orange">
          Flexible
        </span>
      </div>

      <div className="bg-[#faf7f3]/50 p-3.5 sm:p-4">
        <div className="mb-3 grid grid-cols-2 gap-2">
          {accessMethods.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-orange-50 bg-white px-2.5 py-2.5"
            >
              <div className="flex items-center gap-2">
                <item.icon
                  className="h-3.5 w-3.5 text-brand-orange"
                  strokeWidth={1.9}
                />
                <p className="font-tech text-[12px] font-bold text-brand-dark">
                  {item.title}
                </p>
              </div>
              <p className="mt-1 text-[10px] leading-snug text-brand-gray-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-3 py-2.5 text-center">
          <p className="font-tech text-[13px] font-bold text-brand-dark">
            Same infrastructure. Different access paths.
          </p>
          <p className="mt-0.5 text-[11px] text-brand-gray-text">
            Onboarding depends on business model and technical requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
