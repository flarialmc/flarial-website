import type { Metadata } from "next";
import StaffApplicationsDemo from "./StaffApplicationsDemo";

export const metadata: Metadata = {
  title: "Staff Applications Preview",
  description: "Private preview of the Flarial staff application flow.",
  alternates: { canonical: "/staff-applications-private-6f4a91" },
  robots: { index: false, follow: false },
};

export default function StaffApplicationsPrivatePreviewPage() {
  return <StaffApplicationsDemo />;
}
