<script lang="ts" setup></script>

<template>
  <div>
    <HeaderComponent />
    <UMain class="pt-20">
      <UContainer>
        <slot />
      </UContainer>
    </UMain>
    <FooterComponent />
  </div>
</template>

<style></style>
