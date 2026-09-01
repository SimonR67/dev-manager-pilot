   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: b1ad0e90-5d73-4e3b-9506-4712017dd7e4
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The homepage of the application currently has no footer. This request adds a simple footer to the homepage containing a copyright notice (e.g. "© 2025 Dev Manager Pilot. All rights reserved."), so the page has a standard, polished closing element that communicates ownership/attribution.

The request is straightforward and largely unambiguous, but one interpretation choice was made: "the homepage" is understood to mean the top-level landing/index page of the app (whatever route renders at `/`), not every page in the app. If the app has a shared layout component that already wraps all pages, the footer may end up visible site-wide as a side effect of using that shared layout — this is acceptable, but the explicit requirement is only for the homepage.

The copyright year and organization/product name are assumed defaults (current year, product name from the repo/app) unless the reviewer specifies otherwise (see Open Questions).

## 2. Scope

- Add a footer element to the homepage that displays a copyright notice in the form: `© <year> <product/company name>. All rights reserved.`
- The year should be the current year, ideally computed dynamically (e.g. via `new Date().getFullYear()` or equivalent) rather than hardcoded, so it doesn't go stale.
- The footer should be styled consistently with the existing homepage design (matching fonts, color scheme, spacing conventions already used elsewhere in the app).
- The footer should be placed at the bottom of the homepage content, visible without requiring additional user interaction (i.e., part of normal page flow, not hidden behind a toggle).
- Basic responsive behavior: the footer should render reasonably on both desktop and mobile viewport widths, consistent with how the rest of the homepage handles responsiveness.
- If the homepage is implemented via a shared layout/component structure, the footer may be added to that shared component if that's the most natural implementation point — but functional requirement is scoped to "appears on homepage."

## 3. Out of scope

- Adding the footer to every page of the app (only the homepage is required; if it appears elsewhere due to shared layout reuse, that's incidental, not a requirement).
- Additional footer content such as navigation links, social media icons, contact info, legal links (privacy policy, terms of service), or a sitemap.
- Internationalization/localization of the copyright text.
- Configurable/admin-editable copyright text (e.g. via a settings panel or CMS).
- Any backend, API, or database changes — this is a purely front-end/static content change.
- Dark mode / theme-specific custom styling beyond matching existing homepage conventions.
- Analytics or tracking