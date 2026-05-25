import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.worldofworkflow.de"),
  title: "WorldofWorkflow – Digitale Abläufe für Handwerksbetriebe in Nürnberg",
  description:
    "Meik Perlis aus Nürnberg baut digitale Abläufe für Handwerksbetriebe in Nürnberg und der Metropolregion — weniger Papierkram, mehr Zeit für echte Arbeit.",
  keywords: [
    "Digitale Abläufe Handwerk Nürnberg",
    "Workflow Automatisierung Nürnberg",
    "Handwerksbetrieb digitalisieren",
    "Automatisierung Nürnberg",
    "n8n Nürnberg",
    "Prozessoptimierung Handwerk",
    "Metropolregion Nürnberg",
  ],
  openGraph: {
    title: "WorldofWorkflow – Digitale Abläufe für Handwerksbetriebe in Nürnberg",
    description:
      "Meik Perlis aus Nürnberg baut digitale Abläufe für Handwerksbetriebe — weniger Papierkram, mehr Zeit für echte Arbeit.",
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
