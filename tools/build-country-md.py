#!/usr/bin/env python3
"""Generates country.md from data.js — the full reference of every place,
number and website on the site. Rerun after every data.js change:

    python tools/build-country-md.py
"""
import datetime
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = (ROOT / "data.js").read_text(encoding="utf-8")

CONTINENTS = {"eu": "Europe", "am": "Americas", "af": "Africa", "as": "Asia", "oc": "Oceania"}
ROLE = {"u": "All emergencies", "p": "Police", "a": "Ambulance", "f": "Fire brigade",
        "x": "Also works", "t": "Tourist police", "c": "Children in danger", "r": "Traffic accidents"}
CATS = {"emergency": "Emergency", "talk": "Suicide & someone to talk to",
        "youth": "Children & young people", "violence": "Violence, abuse & sexual assault",
        "addiction": "Drugs, alcohol & addiction", "practical": "Practical help & information"}


def field(block, name):
    m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', block)
    return m.group(1).replace('\\"', '"') if m else None


def loc_en(block, name):
    """name/desc/hours can be a plain string or an {en:...} object."""
    m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', block)
    if m:
        return m.group(1)
    m = re.search(name + r':\s*\{\s*en:\s*"((?:[^"\\]|\\.)*)"', block)
    return m.group(1) if m else None


def parse_places():
    """Handwritten places: split on `id: "xx", icon:` place headers."""
    places = []
    headers = list(re.finditer(
        r'\{\s*\n\s*id: "([a-z]+)", icon: "([^"]*)"(?:, continent: "(\w\w)")?,\s*\n\s*name:', SRC))
    for i, h in enumerate(headers):
        end = headers[i + 1].start() if i + 1 < len(headers) else SRC.find("/* Core world coverage")
        block = SRC[h.start():end]
        head = block.split("entries:", 1)[0]
        entries = []
        # entries are indented one level deeper than the place header
        eparts = re.split(r'\{\s*\n {20,}id: "', block)
        for ep in eparts[1:]:
            ep = 'id: "' + ep
            entries.append({
                "id": field(ep, "id"),
                "cat": field(ep, "cat"),
                "name": loc_en(ep, "name"),
                "phone": field(ep, "phone"),
                "sms": field(ep, "sms"),
                "web": field(ep, "web"),
                "chat": field(ep, "chat"),
                "always": "always: true" in ep,
                "free": "free: true" in ep,
                "hours": loc_en(ep, "hours"),
                "desc": loc_en(ep, "desc"),
            })
        places.append({
            "id": h.group(1), "icon": h.group(2), "continent": h.group(3),
            "name": loc_en(head, "name"), "entries": entries,
        })
    return places


def parse_core():
    rows = re.findall(r'^\s*\["(\w\w)", "(eu|am|af|as|oc)", "((?:[^"\\]|\\.)*)", "([^"]*)"(?:, (\d))?\]', SRC, re.M)
    out = []
    for iso, cont, name, spec, warn in rows:
        n = dict(p.split(":", 1) for p in spec.split(";"))
        out.append({"iso": iso, "continent": cont, "name": name, "spec": n, "warn": bool(warn)})
    return out


def parse_no_number():
    rows = re.findall(r'\["(\w\w)", "(eu|am|af|as|oc)", "((?:[^"\\]|\\.)*)", "(https://[^"]*)", \{\s*en: "((?:[^"\\]|\\.)*)"', SRC)
    return [{"iso": r[0], "continent": r[1], "name": r[2], "web": r[3], "desc": r[4]} for r in rows]


def main():
    updated = re.search(r'updated: "([\d-]+)"', SRC).group(1)
    places = parse_places()
    core = parse_core()
    nonum = parse_no_number()

    lines = [
        "# Countries — every number & website",
        "",
        f"> Generated from data.js (verified {updated}) on "
        f"{datetime.date.today().isoformat()} by tools/build-country-md.py — do not edit by hand.",
        "> Every number was verified against an official source before shipping; see todo.md for the method.",
        "",
    ]

    layers = [p for p in places if not p["continent"]]
    lines.append("## Global layers")
    for p in layers:
        lines.append(f"\n### {p['icon']} {p['name']}")
        for e in p["entries"]:
            lines.append(entry_line(e))

    by_cont = {}
    for p in places:
        if p["continent"]:
            by_cont.setdefault(p["continent"], []).append(("full", p))
    for c in core:
        by_cont.setdefault(c["continent"], []).append(("core", c))
    for c in nonum:
        by_cont.setdefault(c["continent"], []).append(("none", c))

    total = 0
    for cont in ["eu", "am", "af", "as", "oc"]:
        group = by_cont.get(cont, [])
        group.sort(key=lambda t: (t[1].get("name") or "").lower())
        lines.append(f"\n## {CONTINENTS[cont]} ({len(group)})")
        total += len(group)
        for kind, p in group:
            if kind == "full":
                lines.append(f"\n### {p['icon']} {p['name']} `{p['id']}` — full coverage")
                cur = None
                for e in p["entries"]:
                    if e["cat"] != cur:
                        cur = e["cat"]
                        lines.append(f"*{CATS.get(cur, cur)}*")
                    lines.append(entry_line(e))
            elif kind == "core":
                spec = p["spec"]
                nums = " · ".join(f"{ROLE[k]} **{v}**" for k, v in spec.items() if k in ROLE)
                warn = " ⚠️ *response may be unreliable/limited (per official travel advice)*" if p["warn"] else ""
                lines.append(f"- {flag(p['iso'])} **{p['name']}** `{p['iso']}` — {nums}{warn}")
            else:
                lines.append(f"- {flag(p['iso'])} **{p['name']}** `{p['iso']}` — ❌ no central emergency number "
                             f"(official: <{p['web']}>) — {p['desc']}")

    lines.insert(4, f"**{total} countries & territories** — 36 with full verified helpline sets, "
                    f"the rest with cross-checked emergency numbers.")
    (ROOT / "country.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"country.md written: {total} countries/territories, "
          f"{sum(len(p['entries']) for p in places)} handwritten entries, {len(core)} core rows, {len(nonum)} no-number.")


def flag(iso):
    if iso == "xk":
        return "🏴"
    return "".join(chr(0x1F1E6 + ord(c) - 97) for c in iso)


def entry_line(e):
    bits = []
    if e["phone"]:
        bits.append(f"**{e['phone']}**")
    if e["sms"]:
        bits.append(f"SMS **{e['sms']}**")
    meta = []
    if e["always"]:
        meta.append("24/7")
    elif e["hours"]:
        meta.append(e["hours"])
    if e["free"]:
        meta.append("free")
    links = []
    if e["web"]:
        links.append(f"[site]({e['web']})")
    if e["chat"]:
        links.append(f"[chat]({e['chat']})")
    parts = [f"- **{e['name']}**"]
    if bits:
        parts.append(" — " + " / ".join(bits))
    if meta:
        parts.append(" (" + ", ".join(meta) + ")")
    if links:
        parts.append(" — " + " · ".join(links))
    if e["desc"]:
        parts.append(f" — {e['desc']}")
    return "".join(parts)


if __name__ == "__main__":
    main()
