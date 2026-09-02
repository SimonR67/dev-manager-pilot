   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: aa3c60ed-a740-4f9b-aa78-df8ed77de911
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The homepage of the application currently has no footer. The request is to add a footer element containing a copyright notice, so the page has a standard, complete look and gives basic attribution/legal notice (e.g. "© 2024 [Project/Owner Name]. All rights reserved.").

The request is ambiguous on two points, resolved as follows:
- **Which pages get the footer**: Interpreted as the homepage only (as literally requested), not a global layout change across every route. If the homepage uses a shared layout component that other pages also use, the footer will naturally appear elsewhere too — this is acceptable as a side effect but not a required goal.
- **Copyright text content**: No owner name, project name, or year format was specified. Interpretation chosen: use the repository/project name (as found in package.json or existing branding in the app) and the current year, dynamically computed (e.g. `© {currentYear} dev-manager-pilot`), so it doesn't go stale. This choice should be confirmed by the reviewer (see Open Questions).

## 2. Scope

- Add a `<footer>` element to the homepage (or the shared layout/root component the homepage renders through, if that's the existing pattern in the codebase).
- Footer contains a single-line copyright notice, e.g.: `© {current year} dev-manager-pilot. All rights reserved.`
- The year is computed dynamically (via `new Date().getFullYear()` or equivalent) rather than hardcoded, so it stays correct without future edits.
- Basic styling consistent with the existing app's visual style (matching fonts, spacing, and color scheme already used elsewhere in the app) — small, unobtrusive, typically centered or aligned to match existing header/nav conventions.
- Footer is static content — no dynamic data fetching, no links, no interactive elements required.
- Placement: bottom of the homepage content, visible without requiring scroll on typical viewport sizes if reasonably achievable, but not a strict requirement if the page content is long.

## 3. Out of scope

- Adding the footer to every page/route of the application (only the homepage is in scope, unless the homepage already shares a layout component used everywhere — in which case this is an incidental side effect, not a goal to pursue further).
- Additional footer content such as social media links, navigation links, sitemap links, contact info, "About" text, or third-party attributions.
- Internationalization/localization of the copyright text.
- A configurable/CMS-driven footer (e.g. editable via admin settings).
- Responsive design overhaul beyond making the footer itself display reasonably on mobile and desktop.
- Legal review of the copyright wording — the wording used is a placeholder/reasonable default, not vetted legal text.
- Dark mode / the