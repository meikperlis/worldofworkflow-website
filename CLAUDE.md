# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Pflichtlektüre vor dem Start

- Diese Datei ist die **einzige autoritative Informationsquelle** für diesen Projektordner
- Fange keine Aufgabe an, die nicht explizit besprochen ist
- Bei Unklarheiten: fragen — nicht eigenständig interpretieren
- Lösche nie Dateien ohne ausdrückliche Bestätigung

---

## Projekt-Überblick

**Meik Perlis** — Persönliches Tech-Portfolio.  
Live: [www.worldofworkflow.de](https://www.worldofworkflow.de) (Ziel-Domain: meikperlis.de) · GitHub: `meikperlis/worldofworkflow-website` · Deployment: Vercel (Auto-Deploy aus `main`)

### Positionierung
- **Zweck:** Persönliches Tech-Portfolio, kein Dienstleister-Auftritt
- **Zielgruppe:** Tech-Entscheider (Hiring Manager, Teamleads)
- **Positionierung:** Workflow/Automatisierungs-Spezialist mit KI, branchenübergreifend
- **Ton:** Direkt, ehrlich, Ich-Perspektive, keine Buzzwords, kein Corporate-Sprech
- **Sprache:** Deutsch
- **Differenzierung:** Kommt aus den Prozessen (nicht aus der Technik), baut auf Deutsch, Systeme laufen produktiv

---

## Stack & Architektur

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**
- Eigenes CSS (Midnight+Amber Dark Theme) — keine UI-Bibliothek
- Kontaktformular via **Formspree** (Form-ID: `meedrjoo`, in `contact-form.tsx`)
- Keine Cookies, keine Analytics
- Scroll-Reveal per **CSS `animation-timeline: view()`** — kein JavaScript nötig

### Verzeichnisstruktur

```
app/
  page.tsx              # Startseite (alle Sektionen)
  layout.tsx            # Root-Layout, SEO-Metadaten
  globals.css           # Globale Styles
  impressum/            # Impressum (§ 5 TMG)
  datenschutz/          # Datenschutzerklärung (DSGVO)
  not-found.tsx         # 404-Seite
  error.tsx             # Error-Boundary
components/
  header.tsx            # Navigation inkl. Mobile-Menü (Textlogo "Meik Perlis")
  footer.tsx
  hero-visual.tsx       # SVG-Architekturdiagramm (ArchivBot-Datenfluss)
  contact-form.tsx      # Formspree-Formular (AJAX, kein Redirect)
  case-study-detail.tsx # Case-Darstellung mit Problem, Stack, Entscheidungen, Zahlen
  tech-tag.tsx          # Tech-Stack-Tag (Pill)
lib/
  site-data.ts          # Single Source of Truth für alle Seiteninhalte + Typen
public/                 # Assets (Portraitbild)
docs/
  KONTEXT-MEIK.md       # Hintergrund zur Person (nicht für die Seite)
```

### Seitenaufbau (`app/page.tsx`)

Hero → Über mich → Projekt-Cases (2 Cases) → Kontakt

### `lib/site-data.ts` — Inhaltsprinzip

**Strukturierte Daten leben hier.** Interfaces und typisierte Arrays:

| Export | Typ | Verwendung |
|---|---|---|
| `contact` | `{ email, linkedinUrl, linkedinLabel }` | Kontaktsektion, Footer, Formular-Fallback |
| `navigation` | `NavItem[]` | Header + Footer |
| `caseStudies` | `CaseStudy[]` | Projekt-Cases |

Fließtexte (Hero, Über mich, Kontakt) stehen direkt in `page.tsx`.

---

## Befehle

```bash
npm run dev      # Lokaler Dev-Server → http://localhost:3000
npm run build    # Produktions-Build (TypeScript-Check inklusive)
```

---

## Commit-Konvention

**Atomic Commits** — ein Commit, eine abgeschlossene Änderung. Nicht einen Commit pro Arbeitsschritt, sondern erst fertigstellen, dann committen.

---

## Offene To-Dos

| Priorität | Aufgabe |
|---|---|
| Ausstehend | Domain `meikperlis.de` kaufen |
| Ausstehend | E-Mail `meik@meikperlis.de` einrichten |
| Ausstehend | GitHub-Repos öffentlich machen (Credential-Prüfung nötig) |
| Later | Dritter Case (kommt mit nächstem Projekt) |
| Later | Social Proof / Testimonials |
| Later | OG-Image für Social-Media-Vorschau |
| Later | Zahlen auf der Seite aktuell halten |
