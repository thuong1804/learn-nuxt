<template>
  <ProductCardContainer title="Popular" :data="data" :filterData="{popular: true}"/>
</template>

<script setup>
import ProductCardContainer from '../product-card/product-card-container.vue';

const data = ref([])

onMounted( async() => {
  const response = await $fetch(`https://fakestoreapi.in/api/products`, {
    method: 'GET',
  })
  data.value = response.products
})

</script>

