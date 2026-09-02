# Plan: Add footer with copyright notice to homepage

Status: draft
Job: 14a2b193-c9e8-4ec2-94e0-451399ed8fe8
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/14a2b193-c9e8-4ec2-94e0-451399ed8fe8/spec.md

## 1. Definition of done

- The homepage renders a `<footer>` element containing a single-line copyright notice in the form `© {current year} {Product Name}. All rights reserved.`
- The year is computed dynamically at render time (e.g. via `new Date().getFullYear()`), not hardcoded.
- The product/company name matches the name used elsewhere in the app (header/title); if no such constant exists, a literal placeholder name is used and called out as an open question in the PR/task notes rather than guessed.
- The footer appears only on the homepage, not on other pages (dashboard, settings, login, etc.).
- The footer sits at the bottom of the page in normal document flow (not fixed/sticky, unless that already matches existing homepage conventions), and does not overlap or break existing content on common desktop and mobile viewport sizes.
- Styling (font, color, spacing) is visually consistent with the existing homepage design system.
- No backend, routing, i18n, theming, or admin-configuration changes are introduced.

## 2. File map

| File | Change |
|---|---|
| src/pages/Home.{jsx,tsx} (or equivalent homepage component/page file — exact path to confirm against repo structure) | Import and render new `Footer` component at the bottom of the homepage layout, below existing content. |
| src/components/Footer.{jsx,tsx} | New component: renders `<footer>` with dynamically computed year and product name; no props needed beyond optional `productName` default. |
| src/components/Footer.module.css (or existing styling convention, e.g. Tailwind classes / styled-components) | Basic styling: small, unobtrusive text, centered or left-aligned, consistent spacing/color with existing design system. |
| src/components/Footer.test.{jsx,tsx} | Unit test(s) verifying rendered copyright text, dynamic year, and semantic `<footer>` tag. |
| src/pages/Home.test.{jsx,tsx} (existing or new) | Test verifying the footer is present on the homepage. |
| (any other page test files, e.g. Dashboard.test, Settings.test) | Assertion (or added check) confirming footer is absent from non-homepage pages, to guard scope. |

Note: exact file paths/names will be adjusted to match the actual repo structure once confirmed (this repo's framework/pattern — e.g. React, Next.js, Vue — determines final file extensions and locations).

## 3. User journey

A visitor loads the homepage of Dev