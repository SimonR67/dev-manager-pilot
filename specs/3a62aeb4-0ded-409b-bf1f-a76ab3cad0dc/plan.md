# Plan: Add Company Name Note Above Footer

Status: draft
Job: 3a62aeb4-0ded-409b-bf1f-a76ab3cad0dc
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/3a62aeb4-0ded-409b-bf1f-a76ab3cad0dc/spec.md

## 1. Definition of done

- A static text note reading "Quake World" renders immediately above the existing footer element, in the shared layout/footer component, on every page that currently renders the footer.
- The note is plain, single-line text — no links, no copyright symbol, no year, no additional copy.
- Styling of the note visually matches the existing footer (font, color, spacing) and does not alter or break the footer's existing content, structure, or links.
- The note appears without overlap or clipping on all major supported viewport sizes (desktop and mobile).
- No new external dependencies, API calls, config lookups, or CMS wiring are introduced — the string is hardcoded (or added to an existing site-wide constants file only if that convention already exists in the repo).
- Pages/layouts that do not render the shared footer remain unaffected (no note appears there), and this is expected, not a regression.
- If multiple footer implementations exist (e.g., public vs. admin), the note is added to the public-facing footer only, since that satisfies the literal request; other footers are left untouched pending confirmation (see Open Questions carried from spec).

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx (or equivalent shared footer component — exact path to be confirmed in Task 1) | Add a new text element/line reading "Quake World" immediately above the existing footer content, with minimal styling to match existing footer visuals. |
| src/components/Footer.module.css / Footer.css / equivalent stylesheet (if styles are not inline or via a CSS-in-JS/utility approach already used in the component) | Add or reuse styling rules for the new note so it visually matches the footer (font, color, spacing) without altering existing footer styles. |
| src/components/Footer.test.tsx (or equivalent test file, created if none exists) | Add test(s) verifying the note renders alongside the footer and does not remove/alter existing footer content. |

## 3. User journey

1. A visitor loads any page of the public-facing site that renders the shared layout (e.g., the homepage, or any other page using the standard layout wrapper).
2. As the page renders, the visitor scrolls to the bottom of the page as they normally would to see the footer.
3. Directly above the existing footer content (e.g., links, copyright info, etc.), the visitor now sees a short line of text: "Quake World".
4. The note is styled consistently with the surrounding footer — it reads clearly but does not look out of place or disrupt the footer's existing layout.
5. This behavior is identical across desktop and mobile viewports, and consistent on every page that uses the shared layout/footer — the visitor doesn't need to do anything special to see it; it simply appears as part of normal navigation.
6. No links, functionality, or other footer content have changed — only the new note has been added.

## 4. Tasks

- [ ] 1. Locate the shared layout/footer component(s) in the repo and confirm whether there is one footer implementation or multiple (e.g., public vs. admin) — document findings and update the file map/task list if multiple footers are found. — files: none (investigation only, findings recorded in PR description or task notes) — test: N/A (spike task; verified by listing the identified component path(s) and confirming which layout(s) render them)
- [ ] 2. Write a failing test asserting that the shared footer component's rendered output includes a text node "Quake World" positioned before/above the existing footer content. — files: src/components/Footer.test.tsx (or equivalent, created if none exists) — test: test fails because the note is not yet present in the component output.
- [ ] 3. Add the "Quake World" static text note to the shared footer component, positioned immediately above the existing footer content, using plain hardcoded text (or an existing site-wide constants file if one is discovered in Task 1). — files: src/components/Footer.tsx (or confirmed equivalent) — test: the test from Task 2 now passes; existing footer tests (if any) still pass unchanged.
- [ ] 4. Apply styling to the note so it visually matches the existing footer (font, color, spacing) without altering existing footer styles. — files: Footer stylesheet or component (per Task 1 findings) — test: manual/visual check confirms note styling is consistent with footer; snapshot test (if snapshots are used in repo) updated intentionally to include the new note and reviewed for correctness.
- [ ] 5. Write/verify a test confirming no existing footer content, links, or structure was altered or removed by the change. — files: src/components/Footer.test.tsx (or equivalent) — test: test asserts all pre-existing footer elements (links, text, structure) are still present and unchanged.
- [ ] 6. Verify responsive behavior of the note at mobile and desktop viewport widths (no overflow, clipping, or overlap with footer content). — files: src/components/Footer.tsx / stylesheet (adjustments only if needed) — test: manual visual check at defined breakpoints (or automated viewport-based test if the repo has a pattern for this), confirming clean wrapping/rendering at each size.
- [ ] 7. Confirm the note appears on every page that renders the shared layout by checking at least one representative page beyond the homepage. — files: none (verification only, or a lightweight integration test if the repo has page-level rendering tests) — test: rendering a second page using the shared layout shows the "Quake World" note above the footer, same as the homepage.

## 5. Test plan

- Run the full existing test suite to confirm no regressions were introduced to the footer or any page using the shared layout.
- Manually load at least two distinct pages (e.g., homepage and one other page) in a browser to visually confirm the "Quake World" note appears consistently above the footer, styled appropriately.
- Manually resize the browser (or use device emulation) to check mobile and desktop viewport widths, confirming the note wraps/displays cleanly without overlapping or clipping the footer.
- If the repo has multiple footer implementations (per Task 1 findings), confirm which one(s) received the change and that this matches the intended scope (public-facing site) — flag any admin/other footer as an open question rather than silently including or excluding it without confirmation.
- Confirm no new dependencies, network calls, or config/CMS lookups were introduced by reviewing the diff.

## 6. Out of scope (carried from spec)

- No new branding assets (logos, icons) — text only.
- No links, contact info, copyright year, or legal text added alongside the note — just the company name.
- No changes to the footer's existing content, structure, or links.
- No internationalization/localization of the note text.
- No admin/CMS capability to edit this text after deployment — it is a static, hardcoded string.
- No changes to page layout, spacing, or responsiveness beyond what is needed to fit the new note in cleanly.
- No SEO metadata changes (e.g., no update to `<meta>` company name tags) — this is a purely visual UI addition.