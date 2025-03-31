<script setup lang="ts">
import { NuxtLayout, NuxtPage } from '#components'

useHead({
  title: "GoMart",
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon-shop.png' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
