# Meik Perlis — Persönliches Tech-Portfolio

Live: [www.worldofworkflow.de](https://www.worldofworkflow.de)

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Eigenes CSS (Midnight+Amber Dark Theme), keine UI-Bibliothek
- Hosting: Vercel (Auto-Deploy aus `main`)
- Keine Cookies, keine Analytics

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build prüfen
```

## Seitenaufbau

Die gesamte Startseite lebt in `app/page.tsx`:

> Hero → Über mich → Projekt-Cases (2 Cases) → Kontakt

Strukturierte Daten (Navigation, Cases, Kontaktdaten) sind in `lib/site-data.ts` zentralisiert. Fließtexte stehen direkt in `page.tsx`.

## Kontaktformular

Formularversand läuft über [Formspree](https://formspree.io) (kein eigenes Backend).
Form-ID: `meedrjoo` — direkt in `components/contact-form.tsx` hinterlegt.

## Weitere Seiten

- `/impressum` — Impressum (§ 5 TMG)
- `/datenschutz` — Datenschutzerklärung (DSGVO)

## Projektgedächtnis

Arbeitshinweise für Claude Code: `CLAUDE.md`
