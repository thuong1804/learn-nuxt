<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
      <div class="flex gap-5 pb-[300px]">
        <div class="w-1/4">
          <Categories />
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between pb-4">
            <h1 class="font-bold text-[32px]">
              {{ formatTextSlug(nameCategory)}}
            </h1>
            <div class="flex items-center gap-3 text-[#00000099]">
              <div class="text-[16px] text-[#00000099] flex items-center gap-1.5">
                Sort by:
                <div class="relative inline-block">
                  <div @click="isOpen = !isOpen" class="text-black  font-bold rounded-lg text-xl menu-container">
                    {{ slugFilter.name }}
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
          <ProductCardContainer :data="data" :column="3" />
          <div class="w-full">
            <Pagination v-model="currentPage" :total-items="totalItems" :limit="limit" />
          </div>
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

const route = useRoute()
const { slug } = route.params

const isOpen = ref(false);
const data = ref([])
const lengthData = ref(0)
const totalItems = ref(0);
const limit = 8;
const pageRef = ref(0)

const slugFilter = reactive({
  name: 'Most popular',
  slug: 'rating'
})

const nameCategory = ref('')

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

const onClickHandler = (page) => {
  pageRef.value = page
};

const currentPage = ref(1);

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
  slugFilter.name = name
  slugFilter.slug = slug
}
const getProductsWithByCategory = (slug, skip) => {

  if (slug === 'sale') {
    return `https://dummyjson.com/products?sortBy=${slugFilter.slug === 'rating' ? 'rating' : 'price'}&order=desc&limit=${limit}&skip=${skip}`;
  }
  if (slug === 'popular') {
    return `https://dummyjson.com/products?sortBy=${slugFilter.slug === 'rating' ? 'price' : 'rating'}&order=desc&limit=${limit}&skip=${skip}`;
  }
  return `https://dummyjson.com/products/category/${slug}?limit=${limit}&sortBy=${slugFilter.slug}&skip=${skip}`
}

const fetchData = async() => {
  const skip = (pageRef - 1) * limit;

  const response = await $fetch(getProductsWithByCategory(slug, skip), { method: 'GET' });
  data.value = response;
  lengthData.value = response.total;
  nameCategory.value = slug === 'sale' ? 'Sale' : slug === 'popular' ? 'Popular' : response.products?.[0]?.category || slug;
}

watch(() => slugFilter.slug, fetchData)

fetchData()
</script>

<style>
  .pagination-container {
    display: flex;

    column-gap: 10px;
  }

  .paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 20px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
  }

  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  .active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
  }

  .active-page:hover {
    background-color: #2988c8;
  }
</style>