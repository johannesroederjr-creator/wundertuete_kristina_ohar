# Basisdokument: Website "Wundertüte" — Schreibwaren & Kiosk am Marktplatz Lauf

> **Zweck dieses Dokuments:** Vollständige inhaltliche, gestalterische und strukturelle Grundlage zur Erstellung eines Onepagers in Cursor (HTML/CSS, optional ein wenig JS). Dieses Dokument wird mit einem Onepager-Prompt zusammengeführt und an Cursor übergeben.

---

## 1. Projektkontext & Strategie

### Über das Geschäft
**Wundertüte** ist ein Schreibwaren-Kiosk in zentraler Lage am Marktplatz 4 in Lauf (an der Pegnitz). Inhaberin: **Kristina Ohar**. Die Übernahme erfolgte am 01.06.2026. Das Sortiment ist breit gefächert — von Schreibwaren über Snacks und Lotto bis zu Pokémon-Karten und Heliumballons. Der Laden positioniert sich bewusst als modernes Tante-Emma-Geschäft mit persönlichem Bezug zur Nachbarschaft.

### Zielgruppe & Nutzungskontext
- **Primär:** Lokale Bewohner:innen aus Lauf und Umgebung — Eltern (Schulbedarf), Schüler:innen, ältere Stammkundschaft, Spontanlauferschaft am Marktplatz.
- **Sekundär:** Besucher der Innenstadt, die kurz checken wollen "ist auf? wo genau? gibt es Y?".
- **Nutzungsverhalten:** Stark mobil-getrieben. Die meisten Aufrufe passieren wahrscheinlich vor der Tür, im Vorbeigehen oder beim schnellen Nachschauen daheim. Daraus folgt: **Mobile-First. Sofort-Infos oben. Klick-zu-Anruf prominent.**

### Strategische Leitidee
Ein moderner Kiosk-Onepager, der drei Aufgaben gleichzeitig erfüllt:
1. **Schnelle Service-Info** (Öffnungszeiten, Standort, Anruf) — über das Faltlinie sofort sichtbar
2. **Vertrauen & Persönlichkeit** (Über uns, Zitate, Werte) — der Tante-Emma-Charakter
3. **Mehrwert-Services** (Vorbestellung Schulliste, Sonderbestellungen, Feedback) — was den Laden vom Wettbewerb unterscheidet

---

## 2. Designentscheidungen

### 2.1 Farbwelt — **Hybrid: Anthrazit-Basis mit warm-goldenen Akzenten und einem grünen Vital-Akzent**

Begründung: Das bestehende Außenschild ist Anthrazit/Schwarz mit warmem Gold — das ist die existierende visuelle Identität, die nicht ignoriert werden darf. Gleichzeitig wünscht die Inhaberin Frische und "nicht zu seriös". Lösung: **Anthrazit + Gold als Haupt-Pairing (Logo-treu), ein lebendiger Grünton als Aktions- und Akzentfarbe**, dazu ein warmes Off-White als Hintergrund-Alternative für luftige Sektionen.

```css
:root {
  /* Primärfarben */
  --color-anthracite: #1F1D1A;        /* fast-schwarz, warmtonig (wie Schild) */
  --color-anthracite-soft: #2C2925;   /* für Karten/Container */
  --color-gold: #D4A24C;              /* warmes Gold, wie Logoschrift */
  --color-gold-bright: #E8BE63;       /* helleres Gold für Hover */

  /* Akzent (das "Wundertüten"-Frische-Element) */
  --color-green: #6B8E4E;             /* gedämpftes Salbei-Grün, nicht knallig */
  --color-green-bright: #8AAD6A;      /* heller für Hover */

  /* Neutrals */
  --color-cream: #F5EFE3;             /* warmes Off-White für helle Sektionen */
  --color-cream-soft: #EAE3D2;        /* leicht abgesetzt für Karten */
  --color-text-on-dark: #F5EFE3;
  --color-text-on-light: #1F1D1A;
  --color-text-muted: #8A857B;
  --color-border: rgba(212, 162, 76, 0.2);
}
```

**Sektionsweise Verteilung:** Hero und "Über uns" auf Anthrazit (edel, Logo-Welt). Service-Sektionen wie Sortiment, Öffnungszeiten, Schulliste auf Cream (luftig, einladend). Footer wieder Anthrazit. So entsteht ein rhythmischer Wechsel — dunkel/hell/dunkel/hell.

