   # Spec: Add footer with copyright notice to homepage

Status: draft
Job: 5ade4531-c44e-4c30-9e93-46fd83de68cb
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a footer element to the homepage that displays a copyright notice (e.g. "© 2025 [Project/Company Name]. All rights reserved."). Currently the homepage has no footer, so there's no persistent attribution/copyright information visible to users.

The request is fairly unambiguous in intent but ambiguous in a couple of details:
- **Which page(s)**: the request says "homepage" specifically, so this spec scopes the change to the homepage only, not a global/shared layout footer across the whole app — unless the homepage already shares a layout component with other pages, in which case the footer would naturally appear elsewhere too (see Open Questions).
- **Copyright text/owner name**: not specified in the request. The interpretation chosen is to use a placeholder (e.g. the project name "Dev Manager Pilot" and the current year, dynamically computed) unless a specific name/entity is provided by the reviewer.

## 2. Scope

- Add a footer section to the homepage UI, positioned at the bottom of the page content.
- Footer displays a copyright notice in the format: `© {current year} {project/owner name}. All rights reserved.`
- The year should be computed dynamically (e.g. `new Date().getFullYear()`) so it doesn't need manual updates each year.
- Basic, minimal styling consistent with the existing homepage design (font size, color, spacing) so it doesn't visually dominate the page — small, unobtrusive text, typically centered or left-aligned depending on existing layout conventions.
- The footer should be implemented as a distinct, reusable component (e.g. `Footer.tsx` / `Footer.jsx` or equivalent depending on the repo's framework) so it can be reused elsewhere later if desired, but it will only be wired into the homepage in this change.
- Responsive behavior: footer should render correctly on both desktop and mobile viewport widths without breaking layout.

## 3. Out of scope

- Adding the footer to any page other than the homepage (e.g. dashboard, settings, login pages), even if those pages would benefit from consistent footer presence. If a global layout footer is desired, that is a separate future feature.
- Additional footer content beyond the copyright notice — no links (e.g. privacy policy, terms of service, social media), no navigation, no company logo, no newsletter signup, etc.
- Internationalization / localization of the copyright text.
- Making the copyright text configurable via admin settings or environment variables (it will be a static/hardcoded string with a dynamic year).
- Any backend or API changes — this is a pure front-end/UI change.
- SEO or access