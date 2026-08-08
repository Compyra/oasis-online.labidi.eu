/* Oasis Online — app. No dependencies, no external requests, no innerHTML. */
"use strict";

(function () {

    const LANGS = ["en", "nl", "fr", "de"];

    const I18N = {
        en: {
            exit: "Quick exit ✕",
            sosTitle: "In immediate danger?",
            sosAction: "Call 112 now — free, 24/7",
            title: "Find help now",
            tagline: "Official helplines only — every number verified against its official source. Free to use, anonymous, no tracking.",
            searchLabel: "Search helplines",
            searchHint: "Search: suicide, violence, drugs, children…",
            all: "All",
            call: "Call",
            text: "Text",
            website: "Website",
            chat: "Chat",
            always: "24/7",
            free: "Free",
            services: "services",
            service: "service",
            chooseCountry: "Choose a country…",
            goTo: "Go to country",
            myLocation: "Use my location",
            locating: "Locating…",
            locationFailed: "Could not get your location — pick your country below.",
            nearby: "Near you",
            contEu: "Europe", contAm: "Americas", contAf: "Africa", contAs: "Asia", contOc: "Oceania",
            noResults: "Nothing found. Try another word — or call 112 in an emergency.",
            elsewhere: "Matches in other countries",
            showEntry: "Show in",
            verified: "All numbers verified against their official sources on",
            disclaimer: "This site lists official services only and is not itself an emergency service. Spotted an error? Please tell us — a wrong number can cost precious time."
        },
        nl: {
            exit: "Snel weg ✕",
            sosTitle: "In direct gevaar?",
            sosAction: "Bel nu 112 — gratis, 24/7",
            title: "Vind nu hulp",
            tagline: "Alleen officiële hulplijnen — elk nummer gecontroleerd bij de officiële bron. Gratis, anoniem, zonder tracking.",
            searchLabel: "Zoek hulplijnen",
            searchHint: "Zoek: zelfmoord, geweld, drugs, kinderen…",
            all: "Alles",
            call: "Bel",
            text: "Sms",
            website: "Website",
            chat: "Chat",
            always: "24/7",
            free: "Gratis",
            services: "diensten",
            service: "dienst",
            chooseCountry: "Kies een land…",
            goTo: "Ga naar land",
            myLocation: "Gebruik mijn locatie",
            locating: "Locatie zoeken…",
            locationFailed: "Locatie niet gevonden — kies je land hieronder.",
            nearby: "Bij jou in de buurt",
            contEu: "Europa", contAm: "Amerika", contAf: "Afrika", contAs: "Azië", contOc: "Oceanië",
            noResults: "Niets gevonden. Probeer een ander woord — of bel 112 bij nood.",
            elsewhere: "Resultaten in andere landen",
            showEntry: "Toon in",
            verified: "Alle nummers gecontroleerd bij hun officiële bron op",
            disclaimer: "Deze site toont enkel officiële diensten en is zelf geen nooddienst. Fout gezien? Laat het ons weten — een verkeerd nummer kan kostbare tijd kosten."
        },
        fr: {
            exit: "Quitter vite ✕",
            sosTitle: "En danger immédiat ?",
            sosAction: "Appelez le 112 — gratuit, 24h/24",
            title: "Trouvez de l'aide maintenant",
            tagline: "Uniquement des lignes officielles — chaque numéro est vérifié auprès de sa source officielle. Gratuit, anonyme, sans traçage.",
            searchLabel: "Rechercher une ligne d'aide",
            searchHint: "Recherche : suicide, violences, drogues, enfants…",
            all: "Tout",
            call: "Appeler",
            text: "SMS",
            website: "Site web",
            chat: "Tchat",
            always: "24h/24",
            free: "Gratuit",
            services: "services",
            service: "service",
            chooseCountry: "Choisir un pays…",
            goTo: "Aller au pays",
            myLocation: "Utiliser ma position",
            locating: "Localisation…",
            locationFailed: "Position introuvable — choisissez votre pays ci-dessous.",
            nearby: "Près de vous",
            contEu: "Europe", contAm: "Amériques", contAf: "Afrique", contAs: "Asie", contOc: "Océanie",
            noResults: "Rien trouvé. Essayez un autre mot — ou appelez le 112 en cas d'urgence.",
            elsewhere: "Résultats dans d'autres pays",
            showEntry: "Voir dans",
            verified: "Tous les numéros ont été vérifiés auprès de leur source officielle le",
            disclaimer: "Ce site ne référence que des services officiels et n'est pas lui-même un service d'urgence. Une erreur ? Signalez-la-nous — un mauvais numéro peut coûter un temps précieux."
        },
        de: {
            exit: "Schnell raus ✕",
            sosTitle: "In unmittelbarer Gefahr?",
            sosAction: "Rufen Sie jetzt 112 an — kostenlos, rund um die Uhr",
            title: "Jetzt Hilfe finden",
            tagline: "Nur offizielle Hilfsangebote — jede Nummer wurde bei ihrer offiziellen Quelle geprüft. Kostenlos, anonym, ohne Tracking.",
            searchLabel: "Hilfsangebote durchsuchen",
            searchHint: "Suche: Suizid, Gewalt, Drogen, Kinder…",
            all: "Alle",
            call: "Anrufen",
            text: "SMS",
            website: "Website",
            chat: "Chat",
            always: "24/7",
            free: "Kostenlos",
            services: "Dienste",
            service: "Dienst",
            chooseCountry: "Land wählen…",
            goTo: "Zum Land",
            myLocation: "Meinen Standort nutzen",
            locating: "Standort wird gesucht…",
            locationFailed: "Standort nicht gefunden — wählen Sie unten Ihr Land.",
            nearby: "In Ihrer Nähe",
            contEu: "Europa", contAm: "Amerika", contAf: "Afrika", contAs: "Asien", contOc: "Ozeanien",
            noResults: "Nichts gefunden. Versuchen Sie ein anderes Wort — oder rufen Sie im Notfall 112 an.",
            elsewhere: "Treffer in anderen Ländern",
            showEntry: "Anzeigen in",
            verified: "Alle Nummern wurden am folgenden Datum bei ihrer offiziellen Quelle geprüft:",
            disclaimer: "Diese Seite listet nur offizielle Dienste und ist selbst kein Notdienst. Fehler entdeckt? Bitte melden — eine falsche Nummer kann wertvolle Zeit kosten."
        }
    };

    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
    };

    const state = {
        lang: detectLang(),
        place: detectPlace(),
        cat: "all",
        q: "",
        browse: null    // continent code, array of nearby place ids, or null
    };

    function detectPlace() {
        const valid = id => HELP_DATA.places.some(p => p.id === id);
        const fromUrl = (new URLSearchParams(location.search).get("place") || "").toLowerCase();
        if (valid(fromUrl)) return fromUrl;
        const saved = store.get("oo.place");
        if (saved && valid(saved)) return saved;
        // First visit: guess the country from the browser locale (CLDR likely-subtags).
        for (const l of navigator.languages || [navigator.language || ""]) {
            try {
                const r = (new Intl.Locale(l).maximize().region || "").toLowerCase();
                const id = r === "gb" ? "uk" : r;
                if (valid(id)) return id;
            } catch (e) { /* unparsable locale */ }
        }
        return "be";
    }

    const $ = id => document.getElementById(id);
    const els = {
        places: $("places"), placeNote: $("placeNote"), cats: $("cats"),
        search: $("search"), results: $("results"), count: $("count"),
        updated: $("updated"), quickExit: $("quickExit"),
        quick: $("quick"), browse: $("browse"), quickStatus: $("quickStatus")
    };

    function detectLang() {
        const fromUrl = new URLSearchParams(location.search).get("lang");
        if (LANGS.includes(fromUrl)) return fromUrl;
        const saved = store.get("oo.lang");
        if (LANGS.includes(saved)) return saved;
        const nav = (navigator.languages || [navigator.language || "en"]);
        for (const l of nav) {
            const code = String(l).slice(0, 2).toLowerCase();
            if (LANGS.includes(code)) return code;
        }
        return "en";
    }

    function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key; }

    /* Localised value: accepts a plain string or an {en,nl,fr,de} object. */
    function loc(v) {
        if (v == null) return "";
        if (typeof v === "string") return v;
        return v[state.lang] || v.en || Object.values(v)[0] || "";
    }

    /* Country names localise via the browser's CLDR data when an ISO code exists.
       Labels and the sorted country list are cached per language — Intl.DisplayNames
       construction is expensive and renderPlaces sorts 180+ entries. */
    const labelCache = {};
    function placeLabel(p) {
        const cache = labelCache[state.lang] || (labelCache[state.lang] = { dn: null, map: new Map() });
        if (cache.map.has(p.id)) return cache.map.get(p.id);
        let label = null;
        if (p.iso) {
            try {
                cache.dn = cache.dn || new Intl.DisplayNames([state.lang], { type: "region" });
                const n = cache.dn.of(p.iso.toUpperCase());
                if (n && n !== p.iso.toUpperCase()) label = n;
            } catch (e) { /* unknown code (e.g. XK) → fallback */ }
        }
        if (!label) label = loc(p.name);
        cache.map.set(p.id, label);
        return label;
    }

    const sortedCache = {};
    function sortedCountries(cont) {
        const key = state.lang + ":" + cont;
        if (!sortedCache[key]) {
            sortedCache[key] = HELP_DATA.places
                .filter(p => p.continent === cont)
                .sort((a, b) => placeLabel(a).localeCompare(placeLabel(b), state.lang));
        }
        return sortedCache[key];
    }

    function norm(s) {
        return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function el(tag, cls, text) {
        const n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }

    /* ---------- static UI text ---------- */

    function applyI18n() {
        document.documentElement.lang = state.lang;
        document.querySelectorAll("[data-i18n]").forEach(n => { n.textContent = t(n.dataset.i18n); });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(n => {
            n.setAttribute("placeholder", t(n.dataset.i18nPlaceholder));
            n.setAttribute("aria-label", t("searchLabel"));
        });
        document.querySelectorAll(".langs button").forEach(b => {
            b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
        });
        els.updated.textContent = HELP_DATA.updated;
    }

    /* ---------- controls ---------- */

    const CONTINENTS = [["eu", "contEu"], ["am", "contAm"], ["af", "contAf"], ["as", "contAs"], ["oc", "contOc"]];

    function selectPlace(id) {
        state.place = id;
        store.set("oo.place", id);
        renderPlaces();
        renderResults();
    }

    /* ---------- quick picks: my location + continents ---------- */

    function quickStatus(msg) {
        els.quickStatus.textContent = msg;
        els.quickStatus.hidden = !msg;
    }

    /* Nearest countries by centroid — squared equirectangular distance is plenty
       to rank neighbours, and needs no network call (CSP allows none). */
    function nearestPlaces(lat, lon) {
        const cosLat = Math.cos(lat * Math.PI / 180);
        return Object.keys(GEO_CENTROIDS)
            .map(id => {
                const c = GEO_CENTROIDS[id];
                const dLat = c[0] - lat;
                let dLon = Math.abs(c[1] - lon);
                if (dLon > 180) dLon = 360 - dLon;
                dLon *= cosLat;
                return [id, dLat * dLat + dLon * dLon];
            })
            .sort((a, b) => a[1] - b[1])
            .slice(0, 3)
            .map(d => HELP_DATA.places.find(p => p.id === d[0]))
            .filter(Boolean);
    }

    function locate() {
        if (!("geolocation" in navigator)) { quickStatus(t("locationFailed")); return; }
        quickStatus(t("locating"));
        // Browsers fire no callback at all while a permission prompt is ignored —
        // don't leave "Locating…" stuck forever.
        let done = false;
        const finish = fn => (...args) => { if (!done) { done = true; clearTimeout(guard); fn(...args); } };
        const guard = setTimeout(finish(() => quickStatus(t("locationFailed"))), 15000);
        navigator.geolocation.getCurrentPosition(finish(pos => {
            const near = nearestPlaces(pos.coords.latitude, pos.coords.longitude);
            if (!near.length) { quickStatus(t("locationFailed")); return; }
            quickStatus("");
            // Best guess is selected; the runners-up stay one tap away — centroid
            // matching can miss near borders, so let people correct it instantly.
            state.browse = near.map(p => p.id);
            selectPlace(near[0].id);
            renderQuick();
        }), finish(() => quickStatus(t("locationFailed"))), { timeout: 10000, maximumAge: 600000 });
    }

    function renderQuick() {
        els.quick.textContent = "";

        const geo = el("button", "locate-btn");
        geo.type = "button";
        geo.append(el("span", null, "📍 "), el("span", null, t("myLocation")));
        geo.addEventListener("click", locate);
        els.quick.append(geo);

        for (const c of CONTINENTS) {
            const b = el("button", null, t(c[1]));
            b.type = "button";
            b.setAttribute("aria-pressed", String(state.browse === c[0]));
            b.addEventListener("click", () => {
                state.browse = state.browse === c[0] ? null : c[0];
                quickStatus("");
                renderQuick();
            });
            els.quick.append(b);
        }

        renderBrowse();
    }

    function renderBrowse() {
        els.browse.textContent = "";
        const nearby = Array.isArray(state.browse);
        const list = nearby
            ? state.browse.map(id => HELP_DATA.places.find(p => p.id === id)).filter(Boolean)
            : (state.browse ? sortedCountries(state.browse) : []);
        els.browse.hidden = !list.length;
        if (!list.length) return;
        els.browse.setAttribute("aria-label", nearby ? t("nearby") : t("goTo"));
        if (nearby) els.browse.append(el("span", "browse-label", t("nearby") + ":"));
        for (const p of list) {
            const b = el("button", null, p.icon + " " + placeLabel(p));
            b.type = "button";
            if (nearby && p.id === state.place) b.setAttribute("aria-pressed", "true");
            b.addEventListener("click", () => {
                if (!nearby) state.browse = null;
                selectPlace(p.id);
                renderQuick();
            });
            els.browse.append(b);
        }
    }

    function renderPlaces() {
        els.places.textContent = "";
        // World + Europe stay as always-visible tabs; countries live in the select.
        for (const p of HELP_DATA.places.filter(x => !x.continent)) {
            const b = el("button", null, "");
            b.type = "button";
            b.setAttribute("role", "tab");
            b.setAttribute("aria-selected", String(p.id === state.place));
            b.append(el("span", null, p.icon + " "), el("span", null, placeLabel(p)));
            b.addEventListener("click", () => selectPlace(p.id));
            els.places.append(b);
        }

        const sel = document.createElement("select");
        sel.className = "place-select";
        sel.setAttribute("aria-label", t("chooseCountry"));
        const current = currentPlace();
        const ph = new Option(current.continent ? current.icon + " " + placeLabel(current) : t("chooseCountry"), "");
        ph.disabled = true; ph.selected = true;
        sel.append(ph);
        for (const [cont, key] of CONTINENTS) {
            const group = sortedCountries(cont);
            if (!group.length) continue;
            const og = document.createElement("optgroup");
            og.label = t(key);
            for (const p of group) {
                const o = new Option(p.icon + " " + placeLabel(p), p.id);
                if (p.id === state.place) { o.selected = true; ph.selected = false; }
                og.append(o);
            }
            sel.append(og);
        }
        sel.addEventListener("change", () => {
            if (!sel.value) return;
            selectPlace(sel.value);
        });
        els.places.append(sel);

        const place = currentPlace();
        const note = place.note ? loc(place.note) : "";
        els.placeNote.textContent = note;
        els.placeNote.hidden = !note;
        updateSos();
    }

    function renderCats() {
        els.cats.textContent = "";
        const mk = (id, label) => {
            const b = el("button", null, label);
            b.type = "button";
            b.setAttribute("aria-pressed", String(state.cat === id));
            b.addEventListener("click", () => {
                state.cat = id;
                renderCats();
                renderResults();
            });
            return b;
        };
        els.cats.append(mk("all", t("all")));
        for (const c of HELP_CATS) els.cats.append(mk(c.id, c.icon + " " + loc(c.name)));
    }

    /* ---------- results ---------- */

    function currentPlace() {
        return HELP_DATA.places.find(p => p.id === state.place) || HELP_DATA.places[0];
    }

    /* Keep the static-HTML 112 banner, but point it at the local emergency number. */
    function updateSos() {
        const place = currentPlace();
        const first = place.entries.find(e => e.cat === "emergency" && e.tel);
        const sos = document.querySelector(".sos");
        const numEl = document.querySelector(".sos-num");
        const actEl = document.querySelector('[data-i18n="sosAction"]');
        if (first) {
            const num = first.phone.split("·")[0].trim();
            sos.href = "tel:" + first.tel;
            numEl.textContent = num;
            actEl.textContent = t("sosAction").replace("112", num);
        } else {
            // Countries where official sources confirm there is no central number.
            const e = place.entries[0];
            sos.href = (e && e.web) || "tel:112";
            numEl.textContent = "—";
            actEl.textContent = loc(e && e.name) || t("sosAction");
        }
    }

    /* Situation words per category, all four languages — so “overdose”, “geslagen”
       or “mobbing” finds the right services even when no entry lists that word. */
    const CAT_KW = {
        emergency: "accident ongeval unfall fire brand feu incendie vuur heart attack hartaanval herzinfarkt crise cardiaque stroke beroerte schlaganfall avc bleeding bloeding blutung drowning verdrinking noyade choking stikken police politie polizei ambulance ziekenwagen krankenwagen ambulanz brandweer pompiers feuerwehr urgent hulp help hilfe aide",
        talk: "depressed depressie depression deprimiert deprime sad verdrietig triste traurig lonely eenzaam seul einsam alone suicidal zelfmoordgedachten crisis krise panic paniek panik panique anxiety angst anxieux angstig stress burnout burn-out crying huilen pleurer weinen hopeless wanhopig desespere hoffnungslos grief rouw deuil trauer loss verlies overwhelmed",
        youth: "bullying pesten gepest harcelement mobbing school ecole schule teen tiener ado jugendliche puber parents ouders eltern sexting grooming exam examen stress",
        violence: "beaten geslagen battu geschlagen frappe hit rape verkracht verkrachting viol vergewaltigung assault aanranding agression stalking belaagd threat bedreiging menace drohung abuse misbruik maltraitance missbrauch partner huiselijk domestic conjugale hauslich incest trafficking mensenhandel forced gedwongen unsafe onveilig scared bang peur",
        addiction: "overdose drunk dronken ivre betrunken drugs drogue drogen alcohol alcool alkohol gambling gokken jeu gluecksspiel gaming cocaine cocaina heroine cannabis wiet pills pillen medicijnen afkicken sevrage entzug relapse herval rechute quit stoppen arreter aufhoeren smoking roken fumer rauchen",
        practical: "stolen gestolen vole gestohlen lost verloren perdu wallet portefeuille geldboerse card kaart carte karte bank money geld argent debt schulden dettes poison vergiftiging gif empoisonnement homeless dakloos sans-abri obdachlos passport paspoort documents papieren lawyer advocaat avocat anwalt victim slachtoffer victime opfer scam oplichting arnaque betrug fraud fraude"
    };

    function matches(entry, tokens) {
        if (!tokens.length) return true;
        const hay = norm([
            loc(entry.name), typeof entry.name === "object" ? Object.values(entry.name).join(" ") : "",
            entry.phone || "", (entry.phone || "").replace(/\s/g, ""),
            entry.kw || "", CAT_KW[entry.cat] || "",
            loc(entry.desc), entry.desc && typeof entry.desc === "object" ? (entry.desc.en || "") : ""
        ].join(" "));
        return tokens.every(tok => hay.includes(tok));
    }

    /* Typing a country name in the search box offers a one-tap jump to it. */
    function countryMatches(tokens) {
        const hits = [];
        for (const p of HELP_DATA.places) {
            if (!p.continent || p.id === state.place) continue;
            const hay = norm(placeLabel(p) + " " + (p.name && p.name.en || "") + " " + p.id);
            if (tokens.every(tok => hay.includes(tok))) {
                hits.push(p);
                if (hits.length >= 6) break;
            }
        }
        return hits;
    }

    /* Global search: the same tokens tried against every other place, so a
       specific service, number or site is findable without picking its country
       first. Skips CAT_KW (too generic across 230 places) — matches only on the
       entry's own name/number/keywords/description. */
    function globalMatches(tokens) {
        const hits = [];
        for (const p of HELP_DATA.places) {
            if (p.id === state.place) continue;
            for (const e of p.entries) {
                const hay = norm([
                    loc(e.name), typeof e.name === "object" ? Object.values(e.name).join(" ") : "",
                    e.phone || "", (e.phone || "").replace(/\s/g, ""),
                    e.kw || "", e.web || "",
                    loc(e.desc), e.desc && typeof e.desc === "object" ? (e.desc.en || "") : ""
                ].join(" "));
                if (tokens.every(tok => hay.includes(tok))) {
                    hits.push({ place: p, entry: e });
                    if (hits.length >= 9) return hits;
                }
            }
        }
        return hits;
    }

    function card(entry) {
        const art = el("article", "card");
        art.append(el("h3", null, loc(entry.name)));

        const meta = el("div", "meta");
        if (entry.always) meta.append(el("span", "badge good", t("always")));
        else if (entry.hours) meta.append(el("span", "badge", loc(entry.hours)));
        if (entry.free) meta.append(el("span", "badge good", t("free")));
        for (const l of entry.langs || []) meta.append(el("span", "badge", l.toUpperCase()));
        if (meta.childNodes.length) art.append(meta);

        if (entry.desc) art.append(el("p", null, loc(entry.desc)));

        const actions = el("div", "actions");
        if (entry.tel) {
            const a = el("a", "call");
            a.href = "tel:" + entry.tel;
            a.append(el("span", null, "📞 "), el("span", null, entry.phone));
            actions.append(a);
        }
        if (entry.sms) {
            const s = el("a", "linkbtn", "✉️ " + t("text") + " " + entry.sms);
            s.href = "sms:" + entry.sms;
            actions.append(s);
        }
        if (entry.chat) {
            const c = el("a", "linkbtn", "💬 " + t("chat"));
            c.href = entry.chat;
            c.target = "_blank";
            c.rel = "noopener noreferrer";
            actions.append(c);
        }
        if (entry.web) {
            const w = el("a", "linkbtn", "🌐 " + t("website"));
            w.href = entry.web;
            w.target = "_blank";
            w.rel = "noopener noreferrer";
            actions.append(w);
        }
        if (actions.childNodes.length) art.append(actions);
        return art;
    }

    function renderResults() {
        const place = currentPlace();
        const tokens = norm(state.q).split(/\s+/).filter(Boolean);
        const pool = place.entries.filter(e =>
            (state.cat === "all" || e.cat === state.cat) && matches(e, tokens));

        els.results.textContent = "";
        els.count.textContent = pool.length + " " + (pool.length === 1 ? t("service") : t("services"));

        if (tokens.length) {
            const hits = countryMatches(tokens);
            if (hits.length) {
                const row = el("div", "country-hits");
                row.setAttribute("role", "group");
                row.setAttribute("aria-label", t("goTo"));
                for (const p of hits) {
                    const b = el("button", null, p.icon + " " + placeLabel(p));
                    b.type = "button";
                    b.addEventListener("click", () => {
                        state.q = "";
                        els.search.value = "";
                        selectPlace(p.id);
                    });
                    row.append(b);
                }
                els.results.append(row);
            }
        }

        if (!pool.length) {
            els.results.append(el("p", "empty", t("noResults")));
            renderElsewhere(tokens);
            return;
        }

        if (tokens.length || state.cat !== "all") {
            const grid = el("div", "results-grid");
            for (const e of pool) grid.append(card(e));
            els.results.append(grid);
            renderElsewhere(tokens);
            return;
        }

        for (const c of HELP_CATS) {
            const inCat = pool.filter(e => e.cat === c.id);
            if (!inCat.length) continue;
            const h = el("h2", "group-title");
            h.append(el("span", null, c.icon + " "), el("span", null, loc(c.name)));
            els.results.append(h);
            const grid = el("div", "results-grid");
            for (const e of inCat) grid.append(card(e));
            els.results.append(grid);
        }
    }

    /* Cards from other countries, each opening its country on tap. */
    function renderElsewhere(tokens) {
        if (tokens.length < 1 || !tokens.some(tok => tok.length >= 3 || /^\d+$/.test(tok))) return;
        const hits = globalMatches(tokens);
        if (!hits.length) return;
        const h = el("h2", "group-title");
        h.append(el("span", null, "🌐 "), el("span", null, t("elsewhere")));
        els.results.append(h);
        const grid = el("div", "results-grid");
        for (const hit of hits) {
            const art = card(hit.entry);
            const from = el("button", "card-place");
            from.type = "button";
            from.append(el("span", null, hit.place.icon + " "), el("span", null, placeLabel(hit.place)));
            from.setAttribute("aria-label", t("showEntry") + " " + placeLabel(hit.place));
            from.addEventListener("click", () => selectPlace(hit.place.id));
            art.prepend(from);
            grid.append(art);
        }
        els.results.append(grid);
    }

    function renderAll() {
        applyI18n();
        renderQuick();
        renderPlaces();
        renderCats();
        renderResults();
        updateSos();
    }

    /* ---------- events ---------- */

    document.querySelectorAll(".langs button").forEach(b => {
        b.addEventListener("click", () => {
            state.lang = b.dataset.lang;
            store.set("oo.lang", state.lang);
            renderAll();
        });
    });

    let searchTimer = 0;
    els.search.addEventListener("input", () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            state.q = els.search.value;
            renderResults();
        }, 160);
    });

    /* Leaves no trace in the back-history and clears the visible search. */
    els.quickExit.addEventListener("click", () => {
        els.search.value = "";
        location.replace("https://www.google.com/search?q=weather");
    });

    renderAll();

    if ("serviceWorker" in navigator && location.protocol === "https:") {
        navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(() => { });
    }

})();
