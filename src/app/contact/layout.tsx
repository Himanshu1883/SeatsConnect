import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — SeatsConnect™",
  description: "Talk to SeatsConnect. Connect inventory, join our distribution network or discuss an integration.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
