#!/usr/bin/env python3
"""One-shot script: rewrite href="#" placeholders in Stitch-generated HTML to actual page URLs.

Matching is done by the inner text of each <a> tag. Run from project root, then delete.
"""
import re
from pathlib import Path

ROOT = Path(__file__).parent

# Map of (lowercased, stripped) link text → target URL
TEXT_TO_URL = {
    # Top nav
    "services": "/services.html",
    "service areas": "/scarborough.html",
    "gallery": "/gallery.html",
    "reviews": "/gallery.html",
    "about": "/about.html",
    "contact": "/free-estimate.html",
    "blog": "/",  # no blog page yet
    # CTAs
    "get a free estimate": "/free-estimate.html",
    "get free estimate": "/free-estimate.html",
    "get my free estimate": "/free-estimate.html",
    "get my free estimate →": "/free-estimate.html",
    "get my free quote": "/free-estimate.html",
    "get my free quote →": "/free-estimate.html",
    "free estimate": "/free-estimate.html",
    "request emergency visit": "/free-estimate.html",
    "request a callback →": "/free-estimate.html",
    "schedule free inspection": "/free-estimate.html",
    "get my free shingle quote": "/free-estimate.html",
    "get my free scarborough estimate": "/free-estimate.html",
    "get exact quote →": "/free-estimate.html",
    "get a quote for a similar project": "/free-estimate.html",
    "residential estimate →": "/free-estimate.html",
    "commercial estimate →": "/free-estimate.html",
    "ask about our warranties": "/free-estimate.html",
    "call emergency line": "tel:+14165550198",
    "call now": "tel:+14165550198",
    # Footer / services
    "residential roofing": "/services.html",
    "commercial flat roofs": "/services.html",
    "commercial roofing": "/services.html",
    "emergency repair": "/storm-damage.html",
    "emergency roof repair": "/storm-damage.html",
    "storm damage restoration": "/storm-damage.html",
    "storm damage": "/storm-damage.html",
    "metal roofing": "/services.html",
    "asphalt shingle roofing": "/asphalt-shingle-roofing.html",
    "asphalt shingles": "/asphalt-shingle-roofing.html",
    "flat & commercial roofs": "/services.html",
    "flat & commercial": "/services.html",
    "flat roof": "/services.html",
    "flat roofs": "/services.html",
    "roof repair": "/services.html",
    "roof repair & leak detection": "/services.html",
    "roof inspection": "/services.html",
    "roof inspections": "/services.html",
    "roof inspection & maintenance": "/services.html",
    "roof inspections & maintenance": "/services.html",
    # Service areas
    "scarborough": "/scarborough.html",
    "north york": "/scarborough.html",
    "etobicoke": "/scarborough.html",
    "east york": "/scarborough.html",
    "downtown": "/scarborough.html",
    "downtown toronto": "/scarborough.html",
    "york": "/scarborough.html",
    "markham": "/scarborough.html",
    "vaughan": "/scarborough.html",
    "richmond hill": "/scarborough.html",
    "mississauga": "/scarborough.html",
    "pickering": "/scarborough.html",
    "ajax": "/scarborough.html",
    "whitby": "/scarborough.html",
    # Gallery / portfolio CTAs
    "view full gallery": "/gallery.html",
    "view full gallery →": "/gallery.html",
    "view gallery": "/gallery.html",
    "view scarborough gallery →": "/gallery.html",
    "view all →": "/gallery.html",
    "view project →": "/gallery.html",
    "filter by service ↓": "/gallery.html",
    "load more projects (216 remaining) →": "/gallery.html",
    # Reviews
    "read our reviews": "/gallery.html",
    "read all 380+ google reviews →": "/gallery.html",
    "read all 380+ reviews →": "/gallery.html",
    "read reviews →": "/gallery.html",
    # About sub-nav
    "careers": "/about.html",
    "our story": "/about.html",
    "our team": "/about.html",
    # Other roofing services teaser
    "learn more →": "/services.html",
    # Misc
    "get directions": "https://www.google.com/maps?q=215+Markham+Road,+Toronto,+ON+M1J+3C4",
    "get directions →": "https://www.google.com/maps?q=215+Markham+Road,+Toronto,+ON+M1J+3C4",
    "privacy policy": "/privacy.html",
    "terms of service": "/terms.html",
    "logo": "/",
    "home": "/",
}

# Anchor-only hrefs we should redirect to a full page (so they don't dead-end in nav)
ANCHOR_REDIRECTS = {
    "#estimate": "/free-estimate.html",
}


def get_link_text(html_fragment: str) -> str:
    """Strip tags + whitespace from anchor inner HTML."""
    text = re.sub(r"<[^>]+>", " ", html_fragment)
    text = re.sub(r"\s+", " ", text).strip()
    return text.lower()


# Match <a ...href="VALUE"...>INNER</a>
ANCHOR_RE = re.compile(
    r'(<a\b[^>]*?\bhref=")([^"]*)("[^>]*>)(.*?)(</a>)',
    re.DOTALL | re.IGNORECASE,
)


def rewrite(html: str) -> tuple[str, int]:
    changes = 0

    def sub(m: re.Match) -> str:
        nonlocal changes
        prefix, href, mid, inner, suffix = m.group(1, 2, 3, 4, 5)

        # Skip external links, tel:, mailto:, and non-anchor placeholders
        if href.startswith(("http://", "https://", "tel:", "mailto:", "javascript:")):
            return m.group(0)

        text = get_link_text(inner)

        # Direct anchor redirect (e.g., #estimate → /free-estimate.html)
        if href in ANCHOR_REDIRECTS:
            new_href = ANCHOR_REDIRECTS[href]
            if new_href != href:
                changes += 1
                return f"{prefix}{new_href}{mid}{inner}{suffix}"
            return m.group(0)

        # Only rewrite placeholder hrefs
        if href not in ("", "#"):
            return m.group(0)

        # Look up by link text
        if text in TEXT_TO_URL:
            new_href = TEXT_TO_URL[text]
            changes += 1
            return f"{prefix}{new_href}{mid}{inner}{suffix}"

        # Try simple containment matches (e.g., text contains "scarborough")
        for needle, url in TEXT_TO_URL.items():
            if needle in text and len(needle) > 6:  # avoid short false matches
                changes += 1
                return f"{prefix}{url}{mid}{inner}{suffix}"

        # Fallback: leave href="#" so it doesn't navigate to nonsense
        return m.group(0)

    new_html = ANCHOR_RE.sub(sub, html)
    return new_html, changes


def main():
    for path in sorted(ROOT.glob("*.html")):
        original = path.read_text(encoding="utf-8")
        rewritten, n = rewrite(original)
        if n:
            path.write_text(rewritten, encoding="utf-8")
        print(f"{path.name}: rewrote {n} link(s)")


if __name__ == "__main__":
    main()
