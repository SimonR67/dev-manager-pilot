# Spec: Footer with Copyright Notice on Homepage

Status: draft
Job: dev_jobs.id
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to add a footer to the homepage that displays a copyright notice. This is a common, low-risk UI addition that gives the page a finished, professional look and communicates ownership of the content.

The original request did not specify a year for the copyright notice. An earlier draft of this spec used a different year, and the human reviewer explicitly requested that the year be **2021**. This revision fixes that: the footer copyright notice must display the year **2021**, hard-coded as a static value — not the current year, not a dynamically computed year, and not a range ending in the current year (e.g. "2021–present"). This resolves the ambiguity definitively per reviewer instruction, and avoids reintroducing the same issue by making the year an explicit, fixed literal in both the spec and the acceptance criteria below.

## 2. Scope

- Add a footer element to the homepage only (not other pages, unless a shared layout component makes this unavoidable — see Open Questions).
- The footer displays a copyright notice in the form: `© 2021 [Company/Project Name]` (exact wording of the name to be confirmed — see Open Questions).
- The year displayed is the static literal **2021**. It does not update automatically over time.
- The footer is a simple, static text block. No links, social icons, navigation, or additional content are included unless explicitly requested later.
- Basic styling consistent with the existing homepage look and feel (font, spacing, alignment) so the footer visually fits at the bottom of the page.

## 3. Out of scope

- Dynamically calculating the copyright year (e.g. via `new Date().getFullYear()`), whether as a fixed year or a range — the year must be the static value 2021 as instructed by the reviewer.
- Adding the footer to pages other than the homepage.
- Adding additional footer content such as navigation links, social media icons, contact info, legal/privacy links, or a newsletter signup.
- Internationalization/localization of the copyright text.
- Any backend, database, or configuration changes to make the year or text editable via an admin panel or CMS.
- Responsive design overhaul beyond what's needed to display the footer cleanly on existing supported breakpoints.

## 4. Edge cases and error behavior

- **Missing company/project name**: If the exact name to display alongside the copyright symbol is not confirmed before implementation, use the repository/project name as a placeholder and flag it for review rather than blocking implementation