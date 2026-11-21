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
   - Add `.mdx` files with `draft: false` to publish technical notes with KaTeX math (`$...$` and `$$...$$`). The `Notes` navigation link appears automatically once at least one published note exists.

## Deploying to GitHub Pages

1. Push this repository to `https://github.com/muhammadasipi/muhammadasipi.github.io`.
2. Open **Settings > Pages** in the repository.
3. Under **Build and deployment > Source**, switch from `Deploy from a branch` to **GitHub Actions**.
4. Every push to `main` automatically builds and deploys the site.

## Remaining `[TODO]` Items to Complete

- [ ] **Profile Photo:** Add an optimized WebP/AVIF portrait to `public/images/profile.webp` and replace the placeholder in `src/components/Hero.astro`.
- [ ] **CV PDF:** Add your CV file to `public/cv-m-asipi-qostolani.pdf` and replace the `Download CV [TODO]` badge in `Hero.astro` and `ContactForm.astro` with `<a href="/cv-m-asipi-qostolani.pdf" download>`.
- [ ] **Project Case Studies (`src/content/projects/*.md`):** Add `status`, `summary`, `problem`, `methods`, `results`, and `limitations` when ready.
- [ ] **Contact Form (`src/components/ContactForm.astro`):** Replace `TODO_FORM_ID` with your Formspree form ID.
