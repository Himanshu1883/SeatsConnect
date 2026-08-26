"use client";

import { useState } from "react";
import Link from "next/link";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = siteConfig.portalUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-5 rounded-2xl border border-orange-100 bg-white p-6 sm:p-8 glow-border"
    >
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-lg border border-orange-100 bg-white px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="password" className="block text-sm font-medium text-brand-dark">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-lg border border-orange-100 bg-white px-3.5 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50"
        />
      </div>
      <SubmitButton className="w-full">Login</SubmitButton>
      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm">
        <a
          href={siteConfig.portalUrl}
          className="text-brand-orange font-medium hover:underline"
        >
          Forgot Password?
        </a>
        <Link href={routes.support} className="text-brand-gray-text hover:text-brand-orange">
          Need Support?
        </Link>
      </div>
    </form>
  );
}
