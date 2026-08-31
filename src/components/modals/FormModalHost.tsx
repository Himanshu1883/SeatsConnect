"use client";

import { ContactEnquiryForm } from "@/components/forms/ContactEnquiryForm";
import { DeveloperAccessForm } from "@/components/forms/DeveloperAccessForm";
import { JoinPartnerForm } from "@/components/forms/JoinPartnerForm";
import { JoinSupplierForm } from "@/components/forms/JoinSupplierForm";
import { LoginForm } from "@/components/forms/LoginForm";
import { RequestEnquiryForm } from "@/components/forms/RequestEnquiryForm";
import { FormModalPageLinks } from "@/components/modals/FormModalPageLinks";
import { JoinPathChooser } from "@/components/modals/JoinPathChooser";
import { Modal } from "@/components/ui/Modal";
import {
  formModalCopy,
  type FormModalTarget,
} from "@/lib/constants/formModals";
import { siteConfig } from "@/lib/constants/site";

export function FormModalHost({
  target,
  onClose,
}: {
  target: FormModalTarget | null;
  onClose: () => void;
}) {
  if (!target) return null;

  const copy = formModalCopy[target.kind];
  const formKey = `${target.kind}:${target.params.type ?? ""}:${target.params.email ?? ""}`;

  return (
    <Modal
      key={formKey}
      open
      onClose={onClose}
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      size={copy.size}
      footer={
        <FormModalPageLinks
          pageHref={copy.pageHref}
          pageLabel={copy.pageLabel}
          related={copy.related}
          onClose={onClose}
        />
      }
    >
      <div key={formKey}>
        {target.kind === "join" ? <JoinPathChooser /> : null}
        {target.kind === "joinSupplier" ? <JoinSupplierForm /> : null}
        {target.kind === "joinPartner" ? <JoinPartnerForm /> : null}
        {target.kind === "contact" ? (
          <ContactEnquiryForm
            defaultEnquiryType={target.params.type}
            defaultEmail={target.params.email}
          />
        ) : null}
        {target.kind === "request" ? <RequestEnquiryForm /> : null}
        {target.kind === "developers" ? <DeveloperAccessForm /> : null}
        {target.kind === "login" ? (
          <div className="space-y-4">
            <LoginForm embedded />
            <p className="text-center text-[12px] text-brand-gray-text">
              Existing partners are taken to the SeatsConnect platform at{" "}
              <a
                href={siteConfig.portalUrl}
                className="font-medium text-brand-orange hover:underline"
              >
                app.seatsconnect.com
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
