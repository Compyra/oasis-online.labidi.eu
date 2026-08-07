/* Oasis Online — official helplines data.
   RULES (do not break):
   - Only official services. Every entry links to the service's own official site.
   - Every number must be verified against that official site before it ships.
   - Never guess hours or cost: omit the field rather than invent it.
   - Never change an entry id — bookmarks and the SW cache rely on stable data.
   Last full verification pass: see HELP_DATA.updated. */
"use strict";

const HELP_CATS = [
    { id: "emergency", icon: "🚨", name: { en: "Emergency", nl: "Noodgevallen", fr: "Urgences", de: "Notfälle" } },
    { id: "talk", icon: "💬", name: { en: "Suicide & someone to talk to", nl: "Zelfmoordpreventie & een luisterend oor", fr: "Suicide & écoute", de: "Suizidprävention & Zuhören" } },
    { id: "youth", icon: "🧒", name: { en: "Children & young people", nl: "Kinderen & jongeren", fr: "Enfants & jeunes", de: "Kinder & Jugendliche" } },
    { id: "violence", icon: "🛡️", name: { en: "Violence, abuse & sexual assault", nl: "Geweld, misbruik & seksueel geweld", fr: "Violences, abus & agressions sexuelles", de: "Gewalt, Missbrauch & sexuelle Gewalt" } },
    { id: "addiction", icon: "💊", name: { en: "Drugs, alcohol & addiction", nl: "Drugs, alcohol & verslaving", fr: "Drogues, alcool & addictions", de: "Drogen, Alkohol & Sucht" } },
    { id: "practical", icon: "🧰", name: { en: "Practical help & information", nl: "Praktische hulp & info", fr: "Aide pratique & infos", de: "Praktische Hilfe & Infos" } }
];

