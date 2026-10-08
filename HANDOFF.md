# How to update the K-Fest website

You don't need to know how to code, and you don't need to install anything. You
tell Claude what you want changed, in plain English, and it publishes it to the
live site.

---

## Every time you want to change something

### 1. Go to [claude.ai/code](https://claude.ai/code)

Sign in with the K-Fest account (`info@kashouston.org`).

### 2. Pick the repository

Click the repository selector under the message box and choose
**johnnam1121/kfesthouston**.

### 3. Say what you want changed

Type it like you'd say it to a person. Just be specific about *where* on the
site it is:

> On the FAQs page, change the parking answer to say the Avenida garage is $15
> for the day.

> The Sunday closing time is wrong — it should be 7pm, not 8pm. Fix it
> everywhere it appears on the site.

> Replace the Jinro description on the sponsors page with this: "..."

> Take the Kimchi Eating Contest off the schedule page.

### 4. That's it — Claude publishes it

Claude makes the change, checks the site still works, and pushes it live. The
live site updates about two minutes later.

**You don't have to ask it to publish** — the repo tells Claude to do that
automatically whenever you ask for a change. If you want to be sure, just say
**"is it live?"** and it will check and tell you.

---

## Brochure pages, photos, and the festival map

Same thing — say what you want and attach the image:

> Replace page 4 of the brochure with this new one.

> Here's the festival map. Add it to the Festival Map page.

The brochure pages live in `public/assets/Brochure/`, named `1.png`, `2.png`,
`3.png`… in the order they appear on the site. The website reads whatever is in
that folder, so adding, replacing, or removing a page never needs a code change.
**The festival map is `9.png`** — it also appears large at the top of the
Festival Map page.

> ⚠️ **Right now `9.png` is missing**, so the Festival Map page shows a "map
> coming soon" card. Give Claude the map artwork and ask it to add it.

Images should be **1366 × 768 pixels** so the pages look consistent.

---

## If something looks wrong

**Nothing you do can permanently break the site.**

- Change has a mistake? Just tell Claude: *"that's not right, it should say
  7pm"* — it'll fix it and republish.
- Want the last change gone? *"Undo the last change and publish that."*
- If a change would have broken the site, **it never goes live at all.** The
  previous version stays up. A failed change means "it didn't publish," not "the
  site is down."
- Still seeing the old version? Your browser is probably showing a cached copy.
  Press **Ctrl+Shift+R**, or open the page in a private/incognito window.

---

## One-time setup — do this *before* you need it

The `info@kashouston.org` account needs:

1. **A Claude Pro, Max, or Team plan.** claude.ai/code does not work on the free
   plan. This is the one thing that costs money, and nothing else will work
   without it.
2. **Access to the GitHub repo.** ✅ Already granted to info@kashouston.org.
3. **GitHub connected to Claude.** The first time you open claude.ai/code it
   asks you to sign in with GitHub — approve it. Happens once.

**Then do one harmless practice change**, like *"change the word 'Explore' to
'Learn more' on the homepage cards, publish it, then change it back and publish
again."* You'll find out the whole thing works while there's no pressure, rather
than at 9pm the night before the festival.

---

## Good to know before you edit

- **Admission to the festival is free.** Paid VIP passes are sold separately on
  Humanitix.
- **The VIP tent is a lounge, not a place to watch the stage.** Guests cannot
  watch performances from it — don't let any wording say otherwise.
- **Prices aren't written on the website** on purpose. Ticket prices, donation
  totals, and vendor food prices live on Humanitix and KultureCity so they stay
  current without anyone touching the site.

---

## If you get stuck

**Ask Claude, in the same chat window.** Say *"I'm stuck — the site still shows
the old text"* or *"did that actually publish?"* It can see the repo and what was
pushed, and it will tell you what happened.
