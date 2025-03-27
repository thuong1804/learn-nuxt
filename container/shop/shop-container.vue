<template>
  <div class="max-w-96 md:max-w-[78rem] my-0 mx-auto pb-[150px]">
    <div v-if="dataProducts">
      <h1 v-if="slug" class="text-2xl">Search result: {{ slug }}</h1>
      <div class="w-full flex items-center justify-end gap-3 text-[#00000099]">
        <div class="text-[16px] text-[#00000099] flex items-center gap-1.5">
          Sort by:
          <div class="relative inline-block">
            <div @click="isOpen = !isOpen"
              class="text-black  font-bold rounded-lg text-xl menu-container cursor-pointer">
              {{ itemFilterRef.name }}
            </div>
            <div v-show="isOpen"
              class="absolute z-[100] mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li v-for="item in itemFilter" @click="handelFilterItem(item.slug, item.name)">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
                    item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <Icon name="material-symbols:keyboard-arrow-down-rounded" style="color: #000000" class="text-[20px]" />
        </div>
      </div>
      <ProductCardContainer :data="dataProducts" />
      <div class="w-full">
        <Pagination v-model="currentPage" :total-items="totalItems" :limit="limitInit" @on-click-page="handlePage" />
      </div>
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>

<script setup>
import ProductCardContainer from '~/component/product-card/product-card-container.vue';
import NotFound from '~/component/not-found/not-found.vue';
import Pagination from '~/component/pagination/pagination.vue';

const route = useRoute()
const slug = computed(() => route.query.search);
const dataProducts = ref([])
const totalItems = ref(0);
const limitInit = ref(16)
const currentPage = ref(1);
const pageRef = ref(0)
const skip = ref(0)
const isOpen = ref(false);

const itemFilter = [
  {
    name: 'Most popular',
    slug: 'rating',
  },
  {
    name: 'Price',
    slug: 'price',
  },
]
const itemFilterRef = reactive({
  name: 'Most popular',
  slug: 'rating'
})

const handelFilterItem = (slug, name) => {
  itemFilterRef.name = name
  itemFilterRef.slug = slug
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})

const closeMenu = (event) => {
  if (!event.target.closest('.menu-container')) {
    isOpen.value = false
  }
}

const handlePage = (page) => {
  pageRef.value = page
};

const fetchData = async (newSlug, sortItem) => {
  const response = await $fetch(newSlug ? '/api/product/search' : '/api/product/getList', {
    query: {
      limit: limitInit.value,
      skip: skip.value,
      ...(sortItem ? { sortBy: sortItem } : {}),
      ...(newSlug ? { q: newSlug } : {}),
      order: 'asc',
    }
  });
 if (!response || response.total === 0) {
    dataProducts.value = null;
    totalItems.value = 0;
  } else {
    dataProducts.value = response;
    totalItems.value = response.total;
  }
};

watch(slug, (newSlug) => {
    currentPage.value = 1
    skip.value = 0
  if (newSlug) {
    fetchData(newSlug)
  } else {
    fetchData()
  }
}, { immediate: true , deep: true})

watch(() => itemFilterRef.slug,
  (itemChange) => {
    if (itemChange) {
      currentPage.value = 1
      skip.value = 0
      fetchData(null, itemChange)
    }
}, {deep: true});

watch(pageRef, (newPage, oldPage) => {
  if (oldPage !== undefined) {
    const newSkip = (newPage - 1) * limitInit.value;
    if (newSkip >= totalItems.value) {
      skip.value = totalItems.value - limitInit.value;
    } else {
      skip.value = newSkip;
    }
    fetchData(null, null);
  }
});

</script>