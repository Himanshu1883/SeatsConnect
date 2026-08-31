"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FormModalHost } from "@/components/modals/FormModalHost";
import {
  FORM_MODAL_PAGE_SKIP_KEY,
  matchFormModalPath,
  parseFormModalUrl,
  type FormModalTarget,
} from "@/lib/constants/formModals";

function isModifiedClick(event: MouseEvent) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

function paramsFromSearch(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  new URLSearchParams(search.startsWith("?") ? search.slice(1) : search).forEach(
    (value, key) => {
      if (value) params[key] = value;
    }
  );
  return params;
}

function shouldSkipPageModal() {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem(FORM_MODAL_PAGE_SKIP_KEY) !== "1") return false;
  sessionStorage.removeItem(FORM_MODAL_PAGE_SKIP_KEY);
  return true;
}

function targetFromLocation(pathname: string): FormModalTarget | null {
  if (shouldSkipPageModal()) return null;
  const kind = matchFormModalPath(pathname);
  if (!kind) return null;
  const params =
    typeof window === "undefined"
      ? {}
      : paramsFromSearch(window.location.search);
  return { kind, params };
}

export function FormModalProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [target, setTarget] = useState<FormModalTarget | null>(null);
  const close = useCallback(() => setTarget(null), []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || isModifiedClick(event)) return;

      const el = event.target;
      if (!(el instanceof Element)) return;
      const link = el.closest("a");
      if (!link || link.target === "_blank") return;
      if (link.getAttribute("download") != null) return;
      if (link.dataset.formModalBypass === "true") {
        sessionStorage.setItem(FORM_MODAL_PAGE_SKIP_KEY, "1");
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const next = parseFormModalUrl(href, window.location.href);
      if (!next) return;

      event.preventDefault();
      event.stopPropagation();
      setTarget(next);
    }

    function onSubmit(event: SubmitEvent) {
      if (event.defaultPrevented) return;
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (form.closest('[role="dialog"]')) return;

      const method = (form.getAttribute("method") || "get").toLowerCase();
      if (method !== "get") return;

      const action = form.getAttribute("action") || "";
      if (!action || action === "#" || action.startsWith("#")) return;

      const next = parseFormModalUrl(action, window.location.href);
      if (!next) return;

      event.preventDefault();
      event.stopPropagation();

      const data = new FormData(form);
      const params = { ...next.params };
      data.forEach((value, key) => {
        if (typeof value === "string" && value) params[key] = value;
      });
      setTarget({ kind: next.kind, params });
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  useEffect(() => {
    setTarget(targetFromLocation(pathname));
  }, [pathname]);

  return (
    <>
      {children}
      <FormModalHost target={target} onClose={close} />
    </>
  );
}
