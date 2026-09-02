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

test('the company note is not present yet', () => {
  for (const page of pages()) {
    assert.ok(
      !read(page).includes('Sid Meyer Ressurection'),
      `${page} should not yet contain the company note`,
    )
  }
})
