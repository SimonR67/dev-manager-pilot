import assert from 'node:assert/strict'
import { test } from 'node:test'

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { pages } from './helpers/pages.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const PAGE = 'services.html'
const STYLESHEET = 'services.css'

function file(name) {
  return readFileSync(path.join(root, name), 'utf8')
}

// The declarations of the first rule whose selector list mentions `selector`,
// so a test can assert what a class actually sets.
function rule(selector, { css = file(STYLESHEET) } = {}) {
  const match = css.match(new RegExp(`(?:^|[},])[^{}]*\\${selector}\\b[^{}]*\\{([^}]*)\\}`))
  return match?.[1]
}

function region(html, tag) {
  return html.match(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`))?.[0]
}

function links(markup) {
  return [...markup.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)].map((match) => ({
    tag: match[0],
    href: match[0].match(/href="([^"]*)"/)?.[1],
    text: match[1].replace(/<[^>]*>/g, '').trim(),
  }))
}

// Task 1: the page is a static document at the repo root, titled for the
// service offering, and styles itself from its own sibling stylesheet.
test('the services page is a static HTML file at the repo root', () => {
  assert.ok(existsSync(path.join(root, PAGE)), `${PAGE} should exist at the repo root`)
})

test('the services page is titled "Softpapaya Services"', () => {
  assert.match(file(PAGE), /<title>Softpapaya Services<\/title>/)
})

test('the services page links its own stylesheet', () => {
  const link = file(PAGE).match(/<link[^>]*rel="stylesheet"[^>]*>/)
  assert.ok(link, `${PAGE} should link a stylesheet`)
  assert.match(link[0], new RegExp(`href="${STYLESHEET}"`), 'the stylesheet should be services.css')
  assert.ok(existsSync(path.join(root, STYLESHEET)), `${STYLESHEET} should exist at the repo root`)
})

test('the services page is self-contained and outside the shared layout', () => {
  // The page ships its own markup and stylesheet, so the shared-layout checks
  // (company note, placeholder copy) do not apply to it. It declares that
  // explicitly rather than being special-cased by name.
  assert.match(file(PAGE), /<html[^>]*\bdata-layout="standalone"/)
  assert.ok(!pages().includes(PAGE), 'standalone pages should not be treated as shared-layout pages')
  assert.ok(pages().includes('index.html'), 'the shared-layout pages should still include the home page')
})

// Task 2: a header that stays visible while the visitor scrolls the service
// list, carrying the logo home and the site's top-level destinations.
const NAV_LABELS = ['About', 'Services', 'Values', 'Team', 'Case Studies', 'Careers', 'Blog', 'Contact']

test('the services page has a header that sticks while the page scrolls', () => {
  const header = region(file(PAGE), 'header')
  assert.ok(header, `${PAGE} should render a header`)

  const className = header.match(/class="([^"]*)"/)?.[1]
  assert.ok(className, 'the header should carry a class to style')
  assert.match(rule(`.${className.split(/\s+/)[0]}`) ?? '', /position\s*:\s*(sticky|fixed)/)
})

test('the header logo links back to the home page', () => {
  const logo = links(region(file(PAGE), 'header')).find((link) => /sp-services-logo/.test(link.tag))
  assert.ok(logo, 'the header should render a logo link')
  assert.equal(logo.href, 'index.html')
})

test('the header nav offers all eight top-level destinations, in order', () => {
  const nav = region(region(file(PAGE), 'header'), 'nav')
  assert.ok(nav, 'the header should contain a nav')

  const items = links(nav)
  assert.equal(items.length, NAV_LABELS.length, 'the nav should have one link per destination')
  assert.deepEqual(items.map((item) => item.text), NAV_LABELS)
})

test('the nav links are placeholders, since those pages do not exist yet', () => {
  const nav = region(region(file(PAGE), 'header'), 'nav')
  for (const item of links(nav)) {
    assert.match(item.href, /^#/, `${item.text} should point at a placeholder anchor`)
  }
})

// Task 3: the hero states what the page is about before any service detail.
test('the hero heading names the page, and is the only h1', () => {
  const headings = [...file(PAGE).matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)]
  assert.equal(headings.length, 1, 'the page should have exactly one h1')
  assert.equal(headings[0][1].trim(), 'Softpapaya Services')
})

test('the hero pairs the heading with a tagline', () => {
  const hero = file(PAGE).match(/<section\b[^>]*sp-services-hero[\s\S]*?<\/section>/)?.[0]
  assert.ok(hero, 'the page should render a hero section')
  assert.match(hero, /<h1\b/, 'the hero should hold the heading')

  const tagline = hero.match(/<p\b[^>]*sp-services-tagline[^>]*>([\s\S]*?)<\/p>/)
  assert.ok(tagline, 'the hero should render a tagline paragraph')
  assert.ok(tagline[1].trim().length > 20, 'the tagline should say something')
  assert.ok(hero.indexOf('<h1') < tagline.index, 'the tagline should follow the heading')
})

// Task 4: each service explains itself the same way -- what it is, how it is
// done, and who it is for -- so the list is scannable.
const SUB_LABELS = ['Technologies/Methodologies', 'Target Audience']

function services(html = file(PAGE)) {
  return [...html.matchAll(/<section\b[^>]*sp-services-service[\s\S]*?<\/section>/g)].map((m) => m[0])
}

test('the page lists at least three services', () => {
  assert.ok(services().length >= 3, `expected 3 or more services, got ${services().length}`)
})

test('every service has one title, a description, and both sub-blocks', () => {
  for (const service of services()) {
    const title = [...service.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)]
    assert.equal(title.length, 1, 'a service should have exactly one h2 title')
    assert.ok(title[0][1].trim().length > 0, 'the title should not be empty')

    const description = service.match(/<p\b[^>]*>([\s\S]*?)<\/p>/)
    assert.ok(description, `${title[0][1]} should have a description paragraph`)
    assert.ok(description[1].trim().length > 40, `${title[0][1]}'s description should say something`)

    const subs = [...service.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => m[1].trim())
    assert.deepEqual(subs, SUB_LABELS, `${title[0][1]} should label both sub-blocks`)
  }
})

