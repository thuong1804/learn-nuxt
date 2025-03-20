<template>
  <div class="w-full border rounded-[20px] py-[20px] px-[24px] h-max">
    <div class="flex justify-between items-center pb-6">
      <div class="text-black text-xl font-bold ">Filters</div>
      <Icon name="mage:filter" style="color: #000000" class="text-[12px]" />
    </div>
    <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
    <div class="flex flex-col gap-3 pt-6">
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">T-shirts</div>
        <Checkbox/>
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">T-shirts</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">T-shirts</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">T-shirts</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">T-shirts</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10"></div>
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Price</div>
      <Icon name="material-symbols:keyboard-arrow-up" style="color: #000000" class="text-[20px]" />
    </div>
    <RangeSlider />
    <div class="w-full pt-14 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Colors</div>
      <Icon name="material-symbols:keyboard-arrow-up" style="color: #000000" class="text-[20px]" />
    </div>
    <div class="grid grid-cols-5 gap-4">
      <div class="w-[37px] h-[37px] rounded-full flex items-center justify-center border border-[#00000033]"
        v-for="(color, index) in itemsColor" :key="index" :style="{ backgroundColor: color }" />
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Size</div>
      <Icon name="material-symbols:keyboard-arrow-up" style="color: #000000" class="text-[20px]" />
    </div>
    <div class="grid grid-cols-2 gap-2 w-max gap-x-1">
      <div class="w-max px-5 py-2.5 bg-[#F0F0F0] text-[#00000066] rounded-[62px] flex items-center justify-center"
        v-for="size in itemsSize">
        {{ size }}
      </div>
    </div>
    <div class="w-full pt-6 pb-6">
      <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
    </div>
    <div class="flex justify-between items-center pb-5">
      <div class="text-black text-xl font-bold ">Dress Style</div>
      <Icon name="material-symbols:keyboard-arrow-up" style="color: #000000" class="text-[20px]" />
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Casual</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Formal</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Party</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="flex justify-between items-center">
        <div class="text-black/60 text-base font-normal">Gym</div>
        <Icon name="material-symbols:arrow-forward-ios" style="color: #000000" class="text-[12px]" />
      </div>
      <div class="w-full pt-6 pb-2.5">
        <button class="w-full bg-[#000000] py-3.5 rounded-[62px] text-white flex justify-center items-center">Apply
          Filter</button>
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
import Checkbox from '../checkbox/checkbox.vue';

const itemsColor = ["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", " #7D06F5", "#F506A4", "#FFFFFF", "#000000"]
const itemsSize = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
const {data} = useFetch('/api/categories')
console.log(data.value)
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