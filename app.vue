<script setup lang="ts">
import { NuxtLayout, NuxtPage } from '#components';

const nav = [
  { label: 'Home', to: '/' },
]
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
