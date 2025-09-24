// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: ["primary", "secondary", "error", "success", "warning", "info"],
      transitions: true,
    },
  },
  srcDir: "app",
  compatibilityDate: "2025-07-15",
  eslint: {
    config: {
      stylistic: {
        semi: true,
        commaDangle: "always-multiline",
        indent: "tab",
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [400, 500, 600, 700],
      },
    },
    download: true,
    inject: true,
    display: "swap",
  },
});
