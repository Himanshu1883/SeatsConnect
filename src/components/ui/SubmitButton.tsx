import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
};

export function SubmitButton({
  children,
  className,
  arrow = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        "relative inline-flex w-full items-center justify-center rounded-xl bg-brand-orange px-5 py-2 font-tech text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(255,107,0,0.22)] transition hover:bg-brand-orange-hover",
        className
      )}
    >
      {children}
      {arrow ? (
        <ArrowRight
          className="absolute right-4 h-4 w-4"
          strokeWidth={2.2}
        />
      ) : null}
    </button>
  );
}
