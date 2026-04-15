# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

The Angular app lives entirely inside `portfolioWeb/`. All `ng` and `npm` commands must be run from that directory.

```
portfolioWeb/
  src/app/
    app.component.ts   ← all logic, data, and translations
    app.component.html ← single-page template with every section
    app.component.css  ← all styles
  public/              ← static assets (pic.jfif, cv.pdf, favicons)
  dist/portfolio-web/  ← build output (git-ignored)
```

## Common commands

All run from `portfolioWeb/`:

```bash
npm start          # dev server at http://localhost:4200 (alias for ng serve)
npm run build      # production build → dist/portfolio-web/browser/
ng test            # unit tests via Karma
```

Production build for GitHub Pages (sets base-href):
```bash
npm run build -- --project=portfolioWeb --configuration=production --base-href=/newWebPortfolio/
```

## Architecture

This is a **single-component Angular 19 app** with SSR enabled (`provideClientHydration` + `src/server.ts`). There is no routing — the entire site is one scrollable page rendered by `AppComponent`.

**All content is hardcoded in `app.component.ts`**:
- `technologies[]` — skill cards with logo URLs and categories
- `esperienze[]` / `altreEsperienze[]` — work experience timeline
- `progetti[]` — project cards with per-project tech stacks

**Bilingual support (IT/EN)**: The `translations` object holds all UI strings for both languages. The active language is toggled via `toggleLanguage()` and persisted to `localStorage`. When adding text to the UI, always add both `it` and `en` keys to `translations` and use `t.section.key` in the template — never hardcode strings directly in the HTML.

**Technology logos** are loaded from CDN URLs (jsdelivr, wikimedia, etc.) — not bundled locally.

**Sections** are plain `<section id="...">` elements. Navigation uses `scrollTo(sectionId)` (smooth scroll), not Angular Router.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages (`gh-pages` branch). The deploy target is `./portfolioWeb/dist/portfolio-web/browser`.
