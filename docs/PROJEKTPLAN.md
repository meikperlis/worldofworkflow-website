# Projektplan: Website-Umbau meikperlis.de

> Dieses Dokument enthält alle Entscheidungen aus der Grill-Session vom 2026-05-26.
> Es dient als vollständige Grundlage für die Umsetzung in einer neuen Session.

---

## 1. Ausgangslage

Die aktuelle Seite unter `worldofworkflow.de` ist als Dienstleister-Website für Handwerksbetriebe in Nürnberg aufgebaut. Sie hat 10 Sektionen, spricht Handwerker an und versteckt bewusst alle technischen Details.

**Problem:** Die Seite erzählt die falsche Geschichte. Es gibt keine Handwerkskunden, keine aktive Akquise, kein getestetes Angebot. Die Seite ist ein Portfolio-Projekt — aber sie tut so, als wäre sie ein fertiges Business.

**Entscheidung:** Kompletter Umbau zu einem persönlichen Tech-Portfolio.

---

## 2. Strategische Entscheidungen

| Thema | Entscheidung |
|---|---|
| **Zweck** | Persönliches Tech-Portfolio, kein Dienstleister-Auftritt |
| **Zielgruppe** | Tech-Entscheider (Hiring Manager, Teamleads) |
| **Positionierung** | Workflow/Automatisierungs-Spezialist mit KI |
| **Branchenfokus** | Branchenübergreifend (Handwerk war eine Hypothese, wird nicht weiterverfolgt) |
| **CTA-Richtung** | Neutral — offen für Festanstellung und Freelance, ohne das explizit zu signalisieren |
| **Aktueller Arbeitgeber** | Wird nicht erwähnt |
| **Sprache** | Deutsch |
| **Perspektive** | Ich-Perspektive, kein Du/Sie |
| **Ton** | Direkt, ehrlich, keine Buzzwords, kein Corporate-Sprech |
| **Domain (Ziel)** | `meikperlis.de` (muss noch gekauft werden), `worldofworkflow.de` leitet dorthin weiter |
| **E-Mail** | Aktuell: `meik.perlis@gmail.com`, später: `meik@meikperlis.de` |

---

## 3. Differenzierungsmerkmale

Diese drei Punkte unterscheiden Meik von der Masse der Automatisierungs-Portfolios:

1. **Kommt aus den Prozessen, nicht aus der Technik.** Jahrelange kaufmännische Erfahrung in verschiedenen Branchen (Industrie, Automotive, Bildung, Dienstleistung). Kennt die Probleme aus erster Hand.
2. **Baut auf Deutsch in einem englischsprachigen Feld.** Die gesamte n8n/Make/Automatisierungs-Szene ist englischsprachig. Meik besetzt die deutschsprachige Lücke bewusst.
3. **Systeme laufen produktiv.** Keine Demos, keine Konzepte — echte Systeme mit täglicher Nutzung, Monitoring und Weiterentwicklung.

---

## 4. Seitenstruktur (neu)

### 4.1 Hero

- **Eyebrow:** Automatisierung mit KI — aus Nürnberg, auf Deutsch
- **Headline:** Prozesse durchdenken. Dann automatisieren.
- **Subtext:** Ich habe jahrelang kaufmännische Abläufe abgearbeitet — dieselben Aufgaben, immer wieder, von Hand. Heute baue ich die Systeme, die das übernehmen. Zwei davon laufen produktiv.
- **CTA:** Projekte ansehen
- **Visual:** Stilisiertes Architekturdiagramm des ArchivBots (Telegram → KI → Drive) in Amber auf Dunkel. Ersetzt die abstrakten SVG-Pfade/Orbs.

### 4.2 Über mich

Vollständiger Textentwurf:

> Mein Name ist Meik Perlis. Ich lebe in der Metropolregion Nürnberg und komme aus der kaufmännischen Arbeit — Sachbearbeitung, Projektkoordination, Order Handling, quer durch Industrie, Automotive, Bildung und Dienstleistung.
>
> Überall dasselbe Muster: Dieselbe Rechnung wird dreimal angefasst, weil niemand weiß, wo sie liegt. Dieselbe Anfrage wird unterschiedlich bearbeitet, je nachdem wer gerade dran ist. Verantwortungsvolle Arbeit, die unnötig Energie kostet, weil sie nicht systematisiert ist.
>
> Irgendwann habe ich angefangen, das zu ändern. Erst für mich selbst, dann systematisch. Heute baue ich KI-gestützte Automatisierungen — auf Deutsch, in einem Feld, das fast ausschließlich auf Englisch stattfindet.
>
> Ich suche nach Umgebungen, in denen diese Denkweise gebraucht wird.

