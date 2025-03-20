<template>
  <ProductCardContainer title="Top Popular" :data="data" :onLoadMore="handleLoadMore"/>
</template>

<script setup>
import ProductCardContainer from '../product-card/product-card-container.vue';

const data = ref([])
const lengthData = ref(0)
const limitInit = ref(8)

const getProductsWithByRating = async() => {
  const response = await $fetch(`https://dummyjson.com/products?sortBy=rating&limit=${limitInit.value}`, {
    method: 'GET',
  })
  data.value = response
  lengthData.value = response.total
}
getProductsWithByRating();

const handleLoadMore = async() => {
  if (limitInit.value < lengthData.value) {
    limitInit.value += 8
    await getProductsWithByRating();
  }
}

</script>

