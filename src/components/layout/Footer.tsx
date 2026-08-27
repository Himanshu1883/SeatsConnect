"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Code2,
  Globe2,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerPartnerLinks,
  footerPlatformLinks,
  footerSolutionsLinks,
} from "@/lib/constants/navigation";
import { launchFlags } from "@/lib/constants/features";
import { siteConfig } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const trustItems: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Secure by design",
    text: "Enterprise-grade security and data protection.",
    icon: Lock,
  },
  {
    title: "Global infrastructure",
    text: "Built to scale across markets and regions.",
    icon: Globe2,
  },
  {
    title: "Developer first",
    text: "Powerful APIs and tools for modern integrations.",
    icon: Code2,
  },
  {
    title: "Trusted network",
    text: "Working with approved partners worldwide.",
    icon: ShieldCheck,
  },
];

const linkColumns = [
  { title: "Platform", links: footerPlatformLinks },
  { title: "Solutions", links: footerSolutionsLinks },
  { title: "Company", links: footerCompanyLinks },
  {
    title: "Partner Support",
    links: footerPartnerLinks.filter(
      (link) => launchFlags.developerPortal || link.label !== "Developers"
    ),
  },
] as const;

function isFooterLinkActive(
  href: string,
  pathname: string,
  hash: string
): boolean {
  const [path, fragment] = href.split("#");
  const base = path || "/";

  if (fragment) {
    return pathname === base && hash === `#${fragment}`;
  }

  if (base === routes.join) {
    return pathname === routes.join || pathname.startsWith(`${routes.join}/`);
  }

  return pathname === base;
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-3 flex items-center gap-1.5 font-tech text-[10px] font-bold uppercase tracking-[0.16em] text-brand-dark">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
      {children}
    </h4>
  );
}

function FooterLinkList({
  links,
  pathname,
  hash,
}: {
  links: readonly { label: string; href: string; external?: boolean }[];
  pathname: string;
  hash: string;
}) {
  return (
    <ul className="space-y-2 text-[13px] leading-snug">
      {links.map((link) => {
        if ("external" in link && link.external) {
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray-text transition-colors hover:text-brand-orange"
              >
                {link.label}
              </a>
            </li>
          );
        }

        const active = isFooterLinkActive(link.href, pathname, hash);

        return (
          <li key={link.label}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-brand-orange",
                active
                  ? "font-semibold text-brand-orange"
                  : "text-brand-gray-text"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Footer() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  return (
    <footer className="footer-band relative w-full bg-[#faf8f5] text-brand-gray-text">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
          {/* Brand */}
          <div className="min-w-0">
            <Link href={routes.home} className="inline-block">
              <Image
                src="/seatsconnect-logo.png"
                alt={siteConfig.name}
                width={918}
                height={156}
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>
            <p className="mt-1.5 text-[12px] font-medium text-brand-orange">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-3.5 h-0.5 w-9 rounded-full bg-brand-orange" />
            <p className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-brand-dark">
              <Building2
                className="h-3 w-3 text-brand-orange"
                strokeWidth={1.8}
              />
              {siteConfig.trademark} — A {siteConfig.parentBrand} Company
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-x-6">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <FooterHeading>{column.title}</FooterHeading>
                <FooterLinkList
                  links={column.links}
                  pathname={pathname}
                  hash={hash}
                />
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_8px_24px_rgba(40,30,20,0.05)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <p className="mt-3 font-tech text-[15px] font-bold leading-snug text-brand-dark">
              Stay connected with{" "}
              <span className="text-brand-orange">{siteConfig.name}</span>
            </p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-brand-gray-text">
              Product updates, integrations and industry insights.
            </p>
            <form
              action={routes.contact}
              method="get"
              className="mt-3.5 flex items-center gap-1.5 rounded-full border border-orange-100 bg-[#f7f3ef] p-1"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[13px] text-brand-dark outline-none placeholder:text-brand-gray-text/70"
              />
              <button
                type="submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white transition-colors hover:bg-brand-orange-hover"
                aria-label="Contact us"
              >
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-8 grid grid-cols-1 gap-3 border-y border-orange-100/80 py-5 sm:grid-cols-2 lg:mt-9 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-orange-100/80 lg:py-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-2.5 lg:px-4 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
                <item.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[13px] font-bold text-brand-dark">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-brand-gray-text">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[12px] text-brand-gray-text">
            © 2026 {siteConfig.trademark}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {footerLegalLinks.map((link) => {
              const active = isFooterLinkActive(link.href, pathname, hash);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-[12px] transition-colors hover:text-brand-orange",
                    active
                      ? "font-semibold text-brand-orange"
                      : "text-brand-gray-text"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
