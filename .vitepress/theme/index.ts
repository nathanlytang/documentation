import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ProjectList from './ProjectList.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectList', ProjectList);
  },
} satisfies Theme;