### 2.2 Typografie

**Display (Überschriften):** `Fraunces` — eine moderne Serif mit Persönlichkeit, leicht nostalgisch (passt zur Tante-Emma-DNA), aber zeitgemäß. Über Google Fonts.
**Body:** `Inter Tight` oder `DM Sans` — clean, gut lesbar, modern. *(Alternative für Vielfalt: `Manrope`.)*

Begründung: Das Wundertüte-Logo verwendet eine elegante Schreibschrift-Anmutung. Eine charaktervolle Serif als Display-Font knüpft daran an, ohne die Lesbarkeit auf kleinen Geräten zu opfern.

### 2.3 Bildsprache & Visual-Details
- **Sanfte Körnung/Grain-Overlay** auf dunklen Sektionen für haptisches Gefühl
- **Goldene Trennlinien** (1px, leicht transparent) als Sektions-Übergänge in dunklen Bereichen
- **Geschenkbox-Icon-Motiv** aus dem Logo als wiederkehrendes dezentes Element (z.B. als Marker an Listen, als kleines Wasserzeichen)
- **Abgerundete Ecken** moderat (8–16px), nicht zu verspielt
- **Schatten:** weich, warm getönt (nicht reines Schwarz, sondern leicht braun-tönig)

### 2.4 Motion & Interaktion
- **Sanfte Fade-ins** bei Scroll (Intersection Observer)
- **Mikro-Interaktionen** auf Buttons (subtiler Lift, Gold-Glow)
- **Sticky Navigation** mit Hintergrund-Blur beim Scrollen
- **Keine** aggressiven Animationen — passt nicht zum Tante-Emma-Charakter

### 2.5 Responsive Strategie
- **Mobile-First** durchgängig
- Breakpoints: 640px, 960px, 1280px
- Touch-Targets mindestens 44×44px
- Telefonnummer und Adresse in Header/Hero müssen auf Mobile sofort klickbar sein

---

## 3. Seitenstruktur (Onepager, lange Seite mit allen Sektionen)

Reihenfolge bewusst: **Sofort-Info → Vertrauen aufbauen → Services anbieten → Kontakt**

```
1. HEADER (sticky)
2. HERO
3. SCHNELL-INFO (Öffnungszeiten / Adresse / Anruf)
4. SORTIMENT
5. SERVICES (Vorbestellung Schulliste, Sonderbestellungen, Helium-Ballons)
6. ÜBER UNS (Geschichte + Zitate + Vorher/Nachher)
7. NACHHALTIGKEIT & REGIONALES
8. FEEDBACK / "IHRE MEINUNG"
9. KONTAKT (Formular + Karte + alle Kanäle)
10. FOOTER
```

---

## 4. Sektionsspezifikationen mit Inhalten

### Sektion 1: Header (sticky, oben)

**Layout (Desktop):**
- Links: Logo "Wundertüte" (oder Wortmarke in Gold auf Anthrazit)
- Mitte: Anker-Navigation: `Sortiment · Services · Über uns · Kontakt`
- Rechts: Telefon-Button (gold, prominent) + Instagram-Icon

**Layout (Mobile):**
- Logo links, Telefon-Icon rechts (immer sichtbar), Burger-Menü für Rest

**Verhalten:** Beim Scrollen: Hintergrund-Blur (`backdrop-filter: blur(12px)`), leicht transparent. Höhe schrumpft sanft.

**Daten:**
- Telefon: `[PLATZHALTER — wird von Kundin geliefert]` → `tel:` Link mit `+49...`
- Instagram: `https://www.instagram.com/wundertuete2026/`

---

### Sektion 2: Hero

**Konzept:** Großzügig, anthrazit, mit goldener Wortmarke. Kein gestelltes Foto im Hero (Briefing sagt: Fotos kommen später). Stattdessen typografischer Hero mit dezenten Geschenkbox-Ornamenten als SVG.

**Inhalte:**
- Eyebrow (klein, gold, getrackte Großbuchstaben): `Schreibwaren · Kiosk · Marktplatz Lauf`
- H1 (Fraunces, groß): **"Wundertüte"**
- Subline (Cream, mittelgroß): *"Ein Laden für die Bewohner von Lauf. Mit allem, was den Alltag schöner macht — und einem Ohr für Ihre Wünsche."*
- Zwei Buttons:
  - Primär (Gold): `Heute geöffnet — Anfahrt` → Anker zu Schnell-Info
  - Sekundär (Outline Gold): `Anrufen` → tel-Link
