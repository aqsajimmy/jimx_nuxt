<script lang="ts" setup></script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout name="default">
    <UApp class="antialiased">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>

<style>
:root {
  height: 100dvh;
}

body {
  font-family: "Inter", sans-serif;
}
.font-regular {
  font-weight: 400;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.font-bold {
  font-weight: 700;
}
</style>
