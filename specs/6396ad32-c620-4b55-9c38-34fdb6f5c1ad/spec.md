   # Spec: Softpapaya Services page

Status: draft
Job: 6396ad32-c620-4b55-9c38-34fdb6f5c1ad
Target repo: SimonR67/dev-manager-pilot
Supersedes (partially): none — new capability

## 1. What should change and why

The request asks for a new static webpage titled "Softpapaya Services" to be added to this repository, closely modeled on the design and content structure of https://softpapaya.com/en/services/. The goal is to produce a standalone, self-contained HTML/CSS page (not a live clone or scrape of the original site) that reproduces the general layout, section hierarchy, and visual style described in the spec: a sticky header with nav links, a hero heading, a set of distinct service subsections (each with heading, description, technologies/methodologies, and target audience), a call-to-action section, and a minimal footer.

Interpretation chosen: since the original softpapaya.com page's exact copy/text is not provided verbatim in the request, this spec treats the reference site as a **structural and stylistic reference only**. Actual service names, descriptions, and copy will be newly written (inspired by typical software consultancy service offerings — e.g. product design, software development, DevOps/Kubernetes, staff augmentation) rather than copied verbatim from the live site, to avoid content/asset copying concerns. The nav links (About, Services, Values, Team, Case Studies, Careers, Blog, Contact) will be present as static links; since this repo does not appear to have those other pages, they will point to placeholder anchors/sections or `#` unless the reviewer confirms other pages already exist or should be stubbed too.

The page will be built using plain static HTML/CSS to match a lightweight, framework-free repo structure (to be confirmed — see Open Questions), since no indication is given that the repo uses a JS framework requiring componentization.

## 2. Scope

