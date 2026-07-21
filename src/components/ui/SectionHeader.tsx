type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 sm:mb-14 md:mb-16 ${alignment} ${className}`}>
      <span className="text-brand-orange font-tech text-xs sm:text-sm uppercase tracking-widest font-semibold block mb-2">
        {eyebrow}
      </span>
      <h2 className="font-tech text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
        {title}
      </h2>
      {description ? (
        <p
          className={`text-brand-gray-text text-sm sm:text-base max-w-2xl mt-3 sm:mt-4 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
