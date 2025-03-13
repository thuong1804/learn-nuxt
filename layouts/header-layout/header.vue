<script setup>
import { Icon } from '#components';
import Navbar from './navbar.vue';
import SearchBar from '~/component/searchbar.vue';
</script>

<template>
  <div class="bg-white py-6 md:py-9 z-40">
    <div class="flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto">
      <span class="text-[32px] font-bold">SHOP.CO</span>
      <Navbar />
      <SearchBar />
      <div class="flex gap-[14px]">
        <Icon name="ph:shopping-cart" style="color: black" class="text-[20px]" />
        <Icon name="ph:user-bold" style="color: black" class="text-[20px]"/>
      </div>
    </div>
  </div>
</template>