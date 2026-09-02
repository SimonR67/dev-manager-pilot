# Plan: Add company name note above footer

Status: draft
Job: e44c12d0-fc49-484c-af04-88cb1144ef9b
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/e44c12d0-fc49-484c-af04-88cb1144ef9b/spec.md

## 1. Definition of done

- A static text note containing the literal string "Alpha Biscuits" renders immediately above the existing footer component.
- The note appears on every page that renders the shared layout/footer — no page-specific duplication.
- The note is plain, view-only text: no links, icons, or interactive elements.
- The note's styling visually matches the footer (font size, color, spacing) and does not break layout on small screens.
- No changes are made to the footer's existing content, links, or structure beyond inserting this one line above it.
- The company name is hardcoded (or wired into an existing site-config/settings mechanism only if one already exists and is trivially reusable) — no new configurability, database field, or admin UI is introduced.

## 2. File map

| File | Change |
|---|---|
| src/components/Footer.tsx (or equivalent existing footer component) | Locate the shared footer component used across pages; identify its exact current path during implementation. |
| src/components/Layout.tsx (or equivalent shared layout wrapping page content + footer) | Insert new `CompanyNote`/note element directly above the `<Footer />` render, or add the note inside `Footer.tsx` itself if that is where the footer is composed. |
| src/components/CompanyNote.tsx (new, optional) | New small presentational component rendering the static "Alpha Biscuits" text, styled to match footer typography — created only if inserting inline in Footer.tsx isn't cleaner. |
| src/components/Footer.test.tsx or Layout.test.tsx | New/updated test asserting the note text renders above the footer on a representative page. |
| src/styles/*.css / relevant stylesheet or styled-components file used by Footer | Minor styling addition (font-size, color, margin) reusing existing footer style tokens/classes. |

## 3. User journey

A visitor loads any page of the site that renders the shared layout (e.g. the homepage). As the page renders, they see the normal page content, and just above the footer at the bottom of the page they see a small line of text reading "Alpha Bi