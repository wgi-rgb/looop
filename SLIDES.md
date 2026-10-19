# Nieuwe VVS-slide maken

Werkwijze om een nieuwe slide te maken voor het VVS-scherm. Doel: elke nieuwe slide ziet eruit alsof hij altijd al bij de reeks hoorde.
Dit document is bedoeld voor Claude: in een nieuw gesprek volstaat "maak een slide zoals webcam.html, maar voor …".

## 1. Vertrek altijd van een bestaande slide

Kopieer de slide die het dichtst bij de nieuwe ligt en vervang alleen het hoofddeel rechts. Bouw nooit van nul: kop, linkerkolom, ticker en het gedeelde kader moeten identiek blijven.

| Bestand | Hoofddeel rechts | Goed vertrekpunt voor |
|---|---|---|
| `programma.html` | lijst met tags (boot · lesgever · cursus) | lijsten, roosters |
| `webcam.html`, `webcam-oostende.html` | één groot beeld met bron | foto, live beeld, kaart als afbeelding |
| `mededeling.html` | intro + 3 grijze kaarten | mededelingen, instructies, cijfers |
| `schietsector.html` | kaart + rechterkolom met kaarten | kaart met toelichting |
| `signalisatie.html` | 3 vakken + uitleg | uitleg in stappen |
| `weer.html` | volledige breedte, geen linkerkolom | grote datavisualisatie |

## 2. Het gedeelde kader (niet aanpassen)

- Scherm 1920 × 1080, alles in `vh`/`vw`.
- **Kop**: VVS-logo links (inline SVG, kopieer uit een bestaande slide), label rechts in `.day` (één woord, hoofdletters via CSS, bv. "Webcam").
- **Linkerkolom** `.side` (1/3): klok, lijn, weer nu (Nieuwpoort), vier uurtegels. Ongewijzigd overnemen.
- **Hoofddeel** `.prog` (2/3): bovenaan `.title` met datum (`#tdate`), gele streep, titel `<h2>`. Titel staat op de basislijn van de klok.
- **Ticker** onderaan: gele band met lopende berichten (`BERICHTEN` in het script).
- Het blok `/* ===== gedeeld kader ===== */` onderaan de CSS bepaalt witruimte en uitlijning. Mee kopiëren, niet wijzigen.
- Bron of tijdstempel: `.src` als laatste kind van `.prog`, rechts onderaan.

## 3. Ontwerpregels

1. Eén letter: Montserrat. Gewichten 600 (tekst), 700 (labels, titels), 800 alleen voor grote getallen.
2. Typeschaal: label 1.4vh · tekst 1.8vh · klein getal 2.6vh · titel 3vh · groot getal 5vh.
3. Ruimteschaal: `--s1` 0.8 · `--s2` 1.6 · `--s3` 2.4 · `--s4` 4 · `--s5` 6.4 vh. Geen losse marges daarbuiten.
4. Alles links uitgelijnd op dezelfde kantlijn; centreren alleen binnen een vorm.
5. Kleur: wit, zwart `#070504`, grijs (`--panel` #f4f3ef, `--tag`), merkgeel `#F8E700` alleen als accent (streep, tag), nooit als groot vlak behalve de ticker.
6. Geen contouren, geen schaduwen. Vlakken scheiden door kleur en witruimte; kaarten zijn grijs met afgeronde hoeken (1.6vh).
7. Elk gegeven één keer; eenheden één keer. Teksten in het Nederlands, kort, leesbaar op 3 meter.
8. Iconen: Phosphor Icons (bold), zoals in de bestaande slides.
9. Inhoud past altijd: geen scrollen, geen afgekapte tekst. Lange lijsten worden ingekort.

## 4. Gegevens

- Inhoud die soms verandert staat bovenaan het script in één duidelijke constante (zoals `PROGRAMMA`, `MEDEDELING`, `BERICHTEN`), met een korte Nederlandse uitleg erboven.
- Externe gegevens: open-meteo voor weer (al aanwezig), anders een bron zonder sleutel. Bij een fout blijven de laatste waarden staan; nooit een leeg of kapot scherm.

## 5. Externe websites (links)

Twee manieren, afhankelijk van wat er nodig is:

- **Schermvullend, zonder VVS-kader**: in LOOOP onder Library → Web pages → Add web page. Gebruik waar mogelijk het "embed"-adres van de site (Windy, YouTube, Google Agenda). Met Preview zie je of de site zich laat tonen: sommige sites weigeren dat.
- **Binnen het VVS-kader**: maak een slide (vertrekpunt `webcam.html`) en zet in `.prog`, onder de titel, een `<iframe>` met het adres op de plaats van het beeld, met dezelfde afgeronde hoeken. Bron als `.src` eronder. Zo krijgt een externe pagina kop, klok, weer en ticker van VVS.

Bewaar de links die je wilt hergebruiken in LOOOP onder Web pages, met een herkenbare naam; ze staan dan klaar om in een playlist te zetten.

## 6. Opleveren

1. Nieuw bestand in de hoofdmap, naam in kleine letters met streepjes, bv. `jachthaven.html`.
2. Controleren op 1920 × 1080: zelfde kop, linkerkolom, witruimte en ticker als de andere slides (naast `webcam.html` leggen).
3. Miniatuur `thumbs/<id>.png` van 480 × 270 (schermafdruk, verkleind).
4. In LOOOP: Library → Slides → Add HTML file (naam + bestandsnaam), daarna toevoegen aan een playlist en publiceren.
5. Bij elke wijziging aan de app (niet aan slides): `app.json` versie verhogen.
