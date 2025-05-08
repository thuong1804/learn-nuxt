import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: 'page', mode: 'default' }
  // },
  alias: {
    '~/components': '/components',
    '~/assets': '/assets',
    '~/images': '/images',
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "https://dummyjson.com",
      URL_API: process.env.URL_API || "http://localhost:3005",
      URL_PRODUCT: process.env.URL_PRODUCT || "https://go-mart.vercel.app",
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
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
  ui: {
    colorMode: false
  },
  modules: [
    '@nuxt/icon',
    '@vee-validate/nuxt',
    'vue3-carousel-nuxt',
    'nuxt-time',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/ui',
    'reka-ui/nuxt'
  ],
})