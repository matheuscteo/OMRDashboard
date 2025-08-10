<script lang="ts" setup>
import MarkdownIt from "markdown-it";
import source from "~/assets/content/about.md?raw";

const md = new MarkdownIt({ linkify: true, typographer: true, breaks: true });
const html = md.render(source);
</script>

<template>
  <article
    class="obsidian-light mx-auto max-w-3xl bg-white rounded-2xl shadow-sm p-6 sm:p-8"
    v-html="html"
  />
</template>

<style>
/* Palette */
.obsidian-light {
  --text: #0f172a; /* slate-900 */
  --muted: #64748b; /* slate-500 */
  --bg-soft: #f8fafc; /* slate-50 */
  --border: #e5e7eb; /* gray-200 */
  --code-bg: #f1f5f9; /* slate-100 */
  --accent: #2563eb; /* blue-600 */
  --accent-600: #1d4ed8; /* blue-700 */

  color: var(--text);
  line-height: 1.7;
  font-size: 16px;
}

/* Headings */
.obsidian-light h1,
.obsidian-light h2,
.obsidian-light h3,
.obsidian-light h4 {
  color: #3359ac; /* gray-900 */
  font-weight: 700;
  line-height: 1.25;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
}
.obsidian-light h1 {
  font-size: 2rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.4rem;
}
.obsidian-light h2 {
  font-size: 1.75rem;
}
.obsidian-light h3 {
  font-size: 1.25rem;
}
.obsidian-light h4 {
  font-size: 1.1rem;
}

/* Paragraphs */
.obsidian-light p {
  margin: 0.9em 0;
}

/* Lists — bullets/numbers + colored markers */
.obsidian-light ul,
.obsidian-light ol {
  list-style-position: outside;
  margin: 0.75em 0 0.75em 1.25em;
  padding-left: 1em;
}
.obsidian-light ul {
  list-style-type: disc;
}
.obsidian-light ul ul {
  list-style-type: circle;
  margin-top: 0.25em;
}
.obsidian-light ul ul ul {
  list-style-type: square;
}
.obsidian-light ol {
  list-style-type: decimal;
}
.obsidian-light li {
  margin: 0.25em 0;
}
.obsidian-light li::marker {
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

/* Rules */
.obsidian-light hr {
  border: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--border),
    transparent
  );
  margin: 1.5rem 0;
}

/* Links */
.obsidian-light a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.obsidian-light a:hover {
  color: var(--accent-600);
}

/* Blockquotes */
.obsidian-light blockquote {
  border-left: 4px solid var(--border);
  padding: 0.25rem 0.75rem;
  color: var(--muted);
  background: var(--bg-soft);
  border-radius: 0.25rem;
  margin: 1rem 0;
}

/* Code */
.obsidian-light code {
  background: var(--code-bg);
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 0 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", monospace;
  font-size: 0.9em;
}
.obsidian-light pre code {
  display: block;
  padding: 0.75rem 1rem;
  overflow-x: auto;
  border-radius: 0.5rem;
}

/* Tables (optional, looks nicer if present) */
.obsidian-light table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.95rem;
}
.obsidian-light th,
.obsidian-light td {
  border: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
}
.obsidian-light th {
  background: var(--bg-soft);
  text-align: left;
}
</style>
