# Plan: Add company name note above footer

Status: draft
Job: ec4c1e2c-7759-4bc2-ae1d-f9ec695f026f
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/ec4c1e2c-7759-4bc2-ae1d-f9ec695f026f/spec.md

**Note on text content:** The approved spec uses "Alpha Biscuits" as the example company name. A human reviewer explicitly requested that whatever name is currently used ("Beta Biscuit" or "Alpha Biscuit") be changed to **"Delta Biscuit"**. This plan implements the note using the text **"Delta Biscuit"** as the final, current company name — this is treated as a wording/content correction within the same approved scope (a single static line of text above the footer), not a scope change.

## 1. Definition of done

- A static, single line of text reading "Delta Biscuit" is rendered immediately above the `<footer>` element (or equivalent footer component) in the shared page layout.
- The note appears on every page that renders the shared layout with a footer.
- The note does not appear on pages/layouts that do not include the shared footer.
- Styling is minimal and consistent with the footer area (small, muted text), does not restyle or restructure the existing footer.
- The note remains readable and does not break or shift layout at mobile/small screen widths.
- No configuration, settings, env var, admin UI, database, or i18n mechanism is introduced for this text — it is hardcoded.
- No prior/incorrect company name string ("Alpha Biscuits", "Beta Biscuit", or any other variant) remains anywhere in the layout/footer source.

## 2. File map

| File | Change |
|---|---|
| src/components/Layout.tsx (or equivalent shared layout component) | Add a small text element containing "Delta Biscuit" immediately before the `<Footer />` / `<footer>` render, replacing any prior placeholder/company-name text if one already exists. |
| src/components/Footer.tsx (or equivalent footer component, if the note lives inside it instead of the layout) | Add/adjust the note element and its minimal styling,