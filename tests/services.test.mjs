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
