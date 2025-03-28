<script setup>
import Footer from './footer-layout/footer.vue';
import Header from './header-layout/header.vue';

const route = useRoute()

useHead({
  title: route.params.slug ? route.params.slug : "Go Mart" ,
  meta: [{ property: 'og:title', content: `SHOP.CO - ${route.params.slug}` }],
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon-shop.png' }
  ]
})
</script>

<template>
  <div class="layout">
    <Header />
    <main class="min-h-[500px]">
      <slot />
    </main>
    <Footer />
  </div>
</template>