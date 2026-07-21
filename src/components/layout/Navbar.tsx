"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 transition-all duration-300 overflow-visible">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center shrink-0 overflow-visible py-0.5">
          <Image
            src="/seatsconnect-logo-nav.png"
            alt="SeatsConnect"
            width={614}
            height={137}
            priority
            className="h-10 sm:h-11 w-auto block object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-brand-orange",
                link.highlight && "font-tech text-brand-orange font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-bold bg-brand-orange hover:bg-brand-orange-hover text-white transition-all duration-300 shadow-md shadow-brand-orange/25 hover:shadow-brand-orange/40 flex items-center gap-2 font-tech"
          >
            Partner With Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden text-brand-dark focus:outline-none p-2 rounded-lg hover:bg-orange-50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="md:hidden mt-4 pt-4 border-t border-orange-100 space-y-1 pb-2 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block py-3 min-h-11 text-gray-600 hover:text-brand-orange",
                link.highlight && "text-brand-orange font-bold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block w-full px-5 py-3 rounded-lg text-sm font-bold bg-brand-orange hover:bg-brand-orange-hover text-white"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
