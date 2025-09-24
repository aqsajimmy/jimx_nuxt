<script lang="ts" setup>
const articles = [
  {
    id: 1,
    title: "Getting Started with Nuxt 3",
    description: "Learn the fundamentals of Nuxt 3 and how to build modern web applications with Vue.js.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Nuxt", "Vue", "JavaScript"],
    slug: "getting-started-with-nuxt-3",
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    description: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["CSS", "Tailwind", "Design"],
    slug: "building-responsive-uis-with-tailwind",
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Vue Developers",
    description: "Discover essential TypeScript patterns and practices that will improve your Vue.js development workflow.",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["TypeScript", "Vue", "Best Practices"],
    slug: "typescript-best-practices-vue",
  },
  {
    id: 4,
    title: "State Management in Modern Vue Applications",
    description: "Explore different state management solutions for Vue.js applications, from Pinia to Vuex.",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["Vue", "Pinia", "State Management"],
    slug: "state-management-vue-applications",
  },
];
</script>

<template>
  <UPage>
    <h1 class="text-4xl font-bold mb-8">Articles</h1>
    <div class="space-y-6">
      <article
        v-for="article in articles"
        :key="article.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <div class="flex items-center justify-between mb-3">
          <time class="text-sm text-gray-500 dark:text-gray-400">
            {{ new Date(article.date).toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }) }}
          </time>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ article.readTime }}
          </span>
        </div>
        
        <h2 class="text-2xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors">
          <NuxtLink :to="`/articles/${article.slug}`">
            {{ article.title }}
          </NuxtLink>
        </h2>
        
        <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {{ article.description }}
        </p>
        
        <div class="flex items-center justify-between">
          <div class="flex gap-2 flex-wrap">
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-medium"
            >
              {{ tag }}
            </span>
          </div>
          
          <NuxtLink
            :to="`/articles/${article.slug}`"
            class="inline-flex items-center gap-1 text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 font-medium transition-colors"
          >
            Digging Deeper
            <Icon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </article>
    </div>
  </UPage>
</template>

<style scoped></style>