const HELP_DATA = {
    updated: "2026-08-07",
    places: [
        {
            id: "world", icon: "🌍",
            name: { en: "Worldwide", nl: "Wereldwijd", fr: "Monde", de: "Weltweit" },
            note: {
                en: "There is no single worldwide helpline. These official directories point you to verified services in your own country.",
                nl: "Er bestaat geen wereldwijd hulpnummer. Deze officiële gidsen verwijzen je naar geverifieerde diensten in je eigen land.",
                fr: "Il n'existe pas de numéro d'aide mondial unique. Ces répertoires officiels vous orientent vers des services vérifiés dans votre pays.",
                de: "Es gibt keine weltweit einheitliche Hilfsnummer. Diese offiziellen Verzeichnisse führen Sie zu geprüften Diensten in Ihrem Land."
            },
            entries: [
                {
                    id: "w-emergency", cat: "emergency",
                    name: { en: "Emergency services", nl: "Nooddiensten", fr: "Services d'urgence", de: "Notdienste" },
                    phone: "112", tel: "112", free: true,
                    desc: {
                        en: "Emergency numbers differ per country: 112 in Europe and many other countries, 911 in North America, 999 in the UK and others. From most mobile phones, dialling 112 connects you to the local emergency service.",
                        nl: "Noodnummers verschillen per land: 112 in Europa en veel andere landen, 911 in Noord-Amerika, 999 in het VK. Op de meeste gsm's word je via 112 doorgeschakeld naar de lokale nooddienst.",
                        fr: "Les numéros d'urgence varient selon le pays : 112 en Europe et dans de nombreux pays, 911 en Amérique du Nord, 999 au Royaume-Uni. Depuis la plupart des mobiles, le 112 vous met en relation avec les secours locaux.",
                        de: "Notrufnummern sind je nach Land verschieden: 112 in Europa und vielen weiteren Ländern, 911 in Nordamerika, 999 im Vereinigten Königreich. Von den meisten Mobiltelefonen aus verbindet 112 mit dem örtlichen Notdienst."
                    },
                    kw: "emergency ambulance police fire 911 999 112 nood ambulance politie brandweer urgence pompiers police notruf feuerwehr polizei"
                },
                {
                    id: "w-findahelpline", cat: "talk",
                    name: "Find a Helpline",
                    web: "https://findahelpline.com/",
                    desc: {
                        en: "Free directory of verified suicide- and crisis-helplines in over 100 countries. Pick your country, get the right number, call or chat.",
                        nl: "Gratis gids met geverifieerde zelfmoord- en crisislijnen in meer dan 100 landen. Kies je land en krijg meteen het juiste nummer.",
                        fr: "Répertoire gratuit de lignes d'écoute et de crise vérifiées dans plus de 100 pays. Choisissez votre pays et obtenez le bon numéro.",
                        de: "Kostenloses Verzeichnis geprüfter Suizid- und Krisen-Hotlines in über 100 Ländern. Land wählen und sofort die richtige Nummer erhalten."
                    },
                    kw: "suicide crisis helpline directory country zelfmoord crisis lijn suicide crise annuaire suizid krise verzeichnis"
                },
                {
                    id: "w-befrienders", cat: "talk",
                    name: "Befrienders Worldwide",
                    web: "https://befrienders.org/",
                    desc: {
                        en: "Worldwide network of volunteer-run emotional-support centres. Find a centre near you to talk about whatever you are going through.",
                        nl: "Wereldwijd netwerk van luistercentra met vrijwilligers. Vind een centrum in je buurt om te praten over wat je doormaakt.",
                        fr: "Réseau mondial de centres d'écoute bénévoles. Trouvez un centre près de chez vous pour parler de ce que vous traversez.",
                        de: "Weltweites Netzwerk ehrenamtlicher Zuhör-Zentren. Finden Sie ein Zentrum in Ihrer Nähe, um über alles zu sprechen, was Sie belastet."
                    },
                    kw: "emotional support listening samaritans praten luisteren ecoute parler zuhören reden"
                },
                {
                    id: "w-childhelpline", cat: "youth",
                    name: "Child Helpline International",
                    web: "https://childhelplineinternational.org/helplines/",
                    desc: {
                        en: "Find the official child helpline for your country — free help for children and young people, worldwide.",
                        nl: "Vind de officiële kinderhulplijn van je land — gratis hulp voor kinderen en jongeren, wereldwijd.",
                        fr: "Trouvez la ligne d'aide officielle aux enfants de votre pays — aide gratuite pour les enfants et les jeunes, partout dans le monde.",
                        de: "Finden Sie die offizielle Kinder-Hotline Ihres Landes — kostenlose Hilfe für Kinder und Jugendliche, weltweit."
                    },
                    kw: "children youth kids helpline kinderen jongeren kindertelefoon enfants jeunes kinder jugendliche"
                }
            ]
        },
        {
            id: "europe", icon: "🇪🇺",
            name: { en: "Europe", nl: "Europa", fr: "Europe", de: "Europa" },
            note: {
                en: "These harmonised numbers use the same digits across the EU. Availability of the 116 lines varies per country.",
                nl: "Deze geharmoniseerde nummers zijn in de hele EU dezelfde cijfers. De beschikbaarheid van de 116-lijnen verschilt per land.",
                fr: "Ces numéros harmonisés sont identiques dans toute l'UE. La disponibilité des lignes 116 varie selon les pays.",
                de: "Diese harmonisierten Nummern sind EU-weit identisch. Die Verfügbarkeit der 116-Nummern ist je nach Land unterschiedlich."
            },
            entries: [
                {
                    id: "eu-112", cat: "emergency",
                    name: { en: "112 — European emergency number", nl: "112 — Europees noodnummer", fr: "112 — Numéro d'urgence européen", de: "112 — Europäische Notrufnummer" },
                    phone: "112", tel: "112", free: true, always: true,
                    desc: {
                        en: "One number for ambulance, fire brigade and police — free, day and night, in every EU country and many more (United Kingdom, Norway, Switzerland…).",
                        nl: "Eén nummer voor ambulance, brandweer en politie — gratis, dag en nacht, in elk EU-land en veel andere landen (VK, Noorwegen, Zwitserland…).",
                        fr: "Un seul numéro pour l'ambulance, les pompiers et la police — gratuit, jour et nuit, dans tous les pays de l'UE et bien d'autres (Royaume-Uni, Norvège, Suisse…).",
                        de: "Eine Nummer für Rettungsdienst, Feuerwehr und Polizei — kostenlos, Tag und Nacht, in jedem EU-Land und vielen weiteren (Vereinigtes Königreich, Norwegen, Schweiz…)."
                    },
                    kw: "emergency ambulance fire police nood ambulance brandweer politie urgence pompiers police notruf rettung feuerwehr polizei"
                },
                {
                    id: "eu-116000", cat: "youth",
                    name: { en: "116 000 — Missing children", nl: "116 000 — Vermiste kinderen", fr: "116 000 — Enfants disparus", de: "116 000 — Vermisste Kinder" },
                    phone: "116 000", tel: "116000", free: true,
                    hours: { en: "Availability varies by country", nl: "Beschikbaarheid verschilt per land", fr: "Disponibilité variable selon le pays", de: "Verfügbarkeit je nach Land unterschiedlich" },
                    desc: {
                        en: "European hotline for missing children — report a disappearance or get support, in every EU country.",
                        nl: "Europese hulplijn voor vermiste kinderen — meld een verdwijning of krijg ondersteuning, in elk EU-land.",
                        fr: "Ligne européenne pour les enfants disparus — signalez une disparition ou obtenez de l'aide, dans tous les pays de l'UE.",
                        de: "Europäische Hotline für vermisste Kinder — Verschwinden melden oder Unterstützung erhalten, in jedem EU-Land."
                    },
                    kw: "missing child disparition vermist kind verdwenen enfant disparu vermisstes kind runaway weggelopen fugue"
                },
                {
                    id: "eu-116111", cat: "youth",
                    name: { en: "116 111 — Child helplines", nl: "116 111 — Kinderhulplijnen", fr: "116 111 — Lignes d'aide aux enfants", de: "116 111 — Kinder-Hotlines" },
                    phone: "116 111", tel: "116111", free: true,
                    hours: { en: "Availability varies by country", nl: "Beschikbaarheid verschilt per land", fr: "Disponibilité variable selon le pays", de: "Verfügbarkeit je nach Land unterschiedlich" },
                    desc: {
                        en: "Reaches the national child helpline in most EU countries — for children and young people who need help or someone to listen.",
                        nl: "Verbindt je met de nationale kinderhulplijn in de meeste EU-landen — voor kinderen en jongeren die hulp of een luisterend oor nodig hebben.",
                        fr: "Joint la ligne nationale d'aide aux enfants dans la plupart des pays de l'UE — pour les enfants et les jeunes qui ont besoin d'aide ou d'écoute.",
                        de: "Erreicht in den meisten EU-Ländern die nationale Kinder-Hotline — für Kinder und Jugendliche, die Hilfe oder ein offenes Ohr brauchen."
                    },
                    kw: "child helpline kindertelefoon kinderen jongeren enfants jeunes kinder jugendtelefon"
                },
                {
                    id: "eu-116123", cat: "talk",
                    name: { en: "116 123 — Emotional support", nl: "116 123 — Emotionele ondersteuning", fr: "116 123 — Soutien émotionnel", de: "116 123 — Emotionale Unterstützung" },
                    phone: "116 123", tel: "116123", free: true,
                    hours: { en: "Availability varies by country", nl: "Beschikbaarheid verschilt per land", fr: "Disponibilité variable selon le pays", de: "Verfügbarkeit je nach Land unterschiedlich" },
                    desc: {
                        en: "Emotional-support helpline available in many EU countries — a human listener when you are lonely, in crisis or thinking about suicide.",
                        nl: "Luisterlijn in veel EU-landen — een mens die luistert wanneer je eenzaam bent, in crisis zit of aan zelfdoding denkt.",
                        fr: "Ligne de soutien émotionnel disponible dans de nombreux pays de l'UE — une oreille humaine en cas de solitude, de crise ou de pensées suicidaires.",
                        de: "Telefonseelsorge in vielen EU-Ländern — ein Mensch, der zuhört, bei Einsamkeit, Krisen oder Suizidgedanken."
                    },
                    kw: "suicide crisis listening zelfmoord luisteren eenzaam suicide ecoute solitude suizid zuhören einsam"
                },
                {
                    id: "eu-116006", cat: "violence",
                    name: { en: "116 006 — Victims of crime", nl: "116 006 — Slachtoffers van misdrijven", fr: "116 006 — Victimes de la criminalité", de: "116 006 — Opfer von Straftaten" },
                    phone: "116 006", tel: "116006", free: true,
                    hours: { en: "Available in some EU countries", nl: "Beschikbaar in sommige EU-landen", fr: "Disponible dans certains pays de l'UE", de: "In einigen EU-Ländern verfügbar" },
                    desc: {
                        en: "Helpline for victims of crime — emotional support, information on your rights and referral to victim support, where the line is active.",
                        nl: "Hulplijn voor slachtoffers van misdrijven — emotionele steun, info over je rechten en doorverwijzing naar slachtofferhulp, waar de lijn actief is.",
                        fr: "Ligne pour les victimes d'infractions — soutien émotionnel, information sur vos droits et orientation vers l'aide aux victimes, là où la ligne est active.",
                        de: "Hotline für Opfer von Straftaten — emotionale Unterstützung, Rechtsinformationen und Weitervermittlung an die Opferhilfe, wo die Nummer aktiv ist."
                    },
                    kw: "victim crime slachtoffer misdrijf victime infraction opfer straftat"
                },
                {
                    id: "eu-europedirect", cat: "practical",
                    name: "Europe Direct",
                    phone: "00 800 6 7 8 9 10 11", tel: "0080067891011", free: true,
                    hours: { en: "Mon–Fri, office hours", nl: "ma–vr, kantooruren", fr: "lu–ve, heures de bureau", de: "Mo–Fr, Bürozeiten" },
                    web: "https://european-union.europa.eu/contact-eu_en",
                    desc: {
                        en: "Official information service of the European Union — ask any question about the EU and your rights, in any official EU language.",
                        nl: "Officiële informatiedienst van de Europese Unie — stel elke vraag over de EU en je rechten, in elke officiële EU-taal.",
                        fr: "Service d'information officiel de l'Union européenne — posez toute question sur l'UE et vos droits, dans n'importe quelle langue officielle de l'UE.",
                        de: "Offizieller Informationsdienst der Europäischen Union — stellen Sie jede Frage zur EU und zu Ihren Rechten, in jeder EU-Amtssprache."
                    },
                    kw: "eu information rights europa vragen rechten questions droits fragen rechte"
                }
            ]
        },
        {
            id: "be", icon: "🇧🇪", continent: "eu",
            name: { en: "Belgium", nl: "België", fr: "Belgique", de: "Belgien" },
            entries: [
                {
                    id: "be-112", cat: "emergency",
                    name: { en: "112 — Ambulance & fire brigade", nl: "112 — Ambulance & brandweer", fr: "112 — Ambulance & pompiers", de: "112 — Krankenwagen & Feuerwehr" },
                    phone: "112", tel: "112", free: true, always: true,
                    langs: ["nl", "fr", "de", "en"],
                    web: "https://www.112.be/",
                    desc: {
                        en: "The emergency centre for urgent medical help and the fire brigade. Also the single European emergency number. Deaf or hard of hearing? Use the app 112 BE.",
                        nl: "De noodcentrale voor dringende medische hulp en de brandweer. Ook het Europese noodnummer. Doof of slechthorend? Gebruik de app 112 BE.",
                        fr: "La centrale d'urgence pour l'aide médicale urgente et les pompiers. Aussi le numéro d'urgence européen unique. Sourd ou malentendant ? Utilisez l'app 112 BE.",
                        de: "Die Notrufzentrale für dringende medizinische Hilfe und die Feuerwehr. Auch die einheitliche europäische Notrufnummer. Gehörlos oder schwerhörig? Nutzen Sie die App 112 BE."
                    },
                    kw: "emergency ambulance fire ziekenwagen brandweer nood levensgevaar urgence pompiers ambulance vitale notruf rettung feuerwehr lebensgefahr"
                },
                {
                    id: "be-101", cat: "emergency",
                    name: { en: "101 — Police", nl: "101 — Politie", fr: "101 — Police", de: "101 — Polizei" },
                    phone: "101", tel: "101", free: true, always: true,
                    langs: ["nl", "fr", "de", "en"],
                    web: "https://www.politie.be/",
                    desc: {
                        en: "Police emergency number, for situations that need immediate intervention — a crime in progress, immediate danger, a serious accident.",
                        nl: "Noodnummer van de politie, voor situaties die onmiddellijke interventie vragen — een misdrijf op heterdaad, direct gevaar, een zwaar ongeval.",
                        fr: "Numéro d'urgence de la police, pour les situations exigeant une intervention immédiate — délit en cours, danger immédiat, accident grave.",
                        de: "Notrufnummer der Polizei, für Situationen, die sofortiges Eingreifen erfordern — eine laufende Straftat, unmittelbare Gefahr, ein schwerer Unfall."
                    },
                    kw: "police politie urgent aangifte inbraak overval agression vol polizei einbruch überfall"
                },
                {
                    id: "be-poison", cat: "emergency",
                    name: { en: "Poison Centre", nl: "Antigifcentrum", fr: "Centre Antipoisons", de: "Antigiftzentrum" },
                    phone: "070 245 245", tel: "070245245", free: true, always: true,
                    langs: ["nl", "fr"],
                    web: "https://www.antigifcentrum.be/",
                    desc: {
                        en: "Suspected poisoning by medicines, chemicals, plants or gas: a doctor or pharmacist tells you exactly what to do. Life-threatening? Call 112 first.",
                        nl: "Bij (mogelijke) vergiftiging door geneesmiddelen, chemische producten, planten of gas: een arts of apotheker zegt je precies wat te doen. Levensbedreigend? Bel eerst 112.",
                        fr: "En cas d'intoxication (possible) par médicaments, produits chimiques, plantes ou gaz : un médecin ou pharmacien vous dit exactement quoi faire. Danger vital ? Appelez d'abord le 112.",
                        de: "Bei (möglicher) Vergiftung durch Medikamente, Chemikalien, Pflanzen oder Gas: Ein Arzt oder Apotheker sagt Ihnen genau, was zu tun ist. Lebensgefahr? Rufen Sie zuerst 112 an."
                    },
                    kw: "poison vergiftiging gif pillen medicijnen chemisch intoxication poison empoisonnement vergiftung gift chemikalien co"
                },
                {
                    id: "be-1733", cat: "emergency",
                    name: { en: "1733 — Doctor on duty", nl: "1733 — Huisarts van wacht", fr: "1733 — Médecin de garde", de: "1733 — Bereitschaftsarzt" },
                    phone: "1733", tel: "1733",
                    langs: ["nl", "fr", "de"],
                    web: "https://www.1733.be/",
                    desc: {
                        en: "Medical help that cannot wait until your own GP is available — evenings, nights and weekends. You are directed to the right care for your situation.",
                        nl: "Medische hulp die niet kan wachten tot je eigen huisarts beschikbaar is — 's avonds, 's nachts en in het weekend. Je wordt naar de juiste zorg geleid.",
                        fr: "Aide médicale qui ne peut pas attendre votre médecin traitant — le soir, la nuit et le week-end. Vous êtes orienté vers les soins adaptés.",
                        de: "Medizinische Hilfe, die nicht auf Ihren Hausarzt warten kann — abends, nachts und am Wochenende. Sie werden zur passenden Versorgung geleitet."
                    },
                    kw: "doctor gp wachtdienst dokter ziek arts médecin garde malade arzt bereitschaft krank"
                },
                {
                    id: "be-1722", cat: "emergency",
                    name: { en: "1722 — Storm & flood damage", nl: "1722 — Storm- en waterschade", fr: "1722 — Tempête & inondation", de: "1722 — Sturm- & Wasserschäden" },
                    phone: "1722", tel: "1722",
                    hours: { en: "Activated during severe weather", nl: "Actief bij noodweer", fr: "Activé en cas d'intempéries", de: "Bei Unwetter aktiviert" },
                    langs: ["nl", "fr", "de"],
                    web: "https://www.1722.be/",
                    desc: {
                        en: "Fire-brigade help for storm or flood damage when nobody is in danger — so 112 stays free for life-threatening calls. Fastest via the e-desk 1722.be.",
                        nl: "Brandweerhulp bij storm- of waterschade wanneer niemand in gevaar is — zo blijft 112 vrij voor levensbedreigende oproepen. Snelst via het e-loket 1722.be.",
                        fr: "Aide des pompiers pour dégâts de tempête ou inondation sans personne en danger — le 112 reste ainsi libre pour les urgences vitales. Le plus rapide : le guichet 1722.be.",
                        de: "Feuerwehrhilfe bei Sturm- oder Wasserschäden, wenn niemand in Gefahr ist — so bleibt 112 für lebensbedrohliche Anrufe frei. Am schnellsten über den E-Schalter 1722.be."
                    },
                    kw: "storm flood wateroverlast dak schade brandweer tempete inondation degats sturm überschwemmung schaden"
                },
                {
                    id: "be-1813", cat: "talk",
                    name: "Zelfmoordlijn 1813",
                    phone: "1813", tel: "1813", free: true, always: true,
                    langs: ["nl"],
                    web: "https://www.zelfmoord1813.be/",
                    chat: "https://www.zelfmoord1813.be/",
                    desc: {
                        en: "Thinking about suicide, or worried about someone? The Flemish suicide-prevention line listens, day and night (Dutch). Also chat and e-mail via the website.",
                        nl: "Denk je aan zelfdoding, of maak je je zorgen om iemand? De Zelfmoordlijn luistert, dag en nacht. Ook chat en mail via de website.",
                        fr: "Pensées suicidaires, ou inquiet pour un proche ? La ligne flamande de prévention du suicide écoute, jour et nuit (en néerlandais). Chat et e-mail via le site.",
                        de: "Suizidgedanken, oder Sorge um jemanden? Die flämische Suizidpräventionslinie hört zu, Tag und Nacht (auf Niederländisch). Auch Chat und E-Mail über die Website."
                    },
                    kw: "suicide zelfmoord zelfdoding dood wanhoop crisis suicidaal suicide suizid selbstmord verzweiflung"
                },
                {
                    id: "be-cps", cat: "talk",
                    name: "Centre de Prévention du Suicide — 0800 32 123",
                    phone: "0800 32 123", tel: "080032123", free: true, always: true,
                    langs: ["fr"],
                    web: "https://www.preventionsuicide.be/",
                    desc: {
                        en: "The French-speaking suicide-prevention line: anonymous, free and there for you day and night — for suicidal thoughts, worry about someone, or after losing someone.",
                        nl: "De Franstalige zelfmoordpreventielijn: anoniem, gratis en dag en nacht bereikbaar — bij zelfmoordgedachten, zorgen om iemand, of na een verlies.",
                        fr: "La ligne de prévention du suicide : anonyme, gratuite et accessible jour et nuit — pensées suicidaires, inquiétude pour un proche ou deuil après suicide.",
                        de: "Die französischsprachige Suizidpräventionslinie: anonym, kostenlos, Tag und Nacht erreichbar — bei Suizidgedanken, Sorge um jemanden oder nach einem Verlust."
                    },
                    kw: "suicide crise idées suicidaires détresse zelfmoord frans suizid selbstmord"
                },
                {
                    id: "be-106", cat: "talk",
                    name: "Tele-Onthaal — 106",
                    phone: "106", tel: "106", free: true, always: true,
                    langs: ["nl"],
                    web: "https://www.tele-onthaal.be/",
                    chat: "https://www.tele-onthaal.be/",
                    desc: {
                        en: "Someone who listens, whatever is on your mind — anonymous and free, day and night (Dutch). Chat most evenings via the website.",
                        nl: "Iemand die luistert, waarover je je ook zorgen maakt — anoniem en gratis, dag en nacht. Chatten kan 's avonds via de website.",
                        fr: "Quelqu'un qui écoute, quoi qu'il vous préoccupe — anonyme et gratuit, jour et nuit (en néerlandais). Chat le soir via le site.",
                        de: "Jemand, der zuhört, was auch immer Sie beschäftigt — anonym und kostenlos, Tag und Nacht (auf Niederländisch). Chat abends über die Website."
                    },
                    kw: "praten luisteren eenzaam verdriet zorgen talk lonely ecoute zuhören einsam"
                },
                {
                    id: "be-107", cat: "talk",
                    name: "Télé-Accueil — 107",
                    phone: "107", tel: "107", free: true, always: true,
                    langs: ["fr"],
                    web: "https://www.tele-accueil.be/",
                    chat: "https://tele-accueil.be/quelquun-a-qui-parler/",
                    desc: {
                        en: "Someone to talk to, whatever you are going through — anonymous and free, day and night (French). Online chat in the afternoon and evening.",
                        nl: "Iemand om mee te praten, wat je ook doormaakt — anoniem en gratis, dag en nacht (Frans). Ook chat in de namiddag en avond.",
                        fr: "Quelqu'un à qui parler, quoi que vous traversiez — anonyme et gratuit, jour et nuit. Chat en ligne l'après-midi et le soir.",
                        de: "Jemand zum Reden, was immer Sie durchmachen — anonym und kostenlos, Tag und Nacht (auf Französisch). Online-Chat nachmittags und abends."
                    },
                    kw: "parler ecoute solitude tristesse praten frans talk zuhören"
                },
                {
                    id: "be-108", cat: "talk",
                    name: "Telefonhilfe — 108",
                    phone: "108", tel: "108", free: true, always: true,
                    langs: ["de"],
                    web: "https://www.telefonhilfe.be/",
                    desc: {
                        en: "Anonymous listening line of the German-speaking community of Belgium — day and night, for worries, loneliness or crisis (German).",
                        nl: "Anonieme luisterlijn van de Duitstalige Gemeenschap — dag en nacht, bij zorgen, eenzaamheid of crisis (Duits).",
                        fr: "Ligne d'écoute anonyme de la Communauté germanophone — jour et nuit, en cas de soucis, de solitude ou de crise (en allemand).",
                        de: "Anonyme Telefonhilfe der Deutschsprachigen Gemeinschaft Belgiens — Tag und Nacht, bei Sorgen, Einsamkeit oder Krisen."
                    },
                    kw: "zuhören sorgen einsamkeit krise deutsch luisterlijn duits ecoute allemand"
                },
                {
                    id: "be-chs", cat: "talk",
                    name: "CHS Helpline (English)",
                    phone: "02 616 26 26", tel: "026162626", always: true,
                    langs: ["en"],
                    web: "https://www.chsbelgium.org/",
                    desc: {
                        en: "Belgium's English-language helpline: confidential, anonymous emotional support for all ages, around the clock — run by the Community Help Service in Brussels.",
                        nl: "De Engelstalige hulplijn van België: vertrouwelijke, anonieme emotionele steun voor alle leeftijden, de klok rond — door Community Help Service in Brussel.",
                        fr: "La ligne d'écoute anglophone de Belgique : soutien émotionnel confidentiel et anonyme pour tous les âges, 24h/24 — par le Community Help Service à Bruxelles.",
                        de: "Belgiens englischsprachige Helpline: vertrauliche, anonyme emotionale Unterstützung für alle Altersgruppen, rund um die Uhr — vom Community Help Service in Brüssel."
                    },
                    kw: "english expat mental health support anxiety lonely suicidal engels engelstalig anglais englisch"
                },
                {
                    id: "be-awel", cat: "youth",
                    name: "Awel — 102",
                    phone: "102", tel: "102", free: true,
                    langs: ["nl"],
                    web: "https://awel.be/",
                    chat: "https://awel.be/",
                    desc: {
                        en: "The Flemish helpline for children and young people — about anything: bullying, home, feelings, friends (Dutch). Call, chat, mail or forum.",
                        nl: "De hulplijn voor alle kinderen en jongeren — over alles: pesten, thuis, gevoelens, vrienden. Bellen, chatten, mailen of forum.",
                        fr: "La ligne flamande pour enfants et jeunes — pour tout : harcèlement, famille, émotions, amis (en néerlandais). Appel, chat, mail ou forum.",
                        de: "Die flämische Hotline für Kinder und Jugendliche — über alles: Mobbing, Zuhause, Gefühle, Freunde (auf Niederländisch). Anruf, Chat, Mail oder Forum."
                    },
                    kw: "kinderen jongeren pesten thuis kindertelefoon jeugd children youth bullying enfants jeunes kinder mobbing"
                },
                {
                    id: "be-103", cat: "youth",
                    name: "103 Écoute-Enfants",
                    phone: "103", tel: "103", free: true,
                    hours: { en: "Every day", nl: "Elke dag", fr: "Tous les jours", de: "Täglich" },
                    langs: ["fr"],
                    web: "https://www.103ecoute.be/",
                    desc: {
                        en: "Free, anonymous listening line for children and teenagers in French-speaking Belgium — every day (French).",
                        nl: "Gratis, anonieme luisterlijn voor kinderen en tieners in Franstalig België — elke dag (Frans).",
                        fr: "Ligne d'écoute gratuite et anonyme pour les enfants et les ados — tous les jours, en toute confidentialité.",
                        de: "Kostenlose, anonyme Hotline für Kinder und Jugendliche im französischsprachigen Belgien — täglich (auf Französisch)."
                    },
                    kw: "enfants ados harcelement famille ecoute kinderen frans children kinder"
                },
                {
                    id: "be-childfocus", cat: "youth",
                    name: "Child Focus — 116 000",
                    phone: "116 000", tel: "116000", free: true, always: true,
                    langs: ["nl", "fr", "de", "en"],
                    web: "https://childfocus.be/",
                    desc: {
                        en: "Foundation for missing and sexually exploited children. Report a disappearance or sexual exploitation — the emergency line answers day and night.",
                        nl: "Stichting voor vermiste en seksueel uitgebuite kinderen. Meld een verdwijning of seksuele uitbuiting — de noodlijn antwoordt dag en nacht.",
                        fr: "Fondation pour enfants disparus et sexuellement exploités. Signalez une disparition ou une exploitation sexuelle — la ligne d'urgence répond jour et nuit.",
                        de: "Stiftung für vermisste und sexuell ausgebeutete Kinder. Melden Sie ein Verschwinden oder sexuelle Ausbeutung — die Notrufnummer antwortet Tag und Nacht."
                    },
                    kw: "missing child vermist kind verdwenen weggelopen uitbuiting enfant disparu fugue exploitation vermisstes kind ausbeutung grooming"
                },
                {
                    id: "be-1712", cat: "violence",
                    name: "1712 — Violence & abuse",
                    phone: "1712", tel: "1712", free: true,
                    hours: { en: "Mon–Fri 9:00–18:00", nl: "ma–vr 9–18 u", fr: "lu–ve 9h–18h", de: "Mo–Fr 9–18 Uhr" },
                    langs: ["nl"],
                    web: "https://www.1712.be/",
                    chat: "https://www.1712.be/nl/chat-met-1712",
                    desc: {
                        en: "Professional helpline for every question about violence, abuse and child abuse (Dutch). Free, confidential, and the call never appears on your phone bill.",
                        nl: "Professionele hulplijn voor elke vraag over geweld, misbruik en kindermishandeling. Gratis, vertrouwelijk, en de oproep verschijnt niet op je telefoonrekening.",
                        fr: "Ligne professionnelle pour toute question sur la violence, la maltraitance et la maltraitance d'enfants (en néerlandais). Gratuite et confidentielle, l'appel n'apparaît pas sur la facture.",
                        de: "Professionelle Hotline für alle Fragen zu Gewalt, Missbrauch und Kindesmisshandlung (auf Niederländisch). Kostenlos, vertraulich, der Anruf erscheint nicht auf der Telefonrechnung."
                    },
                    kw: "geweld misbruik kindermishandeling partnergeweld ouderen stalking pesten violence abuse maltraitance gewalt missbrauch"
                },
                {
                    id: "be-evc", cat: "violence",
                    name: "Écoute Violences Conjugales — 0800 30 030",
                    phone: "0800 30 030", tel: "080030030", free: true,
                    langs: ["fr"],
                    web: "https://www.ecouteviolencesconjugales.be/",
                    chat: "https://www.ecouteviolencesconjugales.be/",
                    desc: {
                        en: "Free, anonymous line on domestic and partner violence in French-speaking Belgium — for victims, witnesses and perpetrators. Chat via the website.",
                        nl: "Gratis, anonieme lijn rond partnergeweld in Franstalig België — voor slachtoffers, getuigen en plegers. Chat via de website.",
                        fr: "Ligne gratuite et anonyme sur les violences conjugales — pour les victimes, les témoins et les auteurs. Tchat via le site.",
                        de: "Kostenlose, anonyme Hotline zu Partnerschaftsgewalt im französischsprachigen Belgien — für Opfer, Zeugen und Täter. Chat über die Website."
                    },
                    kw: "violences conjugales partenaire femme battue partnergeweld huiselijk geweld domestic violence häusliche gewalt"
                },
                {
                    id: "be-sosviol", cat: "violence",
                    name: "SOS Viol — 0800 98 100",
                    phone: "0800 98 100", tel: "080098100", free: true,
                    langs: ["fr"],
                    web: "https://www.sosviol.be/",
                    chat: "https://www.sosviol.be/",
                    desc: {
                        en: "Free, anonymous support line for victims of sexual violence and those around them (French) — psychological, social and legal help.",
                        nl: "Gratis, anonieme lijn voor slachtoffers van seksueel geweld en hun omgeving (Frans) — psychologische, sociale en juridische hulp.",
                        fr: "Écoute gratuite et anonyme pour les victimes de violences sexuelles et leurs proches — aide psychologique, sociale et juridique.",
                        de: "Kostenlose, anonyme Hotline für Opfer sexueller Gewalt und ihr Umfeld (auf Französisch) — psychologische, soziale und rechtliche Hilfe."
                    },
                    kw: "viol agression sexuelle victime verkrachting aanranding rape sexual assault vergewaltigung"
                },
                {
                    id: "be-zsg", cat: "violence",
                    name: { en: "Sexual Assault Care Centres", nl: "Zorgcentra na Seksueel Geweld", fr: "Centres de Prise en charge des Violences Sexuelles", de: "Versorgungszentren nach sexueller Gewalt" },
                    always: true,
                    langs: ["nl", "fr", "de", "en"],
                    web: "https://zsg.belgium.be/",
                    desc: {
                        en: "Ten hospital centres, open day and night for anyone who experienced sexual violence — medical and psychological care, forensic examination, help reporting to police. Find your nearest centre on the site.",
                        nl: "Tien ziekenhuiscentra, dag en nacht open voor iedereen na seksueel geweld — medische en psychologische zorg, sporenonderzoek, hulp bij aangifte. Vind het dichtstbijzijnde centrum op de site.",
                        fr: "Dix centres hospitaliers ouverts jour et nuit après des violences sexuelles — soins médicaux et psychologiques, examen médico-légal, aide au dépôt de plainte. Trouvez le centre le plus proche sur le site.",
                        de: "Zehn Krankenhauszentren, Tag und Nacht offen für alle nach sexueller Gewalt — medizinische und psychologische Versorgung, Spurensicherung, Hilfe bei der Anzeige. Nächstgelegenes Zentrum auf der Website."
                    },
                    kw: "seksueel geweld verkrachting zorgcentrum viol agression cpvs sexual assault rape care vergewaltigung hilfe"
                },
                {
                    id: "be-nupraatikerover", cat: "violence",
                    name: "nupraatikerover.be",
                    langs: ["nl"],
                    web: "https://www.nupraatikerover.be/",
                    chat: "https://www.nupraatikerover.be/",
                    desc: {
                        en: "Anonymous chat for children and young people who face abuse, violence or neglect (Dutch) — run by the confidential centres for child abuse.",
                        nl: "Anonieme chat voor kinderen en jongeren die te maken hebben met misbruik, geweld of verwaarlozing — van de Vertrouwenscentra Kindermishandeling.",
                        fr: "Chat anonyme pour les enfants et les jeunes confrontés à la maltraitance, la violence ou la négligence (en néerlandais).",
                        de: "Anonymer Chat für Kinder und Jugendliche, die Missbrauch, Gewalt oder Vernachlässigung erleben (auf Niederländisch)."
                    },
                    kw: "chat kindermishandeling misbruik geweld thuis jongeren kinderen abuse maltraitance missbrauch"
                },
                {
                    id: "be-druglijn", cat: "addiction",
                    name: "De DrugLijn — 078 15 10 20",
                    phone: "078 15 10 20", tel: "078151020",
                    hours: { en: "Mon–Fri 10:00–20:00", nl: "ma–vr 10–20 u", fr: "lu–ve 10h–20h", de: "Mo–Fr 10–20 Uhr" },
                    langs: ["nl"],
                    web: "https://www.druglijn.be/",
                    chat: "https://www.druglijn.be/stel-je-vraag/chat/",
                    desc: {
                        en: "All questions about alcohol, drugs, medication, gambling and gaming (Dutch) — for yourself or someone you worry about. Anonymous, without judgement.",
                        nl: "Alle vragen over drank, drugs, pillen, gokken en gamen — voor jezelf of iemand om wie je je zorgen maakt. Anoniem, zonder oordeel.",
                        fr: "Toutes les questions sur l'alcool, les drogues, les médicaments, le jeu et le gaming (en néerlandais) — pour vous ou un proche. Anonyme et sans jugement.",
                        de: "Alle Fragen zu Alkohol, Drogen, Medikamenten, Glücksspiel und Gaming (auf Niederländisch) — für Sie selbst oder jemanden, um den Sie sich sorgen. Anonym, ohne Urteil."
                    },
                    kw: "drugs alcohol drank pillen gokken gamen verslaving cannabis cocaine addiction drogue alcool drogen alkohol sucht"
                },
                {
                    id: "be-infordrogues", cat: "addiction",
                    name: "Infor Drogues & Addictions",
                    phone: "02 227 52 52", tel: "022275252",
                    hours: { en: "Mon–Sat, see website", nl: "ma–za, zie website", fr: "lu–sa, voir le site", de: "Mo–Sa, siehe Website" },
                    langs: ["fr"],
                    web: "https://infordrogues.be/",
                    desc: {
                        en: "Information, help and advice on drugs and addictions, without judgement (French) — for users, family, friends and professionals.",
                        nl: "Informatie, hulp en advies over drugs en verslavingen, zonder oordeel (Frans) — voor gebruikers, familie, vrienden en professionals.",
                        fr: "Information, aide et conseils sur les drogues et les addictions, sans jugement — pour les consommateurs, l'entourage et les professionnels.",
                        de: "Information, Hilfe und Beratung zu Drogen und Sucht, ohne Urteil (auf Französisch) — für Konsumenten, Angehörige und Fachkräfte."
                    },
                    kw: "drogues addiction alcool cannabis aide drugs verslaving frans drogen sucht"
                },
                {
                    id: "be-cardstop", cat: "practical",
                    name: "Card Stop",
                    phone: "078 170 170", tel: "078170170", always: true,
                    langs: ["nl", "fr", "en"],
                    web: "https://www.cardstop.be/",
                    desc: {
                        en: "Bank card lost or stolen? One call blocks your Belgian payment cards immediately, any time of day.",
                        nl: "Bankkaart verloren of gestolen? Eén telefoontje blokkeert je Belgische betaalkaarten onmiddellijk, op elk uur.",
                        fr: "Carte bancaire perdue ou volée ? Un seul appel bloque immédiatement vos cartes de paiement belges, à toute heure.",
                        de: "Bankkarte verloren oder gestohlen? Ein Anruf sperrt Ihre belgischen Zahlungskarten sofort, rund um die Uhr."
                    },
                    kw: "bank card stolen lost blokkeren kaart gestolen carte volee perdue bloquer karte gestohlen sperren fraude phishing"
                },
                {
                    id: "be-docstop", cat: "practical",
                    name: "Doc Stop",
                    phone: "00800 2123 2123", tel: "0080021232123", free: true, always: true,
                    langs: ["nl", "fr", "de", "en"],
                    web: "https://www.docstop.be/",
                    desc: {
                        en: "Belgian identity card or passport lost or stolen? Block it immediately against fraud — reachable from anywhere in the world.",
                        nl: "Belgische identiteitskaart of paspoort verloren of gestolen? Blokkeer die meteen tegen fraude — bereikbaar vanuit de hele wereld.",
                        fr: "Carte d'identité belge ou passeport perdu ou volé ? Bloquez-le immédiatement contre la fraude — joignable depuis le monde entier.",
                        de: "Belgischer Personalausweis oder Reisepass verloren oder gestohlen? Sofort gegen Betrug sperren — weltweit erreichbar."
                    },
                    kw: "identity card passport stolen identiteitskaart paspoort gestolen carte identite passeport vole ausweis reisepass gestohlen"
                },
                {
                    id: "be-1700", cat: "practical",
                    name: "1700 — Vlaamse overheid",
                    phone: "1700", tel: "1700", free: true,
                    hours: { en: "Mon–Fri 9:00–19:00", nl: "ma–vr 9–19 u", fr: "lu–ve 9h–19h", de: "Mo–Fr 9–19 Uhr" },
                    langs: ["nl"],
                    web: "https://www.vlaanderen.be/vlaamse-infolijn",
                    desc: {
                        en: "The information line of the Flemish government — questions about benefits, care, housing, school allowances and every other public service (Dutch).",
                        nl: "De infolijn van de Vlaamse overheid — vragen over premies, zorg, wonen, studietoelagen en elke andere overheidsdienst.",
                        fr: "La ligne d'information du gouvernement flamand — questions sur les primes, les soins, le logement et tout autre service public (en néerlandais).",
                        de: "Die Infoline der flämischen Regierung — Fragen zu Zuschüssen, Pflege, Wohnen und allen anderen Behördendiensten (auf Niederländisch)."
                    },
                    kw: "overheid premies zorgbudget wonen studietoelage vragen government info vlaanderen"
                },
                {
                    id: "be-1718", cat: "practical",
                    name: "1718 — Wallonie",
                    phone: "1718", tel: "1718", free: true,
                    hours: { en: "Mon–Fri 8:30–17:00", nl: "ma–vr 8.30–17 u", fr: "lu–ve 8h30–17h", de: "Mo–Fr 8.30–17 Uhr" },
                    langs: ["fr"],
                    web: "https://www.wallonie.be/fr/1718",
                    desc: {
                        en: "Free information number of the Walloon public service — help finding the right service, aid or benefit (French). German speakers dial 1719.",
                        nl: "Gratis infonummer van de Waalse overheid — hulp om de juiste dienst, steun of premie te vinden (Frans). Duitstaligen bellen 1719.",
                        fr: "Numéro vert du Service public de Wallonie — aide pour trouver le bon service, la bonne aide ou prime. En allemand : le 1719.",
                        de: "Kostenlose Infonummer des wallonischen öffentlichen Dienstes (auf Französisch). Auf Deutsch: die 1719."
                    },
                    kw: "wallonie service public aides primes informations overheid waals verwaltung"
                }
            ]
        },
        {
            id: "nl", icon: "🇳🇱", continent: "eu",
            name: { en: "Netherlands", nl: "Nederland", fr: "Pays-Bas", de: "Niederlande" },
            entries: [
                {
                    id: "nl-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["nl", "en"],
                    web: "https://www.rijksoverheid.nl/onderwerpen/alarmnummer-112",
                    desc: {
                        en: "Ambulance, fire brigade and police for life-threatening situations.",
                        nl: "Ambulance, brandweer en politie bij levensbedreigende situaties.",
                        fr: "Ambulance, pompiers et police en cas de danger vital.",
                        de: "Rettungsdienst, Feuerwehr und Polizei bei Lebensgefahr."
                    },
                    kw: "emergency ambulance politie brandweer nood urgence notruf"
                },
                {
                    id: "nl-113", cat: "talk",
                    name: "113 Zelfmoordpreventie",
                    phone: "113 · 0800-0113", tel: "113", always: true, langs: ["nl", "en"],
                    web: "https://www.113.nl/", chat: "https://www.113.nl/",
                    desc: {
                        en: "The Dutch suicide-prevention line — call 113 (regular rate) or 0800-0113 (free), day and night. Chat via the website.",
                        nl: "Denk je aan zelfdoding? Bel 113 (gebruikelijke kosten) of gratis 0800-0113, dag en nacht. Ook chat via de website.",
                        fr: "Ligne néerlandaise de prévention du suicide — appelez le 113 (tarif normal) ou le 0800-0113 (gratuit), jour et nuit.",
                        de: "Die niederländische Suizidpräventionslinie — 113 (normaler Tarif) oder 0800-0113 (kostenlos), Tag und Nacht."
                    },
                    kw: "zelfmoord zelfdoding suicide crisis suicidaal suizid"
                },
                {
                    id: "nl-luisterlijn", cat: "talk",
                    name: "De Luisterlijn",
                    phone: "088 0767 000", tel: "0880767000", always: true, langs: ["nl"],
                    web: "https://www.deluisterlijn.nl/", chat: "https://www.deluisterlijn.nl/ik-zoek-hulp-chat/",
                    desc: {
                        en: "A trained volunteer listens, day and night, whatever is on your mind — anonymous (Dutch). Chat 8:00–22:00.",
                        nl: "Een getrainde vrijwilliger luistert, dag en nacht, waar je ook mee zit — anoniem. Chatten kan van 8 tot 22 uur.",
                        fr: "Un bénévole formé vous écoute jour et nuit, en toute anonymité (en néerlandais).",
                        de: "Ein geschulter Freiwilliger hört zu, Tag und Nacht, anonym (auf Niederländisch)."
                    },
                    kw: "praten luisteren eenzaam verdriet talk lonely"
                },
                {
                    id: "nl-kindertelefoon", cat: "youth",
                    name: "De Kindertelefoon",
                    phone: "0800-0432", tel: "08000432", free: true, langs: ["nl"],
                    hours: { en: "Daily 11:00–21:00", nl: "elke dag 11–21 u", fr: "tous les jours 11h–21h", de: "täglich 11–21 Uhr" },
                    web: "https://www.kindertelefoon.nl/", chat: "https://www.kindertelefoon.nl/chatten",
                    desc: {
                        en: "For all children and young people in the Netherlands — call or chat about anything, anonymously (Dutch).",
                        nl: "Voor alle kinderen en jongeren — bel of chat over alles wat je bezighoudt, anoniem en gratis.",
                        fr: "Pour tous les enfants et les jeunes aux Pays-Bas — appel ou chat anonyme (en néerlandais).",
                        de: "Für alle Kinder und Jugendlichen in den Niederlanden — anonym anrufen oder chatten (auf Niederländisch)."
                    },
                    kw: "kinderen jongeren pesten thuis kindertelefoon children youth"
                },
                {
                    id: "nl-veiligthuis", cat: "violence",
                    name: "Veilig Thuis",
                    phone: "0800-2000", tel: "08002000", free: true, always: true, langs: ["nl"],
                    web: "https://veiligthuis.nl/", chat: "https://veiligthuis.nl/",
                    desc: {
                        en: "National advice and reporting point for domestic violence and child abuse — for victims, witnesses and professionals. Chat 24/7.",
                        nl: "Landelijk advies- en meldpunt huiselijk geweld en kindermishandeling — voor slachtoffers, omstanders en professionals. Ook 24/7 chat.",
                        fr: "Point national de conseil et de signalement pour la violence domestique et la maltraitance d'enfants (en néerlandais).",
                        de: "Nationale Beratungs- und Meldestelle für häusliche Gewalt und Kindesmisshandlung (auf Niederländisch)."
                    },
                    kw: "huiselijk geweld kindermishandeling melden domestic violence abuse"
                }
            ]
        },
        {
            id: "de", icon: "🇩🇪", continent: "eu",
            name: { en: "Germany", nl: "Duitsland", fr: "Allemagne", de: "Deutschland" },
            entries: [
                {
                    id: "de-112", cat: "emergency",
                    name: { en: "112 — Fire & ambulance", nl: "112 — Brandweer & ambulance", fr: "112 — Pompiers & ambulance", de: "112 — Feuerwehr & Rettungsdienst" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["de", "en"],
                    desc: {
                        en: "Fire brigade and emergency medical services, throughout Germany and the EU.",
                        nl: "Brandweer en dringende medische hulp, in heel Duitsland en de EU.",
                        fr: "Pompiers et secours médicaux d'urgence, dans toute l'Allemagne et l'UE.",
                        de: "Feuerwehr und Rettungsdienst, in ganz Deutschland und der EU."
                    },
                    kw: "notruf feuerwehr rettung emergency ambulance"
                },
                {
                    id: "de-110", cat: "emergency",
                    name: { en: "110 — Police", nl: "110 — Politie", fr: "110 — Police", de: "110 — Polizei" },
                    phone: "110", tel: "110", free: true, always: true, langs: ["de", "en"],
                    desc: {
                        en: "Police emergency number in Germany.",
                        nl: "Noodnummer van de politie in Duitsland.",
                        fr: "Numéro d'urgence de la police en Allemagne.",
                        de: "Der Polizeinotruf."
                    },
                    kw: "polizei police notruf politie"
                },
                {
                    id: "de-telefonseelsorge", cat: "talk",
                    name: "TelefonSeelsorge",
                    phone: "0800 111 0 111", tel: "08001110111", free: true, always: true, langs: ["de"],
                    web: "https://www.telefonseelsorge.de/",
                    desc: {
                        en: "Germany's round-the-clock listening service — also 0800 111 0 222 and 116 123. Free, anonymous, not on your phone bill. Chat and mail via the website.",
                        nl: "De Duitse luisterlijn, dag en nacht — ook via 0800 111 0 222 en 116 123. Gratis en anoniem, verschijnt niet op de rekening.",
                        fr: "Écoute allemande, jour et nuit — aussi au 0800 111 0 222 et au 116 123. Gratuit et anonyme.",
                        de: "Rund um die Uhr ein offenes Ohr — auch unter 0800 111 0 222 und 116 123. Kostenlos, anonym, erscheint nicht auf der Rechnung. Chat und Mail über die Website."
                    },
                    kw: "seelsorge krise suizid einsam zuhören suicide crisis"
                },
                {
                    id: "de-116111", cat: "youth",
                    name: "Nummer gegen Kummer — 116 111",
                    phone: "116 111", tel: "116111", free: true, langs: ["de"],
                    hours: { en: "Mon–Sat 14:00–20:00", nl: "ma–za 14–20 u", fr: "lu–sa 14h–20h", de: "Mo–Sa 14–20 Uhr" },
                    web: "https://www.nummergegenkummer.de/", chat: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/",
                    desc: {
                        en: "The children's and youth helpline — free, anonymous, nothing shows up anywhere. Parents call the Elterntelefon 0800 111 0550.",
                        nl: "De kinder- en jongerentelefoon — gratis en anoniem. Ouders bellen het Elterntelefon 0800 111 0550.",
                        fr: "La ligne des enfants et des jeunes — gratuite et anonyme. Parents : Elterntelefon 0800 111 0550.",
                        de: "Das Kinder- und Jugendtelefon — kostenlos und anonym. Eltern erreichen das Elterntelefon unter 0800 111 0550."
                    },
                    kw: "kinder jugend kummer mobbing eltern children youth"
                },
                {
                    id: "de-116016", cat: "violence",
                    name: "Hilfetelefon Gewalt gegen Frauen — 116 016",
                    phone: "116 016", tel: "116016", free: true, always: true, langs: ["de", "en"],
                    web: "https://www.hilfetelefon.de/", chat: "https://onlineberatung.hilfetelefon.de/",
                    desc: {
                        en: "Federal helpline for women affected by violence — confidential, in 18 languages and sign language, 365 days a year.",
                        nl: "Federale hulplijn voor vrouwen die geweld meemaken — vertrouwelijk, in 18 talen en gebarentaal, het hele jaar door.",
                        fr: "Ligne fédérale pour les femmes victimes de violence — confidentielle, en 18 langues et en langue des signes.",
                        de: "Bundesweites Beratungsangebot für Frauen, die Gewalt erleben — vertraulich, in 18 Sprachen und Gebärdensprache, 365 Tage im Jahr."
                    },
                    kw: "gewalt frauen häusliche gewalt violence women domestic"
                },
                {
                    id: "de-116117", cat: "emergency",
                    name: { en: "116 117 — Out-of-hours medical service", nl: "116 117 — Dokterswachtdienst", fr: "116 117 — Médecin de garde", de: "116 117 — Ärztlicher Bereitschaftsdienst" },
                    phone: "116 117", tel: "116117", free: true, langs: ["de"],
                    web: "https://www.116117.de/",
                    desc: {
                        en: "Medical help that cannot wait until the next practice opening, but is not a 112 emergency.",
                        nl: "Medische hulp die niet kan wachten tot de praktijk opent, maar geen 112-noodgeval is.",
                        fr: "Aide médicale qui ne peut pas attendre l'ouverture du cabinet, sans être une urgence 112.",
                        de: "Medizinische Hilfe, die nicht bis zur nächsten Sprechstunde warten kann, aber kein Notfall ist."
                    },
                    kw: "arzt bereitschaft krank doctor gp wachtdienst"
                }
            ]
        },
        {
            id: "fr", icon: "🇫🇷", continent: "eu",
            name: { en: "France", nl: "Frankrijk", fr: "France", de: "Frankreich" },
            entries: [
                {
                    id: "fr-urgences", cat: "emergency",
                    name: { en: "Emergency — 112 · 15 · 17 · 18", nl: "Nood — 112 · 15 · 17 · 18", fr: "Urgences — 112 · 15 · 17 · 18", de: "Notruf — 112 · 15 · 17 · 18" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["fr", "en"],
                    desc: {
                        en: "112 works for everything; 15 SAMU (medical), 17 police, 18 fire brigade. Deaf or hard of hearing: SMS to 114.",
                        nl: "112 werkt voor alles; 15 SAMU (medisch), 17 politie, 18 brandweer. Doof of slechthorend: sms naar 114.",
                        fr: "Le 112 fonctionne pour tout ; 15 SAMU, 17 police, 18 pompiers. Sourds et malentendants : SMS au 114.",
                        de: "112 gilt für alles; 15 SAMU (medizinisch), 17 Polizei, 18 Feuerwehr. Gehörlose: SMS an 114."
                    },
                    kw: "urgence samu police pompiers 15 17 18 114 emergency"
                },
                {
                    id: "fr-3114", cat: "talk",
                    name: "3114 — Prévention du suicide",
                    phone: "3114", tel: "3114", free: true, always: true, langs: ["fr"],
                    web: "https://3114.fr/",
                    desc: {
                        en: "France's national suicide-prevention number — a trained care professional listens, day and night, anywhere in France.",
                        nl: "Het nationale zelfmoordpreventienummer van Frankrijk — een opgeleide zorgprofessional luistert, dag en nacht.",
                        fr: "Le numéro national de prévention du suicide — un professionnel du soin formé vous écoute, 24h/24, partout en France.",
                        de: "Frankreichs nationale Suizidpräventionsnummer — eine geschulte Fachkraft hört zu, Tag und Nacht."
                    },
                    kw: "suicide souffrance détresse idées suicidaires suizid"
                },
                {
                    id: "fr-3919", cat: "violence",
                    name: "3919 — Violences Femmes Info",
                    phone: "3919", tel: "3919", free: true, always: true, langs: ["fr"],
                    web: "https://www.solidaritefemmes.org/",
                    desc: {
                        en: "National line for women facing violence and those around them — anonymous, does not appear on phone bills.",
                        nl: "Nationale lijn voor vrouwen die geweld meemaken en hun omgeving — anoniem, verschijnt niet op de telefoonrekening.",
                        fr: "Le numéro national d'écoute pour les femmes victimes de violences et leur entourage — anonyme, n'apparaît pas sur les factures.",
                        de: "Nationale Nummer für Frauen, die Gewalt erleben, und ihr Umfeld — anonym, erscheint nicht auf der Rechnung."
                    },
                    kw: "violences conjugales femmes battue violence women domestic"
                },
                {
                    id: "fr-119", cat: "youth",
                    name: "119 — Allô Enfance en Danger",
                    phone: "119", tel: "119", free: true, always: true, langs: ["fr"],
                    web: "https://www.allo119.gouv.fr/", chat: "https://www.allo119.gouv.fr/",
                    desc: {
                        en: "National number for children in danger — for children, teenagers and worried adults. Free from any phone, never on the bill. Chat 15:00–20:30.",
                        nl: "Nationaal nummer voor kinderen in gevaar — voor kinderen, tieners en bezorgde volwassenen. Gratis en nooit op de rekening.",
                        fr: "Le numéro national pour l'enfance en danger — pour les enfants, les ados et les adultes préoccupés. Gratuit, n'apparaît sur aucune facture. Tchat 15h–20h30.",
                        de: "Nationale Nummer für Kinder in Gefahr — für Kinder, Jugendliche und besorgte Erwachsene. Kostenlos, nie auf der Rechnung."
                    },
                    kw: "enfance danger maltraitance inceste enfants children abuse"
                }
            ]
        },
        {
            id: "lu", icon: "🇱🇺", continent: "eu",
            name: { en: "Luxembourg", nl: "Luxemburg", fr: "Luxembourg", de: "Luxemburg" },
            note: {
                en: "More Luxembourg helplines are being verified. Meanwhile the EU-wide numbers on the Europe tab also work here.",
                nl: "Meer Luxemburgse hulplijnen worden geverifieerd. De EU-nummers op het Europa-tabblad werken hier ook.",
                fr: "D'autres lignes luxembourgeoises sont en cours de vérification. Les numéros européens de l'onglet Europe fonctionnent aussi ici.",
                de: "Weitere luxemburgische Hilfsangebote werden geprüft. Die EU-Nummern im Europa-Tab gelten auch hier."
            },
            entries: [
                {
                    id: "lu-112", cat: "emergency",
                    name: { en: "112 — Ambulance & fire", nl: "112 — Ambulance & brandweer", fr: "112 — Ambulance & pompiers", de: "112 — Rettung & Feuerwehr" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["fr", "de", "en"],
                    desc: {
                        en: "Emergency medical help and fire brigade (CGDIS).",
                        nl: "Dringende medische hulp en brandweer (CGDIS).",
                        fr: "Secours médicaux d'urgence et pompiers (CGDIS).",
                        de: "Notärztliche Hilfe und Feuerwehr (CGDIS)."
                    },
                    kw: "urgence secours notruf emergency"
                },
                {
                    id: "lu-113", cat: "emergency",
                    name: { en: "113 — Police", nl: "113 — Politie", fr: "113 — Police", de: "113 — Polizei" },
                    phone: "113", tel: "113", free: true, always: true, langs: ["fr", "de", "en"],
                    desc: {
                        en: "Police emergency number in Luxembourg.",
                        nl: "Noodnummer van de politie in Luxemburg.",
                        fr: "Numéro d'urgence de la Police grand-ducale.",
                        de: "Notrufnummer der Polizei in Luxemburg."
                    },
                    kw: "police polizei politie"
                }
            ]
        },
        {
            id: "uk", icon: "🇬🇧", continent: "eu",
            name: { en: "United Kingdom", nl: "Verenigd Koninkrijk", fr: "Royaume-Uni", de: "Vereinigtes Königreich" },
            entries: [
                {
                    id: "uk-999", cat: "emergency",
                    name: { en: "999 — Emergency", nl: "999 — Noodnummer", fr: "999 — Urgences", de: "999 — Notruf" },
                    phone: "999", tel: "999", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "Police, ambulance, fire and coastguard. 112 also works from any phone.",
                        nl: "Politie, ambulance, brandweer en kustwacht. 112 werkt ook.",
                        fr: "Police, ambulance, pompiers et garde-côtes. Le 112 fonctionne aussi.",
                        de: "Polizei, Rettungsdienst, Feuerwehr und Küstenwache. 112 funktioniert ebenfalls."
                    },
                    kw: "emergency police ambulance fire 999 112"
                },
                {
                    id: "uk-111", cat: "emergency",
                    name: "NHS 111",
                    phone: "111", tel: "111", free: true, always: true, langs: ["en"],
                    web: "https://111.nhs.uk/",
                    desc: {
                        en: "Urgent medical help and advice when it's not a life-threatening emergency — phone or online.",
                        nl: "Dringend medisch advies wanneer het geen levensbedreigend noodgeval is — telefonisch of online.",
                        fr: "Aide médicale urgente non vitale — par téléphone ou en ligne.",
                        de: "Dringende medizinische Hilfe, wenn es kein lebensbedrohlicher Notfall ist — telefonisch oder online."
                    },
                    kw: "nhs doctor medical urgent health"
                },
                {
                    id: "uk-samaritans", cat: "talk",
                    name: "Samaritans — 116 123",
                    phone: "116 123", tel: "116123", free: true, always: true, langs: ["en"],
                    web: "https://www.samaritans.org/",
                    desc: {
                        en: "Whatever you're going through, a Samaritan will face it with you — 24 hours a day, 365 days a year.",
                        nl: "Wat je ook doormaakt, een Samaritan luistert — 24 uur per dag, 365 dagen per jaar (Engels).",
                        fr: "Quoi que vous traversiez, un Samaritan vous écoute — 24h/24, 365 jours par an (en anglais).",
                        de: "Was auch immer Sie durchmachen, ein Samaritan hört zu — rund um die Uhr, 365 Tage im Jahr (auf Englisch)."
                    },
                    kw: "suicide listening crisis lonely samaritans"
                },
                {
                    id: "uk-shout", cat: "talk",
                    name: "Shout — text 85258",
                    sms: "85258", free: true, always: true, langs: ["en"],
                    web: "https://giveusashout.org/",
                    desc: {
                        en: "The UK's free, confidential 24/7 mental-health text service. Text SHOUT to 85258 to talk by message.",
                        nl: "De gratis, vertrouwelijke 24/7 sms-hulplijn van het VK. Sms SHOUT naar 85258.",
                        fr: "Service britannique gratuit et confidentiel de soutien par SMS, 24h/24. Envoyez SHOUT au 85258.",
                        de: "Der kostenlose, vertrauliche 24/7-SMS-Dienst des Vereinigten Königreichs. Texten Sie SHOUT an 85258."
                    },
                    kw: "text crisis anxiety mental health shout"
                },
                {
                    id: "uk-childline", cat: "youth",
                    name: "Childline — 0800 1111",
                    phone: "0800 1111", tel: "08001111", free: true, langs: ["en"],
                    web: "https://www.childline.org.uk/", chat: "https://www.childline.org.uk/get-support/",
                    desc: {
                        en: "For anyone under 19 in the UK — about anything. Calls are free and don't show on the bill. 1-2-1 counsellor chat online.",
                        nl: "Voor iedereen onder de 19 in het VK — over alles. Gratis en niet zichtbaar op de rekening.",
                        fr: "Pour les moins de 19 ans au Royaume-Uni — pour tout. Gratuit et invisible sur la facture.",
                        de: "Für alle unter 19 im Vereinigten Königreich — über alles. Kostenlos und nicht auf der Rechnung."
                    },
                    kw: "children young people bullying abuse childline"
                },
                {
                    id: "uk-ndah", cat: "violence",
                    name: "National Domestic Abuse Helpline",
                    phone: "0808 2000 247", tel: "08082000247", free: true, always: true, langs: ["en"],
                    web: "https://www.nationaldahelpline.org.uk/", chat: "https://www.nationaldahelpline.org.uk/chat-to-us-online/",
                    desc: {
                        en: "Run by Refuge: free, confidential support for women experiencing domestic abuse — 24 hours a day, in many languages. In emergency call 999.",
                        nl: "Gratis, vertrouwelijke steun voor vrouwen die huiselijk geweld meemaken — 24 uur per dag. Bij nood: 999.",
                        fr: "Soutien gratuit et confidentiel pour les femmes victimes de violences domestiques — 24h/24. En urgence : 999.",
                        de: "Kostenlose, vertrauliche Unterstützung für Frauen bei häuslicher Gewalt — rund um die Uhr. Im Notfall: 999."
                    },
                    kw: "domestic abuse violence women refuge"
                }
            ]
        },
        {
            id: "ie", icon: "🇮🇪", continent: "eu",
            name: { en: "Ireland", nl: "Ierland", fr: "Irlande", de: "Irland" },
            entries: [
                {
                    id: "ie-112", cat: "emergency",
                    name: { en: "112 / 999 — Emergency", nl: "112 / 999 — Noodnummer", fr: "112 / 999 — Urgences", de: "112 / 999 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "Gardaí, ambulance, fire and coastguard — 112 and 999 both work.",
                        nl: "Politie (Gardaí), ambulance, brandweer en kustwacht — 112 en 999 werken allebei.",
                        fr: "Police (Gardaí), ambulance, pompiers — le 112 et le 999 fonctionnent tous deux.",
                        de: "Polizei (Gardaí), Rettung, Feuerwehr — 112 und 999 funktionieren beide."
                    },
                    kw: "emergency gardai police ambulance"
                },
                {
                    id: "ie-samaritans", cat: "talk",
                    name: "Samaritans Ireland — 116 123",
                    phone: "116 123", tel: "116123", free: true, always: true, langs: ["en"],
                    web: "https://www.samaritans.org/samaritans-ireland/",
                    desc: {
                        en: "Someone to listen, whatever you're facing — free, day and night, every day.",
                        nl: "Iemand die luistert, wat je ook doormaakt — gratis, dag en nacht (Engels).",
                        fr: "Quelqu'un pour vous écouter — gratuit, jour et nuit (en anglais).",
                        de: "Jemand, der zuhört — kostenlos, Tag und Nacht (auf Englisch)."
                    },
                    kw: "suicide listening crisis samaritans"
                },
                {
                    id: "ie-pieta", cat: "talk",
                    name: "Pieta — 1800 247 247",
                    phone: "1800 247 247", tel: "1800247247", free: true, always: true, langs: ["en"],
                    sms: "51444",
                    web: "https://www.pieta.ie/",
                    desc: {
                        en: "Free crisis therapy for suicidal thoughts, self-harm and suicide bereavement — 24-hour helpline by qualified therapists, or text HELP to 51444.",
                        nl: "Gratis crisishulp bij zelfmoordgedachten, zelfbeschadiging en rouw na zelfdoding — 24-uurslijn met professionele therapeuten, of sms HELP naar 51444.",
                        fr: "Aide de crise gratuite en cas de pensées suicidaires ou d'automutilation — ligne 24h/24 tenue par des thérapeutes, ou texto HELP au 51444.",
                        de: "Kostenlose Krisenhilfe bei Suizidgedanken und Selbstverletzung — 24-Stunden-Linie mit Therapeuten, oder SMS HELP an 51444."
                    },
                    kw: "suicide self harm crisis bereavement pieta"
                },
                {
                    id: "ie-childline", cat: "youth",
                    name: "Childline (ISPCC) — 1800 66 66 66",
                    phone: "1800 66 66 66", tel: "1800666666", free: true, always: true, langs: ["en"],
                    web: "https://www.childline.ie/", chat: "https://www.childline.ie/",
                    desc: {
                        en: "For every child and young person in Ireland — any reason, any time. Call free or chat online, 24 hours a day.",
                        nl: "Voor elk kind en elke jongere in Ierland — om elke reden, op elk moment. Gratis bellen of chatten, 24 uur per dag.",
                        fr: "Pour chaque enfant et jeune en Irlande — pour toute raison, à tout moment. Appel gratuit ou chat, 24h/24.",
                        de: "Für jedes Kind und alle Jugendlichen in Irland — aus jedem Grund, jederzeit. Kostenlos anrufen oder chatten."
                    },
                    kw: "children young people childline ispcc"
                }
            ]
        },
        {
            id: "ch", icon: "🇨🇭", continent: "eu",
            name: { en: "Switzerland", nl: "Zwitserland", fr: "Suisse", de: "Schweiz" },
            entries: [
                {
                    id: "ch-urgences", cat: "emergency",
                    name: { en: "Emergency — 112 · 117 · 118 · 144", nl: "Nood — 112 · 117 · 118 · 144", fr: "Urgences — 112 · 117 · 118 · 144", de: "Notruf — 112 · 117 · 118 · 144" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["de", "fr", "it", "en"],
                    desc: {
                        en: "112 works everywhere; 117 police, 118 fire, 144 ambulance, 145 poisoning (Tox Info Suisse).",
                        nl: "112 werkt overal; 117 politie, 118 brandweer, 144 ambulance, 145 vergiftiging (Tox Info Suisse).",
                        fr: "Le 112 fonctionne partout ; 117 police, 118 pompiers, 144 ambulance, 145 intoxications (Tox Info Suisse).",
                        de: "112 funktioniert überall; 117 Polizei, 118 Feuerwehr, 144 Rettung, 145 Vergiftungen (Tox Info Suisse)."
                    },
                    kw: "notruf polizei feuerwehr rettung gift urgence police pompiers ambulance poison 117 118 144 145"
                },
                {
                    id: "ch-143", cat: "talk",
                    name: "143 — Die Dargebotene Hand / La Main Tendue",
                    phone: "143", tel: "143", always: true, langs: ["de", "fr", "it"],
                    web: "https://www.143.ch/",
                    desc: {
                        en: "Switzerland's listening line: someone to talk to in German, French or Italian — day and night, anonymous.",
                        nl: "De Zwitserse luisterlijn: iemand om mee te praten in het Duits, Frans of Italiaans — dag en nacht, anoniem.",
                        fr: "La ligne d'écoute suisse : quelqu'un à qui parler en français, allemand ou italien — jour et nuit, anonyme.",
                        de: "Die Schweizer Anlaufstelle zum Reden — Tag und Nacht, anonym, auf Deutsch, Französisch oder Italienisch."
                    },
                    kw: "reden zuhören krise einsam parler ecoute suicide crisis"
                },
                {
                    id: "ch-147", cat: "youth",
                    name: "147 — Pro Juventute",
                    phone: "147", tel: "147", free: true, always: true, langs: ["de", "fr", "it"],
                    web: "https://www.147.ch/", chat: "https://www.147.ch/",
                    desc: {
                        en: "Advice for children and young people — call, WhatsApp, SMS or chat, around the clock. Free and not on the phone bill.",
                        nl: "Advies voor kinderen en jongeren — bellen, WhatsApp, sms of chat, de klok rond. Gratis en niet op de rekening.",
                        fr: "Conseils pour enfants et jeunes — appel, WhatsApp, SMS ou chat, 24h/24. Gratuit et invisible sur la facture.",
                        de: "Beratung für Kinder und Jugendliche — Anruf, WhatsApp, SMS oder Chat, rund um die Uhr. Kostenlos und nicht auf der Rechnung."
                    },
                    kw: "kinder jugendliche beratung jeunes enfants children youth"
                }
            ]
        },
        {
            id: "at", icon: "🇦🇹", continent: "eu",
            name: { en: "Austria", nl: "Oostenrijk", fr: "Autriche", de: "Österreich" },
            entries: [
                {
                    id: "at-urgences", cat: "emergency",
                    name: { en: "Emergency — 112 · 133 · 122 · 144", nl: "Nood — 112 · 133 · 122 · 144", fr: "Urgences — 112 · 133 · 122 · 144", de: "Notruf — 112 · 133 · 122 · 144" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["de", "en"],
                    desc: {
                        en: "112 works everywhere; 133 police, 122 fire brigade, 144 ambulance.",
                        nl: "112 werkt overal; 133 politie, 122 brandweer, 144 ambulance.",
                        fr: "Le 112 fonctionne partout ; 133 police, 122 pompiers, 144 ambulance.",
                        de: "112 funktioniert überall; 133 Polizei, 122 Feuerwehr, 144 Rettung."
                    },
                    kw: "notruf polizei feuerwehr rettung 133 122 144 emergency"
                },
                {
                    id: "at-142", cat: "talk",
                    name: "TelefonSeelsorge — 142",
                    phone: "142", tel: "142", free: true, always: true, langs: ["de"],
                    web: "https://www.telefonseelsorge.at/", chat: "https://chat.onlineberatung-telefonseelsorge.at/hc/de",
                    desc: {
                        en: "Austria's emergency listening number — free from anywhere in Austria, day and night, not on your phone bill. Chat daily 16:00–23:00.",
                        nl: "De Oostenrijkse luisterlijn — gratis, dag en nacht, niet op de rekening. Chat dagelijks 16–23 u.",
                        fr: "La ligne d'écoute autrichienne — gratuite, jour et nuit, invisible sur la facture. Chat 16h–23h.",
                        de: "Notruf 142 — rund um die Uhr, kostenlos und vertraulich, nicht auf der Telefonrechnung. Chat täglich 16–23 Uhr."
                    },
                    kw: "seelsorge krise suizid zuhören crisis suicide"
                },
                {
                    id: "at-147", cat: "youth",
                    name: "Rat auf Draht — 147",
                    phone: "147", tel: "147", free: true, always: true, langs: ["de"],
                    web: "https://www.rataufdraht.at/", chat: "https://www.rataufdraht.at/chat-beratung",
                    desc: {
                        en: "Austria's emergency number for children and young people — any time, anonymous and free.",
                        nl: "Het Oostenrijkse noodnummer voor kinderen en jongeren — altijd, anoniem en gratis.",
                        fr: "Le numéro d'urgence autrichien pour les enfants et les jeunes — à tout moment, anonyme et gratuit.",
                        de: "Der Notruf für Kinder und Jugendliche — jederzeit, anonym und kostenlos."
                    },
                    kw: "kinder jugendliche mobbing beratung children youth"
                },
                {
                    id: "at-frauenhelpline", cat: "violence",
                    name: "Frauenhelpline — 0800 222 555",
                    phone: "0800 222 555", tel: "0800222555", free: true, always: true, langs: ["de"],
                    web: "https://www.frauenhelpline.at/",
                    desc: {
                        en: "Austrian helpline against violence towards women — free, anonymous, around the clock.",
                        nl: "Oostenrijkse hulplijn tegen geweld op vrouwen — gratis, anoniem, de klok rond.",
                        fr: "Ligne autrichienne contre la violence envers les femmes — gratuite, anonyme, 24h/24.",
                        de: "Frauenhelpline gegen Gewalt — kostenlos, anonym, rund um die Uhr."
                    },
                    kw: "gewalt frauen violence women"
                }
            ]
        },
        {
            id: "es", icon: "🇪🇸", continent: "eu",
            name: { en: "Spain", nl: "Spanje", fr: "Espagne", de: "Spanien" },
            entries: [
                {
                    id: "es-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["es", "en"],
                    desc: {
                        en: "All emergencies in Spain: medical, fire and police.",
                        nl: "Alle noodgevallen in Spanje: medisch, brandweer en politie.",
                        fr: "Toutes les urgences en Espagne : médicales, incendie et police.",
                        de: "Alle Notfälle in Spanien: medizinisch, Feuerwehr und Polizei."
                    },
                    kw: "emergencia policia ambulancia emergency"
                },
                {
                    id: "es-024", cat: "talk",
                    name: "024 — Línea de atención a la conducta suicida",
                    phone: "024", tel: "024", free: true, always: true, langs: ["es"],
                    web: "https://www.sanidad.gob.es/linea024/home.htm",
                    desc: {
                        en: "Spain's national line for suicidal thoughts and their loved ones — free, confidential, run by the Ministry of Health. Chat and sign-language access via the site.",
                        nl: "De Spaanse nationale lijn bij zelfmoordgedachten, ook voor naasten — gratis en vertrouwelijk, van het ministerie van Gezondheid.",
                        fr: "La ligne nationale espagnole pour les pensées suicidaires et les proches — gratuite et confidentielle, gérée par le ministère de la Santé.",
                        de: "Spaniens nationale Nummer bei Suizidgedanken, auch für Angehörige — kostenlos und vertraulich, vom Gesundheitsministerium."
                    },
                    kw: "suicidio conducta suicida crisis suicide suizid"
                },
                {
                    id: "es-016", cat: "violence",
                    name: "016 — Violencia de género",
                    phone: "016", tel: "016", free: true, always: true, langs: ["es"],
                    web: "https://violenciagenero.igualdad.gob.es/",
                    desc: {
                        en: "National line against gender-based violence — free, 24/7, leaves no trace on the phone bill; advice in many languages. In emergency call 112.",
                        nl: "Nationale lijn tegen gendergeweld — gratis, 24/7, laat geen spoor op de rekening. Bij nood: 112.",
                        fr: "Ligne nationale contre les violences de genre — gratuite, 24h/24, sans trace sur la facture. En urgence : 112.",
                        de: "Nationale Nummer gegen geschlechtsspezifische Gewalt — kostenlos, 24/7, ohne Spur auf der Rechnung. Im Notfall: 112."
                    },
                    kw: "violencia genero machista mujer violence women domestic"
                },
                {
                    id: "es-anar", cat: "youth",
                    name: "Fundación ANAR — 900 20 20 10",
                    phone: "900 20 20 10", tel: "900202010", free: true, always: true, langs: ["es"],
                    web: "https://www.anar.org/",
                    desc: {
                        en: "Helpline for children and teenagers at risk — free, confidential, staffed by psychologists day and night. Adults worried about a child: 600 50 51 52.",
                        nl: "Hulplijn voor kinderen en tieners in gevaar — gratis, vertrouwelijk, dag en nacht bemand door psychologen.",
                        fr: "Ligne pour enfants et adolescents en danger — gratuite, confidentielle, tenue par des psychologues jour et nuit.",
                        de: "Hotline für Kinder und Jugendliche in Gefahr — kostenlos, vertraulich, rund um die Uhr mit Psychologen besetzt."
                    },
                    kw: "niños adolescentes riesgo anar children youth"
                }
            ]
        },
        {
            id: "it", icon: "🇮🇹", continent: "eu",
            name: { en: "Italy", nl: "Italië", fr: "Italie", de: "Italien" },
            entries: [
                {
                    id: "it-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["it", "en"],
                    desc: {
                        en: "The single European emergency number covers police, medical and fire across Italy. Legacy numbers 113 (police), 115 (fire) and 118 (medical) still work.",
                        nl: "Het Europese noodnummer dekt politie, medische hulp en brandweer in heel Italië. Ook 113 (politie), 115 (brandweer) en 118 (medisch) werken nog.",
                        fr: "Le numéro d'urgence européen couvre police, secours médicaux et pompiers dans toute l'Italie. Les 113, 115 et 118 fonctionnent encore.",
                        de: "Die europäische Notrufnummer deckt Polizei, Rettung und Feuerwehr in ganz Italien ab. Auch 113, 115 und 118 funktionieren weiterhin."
                    },
                    kw: "emergenza polizia ambulanza vigili 113 115 118 emergency"
                },
                {
                    id: "it-telefonoamico", cat: "talk",
                    name: "Telefono Amico Italia",
                    phone: "02 2327 2327", tel: "0223272327", langs: ["it"],
                    hours: { en: "Daily 9:00–24:00", nl: "elke dag 9–24 u", fr: "tous les jours 9h–24h", de: "täglich 9–24 Uhr" },
                    web: "https://www.telefonoamico.it/",
                    desc: {
                        en: "Emotional-support line for loneliness, distress and suicidal thoughts (Italian) — also via WhatsApp and mail.",
                        nl: "Luisterlijn bij eenzaamheid, nood en zelfmoordgedachten (Italiaans) — ook via WhatsApp en mail.",
                        fr: "Ligne d'écoute pour la solitude, la détresse et les pensées suicidaires (en italien) — aussi via WhatsApp.",
                        de: "Zuhör-Linie bei Einsamkeit, Not und Suizidgedanken (auf Italienisch) — auch über WhatsApp."
                    },
                    kw: "ascolto solitudine suicidio amico suicide listening"
                },
                {
                    id: "it-1522", cat: "violence",
                    name: "1522 — Anti violenza e stalking",
                    phone: "1522", tel: "1522", free: true, always: true, langs: ["it", "en"],
                    web: "https://www.1522.eu/", chat: "https://www.1522.eu/",
                    desc: {
                        en: "Public national line for women facing violence and stalking — free from any phone, 24/7, multiple languages, run by the Department for Equal Opportunities.",
                        nl: "Nationale lijn voor vrouwen die geweld of stalking meemaken — gratis, 24/7, meerdere talen.",
                        fr: "Ligne nationale publique contre la violence et le harcèlement envers les femmes — gratuite, 24h/24, plusieurs langues.",
                        de: "Staatliche Nummer für Frauen bei Gewalt und Stalking — kostenlos, rund um die Uhr, mehrsprachig."
                    },
                    kw: "violenza stalking donne violence women domestic"
                },
                {
                    id: "it-azzurro", cat: "youth",
                    name: "Telefono Azzurro — 19696",
                    phone: "19696", tel: "19696", free: true, always: true, langs: ["it"],
                    web: "https://azzurro.it/", chat: "https://azzurro.it/",
                    desc: {
                        en: "Listening line for children and teenagers, and for adults worried about a child — free, 24/7. Emergencies involving missing children: 116 000.",
                        nl: "Luisterlijn voor kinderen en tieners, en voor bezorgde volwassenen — gratis, 24/7. Vermiste kinderen: 116 000.",
                        fr: "Ligne d'écoute pour enfants et ados, et pour les adultes inquiets — gratuite, 24h/24. Enfants disparus : 116 000.",
                        de: "Hotline für Kinder und Jugendliche sowie besorgte Erwachsene — kostenlos, 24/7. Vermisste Kinder: 116 000."
                    },
                    kw: "bambini adolescenti abuso azzurro children youth"
                }
            ]
        },
        {
            id: "pt", icon: "🇵🇹", continent: "eu",
            name: { en: "Portugal", nl: "Portugal", fr: "Portugal", de: "Portugal" },
            entries: [
                {
                    id: "pt-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["pt", "en"],
                    desc: {
                        en: "All emergencies in Portugal: medical, fire and police.",
                        nl: "Alle noodgevallen in Portugal: medisch, brandweer en politie.",
                        fr: "Toutes les urgences au Portugal : médicales, incendie et police.",
                        de: "Alle Notfälle in Portugal: medizinisch, Feuerwehr und Polizei."
                    },
                    kw: "emergencia policia bombeiros emergency"
                },
                {
                    id: "pt-sns24", cat: "emergency",
                    name: "SNS 24 — 808 24 24 24",
                    phone: "808 24 24 24", tel: "808242424", always: true, langs: ["pt"],
                    web: "https://www.sns24.gov.pt/",
                    desc: {
                        en: "The national health line: medical advice and triage day and night, including psychological counselling (option 4).",
                        nl: "De nationale gezondheidslijn: medisch advies dag en nacht, inclusief psychologische hulp (optie 4).",
                        fr: "La ligne nationale de santé : conseil médical jour et nuit, y compris soutien psychologique (option 4).",
                        de: "Die nationale Gesundheitslinie: medizinische Beratung Tag und Nacht, inklusive psychologischer Hilfe (Option 4)."
                    },
                    kw: "saude medico conselho psicologico health doctor"
                },
                {
                    id: "pt-apav", cat: "violence",
                    name: "APAV — 116 006",
                    phone: "116 006", tel: "116006", free: true, langs: ["pt", "en"],
                    hours: { en: "Mon–Fri, business hours", nl: "ma–vr, kantooruren", fr: "lu–ve, heures de bureau", de: "Mo–Fr, Bürozeiten" },
                    web: "https://apav.pt/",
                    desc: {
                        en: "Portuguese victim-support association — free line for victims of any crime, including domestic violence.",
                        nl: "Portugese vereniging voor slachtofferhulp — gratis lijn voor slachtoffers van elk misdrijf, ook huiselijk geweld.",
                        fr: "Association portugaise d'aide aux victimes — ligne gratuite pour les victimes de toute infraction.",
                        de: "Portugiesische Opferhilfe — kostenlose Nummer für Opfer aller Straftaten, auch häuslicher Gewalt."
                    },
                    kw: "vitima crime violencia apoio victim violence"
                }
            ]
        },
        {
            id: "se", icon: "🇸🇪", continent: "eu",
            name: { en: "Sweden", nl: "Zweden", fr: "Suède", de: "Schweden" },
            entries: [
                {
                    id: "se-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["sv", "en"],
                    desc: {
                        en: "All emergencies in Sweden. Non-urgent medical advice: 1177.",
                        nl: "Alle noodgevallen in Zweden. Niet-dringend medisch advies: 1177.",
                        fr: "Toutes les urgences en Suède. Conseil médical non urgent : 1177.",
                        de: "Alle Notfälle in Schweden. Nicht dringender medizinischer Rat: 1177."
                    },
                    kw: "nödnummer polis ambulans 1177 emergency"
                },
                {
                    id: "se-mind", cat: "talk",
                    name: "Mind Självmordslinjen — 90101",
                    phone: "90101", tel: "90101", always: true, langs: ["sv"],
                    web: "https://mind.se/",
                    desc: {
                        en: "Sweden's suicide-prevention line — call 90101 or chat via mind.se, day and night (Swedish).",
                        nl: "De Zweedse zelfmoordpreventielijn — bel 90101 of chat via mind.se, dag en nacht (Zweeds).",
                        fr: "La ligne suédoise de prévention du suicide — appelez le 90101 ou chattez via mind.se (en suédois).",
                        de: "Schwedens Suizidpräventionslinie — 90101 anrufen oder über mind.se chatten (auf Schwedisch)."
                    },
                    kw: "självmord kris suicide suizid"
                },
                {
                    id: "se-bris", cat: "youth",
                    name: "Bris — 116 111",
                    phone: "116 111", tel: "116111", free: true, always: true, langs: ["sv"],
                    web: "https://www.bris.se/", chat: "https://www.bris.se/for-barn-och-unga/prata-med-oss/",
                    desc: {
                        en: "For everyone under 18 in Sweden — call, SMS, chat or mail, open every day and night. Free and anonymous.",
                        nl: "Voor iedereen onder de 18 in Zweden — bellen, sms'en, chatten of mailen, elke dag en nacht open. Gratis en anoniem.",
                        fr: "Pour les moins de 18 ans en Suède — appel, SMS, chat ou mail, ouvert jour et nuit. Gratuit et anonyme.",
                        de: "Für alle unter 18 in Schweden — Anruf, SMS, Chat oder Mail, Tag und Nacht. Kostenlos und anonym."
                    },
                    kw: "barn unga bris children youth"
                },
                {
                    id: "se-kvinnofrid", cat: "violence",
                    name: "Kvinnofridslinjen — 116 016",
                    phone: "116 016", tel: "116016", free: true, always: true, langs: ["sv", "en"],
                    web: "https://kvinnofridslinjen.se/",
                    desc: {
                        en: "Sweden's national women's helpline for anyone exposed to physical, psychological or sexual violence — free, anonymous, around the clock.",
                        nl: "De Zweedse nationale hulplijn voor wie fysiek, psychisch of seksueel geweld meemaakt — gratis, anoniem, de klok rond.",
                        fr: "Ligne nationale suédoise pour les personnes exposées à la violence physique, psychologique ou sexuelle — gratuite, anonyme, 24h/24.",
                        de: "Schwedens nationale Frauenhotline bei körperlicher, psychischer oder sexueller Gewalt — kostenlos, anonym, rund um die Uhr."
                    },
                    kw: "våld kvinnor violence women domestic"
                }
            ]
        },
        {
            id: "no", icon: "🇳🇴", continent: "eu",
            name: { en: "Norway", nl: "Noorwegen", fr: "Norvège", de: "Norwegen" },
            entries: [
                {
                    id: "no-urgences", cat: "emergency",
                    name: { en: "Emergency — 113 · 112 · 110", nl: "Nood — 113 · 112 · 110", fr: "Urgences — 113 · 112 · 110", de: "Notruf — 113 · 112 · 110" },
                    phone: "113", tel: "113", free: true, always: true, langs: ["no", "en"],
                    desc: {
                        en: "In Norway: 113 ambulance, 112 police, 110 fire. Out-of-hours GP: 116 117.",
                        nl: "In Noorwegen: 113 ambulance, 112 politie, 110 brandweer. Huisartsenwacht: 116 117.",
                        fr: "En Norvège : 113 ambulance, 112 police, 110 pompiers. Médecin de garde : 116 117.",
                        de: "In Norwegen: 113 Rettung, 112 Polizei, 110 Feuerwehr. Bereitschaftsarzt: 116 117."
                    },
                    kw: "nødnummer politi ambulanse brann legevakt 110 112 113 116117 emergency"
                },
                {
                    id: "no-mentalhelse", cat: "talk",
                    name: "Mental Helse — 116 123",
                    phone: "116 123", tel: "116123", free: true, always: true, langs: ["no"],
                    web: "https://www.mentalhelse.no/", chat: "https://sidetmedord.mentalhelse.no/",
                    desc: {
                        en: "Norway's biggest help line and chat — always open when life is hard (Norwegian). Also parent support (press 2).",
                        nl: "De grootste hulplijn en chat van Noorwegen — altijd open wanneer het leven zwaar is (Noors).",
                        fr: "La plus grande ligne d'aide de Norvège — toujours ouverte quand la vie est dure (en norvégien).",
                        de: "Norwegens größte Hilfetelefon und Chat — immer offen, wenn das Leben schwer ist (auf Norwegisch)."
                    },
                    kw: "hjelpetelefon krise selvmord suicide crisis"
                },
                {
                    id: "no-alarmtelefonen", cat: "youth",
                    name: "Alarmtelefonen for barn og unge — 116 111",
                    phone: "116 111", tel: "116111", free: true, always: true, langs: ["no"],
                    web: "https://www.116111.no/",
                    desc: {
                        en: "For children and young people experiencing violence, abuse or neglect — free, day and night.",
                        nl: "Voor kinderen en jongeren die geweld, misbruik of verwaarlozing meemaken — gratis, dag en nacht.",
                        fr: "Pour les enfants et les jeunes victimes de violence ou de négligence — gratuit, jour et nuit.",
                        de: "Für Kinder und Jugendliche bei Gewalt, Missbrauch oder Vernachlässigung — kostenlos, Tag und Nacht."
                    },
                    kw: "barn unge vold omsorgssvikt children youth abuse"
                }
            ]
        },
        {
            id: "dk", icon: "🇩🇰", continent: "eu",
            name: { en: "Denmark", nl: "Denemarken", fr: "Danemark", de: "Dänemark" },
            entries: [
                {
                    id: "dk-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["da", "en"],
                    desc: {
                        en: "Life-threatening emergencies in Denmark. Police non-emergency: 114.",
                        nl: "Levensbedreigende noodgevallen in Denemarken. Politie niet-dringend: 114.",
                        fr: "Urgences vitales au Danemark. Police non urgente : 114.",
                        de: "Lebensbedrohliche Notfälle in Dänemark. Polizei (nicht dringend): 114."
                    },
                    kw: "alarm politi ambulance 114 emergency"
                },
                {
                    id: "dk-livslinien", cat: "talk",
                    name: "Livslinien — 70 201 201",
                    phone: "70 201 201", tel: "70201201", langs: ["da"],
                    hours: { en: "Daily 9:00–05:00", nl: "elke dag 9–05 u", fr: "tous les jours 9h–05h", de: "täglich 9–05 Uhr" },
                    web: "https://www.livslinien.dk/", chat: "https://www.livslinien.dk/raadgivning/chatraadgivning",
                    desc: {
                        en: "Denmark's line for suicidal thoughts and crisis — anonymous counselling by phone and chat (Danish).",
                        nl: "De Deense lijn bij zelfmoordgedachten en crisis — anoniem, telefonisch en per chat (Deens).",
                        fr: "La ligne danoise pour les pensées suicidaires et les crises — anonyme, par téléphone et chat (en danois).",
                        de: "Dänemarks Nummer bei Suizidgedanken und Krisen — anonym, per Telefon und Chat (auf Dänisch)."
                    },
                    kw: "selvmord krise livslinien suicide"
                },
                {
                    id: "dk-bornetelefonen", cat: "youth",
                    name: "BørneTelefonen — 116 111",
                    phone: "116 111", tel: "116111", free: true, always: true, langs: ["da"],
                    web: "https://bornetelefonen.dk/",
                    desc: {
                        en: "Children's Welfare's line for everyone under 18 in Denmark — anonymous and free, call, chat, SMS or letter.",
                        nl: "De Deense kindertelefoon voor iedereen onder de 18 — anoniem en gratis; bellen, chatten of sms'en.",
                        fr: "La ligne danoise des enfants pour les moins de 18 ans — anonyme et gratuite ; appel, chat ou SMS.",
                        de: "Dänemarks Kindertelefon für alle unter 18 — anonym und kostenlos; Anruf, Chat oder SMS."
                    },
                    kw: "børn unge children youth"
                }
            ]
        },
        {
            id: "fi", icon: "🇫🇮", continent: "eu",
            name: { en: "Finland", nl: "Finland", fr: "Finlande", de: "Finnland" },
            entries: [
                {
                    id: "fi-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["fi", "sv", "en"],
                    desc: {
                        en: "All emergencies in Finland — one number for police, medical and fire.",
                        nl: "Alle noodgevallen in Finland — één nummer voor politie, medische hulp en brandweer.",
                        fr: "Toutes les urgences en Finlande — un seul numéro.",
                        de: "Alle Notfälle in Finnland — eine Nummer für Polizei, Rettung und Feuerwehr."
                    },
                    kw: "hätänumero poliisi ambulanssi emergency"
                },
                {
                    id: "fi-mieli", cat: "talk",
                    name: "MIELI Kriisipuhelin — 09 2525 0111",
                    phone: "09 2525 0111", tel: "0925250111", always: true, langs: ["fi"],
                    web: "https://mieli.fi/",
                    desc: {
                        en: "Finland's crisis line — 24/7 in Finnish; Swedish 09 2525 0112, Arabic/English 09 2525 0113 (limited hours, see site).",
                        nl: "De Finse crisislijn — 24/7 in het Fins; Zweeds 09 2525 0112, Arabisch/Engels 09 2525 0113 (beperkte uren).",
                        fr: "La ligne de crise finlandaise — 24h/24 en finnois ; suédois 09 2525 0112, arabe/anglais 09 2525 0113 (horaires limités).",
                        de: "Finnlands Krisentelefon — rund um die Uhr auf Finnisch; Schwedisch 09 2525 0112, Arabisch/Englisch 09 2525 0113 (begrenzte Zeiten)."
                    },
                    kw: "kriisi itsemurha crisis suicide"
                }
            ]
        },
        {
            id: "is", icon: "🇮🇸", continent: "eu",
            name: { en: "Iceland", nl: "IJsland", fr: "Islande", de: "Island" },
            entries: [
                {
                    id: "is-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["is", "en"],
                    web: "https://www.112.is/",
                    desc: {
                        en: "Iceland's single emergency number — also for reporting violence and child protection concerns.",
                        nl: "Het enige noodnummer van IJsland — ook voor het melden van geweld en zorgen over kinderen.",
                        fr: "Le numéro d'urgence unique de l'Islande — aussi pour signaler des violences.",
                        de: "Islands einzige Notrufnummer — auch zum Melden von Gewalt und Kinderschutzfällen."
                    },
                    kw: "neyðarnúmer emergency violence"
                },
                {
                    id: "is-1717", cat: "talk",
                    name: "1717 — Red Cross helpline",
                    phone: "1717", tel: "1717", free: true, always: true, langs: ["is", "en"],
                    web: "https://www.raudikrossinn.is/hjalparsiminn/",
                    desc: {
                        en: "The Icelandic Red Cross helpline for anyone who needs to talk — free, anonymous, day and night. Online chat at 1717.is.",
                        nl: "De hulplijn van het IJslandse Rode Kruis voor iedereen die wil praten — gratis, anoniem, dag en nacht.",
                        fr: "La ligne de la Croix-Rouge islandaise pour quiconque a besoin de parler — gratuite, anonyme, jour et nuit.",
                        de: "Die Helpline des isländischen Roten Kreuzes für alle, die reden möchten — kostenlos, anonym, Tag und Nacht."
                    },
                    kw: "hjálparsíminn kreppa crisis talk"
                }
            ]
        },
        {
            id: "pl", icon: "🇵🇱", continent: "eu",
            name: { en: "Poland", nl: "Polen", fr: "Pologne", de: "Polen" },
            entries: [
                {
                    id: "pl-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["pl", "en"],
                    desc: {
                        en: "All emergencies in Poland; 997 police, 998 fire and 999 ambulance also still work.",
                        nl: "Alle noodgevallen in Polen; ook 997 politie, 998 brandweer en 999 ambulance werken nog.",
                        fr: "Toutes les urgences en Pologne ; les 997, 998 et 999 fonctionnent encore.",
                        de: "Alle Notfälle in Polen; 997 Polizei, 998 Feuerwehr und 999 Rettung funktionieren weiterhin."
                    },
                    kw: "alarmowy policja pogotowie 997 998 999 emergency"
                },
                {
                    id: "pl-116111", cat: "youth",
                    name: "116 111 — Telefon Zaufania dla Dzieci",
                    phone: "116 111", tel: "116111", free: true, always: true, langs: ["pl"],
                    web: "https://116111.pl/", chat: "https://116111.pl/napisz/",
                    desc: {
                        en: "Poland's trust line for children and teenagers, run by the Empowering Children Foundation — free and confidential, 24/7.",
                        nl: "De Poolse vertrouwenslijn voor kinderen en tieners — gratis en vertrouwelijk, 24/7.",
                        fr: "La ligne de confiance polonaise pour enfants et ados — gratuite et confidentielle, 24h/24.",
                        de: "Polens Vertrauenstelefon für Kinder und Jugendliche — kostenlos und vertraulich, rund um die Uhr."
                    },
                    kw: "dzieci młodzież zaufania children youth"
                },
                {
                    id: "pl-116123", cat: "talk",
                    name: "116 123 — Telefon Zaufania dla Dorosłych",
                    phone: "116 123", tel: "116123", free: true, langs: ["pl"],
                    web: "https://liniawsparcia.pl/",
                    desc: {
                        en: "Crisis line for adults in emotional distress (Polish). The 24/7 support centre 800 70 2222 also helps in a mental-health crisis.",
                        nl: "Crisislijn voor volwassenen in emotionele nood (Pools). Ook het 24/7 steunpunt 800 70 2222 helpt.",
                        fr: "Ligne de crise pour adultes en détresse émotionnelle (en polonais). Le centre 800 70 2222 aide aussi, 24h/24.",
                        de: "Krisentelefon für Erwachsene in seelischer Not (auf Polnisch). Auch die 24/7-Nummer 800 70 2222 hilft."
                    },
                    kw: "kryzys wsparcie dorośli crisis suicide"
                }
            ]
        },
        {
            id: "cz", icon: "🇨🇿", continent: "eu",
            name: { en: "Czechia", nl: "Tsjechië", fr: "Tchéquie", de: "Tschechien" },
            entries: [
                {
                    id: "cz-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["cs", "en"],
                    desc: {
                        en: "All emergencies; 150 fire, 155 ambulance and 158 police also work.",
                        nl: "Alle noodgevallen; ook 150 brandweer, 155 ambulance en 158 politie werken.",
                        fr: "Toutes les urgences ; les 150, 155 et 158 fonctionnent aussi.",
                        de: "Alle Notfälle; auch 150 Feuerwehr, 155 Rettung und 158 Polizei funktionieren."
                    },
                    kw: "tísňová linka policie záchranka 150 155 158 emergency"
                },
                {
                    id: "cz-linkabezpeci", cat: "youth",
                    name: "Linka bezpečí — 116 111",
                    phone: "116 111", tel: "116111", free: true, always: true, langs: ["cs"],
                    web: "https://www.linkabezpeci.cz/", chat: "https://chat.linkabezpeci.cz/",
                    desc: {
                        en: "Czech safety line for children and students up to 26 — free and anonymous, non-stop. Parents: 606 021 021.",
                        nl: "De Tsjechische veiligheidslijn voor kinderen en studenten tot 26 — gratis en anoniem, non-stop.",
                        fr: "La ligne tchèque pour enfants et étudiants jusqu'à 26 ans — gratuite et anonyme, non-stop.",
                        de: "Tschechiens Vertrauenslinie für Kinder und Studierende bis 26 — kostenlos und anonym, rund um die Uhr."
                    },
                    kw: "děti mládež bezpečí children youth"
                }
            ]
        },
        {
            id: "us", icon: "🇺🇸", continent: "am",
            name: { en: "United States", nl: "Verenigde Staten", fr: "États-Unis", de: "Vereinigte Staaten" },
            entries: [
                {
                    id: "us-911", cat: "emergency",
                    name: { en: "911 — Emergency", nl: "911 — Noodnummer", fr: "911 — Urgences", de: "911 — Notruf" },
                    phone: "911", tel: "911", free: true, always: true, langs: ["en", "es"],
                    desc: {
                        en: "Police, fire and ambulance across the United States.",
                        nl: "Politie, brandweer en ambulance in de hele Verenigde Staten.",
                        fr: "Police, pompiers et ambulance dans tous les États-Unis.",
                        de: "Polizei, Feuerwehr und Rettungsdienst in den gesamten USA."
                    },
                    kw: "emergency police fire ambulance"
                },
                {
                    id: "us-988", cat: "talk",
                    name: "988 Suicide & Crisis Lifeline",
                    phone: "988", tel: "988", sms: "988", free: true, always: true, langs: ["en", "es"],
                    web: "https://988lifeline.org/", chat: "https://chat.988lifeline.org/",
                    desc: {
                        en: "Call or text 988 for mental-health crises, emotional distress, substance-use concerns or suicidal thoughts — free, confidential, 24/7, in English and Spanish.",
                        nl: "Bel of sms 988 bij mentale crisis, emotionele nood of zelfmoordgedachten — gratis, vertrouwelijk, 24/7 (Engels/Spaans).",
                        fr: "Appelez ou textez le 988 en cas de crise, de détresse ou de pensées suicidaires — gratuit, confidentiel, 24h/24 (anglais/espagnol).",
                        de: "988 anrufen oder texten bei Krisen, seelischer Not oder Suizidgedanken — kostenlos, vertraulich, rund um die Uhr (Englisch/Spanisch)."
                    },
                    kw: "suicide crisis lifeline distress mental health text"
                },
                {
                    id: "us-poison", cat: "emergency",
                    name: "Poison Help",
                    phone: "1-800-222-1222", tel: "18002221222", free: true, always: true, langs: ["en", "es"],
                    web: "https://poisonhelp.hrsa.gov/",
                    desc: {
                        en: "Connects you to your local poison control center — expert advice on poisonings, day and night.",
                        nl: "Verbindt je met het lokale antigifcentrum — deskundig advies bij vergiftiging, dag en nacht.",
                        fr: "Vous met en relation avec le centre antipoison local — conseils d'experts, jour et nuit.",
                        de: "Verbindet mit der örtlichen Giftnotrufzentrale — fachkundiger Rat bei Vergiftungen, Tag und Nacht."
                    },
                    kw: "poison overdose chemicals vergiftiging intoxication"
                }
            ]
        },
        {
            id: "ca", icon: "🇨🇦", continent: "am",
            name: { en: "Canada", nl: "Canada", fr: "Canada", de: "Kanada" },
            entries: [
                {
                    id: "ca-911", cat: "emergency",
                    name: { en: "911 — Emergency", nl: "911 — Noodnummer", fr: "911 — Urgences", de: "911 — Notruf" },
                    phone: "911", tel: "911", free: true, always: true, langs: ["en", "fr"],
                    desc: {
                        en: "Police, fire and ambulance across Canada.",
                        nl: "Politie, brandweer en ambulance in heel Canada.",
                        fr: "Police, pompiers et ambulance partout au Canada.",
                        de: "Polizei, Feuerwehr und Rettungsdienst in ganz Kanada."
                    },
                    kw: "emergency police fire ambulance urgence"
                },
                {
                    id: "ca-988", cat: "talk",
                    name: "9-8-8: Suicide Crisis Helpline",
                    phone: "988", tel: "988", sms: "988", free: true, always: true, langs: ["en", "fr"],
                    web: "https://988.ca/",
                    desc: {
                        en: "Call or text 9-8-8 any time — a safe space to talk, 24 hours a day, in English and French.",
                        nl: "Bel of sms 9-8-8 op elk moment — een veilige plek om te praten, 24 uur per dag (Engels/Frans).",
                        fr: "Appelez ou textez le 9-8-8 à tout moment — un espace sûr pour parler, 24h/24, en français et en anglais.",
                        de: "9-8-8 anrufen oder texten, jederzeit — ein sicherer Raum zum Reden (Englisch/Französisch)."
                    },
                    kw: "suicide crisis helpline text suicidaire"
                },
                {
                    id: "ca-kidshelpphone", cat: "youth",
                    name: "Kids Help Phone",
                    phone: "1-800-668-6868", tel: "18006686868", sms: "686868", free: true, always: true, langs: ["en", "fr"],
                    web: "https://kidshelpphone.ca/",
                    desc: {
                        en: "24/7 e-mental-health support for young people across Canada — call, or text CONNECT to 686868. Free, confidential, multilingual.",
                        nl: "24/7 steun voor jongeren in heel Canada — bel, of sms CONNECT naar 686868. Gratis en vertrouwelijk.",
                        fr: "Soutien 24h/24 pour les jeunes partout au Canada — appelez, ou textez PARLER au 686868. Gratuit et confidentiel.",
                        de: "24/7-Unterstützung für junge Menschen in ganz Kanada — anrufen oder CONNECT an 686868 texten."
                    },
                    kw: "kids youth teens children jeunes text"
                }
            ]
        },
        {
            id: "mx", icon: "🇲🇽", continent: "am",
            name: { en: "Mexico", nl: "Mexico", fr: "Mexique", de: "Mexiko" },
            entries: [
                {
                    id: "mx-911", cat: "emergency",
                    name: { en: "911 — Emergency", nl: "911 — Noodnummer", fr: "911 — Urgences", de: "911 — Notruf" },
                    phone: "911", tel: "911", free: true, always: true, langs: ["es"],
                    desc: {
                        en: "The national emergency number of Mexico.",
                        nl: "Het nationale noodnummer van Mexico.",
                        fr: "Le numéro d'urgence national du Mexique.",
                        de: "Die nationale Notrufnummer Mexikos."
                    },
                    kw: "emergencia policia ambulancia emergency"
                },
                {
                    id: "mx-lineadelavida", cat: "talk",
                    name: "Línea de la Vida — 800 911 2000",
                    phone: "800 911 2000", tel: "8009112000", free: true, always: true, langs: ["es"],
                    web: "https://www.gob.mx/lineadelavida",
                    desc: {
                        en: "Government line for mental health and addiction — personalised support on drug use and emotional crises (Spanish).",
                        nl: "Overheidslijn voor mentale gezondheid en verslaving — persoonlijke hulp bij druggebruik en emotionele crisis (Spaans).",
                        fr: "Ligne gouvernementale pour la santé mentale et les addictions (en espagnol).",
                        de: "Staatliche Nummer für psychische Gesundheit und Sucht (auf Spanisch)."
                    },
                    kw: "salud mental drogas adicciones crisis suicidio suicide addiction"
                }
            ]
        },
        {
            id: "br", icon: "🇧🇷", continent: "am",
            name: { en: "Brazil", nl: "Brazilië", fr: "Brésil", de: "Brasilien" },
            entries: [
                {
                    id: "br-urgences", cat: "emergency",
                    name: { en: "Emergency — 190 · 192 · 193", nl: "Nood — 190 · 192 · 193", fr: "Urgences — 190 · 192 · 193", de: "Notruf — 190 · 192 · 193" },
                    phone: "190", tel: "190", free: true, always: true, langs: ["pt"],
                    desc: {
                        en: "In Brazil: 190 police, 192 SAMU ambulance, 193 fire brigade.",
                        nl: "In Brazilië: 190 politie, 192 SAMU-ambulance, 193 brandweer.",
                        fr: "Au Brésil : 190 police, 192 SAMU, 193 pompiers.",
                        de: "In Brasilien: 190 Polizei, 192 SAMU-Rettung, 193 Feuerwehr."
                    },
                    kw: "emergencia policia samu bombeiros 190 192 193 emergency"
                },
                {
                    id: "br-cvv", cat: "talk",
                    name: "CVV — 188",
                    phone: "188", tel: "188", free: true, always: true, langs: ["pt"],
                    web: "https://cvv.org.br/", chat: "https://cvv.org.br/chat/",
                    desc: {
                        en: "Centro de Valorização da Vida: emotional support and suicide prevention — free calls 24/7, plus chat and e-mail (Portuguese).",
                        nl: "Emotionele steun en zelfmoordpreventie — gratis bellen 24/7, plus chat en e-mail (Portugees).",
                        fr: "Soutien émotionnel et prévention du suicide — appels gratuits 24h/24, chat et e-mail (en portugais).",
                        de: "Emotionale Unterstützung und Suizidprävention — kostenlos anrufen rund um die Uhr, auch Chat (auf Portugiesisch)."
                    },
                    kw: "suicidio apoio emocional cvv suicide"
                },
                {
                    id: "br-100-180", cat: "violence",
                    name: { en: "Disque 100 & Ligue 180", nl: "Disque 100 & Ligue 180", fr: "Disque 100 & Ligue 180", de: "Disque 100 & Ligue 180" },
                    phone: "100", tel: "100", free: true, always: true, langs: ["pt"],
                    web: "https://www.gov.br/mdh/pt-br",
                    desc: {
                        en: "State human-rights hotlines: dial 100 to report violence and violations (including against children); 180 is the women's help line.",
                        nl: "Officiële mensenrechtenlijnen: bel 100 om geweld en misbruik te melden (ook tegen kinderen); 180 is de hulplijn voor vrouwen.",
                        fr: "Lignes d'État pour les droits humains : le 100 pour signaler des violences ; le 180 pour les femmes.",
                        de: "Staatliche Menschenrechts-Hotlines: 100 zum Melden von Gewalt; 180 für Frauen."
                    },
                    kw: "direitos humanos violencia mulher denuncia 180 violence women"
                }
            ]
        },
        {
            id: "ar", icon: "🇦🇷", continent: "am",
            name: { en: "Argentina", nl: "Argentinië", fr: "Argentine", de: "Argentinien" },
            note: {
                en: "The suicide-prevention line (135 / CAS) is pending verification and will be added once confirmed.",
                nl: "De zelfmoordpreventielijn (135 / CAS) wordt nog geverifieerd en volgt zodra bevestigd.",
                fr: "La ligne de prévention du suicide (135 / CAS) est en cours de vérification.",
                de: "Die Suizidpräventionslinie (135 / CAS) wird noch geprüft."
            },
            entries: [
                {
                    id: "ar-911", cat: "emergency",
                    name: { en: "911 — Emergency", nl: "911 — Noodnummer", fr: "911 — Urgences", de: "911 — Notruf" },
                    phone: "911", tel: "911", free: true, always: true, langs: ["es"],
                    desc: {
                        en: "Police and emergencies in most of Argentina; 107 is the medical emergency number (SAME).",
                        nl: "Politie en noodgevallen in het grootste deel van Argentinië; 107 is het medische noodnummer (SAME).",
                        fr: "Police et urgences dans la majeure partie de l'Argentine ; le 107 est le numéro médical (SAME).",
                        de: "Polizei und Notfälle im Großteil Argentiniens; 107 ist der medizinische Notruf (SAME)."
                    },
                    kw: "emergencia policia same 107 emergency"
                },
                {
                    id: "ar-144", cat: "violence",
                    name: "Línea 144 — Violencia de género",
                    phone: "144", tel: "144", free: true, always: true, langs: ["es"],
                    web: "https://www.argentina.gob.ar/linea-144",
                    desc: {
                        en: "National state line for gender-based violence — advice and support, all day, all year (Spanish).",
                        nl: "Nationale overheidslijn bij gendergeweld — advies en steun, altijd (Spaans).",
                        fr: "Ligne nationale contre la violence de genre — conseil et soutien, en continu (en espagnol).",
                        de: "Nationale staatliche Nummer bei geschlechtsspezifischer Gewalt (auf Spanisch)."
                    },
                    kw: "violencia genero mujer violence women"
                },
                {
                    id: "ar-102", cat: "youth",
                    name: "Línea 102 — Niñas, niños y adolescentes",
                    phone: "102", tel: "102", free: true, langs: ["es"],
                    web: "https://www.argentina.gob.ar/",
                    desc: {
                        en: "The state listening line for the rights of children and teenagers (Spanish; availability varies by province).",
                        nl: "De overheidslijn voor de rechten van kinderen en tieners (Spaans; beschikbaarheid verschilt per provincie).",
                        fr: "La ligne d'État pour les droits des enfants et adolescents (en espagnol ; selon la province).",
                        de: "Die staatliche Hotline für Kinder- und Jugendrechte (auf Spanisch; je nach Provinz)."
                    },
                    kw: "niños adolescentes derechos children youth"
                }
            ]
        },
        {
            id: "za", icon: "🇿🇦", continent: "af",
            name: { en: "South Africa", nl: "Zuid-Afrika", fr: "Afrique du Sud", de: "Südafrika" },
            entries: [
                {
                    id: "za-urgences", cat: "emergency",
                    name: { en: "Emergency — 112 · 10111 · 10177", nl: "Nood — 112 · 10111 · 10177", fr: "Urgences — 112 · 10111 · 10177", de: "Notruf — 112 · 10111 · 10177" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "112 from any mobile; 10111 police, 10177 ambulance and fire.",
                        nl: "112 vanaf elke gsm; 10111 politie, 10177 ambulance en brandweer.",
                        fr: "Le 112 depuis tout mobile ; 10111 police, 10177 ambulance et pompiers.",
                        de: "112 von jedem Handy; 10111 Polizei, 10177 Rettung und Feuerwehr."
                    },
                    kw: "emergency police ambulance 10111 10177"
                },
                {
                    id: "za-sadag", cat: "talk",
                    name: "SADAG Suicide Crisis Helpline",
                    phone: "0800 567 567", tel: "0800567567", free: true, always: true, langs: ["en"],
                    web: "https://www.sadag.org/",
                    desc: {
                        en: "South African Depression and Anxiety Group: 24-hour toll-free suicide crisis line, plus many specialised helplines and WhatsApp chat lines on its site.",
                        nl: "24-uurs gratis crisislijn van SADAG, plus vele gespecialiseerde hulplijnen en WhatsApp-chats via de site.",
                        fr: "Ligne de crise gratuite 24h/24 de SADAG, plus de nombreuses lignes spécialisées sur le site.",
                        de: "24-Stunden-Krisenlinie der SADAG, dazu viele spezialisierte Nummern und WhatsApp-Chats auf der Website."
                    },
                    kw: "suicide depression anxiety crisis sadag"
                },
                {
                    id: "za-substance", cat: "addiction",
                    name: "Substance Abuse Helpline",
                    phone: "0800 12 13 14", tel: "0800121314", free: true, always: true, langs: ["en"],
                    web: "https://www.sadag.org/",
                    desc: {
                        en: "Department of Social Development substance-abuse line, operated with SADAG — also SMS 32312.",
                        nl: "Verslavingslijn van het Department of Social Development, samen met SADAG — ook sms 32312.",
                        fr: "Ligne dépendances du Département du développement social, avec SADAG — aussi SMS 32312.",
                        de: "Suchtlinie des Sozialministeriums, betrieben mit SADAG — auch SMS 32312."
                    },
                    kw: "drugs alcohol substance addiction verslaving"
                }
            ]
        },
        {
            id: "tn", icon: "🇹🇳", continent: "af",
            name: { en: "Tunisia", nl: "Tunesië", fr: "Tunisie", de: "Tunesien" },
            note: {
                en: "Verified national helplines for Tunisia are still being researched — the worldwide directories can help meanwhile.",
                nl: "Geverifieerde Tunesische hulplijnen worden nog onderzocht — de wereldwijde gidsen helpen intussen.",
                fr: "Les lignes d'aide tunisiennes vérifiées sont encore en cours de recherche — les répertoires mondiaux peuvent aider entre-temps.",
                de: "Geprüfte tunesische Hilfsnummern werden noch recherchiert — die weltweiten Verzeichnisse helfen einstweilen."
            },
            entries: [
                {
                    id: "tn-urgences", cat: "emergency",
                    name: { en: "Emergency — 197 · 190 · 198", nl: "Nood — 197 · 190 · 198", fr: "Urgences — 197 · 190 · 198", de: "Notruf — 197 · 190 · 198" },
                    phone: "190", tel: "190", free: true, always: true, langs: ["ar", "fr"],
                    desc: {
                        en: "In Tunisia: 197 police, 190 SAMU ambulance, 198 civil protection (fire).",
                        nl: "In Tunesië: 197 politie, 190 SAMU-ambulance, 198 civiele bescherming (brandweer).",
                        fr: "En Tunisie : 197 police, 190 SAMU, 198 protection civile (pompiers).",
                        de: "In Tunesien: 197 Polizei, 190 SAMU-Rettung, 198 Zivilschutz (Feuerwehr)."
                    },
                    kw: "urgence police samu protection civile 197 198 emergency شرطة إسعاف"
                }
            ]
        },
        {
            id: "ke", icon: "🇰🇪", continent: "af",
            name: { en: "Kenya", nl: "Kenia", fr: "Kenya", de: "Kenia" },
            note: {
                en: "National helplines (Childline 116 and mental-health lines) are pending verification. Find a Helpline (Worldwide tab) lists options for Kenya.",
                nl: "Nationale hulplijnen worden nog geverifieerd. Find a Helpline (Wereldwijd) toont opties voor Kenia.",
                fr: "Les lignes nationales sont en cours de vérification. Find a Helpline (onglet Monde) liste des options pour le Kenya.",
                de: "Nationale Hotlines werden noch geprüft. Find a Helpline (Weltweit-Tab) listet Angebote für Kenia."
            },
            entries: [
                {
                    id: "ke-999", cat: "emergency",
                    name: { en: "999 / 112 — Emergency", nl: "999 / 112 — Noodnummer", fr: "999 / 112 — Urgences", de: "999 / 112 — Notruf" },
                    phone: "999", tel: "999", free: true, always: true, langs: ["en", "sw"],
                    desc: {
                        en: "Police, ambulance and fire in Kenya — 999 and 112 both work from mobiles.",
                        nl: "Politie, ambulance en brandweer in Kenia — 999 en 112 werken allebei.",
                        fr: "Police, ambulance et pompiers au Kenya — le 999 et le 112 fonctionnent.",
                        de: "Polizei, Rettung und Feuerwehr in Kenia — 999 und 112 funktionieren beide."
                    },
                    kw: "emergency police ambulance"
                }
            ]
        },
        {
            id: "ng", icon: "🇳🇬", continent: "af",
            name: { en: "Nigeria", nl: "Nigeria", fr: "Nigéria", de: "Nigeria" },
            note: {
                en: "National helplines are pending verification. Find a Helpline (Worldwide tab) lists verified crisis lines for Nigeria.",
                nl: "Nationale hulplijnen worden nog geverifieerd. Find a Helpline (Wereldwijd) toont geverifieerde lijnen voor Nigeria.",
                fr: "Les lignes nationales sont en cours de vérification. Find a Helpline (onglet Monde) liste des lignes vérifiées.",
                de: "Nationale Hotlines werden noch geprüft. Find a Helpline (Weltweit-Tab) listet geprüfte Nummern."
            },
            entries: [
                {
                    id: "ng-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "Nigeria's toll-free national emergency number.",
                        nl: "Het gratis nationale noodnummer van Nigeria.",
                        fr: "Le numéro d'urgence national gratuit du Nigéria.",
                        de: "Nigerias gebührenfreie nationale Notrufnummer."
                    },
                    kw: "emergency police ambulance"
                }
            ]
        },
        {
            id: "eg", icon: "🇪🇬", continent: "af",
            name: { en: "Egypt", nl: "Egypte", fr: "Égypte", de: "Ägypten" },
            note: {
                en: "National helplines are pending verification. Find a Helpline (Worldwide tab) lists options for Egypt.",
                nl: "Nationale hulplijnen worden nog geverifieerd. Find a Helpline (Wereldwijd) toont opties voor Egypte.",
                fr: "Les lignes nationales sont en cours de vérification. Find a Helpline (onglet Monde) liste des options.",
                de: "Nationale Hotlines werden noch geprüft. Find a Helpline (Weltweit-Tab) listet Angebote."
            },
            entries: [
                {
                    id: "eg-urgences", cat: "emergency",
                    name: { en: "Emergency — 122 · 123 · 180", nl: "Nood — 122 · 123 · 180", fr: "Urgences — 122 · 123 · 180", de: "Notruf — 122 · 123 · 180" },
                    phone: "122", tel: "122", always: true, langs: ["ar"],
                    desc: {
                        en: "In Egypt: 122 police, 123 ambulance, 180 fire brigade. Tourist police: 126.",
                        nl: "In Egypte: 122 politie, 123 ambulance, 180 brandweer. Toeristenpolitie: 126.",
                        fr: "En Égypte : 122 police, 123 ambulance, 180 pompiers. Police touristique : 126.",
                        de: "In Ägypten: 122 Polizei, 123 Rettung, 180 Feuerwehr. Touristenpolizei: 126."
                    },
                    kw: "emergency police ambulance tourist police 126 شرطة إسعاف"
                }
            ]
        },
        {
            id: "jp", icon: "🇯🇵", continent: "as",
            name: { en: "Japan", nl: "Japan", fr: "Japon", de: "Japan" },
            note: {
                en: "Japanese crisis lines (Inochi no Denwa, Yorisoi Hotline) are pending verification. Find a Helpline (Worldwide tab) lists verified options.",
                nl: "Japanse crisislijnen worden nog geverifieerd. Find a Helpline (Wereldwijd) toont geverifieerde opties.",
                fr: "Les lignes de crise japonaises sont en cours de vérification. Find a Helpline (onglet Monde) liste des options vérifiées.",
                de: "Japanische Krisenlinien werden noch geprüft. Find a Helpline (Weltweit-Tab) listet geprüfte Angebote."
            },
            entries: [
                {
                    id: "jp-urgences", cat: "emergency",
                    name: { en: "Emergency — 110 · 119", nl: "Nood — 110 · 119", fr: "Urgences — 110 · 119", de: "Notruf — 110 · 119" },
                    phone: "119", tel: "119", free: true, always: true, langs: ["ja"],
                    desc: {
                        en: "In Japan: 110 police, 119 fire and ambulance. Not sure it's an emergency? #7119 gives medical advice in major regions.",
                        nl: "In Japan: 110 politie, 119 brandweer en ambulance. Twijfel of het een noodgeval is? #7119 geeft medisch advies in grote regio's.",
                        fr: "Au Japon : 110 police, 119 pompiers et ambulance. Pas sûr que ce soit une urgence ? Le #7119 donne un avis médical dans les grandes régions.",
                        de: "In Japan: 110 Polizei, 119 Feuerwehr und Rettung. Unsicher, ob es ein Notfall ist? #7119 gibt in großen Regionen medizinischen Rat."
                    },
                    kw: "emergency police ambulance 110 119 7119 警察 救急"
                }
            ]
        },
        {
            id: "in", icon: "🇮🇳", continent: "as",
            name: { en: "India", nl: "India", fr: "Inde", de: "Indien" },
            entries: [
                {
                    id: "in-112", cat: "emergency",
                    name: { en: "112 — Emergency", nl: "112 — Noodnummer", fr: "112 — Urgences", de: "112 — Notruf" },
                    phone: "112", tel: "112", free: true, always: true, langs: ["hi", "en"],
                    desc: {
                        en: "India's single emergency number for police, fire and medical help.",
                        nl: "Het Indiase noodnummer voor politie, brandweer en medische hulp.",
                        fr: "Le numéro d'urgence unique de l'Inde.",
                        de: "Indiens einheitliche Notrufnummer."
                    },
                    kw: "emergency police ambulance"
                },
                {
                    id: "in-telemanas", cat: "talk",
                    name: "Tele-MANAS — 14416",
                    phone: "14416", tel: "14416", free: true, always: true, langs: ["hi", "en"],
                    web: "https://telemanas.mohfw.gov.in/",
                    desc: {
                        en: "The Government of India's tele-mental-health service — free counselling in many Indian languages; also 1-800-891-4416.",
                        nl: "De tele-mentale-gezondheidsdienst van de Indiase overheid — gratis hulp in vele talen; ook 1-800-891-4416.",
                        fr: "Le service public indien de télésanté mentale — gratuit, en de nombreuses langues ; aussi 1-800-891-4416.",
                        de: "Der staatliche indische Tele-Mental-Health-Dienst — kostenlos, in vielen Sprachen; auch 1-800-891-4416."
                    },
                    kw: "mental health counselling suicide crisis manas"
                }
            ]
        },
        {
            id: "kr", icon: "🇰🇷", continent: "as",
            name: { en: "South Korea", nl: "Zuid-Korea", fr: "Corée du Sud", de: "Südkorea" },
            note: {
                en: "The unified suicide-prevention number 109 is pending verification and will be added once confirmed.",
                nl: "Het zelfmoordpreventienummer 109 wordt nog geverifieerd en volgt zodra bevestigd.",
                fr: "Le numéro de prévention du suicide 109 est en cours de vérification.",
                de: "Die Suizidpräventionsnummer 109 wird noch geprüft."
            },
            entries: [
                {
                    id: "kr-urgences", cat: "emergency",
                    name: { en: "Emergency — 112 · 119", nl: "Nood — 112 · 119", fr: "Urgences — 112 · 119", de: "Notruf — 112 · 119" },
                    phone: "119", tel: "119", free: true, always: true, langs: ["ko"],
                    desc: {
                        en: "In South Korea: 112 police, 119 fire and ambulance. Travellers: 1330 is the 24/7 tourist information and help line (many languages).",
                        nl: "In Zuid-Korea: 112 politie, 119 brandweer en ambulance. Reizigers: 1330 is de 24/7 toeristenhulplijn (veel talen).",
                        fr: "En Corée du Sud : 112 police, 119 pompiers et ambulance. Voyageurs : le 1330 est la ligne touristique 24h/24 (nombreuses langues).",
                        de: "In Südkorea: 112 Polizei, 119 Feuerwehr und Rettung. Reisende: 1330 ist die 24/7-Touristen-Hotline (viele Sprachen)."
                    },
                    kw: "emergency police ambulance tourist 1330 경찰 구급"
                }
            ]
        },
        {
            id: "sg", icon: "🇸🇬", continent: "as",
            name: { en: "Singapore", nl: "Singapore", fr: "Singapour", de: "Singapur" },
            entries: [
                {
                    id: "sg-urgences", cat: "emergency",
                    name: { en: "Emergency — 999 · 995", nl: "Nood — 999 · 995", fr: "Urgences — 999 · 995", de: "Notruf — 999 · 995" },
                    phone: "999", tel: "999", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "In Singapore: 999 police, 995 ambulance and fire.",
                        nl: "In Singapore: 999 politie, 995 ambulance en brandweer.",
                        fr: "À Singapour : 999 police, 995 ambulance et pompiers.",
                        de: "In Singapur: 999 Polizei, 995 Rettung und Feuerwehr."
                    },
                    kw: "emergency police ambulance"
                },
                {
                    id: "sg-sos", cat: "talk",
                    name: "Samaritans of Singapore — 1767",
                    phone: "1767", tel: "1767", always: true, langs: ["en"],
                    web: "https://www.sos.org.sg/",
                    desc: {
                        en: "24-hour hotline for anyone in crisis or thinking about suicide — or message the 24-hour CareText service on WhatsApp: 9151 1767.",
                        nl: "24-uurslijn voor iedereen in crisis of met zelfmoordgedachten — of stuur een WhatsApp naar CareText: 9151 1767.",
                        fr: "Ligne 24h/24 pour toute personne en crise ou ayant des pensées suicidaires — ou WhatsApp CareText : 9151 1767.",
                        de: "24-Stunden-Hotline bei Krisen oder Suizidgedanken — oder WhatsApp-CareText: 9151 1767."
                    },
                    kw: "suicide crisis samaritans caretext"
                }
            ]
        },
        {
            id: "ph", icon: "🇵🇭", continent: "as",
            name: { en: "Philippines", nl: "Filipijnen", fr: "Philippines", de: "Philippinen" },
            note: {
                en: "The NCMH crisis hotline (1553) is pending verification. Find a Helpline (Worldwide tab) lists verified options.",
                nl: "De NCMH-crisislijn (1553) wordt nog geverifieerd. Find a Helpline (Wereldwijd) toont geverifieerde opties.",
                fr: "La ligne de crise NCMH (1553) est en cours de vérification.",
                de: "Die NCMH-Krisenlinie (1553) wird noch geprüft."
            },
            entries: [
                {
                    id: "ph-911", cat: "emergency",
                    name: { en: "911 — Emergency", nl: "911 — Noodnummer", fr: "911 — Urgences", de: "911 — Notruf" },
                    phone: "911", tel: "911", free: true, always: true, langs: ["en", "tl"],
                    desc: {
                        en: "The national emergency number of the Philippines.",
                        nl: "Het nationale noodnummer van de Filipijnen.",
                        fr: "Le numéro d'urgence national des Philippines.",
                        de: "Die nationale Notrufnummer der Philippinen."
                    },
                    kw: "emergency police ambulance"
                }
            ]
        },
        {
            id: "au", icon: "🇦🇺", continent: "oc",
            name: { en: "Australia", nl: "Australië", fr: "Australie", de: "Australien" },
            entries: [
                {
                    id: "au-000", cat: "emergency",
                    name: { en: "000 — Emergency", nl: "000 — Noodnummer", fr: "000 — Urgences", de: "000 — Notruf" },
                    phone: "000", tel: "000", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "Police, fire and ambulance. From mobiles, 112 also connects to Triple Zero.",
                        nl: "Politie, brandweer en ambulance. Vanaf gsm werkt ook 112.",
                        fr: "Police, pompiers et ambulance. Depuis un mobile, le 112 fonctionne aussi.",
                        de: "Polizei, Feuerwehr und Rettung. Vom Handy funktioniert auch 112."
                    },
                    kw: "emergency triple zero police ambulance fire"
                },
                {
                    id: "au-lifeline", cat: "talk",
                    name: "Lifeline — 13 11 14",
                    phone: "13 11 14", tel: "131114", sms: "0477131114", always: true, langs: ["en"],
                    web: "https://www.lifeline.org.au/", chat: "https://www.lifeline.org.au/get-help/services/chat",
                    desc: {
                        en: "24-hour crisis support and suicide prevention for all Australians — call 13 11 14, text 0477 13 11 14 or chat online.",
                        nl: "24-uurs crisishulp en zelfmoordpreventie voor heel Australië — bel, sms 0477 13 11 14 of chat online.",
                        fr: "Soutien de crise 24h/24 pour toute l'Australie — appel, SMS au 0477 13 11 14 ou chat.",
                        de: "24-Stunden-Krisenhilfe für ganz Australien — anrufen, SMS an 0477 13 11 14 oder chatten."
                    },
                    kw: "suicide crisis lifeline distress"
                },
                {
                    id: "au-kidshelpline", cat: "youth",
                    name: "Kids Helpline — 1800 55 1800",
                    phone: "1800 55 1800", tel: "1800551800", free: true, always: true, langs: ["en"],
                    web: "https://kidshelpline.com.au/",
                    desc: {
                        en: "Australia's free, private counselling service for children and young people aged 5 to 25 — phone, WebChat or email, any time.",
                        nl: "De gratis, vertrouwelijke hulplijn voor kinderen en jongeren van 5 tot 25 — telefoon, chat of mail, altijd.",
                        fr: "Le service gratuit et confidentiel pour les 5–25 ans en Australie — téléphone, chat ou mail, à tout moment.",
                        de: "Australiens kostenloser, vertraulicher Dienst für 5- bis 25-Jährige — Telefon, Chat oder Mail, jederzeit."
                    },
                    kw: "kids children young people counselling youth"
                },
                {
                    id: "au-1800respect", cat: "violence",
                    name: "1800RESPECT — 1800 737 732",
                    phone: "1800 737 732", tel: "1800737732", sms: "0458737732", free: true, always: true, langs: ["en"],
                    web: "https://www.1800respect.org.au/", chat: "https://www.1800respect.org.au/",
                    desc: {
                        en: "National domestic, family and sexual violence counselling service — call, text 0458 737 732, chat or video call, 24/7.",
                        nl: "Nationale hulplijn bij huiselijk, familiaal en seksueel geweld — bel, sms 0458 737 732 of chat, 24/7.",
                        fr: "Service national contre les violences domestiques, familiales et sexuelles — appel, SMS, chat ou visio, 24h/24.",
                        de: "Nationale Beratung bei häuslicher, familiärer und sexueller Gewalt — Anruf, SMS, Chat oder Video, rund um die Uhr."
                    },
                    kw: "domestic violence sexual assault family respect"
                },
                {
                    id: "au-poisons", cat: "emergency",
                    name: "Poisons Information — 13 11 26",
                    phone: "13 11 26", tel: "131126", always: true, langs: ["en"],
                    desc: {
                        en: "Australia-wide poisons information line — what to do after swallowing or contact with a poison, 24 hours a day.",
                        nl: "Australische vergiftigingslijn — wat te doen na inname van of contact met gif, 24 uur per dag.",
                        fr: "Ligne australienne d'information sur les poisons — 24h/24.",
                        de: "Australiens Giftinformationszentrale — rund um die Uhr."
                    },
                    kw: "poison overdose chemicals vergiftiging"
                }
            ]
        },
        {
            id: "nz", icon: "🇳🇿", continent: "oc",
            name: { en: "New Zealand", nl: "Nieuw-Zeeland", fr: "Nouvelle-Zélande", de: "Neuseeland" },
            entries: [
                {
                    id: "nz-111", cat: "emergency",
                    name: { en: "111 — Emergency", nl: "111 — Noodnummer", fr: "111 — Urgences", de: "111 — Notruf" },
                    phone: "111", tel: "111", free: true, always: true, langs: ["en"],
                    desc: {
                        en: "Police, fire and ambulance across New Zealand.",
                        nl: "Politie, brandweer en ambulance in heel Nieuw-Zeeland.",
                        fr: "Police, pompiers et ambulance dans toute la Nouvelle-Zélande.",
                        de: "Polizei, Feuerwehr und Rettung in ganz Neuseeland."
                    },
                    kw: "emergency police ambulance fire"
                },
                {
                    id: "nz-1737", cat: "talk",
                    name: "1737 — Need to talk?",
                    phone: "1737", tel: "1737", sms: "1737", free: true, always: true, langs: ["en"],
                    web: "https://1737.org.nz/",
                    desc: {
                        en: "New Zealand's national mental-health line: call or text 1737 to talk with a trained counsellor — free, confidential, any time.",
                        nl: "De nationale mentale-gezondheidslijn van Nieuw-Zeeland: bel of sms 1737 — gratis en vertrouwelijk, altijd.",
                        fr: "La ligne nationale néo-zélandaise : appelez ou textez le 1737 — gratuit et confidentiel, à tout moment.",
                        de: "Neuseelands nationale Nummer: 1737 anrufen oder texten — kostenlos und vertraulich, jederzeit."
                    },
                    kw: "counsellor talk crisis suicide text"
                }
            ]
        }
    ]
};

/* Core world coverage — emergency numbers only, generated from CORE_COUNTRIES.
   Sources: cross-checked 2026-08-06 against the national rows of Wikipedia's
   "List of emergency telephone numbers" (page version 2026-07-06) plus the
   statutory patterns already verified for the full countries above. Countries
   whose numbers could NOT be corroborated are deliberately absent — see todo.md.
   Row: [iso, continent, "English name", spec]
   spec: "u:<all-services>" or "p:<police>;a:<ambulance>;f:<fire>", "x:<also works>",
   "t:<tourist police>", "c:<children in danger>", "r:<traffic accidents>". */
(function () {
    const NOTE_EU = {
        en: "Country coverage in progress — so far only the emergency number is listed. The EU-wide 116 lines (Europe tab) and the worldwide directories also work for this country.",
        nl: "Dekking in opbouw — voorlopig staat alleen het noodnummer hier. De EU-brede 116-lijnen (tabblad Europa) en de wereldwijde gidsen werken hier ook.",
        fr: "Couverture en cours — seul le numéro d'urgence est listé pour l'instant. Les lignes 116 (onglet Europe) et les répertoires mondiaux fonctionnent aussi ici.",
        de: "Abdeckung im Aufbau — bislang ist nur die Notrufnummer gelistet. Die EU-weiten 116-Nummern (Europa-Tab) und die weltweiten Verzeichnisse gelten auch hier."
    };
    const NOTE_WORLD = {
        en: "Country coverage in progress — so far only the emergency numbers are listed. The Worldwide tab has official directories of crisis helplines for this country.",
        nl: "Dekking in opbouw — voorlopig staan alleen de noodnummers hier. Het tabblad Wereldwijd bevat officiële gidsen met crisislijnen voor dit land.",
        fr: "Couverture en cours — seuls les numéros d'urgence sont listés pour l'instant. L'onglet Monde propose des répertoires officiels de lignes d'écoute pour ce pays.",
        de: "Abdeckung im Aufbau — bislang sind nur die Notrufnummern gelistet. Der Weltweit-Tab enthält offizielle Verzeichnisse von Krisen-Hotlines für dieses Land."
    };
    const L = {
        emergency: { en: "Emergency", nl: "Noodnummer", fr: "Urgences", de: "Notruf" },
        police: { en: "Police", nl: "Politie", fr: "Police", de: "Polizei" },
        ambulance: { en: "Ambulance", nl: "Ambulance", fr: "Ambulance", de: "Rettungsdienst" },
        fire: { en: "Fire brigade", nl: "Brandweer", fr: "Pompiers", de: "Feuerwehr" },
        one: {
            en: "One number for police, ambulance and fire brigade.",
            nl: "Eén nummer voor politie, ambulance en brandweer.",
            fr: "Un seul numéro pour la police, l'ambulance et les pompiers.",
            de: "Eine Nummer für Polizei, Rettungsdienst und Feuerwehr."
        },
        also: { en: "Also: ", nl: "Ook: ", fr: "Également : ", de: "Auch: " },
        tourist: { en: "Tourist police:", nl: "Toeristenpolitie:", fr: "Police touristique :", de: "Touristenpolizei:" },
        child: { en: "Children in danger:", nl: "Kinderen in gevaar:", fr: "Enfance en danger :", de: "Kinder in Gefahr:" },
        traffic: { en: "Traffic accidents:", nl: "Verkeersongevallen:", fr: "Accidents de la route :", de: "Verkehrsunfälle:" }
    };

    const CORE_COUNTRIES = [
        // Europe — EU members still at core level (112 guaranteed by EU law)
        ["sk", "eu", "Slovakia", "u:112"],
        ["hu", "eu", "Hungary", "u:112"],
        ["ro", "eu", "Romania", "u:112"],
        ["bg", "eu", "Bulgaria", "u:112"],
        ["gr", "eu", "Greece", "u:112"],
        ["hr", "eu", "Croatia", "u:112"],
        ["si", "eu", "Slovenia", "u:112"],
        ["ee", "eu", "Estonia", "u:112"],
        ["lv", "eu", "Latvia", "u:112"],
        ["lt", "eu", "Lithuania", "u:112"],
        ["mt", "eu", "Malta", "u:112"],
        ["cy", "eu", "Cyprus", "u:112"],
        // Rest of Europe
        ["ad", "eu", "Andorra", "p:110;a:116;f:118"],
        ["al", "eu", "Albania", "p:129;a:127;f:128"],
        ["am", "eu", "Armenia", "u:112;x:911"],
        ["az", "eu", "Azerbaijan", "u:112"],
        ["ba", "eu", "Bosnia and Herzegovina", "p:122;a:124;f:123"],
        ["by", "eu", "Belarus", "p:102;a:103;f:101"],
        ["ge", "eu", "Georgia", "u:112"],
        ["li", "eu", "Liechtenstein", "p:117;a:144;f:118;x:112"],
        ["mc", "eu", "Monaco", "p:17;a:18;f:18;x:112"],
        ["md", "eu", "Moldova", "u:112"],
        ["me", "eu", "Montenegro", "p:122;a:124;f:123;x:112"],
        ["mk", "eu", "North Macedonia", "p:192;a:194;f:193;x:112"],
        ["rs", "eu", "Serbia", "p:192;a:194;f:193;x:112"],
        ["ru", "eu", "Russia", "p:102;a:103;f:101;x:112"],
        ["sm", "eu", "San Marino", "p:113;a:118;f:115"],
        ["tr", "eu", "Türkiye", "u:112"],
        ["ua", "eu", "Ukraine", "p:102;a:103;f:101;x:112"],
        ["xk", "eu", "Kosovo", "p:192;a:194;f:193"],
        // Middle East & Asia
        ["ae", "as", "United Arab Emirates", "p:999;a:998;f:997;x:112"],
        ["af", "as", "Afghanistan", "p:119;a:112;f:119"],
        ["bd", "as", "Bangladesh", "u:999"],
        ["bh", "as", "Bahrain", "u:999;x:112"],
        ["bn", "as", "Brunei", "p:993;a:991;f:995"],
        ["bt", "as", "Bhutan", "p:113;a:112;f:110"],
        ["cn", "as", "China", "p:110;a:120;f:119;r:122"],
        ["hk", "as", "Hong Kong", "u:999;x:112"],
        ["id", "as", "Indonesia", "p:110;a:119;f:113;x:112"],
        ["il", "as", "Israel", "p:100;a:101;f:102;x:112"],
        ["iq", "as", "Iraq", "u:112;x:911"],
        ["ir", "as", "Iran", "p:110;a:115;f:125"],
        ["jo", "as", "Jordan", "u:911;x:112"],
        ["kg", "as", "Kyrgyzstan", "u:112"],
        ["kh", "as", "Cambodia", "p:117;a:119;f:118;c:1280"],
        ["kw", "as", "Kuwait", "u:112"],
        ["kz", "as", "Kazakhstan", "u:112"],
        ["la", "as", "Laos", "p:191;a:195;f:190"],
        ["lb", "as", "Lebanon", "p:999;a:140;f:175;x:112"],
        ["lk", "as", "Sri Lanka", "p:119;a:1990;f:110"],
        ["mm", "as", "Myanmar", "u:999"],
        ["mn", "as", "Mongolia", "p:102;a:103;f:101;x:105"],
        ["mo", "as", "Macao", "u:999;x:112"],
        ["mv", "as", "Maldives", "u:911"],
        ["my", "as", "Malaysia", "u:999;x:112"],
        ["np", "as", "Nepal", "p:100;a:102;f:101;x:112"],
        ["om", "as", "Oman", "u:9999;x:112"],
        ["pk", "as", "Pakistan", "p:15;a:1122;f:16;x:112"],
        ["ps", "as", "Palestinian Territories", "p:100;a:101;f:102"],
        ["qa", "as", "Qatar", "u:999;x:112"],
        ["sa", "as", "Saudi Arabia", "u:911"],
        ["sy", "as", "Syria", "p:112;a:110;f:113"],
        ["th", "as", "Thailand", "p:191;a:1669;f:199;x:112;t:1155"],
        ["tj", "as", "Tajikistan", "u:112"],
        ["tl", "as", "Timor-Leste", "u:112"],
        ["tw", "as", "Taiwan", "p:110;a:119;f:119;x:112"],
        ["uz", "as", "Uzbekistan", "p:102;a:103;f:101;x:112"],
        ["vn", "as", "Vietnam", "p:113;a:115;f:114;x:112;c:111"],
        // Africa
        ["ao", "af", "Angola", "p:113;a:112;f:115"],
        ["bj", "af", "Benin", "p:117;a:112;f:118"],
        ["bw", "af", "Botswana", "p:999;a:997;f:998;x:112"],
        ["ci", "af", "Côte d'Ivoire", "p:110;a:185;f:180"],
        ["cm", "af", "Cameroon", "p:117;a:119;f:118;x:112"],
        ["cv", "af", "Cape Verde", "p:132;a:130;f:131"],
        ["dj", "af", "Djibouti", "p:17;a:19;f:18"],
        ["dz", "af", "Algeria", "p:1548;a:14;f:14"],
        ["et", "af", "Ethiopia", "u:911"],
        ["ga", "af", "Gabon", "p:1730;a:1300;f:18"],
        ["gh", "af", "Ghana", "u:112"],
        ["gm", "af", "Gambia", "p:117;a:116;f:118"],
        ["gw", "af", "Guinea-Bissau", "u:112"],
        ["lr", "af", "Liberia", "u:911"],
        ["ls", "af", "Lesotho", "p:123;a:121;f:122"],
        ["ma", "af", "Morocco", "p:19;a:15;f:15;x:112"],
        ["mg", "af", "Madagascar", "p:117;a:124;f:118"],
        ["ml", "af", "Mali", "p:17;a:15;f:18"],
        ["mr", "af", "Mauritania", "p:117;a:101;f:118"],
        ["mu", "af", "Mauritius", "p:112;a:114;f:115"],
        ["mw", "af", "Malawi", "p:997;a:998;f:999"],
        ["mz", "af", "Mozambique", "p:119;a:117;f:198"],
        ["na", "af", "Namibia", "p:10111"],
        ["rw", "af", "Rwanda", "p:112;a:912;f:112"],
        ["sc", "af", "Seychelles", "u:999;x:112"],
        ["sd", "af", "Sudan", "u:999"],
        ["sl", "af", "Sierra Leone", "p:019;a:999;f:999"],
        ["sn", "af", "Senegal", "p:17;f:18"],
        ["so", "af", "Somalia", "p:888;a:999;f:555"],
        ["ss", "af", "South Sudan", "u:999"],
        ["sz", "af", "Eswatini", "p:999;a:977;f:933"],
        ["td", "af", "Chad", "p:17;f:18"],
        ["tg", "af", "Togo", "p:117;a:8200;f:118"],
        ["tz", "af", "Tanzania", "p:112;a:114;f:115"],
        ["ug", "af", "Uganda", "u:999;x:112"],
        ["zm", "af", "Zambia", "u:999;x:112"],
        ["zw", "af", "Zimbabwe", "u:999;x:112"],
        // Americas
        ["ag", "am", "Antigua and Barbuda", "u:911;x:999"],
        ["bb", "am", "Barbados", "p:211;a:511;f:311"],
        ["bo", "am", "Bolivia", "u:911"],
        ["bs", "am", "Bahamas", "u:911;x:919"],
        ["bz", "am", "Belize", "u:911"],
        ["cl", "am", "Chile", "p:133;a:131;f:132;x:911"],
        ["co", "am", "Colombia", "u:123;x:112"],
        ["cr", "am", "Costa Rica", "u:911;x:112"],
        ["cu", "am", "Cuba", "p:106;a:104;f:105"],
        ["do", "am", "Dominican Republic", "u:911;x:112"],
        ["ec", "am", "Ecuador", "u:911"],
        ["gd", "am", "Grenada", "u:911"],
        ["gt", "am", "Guatemala", "p:110;a:122;f:122"],
        ["gy", "am", "Guyana", "p:911;a:913;f:912"],
        ["hn", "am", "Honduras", "p:911;a:195;f:198"],
        ["ht", "am", "Haiti", "p:114;a:116;f:115"],
        ["jm", "am", "Jamaica", "p:119;a:110;f:110"],
        ["kn", "am", "Saint Kitts and Nevis", "u:911"],
        ["lc", "am", "Saint Lucia", "u:911;x:999"],
        ["ni", "am", "Nicaragua", "p:118;a:128;f:115"],
        ["pa", "am", "Panama", "u:911"],
        ["pe", "am", "Peru", "u:911"],
        ["py", "am", "Paraguay", "u:911"],
        ["sr", "am", "Suriname", "p:115;a:113;f:110"],
        ["sv", "am", "El Salvador", "p:911;a:132;f:913"],
        ["tt", "am", "Trinidad and Tobago", "p:999;a:811;f:990;x:911"],
        ["uy", "am", "Uruguay", "u:911"],
        ["vc", "am", "Saint Vincent and the Grenadines", "u:999;x:911"],
        ["ve", "am", "Venezuela", "u:911;x:171"],
        // Oceania
        ["fj", "oc", "Fiji", "u:911"],
        ["ki", "oc", "Kiribati", "u:999;x:100"],
        ["mh", "oc", "Marshall Islands", "u:911"],
        ["nr", "oc", "Nauru", "p:110;a:111;f:112"],
        ["pg", "oc", "Papua New Guinea", "p:112;a:111;f:110"],
        ["pw", "oc", "Palau", "u:911"],
        ["sb", "oc", "Solomon Islands", "u:999;x:911"],
        ["to", "oc", "Tonga", "u:911"],
        ["tv", "oc", "Tuvalu", "u:911"],
        ["vu", "oc", "Vanuatu", "p:111;a:112;f:113"],
        ["ws", "oc", "Samoa", "u:999"]
    ];

    const LANGS4 = ["en", "nl", "fr", "de"];
    const flagOf = iso => iso === "xk" ? "🏴" :
        String.fromCodePoint(...[...iso.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));

    for (const [iso, continent, enName, spec] of CORE_COUNTRIES) {
        const n = {};
        for (const part of spec.split(";")) {
            const [k, v] = part.split(":");
            n[k] = v;
        }
        const primary = n.u || n.a || n.p || n.f;
        const name = {}, desc = {};
        for (const lg of LANGS4) {
            if (n.u) {
                name[lg] = n.u + " — " + L.emergency[lg];
                desc[lg] = L.one[lg];
            } else {
                const parts = [];
                if (n.p) parts.push(L.police[lg] + " " + n.p);
                if (n.a) parts.push(L.ambulance[lg] + " " + n.a);
                if (n.f && n.f !== n.a) parts.push(L.fire[lg] + " " + n.f);
                name[lg] = L.emergency[lg] + " — " +
                    [...new Set([n.p, n.a, n.f].filter(Boolean))].join(" · ");
                desc[lg] = parts.join(" · ") + ".";
            }
            if (n.x) desc[lg] += " " + L.also[lg] + n.x + ".";
            if (n.t) desc[lg] += " " + L.tourist[lg] + " " + n.t + ".";
            if (n.c) desc[lg] += " " + L.child[lg] + " " + n.c + ".";
            if (n.r) desc[lg] += " " + L.traffic[lg] + " " + n.r + ".";
        }
        HELP_DATA.places.push({
            id: iso, iso, icon: flagOf(iso), continent,
            name: { en: enName },
            note: continent === "eu" ? NOTE_EU : NOTE_WORLD,
            entries: [{
                id: iso + "-emergency", cat: "emergency",
                name, phone: primary, tel: primary.replace(/\s/g, ""), free: true, always: true,
                desc,
                kw: "emergency ambulance police fire nood politie brandweer urgence pompiers notruf polizei feuerwehr rettung " +
                    [...new Set([n.u, n.p, n.a, n.f, n.x, n.t, n.c, n.r].filter(Boolean))].join(" ") +
                    (n.t ? " tourist police toeristenpolitie police touristique touristenpolizei" : "") +
                    (n.c ? " child children kind kinderen enfant kinder abuse" : "") +
                    (n.r ? " traffic accident verkeersongeval accident de la route verkehrsunfall" : "")
            }]
        });
    }
})();
