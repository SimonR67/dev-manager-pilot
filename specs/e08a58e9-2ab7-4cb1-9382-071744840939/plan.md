# Plan: Add footer with copyright notice to homepage

Status: draft
Job: e08a58e9-2ab7-4cb1-9382-071744840939
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/e08a58e9-2ab7-4cb1-9382-071744840939/spec.md

## 1. Definition of done

- A `<footer>` element (or equivalent component) is rendered on the homepage (the page served at the root `/` route, or the app's shared layout if the homepage uses one).
- The footer displays exactly one line of text in the format `© {current year} Dev Manager Pilot. All rights reserved.`
- The year is computed at render time via `new Date().getFullYear()`, not hardcoded.
- The footer has minimal styling consistent with the existing design system (small text, positioned at the bottom of page content, alignment matching existing layout conventions).
- The footer contains no links, buttons, or other interactive elements.
- The footer is not sticky/fixed — it sits at the bottom of normal page flow.
- If added via a shared layout, only the homepage's rendering is covered by tests/acceptance — other pages picking it up is an accepted side effect, not a separate requirement.
- No other pages, navigation, or content are modified beyond what's needed to render the footer on the homepage.

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx (new) | New standalone `Footer` component rendering the copyright line with dynamic year and minimal styling. |
| src/components/Footer.test.tsx (new) | Unit test verifying the component renders the correct text with the current year and no interactive elements. |
| src/pages/Home.tsx (or equivalent homepage entry file — confirm actual path during Task 1) | Import and render `<Footer />` at the bottom of the homepage's JSX. |
| src/pages/Home.test.tsx (or equivalent existing homepage test file) | Add/extend test asserting the footer text is present when the homepage renders. |
| src/App.css / Footer.module.css (or existing homepage stylesheet, whichever the design system uses) | Add minimal footer styling (font size, color, spacing, alignment) consistent with existing homepage styles. |

## 3. User journey

A user navigates to the app's root URL (or lands on the app's main/dashboard page). As the page renders, below the existing homepage content, they see a single small line of text at the bottom: `© 2025 Dev Manager Pilot. All rights reserved.` (with the year always matching the current calendar year). The text is static — it's not clickable,