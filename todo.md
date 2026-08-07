# todo — Oasis Online

**State (2026-08-07, v4):** 183 places · 181 countries · 280+ entries.
36 countries have verified national helpline sets ("full"); the rest carry
cross-checked emergency numbers only ("core"). Data lives in
[data.js](data.js) — handwritten places on top, the `CORE_COUNTRIES`
generator table at the bottom (`[iso, continent, "EN name", "u:… | p:…;a:…;f:…;x:…;t:…;c:…;r:…"]`).

**One rule:** nothing ships unverified. A number goes in only after its own
official site (or, for statutory emergency numbers, a corroborated reference)
confirms it. Omit hours/cost rather than guess. Never change an entry `id`.

## 1 · Remaining countries (17) — not on the site yet

Emergency numbers could not be corroborated on 2026-08-06 (conflicting or absent
rows). Verify each against an official government/embassy source, then add a
`CORE_COUNTRIES` row. **Do not guess.**

| Code | Country | Lead to chase |
| --- | --- | --- |
| BF | Burkina Faso | police.gov.bf mentioned 17/1010 — conflicting with 112 rollout |
| BI | Burundi | 112/117 unclear |
| CD | DR Congo | 112 claimed regionally, unverified |
| CF | Central African Republic | 117 police? unverified |
| CG | Congo (Rep.) | 111/112/117 unclear |
| DM | Dominica | 999 likely (Commonwealth pattern), verify RDPF site |
| ER | Eritrea | eritel.com.er FAQ lists numbers — refetch |
| FM | Micronesia | 911 likely (US pattern), verify |
| GN | Guinea | 117/122 unclear |
| GQ | Equatorial Guinea | 112/114 unclear |
| KM | Comoros | local numbers only? |
| KP | North Korea | local numbers only; likely stays unlisted |
| LY | Libya | 1515 unified? unverified |
| NE | Niger | 17/15/18 colonial pattern, unverified |
| ST | São Tomé & Príncipe | 112 claimed, unverified |
| TM | Turkmenistan | landline 02/03/01 vs mobile 00x split — needs official source |
| YE | Yemen | 194 police / 191 ambulance partial row only |

(Vatican deliberately excluded — Italian system applies.)

## 2 · Pending number verifications (specific leads)

- KR **109** suicide line (launched 2024) · JP Inochi no Denwa **0570-783-556** + Yorisoi **0120-279-338** · PH NCMH **1553** · AR CAS **135** · PT SOS Voz Amiga · Childline Kenya **116**.
- Blocked fetches to retry: sosdetresse.lu (403) · respectseniors.be (down) · mind.se detail page · kidshelpline.com.au (unparsable).
- Belgium backlog: Respect Seniors 0800 30 330 · CAW 0800 13 500 · Stop it Now · Vertrouwenscentra.

## 3 · Upgrade queue (core → full, continent by continent)

Core-EU first (116 lines likely exist): SK · HU · RO · BG · GR (1018? 15900?) ·
HR · SI · EE · LV · LT · MT · CY. Then rest of Europe (UA TR RS BA…), Latin
America, Africa, Asia, Pacific. Starting indexes: findahelpline.com,
childhelplineinternational.org — but ship only what the national operator's
own site confirms.

## 4 · How to add or upgrade a country

1. Fetch the official site(s); confirm number, cost, hours. No confirmation → don't ship.
2. Core country: one `CORE_COUNTRIES` row (spec keys: `u` unified, `p/a/f` split, `x` also-works, `t` tourist police, `c` children, `r` traffic).
   Full country: one `places[]` object — `id`/`iso` = ISO 3166-1 alpha-2 (UK uses `uk`!), entry ids `<cc>-<slug>` are permanent, `desc` in en/nl/fr/de, `kw` = words a frightened person types, `tel` = dialable digits, `sms` for text lines.
3. Update `HELP_DATA.updated`, this file, and bump `?v=` in index.html **and** `VERSION` in sw.js together.
4. QA before pushing: serve locally, run the data audit + country walk (README), check no JS errors and no 320-px overflow.

## Log (compact)

- **08-07** v4: travel numbers (TH 1155, EG 126, KR 1330, JP #7119, CN 122, VN 111, KH 1280) · locale auto-detect + `?place=` links · type-a-country-in-search chips · Intl label caching · lean todo.
- **08-06** v3: all corroborable countries added (181) via generator; 15 corrections from cross-check; 17 uncorroborable listed above.
- **08-06** v2: 35+ countries with verified flagship helplines (~40 official sites fetched). Catches: SE Kvinnofridslinjen→116 016, DK Livslinien hours, NO 113=ambulance.
- **08-06** v1: site built; Belgium 25 entries fully verified (Tele-Onthaal=106!, CHS→02 616 26 26).
