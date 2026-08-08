# oasis-online.labidi.eu

**Official helplines. Find help now.**

A single, fast page that lists **only official help services** — emergency numbers,
suicide prevention, violence & abuse, children & youth, addiction, practical help —
with one-tap calling. Built to work for a person in crisis: no menus to fight, no
tracking, readable on any device, and it keeps working offline once visited.

Live: https://oasis-online.labidi.eu/

## Hard rules (the whole point of this site)

1. **Official instances only.** Government services, harmonised EU numbers, or the
   long-established national organisation for the topic. No aggregator blogs.
2. **Every number is verified against its own official website before it ships.**
   The verification date is stored in `HELP_DATA.updated` (data.js) and shown in the
   footer. When touching the data, re-verify what you touch and bump the date.
3. **Never guess.** If hours or cost cannot be confirmed at the official source,
   omit the field. A missing detail is annoying; a wrong number is dangerous.
   (This is why Respect Seniors is not yet listed — its site was unreachable
   during the 2026-08 verification pass.)
4. **Simple beats complete.** Big call buttons, four UI languages (EN/NL/FR/DE),
   plain words. Anything that slows a panicking person down is a bug.

## Stack

Plain HTML + CSS + JS. No build step, no dependencies, **zero external requests**
(CSP-enforced). PWA with a network-first service worker (offline fallback, never
frozen on a stale build).

| File | Role |
| --- | --- |
| `index.html` | Shell: static 112 banner (works without JS), controls, noscript number list |
| `data.js` | `HELP_CATS` + `HELP_DATA` — places → entries. The only file that grows |
| `app.js` | i18n (EN/NL/FR/DE), render, search, filters, quick-exit, SW registration |
| `style.css` | Mobile-first, auto dark mode, WCAG-minded, print-friendly |
| `sw.js` | Network-first cache. Bump `VERSION` with the `?v=` asset query together |

### Data model (`data.js`)

```js
{
  id: "be-1813", cat: "talk",          // cat from HELP_CATS; id is permanent
  name: "Zelfmoordlijn 1813",          // string, or {en,nl,fr,de} object
  phone: "0800 32 123",                // display form
  tel: "080032123",                    // dialable form (national digits)
  free: true, always: true,            // only when confirmed at the source
  hours: { en: "Mon–Fri 9:00–18:00", … }, // only when confirmed; omit otherwise
  langs: ["nl"],                       // languages the SERVICE speaks
  web: "https://…", chat: "https://…", // official site / official chat page
  desc: { en, nl, fr, de },            // one or two short factual sentences
  kw: "search words all languages"     // what a frightened person would type
}
```

Adding a country = adding one `places[]` object. Nothing else changes.

## Roadmap

Live coverage table and per-country verification status: see [todo.md](todo.md).

- [x] **Belgium** — 25 entries, fully verified
- [x] **Europe** (harmonised layer) — 112, 116 000 / 116 111 / 116 123 / 116 006, Europe Direct
- [x] **Worldwide** (directory layer) — Find a Helpline, Befrienders, Child Helpline International
- [x] **Europe by country** — NL DE FR UK IE CH AT ES IT SE NO DK FI IS PL CZ full; LU PT partial; 12 more EU countries at core level (112 + note)
- [x] **Americas** — US, Canada, Mexico, Brazil full; Argentina partial
- [x] **Africa** — South Africa & Tunisia full; Kenya, Nigeria, Egypt core
- [x] **Asia** — India, Singapore full; Japan, South Korea, Philippines core
- [x] **Oceania** — Australia, New Zealand full
- [x] **All remaining countries** — 229 countries & territories; every one has at least its
  verified emergency numbers (police/ambulance/fire), localised in 4 languages.
  Full reference: [country.md](country.md)
- [ ] Upgrade core countries with verified national helplines — queue lives in [todo.md](todo.md)
- [ ] North Korea — the only state left out (no verifiable public emergency system)

## Verification log

Per-pass details now live in [todo.md](todo.md) ("Work log").

- **2026-08-06 (2)** — Global pass: ~40 flagship lines verified for 35+ countries.
  Caught: Kvinnofridslinjen (SE) → **116 016**, Livslinien (DK) hours now 9:00–05:00.
- **2026-08-06 (1)** — Belgium initial pass. Sources: 112.be (112/101/1722/1733),
  antigifcentrum.be, zelfmoord1813.be, preventionsuicide.be, tele-onthaal.be (106!),
  tele-accueil.be (107), 1712.be (hours Mon–Fri 9–18), awel.be, 103ecoute.be,
  childfocus.be (116 000), zsg.belgium.be (10 centres), sosviol.be,
  ecouteviolencesconjugales.be, druglijn.be (Mon–Fri 10–20), infordrogues.be,
  cardstop.be (078 170 170), docstop.be, chsbelgium.org (**new number
  02 616 26 26 since 06/2026**, old 02 648 40 14 active until mid-2028).

## Local development

```powershell
python -m http.server 8791 --bind 127.0.0.1   # from the repo root
```

The SW only registers on https, so local testing is always cache-free.
