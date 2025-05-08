<template>
  <ProductCardContainer
    title="Top Selling" :data="dataProducts"
    :onLoadMore="handleLoadMore"
    :isShowShopNow="dataProducts?.data?.length >= 24"
    :path="'/sale'"
  />
</template>

<script setup>
import { ref } from 'vue';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';

const dataProducts = ref([])
const lengthData = ref(0)
const limitInit = ref(8)
const config = useRuntimeConfig();

const getProductsWithByDiscount = async() => {
  const dataResponse = await $fetch(`${config.public.URL_API}/api/products?sort=price&limit=${limitInit.value}`)
  dataProducts.value = dataResponse
  lengthData.value = dataResponse.totalItems
}

onMounted(() => {
  getProductsWithByDiscount();
})

const handleLoadMore = async() => {
  if (limitInit.value < lengthData.value) {
    limitInit.value += 8
    await getProductsWithByDiscount()
  }
}

</script>

