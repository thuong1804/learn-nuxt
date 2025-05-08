<template>
  <div class="flex flex-col items-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
    </div>
    <DetailProduct v-if="data && data.data" :item="data.data" />
    <TabsDetailProduct v-if="data && data.data" :item="data.data" />
    <MoreProduct />
  </div>
</template>

<script setup>

import DetailProduct from "~/container/product/detail-product.vue";
import TabsDetailProduct from '~/container/product/tabs-detail-product.vue';
import MoreProduct from "~/container/product/more-product.vue";
import Breadcrumb from "~/component/breadcrumb/breadcrumb.vue";

const route = useRoute()

const slug = route.params.slug

const match = slug?.match(/-p-([a-f\d]{24})$/)
const id = match?.[1]

if (!id) {
  throw createError({ statusCode: 404, message: 'Product not found' })
}

const { data } = await useFetch(`/api/product/${id}/product-detail`, { server: true })
</script>