- Kleines Statuselement unten: `● Mo–Fr 8–18 Uhr · Sa 8–13 Uhr` (grüner Punkt animiert dezent als "wir sind live")

**Visuelle Details:**
- Geschenkbox-SVG-Ornamente links und rechts (wie auf dem Schild), aber sehr subtil, ca. 8–12% Opazität
- Sanftes Grain/Noise im Hintergrund
- Optional: leichter goldener Schimmer-Verlauf am unteren Rand als Übergang

---

### Sektion 3: Schnell-Info ("Auf einen Blick")

**Konzept:** Drei Karten nebeneinander (auf Mobile gestapelt), Cream-Hintergrund, anthrazit-getönte Karten mit Gold-Akzent. Das ist die wichtigste Info-Sektion.

**Karte 1 — Öffnungszeiten:**
```
Icon: Uhr (SVG, gold)
Titel: "Öffnungszeiten"
Inhalt:
  Montag – Freitag    8:00 – 18:00 Uhr
  Samstag             8:00 – 13:00 Uhr
  Sonntag             geschlossen
Status (dynamisch via kleinem JS-Snippet): "● Jetzt geöffnet" / "Geschlossen — öffnet morgen um 8:00"
```

**Karte 2 — Standort:**
```
Icon: Pin (SVG, gold)
Titel: "So finden Sie uns"
Inhalt:
  Wundertüte
  Marktplatz 4
  91207 Lauf an der Pegnitz
Buttons:
  - "Route mit Google Maps" (öffnet maps.google.com/?q=Marktplatz+4,+91207+Lauf)
  - "Route mit Apple Maps" (maps.apple.com/?address=...)
```

**Karte 3 — Direkt erreichen:**
```
Icon: Telefon (SVG, gold)
Titel: "Wir sind für Sie da"
Inhalt:
  Telefon: [PLATZHALTER]
  E-Mail:  [PLATZHALTER]
  WhatsApp: optional, später
Buttons:
  - "Anrufen" (tel:)
  - "WhatsApp schreiben" (wa.me/...)
```

**JS-Hinweis für Cursor:** Bitte ein kleines Skript für den "Jetzt geöffnet"-Status integrieren, das aus den Öffnungszeiten und der aktuellen Uhrzeit den Status berechnet. Tröstlich auf Deutsch formulieren wenn geschlossen.

---

### Sektion 4: Sortiment

**Konzept:** Dunkle Sektion (Anthrazit) nach der hellen Schnell-Info — Rhythmus-Wechsel. Grid aus stilisierten Kategorie-Karten mit SVG-Icons in Gold, kurzer Beschreibung, hover-effekt mit grünem Underline.

**Intro-Text (oben, Fraunces-Überschrift + Lead):**
> **Mehr als ein Schreibwarenladen.**
>
> Vom Schulheft bis zum Heliumballon, vom Lottoschein bis zur Pokémon-Karte — bei uns finden Sie das, was Sie brauchen, und einiges, was Sie überraschen wird.

**Kategorien-Grid (3×4 auf Desktop, 2×6 auf Tablet, 1×12 auf Mobile):**

| Kategorie | Kurzbeschreibung |
|---|---|
| **Schreibwaren** | Stifte, Hefte, Mappen, Kalender — auch nachfüllbare Modelle |
| **Büromaterial** | Ordner, Klebeband, Etiketten, alles für Schreibtisch und Home-Office |
| **Druckservice** | Kopieren, Scannen, Drucken — schnell und unkompliziert |
| **Kleine Geschenke** | Liebevoll ausgesucht, regional und überraschend |
| **Pokémon-Karten** | Aktuelle Editionen, beliebt bei Kids und Sammlern |
| **Heliumballons** | Mit Befüllung vor Ort, auch zu Themen und Geburtstagen |
| **Tabakwaren** | Klassisches Kiosk-Sortiment |
| **Snacks & Getränke** | Für den schnellen Stopp am Marktplatz |
| **Lotto & Toto** | Spielen Sie Ihren Tipp bei uns |
| **Zeitschriften** | Tageszeitungen, Magazine, regionale Presse |
| **Sticker & Aufbügelbilder** | Für Kinder und kreative Köpfe |
| **Paketshop** | Abgabe und Abholung |

