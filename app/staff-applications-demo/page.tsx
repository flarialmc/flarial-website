import type { Metadata } from "next";
import StaffApplicationsDemo from "./StaffApplicationsDemo";

export const metadata: Metadata = {
  title: "Staff Applications Demo",
  description: "Interactive concept demo for a Flarial staff applications system.",
  alternates: { canonical: "/staff-applications-demo" },
  robots: { index: false, follow: false },
};

export default function StaffApplicationsDemoPage() {
  return <StaffApplicationsDemo />;
}
