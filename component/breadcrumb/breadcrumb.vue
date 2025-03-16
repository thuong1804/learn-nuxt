<script setup>
import { NuxtLink } from '#components';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean);
  let fullPath = '';

  return paths.map((segment, index) => {
    fullPath += `/${segment}`;
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: fullPath,
    };
  });
});
</script>

<template>
  <nav>
    <ul class="flex gap-2.5 list-none pb-6">
      <li class="text-[16px] text-black/60 ">
        <NuxtLink  to="/">Home</NuxtLink>
        <span v-if="breadcrumbs.length > 0"> &gt; </span>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="text-[16px] text-black/60 ">
        <NuxtLink :to="crumb.path">{{ crumb.label }}</NuxtLink>
        <span v-if="index !== breadcrumbs.length - 1"> &gt; </span>
      </li>
    </ul>
  </nav>
</template>