**Hinweis-Box am Ende der Sektion (in grüner Tönung):**
> 💡 *Etwas Bestimmtes gesucht? Schreiben Sie uns — wir bestellen gerne auf Wunsch.*

---

### Sektion 5: Services — "Mehr als nur ein Laden"

**Konzept:** Drei größere Service-Karten in Cream-Sektion. Jede Karte mit einem konkreten Call-to-Action. **Wichtig laut Briefing: Formulare/Uploads erst mal nur optisch einbinden — keine technische Verarbeitung. Daher als "echte" Formular-UI ohne Submit-Backend (action="#" oder onclick mit `alert('Wird bald freigeschaltet')`).**

**Service-Karte 1: Schulmaterial-Service**
```
Headline: "Schullisten — fertig gepackt, abholbereit"
Body: Schluss mit dem Wühlen durch Regale. Schicken Sie uns die Materialliste 
      Ihres Kindes per E-Mail oder über das Formular unten — wir stellen alles 
      zusammen. Sie kommen vorbei und nehmen mit.
CTA:  "Liste einreichen" → öffnet Formular-Block darunter
```

**Formular-Block (visuell, ohne Backend) — als ausklappbarer Bereich:**
- Name (Eltern)
- Name & Klasse Kind
- Schule
- E-Mail / Telefon
- Datei-Upload für Liste (optisch: Drag-and-Drop-Zone mit Briefumschlag-Icon)
- Freitext: "Wünsche / Anmerkungen"
- Button: "Liste senden" → vorläufig `alert("Vielen Dank! Wir melden uns innerhalb von 24 Stunden.")` oder mailto-fallback

**Service-Karte 2: Heliumballons & Vorbestellung**
```
Headline: "Ballons, die den Tag besonders machen"
Body: Heliumballons mit Aufblase-Service vor Ort — zum Schulstart, zum 
      Geburtstag, zu jedem Anlass. Größere Mengen oder Themen-Sets gerne 
      vorbestellen, dann sind sie pünktlich bereit.
CTA:  "Ballons vorbestellen" → öffnet einfaches Formular
```

**Formular (visuell):**
- Anlass (Schulstart / Geburtstag / Sonstiges)
- Anzahl
- Farben/Themen
- Abholdatum & Uhrzeit
- Kontakt
- Button "Vorbestellung absenden"

**Service-Karte 3: Sonderbestellungen**
```
Headline: "Sie wissen, was Sie wollen — wir besorgen es"
Body: Bestimmtes Produkt nicht im Sortiment? Kein Problem. Schreiben Sie uns 
      kurz, was Sie suchen — wir prüfen Verfügbarkeit und Preis und melden 
      uns zurück.
CTA:  "Anfrage stellen" → öffnet Formular
```

**Formular (visuell):**
- Produkt / Beschreibung (Freitext)
- Wichtig: Drei klickbare Pillen (radio-style, nur EINE auswählbar):
  - 🌱 nachhaltig / recycelt
  - ✨ hochwertig
  - 💰 preiswert
- Foto-Upload (Drag-and-Drop)
- Kontakt
- Button "Anfrage senden"

---

### Sektion 6: Über uns — Kristina & die Geschichte

**Konzept:** Dunkle Sektion. Persönlich, warm, mit Platzhalter für Foto von Kristina (rechts auf Desktop, oben auf Mobile). Zitate prominent als Pull-Quotes in Gold-Tönung. Vorher/Nachher-Bilder als kleine Galerie unten (zunächst Platzhalter).

**Layout (Desktop):** Zwei Spalten — links Text, rechts großes Foto-Platzhalter-Rechteck mit dezenter Beschriftung "Foto folgt".

**Text:**
> ### Vom Wunsch zum Wunderladen
>
> Nach langen Jahren in Bürotätigkeiten, einer Ausbildung zur Kauffrau für Bürokommunikation und einer Zeit als Schulbegleiterin wuchs in Kristina Ohar ein lange gehegter Traum: ein eigener Laden, mit Menschen, mit Geschichte.
>
> Schon früher hatte sie davon geträumt, einen Tante-Emma-Laden zu führen. Während einer Anstellung in einem anderen Schreibwarenladen reifte der Wunsch nach etwas Eigenem. Bei einem Spaziergang sah sie dann den Aushang, dass am Marktplatz eine neue Inhaberin gesucht wurde — und ihr Mann hatte heimlich im Hintergrund schon alles vorbereitet, um sie damit zu überraschen.
>
> Am 1. Juni 2026 hat Kristina die Wundertüte übernommen. Aus dem Traum ist ein Laden für Lauf geworden.

