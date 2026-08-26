import Image from "next/image";
import { cn } from "@/lib/utils";

type CardMediaProps = {
  src: string;
  alt: string;
  className?: string;
  /** Fixed height for card tops; default ~9rem */
  heightClass?: string;
  priority?: boolean;
};

/** Photo strip for cards / panels — not for consoles or flow diagrams. */
export function CardMedia({
  src,
  alt,
  className,
  heightClass = "h-36 sm:h-40",
  priority = false,
}: CardMediaProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-brand-orange-light",
        heightClass,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        priority={priority}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent"
      />
    </div>
  );
}

type ExperienceStripProps = {
  items: readonly { src: string; label: string }[];
  className?: string;
};

/** Compact horizontal strip of experience photos (CTA / trust). */
export function ExperienceStrip({ items, className }: ExperienceStripProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3",
        className
      )}
    >
      {items.map((item) => (
        <figure
          key={item.label}
          className="group relative overflow-hidden rounded-xl border border-orange-100 bg-white"
        >
          <CardMedia
            src={item.src}
            alt={item.label}
            heightClass="h-20 sm:h-24"
          />
          <figcaption className="absolute inset-x-0 bottom-0 px-2.5 py-1.5 font-tech text-[10px] font-semibold uppercase tracking-wider text-white">
            {item.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
