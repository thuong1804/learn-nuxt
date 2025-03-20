
<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full">
      <Breadcrumb />
      <div class="flex gap-5 pb-[300px]">
       <div class="w-1/4">
        <Categories/>
       </div>
        <div class="flex-1">
          <div class="flex items-center justify-between pb-4">
            <h1 class="font-bold text-[32px]">
              Casual
            </h1>
            <div class="flex items-center gap-3 text-[#00000099]">
              <div class="text-[16px]">
                Showing 1-10 of 100 Products
              </div>
              <div class="text-[16px] text-[#00000099] flex items-center gap-1.5">
                Sort by: <b class="text-black">Most Popular</b>
                <Icon name="material-symbols:keyboard-arrow-down-rounded" style="color: #000000" class="text-[20px]" />
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-9">
            <NuxtLink :to="`/product/${item.title.toLowerCase().replace(/\s+/g, '-')}`"
              class="flex flex-col items-start" v-for="item in itemsCard">
              <img :src="item.img" class="rounded-[20px] pb-4 w-full" />
              <div class="font-bold text-[16px] pb-2">{{ item.title }}</div>
              <div class="flex">
                <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" v-for="value in item.evaluate"
                  :key="value" />
              </div>
              <div class="font-bold text-2xl">$120</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';
import RangeSlider from '../../../component/range-slider/range-slider.vue';
import ImgCard1 from '@/assets/images/itemCard.png'
import ImgCard2 from '@/assets/images/itemCard2.png'
import ImgCard3 from '@/assets/images/itemCard3.png'
import ImgCard4 from '@/assets/images/itemCard4.png'
import Categories from '~/component/categories/categories.vue';

const itemsColor = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", " #7D06F5", "#F506A4", "#FFFFFF", "#000000"]
const itemsSize = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]

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
  },
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
  },
  {
    img: ImgCard1,
    title: "VERTICAL STRIPED SHIRT",
    evaluate: 4
  },
]
</script>