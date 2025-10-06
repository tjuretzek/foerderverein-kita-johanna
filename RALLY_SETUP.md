# Alfhausen Rallye System

## Übersicht

Die Alfhausen Rallye am 12.10. besteht aus 17 Stationen, die über QR-Codes erreichbar sind. Teilnehmer scannen die QR-Codes an den jeweiligen Standorten, beantworten eine Frage und ihre Antwort wird mit Zeitstempel in der Datenbank gespeichert.

## System-Architektur

### Zentrale Datenverwaltung

Alle Stationsdaten befinden sich in einer einzigen Datei: `src/data/rallyStations.ts`

Diese Datei enthält alle Informationen für alle Stationen:

- Stationsnummer
- Name der Station
- URL-Slug
- Bildpfad
- Textblöcke mit Styling
- Frage
- Erwartete Antwort (optional, für Dokumentation)

### Dynamisches Routing

Das System verwendet Next.js Dynamic Routes (`/rallye/[slug]`), was bedeutet:

- **Einfache URLs**: `/rallye/1-kita-und-familienzentrum-johanna`
- **Automatische 404-Seite**: Wenn jemand eine nicht existierende Station aufruft
- **Zentrale Verwaltung**: Alle Stationen werden aus einer Datenquelle generiert

## Stationen

1. **Kita und Familienzentrum Johanna** - `/rallye/1-kita-und-familienzentrum-johanna`
2. **Markthalle** - `/rallye/2-markthalle`
3. **Kirch-Hof an der St. Johannis Kirche** - `/rallye/3-kirch-hof-an-der-st-johannis-kirche`
4. **Feuerwehr** - `/rallye/4-feuerwehr`
5. **Heimathaus** - `/rallye/5-heimathaus`
6. **Ehrenmal am Friedhof** - `/rallye/6-ehrenmal-am-friedhof`
7. **Alte Schmiede Schmiesing** - `/rallye/7-alte-schmiede`
8. **Klause beim Hof Bohmann** - `/rallye/8-klause-beim-hof-bohmann`
9. **Großer Stuhl** - `/rallye/9-grosser-stuhl`
10. **Alte Mühle am Friesenweg** - `/rallye/10-alte-muehle-am-friesenweg`
11. **Grotte am Altenheim** - `/rallye/11-grotte-am-altenheim`
12. **Polizei** - `/rallye/12-polizei`
13. **Malteser Hilfsdienst** - `/rallye/13-malteser`
14. **Rathaus** - `/rallye/14-rathaus`
15. **Grundschule** - `/rallye/15-grundschule`
16. **Wäldchen am alten Bahnhof** - `/rallye/16-waeldchen-am-alten-bahnhof`
17. **Skateanlage am Sportplatz** - `/rallye/17-skateanlage-am-sportplatz`

## Datenbank-Konfiguration

1. Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis mit Ihrer Neon-Datenbank-URL:

```env
DATABASE_URL=your_neon_database_url_here
```

2. Die Datenbank-Tabellen werden automatisch beim ersten API-Request erstellt.

## Funktionen

### Benutzererfahrung

- Benutzer geben ihren Namen einmal ein, der im localStorage gespeichert wird
- Jede Station hat eine spezifische Frage mit Kurzantwort
- Benutzer können dieselbe Station nicht mehrmals absenden
- Automatische Validierung und Fehlerbehandlung
- 404-Seite bei ungültigen URLs

### Datenspeicherung

- Benutzernamen werden in der `rally_users` Tabelle gespeichert
- Check-ins mit Antworten und Zeitstempeln in der `rally_checkins` Tabelle
- Alle Daten werden in Ihrer Neon-Datenbank gespeichert

### Admin-Übersicht

- Alle Teilnehmer und ihre Check-ins anzeigen unter `/rallye/overview`
- Zeitstempel und Antworten für jede Station
- Statistik-Dashboard mit Gesamtteilnehmern und Abschlussraten

## QR-Codes generieren

Generieren Sie QR-Codes für jede Station, die auf die jeweilige URL verweisen:

- `https://ihre-domain.de/rallye/1-kita-und-familienzentrum-johanna`
- `https://ihre-domain.de/rallye/2-markthalle`
- usw.

Platzieren Sie die QR-Codes an den physischen Standorten.

## Neue Station hinzufügen

Um eine neue Station hinzuzufügen, bearbeiten Sie einfach die Datei `src/data/rallyStations.ts`:

```typescript
{
  number: 18,
  name: 'Neue Station',
  slug: '18-neue-station',
  imagePath: '/images/rallye/18-neue-station.jpg',
  textBlocks: [
    { text: 'Willkommen...' },
    { text: 'Hinweistext...', className: 'text-gray-600' },
  ],
  question: 'Ihre Frage?',
  expectedAnswer: 'Erwartete Antwort',
}
```

Das System erstellt automatisch die Route, integriert die Station in die Overview und kümmert sich um alle anderen Details.

## API-Endpunkte

- `POST /api/rally/checkin` - Check-in mit Name, pageId und Antwort absenden
- `GET /api/rally/users` - Alle Benutzer mit ihren Check-ins abrufen (für Übersichtsseite)

## Erwartete Antworten

Die Antworten werden als Freitext gespeichert. Die erwarteten Antworten sind in der `rallyStations.ts` Datei dokumentiert:

- **Station 3**: 1796
- **Station 4**: Retten – Bergen – Löschen – Schützen
- **Station 7**: Maria und Martin Schmiesing
- **Station 8**: Rot, beige
- **Station 10**: Huhn, Schwein, Katze, Hund, Kuh, Hase
- **Station 13**: Jeden 2. Dienstag, Mittwochs 14-tägig
- **Station 16**: 9
- **Station 17**: Rollschuhe/Inline-Skates, Roller, Scooter, Skateboard, Fahrrad

## Vorteile des Systems

1. **Zentrale Datenhaltung**: Alle Stationsdaten an einem Ort
2. **Einfache Wartung**: Änderungen nur in einer Datei notwendig
3. **Automatische Generierung**: Routen und Pages werden automatisch erstellt
4. **Fehlerbehandlung**: Automatische 404-Seite für ungültige Stationen
5. **Konsistenz**: Alle Stationen haben identisches Layout
6. **Skalierbar**: Beliebig viele Stationen können hinzugefügt werden
