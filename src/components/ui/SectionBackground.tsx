import Image from "next/image";
import { cn } from "@/lib/utils";

export type SectionTint = "white" | "orange" | "soft" | "cream";
export type SurfacePatternName = "grid" | "grid-lg" | "plain";

const tintClasses: Record<SectionTint, string> = {
  white: "bg-white/72",
  orange: "bg-brand-orange-light/78",
  soft: "bg-white/80",
  cream: "bg-gradient-to-br from-white/82 via-brand-orange-light/70 to-white/78",
};

const tintPattern: Record<SectionTint, SurfacePatternName> = {
  white: "plain",
  soft: "plain",
  orange: "grid",
  cream: "grid",
};

const patternClass: Record<Exclude<SurfacePatternName, "plain">, string> = {
  grid: "surface-grid",
  "grid-lg": "surface-grid-lg",
};

export function SurfacePattern({
  variant,
  wash = false,
}: {
  variant: SurfacePatternName;
  wash?: boolean;
}) {
  if (variant === "plain" && !wash) return null;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {variant !== "plain" ? (
        <div className={cn("absolute inset-0", patternClass[variant])} />
      ) : null}
      {wash ? <div className="absolute inset-0 section-wash" /> : null}
    </div>
  );
}

type SectionBackgroundProps = {
  id?: string;
  image: string;
  alt: string;
  tint?: SectionTint;
  className?: string;
  contentClassName?: string;
  priority?: boolean;
  children: React.ReactNode;
};

export function SectionBackground({
  id,
  image,
  alt,
  tint = "white",
  className,
  contentClassName,
  priority = false,
  children,
}: SectionBackgroundProps) {
  return (
    <section id={id} className={cn("section-band", className)}>
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="relative size-full">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className={cn("absolute inset-0", tintClasses[tint])} />
        <SurfacePattern variant={tintPattern[tint]} />
      </div>
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </section>
  );
}

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
  height?: string;
};

export function ImagePanel({
  src,
  alt,
  className,
  imageClassName,
  overlayClassName,
  children,
  height = "h-[420px]",
}: ImagePanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-orange-100 shadow-xl",
        height,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", imageClassName)}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {overlayClassName ? (
        <div className={cn("absolute inset-0", overlayClassName)} />
      ) : null}
      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
}
