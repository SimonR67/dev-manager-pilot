import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

// Pages of the shared layout are single HTML files at the repo root.
// Discovering them means new pages are covered by the layout tests too. A page
// that brings its own markup and stylesheet opts out by declaring itself
// standalone, so the layout checks stay about the layout.
const STANDALONE = /<html[^>]*\bdata-layout="standalone"/

export function pages() {
  return readdirSync(root)
    .filter((file) => file.endsWith('.html'))
    .filter((file) => !STANDALONE.test(read(file)))
}

export function read(page) {
  return readFileSync(path.join(root, page), 'utf8')
}

export function body(html) {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/)
  if (!match) throw new Error('page has no <body>')
  return match[1]
}

export function countMatches(html, pattern) {
  return (html.match(pattern) ?? []).length
}
