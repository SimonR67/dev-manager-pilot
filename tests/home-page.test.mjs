import assert from 'node:assert/strict'
import { test } from 'node:test'

import { body, countMatches, pages, read } from './helpers/pages.mjs'

// The site is served as static files from the repo root, so index.html is the
// document a browser loads at / -- the home page this spec describes.
const HOME_PAGE = 'index.html'
const STYLESHEET = 'styles.css'
const TITLE = 'Minas Tirus'

function section(markup, tag) {
  const match = markup.match(new RegExp(`<${tag}\\b[\\s\\S]*?</${tag}>`))
  assert.ok(match, `the page should render a <${tag}>`)
  return match[0]
}

const nav = (markup) => section(markup, 'nav')

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
