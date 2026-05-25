# WorldofWorkflow

Website von Meik Perlis — Digitale Abläufe für Handwerksbetriebe in Nürnberg und der Metropolregion.

Live: [www.worldofworkflow.de](https://www.worldofworkflow.de)

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Eigenes CSS, keine UI-Bibliothek
- Hosting: Vercel (Auto-Deploy aus `main`)

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build prüfen
npm run lint       # ESLint
```

## Seitenaufbau

Die gesamte Startseite lebt in `app/page.tsx`:

> Hero → Trust Strip → Workflow-Showcase → Typische Zeitfresser → Über mich → Schwerpunkte → Ablauf → Projekt-Cases → FAQ → Kontakt

Alle Seiteninhalte (Texte, Listen, Cards) sind in `lib/site-data.ts` zentralisiert — dort anfangen, wenn Inhalte geändert werden sollen.

## Kontaktformular

Formularversand läuft über [Formspree](https://formspree.io) (kein eigenes Backend).  
Form-ID: `meedrjoo` — direkt in `components/contact-form.tsx` hinterlegt (kein Secret, öffentliche Formspree-IDs sind unproblematisch).

## Weitere Seiten

- `/impressum` — Impressum (§ 5 TMG) inkl. Zweiter-Kontaktweg-Popup
- `/datenschutz` — Datenschutzerklärung (DSGVO)

Projektgedächtnis und Arbeitshinweise für Claude Code: `CLAUDE.md`
