"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import {
  eventFilters,
  events,
  type EventCategory,
} from "@/lib/constants/events";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

export function EventsCatalogSection() {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") return events;
    return events.filter((event) => event.category === activeFilter);
  }, [activeFilter]);

  return (
    <SectionBackground
      id="coverage"
      image={siteImages.events.section}
      alt="Live events and concerts"
      tint="white"
      contentClassName="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
          <div>
            <span className="text-brand-orange font-tech text-xs sm:text-sm uppercase tracking-widest font-semibold block mb-2">
              Live Catalog
            </span>
            <h2 className="font-tech text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
              One Platform. <br />
              Thousands of Mega-Events
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full md:w-auto mt-2 md:mt-0 bg-white/90 backdrop-blur-sm p-1.5 rounded-xl border border-orange-100 shadow-sm">
            {eventFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-3 sm:px-4 py-2.5 min-h-10 text-[11px] sm:text-xs font-bold font-tech rounded-lg transition-all",
                  activeFilter === filter.id
                    ? "bg-brand-orange text-white"
                    : "text-brand-gray-text hover:text-brand-orange"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl border border-orange-100 overflow-hidden transition-all duration-300 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-orange/10 flex flex-col"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-orange/10" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-[10px] font-bold font-tech tracking-wider uppercase bg-brand-orange text-white rounded">
                    {event.badge}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <h4 className="font-tech text-lg sm:text-xl font-bold group-hover:text-brand-orange transition-colors text-brand-dark">
                    {event.title}
                  </h4>
                  <span className="text-xs text-brand-gray-text shrink-0 ml-2">
                    {event.period}
                  </span>
                </div>
                <p className="text-xs text-brand-gray-text leading-relaxed">
                  {event.description}
                </p>
              </div>
              <div className="p-4 sm:p-6 pt-0 border-t border-orange-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs">
                <span className="text-brand-gray-text flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {event.location}
                </span>
                <span className="font-tech text-brand-orange font-semibold">
                  {event.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}
