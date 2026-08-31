"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  FORM_MODAL_PAGE_SKIP_KEY,
  type FormModalRelatedLink,
} from "@/lib/constants/formModals";

export function FormModalPageLinks({
  pageHref,
  pageLabel,
  related,
  onClose,
}: {
  pageHref: string;
  pageLabel: string;
  related: FormModalRelatedLink[];
  onClose: () => void;
}) {
  const pathname = usePathname();
  const onThisPage = pathname === pageHref;

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      {onThisPage ? (
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-left font-tech text-[13px] font-semibold text-brand-orange hover:text-brand-orange-hover"
        >
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
          className="inline-flex items-center gap-1.5 font-tech text-[13px] font-semibold text-brand-orange hover:text-brand-orange-hover"
        >
          {pageLabel}
          <span className="font-mono text-[11px] font-medium text-brand-gray-text">
            {pageHref}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
        </Link>
      )}
      <nav className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {related.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-brand-gray-text hover:text-brand-orange"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href + link.label}
              href={link.href}
              data-form-modal-bypass="true"
              onClick={() => {
                sessionStorage.setItem(FORM_MODAL_PAGE_SKIP_KEY, "1");
                onClose();
              }}
              className="text-[12px] font-medium text-brand-gray-text hover:text-brand-orange"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
