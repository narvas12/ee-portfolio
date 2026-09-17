# Portfolio: Ezechukwu Emmanuel

A single-page portfolio built with Next.js 16, React 19 and Tailwind CSS v4.

**Everything on the site comes from JSON files in [`src/data/`](src/data/).** To add a
project, a job, a contract or a contact channel, edit the JSON and save. No component
needs to be touched.

---

## Running it

```bash
npm run dev     # http://localhost:3000, hot-reloads when you edit a JSON file
npm run build   # production build, also type-checks every data file
npm start       # serve the production build
npx eslint src  # lint
```

---

## The data files

| File | Controls |
| --- | --- |
| `profile.json` | Name, role, photo, hero headline, stats strip, about text, socials, SEO |
| `experience.json` | Full-time roles (the Experience timeline) and certifications |
| `contracts.json` | Contract and freelance engagements |
| `projects.json` | Featured and secondary project cards |
| `skills.json` | Skill categories with proficiency bars, plus the "How I work" list |
| `testimonials.json` | Quotes, shown in their own section and inside contract cards |
| `contact.json` | Contact form subjects, direct-contact channels, form endpoint |
| `navigation.json` | Header and footer nav links |

### Adding an item

Every list is a plain JSON array. Copy an existing object, change the values, keep
the `id` unique. Order in the file is the order on the page.

```jsonc
// src/data/projects.json → "items"
{
  "id": "my-new-project",        // must be unique
  "title": "Project name",
  "subtitle": "One line of what it is",
  "year": "2026",
  "role": "Your role",
  "context": "Company or 'Open source'",
  "featured": true,              // true = large card, false = compact grid card
  "image": "/images/projects/my-new-project.jpg",
  "summary": "A sentence or two a recruiter will actually read.",
  "problem": "What was broken.",
  "approach": "What you did about it.",
  "metrics": [{ "value": "40%", "label": "Faster checkout" }],
  "tech": ["Go", "PostgreSQL"],
  "links": [{ "label": "Source", "url": "https://…", "type": "repo" }]
}
```

`links[].type` must be one of `live`, `repo`, `case`, `article`. It picks the icon.

### Removing an item

Delete its object from the array. **Sections with an empty array hide themselves**,
and the nav link for that section disappears with it. So if you have no contract work
yet, set `"items": []` in `contracts.json` and the whole section is gone.

### Type safety

The block under the timeline is labelled by `educationHeading` in
`experience.json`, currently "Certifications". Set it to "Education" (or drop the
field) if you add a degree.

`src/lib/types.ts` describes the shape of each file. If you misspell a field or
forget one, `npm run build` fails with the file and field name instead of the site
rendering a blank section. That is deliberate, so run a build before you deploy.

---

## Images

Put files in `public/images/` and reference them with a path starting at `/images/`.

**Until an image file exists, a labelled placeholder renders in its place**. The
layout never breaks, and the placeholder prints the path it is looking for. Drop the
file at that path and it appears; no code change needed.

Suggested sizes:

| What | Path | Size |
| --- | --- | --- |
| Your photo | `/images/avatar.jpg` | 800×1000 (portrait) |
| Project shots | `/images/projects/<id>.jpg` | 1600×1000 |
| Reference avatars | `/images/testimonials/<id>.jpg` | 200×200 |
| Social share card | `/images/og.png` | 1200×630 |

### Remote image URLs

`profile.avatar` currently points at a LinkedIn CDN URL. **That URL carries an expiry
token (`e=1791417600`) and will stop working.** Download the photo and save it as
`public/images/avatar.jpg`, then set `"avatar": "/images/avatar.jpg"`.

Any other external host must be added to `images.remotePatterns` in `next.config.ts`
or Next.js will refuse to load it.

---

## The contact form

`contact.json → formEndpoint` is empty, so the form currently opens the visitor's
email client with the message pre-filled. That works, but it loses people who use
webmail.

To receive submissions properly, create a free form endpoint and paste the URL in:

1. Sign up at [formspree.io](https://formspree.io) (or getform.io / basin).
2. Create a form; copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Set `"formEndpoint": "https://formspree.io/f/abcdwxyz"` in `contact.json`.

The form already posts the right shape and includes a honeypot field for spam.

---

## Before you share the link

- [ ] Replace the remote avatar with a local file (see above).
- [ ] Set `siteUrl` in `profile.json` to your real domain, since SEO tags, the sitemap and
      the structured data all build from it.
- [ ] Add `public/resume.pdf`, or change `resumeUrl` to where your CV lives.
- [ ] Check the `level` numbers in `skills.json`. They are my estimates from your
      resume, not measurements. You are the only one who knows if Kotlin is a 70.
- [ ] Confirm the `location` on each role in `experience.json`. Your resume lists no
      locations, so every role currently says "Remote".
- [ ] Add project images at the paths named in `projects.json`, or leave the
      placeholders, which degrade gracefully.
- [ ] Add a social share image at `/images/og.png`.
- [ ] Run `npm run build` and fix anything it reports.

---

## SEO and recruiters

- `src/lib/structured-data.ts` generates schema.org `Person` markup from the same
  JSON the page renders: job title, employers, skills, projects. This is what
  Google and many recruiting crawlers read.
- `sitemap.xml` and `robots.txt` generate automatically from `profile.siteUrl`.
- Open Graph and Twitter card tags come from `profile.seo`.
- The page prints cleanly (Ctrl/Cmd+P) if someone wants a PDF.

## Deploying

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new).
Zero configuration; every push redeploys. Netlify and Cloudflare Pages work the same
way with `npm run build`.

## Design tokens

Colours, fonts and the card radius are CSS variables at the top of
`src/app/globals.css`. Change `--color-accent` and the whole site follows.
