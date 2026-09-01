   # Spec: Footer with copyright notice on homepage

Status: draft
Job: dev_jobs.id
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The user wants a footer added to the homepage that displays a copyright notice. Currently the homepage has no footer element, and there is no copyright/attribution information shown to visitors.

The request is minimal and does not specify exact wording, year handling, or styling. Interpretation chosen:
- "Homepage" means the main landing page of the app (the root route `/` or equivalent index page), not every page in the app.
- "Copyright notice" means a standard line such as `© {current year} {project/owner name}. All rights reserved.` The year should be dynamic (current year) rather than hardcoded, to avoid the notice going stale.
- The footer is a simple static UI element, not a functional/interactive component (no links, social icons, or navigation required unless explicitly requested later).

## 2. Scope

- Add a `<footer>` element (or equivalent component, matching existing frontend framework/conventions in the repo) to the homepage only.
- Footer displays a single-line copyright notice, formatted as: `© {current year} {owner/project name}`.
- The year is computed dynamically at render time (e.g., `new Date().getFullYear()` or framework equivalent) so it stays current without manual updates.
- Footer is styled minimally to match the existing visual style of the homepage (font, color, spacing) — no new design system or theme introduced.
- Footer is positioned at the bottom of the homepage content, visible without requiring additional scroll beyond normal page length (standard footer placement).

## 3. Out of scope

- Adding the footer to any other page besides the homepage (e.g., dashboard, settings, login pages) — this can be a follow-up if desired.
- Adding additional footer content such as navigation links, social media icons, contact info, terms/privacy links, or sitemap links.
- Making the footer configurable via settings/admin panel.
- Internationalization/localization of the copyright text.
- Responsive design overhaul beyond ensuring the footer doesn't visually break on mobile widths.
- Legal review of the copyright wording — a standard placeholder format will be used unless the reviewer specifies exact required text/owner name.

## 4. Edge cases and error behavior

- **Missing/undeterminable owner name**: If there's no existing project/company name configured in the app (e.g., in config, package.json, or README), a placeholder (e.g., the repo owner "SimonR67" or a generic project name) will be used — flagged in Open Questions for confirmation.
- **Date computation failure**: If dynamic year computation somehow fails (extremely unlikely in a browser/JS context), fall back to a hardcoded current year at time of implementation rather