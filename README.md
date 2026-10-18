# LOOOP

Sobere digital signage voor kleine organisaties. Hier ingericht voor de Vlaamse Vaarschool.

Eigen digital signage voor maximaal 3 schermen en 2 beheerders. Geen server, geen abonnement: alles staat als gewone bestanden op GitHub Pages.

| Bestand | Wat |
|---|---|
| `index.html` | De **speler**. Deze link open je op de TV. |
| `admin.html` | Het **beheer**: playlists, schema en slides. |
| `config.js` | De instellingen die het beheer schrijft en de speler leest. |
| `signage-core.js` | Gedeelde logica: welke playlist speelt wanneer. |
| `*.html` | De slides zelf. |
| `thumbs/` | Voorbeeldbeeldjes van de slides voor het beheer. |

## Hoe het werkt
1. In het beheer pas je playlists, schema of slides aan. Dat is eerst een concept.
2. **Publiceren** schrijft `config.js` naar GitHub.
3. De speler kijkt elke minuut of `config.js` veranderd is en neemt de wijziging over bij de volgende slide (meestal binnen enkele minuten, door de cache van GitHub Pages).

Schema: de standaardplaylist speelt altijd, tenzij een regel geldt. Bij overlap wint de bovenste regel. Een venster als 19:00 – 07:00 loopt over middernacht.

## Meerdere schermen
In het beheer (tandwiel → Schermen) voeg je tot 3 schermen toe. Slides en playlists zijn gedeeld; elk scherm heeft een eigen standaardplaylist en schema. Op elke TV open je de eigen link: `index.html` voor het eerste scherm, `index.html?scherm=<id>` voor de andere ("Link kopiëren" in het beheer).

## Lokaal testen
Open `index.html` (speler) en `admin.html` (beheer) in Chrome vanaf je computer. Wijzigingen in het beheer verschijnen binnen een minuut in de speler op dezelfde computer, zonder te publiceren.

## Speler testen
- `index.html?label=1`: toont welke playlist speelt
- `index.html?playlist=avond`: speelt één playlist
- `index.html?nu=2026-10-19T20:00`: doet alsof het dat tijdstip is

De speler laadt de volgende slide vooraf, wisselt met een zachte overgang, blijft spelen zonder internet en herstart zichzelf elke nacht om 04:00.
