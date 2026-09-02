# Plan: Footer with Copyright Notice on Homepage

Status: draft
Job: dev_jobs.id
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/d823147f-ac40-43e0-a233-499e94987653/spec.md

## 1. Definition of done

- A footer element is rendered on the homepage (and only the homepage, unless a shared layout makes exclusion impractical, in which case it's flagged rather than silently applied everywhere).
- The footer displays the exact text `© 2021 [Company/Project Name]`, with the placeholder replaced by the repo/project name if no confirmed name is available.
- The year "2021" is a hard-coded static literal — no `Date` object, no computed or dynamic value, no range.
- The footer contains only the copyright text — no links, icons, nav, or other content.
- The footer's styling (font, spacing, alignment) visually matches the rest of the homepage and sits at the bottom of the page without breaking existing layout/breakpoints.
- No changes made to other pages, backend, config, or CMS/admin systems.

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx | New component rendering the static copyright footer (`© 2021 [Project Name]`) |
| src/pages/Home.tsx (or equivalent homepage entry file) | Import and render `<Footer />` at the bottom of the homepage layout |
| src/components/Footer.css (or Footer.module.css / relevant styling approach used in repo) | Basic styling for footer spacing, alignment, and font consistent with homepage |
| src/components/__tests__/Footer.test.tsx | Unit test verifying static text and absence of dynamic year logic |
| src/pages/__tests__/Home.test.tsx | Integration test verifying footer renders on homepage |

## 3. User journey

A visitor loads the homepage. As they scroll to the bottom of the page, they see a simple, unobtrusive footer with the text "© 2021 [Project Name]" styled consistently with the rest of the page — no links, icons, or interactive elements. The footer does not appear (or is out of scope) on other pages of the site. If the visitor returns to the site in a future year, the footer still reads "© 2021 ..." unchanged, since the year is a fixed literal, not a computed value.

## 4. Tasks

- [ ] 1. Create the `Footer` component that renders the static text `© 2021 [Project Name]` — files: src/components/Footer.tsx — test: src/components/__tests__/Footer.test.tsx asserts the rendered output equals the exact string containing "2021" and the project name, with no other content
- [ ] 2. Guard against dynamic year computation by asserting no `Date`/