Portraitbild bleibt (bereits vorhanden: `/public/images/meik-perlis.jpeg`).

### 4.3 Case 1: Haushaltsarchiv (ArchivBot)

Struktur pro Case:

1. **Titel + Einzeiler** — Was tut das System
2. **Problem** — 2-3 Sätze aus eigener Erfahrung
3. **Architekturdiagramm** — SVG, Amber auf Dunkel, zeigt Datenfluss
4. **Tech-Stack als Tags** — kompakt, scanbar
5. **Designentscheidungen** — 2-3 Bullet Points
6. **Zahlen** — Laufzeit, Volumen, Kosten, Zuverlässigkeit
7. **GitHub-Link** — sobald Repo öffentlich

**Technische Details (aus Code-Review):**

- Zwei n8n-Workflows (Telegram + Mail), generiert per JavaScript-Generatorskript
- GPT-4o Vision-API für Dokumentenklassifikation (Fotos + PDFs)
- 9 Dokumenttypen mit Klassifikations-Prompt inkl. Abgrenzungsregeln
- Telegram-Bot als Eingangskanal: Album-Erkennung (Mediengruppen), Rückfrage-Dialog, Antwort-Parsing
- Mail-Workflow: Gmail-Trigger, PDF-Textextraktion, Bild-Anhang-Verarbeitung
- Google Drive als Archiv (Ordnerstruktur: Typ → Absender → Vorgang)
- Google Sheets als Cockpit (Vorgänge, Dateien, Rückfragen, Mediengruppen)
- Robustes Error-Handling: JSON-Parsing mit Balanced-Bracket-Extraktion, Feldvalidierung, Fallback
- Grundsatz: „Lieber Rückfrage als falsch einsortieren"
- Tech-Stack: n8n, GPT-4o, Google Drive API, Google Sheets API, Telegram Bot API, Hetzner VPS, Docker

**Designentscheidungen (Vorschlag):**
- Workflows werden generiert, nie von Hand editiert — ein Generatorskript erzeugt den n8n-Workflow aus Prompt und Config.
- Bei Unsicherheit fragt das System nach, statt still falsch einzusortieren.
- Vision-API und PDF-Textextraktion als zwei getrennte Pfade — je nach Eingangsformat.

**Zahlen (Stand 2026-05-26, regelmäßig aktualisieren):**
- Seit ca. 4 Wochen produktiv, fehlerfrei
- Mind. 1 Dokument/Tag (Telegram), ca. 10 Mails/Tag
- Tägliche Logs um 20 Uhr, wöchentliches Review
- Kosten: wenige Euro/Monat

### 4.4 Case 2: Outlook Ordnungsassistent

**Technische Details (aus README):**

- n8n auf Hetzner VPS (Docker), läuft alle 3 Stunden
- GPT-4o-mini über OpenAI API für E-Mail-Klassifizierung
- Microsoft Graph API via OAuth2 (Mails lesen + verschieben)
- Python-basierter Workflow-Generator (build_workflow.py): erzeugt n8n-Workflow aus Prompt-Template + Config
- 10 Zielordner mit klaren Zuordnungsregeln
- Gmail-Benachrichtigung bei Fehlern
- Architecture Decision Records (ADRs)
- Tägliche JSON-Logs
- Grundsatz: „Lieber eine Mail zu wenig einsortieren als eine falsche Mail unsichtbar machen"
- Tech-Stack: n8n, GPT-4o-mini, Microsoft Graph API, Python, Docker, Hetzner VPS

**Designentscheidungen (Vorschlag):**
- Bei Unsicherheit bleibt die Mail im Posteingang — sichtbar ist besser als falsch einsortiert.
- Der Workflow wird aus Prompt und Config generiert, nie direkt im n8n-Editor bearbeitet.
- Markierte Mails (To-do-Flagge) werden nicht angerührt — das System respektiert manuelle Entscheidungen.

**Zahlen (Stand 2026-05-26):**
- Seit ca. 4 Wochen produktiv, fehlerfrei
- Ca. 10-15 Mails/Tag
- Kosten: 1-3 EUR/Monat (OpenAI), VPS bereits vorhanden

### 4.5 Kontakt

- **Headline:** Klingt interessant? Dann lass uns reden.
- **Subtext:** Ich bin offen für Austausch — ob zu Automatisierung, Zusammenarbeit oder einer konkreten Idee. Am besten per Mail oder LinkedIn.
- **E-Mail:** meik.perlis@gmail.com (später meik@meikperlis.de)
- **LinkedIn:** linkedin.com/in/meik-perlis
- **Formular:** Formspree bleibt (Form-ID: meedrjoo)

