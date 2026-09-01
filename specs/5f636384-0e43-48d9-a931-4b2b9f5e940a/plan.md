# Plan: Add footer with copyright notice to homepage

Status: draft
Job: 5f636384-0e43-48d9-a931-4b2b9f5e940a
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/5f636384-0e43-48d9-a931-4b2b9f5e940a/spec.md

## 1. Definition of done

- The homepage (root route / index view) renders a `<footer>` element on load, with no user interaction required.
- The footer displays the text `© {year} {project/owner name}. All rights reserved.`, where `{year}` is computed dynamically via `new Date().getFullYear()` (or a documented hardcoded fallback if dynamic computation is impractical) and `{project/owner name}` is derived from the repo's `package.json` (`name`/`author`) or README title.
- The footer is styled minimally using existing CSS/theme conventions (small text, distinct spacing/border), with no new design system introduced.
- The footer contains no links, icons, or extra sections beyond the copyright text (unless trivially inherited from an existing shared layout).
- If a shared layout component already wraps all pages, the footer may live there instead of the homepage component directly — but it must be verified to render correctly on the homepage.
- No other routes/pages are required to show the footer as part of this change (though it's acceptable if a shared layout causes it to appear elsewhere).

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx (or equivalent, matching repo's existing component conventions) | New component rendering the `<footer>` element with dynamic year + project name copyright text |
| src/components/Footer.css / Footer.module.css (or existing global stylesheet, matching repo conventions) | Minimal styles for footer (small text, spacing, subtle border), reusing existing theme variables |
| src/pages/index.tsx or src/app/page.tsx (or repo's actual homepage entry point) | Import and render `<Footer />` at the bottom of the homepage content |
| src/layouts/Layout.tsx (only if a shared layout already wraps all pages and is the chosen integration point per spec's interpretation) | Import and render `<Footer />` at the bottom of the layout |
| package.json | Read (not modified) — source of project name/author for the copyright text |
| tests/components/Footer.test.tsx (or repo's existing test convention/location) |