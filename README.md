# MoldAid website

Static beta site for MoldAid: the landing page and the waitlist page. Plain HTML with no build step.

| File | Page |
|---|---|
| `index.html` | Landing page |
| `waitlist.html` | Waitlist sign-up |
| `assets/img/` | Photos |
| `assets/brand/` | Logo and mark (SVG) |
| Favicons and `site.webmanifest` | Site root |

Fonts load from Google Fonts: Barlow Condensed, IBM Plex Sans and IBM Plex Mono.

## Not finished yet

- The waitlist form has no backend. The button does not submit anything.
- Text in square brackets, such as `[Portrait]` or `[Resin 1]`, is a placeholder waiting for real content.
- Privacy, imprint and contact links point to anchors that do not exist yet.
- `site.webmanifest` uses root paths (`/icon-192.png`), so the site should be served from the domain root.

## Search engines

The site is hidden from search engines while in beta: `robots.txt` blocks all crawlers, and both pages carry `<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">`. Remove both before the public launch.
