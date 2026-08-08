# -*- coding: utf-8 -*-
"""One-off: diff Wikipedia's emergency-number list against data.js."""
import urllib.request, re, json, sys
sys.stdout.reconfigure(encoding="utf-8")

req = urllib.request.Request(
    "https://en.wikipedia.org/w/index.php?title=List_of_emergency_telephone_numbers&action=raw",
    headers={"User-Agent": "Mozilla/5.0 helpline-verifier"})
wiki = urllib.request.urlopen(req, timeout=30).read().decode("utf-8")

NAME2ISO = {
 "algeria":"dz","angola":"ao","benin":"bj","burundi":"bi","botswana":"bw","burkina faso":"bf",
 "cameroon":"cm","cape verde":"cv","central african republic":"cf","chad":"td","comoros":"km",
 "republic of congo":"cg","democratic republic of congo":"cd","djibouti":"dj","egypt":"eg",
 "equatorial guinea":"gq","eritrea":"er","eswatini":"sz","ethiopia":"et","gabon":"ga","gambia":"gm",
 "ghana":"gh","guinea":"gn","guinea-bissau":"gw","ivory coast":"ci","kenya":"ke","lesotho":"ls",
 "liberia":"lr","libya":"ly","madagascar":"mg","malawi":"mw","mali":"ml","mauritania":"mr",
 "mauritius":"mu","mayotte":"yt","morocco":"ma","mozambique":"mz","namibia":"na","niger":"ne",
 "nigeria":"ng","reunion":"re","rwanda":"rw","sao tome and principe":"st","senegal":"sn",
 "seychelles":"sc","sierra leone":"sl","somalia":"so","south africa":"za","sudan":"sd",
 "south sudan":"ss","tanzania":"tz","togo":"tg","tunisia":"tn","uganda":"ug","zambia":"zm",
 "zimbabwe":"zw","anguilla":"ai","antigua and barbuda":"ag","aruba":"aw","the bahamas":"bs",
 "barbados":"bb","bermuda":"bm","british virgin islands":"vg","caribbean netherlands":"bq",
 "cayman islands":"ky","cuba":"cu","curacao":"cw","dominica":"dm","dominican republic":"do",
 "grenada":"gd","guadeloupe":"gp","haiti":"ht","jamaica":"jm","martinique":"mq","montserrat":"ms",
 "puerto rico":"pr","saint barthelemy":"bl","saint kitts and nevis":"kn","saint lucia":"lc",
 "saint martin":"mf","saint vincent and the grenadines":"vc","sint maarten":"sx",
 "trinidad and tobago":"tt","turks and caicos":"tc","u.s. virgin islands":"vi","belize":"bz",
 "costa rica":"cr","el salvador":"sv","guatemala":"gt","honduras":"hn","nicaragua":"ni",
 "panama":"pa","canada":"ca","mexico":"mx","saint pierre and miquelon":"pm",
 "united states of america":"us","argentina":"ar","bolivia":"bo","brazil":"br","chile":"cl",
 "colombia":"co","ecuador":"ec","falkland islands":"fk","french guiana":"gf","guyana":"gy",
 "paraguay":"py","peru":"pe","suriname":"sr","uruguay":"uy","venezuela":"ve","afghanistan":"af",
 "bahrain":"bh","bangladesh":"bd","bhutan":"bt","brunei":"bn","cambodia":"kh",
 "people's republic of china":"cn","east timor":"tl","hong kong":"hk","india":"in",
 "indonesia":"id","iran":"ir","iraq":"iq","israel":"il","japan":"jp","jordan":"jo",
 "kazakhstan":"kz","kuwait":"kw","kyrgyzstan":"kg","laos":"la","lebanon":"lb","macau":"mo",
 "malaysia":"my","maldives":"mv","mongolia":"mn","myanmar":"mm","nepal":"np","oman":"om",
 "pakistan":"pk","palestine":"ps","philippines":"ph","qatar":"qa","saudi arabia":"sa",
 "singapore":"sg","sri lanka":"lk","syria":"sy","republic of china":"tw","tajikistan":"tj",
 "thailand":"th","turkmenistan":"tm","united arab emirates":"ae","uzbekistan":"uz","vietnam":"vn",
 "yemen":"ye","aland islands":"ax","albania":"al","andorra":"ad","armenia":"am","austria":"at",
 "azerbaijan":"az","belarus":"by","belgium":"be","bosnia and herzegovina":"ba","bulgaria":"bg",
 "croatia":"hr","cyprus":"cy","czech republic":"cz","denmark":"dk","estonia":"ee",
 "faroe islands":"fo","finland":"fi","france":"fr","georgia":"ge","germany":"de",
 "gibraltar":"gi","greece":"gr","greenland":"gl","guernsey":"gg","hungary":"hu","iceland":"is",
 "ireland":"ie","isle of man":"im","italy":"it","jersey":"je","kosovo":"xk","latvia":"lv",
 "lithuania":"lt","liechtenstein":"li","luxembourg":"lu","malta":"mt","moldova":"md",
 "monaco":"mc","montenegro":"me","netherlands":"nl","north macedonia":"mk","norway":"no",
 "poland":"pl","portugal":"pt","romania":"ro","russia":"ru","san marino":"sm","serbia":"rs",
 "slovakia":"sk","slovenia":"si","spain":"es","sweden":"se","switzerland":"ch","turkey":"tr",
 "ukraine":"ua","united kingdom":"uk","american samoa":"as","australia":"au","cook islands":"ck",
 "fiji":"fj","french polynesia":"pf","guam":"gu","kiribati":"ki","marshall islands":"mh",
 "micronesia":"fm","nauru":"nr","new caledonia":"nc","new zealand":"nz","niue":"nu",
 "northern mariana islands":"mp","palau":"pw","papua new guinea":"pg","samoa":"ws",
 "solomon islands":"sb","tokelau":"tk","tonga":"to","tuvalu":"tv","vanuatu":"vu",
}

