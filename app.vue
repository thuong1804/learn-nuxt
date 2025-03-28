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
