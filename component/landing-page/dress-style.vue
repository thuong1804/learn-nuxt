<script setup>
import ImgCasual from '@/assets/images/casual.png'
import ImgFormal from '@/assets/images/formal.png'
import ImgParty from '@/assets/images/party.png'
import ImgGym from '@/assets/images/gym.png'
</script>



<template>
  <div class="w-full flex flex-col items-center justify-center pt-[103px] pb-[127px]">
    <div class="max-w-96 md:max-w-[78rem] w-full bg-[#F0F0F0] rounded-[40px] pt-[70px] pb-1.5">
      <h1 class="font-bold text-[48px] text-center pb-[64px]">BROWSE BY DRESS STYLE</h1>
      <div class="flex flex-col gap-5">
        <div class="flex justify-center items-center gap-5">
          <img :src="ImgCasual" class="h-[289px] " />
          <img :src="ImgFormal" class="object-contain " />
        </div>
        <div class="flex justify-center items-center gap-5 ">
          <img :src="ImgParty" />
          <img :src="ImgGym" />
        </div>
      </div>
    </div>
  </div>
</template>