import { defineLoader } from 'vitepress';
import { projects } from '../sidebar';

export interface ProjectEntry {
  text: string;
  link: string;
  description: string;
}

declare const data: ProjectEntry[];
export { data };

export default defineLoader({
  watch: ['docs/projects/*/*.md'],
  load(): ProjectEntry[] {
    return projects.map((project) => ({
      text: project.text,
      link: project.docs.length
        ? `/projects/${project.slug}/${project.docs[0].slug}`
        : `/projects/${project.slug}/`,
      description: project.docs.length ? project.docs.map((doc) => doc.title).join(' · ') : '',
    }));
  },
});
