   # Spec: Add a static test note to the site

Status: draft
Job: fa57be1b-1eb2-4160-828e-db5aa18f411a
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request is: "Add a note to the site saying 'Test from agent'". This is a minimal, low-stakes request that appears intended to verify that an agent-driven change can be made to the site and observed by the user — i.e., a smoke test of the pipeline (spec → plan → code → deploy), rather than a feature with lasting product value.

The request is ambiguous on several points:
- **Where** on the site the note should appear (which page, which component).
- **What "note" means** — a visible UI text element, a database record shown in a list, a comment in source code, or a config/README entry.
- **Whether it should persist** or be easily removable once its purpose (verification) is served.

**Interpretation chosen:** Since no page, section, or data model is specified, and the repo name suggests this is a "dev manager" / dashboard-style app, the safest and most literal interpretation is to add a small, clearly-labeled, visible text note reading exactly `Test from agent` to the main/home page of the site's UI, in a way that doesn't disrupt existing layout or functionality. This satisfies the literal request ("a note … on the site") without inventing new data models, forms, or persistence mechanisms that weren't asked for.

If the site has no obvious single "home" page, the note will be added to the top-level landing page the app renders by default.

## 2. Scope

- Add a single static text element containing exactly the string `Test from agent` to the site's main/home page.
- The note should be visibly rendered in the browser when the page loads (not hidden, not requiring interaction to reveal).
- Implementation should use whatever templating/component pattern the existing codebase already uses for static UI text (e.g., existing template file, existing component), rather than introducing a new framework or pattern.
- The change is a hardcoded, static piece of text — not user-editable, not stored in a database, not configurable.

## 3. Out of scope

- No new database table, model, field, or migration for "notes."
- No admin UI, form, or API endpoint to create/edit/delete notes.
- No user-facing "notes" feature (e.g., multiple notes, timestamps, authorship).
- No styling/design work beyond making the text visible and non-disruptive to the existing layout.
- No internationalization/localization of the text.
- No changes to authentication, permissions, or access control related to who can see the note (it will be visible to whoever can already view the page).
- No removal or cleanup automation — if this note is meant to be temporary, removing it later is a separate, explicit follow-up task, not part of this spec.
- No tests of the underlying agent pipeline itself beyond the code change and its rendering.

## 4. Edge cases and error behavior

- **Invalid input:** Not applicable — the text is a fixed, hardcoded string with no user input involved.
- **Dependency unavailable:** Not applicable — this is a static text addition with no external service, API, or database dependency.
- **Page has no obvious insertion point:** If the home/landing page template is not easily identifiable, the agent implementing this should choose the most prominent existing page and note this choice explicitly in the pull request description for reviewer visibility.
- **Layout conflicts:** If adding the text could break existing layout (e.g., overlapping elements), it should be placed in a way that avoids visual conflicts, even if that means a simple line of text at the top or bottom of the page rather than a stylized placement.

## 5. Acceptance criteria

- [ ] Loading the site's main/home page in a browser shows the exact text `Test from agent` somewhere visible on the page.
- [ ] No existing functionality, route, or layout is broken by this change.
- [ ] The change is implemented as a static text addition (no new database schema, API, or admin interface introduced).
- [ ] The specific file(s) changed and the location chosen for the note are called out in the pull request/commit description.

## 6. Open questions

- Is there a specific page, section, or component where this note is expected to appear, or is "the site" intentionally broad (i.e., any visible page is acceptable)?
- Is this note meant to be temporary (for verification purposes only) and should a follow-up task be created to remove it later?
- Should the note be styled/labeled in any way (e.g., as a "debug" or "test" banner) to distinguish it from real product content, or should it blend in as plain text?