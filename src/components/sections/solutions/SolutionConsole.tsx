import { cn } from "@/lib/utils";

/** Cream product console chrome for Solutions pages. */
export function SolutionConsole({
  title,
  live = true,
  className,
  children,
}: {
  title: string;
  live?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-[0_18px_44px_rgba(40,30,20,0.1)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-orange-100 bg-[#fbf8f4] px-3.5 py-2.5">
        <span className="flex items-center gap-1" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
        </span>
        <p className="ml-1 truncate font-mono text-[10px] font-semibold text-brand-gray-text">
          {title}
        </p>
        {live ? (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-emerald-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 live-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        ) : null}
      </div>
      <div className="p-3.5 sm:p-4">{children}</div>
    </div>
  );
}

export function ConsolePanel({
  label,
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-orange-50 bg-[#faf7f3] p-3",
        className
      )}
    >
      {label ? (
        <p className="mb-2 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-brand-gray-text">
          {label}
        </p>
      ) : null}
      {children}
    </div>
  );
}
