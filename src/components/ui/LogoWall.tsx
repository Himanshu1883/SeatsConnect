import { launchFlags } from "@/lib/constants/features";
import { partnerLogos } from "@/lib/constants/logos";
import { SurfacePattern } from "@/components/ui/SectionBackground";

type LogoWallProps = {
  title?: string;
  description?: string;
};

export function LogoWall({
  title = "Selected Partners & Supply Relationships.",
  description = "Logos are shown only where SeatsConnect has the commercial relationship and permission to display them.",
}: LogoWallProps) {
  if (!launchFlags.partnerLogos || partnerLogos.length === 0) {
    return null;
  }

  return (
    <section className="section-band px-4 sm:px-6 lg:px-8 py-14 sm:py-16 bg-white">
      <SurfacePattern variant="plain" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="font-tech text-xl sm:text-2xl font-bold text-brand-dark text-center mb-2">
          {title}
        </h2>
        <p className="text-sm text-brand-gray-text text-center max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partnerLogos.map((logo) => {
            const image = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            );

            return (
              <div
                key={logo.name}
                className="flex items-center justify-center rounded-xl border border-orange-100 bg-white px-4 py-6"
              >
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    {image}
                  </a>
                ) : (
                  image
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
