"use client";

import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { FormField } from "@/components/ui/FormFields";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export function LoginForm({
  embedded = false,
  className,
}: {
  embedded?: boolean;
  className?: string;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = siteConfig.portalUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-2",
        !embedded &&
          "mx-auto max-w-md rounded-2xl border border-orange-100 bg-white p-5 sm:p-6 glow-border",
        className
      )}
    >
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        icon={Mail}
        placeholder="name@company.com"
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        required
        icon={Lock}
        placeholder="••••••••"
      />
      <SubmitButton arrow>Login</SubmitButton>
      <div className="flex flex-col justify-between gap-1.5 text-[12px] sm:flex-row">
        <a
          href={siteConfig.portalUrl}
          className="font-medium text-brand-orange hover:underline"
        >
          Forgot Password?
        </a>
        <Link
          href={routes.support}
          className="text-brand-gray-text hover:text-brand-orange"
        >
          Need Support?
        </Link>
      </div>
    </form>
  );
}
