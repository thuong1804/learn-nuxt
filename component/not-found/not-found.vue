<template>
  <div class="w-full h-full flex flex-col items-center pb-[150px] gap-1">
    <NuxtImg :src="ImgNotFoundProduct" />
    <div class="font-bold">We apologize for any inconvenience…</div>
    <div class="flex items-center gap-2">The page you are looking for does not exist. Please return to the home page.
      <Icon name="clarity:sad-face-line" style="color: black" class="text-[20px]"/>
    </div>
    <button class="font-bold transition cursor-pointer active:scale-95 hover:bg-gray-800 w-max py-3 px-5 rounded-xl bg-[#507191] text-white flex justify-between items-center gap-2 mt-4"
    @click="navigateTo('/')"
    >
      Return home page
       <Icon name="streamline:return-2-solid" style="color: white" class="text-[12px]"/>
    </button>
  </div>
</template>

<script setup>
import { NuxtImg } from '#components';
import ImgNotFoundProduct from '/product-not-found.png'
</script>