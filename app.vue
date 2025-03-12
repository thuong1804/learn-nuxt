<script setup lang="ts">
import { NuxtLoadingIndicator } from '#components';
import { NuxtPage } from '#components';

const nav = [
  { label: 'Home', to: '/' },
]
</script>

<template>
 <NuxtExample
    dir="routing/pages"
    :nav="nav"
    current-route
  >
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtExample>
</template>
