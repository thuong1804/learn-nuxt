<script setup>
import Subscribe from './subscribe.vue';
import ImgVisa from '~/assets/images/visa.png'
import ImgMasterCard from '~/assets/images/master-card.png'
import ImgIPay from '~/assets/images/i-pay.png'
import ImgGpay from '~/assets/images/g-pay.png'
import ImgPaypal from '~/assets/images/pay-pal.png'


const itemsFooter = [
  {
    title: 'Company',
    content: ['About', 'Feature', 'Works', 'Career']
  },
  {
    title: 'Help',
    content: ['Customer Support', 'Delivery Details', 'Term & Conditions', 'Privacy Policy']
  },
  {
    title: 'FAQ',
    content: ['Account', 'Manage Deliveries', 'Orders', 'Payments']
  },
  {
    title: 'RESOURCES',
    content: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist']
  },
]

const itemsPayment = [
  {
    img: ImgVisa
  },
  {
    img: ImgMasterCard
  },
  {
    img: ImgGpay
  },
  {
    img: ImgIPay
  },
  {
    img: ImgPaypal
  },
]

</script>

<template>
  <Subscribe />
  <div class=" bg-[#F0F0F0] pt-[140px] relative">
    <div class="max-w-96 md:max-w-[78rem] my-0 mx-auto">
      <div class="flex justify-between items-start pb-[70px]">
        <div class="flex flex-col justify-start">
          <div class="justify-center text-black text-[33.45px] font-bold pb-6 -mt-2">SHOP.CO</div>
          <div class="max-w-[248px] justify-start text-black/60 text-sm font-normal leading pb-9">We have clothes that
            suits
            your style and which you’re proud to wear. From women to men.</div>
          <div class="flex gap-3">
            <Icon name="mdi:twitter-circle" style="color: #00000099" class="text-[20px]" />
            <Icon name="ic:round-facebook" style="color: #00000099" class="text-[20px]" />
            <Icon name="ri:instagram-fill" style="color: #00000099" class="text-[20px]" />
            <Icon name="mdi:github" style="color: #00000099" class="text-[20px]" />
          </div>
        </div>
        <div class="flex" v-for="item in itemsFooter">
          <div class="flex flex-col gap-4">
            <div class="text-lg">{{ item.title }}</div>
            <div class="text-[16px] text-black/60" v-for="value in item.content">
              {{ value }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between pb-[86px]">
        <div class="text-right justify-start text-black/60 text-sm font-normal">Shop.co © 2000-2023, All Rights Reserved</div>
        <div class="flex gap-1.5">
          <div v-for="item in itemsPayment">
            <img :src="item.img" alt="pay-img" class="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>