<template>
  <div class="flex flex-col items-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <!-- <Breadcrumb /> -->
    </div>
    <DetailProduct :item="data"/>
    <TabsDetailProduct />
    <YouMightAlsoLike />
  </div>
</template>

<script setup>

import authMiddleware from "@/middleware/auth";
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import DetailProduct from '~/component/product/detail-product.vue';
import TabsDetailProduct from '~/component/product/tabs-detail-product.vue';
import YouMightAlsoLike from '~/component/product/you-might-also-like.vue';

definePageMeta({
  middleware: authMiddleware
});
const router = useRouter()

const data = ref([])


</script>