test('the services have distinct titles', () => {
  const titles = services().map((service) => service.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/)[1].trim())
  assert.equal(new Set(titles).size, titles.length, 'each service should be a distinct offering')
})

test('the hero comes before the service detail', () => {
  const markup = file(PAGE)
  assert.ok(markup.indexOf('sp-services-hero') < markup.indexOf('<h2'), 'hero first, then services')
})

// Task 5: a fourth offering, structured exactly like the first three so the
// shared checks above still apply to it.
test('the page lists four to five services', () => {
  const count = services().length
  assert.ok(count >= 4 && count <= 5, `expected 4 or 5 services, got ${count}`)
})

test('staff augmentation is one of the offerings', () => {
  const titles = services().map((service) => service.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/)[1].trim())
  assert.ok(titles.includes('Staff Augmentation'), `expected Staff Augmentation among ${titles}`)
})

// Task 6: after reading the offerings, the visitor is invited to get in touch
// from a section that stands apart from the list.
const CORAL = '#FF6F61'

function cta(html = file(PAGE)) {
  return html.match(/<section\b[^>]*sp-services-cta\b[\s\S]*?<\/section>/)?.[0]
}

test('the call to action follows the last service', () => {
  const markup = file(PAGE)
  assert.ok(cta(markup), 'the page should render a call-to-action section')

  const last = services(markup).at(-1)
  assert.ok(markup.indexOf(cta(markup)) > markup.indexOf(last) , 'the CTA should come after the services')
})

test('the call to action has a heading and invitation copy', () => {
  const section = cta()
  assert.match(section, /<h2\b[^>]*>[\s\S]*?<\/h2>/, 'the CTA should have a heading')

  const copy = section.match(/<p\b[^>]*>([\s\S]*?)<\/p>/)
  assert.ok(copy, 'the CTA should invite the visitor to get in touch')
  assert.ok(copy[1].trim().length > 30, 'the invitation should say something')
})

