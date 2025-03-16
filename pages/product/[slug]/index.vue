<script setup lang="ts">
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import DetailProduct from '~/component/product/detail-product.vue';
import TabsDetailProduct from '~/component/product/tabs-detail-product.vue';
import YouMightAlsoLike from '~/component/product/you-might-also-like.vue';

</script>

<template>
  <div class="flex flex-col items-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
    </div>
   <DetailProduct/>
   <TabsDetailProduct/>
   <YouMightAlsoLike/>
  </div>

</template>