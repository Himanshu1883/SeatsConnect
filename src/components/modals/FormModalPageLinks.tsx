"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { FORM_MODAL_PAGE_SKIP_KEY } from "@/lib/constants/formModals";

export function FormModalPageLinks({
  pageHref,
  pageLabel,
  aside,
  asideCta,
  asideHref,
  onClose,
}: {
  pageHref: string;
  pageLabel: string;
  aside: string;
  asideCta: string;
  asideHref: string;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const onThisPage = pathname === pageHref;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
      {onThisPage ? (
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-w-0 items-center gap-1 text-[11px] font-semibold text-brand-dark hover:text-brand-orange"
        >
          <ArrowUpRight className="h-3.5 w-3.5 text-brand-orange" />
          Close to view this page
          <span className="font-mono text-[11px] font-medium text-brand-gray-text">
            {pageHref}
          </span>
        </button>
      ) : (
        <Link
          href={pageHref}
          data-form-modal-bypass="true"
          onClick={() => {
            sessionStorage.setItem(FORM_MODAL_PAGE_SKIP_KEY, "1");
            onClose();
          }}
          className="inline-flex min-w-0 items-center gap-1 text-[11px] font-semibold text-brand-dark hover:text-brand-orange"
        >
          <ArrowUpRight className="h-3.5 w-3.5 text-brand-orange" />
          {pageLabel}
          <span className="font-mono text-[11px] font-medium text-brand-gray-text">
            {pageHref}
          </span>
        </Link>
      )}
      <p className="text-[11px] text-brand-gray-text sm:border-l sm:border-orange-100 sm:pl-3">
        {aside}{" "}
        <Link
          href={asideHref}
          className="font-semibold text-brand-orange hover:text-brand-orange-hover"
        >
          {asideCta}
        </Link>
      </p>
    </div>
  );
}
