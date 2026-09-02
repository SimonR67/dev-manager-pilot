   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: 9f6ae5b2-7394-4e1d-89e7-818de78a0c03
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a footer element containing a copyright notice to the homepage of the application. Currently the homepage has no footer, so there is no persistent branding, ownership notice, or year-based copyright information visible to users.

The request is straightforward and largely unambiguous, but one interpretation choice was made: "homepage" is understood to mean the main landing/dashboard page of the app (the route rendered at `/`), not a global footer applied to every page/route in the app. If the app has a shared layout component wrapping all pages, the reviewer may want to confirm whether the footer should live there instead — this is flagged in Open Questions.

The problem this solves is a minor polish/completeness gap: most user-facing web apps include a footer with copyright/ownership info, and this app currently lacks one.

## 2. Scope

- Add a `<footer>` element to the homepage rendering a copyright notice, e.g.:
  `© {current year} {Owner/Project Name}. All rights reserved.`
- The year should be generated dynamically (e.g. `new Date().getFullYear()`) so it does not need manual updates.
- The owner/project name text will use the repository/project name ("Dev Manager Pilot") unless the reviewer specifies an alternate entity name.
- Basic styling consistent with the existing homepage design (matching font, muted text color, centered or bottom-aligned, small text size) so it reads as a footer and not primary content.
- The footer should be placed at the bottom of the homepage layout, below existing content.
- Footer should be a simple static component (no links, no dynamic data beyond the year) unless the reviewer wants additional links (see Open Questions).

## 3. Out of scope

- Adding the footer to every page/route in the app (only the homepage is in scope, per the literal request).
- Adding additional footer content such as navigation links, social media icons, contact info, privacy policy/terms links, or sitemap links.
- Internationalization/localization of the copyright text.
- Making the footer configurable via settings/admin panel.
- Responsive redesign of the overall homepage layout beyond accommodating the new footer.
- Any backend/API changes — this is a pure front-end presentational addition.
- SEO or accessibility audit of the whole homepage beyond ensuring the footer itself is accessible (semantic `<footer>` tag, sufficient contrast).

## 4. Edge cases and error behavior

- **Invalid/missing date data**: Not applicable — the year is derived from the client's system clock via a standard JS `Date` call, which does not fail under normal conditions. No error handling needed beyond default browser behavior.
- **Dependency unavail