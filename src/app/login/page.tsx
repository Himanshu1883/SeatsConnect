"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import { heroFeatures, heroIcons } from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Login"
        icon={heroIcons.login}
        image={siteImages.pages.login}
        title="Welcome"
        titleAccent="Back."
        description="Access your SeatsConnect account for live inventory, quotations, bookings and order management."
        primaryCta={{
          label: "Go to Platform",
          href: siteConfig.portalUrl,
          external: true,
        }}
        secondaryCta={{ label: "Need Support?", href: routes.support }}
        features={[...heroFeatures.partner]}
      />
      <PageSection>
        <LoginForm />
        <p className="text-center text-xs text-brand-gray-text mt-6">
          Existing partners are taken to the SeatsConnect platform at{" "}
          <a href={siteConfig.portalUrl} className="text-brand-orange hover:underline">
            app.seatsconnect.com
          </a>
          .
        </p>
      </PageSection>
    </>
  );
}
