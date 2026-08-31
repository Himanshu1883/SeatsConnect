import { Handshake, Lock, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Secure & Private",
    text: "Never shared.",
    icon: ShieldCheck,
  },
  {
    title: "Professionals only",
    text: "Verified businesses.",
    icon: Lock,
  },
  {
    title: "Built for B2B",
    text: "One connection.",
    icon: Handshake,
  },
] as const;

export function FormModalTrust() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((item) => (
        <div key={item.title} className="flex min-w-0 items-center gap-1.5">
          <item.icon
            className="h-3.5 w-3.5 shrink-0 text-brand-orange"
            strokeWidth={1.8}
          />
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold leading-tight text-brand-dark">
              {item.title}
            </p>
            <p className="truncate text-[9px] leading-tight text-brand-gray-text">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