def normname(s):
    s = s.lower().replace("å","a").replace("é","e").replace("ô","o")
    return re.sub(r"\s+", " ", s).strip()

# split wikitext into table rows, find the country of each
rows = {}
for chunk in re.split(r"\n\|-", wiki):
    m = re.search(r"\{\{(?i:flag|flagicon|flag list|nowrap\|\{\{flag)[^|}]*\|([^|}]+)", chunk)
    if not m:
        continue
    iso = NAME2ISO.get(normname(m.group(1)))
    if not iso:
        continue
    nums = set()
    for b in re.findall(r"'''([^']{1,40})'''", chunk):
        for piece in re.split(r"\bor\b|/|,|;|<br\s*/?>|\band\b", b):
            d = re.sub(r"[^\d#*+]", "", piece)
            if d and 2 <= len(d.strip("#*+")) <= 8:
                nums.add(d)
    if nums:
        rows.setdefault(iso, set()).update(nums)

# our numbers per place
d = open("data.js", encoding="utf-8").read()
ours = {}
# handwritten places
for pm in re.finditer(r'\n        \{\n            id: "(\w\w)",.*?\n        \}(?=,\n        \{|\n    \])', d, re.S):
    pid, body = pm.group(1), pm.group(0)
    nums = set()
    for f in re.findall(r'(?:phone|tel): "([^"]+)"', body):
        for piece in re.split(r"[·/]| or ", f):
            dg = re.sub(r"[^\d#*+]", "", piece)
            if dg:
                nums.add(dg)
    # numbers mentioned in descs (e.g. "197 police, 190 SAMU")
    for f in re.findall(r'\b(\d{2,6})\b', re.sub(r'https?://\S+', '', body)):
        nums.add(f)
    ours[pid] = nums
# core rows
for cm in re.finditer(r'\["(\w\w)", "(?:eu|am|af|as|oc)", "[^"]+", "([^"]*)"', d):
    pid, spec = cm.group(1), cm.group(2)
    nums = ours.setdefault(pid, set())
    for part in re.split(r"[|;]", spec):
        part = part.strip()
        if ":" in part:
            nums.add(re.sub(r"[^\d#*+]", "", part.split(":", 1)[1]))

gaps = {}
for iso, wnums in sorted(rows.items()):
    mine = ours.get(iso, set())
    missing = sorted(n for n in wnums if n not in mine)
    if missing:
        gaps[iso] = missing
print("countries on wiki:", len(rows), "| countries with gaps:", len(gaps))
for iso, miss in gaps.items():
    print(f"{iso}: {' '.join(miss)}")
