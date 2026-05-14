# Tropicana Roofing Inc — Marketing Site

Static marketing site for **Tropicana Roofing Inc**, a Toronto roofing contractor at 215 Markham Road, Toronto, ON M1J 3C4.

Built as a static HTML site (TailwindCSS via CDN) for fast Netlify deploys, strong local SEO, and high lead conversion.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Homepage — hero, lead capture, services overview, trust signals |
| `/services.html` | All roofing services overview |
| `/asphalt-shingle-roofing.html` | Service detail (template for additional service pages) |
| `/free-estimate.html` | Primary conversion page — full lead form |
| `/storm-damage.html` | 24/7 emergency / insurance claim landing |
| `/scarborough.html` | Local SEO service-area page (template for other neighborhoods) |
| `/about.html` | Company story, team, certifications |
| `/gallery.html` | Project portfolio with before/after |
| `/mobile-preview.html` | Stitch mobile design reference (noindex) |
| `/404.html` | Custom 404 |

## Local development

It's plain static HTML — open `index.html` directly, or run a tiny server:

```bash
python3 -m http.server 8080
# → http://localhost:8080/
```

## Deploy

### Netlify

1. Connect this repo at [app.netlify.com](https://app.netlify.com/start).
2. Build command: *(leave empty)*
3. Publish directory: `.` (root)
4. `netlify.toml` handles redirects, headers, asset optimization.

The site has no build step — Netlify serves the HTML directly.

### Custom domain

Point `tropicanaroofing.ca` (or whatever domain is registered) at Netlify, then update the `Sitemap:` line in `robots.txt` and the `<loc>` entries in `sitemap.xml` to match.

## Design system

Source of truth: the Stitch project at `projects/14855040200623707901`. Brand tokens:

- **Navy** `#0B3A5B` — primary
- **Orange** `#F26A1F` — accent / CTAs
- **Trust green** `#1B6E3D` — guarantees / certifications
- **Montserrat** — headlines
- **Inter** — body
- **Radius 8px** — buttons, cards

Tailwind config is inlined at the top of each HTML file (`tailwind.config = { ... }`).

## TODO / future work

- Replace placeholder phone `(416) 555-0198` with the real number across all pages.
- Wire the lead forms to a backend (Netlify Forms is the simplest — add `data-netlify="true"` and a `name=` attr to each `<form>`).
- Add additional service-area pages: North York, Etobicoke, East York, Downtown, etc.
- Add service-detail pages for Metal Roofing, Flat Roofs, Repair, Inspections.
- Replace Stitch placeholder images with real project photography.
- Add `LocalBusiness` and `FAQPage` JSON-LD schema to each page for SEO.
- Add Google Tag Manager / Google Analytics 4.
- Add a privacy policy and terms of service page (linked from footer).
