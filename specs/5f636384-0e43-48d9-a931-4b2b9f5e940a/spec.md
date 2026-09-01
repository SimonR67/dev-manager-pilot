   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: 5f636384-0e43-48d9-a931-4b2b9f5e940a
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a footer element to the homepage that displays a copyright notice (e.g. "© 2025 [Project/Org Name]. All rights reserved."). Currently the homepage has no footer, so there's no consistent, visible attribution/copyright statement at the bottom of the page.

The request is ambiguous on two points, and the following interpretation has been chosen:

- **Scope of "homepage"**: This applies only to the main landing page of the application (the root route / index view), not a shared layout applied to every page. If the app has a shared layout component already wrapping all pages, the footer may be added there instead, but functionally the requirement is only verified on the homepage. (See Open Questions.)
- **Content of the notice**: Since no specific copyright holder name or year format was given, the interpretation is a static text footer of the form `© {current year} {project name}. All rights reserved.`, using the project name as found in the repo (e.g. package.json `name`/`author` field or README title). The year will be the current year at build/render time (either hardcoded at implementation time or dynamically computed — dynamic is preferred to avoid staleness).

## 2. Scope

- Add a `<footer>` element to the homepage (or shared layout, per interpretation above) containing a copyright notice.
- Copyright text format: `© {year} {project/owner name}. All rights reserved.`
- The footer should be styled minimally to be visually distinct from page content (e.g. small text, centered or aligned to bottom, subtle border/spacing) consistent with the existing app's basic styling conventions (reuse existing CSS/theme variables where available — no new design system).
- The footer should render on page load with no user interaction required.
- The year should be computed dynamically (e.g. `new Date().getFullYear()`) so it does not require yearly manual updates, unless the codebase has no straightforward way to do this, in which case a hardcoded current year is acceptable.
- Footer is static content — no links, social icons, or additional sections unless trivially already present in a shared layout component being reused.

## 3. Out of scope

- Adding the footer to every page/route of the application (only the homepage is required, unless it's naturally shared via an existing layout).
- Adding additional footer content: navigation links, social media icons, contact info, sitemap, legal pages (privacy policy, terms of service), or newsletter signup.
- Internationalization/localization of the copyright text.
- Making the footer configurable via a CMS, settings panel, or environment variable.
- Responsive design overhaul of the page — only enough styling to make the footer legible and non-intrusive.
- Dark mode / theming