   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: d823147f-ac40-43e0-a233-499e94987653
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The homepage of dev-manager-pilot currently has no footer. This request adds a
simple footer element to the homepage displaying a copyright notice (e.g.
"© 2025 [Project/Owner Name]. All rights reserved."), giving the page a more
complete, professional appearance and providing standard attribution.

The request is minimal and somewhat ambiguous on details (exact wording, year
handling, styling, whether it appears on other pages). Interpretation chosen:

- The footer is added to the homepage only, not globally to every route/page,
  since the request specifically says "homepage."
- The copyright year will be generated dynamically (current year) rather than
  hardcoded, to avoid the notice going stale.
- The owner/project name will default to the repository/project name unless
  the reviewer specifies a different entity name.
- Styling will match the existing visual design/theme of the app (colors,
  fonts, spacing) using whatever CSS/component convention the project already
  uses, rather than introducing a new design system.

## 2. Scope

- Add a `Footer` component (or equivalent, matching existing project
  conventions — e.g. React component if the app is React-based) rendered at
  the bottom of the homepage layout.
- Footer displays a single-line copyright notice: copyright symbol, current
  year (computed at render time, not hardcoded), and project/owner name.
- Footer is styled to be visually consistent with the rest of the homepage
  (matches existing spacing/typography/color scheme), and is unobtrusive
  (small text, low visual weight, doesn't overlap or push critical content).
- Footer is responsive — displays correctly on both desktop and mobile
  viewport widths, without breaking layout or overlapping other homepage
  content.
- If the app already has a shared layout wrapper used by multiple pages, the
  footer may be added there as long as it is visible on the homepage. If
  adding it there would surface it on other pages, this is acceptable and not
  considered scope creep, but the primary requirement is that it appears on
  the homepage.

## 3. Out of scope

- Adding a footer to any other page beyond the homepage (unless it comes "for
  free" via a shared layout, per Scope above — no page-specific footers will
  be built for other routes).
- Adding additional footer content such as navigation links, social media
  icons, contact info, sitemap links, or legal/privacy links. Only the
  copyright notice is included.
- Internationalization/localization of the copyright text.
- Making the footer content configurable via an admin panel, environment
  variable, or CMS. The owner/project name is a static string in code (unless
  the reviewer requests otherwise in Open