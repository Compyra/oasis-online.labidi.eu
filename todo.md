# todo — Oasis Online

**State (2026-08-08, v9):** 236 places · 234 countries & territories · 356 entries.
38 countries have verified national helpline sets ("full"); the rest carry
cross-checked emergency numbers ("core"), incl. 38 territories/dependencies and
2 countries officially confirmed to have **no** central number (GN, CG).
UX: 📍 use-my-location (offline nearest-centroid, `GEO_CENTROIDS` in data.js) +
continent quick-picks + per-category situation keywords (`CAT_KW` in app.js) +
global search across all countries (`globalMatches` — find a service/number/site
without picking its country first).
Full per-country reference: [country.md](country.md) — regenerate with
`python tools/build-country-md.py` after every data.js change.
Data lives in [data.js](data.js) — handwritten places on top, the `CORE_COUNTRIES`
generator table at the bottom (`[iso, continent, "EN name", "u:… | p:…;a:…;f:…;x:…;t:…;c:…;r:…", warn?]`).

**One rule:** nothing ships unverified. A number goes in only after its own
official site (or, for statutory emergency numbers, a corroborated reference)
confirms it. Omit hours/cost rather than guess. Never change an entry `id`.

## 1 · Remaining countries (1)

Everything else is on the site. On 2026-08-08 the last 16 were verified against
FCDO travel-advice pages (gov.uk — official UK government source); Guinea and
Congo-Brazzaville shipped as "no central emergency number" (that is the official
fact). Still absent:

| Code | Country | Why |
| --- | --- | --- |
| KP | North Korea | "Local numbers only" per all sources; no verifiable public system. Likely stays unlisted. |

(Vatican deliberately excluded — Italian system applies.)

## 2 · Pending number verifications (specific leads)