---

## 5. Was rausfliegt

| Sektion | Grund |
|---|---|
| Trust Strip | Kein Mehrwert für Tech-Publikum |
| Workflow-Showcase / Live-Demo | Zu verspielt für ein Portfolio |
| Typische Zeitfresser | Handwerker-spezifisch |
| Schwerpunkte (6 Services) | Suggeriert ein Dienstleistungsangebot, das nicht existiert |
| Ablauf (Verstehen → Vereinfachen → Umsetzen) | Zu generisch |
| FAQ | Handwerker-Fragen, nicht Tech-Fragen |

---

## 6. Design

### Farbpalette: Midnight + Amber

```css
:root {
  --background: #0d1117;
  --background-soft: #161b22;
  --surface: rgba(255, 255, 255, 0.06);
  --surface-strong: rgba(255, 255, 255, 0.10);
  --text: #e6edf3;
  --muted: #8b949e;
  --line: rgba(255, 255, 255, 0.10);
  --primary: #d4860b;
  --primary-bright: #f0b644;
  --accent: #f0b644;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
}
```

### Designrichtung

- Dark Theme beibehalten, Farbpalette von Blau/Cyan auf Amber/Gold umstellen
- Glasmorphism-Effekte können bleiben (passen zum Dark Theme)
- Typografie (Inter) bleibt
- Hero-Visual: abstraktes SVG ersetzen durch stilisiertes Architekturdiagramm
- Architekturdiagramme pro Case: statische SVGs, visuell stark, Amber auf Dunkel
- Kein interaktives Klick-Spielzeug — statische, saubere Grafiken

---

## 7. Technisches

### Was bleibt

- Next.js (App Router), React, TypeScript
- Eigenes CSS (keine UI-Bibliothek)
- Formspree für Kontaktformular
- Vercel Deployment
- Keine Cookies, keine Analytics

### Was sich ändert

- `lib/site-data.ts` — komplett neu schreiben (neue Sektionen, neue Inhalte)
- `app/page.tsx` — neue Seitenstruktur
- `app/globals.css` — neue Farbpalette, Sektionen die rausfliegen löschen, neue Sektionen stylen
- `app/layout.tsx` — Metadaten aktualisieren (Titel, Description, Keywords, OG-Tags)
- `components/` — Hero-Visual, Workflow-Showcase, FAQ-Accordion werden ersetzt/gelöscht; neue Komponenten für Cases und Architekturdiagramme
- `components/brand-mark.tsx` — Logo/Branding anpassen (nicht mehr "WorldofWorkflow")
- Navigation — vereinfachen (Hero, Über mich, Projekte, Kontakt)
- Impressum/Datenschutz — prüfen und aktualisieren

### Neue Komponenten (voraussichtlich)

- `components/case-study-detail.tsx` — Case-Darstellung mit Diagramm, Stack, Entscheidungen, Zahlen
- `components/architecture-diagram.tsx` — SVG-Architekturdiagramme (oder pro Case eigene SVGs)
- `components/tech-tag.tsx` — Tech-Stack-Tags

---

## 8. Offene Punkte (nicht Teil dieses Umbaus)

| Thema | Status |
|---|---|
| Domain `meikperlis.de` kaufen | Ausstehend |
| E-Mail `meik@meikperlis.de` einrichten | Nach Domainkauf |
| GitHub-Repos öffentlich machen | Erfordert Credential-Prüfung der Git-History |
| Dritter Case | Kommt mit nächstem Projekt |
| Social Proof / Testimonials | Kommt mit ersten Kontakten |
| OG-Image für Social-Media-Vorschau | Kann nach Umbau erstellt werden |
| Zahlen auf der Seite aktuell halten | Regelmäßig manuell aktualisieren |

---

## 9. Reihenfolge der Umsetzung

1. **Farbpalette umstellen** — Design Tokens in globals.css
2. **site-data.ts neu schreiben** — alle Inhalte
3. **page.tsx umbauen** — neue Seitenstruktur
4. **Alte Komponenten entfernen** — Showcase, FAQ, etc.
5. **Neue Komponenten bauen** — Case-Study-Detail, Architekturdiagramme
6. **Hero-Visual ersetzen** — stilisiertes Systemdiagramm
7. **CSS anpassen** — alte Sektionen raus, neue Sektionen stylen
8. **Layout/Metadaten aktualisieren** — SEO, Titel, OG-Tags
9. **Navigation aktualisieren** — neue Struktur
10. **Impressum/Datenschutz prüfen**
11. **Testen** — responsiv, alle Sektionen, Kontaktformular
12. **Deploy**
