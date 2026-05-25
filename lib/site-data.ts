// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  text: string;
}

export interface CaseStudy {
  title: string;
  intro: string;
  steps: string[];
  text: string;
  note: string;
}

export interface FocusItem {
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ShowcaseStep {
  num: string;
  label: string;
  detail: string;
  meta: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Über mich", href: "/#about" },
  { label: "Schwerpunkte", href: "/#services" },
  { label: "Kontakt", href: "/#contact" },
];

export const services: Service[] = [
  {
    title: "Belege & Quittungen erfassen",
    text: "Kassenbon fotografieren, per Telegram schicken — KI erkennt Betrag, Kategorie und Datum und trägt alles automatisch ein.",
  },
  {
    title: "Kundenanfragen sortieren",
    text: "Neue Anfragen landen nicht mehr im E-Mail-Chaos, sondern werden automatisch sortiert, priorisiert und weitergeleitet.",
  },
  {
    title: "Fotos & Dokumente archivieren",
    text: "Baustellen-Fotos, Lieferscheine und Pläne automatisch abgelegt — mit Datum, Projekt und klarer Ordnerstruktur.",
  },
  {
    title: "Stunden & Aufmaß erfassen",
    text: "Zeiten oder Maße kurz per Nachricht eingeben — der Rest läuft automatisch in die Übersicht ein.",
  },
  {
    title: "Angebote schneller erstellen",
    text: "Vorlagen automatisch befüllen, weniger tippen, schneller raus zum Kunden — ohne extra Software.",
  },
  {
    title: "Aufsetzen & erklären",
    text: "Lösungen so bauen und dokumentieren, dass sie im Betriebsalltag ohne Technikwissen zuverlässig funktionieren.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Kassenbon per Foto — fertig.",
    intro:
      "Wie Belege, Rechnungen und Briefe automatisch in eine saubere digitale Struktur landen — ohne Tippen, ohne App.",
    steps: ["Foto per Smartphone", "Telegram-Bot", "KI-Qualifizierung", "Google Sheet / OneDrive Excel"],
    text:
      "Dokument fotografieren, per Telegram schicken — der Workflow erkennt Absender, Betrag, Kategorie und Fälligkeit und trägt alles automatisch ein. Das Foto landet direkt in der passenden Zeile. Einmal aufgesetzt, läuft es seitdem ohne Eingriff.",
    note:
      "Läuft auf einer selbstgehosteten n8n-Umgebung — stabil, verschlüsselt, mit täglichen Backups. Genau so würde ich es auch für einen Handwerksbetrieb aufsetzen.",
  },
  {
    title: "Ein vorsichtiger Outlook-Mail-Sortierer",
    intro:
      "Wie aus einem vollen Postfach ein ruhiger Ablauf wurde — der lieber nichts tut als etwas Falsches.",
    steps: ["Outlook-Anbindung", "Automatische Analyse", "Probelauf zuerst", "Läuft in der Cloud"],
    text:
      "Der Sortierer prüft neue Mails, ordnet sie passenden Ordnern zu und verschiebt nur, wenn die Zuordnung eindeutig ist. Unklares bleibt sichtbar im Posteingang — bewusst so gebaut, weil Vertrauen wichtiger ist als Geschwindigkeit.",
    note:
      "Keine gespeicherten Passwörter, kein automatisches Löschen. Vor jedem echten Eingriff läuft zuerst ein Probelauf — das System schaut, bevor es handelt. Läuft anschließend automatisch in der Cloud.",
  },
];

export const currentFocus: FocusItem[] = [
  {
    title: "Belege verschwinden",
    text: "Kassenbons auf der Baustelle, Rechnungen per Mail, Lieferscheine auf Papier — alles verteilt, nichts griffbereit.",
  },
  {
    title: "Anfragen gehen unter",
    text: "Kundenanfragen kommen per Mail, Telefon und WhatsApp. Ohne Struktur geht schnell etwas verloren.",
  },
  {
    title: "Stunden werden vergessen",
    text: "Wer auf der Baustelle arbeitet, denkt abends nicht ans Eintippen. Zeiten werden ungenau oder gar nicht erfasst.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Verstehen",
    text: "Wir schauen uns an, wie die Arbeit heute wirklich läuft — nicht nur, wie sie auf dem Papier aussehen sollte.",
  },
  {
    title: "Vereinfachen",
    text: "Bevor etwas automatisiert wird, wird geprüft, was gestrichen, gebündelt oder klarer strukturiert werden kann.",
  },
  {
    title: "Umsetzen",
    text: "Danach entsteht ein Workflow, der nachvollziehbar bleibt und im Alltag tatsächlich genutzt werden kann.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Muss ich mich mit Technik auskennen?",
    answer:
      "Nein. Die Lösungen werden so gebaut, dass sie auf dem Smartphone funktionieren — Foto schicken, fertig. Kein Einrichten, kein Einarbeiten.",
  },
  {
    question: "Was kostet das Erstgespräch?",
    answer:
      "Nichts. Das erste Gespräch (30 Minuten) ist kostenlos. Dabei schauen wir gemeinsam, wo bei dir der größte Zeitfresser liegt.",
  },
  {
    question: "Arbeitest du auch persönlich vor Ort?",
    answer:
      "Ja — ich bin in Nürnberg ansässig und in der gesamten Metropolregion aktiv. Für Betriebe aus Nürnberg, Fürth, Erlangen, Schwabach und dem Umland komme ich bei Bedarf direkt in den Betrieb.",
  },
  {
    question: "Wie schnell ist ein Workflow aufgebaut?",
    answer:
      "Einfache Abläufe wie der Kassenbon-Workflow sind oft in wenigen Tagen einsatzbereit. Komplexere Prozesse dauern länger — aber auch die starten immer mit einem klaren, überschaubaren ersten Schritt.",
  },
];

export const showcaseSteps: ShowcaseStep[] = [
  {
    num: "01",
    label: "Foto aufnehmen",
    detail: "Kassenbon auf der Baustelle fotografieren — Smartphone reicht.",
    meta: "Kein Scanner nötig",
  },
  {
    num: "02",
    label: "Schicken",
    detail: "Foto einfach per Telegram oder WhatsApp in einen Chat schicken.",
    meta: "Keine extra App",
  },
  {
    num: "03",
    label: "KI verarbeitet",
    detail: "Betrag, Absender, Kategorie und Datum werden automatisch erkannt.",
    meta: "In wenigen Sekunden",
  },
  {
    num: "04",
    label: "Fertig eingetragen",
    detail: "Alle Daten landen sauber in der Tabelle — nichts vergessen.",
    meta: "Google Sheets · Excel",
  },
];
