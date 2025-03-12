<script setup lang="ts">
import Header from '~/layouts/header.vue';
import Banner from '~/component/landing-page/banner.vue';
import NewArrivals from '~/component/landing-page/new-arrivals.vue';
import TopSelling from '~/component/landing-page/top-selling.vue';
import DressStyle from '~/component/landing-page/dress-style.vue';
import OutHappyCustomers from '~/component/landing-page/out-happy-customers.vue';
</script>

<template>
  <div>
    <Header />
    <Banner/>
    <div class="bg-black flex justify-center">
      <div class=" bg-black flex items-center justify-between max-w-96 md:max-w-[78rem] min-h-32 w-full">
        <img src="/verce.png" class="w-[100px] h-[30px] object-contain" />
        <img src="/cavin.png" class="w-[100px] h-[30px] object-contain" />
        <img src="/guci.png" class="w-[100px] h-[30px] object-contain" />
        <img src="/zara.png" class="w-[100px] h-[30px] object-contain" />
        <img src="/pra.png" class="w-[100px] h-[30px] object-contain" />
      </div>
    </div>
    <NewArrivals/>
    <TopSelling/>
    <DressStyle/>
    <OutHappyCustomers/>
  </div>
</template>