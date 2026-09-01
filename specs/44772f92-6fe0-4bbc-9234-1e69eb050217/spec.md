   # Spec: Homepage Footer with Copyright Notice

Status: draft
Job: dev_jobs.id
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The user wants a footer added to the homepage that displays a copyright notice. Currently the homepage has no footer element. This is a small polish/completeness change common to most web applications — it gives the page a finished look and communicates ownership/rights over the content.

The request is unambiguous in intent but ambiguous in exact content and placement details. Interpretation chosen:
- "Homepage" means the main landing/root route of the application (`/`), not every page in the app.
- The copyright notice will follow the common convention: `© {current year} {org/owner name}. All rights reserved.` The owner/org name will default to the repository/product name (e.g., "Dev Manager Pilot") unless the reviewer specifies otherwise.
- The footer will be a simple static UI element, not a configurable or CMS-driven component.

## 2. Scope

- Add a `<footer>` element to the homepage only.
- Footer contains a single-line copyright notice, e.g.: `© 2025 Dev Manager Pilot. All rights reserved.`
- The year is generated dynamically (current year at render time), not hardcoded, so it stays correct without future edits.
- Footer is styled minimally to match existing site look-and-feel (font, color, spacing consistent with rest of page) — no new design system or theme introduced.
- Footer is placed at the bottom of the homepage layout, below existing content.
- Footer is a static, non-interactive element (no links, no dynamic content beyond the year).

## 3. Out of scope

- Adding the footer to any other page/route besides the homepage.
- Making the footer a shared/global layout component used app-wide (unless the reviewer explicitly wants this — see Open Questions).
- Adding additional footer content such as navigation links, social media icons, contact info, sitemap links, or legal links (privacy policy, terms of service).
- Internationalization/localization of the copyright text.
- Making the copyright owner name or text configurable via settings/admin panel.
- Any backend, database, or API changes — this is a static frontend/UI change only.
- Responsive design overhaul of the homepage beyond ensuring the footer itself displays reasonably on common screen sizes.

## 4. Edge cases and error behavior

- No user input is involved, so there is no invalid input scenario for this feature.
- No external dependency (API, database, service) is required to render the footer, so there is no dependency-unavailability scenario.
- Edge case: system clock/timezone affecting "current year" — acceptable to use the client or server's local year; exact precision (UTC vs local) is not critical for a copyright year and does not need special handling.
- Edge case: very narrow viewport widths — footer text should wrap or shrink gracefully rather than overflow or break the layout.

## 5. Acceptance criteria

- [ ] Visi