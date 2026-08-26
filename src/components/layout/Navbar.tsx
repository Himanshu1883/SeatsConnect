"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { mainNavLinks, solutionsNavLinks } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const solutionsActive = pathname.startsWith(routes.solutions);

  return (
    <>
    <nav className="h-16 border-b border-orange-100/80 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4">
        <Link href={routes.home} className="flex items-center shrink-0">
          <Image
            src="/seatsconnect-logo.png"
            alt={siteConfig.name}
            width={918}
            height={156}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-brand-gray-text">
          {mainNavLinks.map((link) =>
            link.href === routes.solutions ? (
              <div key={link.href} className="relative" ref={solutionsRef}>
                <button
                  type="button"
                  onClick={() => setSolutionsOpen((open) => !open)}
                  onMouseEnter={() => setSolutionsOpen(true)}
                  className={cn(
                    "inline-flex items-center gap-1 transition-colors hover:text-brand-orange whitespace-nowrap",
                    solutionsActive && "text-brand-orange font-semibold"
                  )}
                  aria-expanded={solutionsOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      solutionsOpen && "rotate-180"
                    )}
                  />
                </button>
                {solutionsOpen ? (
                  <div
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                  >
                    <div className="w-64 rounded-xl border border-orange-100 bg-white shadow-lg p-2">
                      <Link
                        href={routes.solutions}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm hover:bg-brand-orange-light/70 hover:text-brand-orange",
                          pathname === routes.solutions &&
                            "text-brand-orange font-semibold bg-brand-orange-light/50"
                        )}
                      >
                        All Solutions
                      </Link>
                      {solutionsNavLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm hover:bg-brand-orange-light/70 hover:text-brand-orange",
                            pathname === item.href &&
                              "text-brand-orange font-semibold bg-brand-orange-light/50"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-brand-orange whitespace-nowrap",
                  pathname === link.href && "text-brand-orange font-semibold"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Button href={siteConfig.portalUrl} variant="ghost" external>
            Login
          </Button>
          <Button href={routes.join}>Join SeatsConnect</Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden text-brand-dark p-2 rounded-lg hover:bg-brand-orange-light"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>

      {mobileOpen ? (
        <div
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-var(--site-header-height))] overflow-y-auto border-t border-orange-100 bg-[#faf6f2] px-4 pb-8 pt-4 sm:px-6 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="space-y-1">
            {mainNavLinks.map((link) =>
              link.href === routes.solutions ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen((open) => !open)}
                    className={cn(
                      "w-full flex items-center justify-between py-3 px-2 text-brand-gray-text hover:text-brand-orange rounded-lg",
                      solutionsActive && "text-brand-orange font-semibold"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileSolutionsOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileSolutionsOpen ? (
                    <div className="pl-3 pb-2 space-y-1">
                      <Link
                        href={routes.solutions}
                        className="block py-2 px-2 text-sm text-brand-gray-text hover:text-brand-orange"
                      >
                        All Solutions
                      </Link>
                      {solutionsNavLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block py-2 px-2 text-sm text-brand-gray-text hover:text-brand-orange",
                            pathname === item.href && "text-brand-orange font-semibold"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block py-3 px-2 text-brand-gray-text hover:text-brand-orange rounded-lg",
                    pathname === link.href &&
                      "text-brand-orange font-semibold bg-brand-orange-light/50"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2">
              <Button href={siteConfig.portalUrl} variant="outline" external className="w-full">
                Login
              </Button>
              <Button href={routes.join} className="w-full">
                Join SeatsConnect
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
