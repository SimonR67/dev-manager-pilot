import assert from 'node:assert/strict'
import { test } from 'node:test'

import { body, countMatches, pages, read } from './helpers/pages.mjs'

// The site is a set of static HTML files served from the repo root, so the page
// a browser loads at the root URL is the conventional default document,
// index.html. That is the home page the note belongs on.
const HOME_PAGE = 'index.html'
const NOTE = 'Test from agent'

test('the home page is the default document served at the root URL', () => {
  assert.ok(pages().includes(HOME_PAGE), 'the site should have an index.html to serve at /')
})

test('the home page renders the note text, exactly once', () => {
  assert.equal(
    countMatches(body(read(HOME_PAGE)), new RegExp(NOTE, 'g')),
    1,
    `${HOME_PAGE} should render the note exactly once`,
  )
})

test('the note is a static text element in the page body', () => {
  const note = body(read(HOME_PAGE)).match(/<p[^>]*>Test from agent<\/p>/)
  assert.ok(note, 'the note should be a plain paragraph, like the other static text')
  assert.doesNotMatch(note[0], /\bstyle=/, 'the note should carry no inline styling')
})

test('the note is visible on load, with nothing hiding it', () => {
  const note = body(read(HOME_PAGE)).match(/<p[^>]*>Test from agent<\/p>/)
  assert.ok(note)
  assert.doesNotMatch(note[0], /\bhidden\b/, 'the note should not be hidden')
  assert.doesNotMatch(note[0], /aria-hidden/, 'the note should not be hidden from assistive tech')

  // Nothing may collapse or conceal the note behind a class-based rule either.
  const styles = read(HOME_PAGE).match(/<style[^>]*>([\s\S]*?)<\/style>/)?.[1] ?? ''
  assert.doesNotMatch(styles, /display\s*:\s*none/)
})

test('the note sits at the top of the page, ahead of the existing content', () => {
  const markup = body(read(HOME_PAGE))

  const note = markup.search(/<p[^>]*>Test from agent<\/p>/)
  assert.ok(note >= 0, 'the home page should render the note')
  assert.ok(note < markup.indexOf('<h1>'), 'the note should precede the existing heading')
  assert.equal(markup.slice(0, note).trim(), '', 'the note should be first in the body')
})

test('the note leaves the existing home page content in place', () => {
  const markup = read(HOME_PAGE)

  assert.match(markup, /<h1>Dev Manager Pilot<\/h1>/)
  assert.match(markup, /<p>Placeholder page\. Real features will replace this content once the pipeline is built\.<\/p>/)
  assert.match(markup, /<p[^>]*class="company-note"[^>]*>\s*Quake World\s*<\/p>/)
})

test('the note introduces no new styling of its own', () => {
  const styles = read(HOME_PAGE).match(/<style[^>]*>([\s\S]*?)<\/style>/)?.[1] ?? ''
  const selectors = [...styles.matchAll(/([^{}]+)\{[^}]*\}/g)].map((match) => match[1].trim())
  assert.deepEqual(selectors, ['.company-note'], 'the note should reuse plain body text styling')
})

test('the note is confined to the home page', () => {
  for (const page of pages().filter((page) => page !== HOME_PAGE)) {
    assert.equal(countMatches(read(page), new RegExp(NOTE, 'g')), 0, `${page} should not render the note`)
  }
})
