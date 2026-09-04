   # Spec: Three-Page Navigation (Home, About, Contact) with Page-Specific Images

Status: draft
Job: 345a69b5-afea-42a7-b259-af8828d51056
Target repo: SimonR67/sidney
Supersedes (partially): none — new capability (assumes current site has either no working multi-page navigation, or placeholder/non-functional menu links; to be confirmed against current repo state)

## 1. What should change and why

The site currently needs three distinct, working pages — Home, About, and Contact — each reachable via its own navigation menu link, and each displaying a specific assigned image. The problem this solves: the navigation menu currently either doesn't exist, doesn't have distinct pages behind it, or the links don't correctly route to separate pages. This spec covers building out those three pages as real, separately-routable pages (not just anchor scrolls on a single page, unless the existing site architecture is explicitly single-page — see Open Questions), wiring the nav menu items to link to the correct page, and placing one specified image on each page.

Interpretation chosen: "working menu pages" is understood to mean each menu item navigates to a distinct page/route with its own URL (e.g. `/`, `/about`, `/contact`), rather than all content living on one page with in-page jumps. If the existing site is built as a single-page app with section anchors, this spec's intent (independent, linkable pages) should still be honored as closely as the existing framework allows, and this will be flagged for reviewer confirmation before implementation.

The three images are supplied from a Google Drive folder ("images" in Dev Projects) and must be sourced from there, added to the repo/site assets, and displayed on their respective pages:
- Home page → `File1767.jpg` (Drive ID: 1oyhTHrmOxstMLB2effg1rHVcPlnWwWBh)
- About page → `City_Eclipse.jpeg` (Drive ID: 1uHmN3zpaBs5KNzmMiyaHf-8qK_vjiAFU)
- Contact page → `Orion18032022-for-lightroom.jpg` (Drive ID: 1F1ZgT2L17IGYOh5ujqQWksdvQZdwNJXQ)

## 2. Scope

- Create/finish three pages: Home, About, Contact, each as its own route/page within the existing site structure and framework (whatever templating/static-site/framework approach the repo already uses).
- Add a navigation menu (or fix the existing one) with three links/items labeled "Home", "About", "Contact" that each correctly navigate to their respective page.
- Download the three specified images from the given Google Drive folder/IDs, add them to the repo's image/asset directory following existing repo conventions (e.g. `/images`, `/assets`, `/static` — whichever matches current structure).
- Reference each image on its assigned page using appropriate markup (e.g. `<img>` tag or equivalent in the site's templating system), with reasonable sizing/responsiveness consistent with the site's existing styling conventions.
- Ensure each image has an appropriate `alt` attribute (basic accessibility) describing the image contextually (e.g. "Home page banner image").
- Basic visual placement: image should be clearly visible on page load without requiring scroll-hunting, but exact layout/design polish beyond "appropriately displayed" is not the focus (see Out of Scope).
- Verify menu links work correctly (clicking "Home" goes to Home page, "About" goes to About page, "Contact" goes to Contact page) across the site's supported browsers/devices to the extent the existing site already supports them.

## 3. Out of scope

- Redesigning the overall site visual theme, layout, color scheme, or typography beyond what's needed to place the nav and images.
- Adding page content beyond what's needed to make each page functional (e.g. no requirement to write new About/Contact copy, contact forms, maps, or business info) unless already stubbed in the repo — this spec is about navigation + image placement, not content authoring.
- Image editing/retouching (cropping, compression optimization, resizing beyond basic responsive display) — images are used as provided, aside from any format conversion strictly necessary for web display.
- Setting up a CMS, image hosting service, or dynamic image-loading pipeline — images are added as static assets.
- Mobile app or non-web deliverables.
- SEO optimization, metadata, or social-sharing image tags for these pages.
- Contact form functionality (e.g. actual message sending/backend) — only the Contact *page* and its image are in scope, not a working form/mailer unless one already exists and simply needs the image added alongside it.
- Any additional pages beyond Home, About, Contact.
- Changing the Google Drive images themselves, their names, or their source-of-truth location.

## 4. Edge cases and error behavior

- **Image fails to download from Google Drive (permissions, link expired, ID invalid):** Implementation should not silently fail — flag the issue back to the requester/reviewer rather than substituting a placeholder without notice. If a placeholder is used temporarily, this must be clearly noted in the PR/build output.
- **Image file format/size unusually large for web use:** If an image is very large (e.g. multi-MB raw photo, common for `.jpeg`/`.jpg` camera files like the Orion astrophotography shot), apply reasonable web-friendly sizing (e.g. `max-width: 100%`, `height: auto`) so it doesn't break page layout — but do not perform lossy re-compression without flagging it, since these appear to be photography assets where quality may matter.
- **Broken nav link (page doesn't exist / 404):** Should not occur post-implementation; if the target framework requires additional routing config, that config must be included as part of this work, not left as a follow-up.
- **Menu active-state indication:** Not explicitly requested; if the existing nav pattern already highlights the active page, extend that pattern to the new pages for consistency, but this is not a hard requirement.
- **Duplicate or conflicting existing pages named Home/About/Contact:** If such pages already exist with different content/routes, this work should update/consolidate rather than create duplicates — flag this scenario if discovered during implementation.

## 5. Acceptance criteria

- [ ] Navigation menu displays three items: "Home", "About", "Contact".
- [ ] Clicking "Home" navigates to the Home page and no other.
- [ ] Clicking "About" navigates to the About page and no other.
- [ ] Clicking "Contact" navigates to the Contact page and no other.
- [ ] Home page displays `File1767.jpg`, sourced from the specified Google Drive folder, rendered correctly and visibly on page load.
- [ ] About page displays `City_Eclipse.jpeg`, sourced from the specified Google Drive folder, rendered correctly and visibly on page load.
- [ ] Contact page displays `Orion18032022-for-lightroom.jpg`, sourced from the specified Google Drive folder, rendered correctly and visibly on page load.
- [ ] All three images render without broken links, layout breakage, or excessive load-time issues under normal conditions.
- [ ] Each page is independently reachable via its own URL/route (not solely via scroll-to-anchor), consistent with the site's framework.
- [ ] Each `<img>` (or equivalent) includes a descriptive `alt` attribute.

## 6. Open questions

- Is the current site a multi-page static site, or a single-page app/site with anchor-based sections? This affects whether "three working pages" means three routes or three sections — please confirm current architecture so navigation is implemented consistently with it.
- Should images be committed directly into the repo's asset folder, or should they be referenced via an external/CDN link back to Google Drive? (Recommendation: commit into repo for reliability, but confirming since Drive was given as the source rather than pre-supplied files.)
- Do the About and Contact pages need any placeholder text/content beyond the image and page title, or is an image-only page acceptable for this iteration?
- Are there existing brand/style guidelines (fonts, colors, spacing) the new pages should follow, or is matching whatever minimal styling currently exists sufficient?
- Should filenames be preserved as-is (e.g. `Orion18032022-for-lightroom.jpg`) or renamed to something more web-convention-friendly (e.g. lowercase, hyphenated) as part of adding them to the repo?