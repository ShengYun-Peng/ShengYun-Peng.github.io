# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
bundle install          # install dependencies
bundle exec jekyll serve  # local dev server at http://localhost:4000
```

Requires Ruby with Bundler. Uses `github-pages` gem for GitHub Pages compatibility.

## Architecture

This is a **metadata-driven Jekyll academic homepage** forked from [Fred Hohman's template](https://github.com/fredhohman/fredhohman.github.io). Content is primarily driven by YAML data files and Markdown front matter, not prose.

### Content Model

- **Publications** live in `_posts/papers/YYYY-MM-DD-<slug>.md` with rich front matter (authors, venue, links, figures, awards, etc.). The `featured: true` and `feature-order` fields control homepage display.
- **People** are registered in `_data/people.yaml` (~224 entries) with URLs and headshots. Authors in papers are referenced by name and resolved against this file. The site owner has `me: true` and renders bold.
- **CV sections** (education, experience, awards, talks, funding, mentoring, reviewer roles, etc.) each have a corresponding `_data/*.yaml` file rendered by matching `_includes/cv/*.html` partials.

### Layout Hierarchy

```
default.html → head.html + header.html + content + footer.html
├── home.html    → index.md (intro + featured papers via feature.html)
├── cv.html      → cv.md (renders all _data/ YAML through cv/ includes)
├── paper.html   → individual paper detail pages
├── page.html    → blog.md, projects.md, tools.md, everything-else.md
└── post.html    → blog posts
```

### Key Includes

- `feature.html` — featured publication cards with venue badges and action links
- `person.html` / `person-image.html` — author name/photo rendering with people.yaml lookup
- `_includes/cv/` — 17 partials for CV section types

## Common Tasks

**Add a publication**: Create `_posts/papers/YYYY-MM-DD-slug.md` with the standard front matter (see existing papers for the template). Add author entries to `_data/people.yaml` if new collaborators. Place figure in `images/papers/`.

**Add a person**: Add entry to `_data/people.yaml` with name, url, and picture filename. Place headshot in `images/people/`.

**Update CV**: Edit the relevant `_data/*.yaml` file (experiences, education, awards, talks, etc.).

## Conventions

- Paper figure images: 2500×1650px, background #F6F6F6
- Author headshots go in `images/people/` matching the `picture` field in `people.yaml`
- Commit messages are terse (e.g., "typo", "latest publications", "update cv")
- `equal-contribution` front matter field renders asterisks on co-first authors
