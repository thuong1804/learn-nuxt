<template>
  <div class="pb-[100px]">
    <ProductCardContainer title="You Might Also" :data="dataProducts"/>
  </div>
</template>

<script setup>
import { apiConfig } from '~/constants/api';
import ProductCardContainer from '~/component/product-card/product-card-container.vue';

const dataProducts = ref([])

function getRandomNumber() {
    return Math.floor(Math.random() * (150 - 10 + 1)) + 10;
}

const getProductsWithByDiscount = async() => {
  const data = await apiFetch(`${apiConfig.product.getList}?limit=4&skip=${getRandomNumber()}`)
  dataProducts.value = data
}
getProductsWithByDiscount();
</script>

