<template>
  <div class="w-full">
    <h1 class="text-black text-2xl font-bold text-start pb-4">Product details:</h1>
    <div class="border border-gray-200 rounded-[20px] py-12 px-5">
      <div class="flex flex-col -mt-5 max-w-[600px]">
      <h1 class="font-bold text-[40px] uppercase">{{ item.title }}</h1>
      <div class="flex gap-2 pt-2 pb-2 text-black/60"> Rating:
        <vue3starRatings v-model="item.rating" disableClick />
        {{ item.rating }}/<span class="text-[#00000066] -ml-1">5</span>
      </div>
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug pb-4">Description: <b>{{ item.description }}</b></div>
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug pb-4">Price: <b>${{formatCurrency(item.price) }}</b></div>
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug pb-4">Discount percentage: <b>{{ item.discountPercentage }}%</b></div>
      <div class="w-full justify-start text-black/60 text-base font-normal leading-snug">Minimum order quantity: <b>{{ item.minimumOrderQuantity }}</b></div>
      <div class="text-base font-normal text-[#00000066] pt-4">Category:
        <NuxtLink :to="`/${item.category}`">
          <b>{{ item.category }}</b>
        </NuxtLink>
      </div>
      <div class="text-base font-normal text-[#00000066] pb-4 pt-4">Availability status: <b>{{ item.availabilityStatus}}</b>, Stock: <b>{{ item.stock }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">
        <div class="flex">
          Depth:<b class="ml-2"> {{ item.dimensions.depth }} in</b>,
          Height:<b class="ml-2"> {{ item.dimensions.height }} in</b>,
          Width:<b class="ml-2"> {{ item.dimensions.width }} in</b>
        </div>
      </div>
      <div class="text-base font-normal text-[#00000066] pb-4">Return Policy: <b> {{ item.returnPolicy }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">Shipping Information: <b> {{ item.shippingInformation }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">Warranty Information: <b> {{ item.warrantyInformation }}</b></div>
      <div class="text-base font-normal text-[#00000066] pb-4">SKU: <b> {{ item?.sku }}</b></div>
      <div class="flex  items-center gap-1 text-base font-normal text-[#00000066] pb-4" >Tag:
        <b>{{ item.tags.join(', ')}}</b>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import vue3starRatings from "vue3-star-ratings";

defineProps({
  item: {type: Object, required: true,}
})
</script>