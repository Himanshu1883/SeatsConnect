"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { launchFlags } from "@/lib/constants/features";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

const notes = [
  {
    title: "Authentication",
    text: "Access is controlled for approved suppliers and partners.",
    icon: Lock,
  },
  {
    title: "Endpoints & schemas",
    text: "Detailed contracts live in the developer documentation.",
    icon: Code2,
  },
  {
    title: "Sandbox guidance",
    text: "Our integration team helps map the right connection path.",
    icon: ShieldCheck,
  },
];

export function ApiDocs() {
  return (
    <HomeFrame
      id="docs"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-white shadow-[0_16px_44px_rgba(40,30,20,0.06)]">
            <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="p-6 sm:p-8 lg:p-10">
                <HomeKicker>Developer Resources</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Technical{" "}
                  <span className="text-brand-orange">Documentation.</span>
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  Detailed API documentation, authentication, endpoints, schemas
                  and sandbox information sit in a separate developer portal.
                  Request access and our integration team will guide the next
                  steps.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={routes.developers}
                    data-form-modal-bypass="true"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
                  >
                    Go to Developers
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`${routes.developers}#access`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-2.5 font-tech text-sm font-semibold text-brand-dark transition hover:border-brand-orange/40 hover:bg-[#fff7f0]"
                  >
                    Request Developer Access
                  </Link>
                  {launchFlags.developerPortal ? (
                    <Link
                      href={siteConfig.developersUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-2.5 font-tech text-sm font-semibold text-brand-dark transition hover:border-brand-orange/40 hover:bg-[#fff7f0]"
                    >
                      Open Portal
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="border-t border-orange-100/90 bg-[#faf7f3] p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
                    <BookOpen className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <p className="font-tech text-sm font-bold text-brand-dark">
                    What sits in docs
                  </p>
                </div>
                <ul className="space-y-3">
                  {notes.map((note) => (
                    <li
                      key={note.title}
                      className="rounded-2xl border border-orange-100/90 bg-white px-4 py-3.5 shadow-[0_6px_16px_rgba(40,30,20,0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <note.icon
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                          strokeWidth={1.9}
                        />
                        <div>
                          <p className="font-tech text-[14px] font-bold text-brand-dark">
                            {note.title}
                          </p>
                          <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                            {note.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
