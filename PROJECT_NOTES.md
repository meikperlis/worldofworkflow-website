# Projektgedächtnis – WorldofWorkflow

## 1. Ziel des Projekts

Aufbau einer hochwertigen, modernen Website für **WorldofWorkflow – Inhaber: Meik Perlis** als persönliche Fachpräsenz rund um Automatisierung, digitale Workflows, KI-Agenten und Microsoft-Business-Umgebungen.

Die Seite soll Besucher zuerst aufklären und Vertrauen aufbauen, nicht aggressiv verkaufen. Hauptzielgruppe sind Selbstständige und KMU.

## 2. Architektur- und Produktentscheidungen

- Responsive Next.js-Website mit Startseite und ergänzenden Unterseiten für Journal, Impressum und Datenschutz
- Schlanker Stack:
  - Next.js 16
  - React 19
  - TypeScript
  - eigenes CSS statt schwerer UI- oder Animationsbibliotheken
- Designrichtung:
  - dunkler, hochwertiger SaaS-/Tech-Look
  - viel Weißraum
  - dezente Animationen
  - persönlicher, seriöser Ton statt generischer Agentursprache
- Positionierung:
  - persönlicher Experte
  - praxisnah
  - verständlich
  - nicht unnötig technisch
- Kontaktformular bewusst ohne Backend, stattdessen `mailto:`-Weiterleitung
- Journal und Projekt-Cases sind zentrale Vertrauensbausteine

## 3. Umgesetzt

- Vollständige Startseite mit Hero, Über mich, Schwerpunkte, Nutzen, Signals, Prozess, FAQ, Kontakt, Footer
- Logo und Portraitbild integriert
- Mobile Navigation
- SEO-Grundlagen, Favicon aus Logo
- Live-Domain verbunden: `www.worldofworkflow.de`
- Branding überall angepasst auf: `WorldofWorkflow Inhaber: Meik Perlis`
- Inhaltliche Schwerpunkte: Microsoft 365 / SharePoint / OneDrive / Outlook / Exchange / Power Automate / Azure
- Projekt-Cases: „private Bürokratie mit n8n" (ArchivBot) und „vorsichtiger Outlook-Mail-Sortierer"
- Journal-Beiträge: Was lässt sich sinnvoll automatisieren / Experiment gegen private Bürokratie / Warum gute Automatisierung mit Verstehen beginnt / Sicherheit ist kein Zusatzmodul
- Datenschutzerklärung gemäß DSGVO (Vercel-Hosting, mailto-Formular, keine Cookies, keine Analytics)
- Impressum-Struktur mit allen Pflichtfeldern, Geschäftsanschrift als Platzhalter
- Strukturierte Grundordnung im Projektordner

## 4. Technischer Stand

- Git-Repository: `https://github.com/meikperlis/worldofworkflow-website.git`
- Branch: `main`
- Deployment: Vercel (Auto-Deploy aus `main`)
- Domain: STRATO → Vercel DNS eingerichtet
- Wiederholbare Befehle:
  ```bash
  npm install
  npm run build
  npm run dev
  ```

## 5. Offene Punkte vor Livegang

- **Impressum**: Geschäftsanschrift, ggf. USt-IdNr., Verantwortlicher nach § 18 MStV — Adresse muss von Meik geliefert werden.
- **Offline-Flag**: `siteTemporarilyOffline` in `app/layout.tsx` Zeile 5 muss nach Impressum-Finalisierung auf `false` gesetzt werden.
- **Optional**: dedizierter Journal-Beitrag zum Outlook-Mail-Sortierer.
- **Optional**: dedizierte Projekt-Unterseiten statt nur Cases auf der Startseite.
- **Optional**: OG-Image für Social-Media-Vorschau.
- **Optional**: Error-Pages `app/not-found.tsx` und `app/error.tsx`.

## 6. Betriebs- und Sicherheitsdetails

### Website
- einfache, schlanke Architektur ohne unnötige Drittanbieter
- TLS via Vercel
- keine serverseitige Verarbeitung personenbezogener Daten über das Kontaktformular (mailto-only)

### n8n-Projekt-Case (ArchivBot)
- selbstgehostet auf Hetzner Nürnberg (Ubuntu, Docker, Caddy)
- Monitoring und tägliche verschlüsselte Backups

### Outlook-Mail-Sortierer
- bewusst vorsichtige Architektur
- Dry-Run zuerst, keine Löschungen, keine Ordnerexplosion
- Device Code Flow ohne Client Secret
- unklare Fälle bleiben im Posteingang
