<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
import LogoComponent from "@/components/LogoComponent.vue";

const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    icon: "i-lucide-home",
    active: route.path === "/",
  },
  {
    label: "About",
    to: "/about",
    icon: "i-lucide-user",
    active: route.path.startsWith("/about"),
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "i-lucide-box",
    active: route.path.startsWith("/projects"),
  },
  {
    label: "Articles",
    to: "/articles",
    icon: "i-lucide-rocket",
    active: route.path.startsWith("/articles"),
  },
  {
    label: "Contact",
    to: "/contact",
    icon: "i-lucide-mail",
    active: route.path.startsWith("/contact"),
  },
]);

const downloadResume = () => {
  window.open(
    "https://jimx.dev/files/Resume%20Aqsa%20Jimmy%202025%20-%20Updated.pdf",
    "_blank"
  );
};
</script>

<template>
  <UHeader>
    <template #title>
      <LogoComponent class="h-6 w-auto" />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
      <UButton
        class="cursor-pointer bg-primary-500"
        aria-label="Download My Resume"
        @click="downloadResume"
      >
        <span class="flex items-center gap-1">
          <Icon name="i-lucide-download" />
          My Resume
        </span>
      </UButton>
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5 transition-all duration-200 ease-in-out"
      />
    </template>
  </UHeader>
</template>
