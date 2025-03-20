<template>
  <NuxtLink :to="`/product/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}-p-${item.id}`" class="flex flex-col items-start"
    v-for="item in itemProducts">
    <div class="border border-[#f0eeed]  rounded-[20px] px-4 py-4 w-full max-w-[300px]">
      <img :src="item.images[0]" class="w-full h-[300px] min-h-[300px] transition-all  hover:scale-105 object-contain" />
    </div>
    <div class="font-bold text-[16px] pb-2">{{ item.title }}</div>
    <div class="font-bold text-[16px] pb-2">{{ item.brand }}</div>
    <div class="flex">
      <Icon name="ph:star-duotone" style="color: #FFC633" class="text-[20px]" v-for="value in item.evaluate"
        :key="value" />
    </div>
    <div class="font-bold text-2xl flex items-center gap-2.5 pb-5">
      <div v-if="  item.discountPercentage && item.discountPercentage > 1" class="flex gap-2 items-center">
        <div class="text-[25px]">${{ calculateTotalDiscount(item).toFixed(2) }}</div>
        <div class="justify-center text-black/30 text-[25px] font-bold line-through">
          ${{ formatCurrency(item.price) }}
        </div>
        <div
          class="px-3.5 py-1.5 w-[58px] bg-[#FF33331A] text-red-500 flex items-center justify-center rounded-2xl text-[12px]">
          -{{Math.round(item.discountPercentage)}}%
        </div>
      </div>
      <div v-else class="justify-center text-black text-[25px] font-bold">
        ${{formatCurrency(item.price) }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { formatCurrency } from '#imports'
const props = defineProps({
  itemProducts: { type: Array, required: true }
})

const calculateTotalDiscount = ((item) => {
  const calculatePercentage = item.price * (item.discountPercentage / 100)
  return item.price - calculatePercentage
})


</script>