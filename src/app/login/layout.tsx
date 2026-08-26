import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — SeatsConnect™",
  description: "Welcome back. Access your SeatsConnect account.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