**Zitat-Block 1 (groß, in Gold gesetzt, mit Anführungszeichen-Ornament):**
> "Mir geht es um die Bewohner von Lauf. Ich möchte den Menschen das geben, was sie sich wünschen. Es ist nicht mein Laden — es ist ein Laden für meine Kunden."
>
> *— Kristina Ohar*

**Zitat-Block 2 (etwas kleiner, weiter unten):**
> "Mein Mann war der Initiator. Er hat heimlich im Hintergrund alles vorbereitet und mich dann damit überrascht."
>
> *— Kristina Ohar*

**Vorher/Nachher-Galerie:** Zwei nebeneinanderstehende Bild-Platzhalter mit Labels "Vorher" und "Nachher", gold-getönte Rahmen. Hinweis im Code-Kommentar: *"Bilder folgen — Platzhalter via Picsum oder neutralen Rahmen anzeigen"*.

---

### Sektion 7: Nachhaltigkeit & Regionales

**Konzept:** Helle Sektion (Cream), mit dem grünen Akzent als Hauptfarbe in dieser Sektion. Drei Spalten mit Symbolen.

**Headline:**
> ### Wir denken weiter
> *Kleine Entscheidungen, die einen Unterschied machen.*

**Drei Punkte:**

1. **Nachfüllen statt wegwerfen**
   Minenwechsel bei Kugelschreibern und Stiften — viele unserer Schreibgeräte sind nachfüllbar. Das spart Müll und ist auf lange Sicht günstiger.

2. **Nachhaltige Hersteller im Fokus**
   Wir achten bei der Auswahl unseres Sortiments zunehmend auf Hersteller, die umweltbewusst produzieren — vom Recyclingpapier bis zu plastikfreien Verpackungen.

3. **Regional verwurzelt**
   Wo immer es geht, bevorzugen wir Produkte aus der Region. Lauf und Umgebung haben viel zu bieten.

---

### Sektion 8: Feedback — "Ihre Meinung"

**Konzept:** Kurze, sympathische Sektion. Dunkel, mit Goldakzent. Pull-Quote-artig aufgebaut.

**Inhalt:**
> ### Ihre Meinung gehört dazu
>
> Bei uns gibt es eine Ideenbox im Laden — und einen digitalen Briefkasten hier. Was würden Sie sich wünschen? Welches Produkt vermissen Sie? Was können wir besser machen?

**CTA-Button (gold):** `Wunsch oder Idee teilen` → öffnet Modal oder verlinkt auf zukünftiges Formular/Google Form. Vorerst:  Klick öffnet einfachen Block mit Mail-Link und Hinweis "Formular folgt".

---

### Sektion 9: Kontakt

**Konzept:** Letzte große Sektion vor Footer. Cream-Hintergrund. Zwei Spalten: Links Kontaktdaten kompakt, rechts Karte (Google Maps Embed als iframe — Adresse `Marktplatz 4, 91207 Lauf`).

**Linke Spalte:**

```
Wundertüte
Inhaberin: Kristina Ohar
Marktplatz 4
91207 Lauf an der Pegnitz

Telefon:    [PLATZHALTER]   → tel:
E-Mail:     [PLATZHALTER]   → mailto:
WhatsApp:   [optional]      → wa.me/...
Instagram:  @wundertuete2026

—————————————————————————

Zahlungsarten im Laden:
  Bargeld · EC-Karte (ohne Mindestbetrag) · Kreditkarten
```

**Rechte Spalte:** Google Maps iframe (vorgefertigter Embed-Link einbauen). Höhe ca. 400px, abgerundete Ecken, goldener 1px-Rahmen.

---

### Sektion 10: Footer

**Konzept:** Tiefes Anthrazit, kompakt. Drei Spalten.

**Spalte 1 — Wundertüte (Logo + Tagline):**
"Schreibwaren, Snacks und Geschichten am Marktplatz Lauf."

**Spalte 2 — Schnell:**
- Öffnungszeiten
- Sortiment
- Über uns
- Kontakt

**Spalte 3 — Rechtliches:**
- Impressum *(Anker oder eigene Seite — Platzhalter)*
- Datenschutz *(Platzhalter)*

**Untere Zeile:**
`© 2026 Wundertüte · Kristina Ohar · Marktplatz 4, 91207 Lauf an der Pegnitz`