- KR **109** suicide line (launched 2024) · JP Inochi no Denwa **0570-783-556** + Yorisoi **0120-279-338** · PH NCMH **1553** · AR CAS **135** · PT SOS Voz Amiga · Childline Kenya **116**.
- Pacific helplines to verify: PG 1-Tok Kaunselin Helpim Lain **7150 8000** (ChildFund page 404'd) · WS Faataua le Ola · Fiji Women's Crisis Centre **3313 300** (fwcc.org.fj unparsable) · Fiji child helpline **1325** · VU: trbr.vu 2023 PDF says ambulance 112 vs FCDO 115 — kept FCDO, recheck.
- ICRC **Restoring Family Links** (familylinks.icrc.org — 403 on fetch 08-08; add to world layer once reachable).
- Card-opposition numbers to verify & add: FR **0 892 705 705** (refetch service-public.gouv.fr F2428 — old service-public.fr URL redirects) · NL per-bank? · UK 159 anti-fraud line.
- Blocked fetches to retry: sosdetresse.lu (403) · kjt.lu · 112.public.lu (all three LU sources down 08-08 — LU full upgrade blocked) · respectseniors.be (down) · mind.se detail page · kidshelpline.com.au · 116006.fr (unparsable).
- TN follow-ups: seniors green line **1833** (seen on femmes.gov.tn, verify scope) · drogues/mental-health lines.
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

- **08-08** v9: "what if" pass — world layer gains 3 step-by-step guides (**w-card** bank card lost/stolen/phished, **w-phone** phone/SIM stolen, **w-docs** passport/ID lost abroad — advice entries, no invented numbers, findable from every country via global search). Europe layer +**116 117** (EU-reserved out-of-hours medical). Verified national additions: UK **159** Stop Scams (stopscamsuk.org.uk, can't be spoofed, 99% of banks) + **Action Fraud 0300 123 2040** (reportfraud.police.uk) · NL **Fraudehelpdesk 088 786 73 72** · DE **Opfer-Telefon 116 006** (Weisser Ring, daily 7–22) · BE **Safeonweb** (CCB phishing/fraud portal) · FR **opposition guide** (service-public.gouv.fr F2428 — official steps; the 0 892 705 705 number was NOT visible in the fetch, entry ships link-only). CAT_KW practical += phishing/hacked/sim/imei/identity words. QA: 0 audit errors, "kaart gephisht"→Card Stop, "scam call"→159, "passport lost" from Slovakia→world guide + Doc Stop, Europe tab 7 entries, 0 overflow.
- **08-08** v8: Oceania pass — every Pacific state verified against FCDO + national regulators. **Corrections: WS Samoa 999→911** (FCDO), TV split p:911/a:999/f:000, VU ambulance 112→**115**, KI splits 992/994/993, SB splits 999/111/988, TO 911+922/933/999. **New territories: NU Niue (999), TK Tokelau (999, warn — FCDO: no hospitals/ambulance), WF Wallis & Futuna (17/15/18+112)**. FJ upgraded to full: 911 + direct lines 917/910/919 per taf.org.fj (telecom regulator) + **Lifeline Fiji 1543** (lifelinefiji.com). Generator now renders per-service splits alongside a unified number (`u:` + `p/a/f`). QA: 0 audit errors, 236 places, 0 console errors, 0 overflow.
- **08-08** v7: full cross-check against Wikipedia "List of emergency telephone numbers" (231 wiki countries diffed against data.js). Verdict: our numbers hold — FCDO confirms Libya **1415** (wiki's 1515 is outdated) and Eritrea ambulance **122244**; remaining diff = deliberate omissions (utility outages, non-emergency lines) or wiki parser noise. Fixed real gaps: **SX Sint Maarten** (911/912/919 + child 918, sintmaartengov.org) and **FK Falklands** (999, FCDO) added; GR enriched (100/166/199 + child line **1056** per gov.gr); IN **Childline 1098** (childlineindia.org, now Mission Vatsalya); FI **116 117** medical helpline (116117.fi). World layer +2: **UNHCR Help** (refugees) and **INHOPE** (report CSAM). New: global search — tokens also tried against every other place, matches render as flag-chip cards that jump to their country ("988", "samaritans", "1098" findable from anywhere). QA: 0 audit errors, 233 places walked, 0 console errors, 0 overflow @320px.
- **08-08** v6: TN upgraded to full (FCDO: 190 SAMU / 197 police / 198 fire / 193 National Guard rural; ministry green line **1809** child protection; SOS Femmes map) · DE **116 116** Sperr-Notruf (card/eID blocking, sperr-notruf.de) · FR Drogues Info Service · richer stolen-card keywords on Card Stop/Doc Stop · 📍 use-my-location button (offline `GEO_CENTROIDS` nearest-centroid, top-3 "near you" chips for border correction, stuck-prompt guard) · continent quick-pick buttons · `CAT_KW` situation-keyword layer (overdose/geslagen/mobbing/harcèlement… ×4 langs). QA: 0 audit errors, 231 places walked, 0 console errors, 0 overflow @320px.
- **08-08** v5: last 16 countries verified via FCDO travel advice (BF BI CD CF DM ER FM GQ KM LY NE ST TM YE added; GN & CG shipped as "no central number"); +33 territories (PR GL FO AW CW BM KY …); ⚠️ reliability-warning notes; SOS banner handles no-number countries; country.md + tools/build-country-md.py.
- **08-07** v4: travel numbers (TH 1155, EG 126, KR 1330, JP #7119, CN 122, VN 111, KH 1280) · locale auto-detect + `?place=` links · type-a-country-in-search chips · Intl label caching · lean todo.
- **08-06** v3: all corroborable countries added (181) via generator; 15 corrections from cross-check; 17 uncorroborable listed above.
- **08-06** v2: 35+ countries with verified flagship helplines (~40 official sites fetched). Catches: SE Kvinnofridslinjen→116 016, DK Livslinien hours, NO 113=ambulance.
- **08-06** v1: site built; Belgium 25 entries fully verified (Tele-Onthaal=106!, CHS→02 616 26 26).
