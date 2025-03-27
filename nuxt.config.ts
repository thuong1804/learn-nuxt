import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "https://dummyjson.com",
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  pages: true,
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/icon',
    '@vee-validate/nuxt',
    'nuxt-toast',
    'vue3-carousel-nuxt',
    'nuxt-time',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
})