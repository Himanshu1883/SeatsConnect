import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Request — SeatsConnect™",
  description:
    "Need something specific? Our partner team can assist approved SeatsConnect partners with bespoke ticket and hospitality requirements.",
};

export default function RequestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
