# SS METALS Industries – Website

Next.js 14 (App Router, TypeScript) + Tailwind CSS + PostgreSQL. One folder, one `npm run dev`.

## What's included

**Public site** (same structure as sagarmetalindustries.com)
`/` Home · `/company-profile` · `/products` (category filter, search, quick view) · `/ready-stock` (live from DB) · `/infrastructure` · `/contact` (enquiry form saved to DB) · WhatsApp button, PDF catalogue link.

**Admin panel** at `/admin` (password protected)
Enquiries inbox (mark new / contacted / closed) · Products CRUD with image upload · Ready-stock CRUD.

## Quick start

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env          # then edit ADMIN_PASSWORD and AUTH_SECRET

# 3. PostgreSQL (pick one)
docker compose up -d db       # easiest: starts Postgres with the credentials in .env.example
#    or use your own Postgres and set DATABASE_URL in .env

# 4. Create tables + sample data
npm run db:setup

# 5. Run
npm run dev                   # http://localhost:3000   admin: http://localhost:3000/admin
```

Requires Node 20+.

## Production

```bash
npm run build && npm start
```
Or everything in Docker: `docker compose --profile app up -d --build`
(uses the `db` service, runs `db:setup` on start, stores uploads in a volume).

Set strong `ADMIN_PASSWORD` and `AUTH_SECRET` (`openssl rand -hex 32`). If you serve over plain HTTP
(no HTTPS yet), add `INSECURE_COOKIES=true` or the admin login cookie will not stick.
For managed Postgres that requires SSL, add `DATABASE_SSL=true`.

## Things you need to replace

| What | Where |
|---|---|
| Real product list (the seed has 24 **sample** products) | `/admin/products` – delete samples, add yours |
| Real ready-stock rows (seed is **sample** data) | `/admin/stock` |
| Photos: products, team, factory, logo | `public/img/...` (paths in `src/lib/site.ts`) or upload in admin. Missing images show a neutral placeholder. |
| PDF catalogue | put the file at `public/sagar-metal-catalogue.pdf` |
| Counter numbers (clients, OEM brands, workers) | `STATS` in `src/lib/site.ts` – **confirm the real numbers** |
| Phone, email, address, team | `src/lib/site.ts` |

## Project layout

```
db/schema.sql            tables: products, stock_items, enquiries
scripts/                 migrate.mjs, seed.mjs (no extra tools needed)
src/lib/                 db.ts (pg pool), queries.ts, auth*.ts, site.ts (company details)
src/app/(site)/          public pages
src/app/admin/           login + panel + server actions (actions.ts)
src/app/api/enquiries/   public enquiry endpoint (validation, honeypot, rate limit)
src/app/uploads/         serves admin-uploaded images from UPLOAD_DIR
src/middleware.ts        guards /admin/*
```

## Notes
- Admin is a single login from `.env` (not a user table). Add NextAuth or a users table later if you need multiple accounts.
- Enquiry rate limit is in-memory (per server instance); use a shared store if you scale out.
- Fonts (Barlow Condensed, IBM Plex Sans) load from Google Fonts in the browser.
