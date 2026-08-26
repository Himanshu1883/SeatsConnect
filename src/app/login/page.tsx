"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteConfig } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";

export default function LoginPage() {
  return (
    <>
      <PageHero
        image={siteImages.pages.login}
        title="Welcome Back."
        description="Access your SeatsConnect account."
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
