# Documentation

<p align="center"><em>Documentation describing my documentation.  How iconic.</em></p>

A searchable [VitePress](https://vitepress.dev/) site that compiles the documentation for all my public code and projects in one place, [viewable here](https://docs.nathanlytang.com/).

## Stack

- VitePress 1.x with the default theme and built-in local search
- TypeScript config and theme (`.vitepress/`)
- pnpm for dependency management
- Deployed to GitHub Pages by `.github/workflows/deploy.yml`

## Development

```bash
pnpm install
pnpm dev        # local dev server with hot reload
pnpm build      # production build into .vitepress/dist
pnpm preview    # serve the production build
pnpm lint       # markdownlint
pnpm format     # prettier
pnpm typecheck  # vue-tsc
```

## Project layout

```text
.vitepress/
  config.mts        site config
  sidebar.ts        filesystem-based nav/sidebar generation
  theme/            default theme extension + ProjectList component
docs/
  index.md          home page
  projects/         one folder per project, markdown only
  public/           static assets (images, favicon)
```

## Adding documentation

**New page in an existing project:** drop a `.md` file into `docs/projects/<project>/`. The sidebar entry is generated automatically, using the page's first `#` heading (or a `title` in frontmatter) as its label.

**New project:** create `docs/projects/<project-slug>/` and add markdown files. It appears in the sidebar, the nav dropdown, and the `/projects/` index automatically. Optionally add a nicer display name to `DISPLAY_NAMES` in `.vitepress/sidebar.ts` if Title Case of the slug isn't right.

**Page ordering** within a project, in order of precedence:

1. `order: <number>` in frontmatter
2. a numeric filename prefix, e.g. `01-setup.md`
3. `introduction.md` / `index.md` / `getting_started.md` pinned first, then alphabetical by title

## Deployment

Pushing to `master` builds the site and publishes `.vitepress/dist` to the `gh-pages` branch, with `CNAME` copied in to keep the custom domain.
