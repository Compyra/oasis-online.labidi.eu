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
            contEu: "Europe", contAm: "Americas", contAf: "Africa", contAs: "Asia", contOc: "Oceania",
            noResults: "Nothing found. Try another word — or call 112 in an emergency.",
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
            contEu: "Europa", contAm: "Amerika", contAf: "Afrika", contAs: "Azië", contOc: "Oceanië",
            noResults: "Niets gevonden. Probeer een ander woord — of bel 112 bij nood.",
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
            contEu: "Europe", contAm: "Amériques", contAf: "Afrique", contAs: "Asie", contOc: "Océanie",
            noResults: "Rien trouvé. Essayez un autre mot — ou appelez le 112 en cas d'urgence.",
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
            contEu: "Europa", contAm: "Amerika", contAf: "Afrika", contAs: "Asien", contOc: "Ozeanien",
            noResults: "Nichts gefunden. Versuchen Sie ein anderes Wort — oder rufen Sie im Notfall 112 an.",
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
        q: ""
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
        updated: $("updated"), quickExit: $("quickExit")
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

    function renderPlaces() {
        els.places.textContent = "";
        // World + Europe stay as always-visible tabs; countries live in the select.
        for (const p of HELP_DATA.places.filter(x => !x.continent)) {
            const b = el("button", null, "");
            b.type = "button";
            b.setAttribute("role", "tab");
            b.setAttribute("aria-selected", String(p.id === state.place));
            b.append(el("span", null, p.icon + " "), el("span", null, placeLabel(p)));
            b.addEventListener("click", () => {
                state.place = p.id;
                store.set("oo.place", p.id);
                renderPlaces();
                renderResults();
            });
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
            state.place = sel.value;
            store.set("oo.place", sel.value);
            renderPlaces();
            renderResults();
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
        const first = currentPlace().entries.find(e => e.cat === "emergency" && e.tel);
        const num = first ? first.phone.split("·")[0].trim() : "112";
        const tel = first ? first.tel : "112";
        const sos = document.querySelector(".sos");
        sos.href = "tel:" + tel;
        document.querySelector(".sos-num").textContent = num;
        document.querySelector('[data-i18n="sosAction"]').textContent =
            t("sosAction").replace("112", num);
    }

    function matches(entry, tokens) {
        if (!tokens.length) return true;
        const hay = norm([
            loc(entry.name), typeof entry.name === "object" ? Object.values(entry.name).join(" ") : "",
            entry.phone || "", (entry.phone || "").replace(/\s/g, ""),
            entry.kw || "",
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
                        state.place = p.id;
                        store.set("oo.place", p.id);
                        state.q = "";
                        els.search.value = "";
                        renderPlaces();
                        renderResults();
                    });
                    row.append(b);
                }
                els.results.append(row);
            }
        }

        if (!pool.length) {
            els.results.append(el("p", "empty", t("noResults")));
            return;
        }

        if (tokens.length || state.cat !== "all") {
            const grid = el("div", "results-grid");
            for (const e of pool) grid.append(card(e));
            els.results.append(grid);
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

    function renderAll() {
        applyI18n();
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
