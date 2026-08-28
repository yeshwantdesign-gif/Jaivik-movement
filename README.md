# Jaivik Website

A static HTML site for Jaivik — creative movement, natural fibres, Kathmandu / London.

**Live:** https://jaivik-movement.vercel.app
**Repo:** https://github.com/yeshwantdesign-gif/Jaivik-movement

Pushing to `main` deploys automatically. There is no build step — Vercel just
serves the files.

---

## Editing the text (easiest — no tools needed)

1. Open [`index.html` on GitHub](https://github.com/yeshwantdesign-gif/Jaivik-movement/blob/main/index.html)
2. Click the pencil ✏️ icon
3. Edit, then **Commit changes** at the bottom
4. Wait ~20 seconds — the live site updates itself

Edit only the words *between* the tags. Leave `class="..."` alone:

```html
<h2 class="font-title text-3xl md:text-5xl font-bold mb-6">Jaivik Movement</h2>
                                                          ^^^^^^^^^^^^^^^
                                                          edit this part only
```

### Where each section lives

Search (`Ctrl/Cmd+F`) for these comment markers in `index.html`:

| Section | Search for | ~Line |
|---|---|---|
| Nav links | `<!-- NAVIGATION -->` | 98 |
| Big headline + intro paragraph | `<!-- HERO` | 144 |
| "Full Website Cultivating" badge | `<!-- CULTIVATING HEMP BADGE -->` | 148 |
| Jaivik Movement + the 3 cards | `<!-- TAB: JAIVIK MOVEMENT` | 196 |
| Who We Are | `<!-- EDITORIAL "WHO WE ARE"` | 245 |
| The large pull-quote | `<!-- Full-Width Atmospheric` | 297 |
| The Symbol + the 4 cards | `<!-- THE SYMBOL OF JAIVIK` | 354 |
| Email, Instagram, footer | `<!-- CONTACT & FOOTER -->` | 384 |

### Don't forget the social preview

The headline appears twice: once on the page, and once in the `og:title` /
`og:description` tags near the top of the file (~lines 15–31). These are what
show when the link is shared on Instagram, WhatsApp or Slack. If you change the
headline or the intro, change them there too, or the preview will disagree with
the page.

---

## Changing the images

There are three, currently **hotlinked Unsplash stock photos**. Replacing them
with real Jaivik photography is the biggest single improvement left on the page.

| # | ~Line | What it shows | Styling applied |
|---|---|---|---|
| 1 | 263 | Kathmandu artisans | `grayscale contrast-125` — renders **black & white** |
| 2 | 301 | Full-bleed banner behind the quote | `opacity-25` under a green wash — very faint |
| 3 | 341 | Hemp textile macro | `opacity-85` — near full colour |

To swap one in:

1. On GitHub: **Add file → Upload files**. Type `images/` at the start of the
   filename box to create the folder, then drop your photos in.
2. Edit `index.html` and change the `src`:

   ```html
   <!-- from -->
   src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"

   <!-- to -->
   src="/images/kathmandu-artisans.jpg"
   ```

3. Update the `alt="..."` beside it to describe your actual photo — it matters
   for screen readers and for search.

**Size them first:** ~1600px wide, JPEG, under 300KB each. Anything larger only
slows the page down.

If you want image 1 in colour, delete `grayscale` from its `class` attribute.

---

## The one rule that can break the page

**Changing words is always safe. Changing `class="..."` may not be.**

Tailwind is compiled ahead of time into `styles.css`, which contains *only* the
classes the page used at build time. Add a class that wasn't already in use and
nothing will happen — the style doesn't exist in the file.

So if you edit any `class` attribute, or change `tailwind.config.js`, rebuild:

```bash
npx tailwindcss@3.4.19 -c tailwind.config.js -i src/input.css -o styles.css --minify
```

Then commit both `index.html` and `styles.css` together.

Brand colours and fonts live in `tailwind.config.js` — change the green there,
rebuild, and it updates everywhere at once.

Pinned to Tailwind 3.4.19, the same major version the old CDN script served, so
the compiled output matches the original rendering. Tailwind 4 is a breaking
change and would need the config rewritten in CSS.

Page-specific animations (the sprouting hemp leaf, the loading dots) live in the
`<style>` block inside `index.html`, not in Tailwind.

---

## Editing locally instead

```bash
cd ~/"GME FIles and Others/Yeshwant Personal/jaivik-vercel"
git pull                 # always pull first if you also edit on GitHub
open index.html          # preview in a browser
```

After editing:

```bash
git add -A
git commit -m "Update copy and images"
git push                 # this deploys
```

---

## Files

- `index.html` — the whole site: markup, copy, inline animation CSS, nav script
- `styles.css` — compiled Tailwind. **Generated — never edit by hand**
- `tailwind.config.js` — brand colours and fonts
- `src/input.css` — Tailwind entry file
- `favicon.svg` — browser tab icon (hemp leaf mark)

## Known TODOs

- **Custom domain** — the `canonical` and `og:url` tags currently point at
  `https://jaivik-movement.vercel.app/`, which is correct while that is the
  live address. `jaivikmovement.com` is registered but parked. If it is ever
  pointed at this project (`vercel domains add jaivikmovement.com`, then update
  the nameservers), change `canonical`, `og:url` and the commented `og:image`
  path in `index.html` to match — otherwise the new domain will be telling
  search engines the real page is on `.vercel.app`.
- **No social preview image** — add a 1200×630 `og-image.jpg`, then uncomment
  the four `og:image` tags near the top of `index.html` and switch
  `twitter:card` to `summary_large_image`.
- **Stock photography** — all three images are Unsplash placeholders.
