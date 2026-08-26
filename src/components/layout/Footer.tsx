import Image from "next/image";
import Link from "next/link";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerPartnerLinks,
  footerPlatformLinks,
  footerSolutionsLinks,
} from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-tech text-brand-dark font-bold tracking-wide text-xs uppercase mb-4">
      {children}
    </h4>
  );
}

function FooterLinkList({
  links,
}: {
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <ul className="space-y-2.5 text-xs">
      {links.map((link) => (
        <li key={link.label}>
          {"external" in link && link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="hover:text-brand-orange transition-colors">
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="footer-band w-full bg-white text-brand-gray-text text-sm">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-orange-light/90 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/35 to-transparent" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
            <Link href={routes.home}>
              <Image
                src="/seatsconnect-logo.png"
                alt={siteConfig.name}
                width={918}
                height={156}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <p className="text-xs text-brand-dark font-medium">
              {siteConfig.trademark} — A {siteConfig.parentBrand} Company
            </p>
          </div>

          <div>
            <FooterHeading>Platform</FooterHeading>
            <FooterLinkList links={footerPlatformLinks} />
          </div>

          <div>
            <FooterHeading>Solutions</FooterHeading>
            <FooterLinkList links={footerSolutionsLinks} />
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <FooterLinkList links={footerCompanyLinks} />
          </div>

          <div>
            <FooterHeading>Partner Support</FooterHeading>
            <FooterLinkList links={footerPartnerLinks} />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-orange-100 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2026 {siteConfig.trademark}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
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
