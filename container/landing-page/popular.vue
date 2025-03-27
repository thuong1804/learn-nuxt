<template>
  <ProductCardContainer title="Top Popular" :data="dataProducts" :onLoadMore="handleLoadMore"/>
</template>

<script setup>
import { apiConfig } from '~/constants/api';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';

const dataProducts = ref([])
const lengthData = ref(0)
const limitInit = ref(8)

const getProductsWithByRating = async() => {
  const dataResponse = await apiFetch(`${apiConfig.product.getList}?sortBy=rating&limit=${limitInit.value}`)
  dataProducts.value = dataResponse
  lengthData.value = dataResponse.total
}
getProductsWithByRating();

const handleLoadMore = async() => {
  if (limitInit.value < lengthData.value) {
    limitInit.value += 8
    await getProductsWithByRating();
  }
}

</script>

