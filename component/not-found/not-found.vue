<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-1">
    <NuxtImg :src="ImgNotFoundProduct" />
    <div class="font-bold">We apologize for any inconvenience…</div>
    <div class="flex items-center gap-2">The result you are looking for does not exist. Please search for other results
      <Icon name="clarity:sad-face-line" style="color: black" class="text-[20px]"/>
    </div>
  </div>
</template>

<script setup>
import { NuxtImg } from '#components';
import ImgNotFoundProduct from '/product-not-found.png'
</script>