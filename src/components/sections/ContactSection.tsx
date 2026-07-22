"use client";

import Image from "next/image";
import { CheckCheck, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { siteImages } from "@/lib/constants/images";
import { siteConfig } from "@/lib/constants/site";

const volumeOptions = [
  { value: "small", label: "< 500 tickets" },
  { value: "mid", label: "500 - 2,500" },
  { value: "high", label: "2,500 - 10k" },
  { value: "ent", label: "10k+ Tickets" },
] as const;

const focusOptions = [
  { value: "travel", label: "Travel Agency Distribution" },
  { value: "concierge", label: "Corporate & Premium Hospitality" },
  { value: "venue", label: "Venue Operations & Ticketing" },
  { value: "supplier", label: "Offline Ticketing Supplier Partner" },
] as const;

const inputClassName =
  "w-full bg-white border border-orange-100 focus:border-brand-orange rounded-xl px-4 py-3.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [referenceId] = useState(
    () => `SC-2026-T-${Math.floor(Math.random() * 90000) + 10000}`
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <SectionBackground
      id="contact"
      image={siteImages.contact}
      alt="Concert venue atmosphere"
      tint="orange"
      className="border-t border-orange-100"
      contentClassName="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Image
            src="/seatsconnect-logo.png"
            alt={siteConfig.name}
            width={918}
            height={156}
            className="h-12 sm:h-14 mx-auto mb-5 sm:mb-6 object-contain w-auto max-w-[85vw]"
          />
          <span className="text-brand-orange font-tech text-xs sm:text-sm uppercase tracking-widest font-semibold block mb-2">
            B2B Integration
          </span>
          <h2 className="font-tech text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Let&apos;s Scale Together.
          </h2>
          <p className="text-brand-gray-text text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 px-2">
            Join the industry&apos;s premier high-end supply line today. Connect
            with our enterprise integration engineers.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-orange-100 p-5 sm:p-6 md:p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 sm:py-12 px-2 sm:px-4 space-y-5 sm:space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-orange-light border border-brand-orange flex items-center justify-center text-brand-orange mx-auto animate-bounce">
                <CheckCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-tech text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
                  Integration Request Received
                </h3>
                <p className="text-brand-gray-text max-w-md mx-auto leading-relaxed text-sm">
                  Thank you for reaching out. A Senior Solutions Integration
                  Specialist has been assigned to your profile. We will email
                  your temporary API Developer key credentials to your corporate
                  address shortly.
                </p>
              </div>
              <div className="text-xs text-brand-orange font-mono bg-brand-orange-light py-2 px-4 rounded-full inline-block border border-orange-100">
                Ticket assigned reference: {referenceId}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-text font-tech mb-2 font-medium">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Chen"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-text font-tech mb-2 font-medium">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. m.chen@hospitality-group.com"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-text font-tech mb-2 font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vertex Premium Concierge"
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-text font-tech mb-2 font-medium">
                    Your Primary Focus
                  </label>
                  <select className={`${inputClassName} cursor-pointer`}>
                    {focusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-brand-gray-text font-tech mb-2 font-medium">
                  Estimated Annual Ticket Volume Range
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {volumeOptions.map((option, index) => (
                    <label
                      key={option.value}
                      className="p-3 min-h-11 bg-white border border-orange-100 hover:border-brand-orange/50 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs transition-all"
                    >
                      <input
                        type="radio"
                        name="volume"
                        value={option.value}
                        defaultChecked={index === 0}
                        className="accent-brand-orange"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-brand-gray-text font-tech mb-2 font-medium">
                  Key Integration Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your technical stack, CRM, or any specific high-value events you are targetting immediately..."
                  className={inputClassName}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 min-h-12 rounded-xl font-bold bg-brand-orange hover:bg-brand-orange-hover text-white transition-all shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2 text-sm sm:text-base font-tech"
              >
                Submit Integration Request
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionBackground>
  );
}
