<script setup lang="ts">
import { NuxtLayout, NuxtPage } from '#components'
import { useHead } from 'nuxt/app';

const ToasterProps = {
  position: "top-right",
  timeout: 2000,
};
useHead({
  title: "GoMart",
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon-shop.png' }
  ]
})
</script>

<template>
  <UApp :toaster="ToasterProps">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
