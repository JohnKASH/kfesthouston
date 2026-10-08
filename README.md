# Korean Festival Houston

The website for Korean Festival Houston (K-Fest), run by the Korean American
Society of Houston. Live at **[kfesthouston.com](https://www.kfesthouston.com)**.

## 👉 Need to update the site and don't write code?

**Read [HANDOFF.md](./HANDOFF.md).** Short version: open
[claude.ai/code](https://claude.ai/code), pick this repo, say what you want
changed. Claude makes the change and publishes it.

## Deployment

Hosted on Vercel, connected to this repo. **Any commit to `main` rebuilds and
publishes the live site automatically** — there is no manual deploy step. A
failed build is not published, so the previous version stays live.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- TypeScript

> **Note:** this project uses Next.js 16, which has breaking changes from older
> versions. Check `node_modules/next/dist/docs/` before relying on patterns from
> memory. See [AGENTS.md](./AGENTS.md).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Before pushing:

```bash
npx tsc --noEmit   # type check
npm run lint
npm run build      # catches anything the first two miss
```

## Project layout

```
app/
  (pages)/          one folder per route; page.tsx is the page itself
  components/       shared UI (Navbar, Footer, TicketsBand, BrochureGallery…)
  lib/              shared data and settings
    links.ts        ticket + donation URLs, used site-wide
    brochure.ts     reads the brochure pages out of public/assets/Brochure/
public/assets/      images, organized by area
```

### Content that is deliberately not hardcoded

Some things are intentionally kept off the site so they can change without a
code deploy:

| Not on the site | Lives at | Why |
| --- | --- | --- |
| Ticket + VIP prices | Humanitix event page | Tiers change |
| Fundraising totals | KultureCity fundraiser page | Updates continuously |
| Vendor food prices | — | Vendors change them on the day |
| Brochure pages | `public/assets/Brochure/` | Added/removed as files, no code change |
