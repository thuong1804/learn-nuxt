<script setup>
import Footer from './footer-layout/footer.vue';
import Header from './header-layout/header.vue';
</script>

<template>
  <div class="layout">
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>