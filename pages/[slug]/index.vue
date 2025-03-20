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
            <h1 class="font-bold text-[32px] uppercase">
              {{ nameCategory }}
            </h1>
            <div class="flex items-center gap-3 text-[#00000099]">
              <div class="text-[16px] text-[#00000099] flex items-center gap-1.5">
                Sort by:
                <div class="relative inline-block">
                  <div @click="isOpen = !isOpen" class="text-black  font-bold rounded-lg text-xl">
                    Filter
                  </div>
                  <div v-show="isOpen"
                    class="absolute z-[100] mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Most
                          Popular</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rating</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- <b class="text-black">Most Popular</b> -->
                <Icon name="material-symbols:keyboard-arrow-down-rounded" style="color: #000000" class="text-[20px]" />
              </div>
            </div>
          </div>
          <ProductCardContainer :data="data" column="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import Categories from '~/component/categories/categories.vue';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';

const router = useRoute()
const { slug } = router.params

const isOpen = ref(false);
const data = ref([])
const lengthData = ref(0)
const nameCategory = ref('')

const getProductsWithByCategory = async () => {
  const response = await $fetch(`https://dummyjson.com/products/category/${slug}`, {
    method: 'GET',
  })
  data.value = response
  lengthData.value = response.total
  nameCategory.value = response.products.find(item => item.category === slug).category
}
getProductsWithByCategory();


</script>