# Updating the K-Fest website (no coding required)

This guide is for someone who needs to change the website and has never written
code. You only need a web browser and a GitHub account.

**How the site works in one sentence:** the website lives in this GitHub repo,
and **any change saved to the `main` branch automatically rebuilds and publishes
the live site** at kfesthouston.com, usually within a couple of minutes.

That means: you make a change → it goes live. There is no separate "publish"
button, and no one needs to be at a computer with special software installed.

---

## Before you start (one-time, 2 minutes)

You need a **GitHub account** that has been given access to this repository:
`github.com/johnnam1121/kfesthouston`

If you can open that link and see the files, you're ready. If you get a 404,
ask the repo owner to add you as a collaborator
(**Settings → Collaborators → Add people**).

---

## Task A — Replace a brochure page or any image

**This is the most common update, and it needs no AI and no code.**

The brochure pages live in `public/assets/Brochure/` and are named `1.png`,
`2.png`, `3.png` … in the order they appear on the website.

The website reads whatever is in that folder. Add a file, remove a file, or
replace one — the gallery on the Festival Map page updates itself. **You never
need to edit any code to change the brochure.**

### To replace a page (e.g. a corrected schedule):

1. Go to the folder:
   https://github.com/johnnam1121/kfesthouston/tree/main/public/assets/Brochure
2. Click **Add file → Upload files**.
3. Drag in your new image. **The file name must exactly match the page you're
   replacing** (e.g. `4.png` to replace page 4). Same name = replaces it.
4. Scroll down, type a short note like `updated Saturday schedule`, and click
   **Commit changes**.
5. Wait ~2 minutes, then check kfesthouston.com/festival-map.

### To add a page:

Same steps, but name it the next number (e.g. `10.png`). It appears at the end.

### To remove a page:

Click the file → the **trash can** icon → **Commit changes**.

### Image rules

- **Format:** `.png` (`.jpg` and `.webp` also work)
- **Size:** 1366 × 768 pixels (standard widescreen) so pages look consistent
- **The festival map is `9.png`.** This one is special: it also shows up on its
  own, large, at the top of the Festival Map page. If `9.png` isn't in the
  folder, that section politely says "map coming soon" instead of breaking.

> **Right now `9.png` is missing** — it was removed in the last update, so the
> Festival Map page is showing the "coming soon" card. Upload the map artwork as
> `9.png` and it will appear automatically in both places.

### Other image folders

- `public/assets/sponsors/` — sponsor logos
- `public/assets/staff/` — staff photos
- `public/assets/HomepageImages/` — homepage photos

---

## Task B — Change words, or anything else

Use **Claude Code on the web**. You describe the change in plain English and
Claude makes it for you.

1. Go to **[claude.ai/code](https://claude.ai/code)** and sign in.
   (Requires a Pro, Max, or Team plan.)
2. The first time only, it will ask you to connect GitHub — approve it and give
   it access to the `kfesthouston` repository.
3. Pick **kfesthouston** from the repository list.
4. Type what you want changed, in normal English. Be specific about *where*:

   > On the FAQs page, change the parking answer to say that the Avenida garage
   > is $15 for the day.

   > The Sunday hours on the homepage are wrong — they should be 11am to 7pm,
   > not 8pm. Please fix that everywhere it appears on the site.

   > Add Jinro as a Gold Sponsor on the sponsors page, with this description:
   > "..."

5. Claude makes the change and shows you what it did. If it's not right, just
   reply and tell it what to fix.
6. When you're happy, click **Create PR** (pull request).
7. Click through to GitHub and press the green **Merge pull request** button,
   then **Confirm merge**.
8. That merge publishes it. Check the live site in ~2 minutes.

**Tip:** ask Claude to show you the change before merging — "what will this look
like on the page?" It can describe or screenshot it.

---

## Checking that your change went live

1. Go to https://vercel.com and sign in with the account that owns the site.
2. Open the **kfesthouston** project.
3. The top entry under **Deployments** is your change.
   - **Ready** (green) = it's live.
   - **Error** (red) = something's wrong; see "If something breaks" below.

If you don't have Vercel access, just load the page in a private/incognito
window after a few minutes. (A normal window may show you a cached old copy —
press **Ctrl+Shift+R** to force a refresh.)

---

## If something breaks

**Nothing you do here is permanent.** Every change can be undone in about 30
seconds, and the previous version of the site is always recoverable.

To undo the last change:

1. Go to https://github.com/johnnam1121/kfesthouston/commits/main
2. Click the most recent entry at the top.
3. Click the **"..."** menu (top right) → **Revert**.
4. Confirm. The site rebuilds back to how it was.

If a change you merged caused an error and the site won't rebuild, the **live
site stays on the last working version** — Vercel won't publish a broken build.
So a failed deploy means "your change didn't go live," not "the site is down."

---

## Things to leave alone

Unless you know what you're doing, don't rename or delete these — the site won't
build without them:

- the `app/` folder structure and any file named `page.tsx`
- `package.json`, `next.config.ts`, `tsconfig.json`
- `app/lib/` (shared settings like the ticket and donation links)

If you need something in there changed, use **Task B** and let Claude do it.

---

## Where things are, if you're curious

| What | Where |
| --- | --- |
| Homepage | `app/(pages)/page.tsx` |
| Festival map + brochure | `app/(pages)/festival-map/page.tsx` |
| Performance schedule | `app/(pages)/schedule/page.tsx` |
| Headliners | `app/(pages)/headliners/page.tsx` |
| Food vendors | `app/(pages)/vendors/food/page.tsx` |
| Non-food vendors | `app/(pages)/vendors/non-food/page.tsx` |
| Sponsors | `app/(pages)/sponsors/page.tsx` |
| FAQs | `app/(pages)/faqs/page.tsx` |
| Volunteer | `app/(pages)/about/volunteer/page.tsx` |
| Staff | `app/(pages)/about/staff/page.tsx` |
| Top menu bar + announcement banner | `app/components/Navbar.tsx` |
| Footer | `app/components/Footer.tsx` |
| Ticket / donation links | `app/lib/links.ts` |
| Brochure page captions | `app/lib/brochure.ts` |

---

## A few facts worth knowing before you edit

- **Admission is free.** The site says so in a lot of places. Paid VIP passes are
  sold through Humanitix.
- **The VIP tent is a hospitality lounge, not a viewing area.** Guests cannot
  watch the stage from it. Never describe it as a place to watch performances.
- **Ticket prices aren't written anywhere on the site** on purpose — they live on
  the Humanitix page so they can change without a website update. Same for the
  KultureCity fundraising total and vendor food prices.

<!-- test push: 2026-10-08T02:32Z -->
