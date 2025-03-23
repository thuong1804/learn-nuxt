<template>
  <div class="w-full flex flex-col items-center justify-center pt-[103px] pb-[127px]">
    <div class="max-w-96 md:max-w-[78rem] w-full bg-[#F0F0F0] rounded-[40px] pt-[70px] pb-5">
      <h1 class="font-bold text-[48px] text-center pb-[64px] uppercase">Shop by Category </h1>
      <div class="flex flex-col gap-5">
        <div class="flex justify-center items-center gap-5 px-[30px]">
          <NuxtLink :to="`${url.origin}/smartphones`" class="w-1/3 bg-white rounded-[20px] p-2 flex relative justify-end shadow-sm">
            <span class="absolute left-10 top-4 text-2xl font-bold">Smart Phone</span>
            <img :src="ImgIphone" class="h-[289px] w-1/2 object-contain transition-all hover:scale-105" />
          </NuxtLink>
          <NuxtLink :to="`${url.origin}/groceries`" class="flex-1 bg-white rounded-[20px] p-2 flex relative justify-end shadow-sm">
            <span class="absolute left-10 top-4 text-2xl font-bold">Groceries</span>
            <img :src="ImgFood" class="h-[289px] w-1/2 object-contain transition-all hover:scale-105" />
          </NuxtLink>
        </div>
        <div class="flex justify-center items-center gap-5 px-[30px] flex-row-reverse shadow-sm">
          <NuxtLink :to="`${url.origin}/mens-shoes`" class="w-1/3 bg-white rounded-[20px] p-2 flex relative justify-end">
            <span class="absolute left-10 top-4 text-2xl font-bold">Shoes</span>
            <img :src="ImgShoes" class="h-[289px] w-[80%] object-contain transition-all hover:scale-105" />
          </NuxtLink>
          <NuxtLink :to="`${url.origin}/kitchen-accessories`" class="flex-1 bg-white rounded-[20px] p-2 flex relative justify-end shadow-sm">
            <span class="absolute left-10 top-4 text-2xl font-bold">Kitchen Accessories</span>
            <img :src="ImgHousehold" class="h-[289px] w-1/2 object-contain  transition-all hover:scale-105" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImgIphone from '@/assets/images/iphone.jpg'
import ImgFood from '@/assets/images/food.jpg'
import ImgHousehold from '@/assets/images/household.jpg'
import ImgShoes from '@/assets/images/shoes.jpg'
const url = useRequestURL()

</script>