<script setup lang="ts">
import BlurText from '~/vue-bits/TextAnimations/BlurText/BlurText.vue';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
</script>
<template>
  <UPage>
    <UContainer class="flex flex-col min-h-screen">
      <!-- Intro -->
      <section id="intro" class="flex flex-col items-center justify-center min-h-screen text-center">
        <BlurText text="Hi, I'm Aqsa Jimmy 👋" :duration="2000" :stagger="100" :blur-intensity="5"
          :style="{ fontSize: '5rem' }" @animationComplete="handleAnimationComplete" />
        <BlurText text="IT Support • Backend Developer • Laravel & Vue Enthusiast" :duration="2000" :stagger="100"
          :blur-intensity="5" :style="{ fontSize: '2rem', marginTop: '1rem' }" />
      </section>
    </UContainer>
  </UPage>
</template>
<style scoped></style>
