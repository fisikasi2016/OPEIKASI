# OPEIKASI

PWA hau Bigarren Hezkuntzako oposizioetarako programazio didaktikoa prestatzeko sortuta dago.

## Fitxategi nagusiak

- `index.html`: hasierako pantaila, 11 aukerako gridarekin.
- `block.html`: 1etik 9ra arteko bloke guztientzako orri generikoa.
- `dokumentazio-gehigarria.html`: PDF edo Drive dokumentu osagarriak.
- `estekak.html`: web esteka erabilgarriak.
- `styles.css`: diseinua.
- `app.js`: logika, akordeoiak, kopia-botoiak, checklistak, instalazio-prompt-a eta service worker erregistroa.
- `data.js`: edukia editatzeko leku nagusia. Hemen ordezkatu behar dituzu zure Drive URLak, estekak, promptak eta adibideak.
- `manifest.json`: PWA konfigurazioa.
- `service-worker.js`: cache eta offline oinarria.

## Nola pertsonalizatu

1. Ireki `data.js`.
2. Ordezkatu adibideko Drive URL guztiak benetako URLekin.
3. Editatu bloke bakoitzeko:
   - `helburuak`
   - `txantiloiak`
   - `dokumentazioa`
   - `prompts`
   - `examples`
   - `checklist`
4. Igo fitxategi guztiak web zerbitzari batera.
5. HTTPS bidez ireki, PWA gisa instalatu ahal izateko.

## Gomendio gehigarria

Drive dokumentuak deskargatzeko moduan nahi badituzu, partekatze-estekak edo zuzenean deskarga-estekak erabili daitezke.
