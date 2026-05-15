# WorldofWorkflow veröffentlichen

## Kurz gesagt

Die Website liegt lokal auf deinem Computer.  
Damit `www.worldofworkflow.de` im Internet sichtbar wird, brauchst du:

1. einen Ort, an dem die Website gehostet wird  
2. eine Verbindung zwischen deiner STRATO-Domain und diesem Hosting

Für dieses Projekt ist **Vercel** der einfachste Weg.

## Schritt 1: Projekt zu GitHub hochladen

1. Ein GitHub-Konto erstellen, falls noch nicht vorhanden.
2. Ein neues Repository anlegen, zum Beispiel `worldofworkflow-website`.
3. Den Inhalt dieses Projektordners dorthin hochladen.

## Schritt 2: Website bei Vercel anlegen

1. Bei Vercel anmelden.
2. `Add New Project` wählen.
3. Das GitHub-Repository importieren.
4. Vercel erkennt Next.js automatisch.
5. `Deploy` klicken.

Danach bekommst du zuerst eine vorläufige Adresse wie:

`dein-projekt.vercel.app`

## Schritt 3: Eigene Domain in Vercel hinzufügen

1. In Vercel dein Projekt öffnen.
2. `Settings` → `Domains`.
3. `www.worldofworkflow.de` hinzufügen.
4. Zusätzlich `worldofworkflow.de` hinzufügen und auf `www.worldofworkflow.de` weiterleiten.

Vercel zeigt dir danach exakt an, welche DNS-Einträge du bei STRATO setzen musst.

## Schritt 4: DNS bei STRATO setzen

Im STRATO Kunden-Login:

1. Domainverwaltung öffnen.
2. `worldofworkflow.de` auswählen.
3. Zu den DNS-Einstellungen gehen.
4. Die von Vercel angezeigten Werte eintragen.

Typischerweise gilt:

- `www` bekommt einen **CNAME**
- die Hauptdomain `worldofworkflow.de` bekommt einen **A-Record**

Wichtig: Immer die Werte nehmen, die Vercel dir im Projekt anzeigt.

## Schritt 5: Warten und prüfen

DNS-Änderungen brauchen manchmal etwas Zeit.  
Sobald Vercel die Domain als korrekt konfiguriert anzeigt, sollte die Website unter

`https://www.worldofworkflow.de`

erreichbar sein.

## Noch vor dem echten Livegang prüfen

- Impressum / Datenschutz finalisieren
- Kontaktformular testen
- mobile Ansicht prüfen
- Texte ein letztes Mal lesen
- Domain-Weiterleitung von `worldofworkflow.de` auf `www.worldofworkflow.de` testen
