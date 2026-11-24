# M Asipi Qostolani | Personal Academic & Research Portfolio

Static personal website built with Astro, Tailwind CSS, and TypeScript, hosted at `https://muhammadasipi.github.io`.

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in your browser.

## Editing Content

1. **Projects (`src/content/projects/*.md`):**
   - While `summary`, `problem`, `methods`, `results`, and `limitations` are empty, each card renders only its title and `"Details coming soon"`.
   - To activate a full case-study page (`/projects/<slug>`), populate `status` (`completed` or `in-progress`), `summary`, `problem`, `methods`, `results`, and `limitations` in the frontmatter.
2. **Publications (`src/content/publications/*.md`):**
   - Update metadata fields (`journal`, `year`, `doi`, `authors`) directly in the Markdown frontmatter.
3. **Research Notes (`src/content/notes/*.mdx`):**
   - Add `.mdx` files (use the `notes` collection schema) with `draft: false` to publish technical notes with KaTeX math (`$...$` and `$$...$$`). The `Notes` navigation link appears automatically once at least one published note exists.

## Deploying to GitHub Pages

1. Push this repository to `https://github.com/muhammadasipi/muhammadasipi.github.io`.
2. Open **Settings > Pages** in the repository.
3. Under **Build and deployment > Source**, switch from `Deploy from a branch` to **GitHub Actions**.
4. Every push to `main` automatically builds and deploys the site.

## Remaining Items

- [ ] **CV PDF:** Put the file in `public/` (e.g. `public/cv-m-asipi-qostolani.pdf`) and set `cvUrl: '/cv-m-asipi-qostolani.pdf'` in `src/site.config.ts`. The Download CV buttons in the hero and contact section then appear automatically.
- [ ] **Project Case Studies (`src/content/projects/*.md`):** Project 02 has a draft (status, summary, problem, methods, limitations, next steps) that needs your review; add `results` once you have numbers. Projects 01 and 03 still show "Details coming soon".
- [ ] **Contact form (optional):** Create a Formspree form and set `formspreeEndpoint` in `src/site.config.ts`. Until then only email, WhatsApp, GitHub, LinkedIn and ORCID are shown.

Other site settings (photo, ORCID, WhatsApp number) also live in `src/site.config.ts`.
