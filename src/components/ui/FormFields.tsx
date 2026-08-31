"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { LucideIcon } from "lucide-react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  rows?: number;
  icon?: LucideIcon;
  maxLength?: number;
};

const controlClass =
  "w-full rounded-lg border border-orange-100/90 bg-white py-2 text-[13px] leading-snug text-brand-dark placeholder:text-brand-gray-text/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/40 transition-colors";

function ThemeSelect({
  id,
  name,
  required,
  options,
  placeholder,
  defaultValue,
  icon: Icon,
}: {
  id: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder: string;
  defaultValue?: string;
  icon?: LucideIcon;
}) {
  const listId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? "");
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0, maxHeight: 220 });

  const selected = options.find((opt) => opt.value === value);

  function placeMenu() {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const maxHeight = 220;
    const spaceBelow = window.innerHeight - rect.bottom - 12;
    const spaceAbove = rect.top - 12;
    const openUp = spaceBelow < 140 && spaceAbove > spaceBelow;
    const height = Math.min(maxHeight, openUp ? spaceAbove : spaceBelow);
    setPos({
      top: openUp ? rect.top - height - 4 : rect.bottom + 4,
      left: rect.left,
      width: rect.width,
      maxHeight: height,
    });
  }

  useEffect(() => {
    if (!open) return;
    placeMenu();

    function onPointer(event: MouseEvent) {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target)) return;
      if (listRef.current?.contains(target)) return;
      setOpen(false);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopImmediatePropagation();
      setOpen(false);
    }

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey, true);
    window.addEventListener("resize", placeMenu);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey, true);
      window.removeEventListener("resize", placeMenu);
    };
  }, [open]);

  return (
    <div className="relative">
      <input
        type="hidden"
        name={name}
        value={value}
        required={required}
      />
      <button
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          controlClass,
          "flex items-center gap-2 pr-9 text-left",
          Icon ? "pl-9" : "pl-3",
          open && "border-brand-orange/45 ring-2 ring-brand-orange/20"
        )}
      >
        {Icon ? (
          <Icon
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray-text/40"
            strokeWidth={1.75}
          />
        ) : null}
        <span
          className={cn(
            "min-w-0 flex-1 truncate",
            selected ? "text-brand-dark" : "text-brand-gray-text/50"
          )}
        >
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={cn(
            "pointer-events-none absolute right-3 h-3.5 w-3.5 text-brand-gray-text/45 transition",
            open && "rotate-180 text-brand-orange"
          )}
          strokeWidth={2}
        />
      </button>
      {open && typeof document !== "undefined"
        ? createPortal(
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.width,
                maxHeight: pos.maxHeight,
              }}
              className="fixed z-[90] overflow-y-auto rounded-xl border border-orange-100 bg-white py-1 shadow-[0_16px_40px_rgba(40,30,20,0.16)]"
            >
              {options.map((opt) => {
                const active = opt.value === value;
                return (
                  <li key={opt.value} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onClick={() => {
                        setValue(opt.value);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between gap-2 px-3 py-1.5 text-left text-[12px] transition",
                        active
                          ? "bg-[#fff7f0] font-medium text-brand-orange"
                          : "text-brand-dark hover:bg-[#faf7f3]"
                      )}
                    >
                      {opt.label}
                      {active ? (
                        <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>,
            document.body
          )
        : null}
    </div>
  );
}

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  options,
  placeholder,
  className,
  defaultValue,
  rows = 2,
  icon: Icon,
  maxLength,
}: FormFieldProps) {
  const [count, setCount] = useState(defaultValue?.length ?? 0);
  const withIcon = Boolean(Icon);

  return (
    <div className={cn("space-y-0.5", className)}>
      <label
        htmlFor={name}
        className="block text-[11px] font-semibold text-brand-dark"
      >
        {label}
        {required ? <span className="ml-0.5 text-red-500">*</span> : null}
      </label>
      {as === "textarea" ? (
        <div className="relative">
          {Icon ? (
            <Icon
              className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-brand-gray-text/40"
              strokeWidth={1.75}
            />
          ) : null}
          <textarea
            id={name}
            name={name}
            required={required}
            rows={rows}
            maxLength={maxLength}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={(event) => setCount(event.target.value.length)}
            className={cn(
              controlClass,
              "min-h-[3.25rem] resize-none pb-5",
              withIcon ? "pl-9 pr-3" : "px-3"
            )}
          />
          {maxLength ? (
            <span className="pointer-events-none absolute bottom-2 right-3 font-mono text-[10px] text-brand-gray-text/55">
              {count} / {maxLength}
            </span>
          ) : null}
        </div>
      ) : as === "select" ? (
        <ThemeSelect
          id={name}
          name={name}
          required={required}
          options={options ?? []}
          placeholder={placeholder || "Select type"}
          defaultValue={defaultValue}
          icon={Icon}
        />
      ) : (
        <div className="relative">
          {Icon ? (
            <Icon
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray-text/40"
              strokeWidth={1.75}
            />
          ) : null}
          <input
            id={name}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={cn(controlClass, withIcon ? "pl-9 pr-3" : "px-3")}
          />
        </div>
      )}
    </div>
  );
}

type FormGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function FormGrid({ children, className }: FormGridProps) {
  return (
    <div className={cn("grid gap-x-3.5 gap-y-2.5 sm:grid-cols-2", className)}>
      {children}
    </div>
  );
}

type YesNoFieldProps = {
  label: string;
  name: string;
};

export function YesNoField({ label, name }: YesNoFieldProps) {
  return (
    <div className="min-w-0">
      <p className="mb-0.5 text-[11px] font-semibold text-brand-dark">{label}</p>
      <div className="flex gap-1.5 rounded-lg bg-[#f7f3ef] p-1">
        {["Yes", "No"].map((val) => (
          <label key={val} className="min-w-0 flex-1 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={val.toLowerCase()}
              className="peer sr-only"
            />
            <span className="flex items-center justify-center rounded-md bg-white px-2 py-1.5 text-[12px] font-medium text-brand-dark shadow-[0_1px_2px_rgba(40,30,20,0.06)] transition peer-checked:bg-white peer-checked:text-brand-orange peer-checked:ring-1 peer-checked:ring-brand-orange peer-focus-visible:ring-2 peer-focus-visible:ring-brand-orange/25">
              {val}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
