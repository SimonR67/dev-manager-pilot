# Plan: Softpapaya Services page

Status: draft
Job: 6396ad32-c620-4b55-9c38-34fdb6f5c1ad
Spec: https://github.com/SimonR67/dev-manager-pilot/blob/main/specs/6396ad32-c620-4b55-9c38-34fdb6f5c1ad/spec.md

## 1. Definition of done

- `services.html` exists at repo root, titled "Softpapaya Services" in both `<title>` and `<h1>`.
- A sticky/fixed header with logo (linking to `index.html` or `#`) and nav links (About, Services, Values, Team, Case Studies, Careers, Blog, Contact) is present, pointing to `#`/anchors.
- A hero section with `<h1>` and a short tagline/subheading exists.
- At least 3 (up to 5) distinct service subsections exist, each with `<h2>` title, description paragraph, and `<h3>`-labeled "Technologies/Methodologies" and "Target Audience" sub-blocks.
- A visually distinct CTA section with extra spacing and a coral (#FF6F61) "Contact" button appears after the service subsections.
- A footer exists with company blurb, grouped links (Services/Work/About/Careers), placeholder contact email, website link, and Privacy/Terms links (`#`).
- Visual spec is met: white background, dark/black text, coral (#FF6F61) accent, sans-serif system font stack with fallbacks.
- Hover states exist on links/buttons (color change and/or underline).
- Responsive behavior: nav wraps/stacks and service subsections stack in a single column at ≤480px width, with no overflow/clipping.
- Page is self-contained (own HTML + CSS), uses only page-scoped class names to avoid collision with any existing repo styles, and has no backend/API/JS-framework dependency.
- Content is original copy (not scraped from softpapaya.com), generic/placeholder branding used per spec's chosen interpretation.

## 2. File map

| File | Change |
|---|---|
| services.html | New static page: header/nav, hero, service subsections, CTA, footer, links to services.css |
| services.css | New page-scoped stylesheet: colors, typography, layout, hover states, responsive rules |

## 3. User journey

A visitor opens `services.html` directly (or navigates to it from wherever it's linked, once linked). They land on a sticky header with a logo and nav (About, Services, Values, Team, Case Studies, Careers, Blog, Contact) — nav links are placeholders (`#`) since those pages don't exist yet. Scrolling down, they see a hero heading "Softpapaya Services" with a short tagline, followed by 3–5 service sections (e.g. Product Design, Software Development, DevOps/Kubernetes, Staff Augmentation), each describing what it is, what technologies/methodologies are used, and who it's for. After the services, a visually distinct CTA section invites them to "discuss their project" with a prominent coral "Contact" button (a `mailto:` or anchor link — no working form). At the bottom, a minimal footer offers a company blurb, grouped links, a placeholder contact email, a website link, and Privacy/Terms links. On a mobile-width browser, the nav stacks/wraps cleanly and the service sections lay out in a single vertical column; all interactive elements show a hover effect on desktop.

## 4. Tasks

- [ ] 1. Scaffold `services.html` with `<title>Softpapaya Services</title>` and stub `<head>` linking `services.css` — files: services.html — test: opening the file in a browser (or a simple HTML parse check) shows the correct `<title>` and a linked stylesheet tag referencing `services.css`.
- [ ] 2. Add sticky/fixed header with logo (linking to `index.html`/`#`) and nav links for About, Services, Values, Team, Case Studies, Careers, Blog, Contact — files: services.html, services.css — test: header element has `position: sticky`/`fixed` in CSS and contains 8 anchor tags with the exact expected labels, verified via DOM query/inspection.
- [ ] 3. Add hero section with `<h1>Softpapaya Services</h1>` and a tagline paragraph — files: services.html — test: page contains exactly one `<h1>` with the correct text and an adjacent tagline element.
- [ ] 4. Write and add first 3 service subsections (e.g. Product Design, Software Development, DevOps/Kubernetes), each with `<h2>` title, description paragraph, `<h3>Technologies/Methodologies</h3>` block, and `<h3>Target Audience</h3>` block — files: services.html — test: DOM query finds ≥3 sections, each containing exactly one `<h2>`, a paragraph, and two `<h3>` elements with expected labels.
- [ ] 5. (Optional) Add 4th/5th service subsection (e.g. Staff Augmentation) following the same structure — files: services.html — test: same structural check as task 4 confirms 4–5 total service subsections.
- [ ] 6. Add CTA section after service subsections with heading, invitation copy, and a coral-styled "Contact" button/link — files: services.html, services.css — test: CTA section exists after the last service subsection in DOM order, contains a button/link with class tied to coral color rule (`#FF6F61`) in CSS, and extra padding/margin is present in CSS.
- [ ] 7. Add footer with company blurb, grouped links (Services/Work/About/Careers), placeholder contact email, website link, and Privacy/Terms links — files: services.html — test: footer element present with all required text groups and links (verified by counting expected link groups/text nodes).
- [ ] 8. Implement base visual styling: white background, dark text, coral accents, sans-serif fallback font stack, section padding/margins — files: services.css — test: computed styles on `body`/section elements match expected background/text/accent colors and `font-family` includes fallback stack (`system-ui, "Open Sans", "Roboto", sans-serif` or similar).
- [ ] 9. Add hover states for nav links, CTA button, and footer links (color change and/or underline) — files: services.css — test: CSS contains `:hover` rules for each interactive element class, verified by inspecting stylesheet or simulating `:hover` in a browser devtools/test harness.
- [ ] 10. Add responsive rules: nav wraps/stacks and service subsections stack to single column at ≤480px (and reasonable tablet breakpoint) — files: services.css — test: at a simulated 480px viewport, nav items wrap without horizontal overflow and service subsections render in a single column (verified via browser resize/devtools or a headless-browser viewport screenshot check).
- [ ] 11. Scope all CSS selectors/class names to avoid collision with any existing repo-wide styles (e.g. prefix classes like `.sp-services-*`) — files: services.css, services.html — test: manual review confirms no bare/global element selectors (e.g. unscoped `h1`, `a`, `body` overrides) that could leak into other pages if this CSS were accidentally included elsewhere.

## 5. Test plan

- Manual visual check in a desktop browser: confirm header stickiness on scroll, hero rendering, service subsection layout, CTA prominence/coral color, and footer content match the acceptance criteria end-to-end.
- Manual visual check at a mobile viewport (≤480px, e.g. via browser devtools device emulation): confirm nav wraps/stacks without clipping and service subsections render in a single vertical column.
- Manual hover check on desktop: hover over each nav link, the CTA button, and footer links to confirm a visible hover effect (color/underline change).
- HTML structure spot-check (via browser devtools or a simple script) confirming presence/count of required semantic elements: one `<h1>`, ≥3 `<h2>` service titles each paired with two `<h3>` sub-blocks, one CTA section, one footer.
- Fallback-font check: temporarily block/disable any external font source (if used) and confirm the page still renders legibly using the system-sans-serif fallback.
- No-JS-framework/backend check: confirm the page loads and functions correctly with no server, API calls, or build step — i.e., opening `services.html` directly in a browser is sufficient.

## 6. Out of scope (carried from spec)

- Scraping, copying, or reusing actual text, images, logos, or trademarked assets from softpapaya.com.
- Building out full pages for other nav destinations (About, Values, Team, Case Studies, Careers, Blog, Contact) — nav links remain `#`/anchor placeholders.
- A working contact form or backend/email-sending functionality — Contact CTA is a static link only.
- JavaScript-driven interactivity beyond minimal, optional CSS-only responsive behavior (no animation libraries, no JS hamburger menu, no analytics).
- CMS integration, dynamic content, or i18n/multi-language support.
- Pixel-for-pixel visual cloning of softpapaya.com's exact fonts, imagery, or brand assets.
- SEO metadata, Open Graph tags, favicons, or performance optimization beyond basic semantic HTML.
- Integration into any existing site navigation/menu elsewhere in the repo.
- Automated unit/e2e testing beyond manual/visual acceptance checks.