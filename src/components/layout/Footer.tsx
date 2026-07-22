import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Linkedin,
  Mail,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  footerLegalLinks,
  footerPlatformLinks,
  navLinks,
} from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const footerNavLinks = [
  ...navLinks,
  { label: "Partner With Us", href: "#contact", highlight: true },
];

const trustBadges = [
  { icon: Globe, label: "Global Distribution" },
  { icon: Zap, label: "API-First Platform" },
  { icon: ShieldCheck, label: "Enterprise SLA" },
] as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-tech text-brand-dark font-bold tracking-wide text-xs uppercase">
      {children}
    </h4>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-orange-100 text-brand-gray-text text-sm overflow-x-hidden">
      <div className="absolute inset-0 hero-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange-muted to-brand-orange" />

      <div className="relative px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-x-8 lg:gap-y-10">
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="#" className="inline-block">
              <Image
                src="/seatsconnect-logo.png"
                alt={siteConfig.name}
                width={918}
                height={156}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-brand-gray-text leading-relaxed max-w-sm">
              Connecting premium global ticket supply with modern, international
              live entertainment demand through our robust B2B API distribution
              engine.
            </p>
            <div className="flex flex-wrap gap-2">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-tech font-semibold text-brand-dark bg-brand-orange-light px-3 py-1.5 rounded-full border border-orange-100"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  {label}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
              <span className="text-xs bg-brand-orange-light px-2.5 py-1 rounded text-brand-orange border border-orange-100 w-fit">
                Parent: {siteConfig.parentBrand}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="min-h-11 min-w-11 flex items-center justify-center p-2 rounded-lg border border-orange-100 text-brand-gray-text hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange-light transition-colors"
                  aria-label="Email SeatsConnect"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="min-h-11 min-w-11 flex items-center justify-center p-2 rounded-lg border border-orange-100 text-brand-gray-text hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange-light transition-colors"
                  aria-label="SeatsConnect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-2.5 text-xs">
              {footerNavLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 hover:text-brand-orange transition-colors",
                      link.highlight &&
                        "font-tech font-semibold text-brand-orange"
                    )}
                  >
                    {link.label}
                    {link.highlight ? (
                      <ArrowUpRight className="w-3 h-3 shrink-0" />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <FooterHeading>Platform Infrastructure</FooterHeading>
            <ul className="space-y-2.5 text-xs">
              {footerPlatformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <FooterHeading>API Documentation</FooterHeading>
            <div className="bg-gray-50 p-3.5 rounded-lg border border-orange-100 space-y-2 text-[11px] font-mono">
              <span className="text-green-600">GET</span>{" "}
              <span className="text-brand-dark">/v1/live/inventory</span>
              <span className="text-brand-orange block">
                Authorization: Bearer sc_live_***
              </span>
            </div>
            <p className="text-[11px] text-brand-gray-text leading-relaxed">
              REST API endpoints built for instantaneous inventory query and
              robust whitelabel checkout. Full developer docs available on
              request for qualified B2B partners.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <FooterHeading>Office Locations</FooterHeading>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li>
                <span className="text-brand-dark font-medium block">
                  HQ Operations
                </span>
                Dubai Multi Commodities Centre (DMCC), UAE
              </li>
              <li>
                <span className="text-brand-dark font-medium block">
                  Engineering Hub
                </span>
                New Delhi, India
              </li>
              <li>
                <span className="text-brand-dark font-medium block">
                  B2B Sales Desk
                </span>
                London & Singapore offices
              </li>
              <li className="pt-1">
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-orange font-tech font-semibold hover:underline"
                >
                  {siteConfig.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full border-t border-orange-100 bg-white/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs">
          <p className="text-center sm:text-left">
            © 2026 {siteConfig.name}.com. All international corporate
            distribution rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-brand-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
