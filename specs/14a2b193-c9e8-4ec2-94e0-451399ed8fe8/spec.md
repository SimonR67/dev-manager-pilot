   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: 14a2b193-c9e8-4ec2-94e0-451399ed8fe8
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The homepage currently has no footer. This request asks for a simple footer to be added to the homepage that displays a copyright notice (e.g. "© 2025 Dev Manager Pilot. All rights reserved."), giving the page a more finished, professional appearance and establishing a standard place for legal/attribution text.

The request is minimal and doesn't specify exact wording, styling, or whether the footer should appear on other pages too. Interpretation chosen:
- The footer is added only to the homepage for now, since that's what was explicitly requested.
- The copyright text will use the current year (dynamically generated, not hardcoded) and the project/product name as it appears elsewhere in the app (e.g. header/title), to avoid staleness and inconsistency.
- The footer will be a simple, static, non-interactive UI element — no links, social icons, or additional content unless later requested.

## 2. Scope

- Add a `<footer>` element (or equivalent component, matching the existing frontend framework/pattern used in the repo) to the homepage layout.
- Footer content: a single line copyright notice, e.g. `© {current year} {Product Name}. All rights reserved.`
- The year should be computed dynamically at render time (not hardcoded), so it stays correct without future edits.
- Basic styling consistent with the existing homepage design system (font, color, spacing) — small, unobtrusive text, typically centered or left-aligned at the bottom of the page.
- Footer should be responsive and not overlap or break existing homepage content on common screen sizes (desktop and mobile).
- Placement: bottom of the homepage, below existing content, within normal page flow (not an intrusive fixed/sticky overlay unless that matches existing design conventions in the repo).

## 3. Out of scope

- Adding the footer to any other page besides the homepage (dashboard, settings, login, etc.) — this may be a separate follow-up request.
- Additional footer content such as navigation links, social media icons, contact info, terms of service/privacy policy links, or sitemap.
- Internationalization/localization of the copyright text.
- Configurable/editable copyright text via an admin panel or settings page.
- Dark mode / theme-specific styling beyond matching whatever the homepage already supports.
- Any backend changes — this is a purely front-end, static UI addition.
- SEO or accessibility audit beyond basic semantic HTML (footer tag, readable contrast).

## 4. Edge cases and error behavior

- **Missing product name source**: If the product/company name isn't already defined as a constant/config value in the codebase, a literal name will be used and flagged as an open question rather than inferred incorrectly.
- **Year rollover**: The year must be