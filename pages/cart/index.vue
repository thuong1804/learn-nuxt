<script setup>
import Breadcrumb from '~/component/breadcrumb/breadcrumb.vue';

import ImgCard1 from '@/assets/images/image_7.png'
import ImgCard2 from '@/assets/images/image_8.png'
import ImgCard3 from '@/assets/images/image_9.png'

const itemsCart = [
  {
    img: ImgCard1,
    title: "VERTICAL STRIPED SHIRT",
    size: "Large",
    color: "white",
    price: 145
  },
  {
    img: ImgCard2,
    title: "COURAGE GRAPHIC T-SHIRT",
    size: "Large",
    color: "white",
    price: 254
  },
  {
    img: ImgCard3,
    title: "LOOSE FIT BERMUDA SHORTS",
    size: "Large",
    color: "white",
    price: 445
  },
]

</script>


<template>
  <div class="w-full flex justify-center">
    <div class="max-w-96 md:max-w-[78rem] w-full pb-[170px]">
      <Breadcrumb />
      <h1 class="font-bold text-[40px] pb-6">YOUR CART</h1>
      <div class="flex gap-5">
        <div class="border rounded-[20px] py-5 px-6 border-[#0000001A] w-[60%] flex flex-col gap-5">
          <div class="flex flex-col gap-6" v-for="item in itemsCart">
            <div class="flex gap-[16px]">
              <img :src="item.img" class="w-[125px] rounded-[20px]" />
              <div class="flex flex-col flex-1">
                <h4 class="font-bold text-[20px]">{{ item.title }}</h4>
                <div>Size: <span class="text-[#00000099] text-[14px]">{{ item.size }}</span></div>
                <div>Color: <span class="text-[#00000099] text-[14px]">{{ item.color }}</span></div>
                <div class="font-bold text-[24px]">${{ item.price }}</div>
              </div>
              <div class="flex flex-col items-end justify-between">
                <Icon name="streamline:recycle-bin-2-solid" style="color: #FF3333" class="text-[20px]" />
                <div
                  class="bg-[#F0F0F0]  text-[#00000066] rounded-[62px] flex items-center justify-between gap-5 py-3 px-5  ">
                  <button class="flex items-center">
                    <Icon name="icon-park-outline:minus" style="color: #00000066" class="text-[14px]" />
                  </button>
                  <button class="text-[14px] text-[#00000066] flex items-center">1</button>
                  <button class="flex items-center">
                    <Icon name="material-symbols:add-2" style="color: #00000066" class="text-[14px]" />
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
            </div>
          </div>
        </div>
        <div class="flex-1 border rounded-[20px] py-5 px-6 border-[#0000001A] w-2/3 flex flex-col gap-5 h-max">
          <h4 class="font-bold text-2xl">Order Summary</h4>
          <div class="flex flex-col gap-5">
            <div class="flex justify-between text-[20px] text-[#00000099]">
              Subtotal
              <b class="text-black">$565</b>
            </div>
            <div class="flex justify-between text-[20px] text-[#00000099]">
              Discount (-20%)
              <b class="text-[#FF3333]">-$113</b>
            </div>
            <div class="flex justify-between text-[20px] text-[#00000099]">
              Delivery Fee
              <b class="text-black">$15</b>
            </div>
          </div>
          <div class="w-full">
            <div class="w-full outline-1 outline-offset-[-0.50px] outline-black/10" />
          </div>
          <div class="flex justify-between text-[20px] text-[#00000099]">
            Total
            <b class="text-black">$467</b>
          </div>
          <div class="flex gap-3">
            <div class="relative w-[349px]">
              <Icon name="mdi:tag-outline" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-[20px] text-black/60" />
              <input type="email" placeholder="Add promo code"
                class="w-full pl-12 pr-4 py-3 bg-[#F0F0F0] rounded-[62px] text-black/40 text-base font-normal  focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button class="w-1/3 py-3 px-4 bg-[#000000] text-white rounded-[62px]">Apply</button>
          </div>
          <button class="w-full py-3 px-4 bg-[#000000] text-white rounded-[62px] flex gap-2.5 items-end justify-center">Go to Checkout
            <Icon name="material-symbols:arrow-right-alt" class="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  </div>

</template>