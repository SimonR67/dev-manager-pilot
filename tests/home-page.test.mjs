import assert from 'node:assert/strict'
import { test } from 'node:test'

import { body, countMatches, pages, read } from './helpers/pages.mjs'

// The site is served as static files from the repo root, so index.html is the
// document a browser loads at / -- the home page this spec describes.
const HOME_PAGE = 'index.html'
const STYLESHEET = 'styles.css'
const TITLE = 'Minas Tirus'

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
