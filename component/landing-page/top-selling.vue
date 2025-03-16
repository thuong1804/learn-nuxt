<script setup>
import ImgCard1 from '@/assets/images/itemCard.png'
import ImgCard2 from '@/assets/images/itemCard2.png'
import ImgCard3 from '@/assets/images/itemCard3.png'
import ImgCard4 from '@/assets/images/itemCard4.png'

const itemsCard = [
  {
    img: ImgCard1,
    title: "VERTICAL STRIPED SHIRT",
    evaluate: 4
  },
  {
    img: ImgCard2,
    title: "COURAGE GRAPHIC T-SHIRT",
    evaluate: 4
  },
  {
    img: ImgCard3,
    title: "LOOSE FIT BERMUDA SHORTS",
    evaluate: 4
  },
  {
    img: ImgCard4,
    title: "FADED SKINNY JEANS",
    evaluate: 4
  }
]
</script>

<template>
  <div class="flex flex-col items-center pt-[72px]">
    <h1 class="font-bold text-[48px] text-center pb-[55px]">TOP SELLING</h1>
    <div class="flex items-center justify-between max-w-96 md:max-w-[78rem] w-full pb-[36px]">
      <NuxtLink :to="`/product/${item.title.toLowerCase().replace(/\s+/g, '-')}`" class="flex flex-col items-start" v-for="item in itemsCard">
        <img :src="item.img" class="rounded-[20px] pb-4 w-full" />
        <div class="font-bold text-[16px] pb-2">{{ item.title }}</div>
        <div class="flex">
          <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" v-for="value in item.evaluate" :key="value"/>
        </div>
        <div class="font-bold text-2xl">$120</div>
      </NuxtLink>
    </div>
    <button
      class="cursor-pointer w-[218px] h-[52px] border-[#0000001A] border rounded-[62px] flex justify-center items-center font-medium text-[16px]">View
      All
    </button>
  </div>
</template>