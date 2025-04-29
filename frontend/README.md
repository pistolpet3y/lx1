# Todo

- [ ] universal sök funktion
- [ ] scrollar upp på mobil, inte ner för att byta bild

# Nike LX1 Concept Store

Ett skolprojekt byggt i React + TypeScript + Vite. Designen är inspirerad av moderna sneakersidor och innehåller en egen version av en Nike sko som jag själv skapat genom att kombinera ett antal olika skor
i photoshop för att sen rendera den med AI och sen postprocessing från min sida.
Jag har skapat en funktion med hjälp utav mycket googlande samt felsökning med ChatGPT som låter dig
scrolla igenom bilder som jag sen försökt animera på framsidan, jag vill även använda denna scroll funktion
i min shopping sida där du ska kunna hålla muspekaren över en sko eller plagg och kunna scrolla igenom
färger eller vinklar.

Jag har endel idéer kvar som jag vill prova lägga till en global sökfunktion som låter dig söka
efter en produkt/artikel vart som helst på sidan - till exempel om du på första skrivan bara skulle börja
skriva "skor, blå 41" så får du fram sko sidan med alla skor i storlek 41 som finns i blått.

## Scripts

- `npm run dev` – Startar utvecklingsservern
- `npm run build` – Bygger för produktion
- `npm run lint` – Kollar kodkvalitet
- `npm run format` – Formatterar koden med Prettier

## Kom ihåg

- Navigeringen flyttades till `Navigation.tsx`
- Bilder importeras med `new URL(..., import.meta.url)`
- `Wrapper` i styled-components är root-layout

- npm run install react-icons
- npm install react-feather

## Legal / Copyright Disclaimer

This is a personal school project made for educational purposes only.

- I do not own the rights to the Nike logo or any trademarks associated with Nike.
- All images of the Nike Swoosh used in this project are for non-commercial, concept demonstration only.
- The custom shoe designs were generated with the help of AI and Photoshop and are not affiliated with Nike in any way.

## Juridisk notis

Detta är ett skolprojekt som skapats i utbildningssyfte.

- Jag äger inte rättigheterna till Nike-logotypen eller något varumärke kopplat till Nike.
- Alla logotyper och varumärken används endast för icke-kommersiell demonstration.
- Skorna som visas är AI-genererade koncept och har ingen koppling till Nike som företag.
