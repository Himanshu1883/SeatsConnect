"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Users } from "lucide-react";
import {
  joinPartnerTypes,
  joinSupplyTypes,
} from "@/lib/constants/engage";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp } = siteImages;

export function JoinPathChooser() {
  return (
    <>
      <div className="grid items-stretch gap-4 lg:grid-cols-2">
        <PathCard
          href={routes.joinSupplier}
          image={exp.stadium}
          kicker="Supply"
          icon={Package}
          title="I supply tickets or hospitality."
          text="Connect inventory once and make it available through approved professional channels — while keeping control of access and terms."
          types={joinSupplyTypes}
          cta="Connect Your Inventory"
        />
        <PathCard
          href={routes.joinPartner}
          image={exp.travel}
          kicker="Distribution"
          icon={Users}
          title="I distribute to customers."
          text="Access ticket, hospitality and event inventory through one B2B connection — instead of maintaining separate supplier stacks."
          types={joinPartnerTypes}
          cta="Join Our Network"
          highlight
        />
      </div>
      <p className="mt-4 text-center text-[12px] text-brand-gray-text">
        Not sure which path fits?{" "}
        <Link
          href={routes.contact}
          className="font-semibold text-brand-orange hover:text-brand-orange-hover"
        >
          Talk to Our Team
        </Link>
      </p>
    </>
  );
}

function PathCard({
  href,
  image,
  kicker,
  icon: Icon,
  title,
  text,
  types,
  cta,
  highlight = false,
}: {
  href: string;
  image: string;
  kicker: string;
  icon: typeof Package;
  title: string;
  text: string;
  types: readonly string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={
        highlight
          ? "flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-brand-orange/25 bg-[#fff7f0]"
          : "flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] border border-orange-100 bg-white"
      }
    >
      <div className="relative h-28 shrink-0 overflow-hidden sm:h-32">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 28vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/75 to-transparent" />
        <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
          <Icon className="h-3.5 w-3.5" />
          {kicker}
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-tech text-[17px] font-bold leading-snug text-brand-dark">
          {title}
        </h3>
        <p className="mt-2 min-h-[3.25rem] text-[13px] leading-relaxed text-brand-gray-text">
          {text}
        </p>
        <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
          For
        </p>
        <ul className="mt-2 flex flex-1 flex-wrap content-start gap-1.5">
          {types.map((type) => (
            <li
              key={type}
              className="rounded-full border border-orange-100 bg-white px-2.5 py-1 text-[11px] font-medium text-brand-dark"
            >
              {type}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
