<template>
  <ProductCardContainer title="Top Selling" :data="data" :onLoadMore="handleLoadMore"/>
</template>

<script setup>
import ProductCardContainer from '../product-card/product-card-container.vue';

const data = ref([])
const lengthData = ref(0)
const limitInit = ref(8)


const getProductsWithByDiscount = async() => {
  const response = await $fetch(`https://dummyjson.com/products?sortBy=discountPercentage&limit=${limitInit.value}`, {
    method: 'GET',
  })
  data.value = response
  lengthData.value = response.total
}

getProductsWithByDiscount();

const handleLoadMore = async() => {
  console.log(limitInit.value, lengthData.value)
  if (limitInit.value < lengthData.value) {
    limitInit.value += 8
    await getProductsWithByDiscount()
  }
}

</script>

