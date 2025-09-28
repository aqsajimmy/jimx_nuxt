<script lang="ts" setup>
import DarkVeil from '~/vue-bits/Backgrounds/DarkVeil/DarkVeil.vue';
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Background -->
    <DarkVeil class="absolute inset-0 -z-100" :hue-shift="0" :noise-intensity="0" :scanline-intensity="0" :speed="0.5"
      :scanline-frequency="0.005" :warp-amount="0" :resolution-scale="1" />

    <!-- Content -->
    <!-- <HeaderComponent /> -->

    <UMain>
      <UContainer>
        <slot />
      </UContainer>

    </UMain>

    <FooterComponent />

  </div>
</template>

<style></style>
