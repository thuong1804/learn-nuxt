<template>
  <Banner />
  <div class="bg-black flex justify-center">
    <div class=" bg-black flex items-center justify-between max-w-96 md:max-w-[78rem] min-h-32 w-full">
      <NuxtImg src="/verce.png" class="w-[100px] h-[30px] object-contain" />
      <NuxtImg src="/cavin.png" class="w-[100px] h-[30px] object-contain" />
      <NuxtImg src="/guci.png" class="w-[100px] h-[30px] object-contain" />
      <NuxtImg src="/zara.png" class="w-[100px] h-[30px] object-contain" />
      <NuxtImg src="/pra.png" class="w-[100px] h-[30px] object-contain" />
    </div>
  </div>
  <Popular />
  <div class=" flex w-full items-center justify-center pt-[64px]">
    <div class=" w-full max-w-[1240px] md:max-w-[78rem]l outline-1 outline-offset-[-0.50px] outline-black/10" />
  </div>
  <TopSelling />
  <div class=" flex w-full items-center justify-center pt-[64px]">
    <div class=" w-full max-w-[1240px] md:max-w-[78rem]l outline-1 outline-offset-[-0.50px] outline-black/10" />
  </div>
  <ShopCategory />
  <ReviewCustomer />
</template>

<script setup>
import Banner from '~/container/landing-page/banner.vue';
import Popular from '~/container/landing-page/popular.vue';
import TopSelling from '~/container/landing-page/top-selling.vue';
import ShopCategory from '~/container/landing-page/shop-category.vue';
import ReviewCustomer from '~/container/landing-page/review-customer.vue';
</script>
