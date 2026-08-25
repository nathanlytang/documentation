<script setup lang="ts">
import { data as projects } from './projects.data';
</script>

<template>
  <div class="project-list">
    <a v-for="project in projects" :key="project.link" class="project-card" :href="project.link">
      <span class="project-title">{{ project.text }}</span>
      <span v-if="project.description" class="project-pages">{{ project.description }}</span>
    </a>
  </div>
</template>

<style scoped>
.project-list {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 24px;
}

.project-card {
  display: block;
  padding: 16px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
}

.project-title {
  display: block;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.project-pages {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
</style>
