import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmileCare — Dental Clinic",
  description: "Demo landing page — SmileCare — Dental Clinic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
