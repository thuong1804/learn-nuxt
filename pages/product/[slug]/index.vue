<template>
  <div class="flex flex-col items-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
    </div>
    <DetailProduct v-if="data" :item="data"/>
    <TabsDetailProduct :item="data" v-if="data"/>
    <MoreProduct />
  </div>
</template>

<script setup>

import DetailProduct from "~/container/product/detail-product.vue";
import TabsDetailProduct from '~/container/product/tabs-detail-product.vue';
import MoreProduct from "~/container/product/more-product.vue";
import Breadcrumb from "~/component/breadcrumb/breadcrumb.vue";

const route = useRoute()
const id = route.params.slug.split("-p-").pop()

const {data} = await useFetch(`/api/product/${id}/product-detail`, {server: true})
</script>