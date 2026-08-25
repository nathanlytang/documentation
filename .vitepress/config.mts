import { defineConfig } from 'vitepress';
import { generateNav, generateSidebar } from './sidebar';

export default defineConfig({
  srcDir: 'docs',
  base: '/',
  lang: 'en-US',
  title: "Nathan's Docs",
  description: "Documentation for all of Nathan's public repositories",
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#00eba4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  markdown: {
    lineNumbers: false,
  },
  sitemap: {
    hostname: 'https://docs.nathanlytang.com',
  },
  themeConfig: {
    logo: '/logos/logo.png',
    nav: generateNav(),
    sidebar: generateSidebar(),
    outline: 'deep',
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/nathanlytang/' }],
    editLink: {
      pattern: 'https://github.com/nathanlytang/documentation/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © ${new Date().getFullYear()} Nathan Tang`,
    },
    lastUpdated: {
      text: 'Last updated',
    },
  },
});
