<template>
  <ProductCardContainer title="Top Popular" :data="dataProducts" :onLoadMore="handleLoadMore" :isShowShopNow="dataProducts?.data?.length >= 24" :path="'/popular'"/>
</template>

<script setup>
import { apiConfig } from '~/constants/api';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';
import { onMounted } from 'vue';
const config = useRuntimeConfig();

const dataProducts = ref([])
const lengthData = ref(0)
const limitInit = ref(8)

const getProductsWithByRating = async() => {
  const dataResponse = await $fetch(`${config.public.URL_API}/api/products?sort=rating&limit=${limitInit.value}`)
  dataProducts.value = dataResponse
  lengthData.value = dataResponse.totalItems
}

onMounted(() => {
  getProductsWithByRating();
})

const handleLoadMore = async() => {
  if (limitInit.value < lengthData.value) {
    limitInit.value += 8
    await getProductsWithByRating();
  }
}

</script>

