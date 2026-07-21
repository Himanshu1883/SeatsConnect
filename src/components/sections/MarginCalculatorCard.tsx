"use client";

import Link from "next/link";
import { Info, Sliders } from "lucide-react";
import { useState } from "react";
import { calculateVIPMargins, formatCurrency } from "@/lib/utils";

export function MarginCalculatorCard() {
  const [baseTravel, setBaseTravel] = useState(1200);
  const [premiumTicket, setPremiumTicket] = useState(600);

  const results = calculateVIPMargins(baseTravel, premiumTicket);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-orange-100 p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6 sm:space-y-8">
          <h3 className="font-tech text-xl sm:text-2xl font-bold text-brand-dark flex items-center gap-2">
            <Sliders className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange shrink-0" />
            Pricing Inputs
          </h3>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm font-medium">
              <span className="text-brand-gray-text">
                Base Travel Booking (Flight + Hotel)
              </span>
              <span className="text-brand-dark font-tech font-bold shrink-0">
                {formatCurrency(baseTravel)}
              </span>
            </div>
            <input
              type="range"
              min={200}
              max={5000}
              step={100}
              value={baseTravel}
              onChange={(e) => setBaseTravel(Number(e.target.value))}
              onInput={(e) => setBaseTravel(Number(e.currentTarget.value))}
              className="w-full h-3 sm:h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-brand-orange touch-none"
            />
            <span className="text-[10px] text-brand-gray-text block">
              Estimated B2B travel margin:{" "}
              <strong>
                8% ({formatCurrency(results.travelMarginAmount)})
              </strong>
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm font-medium">
              <span className="text-brand-gray-text">
                Premium API Event Ticket (F1, FIFA, Concerts)
              </span>
              <span className="text-brand-dark font-tech font-bold shrink-0">
                {formatCurrency(premiumTicket)}
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={3000}
              step={50}
              value={premiumTicket}
              onChange={(e) => setPremiumTicket(Number(e.target.value))}
              onInput={(e) => setPremiumTicket(Number(e.currentTarget.value))}
              className="w-full h-3 sm:h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-brand-orange touch-none"
            />
            <span className="text-[10px] text-brand-gray-text block">
              Estimated standalone ticket markup margin:{" "}
              <strong>
                12% ({formatCurrency(results.ticketMarginAmount)})
              </strong>
            </span>
          </div>

          <div className="p-4 rounded-xl bg-brand-orange-light border border-orange-100 text-xs text-brand-gray-text leading-relaxed">
            <Info className="w-4 h-4 text-brand-orange inline mr-1" />
            <strong>High-Margin Packaging Power:</strong> By bundling these
            two components directly into one custom &quot;High-Yield VIP
            Package,&quot; your corporate hospitality program gains premium
            leverage to price with an added{" "}
            <strong>25% to 35% margin premium</strong> because of exclusive
            sourcing.
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-orange-100 flex flex-col justify-between shadow-md">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gray-text font-tech">
              Your High-Yield Target VIP Package
            </span>
            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="text-brand-orange font-tech text-3xl sm:text-4xl lg:text-5xl font-extrabold break-all sm:break-normal">
                {formatCurrency(results.totalVIPValue)}
              </span>
              <span className="text-xs text-brand-gray-text">
                Est. Market Retail Value
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <div className="flex justify-between text-xs text-brand-gray-text mb-1">
                  <span>Traditional Separate Bookings Profit</span>
                  <span className="font-mono text-brand-dark">
                    {formatCurrency(results.tradProfit)} ({results.tradMarginPercent}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-400 rounded-full transition-all duration-300"
                    style={{ width: `${results.tradBarWidth}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-brand-orange mb-1">
                  <span>SeatsConnect VIP Package Profit</span>
                  <span className="font-tech font-bold text-brand-orange">
                    {formatCurrency(results.seatsConnectProfit)} ({results.vipMarginPercent}%)
                  </span>
                </div>
                <div className="w-full h-3 bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-orange rounded-full transition-all duration-300"
                    style={{ width: `${results.vipBarWidth}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-orange-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase text-brand-gray-text block">
                Margin Increase Factor
              </span>
              <span className="font-tech text-xl sm:text-2xl font-bold text-brand-orange">
                {results.profitMultiplier}x Profit Multiplier
              </span>
            </div>
            <Link
              href="#contact"
              className="w-full sm:w-auto text-center px-5 py-3.5 min-h-11 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-tech font-extrabold text-sm transition-all shadow-md shadow-brand-orange/25"
            >
              Settle Sourcing API
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
