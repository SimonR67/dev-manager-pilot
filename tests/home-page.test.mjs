import assert from 'node:assert/strict'
import { test } from 'node:test'

import { body, countMatches, pages, read } from './helpers/pages.mjs'

// The site is served as static files from the repo root, so index.html is the
// document a browser loads at / -- the home page this spec describes.
const HOME_PAGE = 'index.html'
const STYLESHEET = 'styles.css'
const TITLE = 'Minas Tirus'

const HEX = /#[0-9a-f]{6}\b|#[0-9a-f]{3}\b/gi

function rule(css, selector) {
  const match = css.match(new RegExp(`${selector}\\s*\\{([^}]*)\\}`))
  assert.ok(match, `the stylesheet should declare ${selector.replace(/\\/g, '')}`)
  return match[1]
}

// `color` must not match the tail of `background-color`.
function declared(block, property) {
  const match = block.match(new RegExp(`(?<![-\\w])${property}:\\s*([^;]+)`))
  assert.ok(match, `the rule should declare ${property}`)
  return resolve(match[1])
}

// Resolves `var(--name)` against the :root block, so tests read the shade the
// browser would actually paint rather than the variable name.
function resolve(value) {
  const name = value.trim().match(/^var\((--[\w-]+)\)$/)
  if (!name) return value.trim()
  return rule(read(STYLESHEET), ':root').match(new RegExp(`${name[1]}:\\s*([^;]+)`))[1].trim()
}

function channels(hex) {
  const digits = hex.trim().replace('#', '')
  assert.match(digits, /^([0-9a-f]{3}|[0-9a-f]{6})$/i, `${hex} should be a hex colour`)

  const parts = digits.length === 3 ? [...digits].map((digit) => digit + digit) : digits.match(/../g)
  return parts.map((part) => parseInt(part, 16))
}

// Black, orange, or a near-grey neutral -- anything else is off-scheme.
function family(hex) {
  const [r, g, b] = channels(hex)
  const [max, min] = [Math.max(r, g, b), Math.min(r, g, b)]

  if (max - min <= 20) return max <= 40 ? 'black' : 'neutral'

  const hue = 60 * (((g - b) / (max - min)) % 6)
  return max === r && hue >= 15 && hue <= 45 ? 'orange' : `off-scheme (hue ${hue.toFixed(0)})`
}

function luminance(hex) {
  const [r, g, b] = channels(hex)
    .map((value) => value / 255)
    .map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(foreground, background) {
  const [light, dark] = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
  return (light + 0.05) / (dark + 0.05)
}

function section(markup, tag) {
  const match = markup.match(new RegExp(`<${tag}\\b[\\s\\S]*?</${tag}>`))
  assert.ok(match, `the page should render a <${tag}>`)
  return match[0]
}

const nav = (markup) => section(markup, 'nav')
const hero = (markup) => section(markup, 'header')

// Acceptance criterion 1: index.html renders a complete, valid HTML5 page.
test('the home page is a complete HTML5 document', () => {
  assert.ok(pages().includes(HOME_PAGE), 'the site should have an index.html to serve at /')

  const markup = read(HOME_PAGE)

  assert.match(markup, /^<!DOCTYPE html>/i, 'the page should open with the HTML5 doctype')
  assert.match(markup, /<html[^>]*\slang="[a-z-]+"/i, 'the page should declare a language')
  assert.match(markup, /<meta[^>]*charset="[^"]+"/i, 'the page should declare a charset')
  assert.match(markup, /<title>[^<]+<\/title>/i, 'the page should have a title')
  assert.equal(countMatches(markup, /<html\b/g), 1)
  assert.equal(countMatches(markup, /<head\b/g), 1)
  assert.equal(countMatches(markup, /<body\b/g), 1)
})

test('the home page is titled after the site', () => {
  assert.match(read(HOME_PAGE), new RegExp(`<title>[^<]*${TITLE}[^<]*</title>`))
})

// Acceptance criterion 2: a separate CSS file is linked and used, with no
// inline-only styling for major layout.
test('the home page links a separate stylesheet', () => {
  assert.match(
    read(HOME_PAGE),
    new RegExp(`<link[^>]*rel="stylesheet"[^>]*href="${STYLESHEET}"`),
    `the page should link ${STYLESHEET}`,
  )
  assert.ok(read(STYLESHEET).trim().length > 0, `${STYLESHEET} should not be empty`)
})

test('no element on the home page carries inline styling', () => {
  assert.equal(countMatches(body(read(HOME_PAGE)), /\sstyle="/g), 0)
})

// Acceptance criterion 3: a visible navigation bar at the top, carrying the
// site name and one or more links.
test('the home page renders a single navigation bar', () => {
  const markup = body(read(HOME_PAGE))

  assert.equal(countMatches(markup, /<nav\b/g), 1, 'the page should have exactly one nav')
  assert.match(nav(markup), /aria-label="[^"]+"|<h[1-6]/, 'the nav should be labelled')
})

test('the navigation bar carries the site name and placeholder links', () => {
  const markup = nav(body(read(HOME_PAGE)))

  assert.ok(markup.includes(TITLE), 'the nav should show the site name')

  const links = markup.match(/<a\b[^>]*>[\s\S]*?<\/a>/g) ?? []
  assert.ok(links.length >= 2, 'the nav should carry the brand plus at least one link')
  for (const link of links) {
    assert.match(link, /href="[^"]+"/, 'every nav link should have an href')
  }
})

test('the navigation bar is the first content element on the page', () => {
  const markup = body(read(HOME_PAGE))

  // The pre-existing agent note is plain text that sits above the layout; the
  // nav is the first structural element of the site itself.
  const start = markup.indexOf('<nav')
  assert.ok(start >= 0, 'the page should render a nav')
  assert.ok(start < markup.indexOf('<h1'), 'the nav should precede any heading')
})

test('the navigation bar is styled by the shared stylesheet', () => {
  const css = read(STYLESHEET)

  assert.match(css, /\.site-nav\b/, 'the stylesheet should style the nav bar')
  assert.match(body(read(HOME_PAGE)), /<nav[^>]*class="[^"]*site-nav/, 'the nav should use that class')
})

// Acceptance criterion 4: a hero section sits directly below the nav bar.
test('the hero section sits directly below the navigation bar', () => {
  const markup = body(read(HOME_PAGE))

  const navBlock = nav(markup)
  const after = markup.slice(markup.indexOf(navBlock) + navBlock.length)

  assert.match(after.trimStart(), /^<header[^>]*class="[^"]*hero/, 'the hero should follow the nav')
  assert.equal(countMatches(markup, /class="[^"]*\bhero\b/g), 1, 'there should be one hero')
})

