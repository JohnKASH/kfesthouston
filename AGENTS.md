<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Publishing changes to the live site

This repo auto-deploys. Vercel rebuilds and publishes
**kfesthouston.com** from every commit on `main`. There is no separate deploy
step and no deploy button.

**So when you have made a change the user asked for, publishing it is part of
the job.** Do not stop at edited files and wait to be told to commit — the
person asking may not know that's a separate step. Finish like this:

1. `npm run build` — a build that fails must never be published. If it fails,
   fix it, and only then continue.
2. `git add -A && git commit -m "<short plain-English description>"`
3. `git push origin HEAD:main`
4. Tell the user it's published and that the live site updates in a couple of
   minutes.

If the push is rejected (no write access, protected branch), push your branch
and open a pull request instead — then say plainly, in one sentence, that
**merging that pull request is what publishes the change**, and give them the
link.

Don't publish when the user only asked a question, asked you to review or
explain something, or said they're still deciding. Publish when they asked for
a change and you made it.

# Facts about this festival that are easy to get wrong

- **Admission is free.** Paid VIP passes are sold separately through Humanitix.
- **The VIP tent is a hospitality lounge, not a viewing area.** Guests cannot
  watch the stage from it. Never write copy describing it as a place to watch
  performances.
- **Keep prices off the site.** Ticket prices, fundraising totals, and vendor
  food prices all change without notice, so they live on the source (Humanitix,
  KultureCity) rather than being hardcoded here.
- **The brochure is folder-driven.** Pages come from `public/assets/Brochure/`
  via `app/lib/brochure.ts`. Adding, replacing, or removing a page is a file
  operation — don't hardcode a page list.
