# @miaread — link-in-bio

A dusty-pink + cream link-in-bio page for bookstagrammer @miaread, built on Astro + Supabase + Resend + Vercel.

## What's inside
- **Landing page** (`/`) — profile, 6 link buttons, inline newsletter signup, book-club card.
- **6 links**: Instagram, latest review, Goodreads, newsletter (inline), book club (inline), contact (mailto).
- **Newsletter API** (`POST /api/newsletter`) — saves email to Supabase `miaread_subscribers`, fires a Resend welcome email.
- **Click tracking** (`POST /api/click`) — lightweight analytics into `miaread_link_clicks`.
- **SEO** — sitemap.xml, robots.txt, schema.org Person JSON-LD.

## Stack
- Astro 6 · @astrojs/vercel adapter · Tailwind v4 (via @tailwindcss/vite)
- Supabase (DB) · Resend (email) · Vercel (host)

## Tables (Supabase)
- `miaread_subscribers` (email unique, source, confirmed, created_at)
- `miaread_content` (title, slug, body, seo_description, published_at) — reserved for Harbor to write articles into.
- `miaread_link_clicks` (link_key, created_at)

## Env vars
See `.env.example`. Required:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `PUBLIC_SITE_URL`

## Local dev
```bash
npm install
npm run dev
```

## Next steps (manual)
- Swap the profile SVG for a real photo — drop a `profile.jpg` in `/public/` and update `src/pages/index.astro`.
- Replace the link URLs in `src/lib/links.ts` with Mia's actual profile URLs.
- Verify a sending domain in Resend (e.g. `miaread.com`) and change the `from` address in `src/lib/email.ts`.
- Connect a custom domain in the Vercel dashboard.
