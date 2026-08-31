import { cn } from "@/lib/utils";

export function FormSuccess({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-orange-100 bg-brand-orange-light/40 p-6 text-center sm:p-8",
        className
      )}
    >
      <p className="font-medium text-brand-dark">{children}</p>
    </div>
  );
}
