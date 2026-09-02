import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

// Every page of the site shares the same layout: a single HTML file at the repo
// root. Discovering them means new pages are covered by the layout tests too.
export function pages() {
  return readdirSync(root).filter((file) => file.endsWith('.html'))
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
