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

## Fonts (self-hosted, for GDPR compliance)

The site previously loaded fonts from Google's CDN (`fonts.googleapis.com`),
which sends every visitor's IP address to Google before any consent is
given — this has specifically been ruled a GDPR violation by German courts.
The code now expects self-hosted font files instead. One-time setup:

1. Go to **gwfh.mranftl.com** (Google Webfonts Helper — a free tool that
   packages Google's own font files for self-hosting).
2. Search for **Fraunces**, select weights **400, 500, 600**, download the
   woff2 files. Rename them to `fraunces-400.woff2`, `fraunces-500.woff2`,
   `fraunces-600.woff2`.
3. Search for **Inter**, select weights **400, 500, 600**, download and
   rename to `inter-400.woff2`, `inter-500.woff2`, `inter-600.woff2`.
4. Search for **IBM Plex Mono**, select weights **400, 500**, download and
   rename to `ibm-plex-mono-400.woff2`, `ibm-plex-mono-500.woff2`.
5. Drop all 8 files directly into `public/fonts/` (already created, empty
   for now).

That's it — `app/globals.css` already has the `@font-face` rules pointing
to these exact filenames. No further code changes needed.

(Note: the original Google Fonts CDN link used Fraunces' variable "optical
size" axis; google-webfonts-helper only provides static weights, so there's
a very minor difference in how the display serif renders at large sizes —
not something visitors will notice.)

## Privacy policy

A draft privacy policy page lives at `/privacy` (`app/privacy/page.js`),
linked from the footer and near the contact form, covering what the
contact form collects, why, the FormSubmit third-party processor, and
visitor rights under GDPR. **This is a starting draft, not legal
sign-off** — have it reviewed before relying on it, since the exact
wording (data retention period, international transfer details for
FormSubmit, etc.) should be confirmed against your actual practices.

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
