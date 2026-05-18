import type { Metadata } from "next";
import { TemporaryOffline } from "@/components/temporary-offline";
import "./globals.css";

const siteTemporarilyOffline = true;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldofworkflow.de"),
  title: "WorldofWorkflow – Automatisierung, KI-Workflows & digitale Prozesse",
  description:
    "WorldofWorkflow Inhaber: Meik Perlis – persönliche Fachpräsenz rund um Automatisierung, n8n-Workflows, KI-Agenten und digitale Prozesse.",
  keywords: [
    "KI Automatisierung",
    "Workflow Automatisierung",
    "Prozessoptimierung",
    "digitale Workflows",
    "KI Beratung",
    "Business Automation",
  ],
  openGraph: {
    title: "WorldofWorkflow – Automatisierung, KI-Workflows & digitale Prozesse",
    description:
      "WorldofWorkflow Inhaber: Meik Perlis – persönliche Fachpräsenz rund um praktische Automatisierung, n8n-Workflows und KI-Agenten.",
    type: "website",
    locale: "de_DE",
    siteName: "WorldofWorkflow",
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Meik Perlis" }],
  robots: siteTemporarilyOffline
    ? {
        index: false,
        follow: false,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{siteTemporarilyOffline ? <TemporaryOffline /> : children}</body>
    </html>
  );
}
