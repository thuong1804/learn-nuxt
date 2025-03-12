<script setup>
import ImgCard1 from '@/assets/images/itemCard.png'
import ImgCard2 from '@/assets/images/itemCard2.png'
import ImgCard3 from '@/assets/images/itemCard3.png'
import ImgCard4 from '@/assets/images/itemCard4.png'
</script>

<template>
  <div class="flex flex-col items-center pt-[72px]">
    <h1 class="font-bold text-[48px] text-center pb-[55px]">TOP SELLING</h1>
    <div class="flex items-center justify-between max-w-96 md:max-w-[78rem] w-full pb-[36px]">
      <div class="flex flex-col items-start">
        <img :src="ImgCard1" class="rounded-[20px] pb-4" />
        <div class="font-bold text-[16px] pb-2">T-SHIRT WITH TAPE DETAILS</div>
        <div class="flex">
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
        </div>
        <div class="font-bold text-2xl">$120</div>
      </div>
      <div>
        <img :src="ImgCard2" class="rounded-[20px] pb-4" />
        <div class="font-bold text-[16px] pb-2">SKINNY FIT JEANS</div>
        <div class="flex">
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
        </div>
        <div class="font-bold text-2xl flex items-center gap-2.5">$120
          <span class="text-[#00000066]">$260</span>
          <div
            class=" h-[28px] w-[58px] bg-[#FF33331A] text-red-500 flex items-center justify-center rounded-2xl text-[12px]">
            -20%</div>
        </div>
      </div>
      <div>
        <img :src="ImgCard3" class="rounded-[20px] pb-4" />
        <div class="font-bold text-[16px] pb-2">CHECKERED SHIRT</div>
        <div class="flex">
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
        </div>
        <div class="font-bold text-2xl">$120</div>
      </div>
      <div>
        <img :src="ImgCard4" class="rounded-[20px] pb-4" />
        <div class="font-bold text-[16px] pb-2">SLEEVE STRIPED T-SHIRT</div>
        <div class="flex">
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
          <Icon name="ph:star-duotone" style="color: yellow" class="text-[20px]" />
        </div>
        <div class="font-bold text-2xl">$120</div>
      </div>
    </div>
    <button
      class="cursor-pointer w-[218px] h-[52px] border-[#0000001A] border rounded-[62px] flex justify-center items-center font-medium text-[16px]">View
      All
    </button>
  </div>
</template>