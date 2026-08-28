# Antwerpflats — Next.js site

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (LTS version is fine).

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — the site rebuilds automatically as you
edit files.

## Adding or editing an apartment listing

This is the main thing you'll do day to day. Every apartment is one file in
`content/apartments/`. To add a new one:

1. Copy an existing file, e.g. `content/apartments/fft2a.yaml`, to a new
   file named after the apartment code (e.g. `content/apartments/ls5.yaml`).
2. Edit the fields — price, size, bedrooms, description, photos, etc.
3. Save. That's it — no code, no design work. The apartment automatically
   appears on the homepage (if recent), the full apartments list, its own
   detail page at `/apartments/<slug>`, and its area page if `area_slug`
   matches one of the files in `content/areas/`.

To mark an apartment as taken, change `status: available` to
`status: occupied`. To mark it as coming soon, use
`status: available_from` and set `available_from: YYYY-MM-DD`.

## Adding a new area/neighborhood page

Same idea — copy a file in `content/areas/`, edit it, save. It'll appear
automatically in the "browse by location" links on every area page, and any
apartment whose `area_slug` matches will show up in its listing section.

## What's still open (per our plan)

- **Photos**: currently hotlinking your existing Wix-hosted photos. When
  you have the original files, drop them in `/public/apartments/` and swap
  the `photos:` URLs in each apartment file to local paths
  (e.g. `/apartments/ls1-1.jpg`) — this will also speed up the site.
- **Contact form**: built at `/contact` — asks for dates, group size,
  duration and budget up front (the lead-qualification layer from our
  original plan), and emails submissions straight to
  info.antwerpflats@gmail.com via [FormSubmit](https://formsubmit.co) — no
  backend, no account needed beyond confirming the one-time verification
  email FormSubmit sends the first time someone submits. To send inquiries
  to a different address later, edit the `action` URL in
  `app/contact/page.js`.
- **Guide/blog content**: not yet built (housing decree explainer, expat
  guides, etc.) — planned as `/guides/[slug]` pages the same way apartments
  and areas work.
- **Hosting**: not yet deployed. Recommended: push this to GitHub and
  connect it to [Vercel](https://vercel.com) (free tier) — it auto-deploys
  on every change and gives you a temporary `.vercel.app` URL to test
  against before pointing your real domain at it, matching the "run in
  parallel first" plan.

## Structure

```
app/                  — pages (Next.js App Router)
  page.js             — homepage
  apartments/page.js  — apartments list
  apartments/[slug]/  — individual apartment page (auto-generated per file
                         in content/apartments/)
  areas/[area]/       — area pages (auto-generated per file in
                         content/areas/)
  faq/page.js         — FAQ
content/
  apartments/*.yaml   — one file per apartment — EDIT THESE
  areas/*.yaml        — one file per area — EDIT THESE
  faq.js              — FAQ questions/answers
components/           — shared header, footer, manifest strip, lease card
lib/                  — reads the YAML files into page data
```
