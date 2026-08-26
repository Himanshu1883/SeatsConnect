import { cn } from "@/lib/utils";

type SwipeableCardsProps = {
  children: React.ReactNode;
  className?: string;
};

export function SwipeableCards({ children, className }: SwipeableCardsProps) {
  return (
    <div
      className={cn(
        "swipe-track flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto md:overflow-visible pb-3 md:pb-0 -mx-4 px-4 sm:-mx-0 sm:px-0",
        className
      )}
    >
      {children}
    </div>
  );
}

type SwipeCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SwipeCard({ children, className }: SwipeCardProps) {
  return (
    <div
      className={cn(
        "swipe-card min-w-[85%] sm:min-w-[70%] md:min-w-0 shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
}
