"use client";

import {
  ArrowRight,
  Handshake,
  Layers,
  ShieldCheck,
  User,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp } = siteImages;

const points = [
  "Create customer-facing quotations under your brand",
  "Maintain the relationship your business has built",
  "Use SeatsConnect as infrastructure — not a consumer marketplace",
];

export function PartnersRelationship() {
  return (
    <HomeFrame
      id="relationship"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>Your Brand</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Your Customer Relationship{" "}
                  <span className="text-brand-orange">Remains Yours.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect is designed to support professional distribution
                  partners rather than compete with them for their customers.
                  Where applicable, partners can create customer-facing
                  quotations and experiences under their own brand.
                </p>
              </div>

              <ul className="space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-orange-100/90 bg-white/80 px-3.5 py-2.5"
                  >
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      strokeWidth={2}
                    />
                    <span className="text-[13px] font-medium text-brand-dark sm:text-[14px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl border border-orange-100/90 shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
                <CardMedia
                  src={exp.corporate}
                  alt="Partner serving corporate clients"
                  heightClass="h-40 sm:h-44"
                  className="rounded-none"
                />
              </div>
              <RelationshipDiagram />
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-5 py-5 text-center sm:flex-row sm:gap-4 sm:px-6 sm:py-4 sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.28)]">
              <Handshake className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <p className="font-tech text-[15px] font-bold leading-snug text-brand-dark sm:text-base">
              SeatsConnect provides the infrastructure.{" "}
              <span className="text-brand-gray-text">
                You manage the customer relationship.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function RelationshipDiagram() {
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
            partner · customer journey
          </span>
        </div>
      </div>

      <div className="space-y-3 bg-[#faf7f3]/50 p-4 sm:p-5">
        <div className="flex items-center gap-3 rounded-xl border border-orange-100/90 bg-white px-3.5 py-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
            <User className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <p className="font-tech text-[14px] font-bold text-brand-dark">
              Your customer
            </p>
            <p className="text-[12px] text-brand-gray-text">
              Sees your brand, your service, your relationship
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className="h-4 w-4 rotate-90 text-brand-orange/60" />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-brand-orange/25 bg-brand-orange/5 px-3.5 py-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
            <Handshake className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <p className="font-tech text-[14px] font-bold text-brand-dark">
              Your business
            </p>
            <p className="text-[12px] text-brand-gray-text">
              Quote, sell and manage the customer journey
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className="h-4 w-4 rotate-90 text-brand-orange/60" />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-orange-100/90 bg-white px-3.5 py-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
            <Layers className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <p className="font-tech text-[14px] font-bold text-brand-dark">
              SeatsConnect infrastructure
            </p>
            <p className="text-[12px] text-brand-gray-text">
              Supply, booking and fulfilment underneath
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
