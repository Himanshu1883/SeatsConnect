"use client";

import { Moon, Sun } from "lucide-react";
import { useHeroThemePreview } from "@/lib/hooks/useHeroThemePreview";
import { cn } from "@/lib/utils";

/** Temporary floating control — remove after hero theme approval. */
export function HeroThemePreviewToggle() {
  const { enabled, theme, choose } = useHeroThemePreview();
  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[80] flex justify-end sm:right-6">
      <div
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-orange-100/90 bg-white/95 p-1 shadow-[0_16px_40px_rgba(40,30,20,0.18)] backdrop-blur-md"
        role="group"
        aria-label="Hero theme preview"
      >
        <span className="hidden px-3 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text sm:inline">
          Hero preview
        </span>
        <ThemeChip
          active={theme === "dark"}
          onClick={() => choose("dark")}
          icon={Moon}
          label="Dark"
        />
        <ThemeChip
          active={theme === "light"}
          onClick={() => choose("light")}
          icon={Sun}
          label="Light"
        />
      </div>
    </div>
  );
}

function ThemeChip({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Moon;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      title={`Hero preview: ${label}`}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1.5 font-tech text-[11px] font-semibold transition",
        active
          ? "bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]"
          : "text-brand-dark hover:bg-[#faf7f3]"
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {label}
    </button>
  );
}
