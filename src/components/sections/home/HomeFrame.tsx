import { SurfacePattern, type SurfacePatternName } from "@/components/ui/SectionBackground";
import { cn } from "@/lib/utils";

export function HomeKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 text-brand-orange">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 rounded-full bg-brand-orange live-ping" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-brand-orange" />
      </span>
      {children}
    </span>
  );
}

export type HomeFrameVariant = SurfacePatternName;

type HomeFrameProps = {
  id?: string;
  tinted?: boolean;
  variant?: HomeFrameVariant;
  children: React.ReactNode;
  className?: string;
};

export function HomeFrame({
  id,
  tinted = false,
  variant = "grid",
  children,
  className,
}: HomeFrameProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-band px-4 sm:px-6 lg:px-8 py-20 lg:py-28",
        tinted ? "bg-brand-orange-light" : "bg-white",
        className
      )}
    >
      <SurfacePattern variant={variant} wash={tinted} />
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
