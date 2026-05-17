# Projektgedächtnis – WorldofWorkflow

## 1. Ziel des Projekts

Aufbau einer hochwertigen, modernen Website für **WorldofWorkflow – Inhaber: Meik Perlis** als persönliche Fachpräsenz rund um Automatisierung, digitale Workflows, KI-Agenten und Microsoft-Business-Umgebungen.

Die Seite soll Besucher zuerst aufklären und Vertrauen aufbauen, nicht aggressiv verkaufen. Hauptzielgruppe sind Selbstständige und KMU.

## 2. Wichtige Architektur- und Produktentscheidungen

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
- Kontaktformular aktuell bewusst ohne Backend, stattdessen `mailto:`-Weiterleitung
- Journal und Projekt-Cases sind zentrale Vertrauensbausteine
- Es gab zeitweise eine alternative, stärker private Version im separaten Ordner `Webseite-Privat`; aktiv ist wieder die ursprüngliche Portfolio-/Fachpräsenz-Variante

## 3. Was bereits umgesetzt ist

- Vollständige Startseite mit:
  - Hero-Bereich
  - Über-mich-Abschnitt mit Foto
  - Schwerpunkten / Leistungen
  - Nutzenbereich
  - Automatisierungs-Signalen
  - Prozessabschnitt
  - FAQ
  - Kontaktbereich
  - Footer
- Logo und Portraitbild integriert
- Mobile Navigation umgesetzt
- SEO-Grundlagen eingebaut
- Favicon aus Logo erstellt
- Live-Domain verbunden: `www.worldofworkflow.de`
- Branding überall angepasst auf: `WorldofWorkflow Inhaber: Meik Perlis`
- Inhaltlich ergänzt:
  - Fokus auf Microsoft 365 / SharePoint / OneDrive / Outlook / Exchange / Power Automate / Azure
  - Projekt-Case „private Bürokratie mit n8n“
  - Projekt-Case „vorsichtiger Outlook-Mail-Sortierer“
  - Journal-Beiträge:
    - Was lässt sich wirklich sinnvoll automatisieren?
    - Mein Experiment gegen private Bürokratie
    - Warum gute Automatisierung mit Verstehen beginnt
    - Sicherheit ist kein Zusatzmodul
- Journal-Beitrag zu Sicherheit enthält eigenen Abschnitt „Offizielle Quellen“
- Neue Projekt-Cases sind aktuell in `lib/site-data.ts` gepflegt

## 4. Aktueller technischer Stand

- Ursprünglicher Windows-Projektordner:
  - `C:\Users\meikp\Desktop\WorldofWorkflow\Webseite`
- Git-Repository:
  - `https://github.com/meikperlis/worldofworkflow-website.git`
- Aktiver Branch:
  - `main`
- Letzter bekannter Übergabe-Commit vom Windows-PC:
  - `d8b39b4 Add Outlook mail sorter project case`
- Deployment:
  - Vercel
- Domain:
  - bei STRATO
  - DNS eingerichtet
- Bekannte erfolgreiche Befehle:
  ```bash
  npm install
  npm run build
  npm run dev
  ```

## 5. Offene Punkte

- Impressum noch nicht final:
  - Geschäftsanschrift fehlt
  - ggf. weitere gesetzlich nötige Angaben ergänzen
- Datenschutzerklärung noch nicht final:
  - Hosting
  - Kontaktformular-Verarbeitung
  - Analyse-Tools
  - mögliche Drittanbieter final klären
- Kontaktformular technisch noch nicht echt angebunden:
  - derzeit nur `mailto:`
- Optional offen:
  - weitere echte Projekt-Cases ergänzen
  - ggf. Journal-Beitrag zum Outlook-Mail-Sortierer
  - falls gewünscht: dedizierte Projekt-Unterseiten statt nur Cases auf der Startseite

## 6. Nächste sinnvolle Schritte

1. Impressumsanschrift eintragen und Impressum finalisieren
2. Datenschutzerklärung anhand der tatsächlichen finalen Website-Funktionen fertigstellen
3. Entscheiden, ob das Kontaktformular:
   - bei `mailto:` bleibt
   - oder an ein echtes Backend / Formularsystem angebunden wird
4. Den Outlook-Mail-Sortierer bei Gelegenheit zu einem eigenen Journal-Beitrag ausbauen
5. Mit weiteren echten Projekten die Seite schrittweise von einer guten Präsenz zu einem belastbaren Portfolio entwickeln

## 7. Besondere Sicherheits- oder Betriebsdetails

### Website
- einfache, schlanke Architektur
- keine unnötigen Drittanbieter oder schweren externen Assets

### Kontaktformular
- aktuell kein eigener Server-Endpunkt
- dadurch derzeit keine serverseitige Verarbeitung personenbezogener Daten

### n8n-Projekt-Case
- selbstgehostete Umgebung bei Hetzner Nürnberg
- Ubuntu
- Docker
- Caddy
- Monitoring
- tägliche verschlüsselte Backups

### Outlook-Mail-Sortierer
- bewusst vorsichtige Architektur
- Dry-Run zuerst
- keine Löschungen
- keine Ordnerexplosion
- Device Code Flow
- kein Client Secret
- Schreibzugriffe nur kontrolliert
- Laufprotokolle vorhanden
- unklare Fälle bleiben lieber im Posteingang als falsch sortiert

### Sicherheitsverständnis
- zusätzlich über Journal-Beitrag sichtbar gemacht:
  - risikobasierter Ansatz
  - Updates
  - Berechtigungen
  - Backups
  - Wiederherstellung
  - Orientierung an offiziellen Quellen
