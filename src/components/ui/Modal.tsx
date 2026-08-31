"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalSize = "wide" | "form" | "narrow";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  eyebrow?: string;
  size?: ModalSize;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const sizeClasses: Record<ModalSize, string> = {
  wide: "max-w-4xl",
  form: "max-w-2xl",
  narrow: "max-w-lg",
};

function isInside(root: HTMLElement | null, node: EventTarget | null) {
  return Boolean(root && node instanceof Node && root.contains(node));
}

export function Modal({
  open,
  onClose,
  title,
  description,
  eyebrow,
  size = "form",
  footer,
  children,
  className,
}: ModalProps) {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const previousFocus = document.activeElement as HTMLElement | null;
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

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

    panelRef.current?.focus();
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
      window.scrollTo(0, scrollY);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center overflow-hidden overscroll-none p-3 sm:items-center sm:p-6">
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
          "relative z-10 flex max-h-[min(92dvh,52rem)] w-full flex-col overflow-hidden overscroll-none rounded-[1.6rem] border border-orange-100 bg-white shadow-[0_24px_80px_rgba(40,30,20,0.22)] outline-none",
          sizeClasses[size],
          className
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-orange-100/90 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={titleId}
              className="mt-1 font-tech text-xl font-bold leading-snug text-brand-dark sm:text-2xl"
            >
              {title}
            </h2>
            {description ? (
              <p
                id={descId}
                className="mt-1.5 max-w-xl text-sm leading-relaxed text-brand-gray-text"
              >
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-[#faf7f3] text-brand-dark transition hover:border-brand-orange/40 hover:text-brand-orange"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-5 py-5 sm:px-6 sm:py-6"
        >
          {children}
        </div>
        {footer ? (
          <div className="border-t border-orange-100/90 bg-[#faf7f3] px-5 py-3 sm:px-6">
            {footer}
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