- One new static page, e.g. `services.html` (or equivalent route/page file matching whatever front-end structure the repo already uses — plain static site, if that's what's present).
- A dedicated CSS file (e.g. `services.css`) or inline `<style>` block scoped to this page, following the visual spec:
  - White background (#FFFFFF), dark/black text, coral/orange accent (#FF6F61) for buttons and links.
  - Clean sans-serif font stack (system-ui / "Open Sans" / "Roboto" fallback stack).
  - Generous section padding/margins.
- Page structure:
  - `<title>Softpapaya Services</title>`
  - Sticky/fixed header with logo (linking to `index.html` or homepage) and nav links: About, Services, Values, Team, Case Studies, Careers, Blog, Contact.
  - `<h1>` hero heading with a short catchy tagline/subheading.
  - 3–5 distinct service subsections, each using `<h2>` for the service title, a short paragraph description, an `<h3>` labeled sub-block listing technologies/methodologies (e.g. Agile, Kubernetes, React, CI/CD), and an `<h3>` labeled sub-block naming the target audience (e.g. "Startups", "Enterprise teams").
  - A visually distinct CTA section near the end with heading text inviting the user to discuss their project, and a prominent "Contact" button/link (styled with the coral accent).
  - Minimal footer with: short company blurb, link groups (Services / Work / About / Careers), contact email (placeholder, e.g. `hello@softpapaya-example.com`), website link, and legal links (Privacy, Terms) — these legal/other pages do not need to exist; links can point to `#` or stub anchors.
- Responsive layout: nav collapses or stacks reasonably on small screens (a simple CSS-only approach, e.g. flex-wrap or a basic hamburger-less stacked nav — no JS menu toggle required unless trivial), and service subsections stack vertically in a single column on mobile widths.
- Basic hover states for links/buttons (color change and/or underline transition) implemented in CSS.
- Content will be original copy inspired by the described service-consultancy structure, not scraped/copied text or images from softpapaya.com.

## 3. Out of scope

- Scraping, copying, or reusing actual text, images, logos, or trademarked assets from softpapaya.com. This is an inspired re-implementation of structure/style only.
- Building out the other nav destinations as full pages (About, Values, Team, Case Studies, Careers, Blog, Contact) — these are out of scope unless the reviewer requests stub pages; nav links will point to `#`/anchors by default.
- A working contact form or backend/email-sending functionality — the "Contact" CTA is a static link (e.g. `mailto:` or anchor), not a functional form submission.
- JavaScript-driven interactivity beyond minimal, optional CSS-only responsive behavior (no animation libraries, no hamburger menu JS, no analytics).
- CMS integration, dynamic content, or i18n/multi-language support (the reference site has an `/en/` locale path; this spec produces a single-language English page only).
- Visual pixel-for-pixel cloning of softpapaya.com's exact fonts, imagery, or brand assets — only the general layout/style described in the spec (colors, hierarchy, spacing) is targeted.
- SEO metadata, Open Graph tags, favicons, or performance optimization beyond basic semantic HTML.
- Integration into any existing site navigation/menu elsewhere in the repo (i.e., not wiring this page into other pages' nav bars) unless trivial and requested.
- Automated testing (unit/e2e) beyond manual/visual acceptance checks listed below.

## 4. Edge cases and error behavior

- No user input/forms exist on this page, so there is no invalid-input handling to define; the "Contact" CTA is a static link, not a submission form.
- No external dependencies (APIs, databases) are used — the page is fully static HTML/CSS, so there is no "dependency unavailable" failure mode to handle. If a web font is referenced via CDN, the CSS must specify a system-sans-serif fallback stack so the page still renders correctly if the external font fails to load.
- If the target repo has no existing homepage/index file to link the logo to, the logo link will point to `#` or `index.html` as a placeholder, clearly leaving it non-functional until such a page exists.
- On very narrow viewports, nav links should wrap or stack rather than overflow/clip; this should be verified visually rather than assumed.
- If the repo already contains a differently-styled global stylesheet/header (i.e., existing shared layout conventions), this new page's styles should not silently override or conflict with them — scoped/page-specific CSS naming will be used to avoid collisions.

## 5. Acceptance criteria

- [ ] A new file (e.g. `services.html`) exists in the repo, titled "Softpapaya Services" in the `<title>` tag and as the `<h1>`.
- [ ] Header nav bar is sticky/fixed at the top and contains links for: About, Services, Values, Team, Case Studies, Careers, Blog, Contact.
- [ ] Page contains a hero/heading section with an `<h1>` and a short catchy subheading/tagline.
- [ ] At least 3 distinct service subsections exist, each with an `<h2>` title, a description paragraph, and `<h3>`-labeled technologies/methodologies and target-audience content.
- [ ] A visually distinct CTA section appears after the service subsections, with extra padding/spacing and a prominent, coral-colored "Contact" button/link.
- [ ] Footer contains company info text, grouped links (Services/Work/About/Careers), a contact email, a website link, and Privacy/Terms legal links.
- [ ] Page uses white background, black/dark text, and coral (#FF6F61) accent color for links/buttons, per the visual spec.
- [ ] Font stack is a sans-serif system/web-safe fallback stack.
- [ ] Links/buttons show a visible hover effect (color change or underline).
- [ ] At a mobile viewport width (e.g. ≤480px), service subsections stack in a single vertical column and the nav does not visually break/overflow.
- [ ] Page is self-contained (its own HTML + CSS) and does not depend on any backend, API, or JS framework not already present in the repo.

## 6. Open questions

- Does this repo currently have any existing front-end structure/framework (e.g. plain static HTML/CSS files, a static site generator, React/Vue app) that this page needs to conform to? The spec assumes plain static HTML/CSS as a safe default — please confirm or redirect.
- Should the nav links (About, Values, Team, Case Studies, Careers, Blog, Contact) point to real pages that already exist in this repo, or is `#`/anchor placeholder acceptable for now?
- Is there an existing homepage/`index.html` the logo should link to, or should that also be a placeholder?
- Should real/branded company info (name, actual contact email, real "Softpapaya" branding) be used, or should this be clearly generic/placeholder content given we're not affiliated with the real softpapaya.com business?
- Are there any existing design tokens/brand colors elsewhere in this repo that should be reused instead of introducing new ones (white/black/coral) from scratch?
- Should this page be linked into any existing site navigation, or is it fully standalone until further notice?