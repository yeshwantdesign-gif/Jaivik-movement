# Jaivik Website

A static HTML website ready for deployment on Vercel.

## Structure

- `index.html` — Main website
- `styles.css` — Prebuilt Tailwind stylesheet (generated — do not edit by hand)
- `favicon.svg` — Site icon (hemp leaf mark)
- `tailwind.config.js` — Brand colours and fonts, used to regenerate `styles.css`
- `src/input.css` — Tailwind entry file

## Deploy to Vercel

### Option 1: Drag and drop
Upload this project folder through Vercel's deployment interface.

### Option 2: GitHub
1. Create a GitHub repository.
2. Upload these files.
3. Import the repository into Vercel.
4. Use the default settings and deploy.

No build command is required. `styles.css` is committed prebuilt, so Vercel
only has to serve static files. There is no `package.json`, so Vercel will not
attempt an install or a framework build.

## Editing styles

Tailwind classes are compiled ahead of time into `styles.css`. If you add or
change any Tailwind class in `index.html`, or edit `tailwind.config.js`,
regenerate the stylesheet before deploying:

```bash
npx tailwindcss@3.4.19 -c tailwind.config.js -i src/input.css -o styles.css --minify
```

Pinned to Tailwind 3.4.19 — this is the same major version the old CDN script
served, so the compiled output matches the original rendering. Upgrading to
Tailwind 4 is a breaking change and would need the config rewritten in CSS.

Page-specific animations (the sprouting hemp leaf, the loading dots) live in the
`<style>` block inside `index.html`, not in Tailwind.
