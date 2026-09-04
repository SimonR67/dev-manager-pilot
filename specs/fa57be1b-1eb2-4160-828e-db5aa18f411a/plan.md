# Plan: Add a static test note to the site

Status: draft
Job: fa57be1b-1eb2-4160-828e-db5aa18f411a
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/fa57be1b-1eb2-4160-828e-db5aa18f411a/spec.md

## 1. Definition of done

- The exact text `Test from agent` is visibly rendered on the site's main/home page when loaded in a browser, with no interaction required to reveal it.
- The note is implemented as a hardcoded static text element using the existing templating/component pattern already used elsewhere in the codebase for static UI text.
- No existing route, page, component, or layout is broken or visually disrupted by the change.
- No new database schema, model, migration, API endpoint, or admin UI is introduced.
- The file(s) changed and the specific location chosen for the note are documented in the PR/commit description, including a note if the "home page" had to be inferred.

## 2. File map

| File | Change |
|---|---|
| (main/home page template or component, to be identified in Task 1) | Add a single static text element containing exactly `Test from agent`, placed at the top or bottom of the page to avoid layout conflicts |
| PR description | Document which file was changed and why that location was chosen as the home/landing page |

## 3. User journey

A user (or reviewer) opens the site in a browser and navigates to the main/home page — the default landing page the app renders when visited with no other route specified. Without clicking or interacting with anything, they see the plain text `Test from agent` displayed somewhere on the page, in addition to all pre-existing content and functionality, which continues to work exactly as before.

## 4. Tasks

- [x] 1. Identify the site's main/home page file (the default landing route/template/component) by inspecting the existing routing and templating setup — files: identified during investigation (e.g., router config, `pages/index.*`, `templates/index.*`, or equivalent) — test: manual confirmation that navigating to the app's root URL renders this file/component; documented in PR description
- [x] 2. Add a static text element containing exactly `Test from agent` to the identified home page, using the same templating/component convention already used for other static text in that file — files: the home page file identified in Task 1 — test: a snapshot/render test (or manual browser check if no test framework covers this page) confirming the string `Test from agent` appears in the rendered HTML/output
- [x] 3. Verify the addition does not break existing page structure — placement chosen (top or bottom of page) avoids overlapping or disrupting existing elements — files: same home page file — test: existing page/component tests (if any) still pass; visual/manual check that no existing content is obscured or shifted unexpectedly
- [x] 4. Verify no other routes, functionality, or existing tests are affected by the change — files: none additional (verification only) — test: run full existing test suite and confirm all previously passing tests still pass
- [x] 5. Update PR/commit description to explicitly call out the file changed and the location/reasoning for the chosen page — files: none (PR description only) — test: PR description reviewed to confirm it names the exact file and location, satisfying the spec's acceptance criterion

## 5. Test plan

After all tasks are complete, load the site's root/home URL in a browser (or via an end-to-end/integration test if the project has one) and confirm:
- The text `Test from agent` is visible on page load without any interaction.
- All pre-existing navigation, routes, and page content render and function as before.
- The full existing automated test suite passes with no regressions introduced by this change.
- The PR description clearly states which file was modified and where the note was placed, including any assumption made about which page counts as "the home page."

## 6. Out of scope (carried from spec)

- No new database table, model, field, or migration for "notes."
- No admin UI, form, or API endpoint to create/edit/delete notes.
- No user-facing "notes" feature (e.g., multiple notes, timestamps, authorship).
- No styling/design work beyond making the text visible and non-disruptive to the existing layout.
- No internationalization/localization of the text.
- No changes to authentication, permissions, or access control related to visibility of the note.
- No removal or cleanup automation — removing the note later is a separate follow-up task, not part of this plan.
- No testing of the underlying agent pipeline itself beyond the code change and its rendering.