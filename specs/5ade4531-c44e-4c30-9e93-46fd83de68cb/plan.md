# Plan: Add footer with copyright notice to homepage

Status: draft
Job: 5ade4531-c44e-4c30-9e93-46fd83de68cb
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/5ade4531-c44e-4c30-9e93-46fd83de68cb/spec.md

## 1. Definition of done

- A new, reusable `Footer` component exists in the codebase and renders a copyright notice in the format `© {current year} {project/owner name}. All rights reserved.`
- The year in the footer is computed dynamically at render time (e.g. `new Date().getFullYear()`), not hardcoded.
- The `Footer` component is rendered on the homepage only, positioned at the bottom of the page content.
- The footer's styling is minimal and consistent with existing homepage design conventions (small text, unobtrusive, sensible alignment), and does not break layout on desktop or mobile viewport widths.
- No other pages (dashboard, settings, login, etc.) are modified to include the footer.
- No links, navigation, logos, or additional content are added beyond the copyright text.
- No backend, API, i18n, or configurability changes are introduced.

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx | New reusable component rendering the copyright notice with dynamically computed year |
| src/components/Footer.module.css (or equivalent styling file matching repo conventions) | Minimal styling for footer: font size, color, spacing, responsive layout |
| src/pages/Home.tsx (or equivalent homepage entry file, e.g. src/App.tsx / src/pages/index.tsx) | Import and render `Footer` at the bottom of the homepage content |
| src/components/Footer.test.tsx | Unit test verifying the footer renders the correct copyright text and current year |
| src/pages/Home.test.tsx (or equivalent) | Test verifying the homepage renders the Footer component |

## 3. User journey

A visitor loads the homepage of Dev Manager Pilot. As they scroll to the bottom of the page (or on initial load if the page content is short), they see a small, unobtrusive line of text: "© 2025 Dev Manager Pilot. All rights reserved." The text sits below the main homepage content, doesn't interfere with any interactive elements, and remains legible and correctly positioned whether viewed on a desktop browser or a mobile device. Navigating to any other page (e.g. dashboard) does not show this footer, since it was only added to the homepage.

## 4. Tasks

- [ ]