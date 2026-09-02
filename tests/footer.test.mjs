import assert from 'node:assert/strict'
import { test } from 'node:test'

import { body, countMatches, pages, read } from './helpers/pages.mjs'

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
