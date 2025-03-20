<template>
  <div class="font-normal text-[16px] flex items-center gap-[24px]">
   <NuxtLink v-for="navItem in mappedItems" class="cursor-pointer hover:text-gray-500 text-[18px]" :to="getCorrectLink(navItem.slug)">
    {{ navItem.name}}
   </NuxtLink>
  </div>
</template>

<script setup>
const {data} = useFetch('/api/categories?limit=5')
const mappedItems = computed(() => (data.value || []).slice(10, 14))
const url = useRequestURL()

const getCorrectLink = (slug) => {
  return `${url.origin}/${slug}`;
};

</script>