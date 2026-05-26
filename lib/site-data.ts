// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  oneliner: string;
  problem: string;
  techStack: string[];
  designDecisions: string[];
  stats: { label: string; value: string }[];
  githubUrl?: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  email: "meik.perlis@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/meik-perlis/",
  linkedinLabel: "linkedin.com/in/meik-perlis",
} as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: "Über mich", href: "/#about" },
  { label: "Projekte", href: "/#cases" },
  { label: "Kontakt", href: "/#contact" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "archivbot",
    title: "Dokument schicken — archiviert.",
    oneliner:
      "Ein KI-gestütztes Archivsystem, das Belege, Rechnungen und Amtsschreiben automatisch erkennt, klassifiziert und ablegt — per Telegram-Foto oder E-Mail-Weiterleitung.",
    problem:
      "Kassenbons, Rechnungen, Amtsschreiben — alles landet irgendwo. In der Tasche, im Posteingang, auf dem Schreibtisch. Wer es braucht, sucht. Wer es nicht sofort ablegt, vergisst es. Ich wollte ein System, dem ich ein Foto schicke und das den Rest erledigt.",
    techStack: [
      "n8n",
      "GPT-4o (Vision)",
      "Google Drive API",
      "Google Sheets API",
      "Telegram Bot API",
      "Gmail API",
      "Hetzner VPS",
      "Docker",
      "JavaScript",
    ],
    designDecisions: [
      "Workflows werden generiert, nie von Hand editiert — ein Generatorskript erzeugt den n8n-Workflow aus Prompt und Config.",
      "Bei Unsicherheit fragt das System per Telegram nach, statt still falsch einzusortieren.",
      "Vision-API und PDF-Textextraktion als zwei getrennte Pfade — je nach Eingangsformat wird der optimale Weg gewählt.",
    ],
    stats: [
      { label: "Produktiv seit", value: "ca. 4 Wochen" },
      { label: "Fehlerquote", value: "0" },
      { label: "Volumen", value: "1+ Dok./Tag (Telegram), ~10 Mails/Tag" },
      { label: "Dokumenttypen", value: "9" },
      { label: "Kosten", value: "wenige EUR/Monat" },
    ],
  },
  {
    id: "outlook-assistent",
    title: "Ein Postfach, das sich selbst aufräumt.",
    oneliner:
      "Eine KI, die alle 3 Stunden den Posteingang prüft, jede Mail bewertet und alles, was keine Aufmerksamkeit braucht, in den richtigen Ordner verschiebt.",
    problem:
      "10-15 Mails am Tag, die meisten brauchen keine Reaktion — Newsletter, Bestätigungen, Benachrichtigungen. Aber sie verstopfen den Posteingang und machen die wichtigen Mails unsichtbar. Ich wollte ein System, das aufräumt, ohne dass etwas verloren geht.",
    techStack: [
      "n8n",
      "GPT-4o-mini",
      "Microsoft Graph API",
      "Python",
      "Docker",
      "Hetzner VPS",
    ],
    designDecisions: [
      "Bei Unsicherheit bleibt die Mail im Posteingang — sichtbar ist besser als falsch einsortiert.",
      "Der Workflow wird aus Prompt und Config generiert (Python-Skript), nie direkt im n8n-Editor bearbeitet.",
      "Markierte Mails (To-do-Flagge) werden nicht angerührt — das System respektiert manuelle Entscheidungen.",
    ],
    stats: [
      { label: "Produktiv seit", value: "ca. 4 Wochen" },
      { label: "Fehlerquote", value: "0" },
      { label: "Volumen", value: "10–15 Mails/Tag" },
      { label: "Zielordner", value: "10" },
      { label: "Intervall", value: "alle 3 Stunden" },
      { label: "Kosten", value: "1–3 EUR/Monat" },
    ],
  },
];
