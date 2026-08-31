"use client";

import { useId, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { LucideIcon } from "lucide-react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalSize = "wide" | "form" | "narrow";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  size?: ModalSize;
  footer?: React.ReactNode;
  trust?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const sizeClasses: Record<ModalSize, string> = {
  wide: "max-w-[52rem]",
  form: "max-w-[40rem]",
  narrow: "max-w-[30rem]",
};

function ModalTitle({ id, title }: { id: string; title: string }) {
  const hasPeriod = title.endsWith(".");
  const body = hasPeriod ? title.slice(0, -1) : title;
  const words = body.split(" ");
  const last = words.length > 1 ? words.pop() : null;

  return (
    <h2
      id={id}
      className="heading mt-1 text-[1.5rem] leading-[1.12] tracking-[-0.03em] text-brand-dark sm:text-[1.7rem]"
    >
      {last ? (
        <>
          {words.join(" ")}{" "}
          <span className="text-brand-orange">
            {last}
            {hasPeriod ? "." : ""}
          </span>
        </>
      ) : (
        title
      )}
    </h2>
  );
}

function isInside(root: HTMLElement | null, node: EventTarget | null) {
  return Boolean(root && node instanceof Node && root.contains(node));
}

export function Modal({
  open,
  onClose,
  title,
  description,
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  size = "form",
  footer,
  trust,
  children,
  className,
}: ModalProps) {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousScrollBehavior = html.style.scrollBehavior;
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.scrollBehavior = "auto";
    html.setAttribute("data-form-modal-open", "true");
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    panelRef.current?.focus({ preventScroll: true });
    window.dispatchEvent(new Event("seatsconnect:modal-open"));

    function stopIfOutsideScroll(event: WheelEvent | TouchEvent) {
      if (isInside(scrollRef.current, event.target)) {
        if (!(event instanceof WheelEvent)) return;
        const area = scrollRef.current;
        if (!area) return;
        const atTop = area.scrollTop <= 0 && event.deltaY < 0;
        const atBottom =
          area.scrollTop + area.clientHeight >= area.scrollHeight - 1 &&
          event.deltaY > 0;
        if (atTop || atBottom) event.preventDefault();
        return;
      }
      event.preventDefault();
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    document.addEventListener("wheel", stopIfOutsideScroll, { passive: false });
    document.addEventListener("touchmove", stopIfOutsideScroll, {
      passive: false,
    });
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("wheel", stopIfOutsideScroll);
      document.removeEventListener("touchmove", stopIfOutsideScroll);
      document.removeEventListener("keydown", onKey);
      html.removeAttribute("data-form-modal-open");
      html.style.overflow = "";
      html.style.overscrollBehavior = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });
      html.style.scrollBehavior = previousScrollBehavior;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center overflow-hidden overscroll-none p-2 sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-brand-dark/45 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descId : undefined}
        tabIndex={-1}
        className={cn(
          "relative z-10 flex max-h-[calc(100dvh-1rem)] w-full flex-col overflow-hidden overscroll-none rounded-[1.25rem] border border-orange-100/80 bg-white shadow-[0_28px_80px_rgba(40,30,20,0.24)] outline-none",
          sizeClasses[size],
          className
        )}
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-5 pb-1 pt-4 sm:px-6 sm:pt-5">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="flex items-center gap-1.5 font-tech text-[10px] font-bold uppercase tracking-[0.16em] text-brand-orange">
                {EyebrowIcon ? (
                  <EyebrowIcon className="h-3.5 w-3.5" strokeWidth={2} />
                ) : null}
                {eyebrow}
              </p>
            ) : null}
            <ModalTitle id={titleId} title={title} />
            {description ? (
              <p
                id={descId}
                className="mt-1 max-w-md text-[13px] leading-snug text-brand-gray-text"
              >
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-white text-brand-gray-text transition hover:border-brand-orange/40 hover:text-brand-orange"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.2} />
          </button>
        </div>
        <div
          ref={scrollRef}
          className={cn(
            "min-h-0 flex-1 px-5 py-3 sm:px-6",
            size === "wide" ? "overflow-y-auto overscroll-y-contain" : "overflow-hidden"
          )}
        >
          {children}
        </div>
        {footer ? (
          <div className="shrink-0 border-t border-orange-100/80 bg-[#f7f3ef] px-5 py-2 sm:px-6">
            {footer}
          </div>
        ) : null}
        {trust ? (
          <div className="shrink-0 border-t border-orange-100/70 bg-[#f4efe9] px-5 py-2 sm:px-6">
            {trust}
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
