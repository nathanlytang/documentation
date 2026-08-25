import fs from 'node:fs';
import path from 'node:path';
import type { DefaultTheme } from 'vitepress';

/**
 * Optional display name overrides for project folders.
 * Any folder not listed here falls back to Title Case of its slug.
 */
const DISPLAY_NAMES: Record<string, string> = {
  'cloudflare-ddns': 'Cloudflare-DDNS',
  inhabit: 'inhabit',
  steve: 'Steve',
  'wg-cli': 'wg-cli',
};

/** Files that should always sort to the top of a project's sidebar. */
const PINNED_FIRST = ['introduction', 'index', 'getting-started', 'getting_started'];

const SRC_DIR = path.resolve(process.cwd(), 'docs');
const PROJECTS_DIR = path.join(SRC_DIR, 'projects');

interface DocFile {
  /** Absolute path on disk. */
  file: string;
  /** File name without extension. */
  slug: string;
  title: string;
  order: number | undefined;
  numericPrefix: number | undefined;
}

function titleCase(slug: string): string {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function displayName(slug: string): string {
  return DISPLAY_NAMES[slug] ?? titleCase(slug);
}

/**
 * Extracts the frontmatter block and body of a markdown file without pulling in
 * a YAML parser: only the handful of scalar keys we care about are read.
 */
function splitFrontmatter(raw: string): { frontmatter: string; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { frontmatter: '', body: raw };
  return { frontmatter: match[1], body: raw.slice(match[0].length) };
}

function readFrontmatterValue(frontmatter: string, key: string): string | undefined {
  const match = new RegExp(`^${key}\\s*:\\s*(.+)$`, 'm').exec(frontmatter);
  if (!match) return undefined;
  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

function firstHeading(body: string): string | undefined {
  for (const line of body.split(/\r?\n/)) {
    const match = /^#\s+(.+?)\s*$/.exec(line);
    if (match) return match[1].replace(/[*_`]/g, '').trim();
  }
  return undefined;
}

function readDoc(file: string): DocFile {
  const raw = fs.readFileSync(file, 'utf-8');
  const { frontmatter, body } = splitFrontmatter(raw);
  const base = path.basename(file, '.md');
  const prefixMatch = /^(\d+)[-_.]/.exec(base);
  const orderValue = readFrontmatterValue(frontmatter, 'order');
  const order = orderValue !== undefined && orderValue !== '' ? Number(orderValue) : undefined;

  return {
    file,
    slug: base,
    title:
      readFrontmatterValue(frontmatter, 'title') ??
      firstHeading(body) ??
      titleCase(base.replace(/^\d+[-_.]/, '')),
    order: Number.isFinite(order) ? order : undefined,
    numericPrefix: prefixMatch ? Number(prefixMatch[1]) : undefined,
  };
}

function pinnedRank(slug: string): number {
  const index = PINNED_FIRST.indexOf(slug.replace(/^\d+[-_.]/, ''));
  return index === -1 ? PINNED_FIRST.length : index;
}

function compareDocs(a: DocFile, b: DocFile): number {
  if (a.order !== undefined || b.order !== undefined) {
    return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
  }
  if (a.numericPrefix !== undefined || b.numericPrefix !== undefined) {
    return (
      (a.numericPrefix ?? Number.MAX_SAFE_INTEGER) - (b.numericPrefix ?? Number.MAX_SAFE_INTEGER)
    );
  }
  const pinned = pinnedRank(a.slug) - pinnedRank(b.slug);
  if (pinned !== 0) return pinned;
  return a.title.localeCompare(b.title);
}

function listProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter(
      (entry) => entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'public',
    )
    .map((entry) => entry.name)
    .sort((a, b) =>
      displayName(a).localeCompare(displayName(b), undefined, { sensitivity: 'base' }),
    );
}

function listProjectDocs(slug: string): DocFile[] {
  return fs
    .readdirSync(path.join(PROJECTS_DIR, slug), { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => readDoc(path.join(PROJECTS_DIR, slug, entry.name)))
    .sort(compareDocs);
}

function link(slug: string, doc: DocFile): string {
  return doc.slug === 'index'
    ? `/projects/${slug}/`
    : `/projects/${slug}/${doc.slug.replace(/\.md$/, '')}`;
}

/** Projects discovered on disk, ordered by display name. */
export const projects = listProjectSlugs().map((slug) => ({
  slug,
  text: displayName(slug),
  docs: listProjectDocs(slug),
}));

/**
 * Multi-sidebar keyed by project path, generated from the filesystem so that
 * adding a markdown file requires no config changes.
 */
export function generateSidebar(): DefaultTheme.Sidebar {
  const sidebar: DefaultTheme.SidebarMulti = {
    '/projects/': [
      {
        text: 'Projects',
        items: projects.map((project) => ({
          text: project.text,
          link: project.docs.length
            ? link(project.slug, project.docs[0])
            : `/projects/${project.slug}/`,
        })),
      },
    ],
  };

  for (const project of projects) {
    sidebar[`/projects/${project.slug}/`] = [
      {
        text: project.text,
        collapsed: false,
        items: project.docs.map((doc) => ({
          text: doc.title,
          link: link(project.slug, doc),
        })),
      },
      {
        text: 'All projects',
        collapsed: true,
        items: projects
          .filter((other) => other.slug !== project.slug)
          .map((other) => ({
            text: other.text,
            link: other.docs.length ? link(other.slug, other.docs[0]) : `/projects/${other.slug}/`,
          })),
      },
    ];
  }

  return sidebar;
}

/** Top level navigation, with a generated dropdown of every project. */
export function generateNav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Projects',
      items: [
        { text: 'All projects', link: '/projects/' },
        ...projects.map((project) => ({
          text: project.text,
          link: project.docs.length
            ? link(project.slug, project.docs[0])
            : `/projects/${project.slug}/`,
        })),
      ],
    },
    { text: 'Portfolio', link: 'https://nathanlytang.com/' },
  ];
}
