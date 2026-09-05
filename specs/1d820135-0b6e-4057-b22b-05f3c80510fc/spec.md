   # Spec: Rename site branding to "Sid Meyer - Brave New Worlds"

Status: draft
Job: 1d820135-0b6e-4057-b22b-05f3c80510fc
Target repo: SimonR67/sidney
Supersedes (partially): existing site title/branding strings throughout the codebase (current name/title, whatever it is currently set to)

## 1. What should change and why

The site currently uses some existing name/title for its branding (in the page `<title>` tags, header/nav logo, footer, meta tags, README, and possibly `package.json`). The request is to rename this branding everywhere it appears to "Sid Meyer - Brave New Worlds".

This is a pure branding/text update — the problem it solves is bringing the site's displayed name and metadata in line with the desired new identity, "Sid Meyer - Brave New Worlds". There is no ambiguity in the desired end-state text itself; the main interpretive decision is *where* "everywhere" applies, which is addressed explicitly in Scope below.

Interpretation chosen: "everywhere the site name/title appears" is read broadly to include all user-facing text (browser tab titles, header/logo, footer, any "About"/copyright text referencing the site name) and all developer/metadata-facing text (HTML `<meta>` tags such as `og:title`, `og:site_name`, `description`, `twitter:title`, README.md title/description, and `package.json` `name`/`description` fields if they currently reflect the site's branding name). Where `package.json` `name` is a machine-oriented npm package identifier (e.g., lowercase, hyphenated, used for tooling/build purposes) rather than a human-facing display name, it will be left alone unless it is clearly used as display branding — see Open Questions.

## 2. Scope

- Update all occurrences of the current site title/branding string to exactly: **Sid Meyer - Brave New Worlds**
- This includes, wherever present in the repo:
  - HTML/template `<title>` tags on all pages
  - Header/nav bar logo or site-name text
  - Footer text referencing the site name (e.g. copyright line, "Powered by X")
  - Meta tags: `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:site_name">`, `<meta name="twitter:title">`, and any other meta tag whose value is the site's branding name
  - README.md: title heading and any descriptive text referencing the site name
  - `package.json`: `name` and/or `description` fields, if and only if they currently contain the human-readable site branding name (as opposed to an unrelated internal package slug)
  - Any config files, constants, or environment variables that centrally define the site title/branding string (e.g. a `SITE_NAME` constant or CMS/config setting), so that all downstream usages update from a single source where such a mechanism already exists
- All updates must use the exact text "Sid Meyer - Brave New Worlds" (including capitalization, spacing, and the hyphen) unless a specific location has a well-established format convention (e.g. a `<title>` tag pattern like "{Page Name} | Sid Meyer - Brave New Worlds") — such conventions may be preserved as long as the core branding string itself is updated.
- No other content, layout, styling, functionality, or page structure changes.

## 3. Out of scope

- Any redesign of the header, footer, or navigation layout — only the text content changes, not styling/positioning.
- Any changes to site functionality, routing, page content (other than the literal name/title strings), or data.
- Renaming the GitHub repository itself (`SimonR67/sidney`) — not part of this request.
- Renaming internal code identifiers, variable names, class names, or file names that are unrelated to user/reader-facing branding (e.g. do not rename a `SidneyApp` class or `sidney.js` file just because it echoes the old name), unless such a rename is required to keep a config value consistent and is trivial/low-risk.
- Domain name changes, URL changes, or redirects.
- Logo image/graphic redesign (if the "logo" is an image file rather than text, out of scope — only text-based branding is in scope for this spec; see Open Questions).
- Updating third-party integrations, external listings, or social media profiles outside this codebase (e.g. actual Twitter/Facebook account names) — only in-repo meta tags are in scope.
- SEO strategy changes beyond the literal text swap.

## 4. Edge cases and error behavior

- If the current site title/branding string is not consistent across the codebase already (e.g. slightly different casing/spelling in different files), all variants should be normalized to the new exact string "Sid Meyer - Brave New Worlds" rather than preserving inconsistency.
- If the branding name is hardcoded in multiple places with no central constant, each occurrence must be found and updated individually (a full-repo text search for the current name should be performed as part of implementation).
- If a config-driven title mechanism exists (e.g., a CMS field, environment variable, or JSON config), the fix should be applied at that source rather than only in rendered output, so it doesn't regress.
- If `package.json` `name` is used as an npm package identifier referenced by build tooling or other config (e.g. `import` paths, CI scripts), it should **not** be blindly renamed if doing so would break the build — flag this case explicitly rather than changing it silently (see Open Questions).
- If the site name appears embedded in an image (e.g. a logo graphic/SVG with text baked in) rather than as text, that occurrence cannot be updated via a simple text change and should be flagged as out of scope/needing a follow-up design task rather than silently skipped or silently left as the old name without note.
- No dependency/service availability concerns — this is a static content/text change with no runtime dependencies.

## 5. Acceptance criteria

- [ ] Every page's `<title>` tag displays "Sid Meyer - Brave New Worlds" (or a consistent pattern that includes this exact string, e.g. "Home | Sid Meyer - Brave New Worlds")
- [ ] Header/nav branding text reads "Sid Meyer - Brave New Worlds"
- [ ] Footer branding text (if present) reads "Sid Meyer - Brave New Worlds"
- [ ] All relevant `<meta>` tags (description, og:title, og:site_name, twitter:title, etc.) that reference the site name use "Sid Meyer - Brave New Worlds"
- [ ] README.md title/description reflects "Sid Meyer - Brave New Worlds" wherever the old site name previously appeared
- [ ] `package.json` `name`/`description` fields updated to reflect "Sid Meyer - Brave New Worlds" only where they represented human-facing branding, and only if doing so does not break build/tooling references to the package name
- [ ] A repo-wide search for the old site name (case-insensitive) turns up no remaining occurrences intended as branding, except where explicitly deferred per an out-of-scope/open-question item
- [ ] No functional behavior, routing, styling, or unrelated content has changed — only branding text
- [ ] Site builds/runs successfully after the change (no broken references caused by the rename)

## 6. Open questions

- What is the current site title/branding string exactly? (Needed to confirm all occurrences are found; the request says "whatever it currently is" but the implementer needs the actual current string(s) to search for.)
- Is the header/nav "logo" plain text, or an image/SVG with text baked in? If it's an image, does the reviewer want a follow-up task to redesign the graphic, or is text-only branding sufficient for this pass?
- Does `package.json` `name` currently match the site's display branding, or is it a separate lowercase/npm-style slug (e.g. `sidney`)? If the latter, should it be left as-is, or renamed to something like `sid-meyer-brave-new-worlds` despite the risk of breaking build tooling/imports?
- Is there a canonical/central location (e.g. a `SITE_NAME` constant, CMS setting, or config file) that already drives the title across pages, or is the string hardcoded in multiple templates? This affects implementation approach but not the spec itself — flagging for the planning stage.
- Should the exact casing/hyphenation "Sid Meyer - Brave New Worlds" be used verbatim everywhere, or is a stylistic variant acceptable in constrained contexts (e.g., truncated meta descriptions with character limits)?