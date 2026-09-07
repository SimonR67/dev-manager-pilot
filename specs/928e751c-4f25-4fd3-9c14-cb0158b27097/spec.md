   # Spec: Orion M32 Home Page

Status: draft
Job: 928e751c-4f25-4fd3-9c14-cb0158b27097
Target repo: SimonR67/demo
Supersedes (partially): none — new capability

## 1. What should change and why

The request is to create a single static HTML home page for a site titled "Orion M32". It needs a navigation menu with three placeholder links (Home, About Us, Contact) that don't need to point to real pages, and a dark grey background with orange text throughout. This is a simple front-end deliverable — no backend, no routing, no build tooling.

No significant ambiguity in the request. One minor interpretation decision: since only a "home page" is requested and the nav items are explicitly described as placeholder/non-functioning, the nav links will use `href="#"` and no actual About Us or Contact pages will be created, as the user explicitly stated.

## 2. Scope

- A single static HTML file (e.g. `index.html`) that renders a home page.
- Page `<title>` set to "Orion M32".
- A visible heading/branding on the page displaying "Orion M32".
- A navigation menu (e.g. `<nav>` with an unordered list or inline links) containing exactly three items, in this order: Home, About Us, Contact.
- Each nav item is an `<a>` tag with `href="#"` (or equivalent non-functioning anchor) — clicking does nothing meaningful and does not error.
- Styling applied via inline `<style>` block (embedded CSS) within the single HTML file — no external stylesheet files required.
- Color scheme: dark grey background (e.g. `#2b2b2b` or similar dark grey) applied to the page body; orange text color (e.g. `#ff8c00` or similar) applied to all visible text including the title, nav links, and any body content.
- Page should render correctly as a static file opened directly in a browser (no server required).
- Basic minimal body/placeholder content beneath the nav (e.g. a welcome line) is acceptable to make the page look like a real home page, but is not required beyond the title and nav.

## 3. Out of scope

- Any additional pages (About Us page, Contact page, or any other route/file) — links are placeholders only, per the request.
- Any working navigation, routing, or JavaScript-based interactivity.
- Responsive design, mobile breakpoints, or cross-browser polish beyond basic rendering.
- Any backend, server, database, forms, or contact functionality.
- External CSS/JS files, CSS frameworks, or build tooling (e.g. bundlers, preprocessors).
- Accessibility auditing or SEO optimization beyond basic semantic HTML.
- Branding assets such as logos, icons, or custom fonts (system/default fonts are fine unless trivially easy to add).
- Analytics, tracking, or third-party embeds.
- Deployment/hosting configuration — this spec only covers the HTML file content.

## 4. Edge cases and error behavior

- Invalid input: not applicable — this is a static page with no user input fields or forms.
- Dependency unavailability: not applicable — no external dependencies (fonts, CDNs, APIs) are used; all CSS is embedded/inline to avoid any network dependency.
- Clicking a nav link: should simply not navigate anywhere meaningful (i.e., `href="#"` causing the page to stay in place or jump to top) — this is expected, not an error.
- Browser without CSS support: page should still show correct HTML content/text (title, nav items) even if styling fails to load, since it's a single self-contained file.

## 5. Acceptance criteria

- [ ] A single HTML file exists in the repo (e.g. `index.html`) that can be opened directly in a browser with no server needed.
- [ ] The browser tab/page title reads "Orion M32".
- [ ] The page displays a navigation menu with exactly three items, in order: Home, About Us, Contact.
- [ ] Each nav item is a link with `href="#"` (or equivalent placeholder) and does not 404 or error when clicked.
- [ ] The page background is a dark grey color.
- [ ] All visible text (title/heading and nav items, and any other content) is rendered in orange.
- [ ] No external CSS or JS files are required for the page to render as intended (styling is inline/embedded).
- [ ] No additional pages, routes, or files are created for About Us or Contact.

## 6. Open questions

- Should there be any additional placeholder body content (e.g. a hero section, tagline, or welcome paragraph) beyond the title and nav, or is a minimal page with just title + nav sufficient? Current spec allows minimal placeholder content as optional but not required.
- Exact shades of dark grey and orange are not specified by the user — the builder will choose reasonable defaults unless the reviewer wants specific hex values.
- Should the nav be horizontal (typical top nav bar) or is any layout acceptable? Assuming a simple horizontal top nav bar unless otherwise specified.