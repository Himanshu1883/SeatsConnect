import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function SubmitButton({ children, className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold font-tech transition-all duration-200 bg-brand-orange hover:bg-brand-orange-hover text-white shadow-sm shadow-brand-orange/20",
        className
      )}
    >
      {children}
    </button>
  );
}