test('the call to action offers a static Contact link, with no form', () => {
  const button = links(cta()).find((link) => /sp-services-cta-button/.test(link.tag))
  assert.ok(button, 'the CTA should render a contact button')
  assert.equal(button.text, 'Contact')
  assert.match(button.href, /^(mailto:|#)/, 'the button should be a static link')
  assert.doesNotMatch(file(PAGE), /<form\b/, 'the page should have no form to submit')
})

test('the contact button is coral', () => {
  assert.match(rule('.sp-services-cta-button') ?? '', new RegExp(CORAL, 'i'))
})

test('the call to action is set apart by extra spacing', () => {
  const declarations = rule('.sp-services-cta') ?? ''
  const spacing = declarations.match(/\b(?:padding|margin)[^:]*:\s*([^;]+)/)
  assert.ok(spacing, 'the CTA should set its own padding or margin')

  const largest = Math.max(...[...declarations.matchAll(/(\d+(?:\.\d+)?)rem/g)].map((m) => Number(m[1])))
  assert.ok(largest >= 4, `the CTA should be spaced more generously than body sections, got ${largest}rem`)
})

// Task 7: the footer closes the page with who we are and where else to go.
const FOOTER_GROUPS = ['Services', 'Work', 'About', 'Careers']

test('the page renders exactly one footer', () => {
  const markup = file(PAGE)
  assert.equal((markup.match(/<footer\b/g) ?? []).length, 1)
  assert.ok(markup.indexOf('<footer') > markup.indexOf(cta(markup)), 'the footer should come last')
})

test('the footer opens with a company blurb', () => {
  const blurb = region(file(PAGE), 'footer').match(/<p\b[^>]*sp-services-footer-blurb[^>]*>([\s\S]*?)<\/p>/)
  assert.ok(blurb, 'the footer should render a company blurb')
  assert.ok(blurb[1].trim().length > 40, 'the blurb should say who we are')
})

test('the footer groups its links under the four expected headings', () => {
  const footer = region(file(PAGE), 'footer')
  const groups = [...footer.matchAll(/<nav\b[^>]*sp-services-footer-group[\s\S]*?<\/nav>/g)].map((m) => m[0])

  assert.deepEqual(
    groups.map((group) => group.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/)[1].trim()),
    FOOTER_GROUPS,
  )
  for (const group of groups) {
    assert.ok(links(group).length >= 1, 'each group should list at least one link')
  }
})

test('the footer gives a placeholder contact email and a website link', () => {
  const footer = links(region(file(PAGE), 'footer'))

  const email = footer.find((link) => link.href?.startsWith('mailto:'))
  assert.ok(email, 'the footer should offer a contact email')
  assert.match(email.href, /@example\.com$/, 'the email should be a placeholder')

  const site = footer.find((link) => /^https?:\/\//.test(link.href ?? ''))
  assert.ok(site, 'the footer should link the website')
})

test('the footer carries Privacy and Terms placeholders', () => {
  const footer = links(region(file(PAGE), 'footer'))
  for (const label of ['Privacy', 'Terms']) {
    const link = footer.find((item) => item.text === label)
    assert.ok(link, `the footer should link ${label}`)
    assert.equal(link.href, '#', `${label} should stay a placeholder`)
  }
})

// Task 8: the page's visual base -- white ground, dark text, coral accent, and
// a font stack that degrades to the system sans-serif.
test('the page sets a white background and dark text', () => {
  const declarations = rule('.sp-services-page') ?? ''
  assert.match(declarations, /background\s*:\s*(#fff(fff)?|white)\b/i)

  const color = declarations.match(/(?:^|;)\s*color\s*:\s*(#[0-9a-f]{3,6})/i)
  assert.ok(color, 'the page should set a text colour')

  // Dark text: every channel of the hex sits in the bottom third of the range.
  const hex = color[1].slice(1)
  const full = hex.length === 3 ? [...hex].map((c) => c + c).join('') : hex
  const channels = full.match(/../g).map((pair) => parseInt(pair, 16))
  assert.ok(Math.max(...channels) <= 85, `text should be dark, got ${color[1]}`)
})

test('the page falls back to a system sans-serif font', () => {
  const stack = (rule('.sp-services-page') ?? '').match(/font-family\s*:\s*([^;]+)/)
  assert.ok(stack, 'the page should set a font stack')
  assert.match(stack[1], /system-ui/, 'the stack should start from the system UI font')
  assert.match(stack[1].trim(), /sans-serif\s*$/, 'the stack should end in the generic sans-serif')
})

test('the page uses no external font or asset source', () => {
  assert.doesNotMatch(file(PAGE), /<link[^>]*href="https?:/i, 'no remote stylesheets or fonts')
  assert.doesNotMatch(file(STYLESHEET), /@import|url\(\s*['"]?https?:/i, 'no remote CSS imports')
})

test('the coral accent is used beyond the contact button', () => {
  const accented = [...file(STYLESHEET).matchAll(/([^{}]+)\{([^}]*)\}/g)]
    .filter(([, , declarations]) => new RegExp(CORAL, 'i').test(declarations))
    .map(([, selector]) => selector.trim())

  assert.ok(accented.length >= 2, `coral should be the page accent, used in ${accented.length} rule(s)`)
})

test('the hero and each service section are spaced from their neighbours', () => {
  for (const selector of ['.sp-services-hero', '.sp-services-service']) {
    assert.match(rule(selector) ?? '', /\b(padding|margin)/, `${selector} should set its own spacing`)
  }
})

// Task 9: every interactive element answers the pointer.
const INTERACTIVE = [
  '.sp-services-logo',
  '.sp-services-nav-link',
  '.sp-services-cta-button',
  '.sp-services-footer-link',
]

test('every interactive element has a hover state', () => {
  const css = file(STYLESHEET)

  for (const selector of INTERACTIVE) {
    const hover = css.match(new RegExp(`\\${selector}:hover[^{]*\\{([^}]*)\\}`))
    assert.ok(hover, `${selector} should have a :hover rule`)
    assert.match(
      hover[1],
      /\b(color|background|text-decoration|border-bottom)\b/,
      `${selector}:hover should change colour or underline`,
    )
  }
})

test('hover states are reachable by keyboard too', () => {
  const css = file(STYLESHEET)
  for (const selector of INTERACTIVE) {
    assert.match(
      css,
      new RegExp(`\\${selector}:hover\\s*,\\s*\\${selector}:focus-visible`),
      `${selector} should apply the same treatment on keyboard focus`,
    )
  }
})

// Task 10: at phone width the page becomes one column and the nav wraps, with
// nothing wide enough to force a sideways scroll.
function mediaBlock(maxWidth) {
  const css = file(STYLESHEET)
  const start = css.search(new RegExp(`@media[^{]*max-width\\s*:\\s*${maxWidth}px`))
  if (start < 0) return undefined

  // A media block closes at the brace that balances its own opening one.
  let depth = 0
  for (let i = css.indexOf('{', start); i < css.length; i += 1) {
    if (css[i] === '{') depth += 1
    if (css[i] === '}' && (depth -= 1) === 0) return css.slice(css.indexOf('{', start) + 1, i)
  }
  return undefined
}

test('the page has a phone and a tablet breakpoint', () => {
  assert.ok(mediaBlock(480), 'the sheet should have a <=480px breakpoint')

  const tablet = [...file(STYLESHEET).matchAll(/@media[^{]*max-width\s*:\s*(\d+)px/g)]
    .map((match) => Number(match[1]))
    .filter((width) => width > 480 && width <= 1024)
  assert.ok(tablet.length >= 1, 'the sheet should also have a tablet breakpoint')
})

test('services stack into a single column on a phone', () => {
  const phone = mediaBlock(480)
  const list = phone.match(/\.sp-services-list[^{]*\{([^}]*)\}/)
  assert.ok(list, 'the phone breakpoint should relayout the service list')
  assert.match(list[1], /grid-template-columns\s*:\s*(1fr|minmax\(0,\s*1fr\))\s*;/, 'one column only')
})

test('the nav stacks or wraps on a phone', () => {
  const phone = mediaBlock(480)
  const nav = phone.match(/\.sp-services-nav\b[^{]*\{([^}]*)\}/)
  assert.ok(nav, 'the phone breakpoint should relayout the nav')
  assert.match(nav[1], /flex-direction\s*:\s*column|flex-wrap\s*:\s*wrap|display\s*:\s*(flex|grid)/)
})

test('nothing in the sheet can force sideways scrolling on a phone', () => {
  const css = file(STYLESHEET)

  assert.doesNotMatch(css, /white-space\s*:\s*nowrap/, 'text should be free to wrap')
  // (?<![-\w]) so max-width and min-width declarations are not mistaken for a
  // fixed width.
  assert.doesNotMatch(css, /(?<![-\w])width\s*:\s*\d+vw/, 'no viewport-width boxes')
  assert.doesNotMatch(css, /(?<![-\w])width\s*:\s*\d{3,}px/, 'no fixed wide boxes')

  // Any floor on a box has to fit inside a 480px viewport, padding included.
  for (const [, size, unit] of css.matchAll(/min-width\s*:\s*(\d+(?:\.\d+)?)(rem|px)/g)) {
    const px = unit === 'rem' ? Number(size) * 16 : Number(size)
    assert.ok(px <= 320, `a min-width of ${size}${unit} would overflow a phone viewport`)
  }
})

// Task 11: were this sheet ever included on another page, it must change
// nothing there -- so every selector is anchored to a page-scoped class.
const SCOPE = 'sp-services-'

function selectors() {
  return [...file(STYLESHEET).replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{[^{}]*\}/g)]
    .flatMap((match) => match[1].split(','))
    .map((selector) => selector.trim())
    .filter((selector) => selector.length > 0 && !selector.startsWith('@'))
}

test('every rule in the sheet is anchored to a page-scoped class', () => {
  for (const selector of selectors()) {
    assert.match(
      selector.split(/\s|>/)[0],
      new RegExp(`^\\.${SCOPE}`),
      `"${selector}" would leak outside services.html`,
    )
  }
})

test('the sheet overrides no bare element or global selector', () => {
  for (const selector of selectors()) {
    assert.doesNotMatch(
      selector,
      /^(html|body|:root|\*|h[1-6]|p|a|ul|li|nav|header|footer|section|div)\b/,
      `"${selector}" is a global override`,
    )
  }
})

test('the page names no class outside its own scope', () => {
  const classes = [...file(PAGE).matchAll(/class="([^"]*)"/g)]
    .flatMap((match) => match[1].split(/\s+/))
    .filter(Boolean)

  assert.ok(classes.length > 0, 'the page should use classes for styling')
  for (const name of classes) {
    assert.ok(name.startsWith(SCOPE), `class "${name}" is outside the page scope`)
  }
})

test('the page carries no inline styles or style block of its own', () => {
  assert.doesNotMatch(file(PAGE), /\bstyle=/, 'styling belongs in services.css')
  assert.doesNotMatch(file(PAGE), /<style\b/, 'styling belongs in services.css')
})
