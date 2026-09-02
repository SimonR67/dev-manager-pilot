import assert from 'node:assert/strict'
import { test } from 'node:test'

import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { body, countMatches, pages, read } from './helpers/pages.mjs'

const fixtures = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures')

test('every page has exactly one shared layout body', () => {
  for (const page of pages()) {
    assert.equal(countMatches(read(page), /<body\b/g), 1, `${page} should have one <body>`)
  }
})

test('no page renders more than one footer element', () => {
  for (const page of pages()) {
    assert.ok(
      countMatches(body(read(page)), /<footer\b/g) <= 1,
      `${page} should render at most one footer`,
    )
  }
})

test('every page renders the company note with the exact company name', () => {
  for (const page of pages()) {
    const note = body(read(page)).match(/<p[^>]*class="company-note"[^>]*>([\s\S]*?)<\/p>/)
    assert.ok(note, `${page} should render a company note`)
    assert.equal(note[1].trim(), 'Sid Meyer Ressurection')
  }
})

test('every page using the shared layout renders the note, exactly once', () => {
  const all = pages()
  assert.ok(all.length >= 1, 'the site should have at least one page')

  for (const page of all) {
    assert.equal(
      countMatches(read(page), /Sid Meyer Ressurection/g),
      1,
      `${page} should render the company note exactly once`,
    )
  }
})

test('a page without the shared layout does not render the note', () => {
  const standalone = readFileSync(path.join(fixtures, 'no-layout.html'), 'utf8')

  assert.ok(!standalone.includes('Sid Meyer Ressurection'))
  assert.equal(countMatches(body(standalone), /<footer\b/g), 0)
})

test('the note is declared once per page and never nested inside itself', () => {
  for (const page of pages()) {
    const markup = body(read(page))

    assert.equal(
      countMatches(markup, /class="company-note"/g),
      1,
      `${page} should declare the company note once, not once per nested layout`,
    )

    const note = markup.match(/<p[^>]*class="company-note"[^>]*>([\s\S]*?)<\/p>/)
    assert.ok(note)
    assert.ok(!note[1].includes('company-note'), 'the note should not wrap another note')
  }
})

test('the company note is styled small and muted', () => {
  for (const page of pages()) {
    const rule = read(page).match(/\.company-note\s*\{([^}]*)\}/)
    assert.ok(rule, `${page} should style .company-note`)
    assert.match(rule[1], /font-size:/, 'note should set a smaller font size')
    assert.match(rule[1], /color:/, 'note should set a muted colour')
  }
})

test('existing page content and styles are left unchanged', () => {
  for (const page of pages()) {
    const markup = read(page)
    assert.match(markup, /<h1>Dev Manager Pilot<\/h1>/)
    assert.match(markup, /<p>Placeholder page\. Real features will replace this content once the pipeline is built\.<\/p>/)

    // The note's own rule is the only styling this change introduces.
    const styles = markup.match(/<style[^>]*>([\s\S]*?)<\/style>/)?.[1] ?? ''
    const selectors = [...styles.matchAll(/([^{}]+)\{[^}]*\}/g)].map((match) => match[1].trim())
    assert.deepEqual(selectors, ['.company-note'])
  }
})

test('the company note sits immediately above the footer region', () => {
  for (const page of pages()) {
    const markup = body(read(page))
    const note = markup.match(/<p[^>]*class="company-note"[^>]*>[\s\S]*?<\/p>/)
    assert.ok(note, `${page} should render a company note`)

    const after = markup.slice(note.index + note[0].length)
    const footer = after.match(/<footer\b[\s\S]*<\/footer>/)

    if (footer) {
      // Nothing may sit between the note and the footer it introduces.
      assert.equal(after.slice(0, footer.index).trim(), '', `${page} note should abut the footer`)
    } else {
      // No footer yet: the note occupies the footer slot at the end of the layout.
      assert.equal(after.trim(), '', `${page} note should be last in the layout`)
    }
  }
})
