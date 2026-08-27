"use client";

import { useEffect, useState } from "react";
import { launchFlags } from "@/lib/constants/features";

export type HeroTheme = "dark" | "light";

const STORAGE_KEY = "sc-hero-theme-preview";
const EVENT_NAME = "sc-hero-theme-preview";

/**
 * Temporary shared state for home-hero Dark/Light design review.
 * Remove with launchFlags.heroThemePreview after approval.
 */
export function useHeroThemePreview() {
  const enabled = launchFlags.heroThemePreview;
  const [theme, setTheme] = useState<HeroTheme>("dark");
  const [ready, setReady] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setReady(true);
      return;
    }

    try {
      const saved = window.sessionStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {
      // ignore
    }
    setReady(true);

    function onTheme(event: Event) {
      const detail = (event as CustomEvent<HeroTheme>).detail;
      if (detail === "light" || detail === "dark") setTheme(detail);
    }

    window.addEventListener(EVENT_NAME, onTheme);
    return () => window.removeEventListener(EVENT_NAME, onTheme);
  }, [enabled]);

  function choose(next: HeroTheme) {
    setTheme(next);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: next }));
  }

  return { enabled, theme, ready, choose };
}
