"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Users } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import {
  joinPartnerTypes,
  joinSupplyTypes,
} from "@/lib/constants/engage";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp } = siteImages;

export function JoinPaths() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <HomeKicker>Choose your path</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            How Do You Want to{" "}
            <span className="text-brand-orange">Connect?</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            SeatsConnect brings professional event supply and professional
            distribution together through one connected B2B infrastructure.
            Choose the option that best describes your business.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white shadow-[0_16px_40px_rgba(40,30,20,0.06)]">
            <div className="relative h-40 overflow-hidden sm:h-44">
              <Image
                src={exp.stadium}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/70 to-transparent" />
              <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                <Package className="h-3.5 w-3.5" />
                Supply
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-tech text-xl font-bold text-brand-dark sm:text-2xl">
                I Supply Tickets or Hospitality.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-text">
                Connect inventory with professional distribution channels.
              </p>
              <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
                For
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {joinSupplyTypes.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-orange-100 bg-[#faf7f3] px-3 py-1.5 text-[12px] font-medium text-brand-dark"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={routes.joinSupplier}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
              >
                Become a Supply Partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-orange-100 bg-[#fff7f0] shadow-[0_16px_40px_rgba(40,30,20,0.06)]">
            <div className="relative h-40 overflow-hidden sm:h-44">
              <Image
                src={exp.travel}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/70 to-transparent" />
              <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                <Users className="h-3.5 w-3.5" />
                Distribution
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="font-tech text-xl font-bold text-brand-dark sm:text-2xl">
                I Distribute to Customers.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-text">
                Access global event inventory through one B2B connection.
              </p>
              <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
                For
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {joinPartnerTypes.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-orange-100 bg-white px-3 py-1.5 text-[12px] font-medium text-brand-dark"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={routes.joinPartner}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
              >
                Become a Distribution Partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
