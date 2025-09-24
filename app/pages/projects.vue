<script lang="ts" setup>
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description of project 1.",
    technologies: ["Nuxt", "Vue", "TailwindCSS"],
    link: "https://project1.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a description of project 2.",
    technologies: ["Nuxt", "Vue", "TailwindCSS"],
    link: "https://project2.com",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a description of project 3.",
    technologies: ["Nuxt", "Vue", "TailwindCSS"],
    link: "https://project3.com",
  },
];
</script>

<template>
  <UPage>
    <h1 class="text-4xl font-bold mb-8">My Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in projects"
        :key="project.id"
        class="dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <h2 class="text-2xl font-semibold mb-4 text-white dark:text-gray-200">
          {{ project.title }}
        </h2>
        <p class="text-gray-600 mb-4 dark:text-gray-200">{{ project.description }}</p>
        <div class="flex gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 bg-gray-600 text-white rounded-full text-sm dark:bg-gray-700 dark:text-gray-200"
          >
            {{ tech }}
          </span>
        </div>
        <a
          :href="project.link"
          target="_blank"
          class="mt-4 inline-block text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300"
        >
          View Project →
        </a>
      </div>
    </div>
  </UPage>
</template>

<style></style>
