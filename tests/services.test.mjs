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
