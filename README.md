# Healthy Kitchen — static site for Vercel

Deploy as-is. No build step: this is a static folder.

## Deploy
1. Put the contents of this folder in a Git repo (or drag the folder into vercel.com/new).
2. Framework preset: **Other**. Build command: none. Output directory: `.`
3. Deploy, then add your domain in Vercel → Settings → Domains.

## Structure
- `index.html` — the whole site (client-side routing, no server needed)
- `*.jsx` — page/section components, transpiled in the browser by Babel
- `styles.css` — design-system tokens + base styles (fonts included)
- `ds-bundle.js` — design-system components
- `data.js` — meal plans and blog articles (edit here to add posts)
- `assets/` — photos, logo, fonts

## Adding a blog article
Copy one entry inside `window.HK_BLOG_POSTS` in `data.js`, change slug/title/date/body, drop the photo into `assets/`, commit. Vercel redeploys automatically.

## Note on performance
JSX is compiled in the visitor's browser, which adds ~1s to first load. If that matters, the next step is moving the same components into a Next.js project (recommended before launch, also unlocks per-article URLs and SEO).
