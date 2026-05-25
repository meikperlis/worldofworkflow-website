# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## ⚠️ Pflichtlektüre vor dem Start

- Diese Datei ist die **einzige autoritative Informationsquelle** für diesen Projektordner
- Fange keine Aufgabe an, die nicht explizit besprochen ist
- Bei Unklarheiten: fragen — nicht eigenständig interpretieren
- Lösche nie Dateien ohne ausdrückliche Bestätigung

---

## Projekt-Überblick

**WorldofWorkflow** — Website von Meik Perlis.  
Live: [www.worldofworkflow.de](https://www.worldofworkflow.de) · GitHub: `meikperlis/worldofworkflow-website` · Deployment: Vercel (Auto-Deploy aus `main`)

### Positionierung
- **Zielgruppe:** Handwerksbetriebe in Nürnberg und der Metropolregion — ausschließlich
- **Positionierungssatz:** *„Ich baue digitale Abläufe für Handwerksbetriebe — damit weniger Zeit in Papierkram steckt und mehr in echte Arbeit."*
- **Rolle:** Meik als Freelancer / Dienstleister — kein Blogger, kein Berater
- Kein Tech-Jargon, keine KI-Buzzwords — Handwerker denken in Problemen, nicht in Tools

---

## Stack & Architektur

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**
- Eigenes CSS — keine UI-Bibliothek
- Kontaktformular via **Formspree** (Form-ID: `meedrjoo`, in `contact-form.tsx`)
- Keine Cookies, keine Analytics
- Scroll-Reveal läuft per **CSS `animation-timeline: view()`** — kein JavaScript nötig

### Verzeichnisstruktur

```
app/
  page.tsx              # Startseite (alle Sektionen)
  layout.tsx            # Root-Layout, SEO-Metadaten
  globals.css           # Globale Styles (18 Abschnitt-Kommentare)
  impressum/            # Impressum (§ 5 TMG)
  datenschutz/          # Datenschutzerklärung (DSGVO)
  not-found.tsx         # 404-Seite
  error.tsx             # Error-Boundary
components/
  header.tsx            # Navigation inkl. Mobile-Menü
  footer.tsx
  hero-visual.tsx       # Animiertes SVG im Hero
  contact-form.tsx      # Formspree-Formular (AJAX, kein Redirect)
  workflow-showcase.tsx # Interaktiver Kassenbon-Demo (hover/tap, steps via Props)
  faq-accordion.tsx     # Accordion mit CSS-Grid-Höhenanimation
  zweiter-kontaktweg-link.tsx  # Popup für Impressum-Pflichtfeld
  section-heading.tsx   # Wiederverwendbare Abschnittsüberschrift
  brand-mark.tsx        # Logo-Komponente
lib/
  site-data.ts          # Single Source of Truth für alle Seiteninhalte + Typen
public/                 # Assets (Logo, Portraitbild)
```

### Seitenaufbau (`app/page.tsx`)

Hero → Trust Strip → Workflow-Showcase → Typische Zeitfresser → Über mich → Schwerpunkte → Ablauf → Projekt-Cases → FAQ → Kontakt

### `lib/site-data.ts` — Inhaltsprinzip

**Alle Seiteninhalte leben hier.** Interfaces und typisierte Arrays:

| Export | Typ | Verwendung |
|---|---|---|
| `navigation` | `NavItem[]` | Header |
| `services` | `Service[]` | Schwerpunkte-Sektion |
| `caseStudies` | `CaseStudy[]` | Projekt-Cases |
| `currentFocus` | `FocusItem[]` | Typische Zeitfresser |
| `processSteps` | `ProcessStep[]` | Ablauf-Sektion |
| `faqItems` | `FaqItem[]` | FAQ-Accordion |
| `showcaseSteps` | `ShowcaseStep[]` | Workflow-Showcase |

Texte immer hier ändern — nie direkt in Komponenten.

---

## Befehle

```bash
npm run dev      # Lokaler Dev-Server → http://localhost:3000
npm run build    # Produktions-Build (TypeScript-Check inklusive)
npm run lint     # ESLint
```

---

## Commit-Konvention

**Atomic Commits** — ein Commit, eine abgeschlossene Änderung. Nicht einen Commit pro Arbeitsschritt, sondern erst fertigstellen, dann committen.

---

## Offene To-Dos

| Priorität | Aufgabe |
|---|---|
| 🟢 Later | Erste Kundenstimmen / Social Proof ergänzen |
| 🟢 Later | Konkretes Angebotspaket definieren und sichtbar machen |
| 🟢 Later | OG-Image für Social-Media-Vorschau |

---

## Inhaltliche Leitlinie

| Schmerzpunkt Handwerk | Workflow-Ansatz |
|---|---|
| Kassenbon liegt irgendwo | Foto per Telegram → KI → Tabelleneintrag |
| Kundenanfragen gehen unter | Automatische Sortierung & Priorisierung |
| Stundenzettel werden vergessen | Erfassung per Nachricht |
| Angebote tippen kostet Zeit | Vorlage automatisch befüllen |
| Fotos von der Baustelle versanden | Foto schicken → automatisch archiviert |

Sprache immer aus Perspektive des Problems, nie aus Perspektive des Tools.
