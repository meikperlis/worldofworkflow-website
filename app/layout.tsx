import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldofworkflow.de"),
  title: "WorldofWorkflow – Automatisierung, KI-Workflows & digitale Prozesse",
  description:
    "WorldofWorkflow ist die persönliche Fachpräsenz von Meik Perlis rund um Automatisierung, n8n-Workflows, KI-Agenten und digitale Prozesse.",
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
      "Persönliche Fachpräsenz von Meik Perlis rund um praktische Automatisierung, n8n-Workflows und KI-Agenten.",
    type: "website",
    locale: "de_DE",
    siteName: "WorldofWorkflow",
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Meik Perlis" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
