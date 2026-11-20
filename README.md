# MoldAid website

Beta site for MoldAid, built with React 19, TypeScript, Vite and React Router.

## Run it

```
npm install
npm run dev        # local dev server with hot reload
npm run build      # type-check, then build to dist/
npm run preview    # serve the built site locally
npm run format     # Prettier on src/
```

## Structure

| Path | What |
|---|---|
| `src/main.tsx` | Entry point: router and global CSS |
| `src/App.tsx` | Routes: `/`, `/waitlist`, `/contact`, `/terms`, `/privacy`, `/plans`, plus a 404 |
| `src/components/` | Shared parts: `PageShell` (grid background, page title and description), `HomeHeader`, `SubpageHeader`, `SiteFooter`, `Announcement`, `YouTubeEmbed`, `ScrollManager` |
| `src/pages/home/` | The front page, one file per section (`Hero`, `Problem`, `HowItWorks` ...) and `HomePage` that lines them up |
| `src/pages/*Page.tsx` | The other pages |
| `src/styles/global.css` | Rules shared by every page. Page-specific CSS sits next to its page |
| `public/` | Served as-is: photos, logo, favicons, `robots.txt`, `site.webmanifest` |
| `vercel.json` | Vite build, SPA fallback, redirects from the old `.html` URLs, noindex header |

Styling is still mostly inline `style={{ }}` objects, carried over one-to-one from the static pages so nothing changed visually. Move repeated styles into shared components or CSS as the pages grow.

Old links such as `/waitlist.html` redirect to `/waitlist`.

## Not finished yet

- The waitlist and contact forms have no backend. Submitting does nothing.
- Text in square brackets, such as `[Portrait]` or `[Resin 1]`, is a placeholder waiting for real content.

## Search engines

The site is hidden from search engines while in beta: `public/robots.txt` blocks all crawlers, `index.html` carries `<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">`, and `vercel.json` sends the same as an `X-Robots-Tag` header. Remove all three before the public launch.
