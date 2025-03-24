<template>
  <div class="w-full bg-[url(/bg-banner.png)] bg-cover h-[700px]">
    <div class="flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto">
      <div class="flex flex-col max-w-[50%] items-start justify-center pt-[103px] py-[116px]">
        <span class="font-bold text-4xl md:text-6xl mb-8 max-w-[577px] uppercase">Discover the Future of Tech</span>
        <span class="break-words text-[16px] text-[#00000099] mb-8">Explore our diverse collection of cutting-edge gadgets, designed to enhance your digital experience and cater to your tech-savvy lifestyle.</span>
        <!-- <button
          class="w-[210px] bg-black flex items-center justify-center text-white text-[16px] rounded-[62px] h-[52px] mb-12">Shop
          Now</button> -->
        <Button title="Shop now" custom-class="w-[210px] rounded-[62px]" @click="handleClickButton"/>
        <div class="flex divide-x divide-[#0000001A] w-full mt-5">
          <div class="flex flex-col pr-8">
            <span class="text-[40px]">200+</span>
            <span class="text-[16px] text-[#00000099]">International Brands</span>
          </div>
          <div class="flex flex-col  pr-8 pl-6">
            <span class="text-[40px]">2,000+</span>
            <span class="text-[16px] text-[#00000099]">International Brands</span>
          </div>
          <div class="flex flex-col  pr-8 pl-6">
            <span class="text-[40px]">30,000+</span>
            <span class="text-[16px] text-[#00000099]">International Brands</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/component/button/button.vue';

const handleClickButton = () => {
  navigateTo('/sale')
}
</script>