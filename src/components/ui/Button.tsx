import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-sm shadow-brand-orange/20",
  secondary:
    "bg-brand-dark hover:bg-brand-dark/90 text-white",
  outline:
    "border border-brand-orange/40 text-brand-dark hover:bg-brand-orange-light bg-white",
  ghost:
    "text-brand-dark hover:text-brand-orange hover:bg-brand-orange-light/60",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold font-tech transition-all duration-200",
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type ButtonGroupProps = {
  children: React.ReactNode;
  className?: string;
};

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row flex-wrap gap-3", className)}>
      {children}
    </div>
  );
}
