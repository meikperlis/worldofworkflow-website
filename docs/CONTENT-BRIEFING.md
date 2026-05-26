# Content-Briefing: meikperlis.de

> Fertige und vorbereitete Texte für den Website-Umbau.
> Alle Texte sind in der Ich-Perspektive, auf Deutsch, ohne Buzzwords.

---

## Hero

**Eyebrow:**
Automatisierung mit KI — aus Nürnberg, auf Deutsch

**Headline:**
Prozesse durchdenken. Dann automatisieren.

**Subtext:**
Ich habe jahrelang kaufmännische Abläufe abgearbeitet — dieselben Aufgaben, immer wieder, von Hand. Heute baue ich die Systeme, die das übernehmen. Zwei davon laufen produktiv.

**CTA primär:**
Projekte ansehen → scrollt zu #cases

**CTA sekundär (optional):**
Kontakt → scrollt zu #contact

---

## Über mich

**Eyebrow:**
Über mich

**Headline:**
Aus der Sachbearbeitung in die Automatisierung.

**Text:**

Mein Name ist Meik Perlis. Ich lebe in der Metropolregion Nürnberg und komme aus der kaufmännischen Arbeit — Sachbearbeitung, Projektkoordination, Order Handling, quer durch Industrie, Automotive, Bildung und Dienstleistung.

Überall dasselbe Muster: Dieselbe Rechnung wird dreimal angefasst, weil niemand weiß, wo sie liegt. Dieselbe Anfrage wird unterschiedlich bearbeitet, je nachdem wer gerade dran ist. Verantwortungsvolle Arbeit, die unnötig Energie kostet, weil sie nicht systematisiert ist.

Irgendwann habe ich angefangen, das zu ändern. Erst für mich selbst, dann systematisch. Heute baue ich KI-gestützte Automatisierungen — auf Deutsch, in einem Feld, das fast ausschließlich auf Englisch stattfindet.

Ich suche nach Umgebungen, in denen diese Denkweise gebraucht wird.

**Portrait:** `/public/images/meik-perlis.jpeg` (bereits vorhanden)

---

## Case 1: Haushaltsarchiv (ArchivBot)

**Titel:**
Dokument schicken — archiviert.

**Einzeiler:**
Ein KI-gestütztes Archivsystem, das Belege, Rechnungen und Amtsschreiben automatisch erkennt, klassifiziert und ablegt — per Telegram-Foto oder E-Mail-Weiterleitung.

**Problem:**
Kassenbons, Rechnungen, Amtsschreiben — alles landet irgendwo. In der Tasche, im Posteingang, auf dem Schreibtisch. Wer es braucht, sucht. Wer es nicht sofort ablegt, vergisst es. Ich wollte ein System, dem ich ein Foto schicke und das den Rest erledigt.

**Tech-Stack Tags:**
n8n · GPT-4o (Vision) · Google Drive API · Google Sheets API · Telegram Bot API · Gmail API · Hetzner VPS · Docker · JavaScript

**Designentscheidungen:**
- Workflows werden generiert, nie von Hand editiert — ein Generatorskript erzeugt den n8n-Workflow aus Prompt und Config.
- Bei Unsicherheit fragt das System per Telegram nach, statt still falsch einzusortieren.
- Vision-API und PDF-Textextraktion als zwei getrennte Pfade — je nach Eingangsformat wird der optimale Weg gewählt.

**Zahlen (Stand Mai 2026, regelmäßig aktualisieren):**
- Seit ca. 4 Wochen produktiv, fehlerfrei
- Mind. 1 Dokument/Tag (Telegram), ca. 10 Mails/Tag
- Tägliche Logs um 20 Uhr, wöchentliches Review und Nachjustierung
- Kosten: wenige Euro/Monat
- 9 Dokumenttypen werden automatisch unterschieden

**Architekturdiagramm (zu erstellen als SVG):**

```
Eingang                    Verarbeitung                    Ablage
─────────────────────────────────────────────────────────────────────

Telegram ─── Foto ──┐
                     ├──→ n8n Workflow ──→ GPT-4o ──→ Google Drive
E-Mail ─── PDF/Bild ─┘     (generiert)    (Vision)    (Typ → Absender → Vorgang)
                                │                           │
                                ▼                           ▼
                         Bei Unsicherheit            Google Sheets
                         → Rückfrage per               (Cockpit)
                           Telegram
```

**GitHub-Link:** Noch nicht öffentlich — Platzhalter vorsehen.