---

## 5. Technische Vorgaben für Cursor

### Stack
- **Reines HTML5 + CSS3 + Vanilla JavaScript** (keine Frameworks nötig, da Onepager)
- **Dateistruktur:**
  ```
  /index.html
  /styles.css         (oder /css/styles.css)
  /script.js          (oder /js/script.js)
  /assets/
    /images/          (Bilder kommen später — Platzhalter erstellen)
    /icons/           (SVG-Icons inline oder als Files)
    logo.svg
    logo.png          (vorhandenes Logo, später ersetzbar)
  ```

### CSS-Architektur
- CSS-Custom-Properties (Variables) für ALLE Farben, Spacings, Schriftgrößen
- Mobile-First Media Queries
- Klar getrennte Sektionen mit Kommentaren `/* === SEKTION 3: SCHNELL-INFO === */`
- Keine `!important`-Regeln außer wenn zwingend nötig

### JavaScript-Funktionen
1. **Sticky-Header Blur** beim Scrollen
2. **"Jetzt geöffnet"-Status** dynamisch berechnen
3. **Smooth-Scroll** für Anker-Links
4. **Mobile Burger-Menü** öffnen/schließen
5. **Service-Formulare** Ein-/Ausklappen (Accordion)
6. **Scroll-Reveal** (Intersection Observer, einfache Fade-in-Animationen)
7. **Formular-Submit-Fallback** (vorerst nur Alert / mailto)

### Performance & A11y
- Semantisches HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- `alt`-Texte überall (auch bei dekorativen SVGs: `aria-hidden="true"`)
- Kontraste WCAG-AA (Anthrazit/Cream und Anthrazit/Gold sind gut — Grün auf Cream bitte prüfen)
- Fokus-Styles sichtbar lassen (kein `outline: none` ohne Ersatz)
- `<html lang="de">`
- Meta: Open Graph Tags, Viewport, Description
- Favicon (Platzhalter, später Logo)

### SEO-Basis
```html
<title>Wundertüte Lauf — Schreibwaren, Kiosk & Service am Marktplatz</title>
<meta name="description" content="Wundertüte in Lauf an der Pegnitz: Schreibwaren, Büromaterial, Druckservice, Heliumballons, Snacks und Lotto. Mo–Fr 8–18 Uhr · Sa 8–13 Uhr. Marktplatz 4.">
<meta property="og:title" content="Wundertüte — Ihr Schreibwarenladen am Marktplatz Lauf">
<meta property="og:description" content="Mehr als ein Schreibwarenladen. Von Schulmaterial bis Heliumballon — mit Service zum Anfassen.">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
```

### Strukturierte Daten (Schema.org) — sehr empfehlenswert für lokales Geschäft
JSON-LD-Block einfügen mit `LocalBusiness` Typ, inklusive `openingHoursSpecification` und `geo`. Das hilft enorm bei Google Maps und lokalen Suchen.

---

## 6. Platzhalter und offene Punkte

Diese Werte muss die Kundin liefern — im HTML als deutliche Platzhalter einbauen (z.B. `[TELEFON]`):

- [ ] Telefonnummer
- [ ] E-Mail-Adresse
- [ ] WhatsApp-Nummer (falls Business-Account)
- [ ] Foto Kristina (für "Über uns")
- [ ] Fotos Außenansicht (für Hero oder Sektions-Übergänge)
- [ ] Vorher/Nachher-Fotos (für "Über uns"-Galerie)
- [ ] Logo als SVG oder hochauflösendes PNG
- [ ] Endgültiger Link für Feedback-Formular (Google Forms / easyfeedback)
- [ ] Impressum-Inhalte
- [ ] Datenschutzerklärung

---

## 7. Look-and-Feel-Briefing in einem Satz

> **Edel wie das goldene Schild am Schaufenster, persönlich wie die Inhaberin, frisch durch grüne Akzente — ein moderner Tante-Emma-Onepager mit Service-DNA.**

---

## 8. Nächste Schritte

1. Dieses Basisdokument mit dem Onepager-Prompt zusammenführen
2. An Cursor übergeben, HTML/CSS/JS generieren lassen
3. Mit Kundin Platzhalter (Telefonnummer, Fotos) klären und einsetzen
4. Formular-Backend separat entscheiden (Formspree / Google Forms / eigener Mail-Server)
5. Live-Test auf Mobilgerät am Marktplatz Lauf (Realbedingungen)
