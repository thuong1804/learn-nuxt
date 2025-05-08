<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
      <div class="flex gap-5 pb-[300px]">
        <div class="w-1/4">
          <Categories />
        </div>
        <div class="flex-1" v-if="!isNotFound">
          <div class="flex items-center justify-between pb-4">
            <h1 class="font-bold text-[32px]">
              {{ formatTextSlug(nameCategory) }}
            </h1>
            <div class="flex items-center gap-3 text-[#00000099]">
              <div class="text-[16px] text-[#00000099] flex items-center gap-1.5">
                Sort by:
                <div class="relative inline-block">
                  <div @click="isOpen = !isOpen"
                    class="text-black  font-bold rounded-lg text-xl menu-container cursor-pointer">
                    {{ objectFilter.name }}
                  </div>
                  <div v-show="isOpen"
                    class="absolute z-[100] mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li v-for="item in itemFilter" @click="handelFilterItem(item.slug, item.name)">
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
                            item.name }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Icon name="material-symbols:keyboard-arrow-down-rounded" style="color: #000000" class="text-[20px]" />
              </div>
            </div>
          </div>
          <ProductCardContainer :data="data" column="3" />
          <div class="w-full">
            <Pagination v-model="currentPage" :total-items="totalItems" :limit="limit" @on-click-page="handlePage" />
          </div>
        </div>
        <div v-else class=" flex-1 h-auto flex flex-col items-center justify-center">
          <NotFound />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import Categories from '~/component/categories/categories.vue';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';
import Pagination from '~/component/pagination/pagination.vue';
import NotFound from '~/component/not-found/not-found.vue';
import { apiConfig } from '~/constants/api';
import { useRoute, useRouter } from 'vue-router';
import { watch, watchEffect } from 'vue';

const route = useRoute()
const router = useRouter()

const { slug } = route.params
const isOpen = ref(false);
const isNotFound = ref(false)
const data = ref([])
const totalItems = ref(0);
const limit = ref(12);
const currentPage = ref(1)

const nameCategory = ref('')

const itemFilter = [
  {
    name: 'Most popular',
    slug: 'asc',
  },
  {
    name: 'Price',
    slug: 'desc',
  },
]

const objectFilter = reactive({
  name: itemFilter[0].name,
  slug: itemFilter[0].slug
})

const handlePage = (page) => {
  currentPage.value = page
}

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

const handelFilterItem = (slug, name) => {
  objectFilter.name = name
  objectFilter.slug = slug
}

const fetchDataProduct = async (filter) => {
  const isCheckProductByCategory = slug === 'sale' || slug === 'popular'

  const response = await apiFetch(`${isCheckProductByCategory ? apiConfig.product.getList : apiConfig.product.productByCategory(slug)}`, {
    query: {
      ...filter,
      sort:  objectFilter.name === 'Most popular' ? 'rating' : 'price',
      page: route.query.page || 1,
      limit: limit.value
    }
  })

  data.value = response;
  totalItems.value = response.totalItems
  nameCategory.value = slug === 'sale' ? 'Sale' : slug === 'popular' ? 'Popular' :  slug;
}

watch(currentPage, (newPage, oldPage) => {
  if (oldPage !== undefined) {

    const newSkip = (newPage - 1) * limit.value;

    if (newSkip >= totalItems.value) {

      const skip = totalItems.value - limit.value;

      router.push({
        path: slug,
        query: {
          ...route.query,
          page: newPage,
          skip: skip,
        }
      })
    } else {
      const skip = newSkip;
      router.push({
        path: slug,
        query: {
          ...route.query,
          page: newPage,
          skip: skip,
        }
      })
    }
  }
});

watch(data, (newData) => {
  if (!newData?.data || newData?.data.length < 1) {
    isNotFound.value = true
  } else {
    isNotFound.value = false
  }
})

watchEffect(() => {
  if (route.query.page) {
    currentPage.value = +route.query.page
  } else {
    currentPage.value = 1
  }
})

watch(
  () => route.query,
  (newQuery) => {
    const querySlug = {
      ...newQuery,
      order: objectFilter.slug
    }
    fetchDataProduct(querySlug);
  },
  { immediate: true }
);

</script>
