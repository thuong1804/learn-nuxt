<template>
  <div class="flex flex-col items-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <!-- <Breadcrumb /> -->
    </div>
    <DetailProduct :item="data"/>
    <TabsDetailProduct :item="data"/>
    <YouMightAlsoLike />
  </div>
</template>

<script setup>

import authMiddleware from "@/middleware/auth";
import DetailProduct from "~/container/product/detail-product.vue";
import TabsDetailProduct from '~/container/product/tabs-detail-product.vue';
import YouMightAlsoLike from '~/container/product/you-might-also-like.vue';

definePageMeta({
  middleware: authMiddleware
});

const route = useRoute()
const id = route.params.slug.split("-p-").pop()

const {data} = await useFetch(`/api/product/${id}/product-detail`, {server: true})
console.log(data.value)



</script>