**Quellcode-Referenz für Diagramm-Details:**
- Telegram-Workflow: `/Users/meikperlis/Projekte/n8n-haushaltsarchiv/n8n/scripts/generate_telegram_workflow.mjs`
- Mail-Workflow: `/Users/meikperlis/Projekte/n8n-haushaltsarchiv/n8n/scripts/generate_mail_workflow.mjs`
- Klassifikations-Prompt: `/Users/meikperlis/Projekte/n8n-haushaltsarchiv/prompts/classification.txt`

---

## Case 2: Outlook Ordnungsassistent

**Titel:**
Ein Postfach, das sich selbst aufräumt.

**Einzeiler:**
Eine KI, die alle 3 Stunden den Posteingang prüft, jede Mail bewertet und alles, was keine Aufmerksamkeit braucht, in den richtigen Ordner verschiebt.

**Problem:**
10-15 Mails am Tag, die meisten brauchen keine Reaktion — Newsletter, Bestätigungen, Benachrichtigungen. Aber sie verstopfen den Posteingang und machen die wichtigen Mails unsichtbar. Ich wollte ein System, das aufräumt, ohne dass etwas verloren geht.

**Tech-Stack Tags:**
n8n · GPT-4o-mini · Microsoft Graph API · Python · Docker · Hetzner VPS

**Designentscheidungen:**
- Bei Unsicherheit bleibt die Mail im Posteingang — sichtbar ist besser als falsch einsortiert.
- Der Workflow wird aus Prompt und Config generiert (Python-Skript), nie direkt im n8n-Editor bearbeitet.
- Markierte Mails (To-do-Flagge) werden nicht angerührt — das System respektiert manuelle Entscheidungen.

**Zahlen (Stand Mai 2026, regelmäßig aktualisieren):**
- Seit ca. 4 Wochen produktiv, fehlerfrei
- Ca. 10-15 Mails/Tag klassifiziert
- 10 Zielordner
- Kosten: 1-3 EUR/Monat (OpenAI API)
- Läuft automatisch alle 3 Stunden in der Cloud
- Tägliche JSON-Logs, Fehlerbenachrichtigung per E-Mail

**Architekturdiagramm (zu erstellen als SVG):**

```
Alle 3 Stunden
      │
      ▼
Outlook (Graph API) ──→ n8n Workflow ──→ GPT-4o-mini
 Posteingang lesen        (generiert)     Klassifizierung
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
             Aufmerksamkeit?           Kein Handlungsbedarf
                    │                       │
                    ▼                       ▼
             Bleibt im              Wird in Zielordner
             Posteingang            verschoben (1 von 10)
```

**GitHub-Link:** Noch nicht öffentlich — Platzhalter vorsehen.

**Quellcode-Referenz:**
- Projekt: `/Users/meikperlis/Projekte/Outlook Ordnungsassistent_v2/`
- README mit vollständiger Dokumentation: `README.md`
- Prompt: `prompt.md`
- Workflow-Generator: `build_workflow.py`
- Architektur-Entscheidungen: `docs/adr/`

---

## Kontakt

**Eyebrow:**
Kontakt

**Headline:**
Klingt interessant? Dann lass uns reden.

**Subtext:**
Ich bin offen für Austausch — ob zu Automatisierung, Zusammenarbeit oder einer konkreten Idee. Am besten per Mail oder LinkedIn.

**E-Mail:** meik.perlis@gmail.com
**LinkedIn:** https://www.linkedin.com/in/meik-perlis/
**Formular:** Formspree (Form-ID: meedrjoo)

---

## Navigation

```
Meik Perlis          Über mich    Projekte    Kontakt
```

- „Meik Perlis" als Textlogo (kein separates Logo nötig, ersetzt BrandMark)
- „Über mich" → #about
- „Projekte" → #cases
- „Kontakt" → #contact

---

## Metadaten (layout.tsx)

**Title:** Meik Perlis — Automatisierung mit KI
**Description:** Ich baue KI-gestützte Automatisierungen für kaufmännische Prozesse. Zwei produktive Systeme, realer Einsatz, auf Deutsch.
**Keywords:** Automatisierung, KI, Workflows, n8n, Nürnberg, Meik Perlis, GPT, Prozessautomatisierung
**OG Title:** Meik Perlis — Automatisierung mit KI
**OG Description:** KI-gestützte Automatisierungen für kaufmännische Prozesse. Produktive Systeme, realer Einsatz.
**OG Type:** website
**OG Locale:** de_DE
**Canonical:** https://www.meikperlis.de/ (nach Domainkauf, bis dahin worldofworkflow.de)

---

## Impressum / Datenschutz

Müssen geprüft und aktualisiert werden:
- Name und Kontaktdaten prüfen
- Wenn Domain wechselt: URLs aktualisieren
- Formspree bleibt — Datenschutzhinweis für Formularverarbeitung bleibt relevant
- Keine Cookies, keine Analytics — das vereinfacht die Datenschutzerklärung