// Acceptance criterion 5: the hero prominently displays "Minas Tirus" as its
// dominant heading element.
test('the hero displays the site title as its heading', () => {
  const heroBlock = hero(body(read(HOME_PAGE)))

  const heading = heroBlock.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  assert.ok(heading, 'the hero should carry an h1')
  assert.equal(heading[1].trim(), TITLE, 'the hero heading should read exactly "Minas Tirus"')
})

test('the hero title is the largest text on the page', () => {
  const css = read(STYLESHEET)

  const sizes = [...css.matchAll(/font-size:\s*([\d.]+)rem/g)].map((match) => Number(match[1]))
  const titleRule = css.match(/\.hero__title\s*\{([^}]*)\}/)
  assert.ok(titleRule, 'the stylesheet should style .hero__title')

  const titleSize = Number(titleRule[1].match(/font-size:[^;]*?([\d.]+)rem/)?.[1])
  assert.ok(titleSize > 0, 'the hero title should set a font size in rem')
  assert.equal(titleSize, Math.max(...sizes), 'no other rule should set a larger font size')
})

// Acceptance criterion 6: the colour scheme is black and orange throughout,
// with a light neutral used only where text would otherwise be hard to read.
test('every colour the site declares is black, orange or a neutral', () => {
  const declared = [...`${read(STYLESHEET)}${read(HOME_PAGE)}`.matchAll(HEX)].map((m) => m[0])
  assert.ok(declared.length > 0, 'the site should declare colours')

  for (const colour of declared) {
    assert.ok(
      ['black', 'orange', 'neutral'].includes(family(colour)),
      `${colour} is outside the black and orange scheme`,
    )
  }
})

test('the page, nav and hero all draw on the scheme', () => {
  const css = read(STYLESHEET)

  assert.equal(family(declared(rule(css, 'body'), 'background-color')), 'black')
  assert.equal(family(declared(rule(css, '\\.site-nav__brand'), 'color')), 'orange')
  assert.equal(family(declared(rule(css, '\\.hero__title'), 'color')), 'orange')
})

test('text on the page stays legible against its background', () => {
  const css = read(STYLESHEET)
  const page = declared(rule(css, 'body'), 'background-color')
  const heroBackground = declared(rule(css, '\\.hero'), 'background-color')
  const cta = rule(css, '\\.hero__cta')

  // Orange on black and black on orange both risk washing out, so check the
  // pairs the page actually renders rather than trusting the shades by eye.
  const pairs = [
    ['body text', declared(rule(css, 'body'), 'color'), page],
    ['nav brand', declared(rule(css, '\\.site-nav__brand'), 'color'), page],
    ['nav links', declared(rule(css, '\\.site-nav__links a'), 'color'), page],
    ['hero title', declared(rule(css, '\\.hero__title'), 'color'), heroBackground],
    ['hero tagline', declared(rule(css, '\\.hero__tagline'), 'color'), heroBackground],
    ['hero button', declared(cta, 'color'), declared(cta, 'background-color')],
    ['company note', declared(rule(read(HOME_PAGE), '\\.company-note'), 'color'), page],
  ]

  for (const [name, foreground, background] of pairs) {
    assert.ok(
      contrast(foreground, background) >= 4.5,
      `${name} (${foreground} on ${background}) should reach 4.5:1, got ${contrast(foreground, background).toFixed(2)}`,
    )
  }
})

test('the hero title wraps rather than overflowing', () => {
  const titleRule = read(STYLESHEET).match(/\.hero__title\s*\{([^}]*)\}/)[1]

  assert.doesNotMatch(titleRule, /white-space\s*:\s*nowrap/, 'a long title should be free to wrap')
  assert.doesNotMatch(titleRule, /overflow\s*:\s*hidden/, 'a long title should not be clipped')
  assert.doesNotMatch(titleRule, /\bwidth\s*:\s*\d/, 'the title should not fix its own width')
})
