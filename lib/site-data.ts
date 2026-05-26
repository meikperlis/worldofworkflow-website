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
    title: "Belege & Dokumente erfassen",
    text: "Rechnung, Lieferschein oder Kassenbon abfotografieren und per Telegram schicken — KI erkennt Betrag, Kategorie und Datum und trägt alles automatisch ein.",
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
    title: "Ein Postfach, das sich selbst aufräumt.",
    intro:
      "Wie aus einem vollen Outlook-Postfach ein ruhiger Ablauf wurde — mit einer KI, die lieber nichts tut als etwas Falsches.",
    steps: ["Outlook-Anbindung", "Aufmerksamkeit prüfen", "individuelle Ordnerstruktur", "läuft automatisch"],
    text:
      "Alle paar Stunden prüft das System jede neue Mail in zwei Schritten: Braucht sie Aufmerksamkeit? Wenn ja, bleibt sie sichtbar im Posteingang. Wenn nein, wird sie in den passenden Ordner einsortiert — aber nur, wenn die Zuordnung eindeutig ist. Markierte Mails werden nicht angerührt.",
    note:
      "Keine gespeicherten Passwörter, kein automatisches Löschen. Bei technischen Problemen kommt sofort eine Benachrichtigung. Läuft automatisch in der Cloud — für wenige Euro im Monat.",
  },
  {
    title: "Dokument schicken — archiviert.",
    intro:
      "Wie Belege, Rechnungen und Amtsschreiben automatisch im richtigen Ordner landen — egal ob als Foto oder per E-Mail.",
    steps: ["Foto oder E-Mail", "KI erkennt & sortiert", "passender Ordner", "Übersichtstabelle"],
    text:
      "Kassenbon fotografieren, Rechnung weiterleiten oder Amtsbrief abfotografieren — die KI erkennt automatisch, was es ist, liest Absender, Betrag und Fälligkeiten aus und legt das Dokument im passenden Ordner ab. Alles landet zusätzlich in einer Übersichtstabelle. Wenn die Zuordnung nicht eindeutig ist, fragt das System nach — statt still falsch zu sortieren.",
    note:
      "Läuft auf einer selbstgehosteten Umgebung — stabil, verschlüsselt, mit täglichen Backups. Zwei getrennte Abläufe für Fotos und E-Mails. Genau so würde ich es auch für einen Handwerksbetrieb aufsetzen.",
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
      "Einfache Abläufe wie eine automatische Belegerfassung sind oft in wenigen Tagen einsatzbereit. Komplexere Prozesse dauern länger — aber auch die starten immer mit einem klaren, überschaubaren ersten Schritt.",
  },
];

export const showcaseSteps: ShowcaseStep[] = [
  {
    num: "01",
    label: "Foto aufnehmen",
    detail: "Beleg, Rechnung oder Brief auf der Baustelle abfotografieren — Smartphone reicht.",
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
    label: "Fertig abgelegt",
    detail: "Alle Daten landen sauber in der Übersicht — nichts vergessen.",
    meta: "Google Sheets · Excel",
  },
];
