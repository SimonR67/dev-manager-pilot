// Run with: node --test
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

test('renders the company name note', () => {
  assert.match(html, /<p class="company-note">Alpha Biscuits<\/p>/);
});

test('places the note in the footer position, after the existing page content', () => {
  const contentIndex = html.indexOf('Placeholder page.');
  const noteIndex = html.indexOf('class="company-note"');

  assert.ok(contentIndex !== -1, 'existing page content should still be present');
  assert.ok(noteIndex > contentIndex, 'note should come after the existing page content');
});

test('styles the note as small, muted text', () => {
  const rule = html.match(/\.company-note\s*\{([^}]*)\}/);

  assert.ok(rule, 'a .company-note style rule should exist');
  assert.match(rule[1], /font-size:/);
  assert.match(rule[1], /color:/);
});
