# Khomas 100 – Modern Website (No Payments)

A shareable Next.js site with a public entry form and a private admin page.
- Public pages: Home (`/`), Register (`/register`), Thank You (`/thank-you`)
- Private admin: `/admin` (Basic Auth via env variables)
- Data: SQLite via Prisma; entrants saved to `prisma/dev.db`

## 1) Prerequisites
- Node.js 18+
- PNPM or NPM
- Git (optional)

## 2) Setup
```bash
cp .env.example .env.local
# Optionally edit BASIC_AUTH_USER / BASIC_AUTH_PASS
# Keep DATABASE_URL as is for SQLite
npm install
npm run prisma:generate
npm run prisma:push
npm run dev
```

Open http://localhost:3000 in your browser.
Visit http://localhost:3000/admin and log in with the Basic Auth credentials you put in `.env.local`.

## 3) Deploy (Vercel recommended)
1. Create a new project from this folder in Vercel.
2. Add Environment Variables (Project Settings → Environment Variables):
   - `DATABASE_URL = file:./dev.db`
   - `BASIC_AUTH_USER = admin`
   - `BASIC_AUTH_PASS = <your-strong-password>`
3. Trigger a redeploy. For production, consider moving to a hosted database (e.g., Neon/Postgres). Update `DATABASE_URL` accordingly and run `npm run prisma:push` locally to generate the client, or use Prisma Data Proxy.

## 4) Customize
- Update content in `app/page.tsx` sections: About, Route, Schedule.
- Add images to `/public` and reference them in content (e.g., `/og.jpg` for social sharing).
- Add a GPX map or elevation profile to the Route section.
- To export entrants, use the Download CSV button on `/admin`.

## 5) Add Payments Later
You can layer Stripe Checkout on top by:
- Creating a `/api/checkout` route that creates a Checkout Session.
- Adding a "Pay Entry Fee" button after submission.
- Listening to webhooks in `/api/webhooks/stripe` to mark entrants as paid.
(Out of scope for this template per your request.)

## 6) Security Notes
- Admin is protected with browser-native Basic Auth via `middleware.ts`.
- Always set a strong `BASIC_AUTH_PASS` in production.
- Never collect or store card details yourself; use a payment provider when you add payments.
