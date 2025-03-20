<template>
  <ProductCardContainer title="Top Selling" :data="dataProducts" :onLoadMore="handleLoadMore"/>
</template>

<script setup>
import { apiConfig } from '~/constants/api';
import ProductCardContainer from '../product-card/product-card-container.vue';

const dataProducts = ref([])
const lengthData = ref(0)
const limitInit = ref(8)

const getProductsWithByDiscount = async() => {
  const {data} = await apiFetch(`${apiConfig.product.getList}?sortBy=discountPercentage&limit=${limitInit.value}`)
  dataProducts.value = data.value
  lengthData.value = data.value.total
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

