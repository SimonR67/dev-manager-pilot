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
