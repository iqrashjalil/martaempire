# Marta Empire

Premium marketing site for Queen Identity mentoring, built with Next.js 16, React 19 and Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev
```

## Application form

Submissions POST to `/api/apply`. Set `APPLICATIONS_WEBHOOK_URL` in `.env.local` to forward each
application as JSON to a webhook (Make, Zapier, n8n, a Supabase Edge Function, etc). Without it,
submissions are logged on the server.

## Structure

- `app/` — routes (`/`, `/terms`, `/api/apply`), fonts, metadata, OG image
- `components/` — one file per section; interactive pieces are client components
- `lib/content.ts` — every line of copy on the site
- `public/images/` — photography
