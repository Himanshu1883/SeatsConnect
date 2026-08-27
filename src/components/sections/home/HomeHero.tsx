"use client";

import { HomeHeroDark } from "@/components/sections/home/HomeHeroDark";
import { HomeHeroLight } from "@/components/sections/home/HomeHeroLight";
import { useHeroThemePreview } from "@/lib/hooks/useHeroThemePreview";

/**
 * Home hero. Dark is the live theme.
 * Light remains available when launchFlags.heroThemePreview is re-enabled.
 */
export function HomeHero() {
  const { enabled, theme, ready } = useHeroThemePreview();

  if (enabled && !ready) {
    return (
      <section className="hero-band relative h-[calc(100dvh-var(--site-header-height))] bg-[#1a1512]" />
    );
  }

  if (enabled && theme === "light") return <HomeHeroLight />;
  return <HomeHeroDark />;
}
