<template>
  <div class="font-normal text-[16px] flex items-center gap-[24px]">
    <div class="relative inline-block menu-container"  @click="isOpen = !isOpen">
      <div class="cursor-pointer text-black font-bold rounded-lg text-xl flex items-end gap-2.5">
          Shop <Icon :name="iconRender" style="color: black" class="text-[25px]" />
      </div>
      <div
      v-show="isOpen"
      class="absolute z-[100] mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 max-h-[300px] overflow-y-auto">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
          <li v-for="navItem in itemsMenu">
            <NuxtLink
              rel="noopener"
              class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              :to="getCorrectLink(navItem)">
              {{formatTextSlug(navItem)}}
            </NuxtLink>
          </li>

        </ul>
      </div>
    </div>
    <NuxtLink :to="getCorrectLink(nav.slug)" v-for="nav in itemNav" class="hover:text-gray-200">
      {{ nav.name }}
    </NuxtLink>

  </div>
</template>

<script setup>
const url = useRequestURL()
const isOpen = ref(false)
const route = useRoute()

const itemNav = [
  {
    name: 'On Sale',
    slug: 'sale'
  },
  {
    name: 'Popular',
    slug: 'popular'
  },
]


const iconRender = computed(() => {
  return isOpen.value === true ? 'material-symbols:keyboard-arrow-up' : 'material-symbols:keyboard-arrow-down-rounded'
})

const { data: response } = await useAsyncData('category', () =>
  $fetch('/api/category-list')
)
const itemsMenu = ref([])

watch(() => route.fullPath, () => {
  isOpen.value = false
})

watch(response, (newData) => {
  return itemsMenu.value = newData.map(item => formatTextSlug(item))
}, { deep: true, immediate: true })

const getCorrectLink = (slug) => {
  return `${url.origin}/${formatSlugUrl(slug)}`;
};

const closeMenu = (event) => {
  if (!event.target.closest('.menu-container')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})

</script>

<style>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>